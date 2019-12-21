import React, { Component } from 'react'
import PropTypes from 'prop-types';

import firebase from 'firebase/app';
import 'firebase/auth';

// IMPORTAR COOKIE
import cookie from 'react-cookies';

class HeaderBloque extends Component {
    state = {
        headerMobile: 'app-header__content',
        headerSearch: 'search-wrapper',
        user: this.props.user,
    }

    // CERRAR SESION
    salir = async () => {
        cookie.remove('usuario');
        await firebase.auth().signOut();
        console.log('salir');
        window.location.reload();
    }

    refHeader = React.createRef();

    componentDidMount(){
        this.props.referencia(this.refHeader);
    }

    render() {
        return (
            <div ref={this.refHeader} className={this.props.color}>
                <div className="app-header__logo">
                    {/* <div className="logo-src" /> */}
                    {/* <div className="widget-subheading logoIpress">IPRESS SAN CARLOS</div> */}
                    <div className="header__pane ml-auto">
                        <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner" />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6" />
                            </span>
                        </button>
                    </span>
                </div>
                {/* CONTENIDO DEL HEADER */}
                <div className='app-header__content'>
                    <div className="app-header-left">
                        <div className='search-wrapper'>
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Escribe para buscar" />
                                <button className="search-icon"><span /></button>
                            </div>
                            <button className="close" />
                        </div>
                        <ul className="header-menu nav">
                            <li className="nav-item">
                                <a href="https://google.com" className="nav-link">
                                    <i className="nav-link-icon fa fa-database"> </i>
                                    Estadisticas
                                </a>
                            </li>
                            <li className="btn-group nav-item">
                                <a href="https://google.com" className="nav-link">
                                    <i className="nav-link-icon fa fa-edit" />
                                    Proyectos
                                </a>
                            </li>
                            <li className="dropdown nav-item">
                                <a href="https://google.com" className="nav-link">
                                    <i className="nav-link-icon fa fa-cog" />
                                    Configuración
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="app-header-right">
                        <div className="header-btn-lg pr-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <a href='#' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                <img width={42} className="rounded-circle" src="https://www.it.iitb.ac.in/frg/wiki/images/thumb/d/dc/User.jpg/100px-User.jpg" alt="" />
                                                <i className="fa fa-angle-down ml-2 opacity-8" />
                                            </a>
                                            <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">

                                                <button type="button" tabIndex={0} className="dropdown-item">Perfil</button>
                                                <button type="button" tabIndex={0} className="dropdown-item">Configuración</button>
                                                <div tabIndex={-1} className="dropdown-divider" />
                                                <button onClick={this.salir} type="button" tabIndex={0} className="dropdown-item">Salir</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left  ml-3 header-user-info">
                                        <div className="widget-heading">
                                            {this.state.user.displayName}
                                        </div>
                                        <div className="widget-subheading">
                                            {this.state.user.email}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*----------------------*/}
            </div>


        );
    }
}
HeaderBloque.propTypes = {
    user: PropTypes.any,
    color: PropTypes.string,
    referencia: PropTypes.func, 
}

export default HeaderBloque;