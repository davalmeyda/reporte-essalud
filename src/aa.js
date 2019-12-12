import React, { Component } from 'react';
// IMPORTAMOS EL QUERY QUE COMVERTIRA EL CUERPO DEL POST PARA ENVIARLO POR AXIOS
import qs from 'querystring';
import axios from 'axios';

class PersonList extends Component {
    state = {
    }

    componentDidMount() {

        // DATOS DE INICIO DE SESION
        const sesion = {
            PASS: 'Khronos92',
            Submit: 'Ingresar',
            USER: 47813783,
            opt: 0,
            upd: 'index',
        }

        axios.post('/explotacionDatos/servlet/Index',
            qs.stringify(sesion),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,
            }).then(function (response) {
                // CARGA LA RESPUESTA
            }).catch(function (error) {
                // CARGA EL ERROR
            });

        // DATOS DE INICIO DE SESION CON SUCURSAL
        const cas = {
            PASS: 'Khronos92',
            USER: 47813783,
            centroAsistencial: 822,
            opt: 0,
            upd: 'indexCas',
        }

        axios.post('/explotacionDatos/servlet/Index',
            qs.stringify(cas),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },

                withCredentials: true,

            }).then(function (response) {
                // CARGA LA RESPUESTA
            }).catch(function (error) {
                // CARGA EL ERROR
            });


        // PARAMETROS 
        const parametros = {
            CAS: 822,
            ORIGEN: 2,
            actividad: '00',
            fechaFin: '05/12/2019',
            fechaInicio: '10/10/2019',
            formatoArchivo: 'xls',
            servicio: '00',
            subactividad: '00',
            tipoDocumento: '00',
            tipoProg: '00',
        }

        axios.post('/explotacionDatos/servlet/CtrlControl?opt=hrefectivas_xls',
            qs.stringify(parametros),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                withCredentials: true,

            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.cookie);
        return (
            <ul>
                <h1>HOla</h1>
            </ul>
        )
    }
}

export default PersonList;