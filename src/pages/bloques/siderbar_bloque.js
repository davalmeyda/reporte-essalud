import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

class SiderBarBloque extends Component {
    state = {  }

    refSlider = React.createRef();

    componentDidMount(){
        this.props.referencia(this.refSlider);
    }

    render() { 
        return (
            <div ref={this.refSlider} className={this.props.color}>
                {/* HEADER CUANDO SE ACOPLA A LA PAGINA */}
                <div className="app-header__logo">
                    <div className="logo-src" />
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
                {/*-------------------------------------*/}
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">Dashboards</li>
                            <li>
                                <Link to='/' className='mm-active'>
                                    <i className="metismenu-icon pe-7s-rocket" />
                                    Inicio
                                </Link>
                            </li>
                            <li className="app-sidebar__heading">Compras</li>
                            <li>
                                <Link to='/nueva-compra'>
                                    <i className="metismenu-icon fa fa-shopping-cart" />
                                    Nueva compra
                                </Link>                            
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-bars" />
                                    Historial de compras
              </a>
                            </li>
                            <li className="app-sidebar__heading">Productos</li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-truck fa-flip-horizontal">
                                    </i>
                                    Productos
              </a>
                            </li>
                            <li className="app-sidebar__heading">Fabricantes</li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-building">
                                    </i>
                                    Fabricantes
              </a>
                            </li>
                            <li className="app-sidebar__heading">Contactos</li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-user">
                                    </i>
                                    Clientes
              </a>
                            </li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-briefcase">
                                    </i>
                                    Proveedores
              </a>
                            </li>
                            <li className="app-sidebar__heading">Facturación</li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-cart-plus">
                                    </i>
                                    Nueva venta
              </a>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-th-list">
                                    </i>
                                    Administrar facturas
              </a>
                            </li>
                            <li className="app-sidebar__heading">Reportes</li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-chart-line">
                                    </i>
                                    Reporte de ventas
              </a>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-chart-pie">
                                    </i>
                                    Reporte de compras
              </a>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-chart-area">
                                    </i>
                                    Reporte de Inventario
              </a>
                            </li>
                            <li className="app-sidebar__heading">Configuración</li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-briefcase">
                                    </i>
                                    Perfil de la empresa
              </a>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-hand-holding-usd">
                                    </i>
                                    Monedas
              </a>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-th-list">
                                    </i>
                                    Impuestos
              </a>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-file-pdf">
                                    </i>
                                    Plantillas
              </a>
                            </li>
                            <li className="app-sidebar__heading">Administrar Accesos</li>
                            <li>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-layer-group">
                                    </i>
                                    Grupos de usuarios
              </a>
                                <a href="https://google.com">
                                    <i className="metismenu-icon fa fa-users">
                                    </i>
                                    Usuarios
              </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    
        );
    }
}
SiderBarBloque.propTypes = {
    referencia: PropTypes.func,
    color: PropTypes.string,    
}
 
export default SiderBarBloque;