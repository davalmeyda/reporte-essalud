import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types';

class SiderBarBloque extends Component {
    state = {}

    refSlider = React.createRef();

    componentDidMount() {
        this.props.referencia(this.refSlider);
    }

    render() {
        return (
            <div ref={this.refSlider} className={this.props.color}>
                {/* HEADER CUANDO SE ACOPLA A LA PAGINA */}
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
                        </ul>
                        <ul className="vertical-nav-menu">
                            <li className="app-sidebar__heading">Estadisticas</li>
                            <li>
                                <Link to='/Carteras' className='mm-active'>
                                    <i className="metismenu-icon pe-7s-rocket" />
                                    Carteras
                                </Link>
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