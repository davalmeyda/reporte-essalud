import React, { Component } from 'react';
import TablaBloque from './bloques/graficos/tabla/tabla_bloque';

import ConfiguracionProvider from '../providers/configuracion_provider';

class ConfiguracionPage extends Component {

    state = {
        data: [],
        carteras: [],
    }

    configuracionProvider = new ConfiguracionProvider();

    refCodigo = React.createRef();
    refDescripcion = React.createRef();

    refCarteras = React.createRef();
    refTemporal = React.createRef();

    // DATOS DE LA TABLA
    columns = [
        { title: "CÓDIGO", field: "codigo" },
        { title: "DESCRIPCIÓN", field: "descripcion" },
    ]
    titulo = 'PROCEDIMIENTOS'

    //-------------------------------------
    agregarProcedimiento = (e) => {
        e.preventDefault();
        const codigo = this.refCodigo.value;
        const descripcion = this.refDescripcion.value;
        this.configuracionProvider.agregarProcedimiento(codigo, descripcion);
    }

    eliminarProcedimiento = (valor) => {
        this.configuracionProvider.eliminarProcedimiento(valor);
    }

    editarProcedimiento = (anterior, nuevo) => {
        this.configuracionProvider.editarProcedimiento(anterior, nuevo);
    }

    componentDidMount = async () => {
        this.setState({
            data: await this.configuracionProvider.traerProcedimientos(),
        })
    }

    agregarTemporal = () => {
        const temporal = this.refCarteras.current.selectedOptions;
        const carteras = this.state.carteras
        const result = [];
        this.state.data.forEach(d => {
            for (let x of temporal) {
                if (d.codigo === x.label) {
                    result.push(d);
                }
            }
        });
        let result2 = [];
        result.forEach(d => {
            let existe = false;
            if (carteras.length > 0) {
                carteras.forEach((x, i) => {
                    if (d.codigo === x.codigo) {
                        existe = true;
                    } else if (!existe && carteras.length - 1 === i) {
                        result2.push(d);
                    }
                });
            } else {
                result2 = result;
            }

        });

        this.setState({
            carteras: [...carteras, ...result2]
        })
    }
    quitarTemporal = () => {
        const temporal = this.refTemporal.current.selectedOptions;
        const carteras = this.state.carteras
        const result = [];
        carteras.forEach(d => {
            let existe = false;
            let count = 0;
            for (let x of temporal) {
                if (d.codigo === x.label) {
                    existe = true;
                } else if (!existe && temporal.length - 1 === count) {
                    result.push(d);
                }
                count += 1;
            }
        });
        this.setState({
            carteras: result,
        })
    }


    render() {
        return (
            <div className="app-main__inner">
                <div className="app-page-title">
                    <div className="page-title-wrapper">
                        <div className="page-title-heading">
                            <div className="page-title-icon">
                                <i className="fa fa-cog icon-gradient bg-mean-fruit">
                                </i>
                            </div>
                            <div>
                                Configuraciones
                                <div className="page-title-subheading">
                                    Configuraciones de la IPRESS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Agregar Procedimientos
                        </h5>
                        <form className='mt-3'>
                            <div className="form-row">
                                <div className='col-md-8'>
                                    {this.state.data.length === 0 ? <div>Cargando...</div> : <TablaBloque editar={this.editarProcedimiento} eliminar={this.eliminarProcedimiento} columns={this.columns} data={this.state.data} titulo={this.titulo}></TablaBloque>}
                                </div>
                                <div className='col-md-4'>
                                    <div className="ml-3">
                                        <div className="position-relative form-group">
                                            <label>
                                                Código
                                            </label>
                                            <input ref={(codigo) => { this.refCodigo = codigo }} name="codigo" id="codigo" placeholder="Código" type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <div className="position-relative form-group">
                                            <label>
                                                Descripción
                                        </label>
                                            <input ref={(descripcion) => { this.refDescripcion = descripcion }} name="descripcion" id="descripcion" placeholder="Descripción" type="text" className="form-control" />

                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <div className="position-relative form-group">
                                            <button onClick={e => this.agregarProcedimiento(e)} className="btn btn-primary form-control">
                                                Agregar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Configuracion de Carteras
                        </h5>
                        <form className='mt-3'>
                            <div className="form-row">
                                <div className='col-md-8'>
                                    <div className='form-row'>
                                        <div className='col-md-8'>
                                            <div class="position-relative form-group">
                                                <label for="exampleSelect" class="">
                                                    Cartera
                                                </label>
                                                <select name="select" id="exampleSelect" class="form-control">
                                                    <option>NIÑOS MENORES DE 1 AÑO</option>
                                                    <option>NIÑOS DE 1 A MENOS DE 5 AÑOS</option>
                                                    <option>NIÑOS DE 5 A MENOS DE 12 AÑOS</option>
                                                    <option>ADOLESCENTES DE 12 A MENOS DE 18 AÑOS</option>
                                                    <option>JOVENES DE 18 A MENOS DE 30 AÑOS</option>
                                                    <option>ADULTOS DE 30 A MENOS DE 60 AÑOS</option>
                                                    <option>ADULTOS DE 60 AÑOS A MAS</option>
                                                    <option>GESTANTES Y PUERPERA</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
                                            <div class="position-relative form-group">
                                                <label for="exampleSelect" class="">
                                                    Sexo
                                                </label>
                                                <select name="select" id="exampleSelect" class="form-control">
                                                    <option>Masculino</option>
                                                    <option>Femenino</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='form-row'>
                                        <div className='col-md-5'>
                                            <div className="position-relative form-group">
                                                <label>
                                                    Código
                                                </label>
                                                <select multiple ref={this.refCarteras} name="selectMulti" id="exampleSelectMulti" className="form-control multi">
                                                    {this.state.data.map((d, i) => {
                                                        return <option key={i}>{d.codigo}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className='col-md-2'>
                                            <div onClick={this.agregarTemporal} className='btn btn-primary form-control'>
                                                >>>>>>>
                                            </div>
                                            <div className='divider'>
                                            </div>
                                            <div onClick={this.quitarTemporal} className='btn btn-primary form-control'>
                                                {'<<<<<<<'}
                                            </div>
                                        </div>
                                        <div className='col-md-5'>
                                            <div className="position-relative form-group">
                                                <label>
                                                    Cartera
                                                </label>
                                                <select multiple ref={this.refTemporal} name="selectMulti" id="exampleSelectMulti" className="form-control multi">
                                                    {this.state.carteras.map((d, i) => {
                                                        return <option key={i}>{d.codigo}</option>
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ConfiguracionPage;