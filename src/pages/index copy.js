import React, { Component } from 'react';
// IMPORTAMOS EL QUERY QUE COMVERTIRA EL CUERPO DEL POST PARA ENVIARLO POR AXIOS
import qs from 'querystring';
import axios from 'axios';
import AdmisionProvider from '../providers/adminision_provider';


class IndexPage extends Component {
    state = {
        data:"",
    }

  
    llenarDatos = async () => {


        const adminisionProvider = new AdmisionProvider();

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

        const resp = await axios.post('/explotacionDatos/servlet/CtrlControl?opt=hrefectivas_xls',
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

        const resp1 = await axios.get(`/explotacionDatos/servlet/CtrlControl?opt=hrefectivas_xls_descarga&fn=${txt}`);
        this.setState({
            data: resp1,
        });

        adminisionProvider.citasPorServicios();

    }

    componentDidMount() {
        this.llenarDatos();
    }

    render() {
        return (
            <h1>
                <p>{this.state.data.data}</p>
            </h1>
        );
    }
}

export default IndexPage;