import React, { Component } from 'react';

import CarterasProviders from '../providers/carteras_provider';
import TablaBloque from './bloques/graficos/tabla/tabla_bloque';
import ConfiguracionProvider from '../providers/configuracion_provider';


class CarterasPage extends Component {
    state = {
        pacientesSinCartera: 0,
        pacientesConCartera: 0,
        todasCarteras: []
    }
    carterasProviders = new CarterasProviders();
    cofiguracionProvider = new ConfiguracionProvider();    

    refDiv = React.createRef();

    componentDidMount = async () => {

        const todasCarteras = await this.cofiguracionProvider.traerTodasCarteras();
        const data = await this.carterasProviders.comparacionReporteCartera();
        const data2 = await this.carterasProviders.llenarPlantilla(data[1], todasCarteras);
        const pacientesConCartera = data[1].length;
        const pacientesSinCartera = data[0].length;
        this.setState({
            pacientesConCartera,
            pacientesSinCartera,
            todasCarteras: data2,
        });
    }

    render() {
        return (
            <div className="app-main__inner">
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                            <div className="page-title-icon">
                                <i className="fa fa-database icon-gradient bg-mean-fruit">
                                </i>
                            </div>
                            <div>
                                Carteras
                                <div className="page-title-subheading">Reporte General
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xl-12">
                        <div className="mb-4 card-header card-title">
                            <div className="card-header-title">
                                RESUMEN
                        </div>
                        </div>
                    </div>
                    {/* ETIQUETAS */}
                    <div className="col-md-6 col-xl-6">
                        <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span>
                                        {
                                            this.state.pacientesSinCartera
                                        }
                                    </span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">PACIENTES SIN CARTERA</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">
                                        SEGUN BASE DE DATOS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-6">
                        <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span>
                                        {
                                            this.state.pacientesConCartera
                                        }
                                    </span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">PACIENTES CON CARTERA APERTURADA</div>
                                    <div className="widget-subheading">
                                    </div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">
                                        REGISTRADOS EN SGSS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------- */}
                </div>
                <div ref={this.refDiv} className="main-card mb-3 card">
                    <div className="card-body">
                        {this.state.todasCarteras.length > 0 ? <TablaBloque ancho={{ maxWidth: ((this.refDiv.current.clientWidth - 60) + 'px') }} data={this.state.todasCarteras[1]['B1']} columns={this.state.todasCarteras[0]['B1-F']} titulo='NIÑOS MENORES DE 1 AÑO'></TablaBloque> : 'cargando...'}
                    </div>
                </div>
            </div>
        );
    }
}
export default CarterasPage;