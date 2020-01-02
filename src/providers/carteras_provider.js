// CONVERTIDOR DE CSV A JSON
import papaparse from 'papaparse';
// PROVIDERS
import dashboarProvider from './dashboard_provider';
import HerramientasProviders from './herramientas_providers';
import ConexionesProvider from './conexiones_provider';

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
        const fecha = this.herramientasProvider.fechaActual();
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
        let atendidos = await this.traerAtendidos('01/10/2019');
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

        return resultado;
    }

    llenarPlantilla = async (data, todasCarteras) => {

        const B1 = [];
        const B2 = [];
        const B3 = [];
        const B4 = [];
        const C1 = [];
        const C2 = [];
        const C3 = [];
        const G1 = [];

        const ll = (plantilla, d) => {
            d.forEach(x => {
                plantilla.documento = x['NUM_DOC'];
                plantilla.nombre = x['APELLNOMBRE'];
                plantilla.edad = x['EDAD'];
                plantilla.sexo = x['SEXO'];
                plantilla['FECHA_APERTURA'] = x['FECHA_APERTURA'];
                plantilla[(x['COD_PROC'] + '-' + x['CONTROL'])] = 'ok';
                plantilla[(x['COD_PROC'] + '-' + x['CONTROL'] + '-F')] = x['FECHORAREG'];
            });
        }

        // SEPARAMOS POR CARTERAS
        data.forEach(d => {
            if (d[0]['COD_CARTERA'] === 'B1') {
                const plantilla = {};
                ll(plantilla, d);
                B1.push(plantilla);
            } else if (d[0]['COD_CARTERA'] === 'B2') {
                const plantilla = {};
                ll(plantilla, d);
                B2.push(plantilla);
            } else if (d[0]['COD_CARTERA'] === 'B3') {
                const plantilla = {};
                ll(plantilla, d);
                B3.push(plantilla);
            } else if (d[0]['COD_CARTERA'] === 'B4') {
                const plantilla = {};
                ll(plantilla, d);
                B4.push(plantilla);
            } else if (d[0]['COD_CARTERA'] === 'C1') {
                const plantilla = {};
                ll(plantilla, d);
                C1.push(plantilla);
            } else if (d[0]['COD_CARTERA'] === 'C2') {
                const plantilla = {};
                ll(plantilla, d);
                C2.push(plantilla);
            } else if (d[0]['COD_CARTERA'] === 'C3') {
                const plantilla = {};
                ll(plantilla, d);
                C3.push(plantilla);
            } else if (d[0]['COD_CARTERA'] === 'G1') {
                const plantilla = {};
                ll(plantilla, d);
                G1.push(plantilla);
            }
        });
        const separado = { B1, B2, B3, B4, C1, C2, C3, G1 };
        console.log(separado);

        const title = {
            title: 'NOMBRE',
            field: 'nombre'
        }
        const documento = {
            title: 'DOCUMENTO',
            field: 'documento'
        }
        const edad = {
            title: 'EDAD',
            field: 'edad'
        }

        // LLENAMOS PLANTILLAS
        console.log(todasCarteras);
        const aaa = {};
        for (const key in todasCarteras) {
            const bbb = []
            for (const kk in todasCarteras[key]) {
                const aa = {}
                aa['title'] = kk;
                aa['field'] = kk;
                bbb.push(aa);
            }
            bbb.unshift(documento, title, edad);
            aaa[key] = bbb;
        }
        console.log(aaa);
        return [aaa, separado]
    }

}
export default CarterasProviders;