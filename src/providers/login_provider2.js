// IMPORTAMOS EL QUERY QUE COMVERTIRA EL CUERPO DEL POST PARA ENVIARLO POR AXIOS
import qs from 'querystring';
import axios from 'axios';

// DATOS DE INICIO DE SESION CON SUCURSAL

async function loginProvider  (pws, uname) {
    const cas = {
        PASS: pws,
        USER: uname,
        centroAsistencial: 822,
        opt: 0,
        upd: 'indexCas',
    }

    const resp = await axios.post('/explotacionDatos/servlet/Index',
        qs.stringify(cas),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            withCredentials: true,

        }).catch(function (error) {
            // CARGA EL ERROR
        });
    console.log(resp);
}

export default loginProvider;
