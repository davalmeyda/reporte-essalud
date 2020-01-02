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
    refControles = React.createRef();

    refCarteras = React.createRef();
    refTemporal = React.createRef();
    refSelectCarteras = React.createRef();
    refSelectSexo = React.createRef();

    // DATOS DE LA TABLA
    columns = [
        { title: "CÓDIGO", field: "codigo" },
        { title: "DESCRIPCIÓN", field: "descripcion" },
        { title: "CONTROL", field: "control" },
    ]
    titulo = 'PROCEDIMIENTOS'

    //-------------------------------------
    agregarProcedimiento = (e) => {
        e.preventDefault();
        const codigo = this.refCodigo.value;
        const descripcion = this.refDescripcion.value;
        const controles = this.refControles.value;
        this.configuracionProvider.agregarProcedimiento(codigo, descripcion, controles);
    }

    eliminarProcedimiento = (valor) => {
        this.configuracionProvider.eliminarProcedimiento(valor);
    }

    editarProcedimiento = (anterior, nuevo) => {
        this.configuracionProvider.editarProcedimiento(anterior, nuevo);
    }

    componentDidMount = async () => {
        const cart = this.refSelectCarteras.current.value + '-' + this.refSelectSexo.current.value;
        this.setState({
            data: await this.configuracionProvider.traerProcedimientos(),
            carteras: await this.configuracionProvider.traerCartera(cart),
        })
    }

    // PROCESA LA DATA DE UN LADO A OTRO
    agregarTemporal = () => {
        const temporal = this.refCarteras.current.selectedOptions;
        const carteras = this.state.carteras
        const aaa = this.refCarteras.current.options;
        const result = [];
        for (let d of aaa) {
            for (let x of temporal) {
                if (d.label === x.label) {
                    result.push(d.label);
                }
            }
        };
        console.log(result);
        let result2 = [];
        let ad = [];
        result.forEach(d => {
            const da = {
                codigo: d,
            }
            ad.push(da);
            let existe = false;
            if (carteras.length > 0) {
                carteras.forEach((x, i) => {
                    if (da.codigo === x.codigo) {
                        existe = true;
                    } else if (!existe && carteras.length - 1 === i) {
                        result2.push(da);
                    }
                });
            } else {
                result2 = ad;
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

    guardarCartera = () => {

        const cart = this.refSelectCarteras.current.value + '-' + this.refSelectSexo.current.value;
        this.configuracionProvider.agregarCartera(this.state.carteras, cart);
    }
    traerCarteras = async () => {
        const cart = this.refSelectCarteras.current.value + '-' + this.refSelectSexo.current.value;
        this.setState({
            carteras: await this.configuracionProvider.traerCartera(cart),
        })
    }
    cancelarCartera = async () => {
        await this.traerCarteras();
    }
    cambio = async () => {
        await this.traerCarteras();
    }

    agregarControl = () => {
        const dd = [];
        this.state.data.forEach((d, i) => {
            for (let index = 0; index <= d.control; index++) {
                const a = <option value={(d.codigo + '-' + index)} key={i + '-' + index}>{(d.codigo + '-' + index)}</option>
                dd.push(a);
            }            
        });
        console.log(dd)
        return dd;
    }

    render() {
        return (
            <div className="app-main__inner" >
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
                                    {this.state.data.length === 0 ? <div>Cargando...</div> : <TablaBloque editable={true} editar={this.editarProcedimiento} eliminar={this.eliminarProcedimiento} columns={this.columns} data={this.state.data} titulo={this.titulo}></TablaBloque>}
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
                                            <label>
                                                Controles
                                        </label>
                                            <input ref={(controles) => { this.refControles = controles }} name="controles" id="controles" placeholder="Cantidad de Controles en Procedimientos" type="text" className="form-control" />

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
                <div className='row'>
                    <div className='col-md-6'>
                        <div className="main-card mb-3 card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    Configuracion de Carteras
                                </h5>
                                <div className='mt-3'>
                                    <div className="form-row">
                                        <div className='col-md-12'>
                                            <div className='form-row'>
                                                <div className='col-md-8'>
                                                    <div className="position-relative form-group">
                                                        <label htmlFor="exampleSelect">
                                                            Cartera
                                                        </label>
                                                        <select onChange={this.cambio} ref={this.refSelectCarteras} name="select" id="exampleSelect" className="form-control">
                                                            <option value='B1'>NIÑOS MENORES DE 1 AÑO</option>
                                                            <option value='B2'>NIÑOS DE 1 A MENOS DE 5 AÑOS</option>
                                                            <option value='B3'>NIÑOS DE 5 A MENOS DE 12 AÑOS</option>
                                                            <option value='B4'>ADOLESCENTES DE 12 A MENOS DE 18 AÑOS</option>
                                                            <option value='C1'>JOVENES DE 18 A MENOS DE 30 AÑOS</option>
                                                            <option value='C2'>ADULTOS DE 30 A MENOS DE 60 AÑOS</option>
                                                            <option value='C3'>ADULTOS DE 60 AÑOS A MAS</option>
                                                            <option value='G1'>GESTANTES Y PUERPERA</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className="position-relative form-group">
                                                        <label htmlFor="exampleSelect" >
                                                            Sexo
                                                        </label>
                                                        <select onChange={this.cambio} ref={this.refSelectSexo} name="select" id="exampleSelect" className="form-control">
                                                            <option value='M'>Masculino</option>
                                                            <option value='F'>Femenino</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                                <div className='col-md-5'>
                                                    <div className="position-relative form-group">
                                                        <label>
                                                            Código
                                                        </label>
                                                        <select multiple ref={this.refCarteras} name="selectMulti" id="exampleSelectMulti" className="form-control multi">
                                                            {this.agregarControl()}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className='padre col-md-2'>
                                                    <div>
                                                        <div onClick={this.agregarTemporal} className='btn btn-info form-control'>
                                                            >>>>>>>
                                                        </div>
                                                        <div className='divider'>
                                                        </div>
                                                        <div onClick={this.quitarTemporal} className='btn btn-info form-control'>
                                                            {'<<<<<<<'}
                                                        </div>
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
                                            <div className='form-row flex-row-reverse'>
                                                <div className='form-inline'>
                                                    <button onClick={this.guardarCartera} className='btn btn-danger form-control'>
                                                        Guardar
                                                    </button>
                                                    <div className='mx-2'>

                                                    </div>
                                                    <button onClick={this.cancelarCartera} className='btn btn-primary form-control'>
                                                        Cancelar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-4'>
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

export default ConfiguracionPage;