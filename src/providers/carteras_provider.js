// CONVERTIDOR DE CSV A JSON
import papaparse from 'papaparse';
// PROVIDERS
import dashboarProvider from './dashboard_provider';
import HerramientasProviders from './herramientas_providers';
import ConexionesProvider from './conexiones_provider';

import PlantillasModel from '../models/pantillas_model';

class CarterasProviders {
    
    herramientasProviders = new HerramientasProviders();
    adminisionProvider = new dashboarProvider();
    conexionesProvider = new ConexionesProvider();

    // TRAEMOS LA DATA DE LOS ASEGURADOS
    traerAsegurados = async () => {
        let data;
        await fetch('/data.csv')
            .then((r) => r.text())
            .then(text => {
                // CONVIRTIENDO A JSON
                const result = papaparse.parse(text, {
                    delimiter: ";",
                    header: true,
                });
                data = result.data;
            });
        // ELIMINAR ULTIMA FILA
        data.splice(data.length - 1, 1);

        // ORDENAMOS LA INFORMACION 
        data = this.herramientasProviders.ordenarArray(data, 'NRO_DOC');

        // ARCHIVO JSON
        return data;
    }

    traerAtendidos = async (fechaInicio) => {
        const fecha = new Date(Date.now()).toLocaleDateString();
        const url = '/explotacionDatos/servlet/CtrlControl?opt=atenPrim_11_1_xls';
        const parametros = {
            CAS: 822,
            ORIGEN: 2,
            cartera: '00',
            fechaFin: fecha,
            fechaInicio,
            formatoArchivo: 'xls',
        }
        let atendidos = await this.conexionesProvider._traerdatosExplota(parametros, url);
        // ELIMINAR ULTIMA FILA
        atendidos.splice(atendidos.length - 1, 1);

        // ORDENAMOS LA INFORMACION 
        atendidos = this.herramientasProviders.ordenarArray(atendidos, 'NUM_DOC');

        return atendidos;
    }

    comparacionReporteCartera = async () => {
        let atendidos = await this.traerAtendidos('01/12/2019');
        const asegurados = await this.traerAsegurados();

        // QUITAMOS LAS CARTERAS DE OTROS AÑOS        
        const a = [];
        atendidos.forEach(d => {
            const carterasAño = (d['COD_CARTERA'] === 'B4' || d['COD_CARTERA'] === 'C1' || d['COD_CARTERA'] === 'C2' || d['COD_CARTERA'] === 'C3' || d['COD_CARTERA'] === 'G1' || d['COD_CARTERA'] === 'B1' || d['COD_CARTERA'] === 'B2' || d['COD_CARTERA'] === 'B3');
            if (carterasAño) {
                a.push(d);
            }
        });
        atendidos = a;

        // AGRUPAMOS ARRAY POR DNI
        const atendidosAgrupados = this.herramientasProviders.agruparArrayValorColumna(atendidos, 'NUM_DOC');
        console.log(atendidosAgrupados);
        console.log(asegurados);

        const siAtendidos = [];
        const noAtendidos = [];
        const resultado = [];

        asegurados.forEach(d => {
            let agregado = false;
            atendidosAgrupados.forEach((x, i) => {
                if (x[0]['NUM_DOC'] === d['NRO_DOC']) {
                    siAtendidos.push(d);
                    agregado = true;
                } else if (atendidosAgrupados.length - 1 === i && !agregado) {
                    noAtendidos.push(d);
                }
            })
        });

        resultado.push(noAtendidos);
        resultado.push(atendidosAgrupados);


        console.log(siAtendidos);
        console.log(noAtendidos);

        // const siAtendidos2 = [];
        // const noAtendidos2 = [];

        // atendidosAgrupados.forEach(d => {
        //     let agregado = false;
        //     asegurados.forEach((x, i) => {
        //         if (d[0]['NUM_DOC'] === x['NRO_DOC']) {
        //             siAtendidos2.push(d);
        //             agregado = true;
        //         } else if (asegurados.length - 1 === i && !agregado) {
        //             noAtendidos2.push(d);
        //         }
        //     })
        // });

        // console.log(siAtendidos2);
        // console.log(noAtendidos2);


        return resultado;
    }

    llenarPlantilla = async (data) => {

        
        const B1 = [];
        const B2 = [];
        const B3 = [];
        const B4 = [];
        const C1 = [];
        const C2 = [];
        const C3 = [];
        const G1 = [];

        // SEPARAMOS POR CARTERAS
        data.forEach(d => {
            if (d[0]['COD_CARTERA'] === 'B1') {
                B1.push(d);
            } else if (d[0]['COD_CARTERA'] === 'B2') {
                B2.push(d);
            } else if (d[0]['COD_CARTERA'] === 'B3') {                
                const plantilla5A12 = new PlantillasModel().plantilla5A12;                
                d.forEach(x => {
                    plantilla5A12.documento = x['NUM_DOC'];
                    plantilla5A12.nombre = x['APELLNOMBRE'];
                    plantilla5A12.edad = x['EDAD'];
                    plantilla5A12['FECHA_APERTURA'] = x['FECHA_APERTURA'];
                    plantilla5A12[(x['COD_PROC'] + '-' + x['CONTROL'])]  = 'ok';
                    plantilla5A12[(x['COD_PROC'] + '-' + x['CONTROL'] + '-F')]  = x['FECHORAREG'];
                });
                B3.push(plantilla5A12);

            } else if (d[0]['COD_CARTERA'] === 'B4') {
                B4.push(d);
            } else if (d[0]['COD_CARTERA'] === 'C1') {
                C1.push(d);
            } else if (d[0]['COD_CARTERA'] === 'C2') {
                C2.push(d);
            } else if (d[0]['COD_CARTERA'] === 'C3') {
                C3.push(d);
            } else if (d[0]['COD_CARTERA'] === 'G1') {
                G1.push(d);
            }
        });
        const separado = { B1, B2, B3, B4, C1, C2, C3, G1 };
        console.log(separado);

    }

}
export default CarterasProviders;