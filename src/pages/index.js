import React, { Component } from 'react';

import AdmisionProvider from '../providers/adminision_provider';
import TablasProvider from '../providers/tablas_provider';

class IndexPage extends Component {

    state = {
        data: [],
    }

    llenarDatos = async () => {
        const adminisionProvider = new AdmisionProvider();
        this.setState({
            data: await adminisionProvider.citasPorServicios(),
        }, (() => {
            // EJECUTAR DESPUES            
        }));
    }

    componentDidMount() {
        this.llenarDatos();
    }

    tabla = (tipo) => {
        const tablasProvider = new TablasProvider();
        if (tipo === "titulo") {
            return tablasProvider.tablaTitulo(this.state.data)
        }
        else {
            return tablasProvider.tablaCuerpo(this.state.data)
        }
    }

    render() {
        return (
            <h1>
                <table>
                    <thead>
                        <tr>
                            {
                                this.tabla('titulo')
                            }
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.tabla('cuerpo')
                        }

                    </tbody>
                </table>
            </h1>
        );
    }
}

export default IndexPage;