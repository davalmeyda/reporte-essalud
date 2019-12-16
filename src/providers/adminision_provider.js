
// IMPORTAMOS EL QUERY QUE COMVERTIRA EL CUERPO DEL POST PARA ENVIARLO POR AXIOS
import qs from 'querystring';
import axios from 'axios';
// CONVERTIDOR DE CSV A JSON
import papaparse from 'papaparse';

class AdmisionProvider {

    suma = (lista, columna) => {
        let suma = 0;
        lista.forEach(d => {
            suma += parseInt(d[columna]) || 0;
        });
        return suma;
    }

    mayor = (lista, columna, ref) => {
        let r = 0;
        let mayor = "";
        lista.forEach(d => {
            if (parseInt(d[ref]) > r) {
                r = parseInt(d[ref]);
                mayor = d[columna];
            }
        });
        return mayor;
    }

    fechaMayor = (lista, columna, fecha) => {

        // let fechamayor = "";
        // lista.forEach(d=>{
        //     if(d[HOR_INICIO]<)
        // });


    }

    _traerdatos = async (parametros, url) => {
        const resp = await axios.post(url,
            qs.stringify(parametros), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true,

        }).catch(function (error) {
            console.log(error);
        });

        const txt = resp.data.split("|")[4];
        console.log(txt);

        const resp1 = await axios.get(`${url}_descarga&fn=${txt}`);
        // DATA EN BRUTO
        console.log(resp1.data);
        // CONVIRTIENDO A JSON
        const result = papaparse.parse(resp1.data, {
            delimiter: "|",
            header: true,
        });
        const data = result.data;
        // ARCHIVO JSON
        console.log(data);

        return data;
    }

    citasPorServicios = async (fechaFin, fechaInicio) => {
        const url = '/explotacionDatos/servlet/CtrlControl?opt=adm13_xls';
        const parametros = {
            CAS: 822,
            ORIGEN: 2,
            fechaFin,
            fechaInicio,
            formatoArchivo: 'xls',
            servicio: '00',
        }
        return this._traerdatos(parametros, url);
    }

    programacionMedicos = async (fechaFin, fechaInicio) => {
        const url = '/explotacionDatos/servlet/CtrlControl?opt=adm119_xls';
        const parametros = {
            CAS: 822,
            ORIGEN: 2,
            area: '00',
            fechaFin,
            fechaInicio,
            formatoArchivo: 'xls',
            servicio: '00',
        }
        return this._traerdatos(parametros, url);
    }

    gadgetProgramacionMedicos = async () => {

        let fecha = new Date(Date.now()).toLocaleDateString();

        // PRUEBAS CON PROGRAMACION        
        const programacion = await this.programacionMedicos(fecha, fecha);

        // ELIMINAMOS LA ULTIMA FILA
        programacion.splice(programacion.length - 1, 1);
        console.log(programacion);

        // SEPARAMOS POR CONSULTORIOS Y CONVERTIMOS LAS HORAS
        const dataAreas = [];
        let servicios = [];
        let servicio = "";
        let inicial = true;
        programacion.forEach((x, i) => {
            // CONVERTIMOS LAS HORAS A ENTEROS PARA MANIPULARLO MEJOR
            x['HOR_INICIO'] = parseInt(x['HOR_INICIO'].split(':')[0]);
            x['HOR_FIN'] = parseInt(x['HOR_FIN'].split(':')[0]);
            if (x['SERVICIO'] === servicio && x['ESTADO_PROGRAMACION'] === 'APROBADA') {
                console.log(x['ESTADO_PROGRAMACION']);
                servicios.push(x);
            } else {
                if (inicial && x['ESTADO_PROGRAMACION'] === 'APROBADA') {
                    servicio = x['SERVICIO'];
                    servicios.push(x);
                    inicial = false;
                } else if (x['ESTADO_PROGRAMACION'] === 'APROBADA') {
                    const ss = servicios
                    dataAreas.push(ss);
                    servicios = [];
                    servicio = x['SERVICIO'];
                    servicios.push(x);
                }
            }
            if (i === programacion.length - 1) {
                const ss = servicios
                dataAreas.push(ss);
            }
        });

        console.log(dataAreas);

        // TOMAMOS MAYOR Y EL MENOR DE LAS HORAS
        dataAreas.forEach(x => {
            x.sort((a, b) => a['HOR_INICIO'] - b['HOR_INICIO']);
        });



        const data1 = dataAreas.map((x, i) => {
            let item;
            // inicio        
            item = {
                id: (i + 1) * 15,
                text: x[0]['SERVICIO'],
                start_date: `2019-12-16 ${x[0]['HOR_INICIO']}:00`,
                duration: x[x.length - 1]['HOR_FIN'] - x[0]['HOR_INICIO'],
                open: false,
            }
            return item;
        });

       

        return data1;
    }




}

export default AdmisionProvider;