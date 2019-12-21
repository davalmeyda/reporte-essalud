
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

    suma2 = (lista) => {
        let suma = 0;
        lista.forEach(d => {
            if (d['ESTADO_CITA'] === 'ATENDIDA') {
                suma += 1;
            }
        });
        return suma;
    }

    suma3 = (lista) => {
        let suma = 0;
        lista.forEach(d => {
            suma += 1;
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

    obtenerPDFDiferimiento = async () => {
        const url = '/sgssgxreport/servlet/orptdifercitas?2,822,01,,,,20191201,20191218,1';
        return await this._traerdatosSGSS('a', url);
    }

    _traerdatosSGSS = async (parametros, url) => {
        const resp = await axios.get(url,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,
                responseType: 'blob',
            }).catch(function (error) {
                console.log(error);
            });
        const blob = resp.data;
        console.log(blob);

        return blob;
    }

    _traerdatosExplota = async (parametros, url) => {
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

    pacientesCitados = async (fechaFin, fechaInicio) => {
        const url = '/explotacionDatos/servlet/CtrlControl?opt=adm116_xls';
        const parametros = {
            CAS: 822,
            ORIGEN: 2,
            fechaFin,
            fechaInicio,
            formatoArchivo: 'xls',
            servicio: '00',
            subactividad: '00',
            tipoDocumento: '00',
            actividad: '00',
        }
        return this._traerdatosExplota(parametros, url);
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
        return this._traerdatosExplota(parametros, url);
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
        return this._traerdatosExplota(parametros, url);
    }

    gadgetPacientesCitados = async () => {

        let fecha = new Date(Date.now()).toLocaleDateString();
        // let fecha = '17/12/2019';

        // PRUEBAS CON PROGRAMACION        
        const citados = await this.pacientesCitados(fecha, fecha);

        // ELIMINAMOS LA ULTIMA FILA
        citados.splice(citados.length - 1, 1);
        // ORDENAMOS LA INFORMACION 
        citados.sort((a, b) => {
            if (a.SERVICIO > b.SERVICIO) {
                return 1;
            }
            if (a.SERVICIO < b.SERVICIO) {
                return -1;
            }
            // SI SON IGUALES
            return 0;

        });
        console.log(citados);

        // SEPARAMOS POR CONSULTORIOS
        const dataAreas = [];
        let servicios = [];
        let servicio = "";
        let inicial = true;
        citados.forEach((x, i) => {
            // CONVERTIMOS LAS HORAS A ENTEROS PARA MANIPULARLO MEJOR           
            if (x['SERVICIO'] === servicio) {
                servicios.push(x);
            } else {
                if (inicial) {
                    servicio = x['SERVICIO'];
                    servicios.push(x);
                    inicial = false;
                } else {
                    const ss = servicios
                    dataAreas.push(ss);
                    servicios = [];
                    servicio = x['SERVICIO'];
                    servicios.push(x);
                }
            }
            if (i === citados.length - 1) {
                const ss = servicios
                dataAreas.push(ss);
            }
        });
        return dataAreas;
    }


    gadgetProgramacionMedicos = async () => {

        let fecha = new Date(Date.now()).toLocaleDateString();
        const fff = new Date();

        let day = fff.getDate()
        let month = fff.getMonth() + 1
        let year = fff.getFullYear()

        // PRUEBAS CON PROGRAMACION        
        const programacion = await this.programacionMedicos(fecha, fecha);

        // ELIMINAMOS LA ULTIMA FILA
        programacion.splice(programacion.length - 1, 1);
        // ORDENAMOS LA INFORMACION 
        programacion.sort((a, b) => {
            if (a.SERVICIO > b.SERVICIO) {
                return 1;
            }
            if (a.SERVICIO < b.SERVICIO) {
                return -1;
            }
            // SI SON IGUALES
            return 0;

        });
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

        // ORDENAMOS MAYOR Y EL MENOR DE LAS HORAS
        dataAreas.forEach(x => {
            x.sort((a, b) => a['HOR_INICIO'] - b['HOR_INICIO']);
        });

        let index;
        let parent;
        const data1 = [];
        let color = '#28a745';
        // const colores = ['green', 'red', 'blue'];
        dataAreas.forEach((x, i) => {
            let item;
            let item1;
            let inicio = false;
            // inicio

            const mayor = this.mayor(x, 'HOR_FIN', 'HOR_FIN');

            x.forEach((xx, ii) => {
                index = (i + 1) * 100 + ii;


                if (ii === 0) {
                    parent = index;
                    // color = "#" + ((1 << 24) * Math.random() | 0).toString(16);
                    item = {
                        id: index,
                        text: x[0]['SERVICIO'],
                        start_date: `${year}-${month}-${day} ${x[0]['HOR_INICIO']}:00`,
                        duration: mayor - x[0]['HOR_INICIO'],
                        open: false,
                        color,
                    }
                    item1 = {
                        id: index + 1,
                        text: xx['PROFESIONAL'],
                        start_date: `${year}-${month}-${day} ${xx['HOR_INICIO']}:00`,
                        duration: xx['HOR_FIN'] - xx['HOR_INICIO'],
                        parent: parent,
                        color,
                    }
                    inicio = true;
                } else {
                    item = {
                        id: index + 1,
                        text: xx['PROFESIONAL'],
                        start_date: `${year}-${month}-${day} ${xx['HOR_INICIO']}:00`,
                        duration: xx['HOR_FIN'] - xx['HOR_INICIO'],
                        parent: parent,
                        color,
                    }
                    inicio = false;
                }
                data1.push(item);
                if (inicio) {
                    data1.push(item1);
                }
            });
        });


        console.log(data1);
        return data1;
    }




}

export default AdmisionProvider;