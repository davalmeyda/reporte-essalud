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
        const atendidos = await this.traerAtendidos('01/12/2019');
        const asegurados = await this.traerAsegurados();

        // SERPARAMOS ARRAY POR DNI
        const atendidosAgrupados = this.herramientasProviders.agruparArrayValorColumna(atendidos, 'NUM_DOC');
        console.log(atendidosAgrupados);
        console.log(asegurados);

        const siAtendidos = [];
        const noAtendidos = [];

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

        console.log(siAtendidos);
        console.log(noAtendidos);

        const siAtendidos2 = [];
        const noAtendidos2 = [];

        atendidosAgrupados.forEach(d => {
            let agregado = false;
            asegurados.forEach((x, i) => {
                if (d[0]['NUM_DOC'] === x['NRO_DOC']) {
                    siAtendidos2.push(x);
                    agregado = true;
                } else if (asegurados.length - 1 === i && !agregado) {
                    noAtendidos2.push(x);
                }
            })
        });
        
        console.log(siAtendidos2);
        console.log(noAtendidos2);
    }
}
export default CarterasProviders;