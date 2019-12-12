// IMPORTAMOS EL QUERY QUE COMVERTIRA EL CUERPO DEL POST PARA ENVIARLO POR AXIOS
import qs from 'querystring';
import axios from 'axios';
// CONVERTIDOR DE CSV A JSON
import papaparse from 'papaparse';
// IMPORTACION DE MODELOS
import CitasPorServiciosModel from '../model/admision/CitasPorServicios_model';

class AdmisionProvider {

    citasPorServicios = async () => {

        // PARAMETROS 
        const parametros = {
            CAS: 822,
            ORIGEN: 2,
            fechaFin: '05/12/2019',
            fechaInicio: '10/10/2019',
            formatoArchivo: 'xls',
            servicio: '00',
        }

        const resp = await axios.post('/explotacionDatos/servlet/CtrlControl?opt=adm13_xls',
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

        const resp1 = await axios.get(`/explotacionDatos/servlet/CtrlControl?opt=adm13_xls_descarga&fn=${txt}`);
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
        // AGREGANDO EL JSON A MI MODELO
        const list = data.map((d) => {
            const citasPorServiciosModel = new CitasPorServiciosModel();
            citasPorServiciosModel.fromJson(d)
            return citasPorServiciosModel;
        })
        console.log(list);
        return list;
    }

}

export default AdmisionProvider;