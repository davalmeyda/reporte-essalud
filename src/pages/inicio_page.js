import React, { Component } from 'react';
// IMPORTAR PROVIDERS
import AdmisionProvider from '../providers/adminision_provider';
import TimelineBloque from './bloques/timeline_bloque';

// PDF
import { PDFReader } from 'reactjs-pdf-reader';

class InicioPage extends Component {
    state = {
        citasPorServicios: [],
        pacientesCitados: [],
        pdf: '',
    }

    admisionProvider = new AdmisionProvider();

    gadgetCitasPorServicios = async () => {
        let fecha = new Date(Date.now()).toLocaleDateString();
        this.setState({
            citasPorServicios: await this.admisionProvider.citasPorServicios(fecha, fecha),
        });
    }

    gadgetPacientesCitados = async () => {

        this.setState({
            pacientesCitados: await this.admisionProvider.gadgetPacientesCitados(),
        });
        console.log(this.state.pacientesCitados);

    }

    obtenerPDF = async () => {

        let base64data;
        let data = '';
        const blob = await this.admisionProvider.obtenerPDFDiferimiento();
        var reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
            base64data = reader.result;
            data = base64data.split(',')[1];
            this.setState({
                pdf: data,
            });
        }
    }

    segmento = () => {

        const gadget = [];

        const pacientesCitados = this.state.pacientesCitados;
        pacientesCitados.forEach((x, i) => {
            gadget.push(
                <div key={i} className="col-md-4 col-xl-3">
                    <div className="card mb-3 widget-content">
                        <div className="widget-content-outer">
                            <div className="widget-content-wrapper">
                                <div className="widget-content-left">
                                    <div className="widget-heading">
                                        {
                                            x[0]['SERVICIO']
                                        }
                                    </div>
                                    <div className="widget-subheading">
                                        De un total de
                                        {
                                            " " + this.admisionProvider.suma3(x)
                                        }
                                    </div>
                                </div>
                                <div className="widget-content-right">
                                    <div className="widget-numbers text-success m-2">
                                        {
                                            this.admisionProvider.suma2(x)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="row">
                <div className="col-md-12 col-xl-12 ml-3 mb-4 card-header card-title">
                    <div className="card-header-title">
                        <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                        CITAS ATENDIDAS EN EL DIA
                        </div>
                </div>
                {gadget}
            </div>
        )
    }


    cont = true;

    render() {
        if (this.cont === true) {
            this.gadgetCitasPorServicios();
            this.gadgetPacientesCitados();
            this.obtenerPDF();
            this.cont = false;
        }
        return (
            <div className="app-main__inner">
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                            <div className="page-title-icon">
                                <i className="pe-7s-rocket icon-gradient bg-mean-fruit">
                                </i>
                            </div>
                            <div>Panel de Control
                                <div className="page-title-subheading">Reporte General
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-xl-12 ml-3 mb-4 card-header card-title">
                        <div className="card-header-title">
                            <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                            CITAS GENERADAS POR ADMISION Y ESSALUD EN LINEA
                        </div>
                    </div>
                    {/* ETIQUETAS */}
                    <div className="col-md-6 col-xl-3">
                        <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span>
                                        {
                                            this.admisionProvider.suma(this.state.citasPorServicios, 'VOLUNTARIAS')
                                        }
                                    </span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">CITAS VOLUNTARIAS</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">
                                        {
                                            this.admisionProvider.mayor(this.state.citasPorServicios, 'SERVICIO', 'VOLUNTARIAS')
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span>
                                        {
                                            this.admisionProvider.suma(this.state.citasPorServicios, 'RECITAS')
                                        }
                                    </span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">RECITAS</div>
                                    <div className="widget-subheading">
                                    </div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">
                                        {
                                            this.admisionProvider.mayor(this.state.citasPorServicios, 'SERVICIO', 'RECITAS')
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="card mb-3 widget-content bg-grow-early">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span>
                                        {
                                            this.admisionProvider.suma(this.state.citasPorServicios, 'INTERCONSULTAS')
                                        }
                                    </span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">INTERCONSULTAS</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">
                                        {
                                            this.admisionProvider.mayor(this.state.citasPorServicios, 'SERVICIO', 'INTERCONSULTAS')
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3">
                        <div className="card mb-3 widget-content bg-premium-dark">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span>
                                        {
                                            this.admisionProvider.suma(this.state.citasPorServicios, 'ESSAENLINEA')
                                        }
                                    </span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">ESSALUD EN LINEA</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">
                                        {
                                            this.admisionProvider.mayor(this.state.citasPorServicios, 'SERVICIO', 'ESSAENLINEA')
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------- */}
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="mb-3 card">
                            <div className="card-header-tab card-header-tab-animation card-header">
                                <div className="card-header-title">
                                    <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                    Programacion de Médicos Del dia
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tabs-eg-77">
                                        <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                            <div className="widget-chat-wrapper-outer">
                                                <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                    <TimelineBloque></TimelineBloque>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        this.segmento()
                    }
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="mb-3 card">                            
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tabs-eg-77">
                                        <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                            <div className="widget-chat-wrapper-outer">
                                                <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                    {/* CONTENIDO */}
                                                    {this.state.pdf === '' ? <div></div> : (
                                                        <div style={{ overflow: 'scroll', height: 600 }}>
                                                            <PDFReader scale={1.3} data={atob(this.state.pdf)} />
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default InicioPage;