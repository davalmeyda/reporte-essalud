// Importar Paginas
import LoginPage from './pages/login/login_page';
import './rutas.css';

// CARGAR SCRIPT
import Script from 'react-load-script';

import React, { Component } from 'react';
// Importar Route
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import PropTypes from 'prop-types';
// PAGINAS
import NuevaCompraPage from './pages/nuevacompra_page';
import HeaderBloque from './pages/bloques/header_bloque';
import ConfigBloque from './pages/bloques/config_bloque';
import SiderBarBloque from './pages/bloques/siderbar_bloque';
import InicioPage from './pages/inicio_page';
import FooterBloque from './pages/bloques/footer_bloque';


import LoginProviders from './providers/login_provider';

// IMPORTAR COOKIE
import cookie from 'react-cookies';

class Rutas extends Component {

    state = {
        colorHeader: cookie.load('colorHeader') == null ? "app-header header-shadow" : cookie.load('colorHeader'),
        colorSlider: cookie.load('colorSlider') == null ? "app-sidebar sidebar-shadow" : cookie.load('colorSlider'),
        aaa: "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header",
    }

    guardarColor = (colorHeader, colorSlider) => {
        cookie.save('colorHeader', colorHeader, { path: '/' });
        cookie.save('colorSlider', colorSlider, { path: '/' });
        this.setState({
            colorHeader,
            colorSlider,
        })
    }

    referenciaHeader = null;
    referenciaSlider = null;

    refHeader = (refs) => {
        this.referenciaHeader = refs.current;
    }
    refSlider = (refs) => {
        this.referenciaSlider = refs.current;
    }

    ddd = () => {
        this.guardarColor(this.referenciaHeader.className, this.referenciaSlider.className);
    }

    carga = async () => {
        await LoginProviders.sesionExplota('Khronos92', '47813783');
    }

    componentWillMount(){
        setTimeout(()=>{
            this.setState({
                aaa: "app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header closed-sidebar",
            })
            
        }, 1000)
       
    }

    render() {
        this.carga();
        if (this.props.user) {
            return (
                <BrowserRouter>
                    <div className={this.state.aaa}>
                        <HeaderBloque referencia={this.refHeader} color={this.state.colorHeader} user={this.props.user}></HeaderBloque>
                        <ConfigBloque accion={this.ddd}></ConfigBloque>
                        <div className='app-main'>
                            <SiderBarBloque referencia={this.refSlider} color={this.state.colorSlider}></SiderBarBloque>
                            <div className="app-main__outer">
                                <Switch>
                                    <Route exact path="/" component={InicioPage}></Route>
                                    <Route exact path="/nueva-compra" component={NuevaCompraPage}></Route>
                                    <Redirect to="/"></Redirect>
                                </Switch>
                                <FooterBloque></FooterBloque>
                            </div>
                        </div>
                    </div>
                    <Script
                        url="./assets/scripts/main.js"
                        onCreate={this.handleScriptCreate.bind(this)}
                        onError={this.handleScriptError.bind(this)}
                        onLoad={this.handleScriptLoad.bind(this)}
                    />
                </BrowserRouter>
            );
        }
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={LoginPage}></Route>
                    <Redirect to="/login"></Redirect>
                </Switch>
            </BrowserRouter>
        );
    }

    handleScriptCreate() {
        this.setState({ scriptLoaded: false })
    }

    handleScriptError() {
        this.setState({ scriptError: true })
    }

    handleScriptLoad() {
        this.setState({ scriptLoaded: true })
    }

    NoMatchPage = () => {
        return (
            <h3>404 - Pagina no encontrada</h3>
        );
    };
}
Rutas.propTypes = {
    user: PropTypes.any,
}

export default Rutas;