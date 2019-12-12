import React, { Component } from 'react';
import CharsCompraVenta from './bloques/chars_bloque';

class InicioPage extends Component {
    state = {

    }
    render() {
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
                    {/* ETIQUETAS */}
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-midnight-bloom">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span><i className="metismenu-icon fa fa-cubes" /></span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">INVENTARIO NETO</div>
                                    <div className="widget-subheading">S/. 450,354,356.40</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">Productos en Stock: 25</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-arielle-smile">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span><i className="metismenu-icon fa fa-shopping-bag" /></span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">VENTAS 2019</div>
                                    <div className="widget-subheading">S/. 354,356.40</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">Facturas emitidas: 28</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-grow-early">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-white numero-wid"><span><i className="metismenu-icon fa fa-shopping-cart" /></span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">COMPRAS 2019</div>
                                    <div className="widget-subheading">S/. 185,354,356.40</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">Compras realizadas: 505</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content bg-premium-dark">
                            <div className="widget-content-wrapper text-white">
                                <div className="widget-content-left">
                                    <div className="widget-numbers text-warning"><span>1896</span></div>
                                </div>
                                <div className="widget-content-right margin-left-20">
                                    <div className="widget-heading">CLIENTES</div>
                                    <div className="widget-subheading">N° 5087</div>
                                    <div className="divider divider-per"></div>
                                    <div className="widget-subheading">Clientes nuevos: 12</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* --------- */}
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <div className="mb-3 card">
                            <div className="card-header-tab card-header-tab-animation card-header">
                                <div className="card-header-title">
                                    <i className="header-icon lnr-apartment icon-gradient bg-love-kiss"> </i>
                                    Reporte de Compra y Ventas 2019
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="tabs-eg-77">
                                        <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                                            <div className="widget-chat-wrapper-outer">
                                                <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                                                    <CharsCompraVenta></CharsCompraVenta>
                                                </div>
                                            </div>
                                        </div>
                                        <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">
                                            Mejores Vendedores</h6>
                                        <div className="scroll-area-md">
                                            <div className="scrollbar-container">
                                                <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <img width={42} className="rounded-circle" src="assets/images/avatars/9.jpg" alt='' />
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">Ella-Rose Henry
                            </div>
                                                                    <div className="widget-subheading">Web Developer
                            </div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                    <div className="font-size-xlg text-muted">
                                                                        <small className="opacity-5 pr-1">$</small>
                                                                        <span>129</span>
                                                                        <small className="text-danger pl-2">
                                                                            <i className="fa fa-angle-down" />
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <img width={42} className="rounded-circle" src="assets/images/avatars/5.jpg" alt='' />
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">Ruben Tillman</div>
                                                                    <div className="widget-subheading">UI Designer</div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                    <div className="font-size-xlg text-muted">
                                                                        <small className="opacity-5 pr-1">$</small>
                                                                        <span>54</span>
                                                                        <small className="text-success pl-2">
                                                                            <i className="fa fa-angle-up" />
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <img width={42} className="rounded-circle" src="assets/images/avatars/4.jpg" alt='' />
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">Vinnie Wagstaff
                            </div>
                                                                    <div className="widget-subheading">Java Programmer
                            </div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                    <div className="font-size-xlg text-muted">
                                                                        <small className="opacity-5 pr-1">$</small>
                                                                        <span>429</span>
                                                                        <small className="text-warning pl-2">
                                                                            <i className="fa fa-dot-circle" />
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <img width={42} className="rounded-circle" src="assets/images/avatars/3.jpg" alt='' />
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">Ella-Rose Henry
                            </div>
                                                                    <div className="widget-subheading">Web Developer
                            </div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                    <div className="font-size-xlg text-muted">
                                                                        <small className="opacity-5 pr-1">$</small>
                                                                        <span>129</span>
                                                                        <small className="text-danger pl-2">
                                                                            <i className="fa fa-angle-down" />
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <div className="widget-content p-0">
                                                            <div className="widget-content-wrapper">
                                                                <div className="widget-content-left mr-3">
                                                                    <img width={42} className="rounded-circle" src="assets/images/avatars/2.jpg" alt='' />
                                                                </div>
                                                                <div className="widget-content-left">
                                                                    <div className="widget-heading">Ruben Tillman</div>
                                                                    <div className="widget-subheading">UI Designer</div>
                                                                </div>
                                                                <div className="widget-content-right">
                                                                    <div className="font-size-xlg text-muted">
                                                                        <small className="opacity-5 pr-1">$</small>
                                                                        <span>54</span>
                                                                        <small className="text-success pl-2">
                                                                            <i className="fa fa-angle-up" />
                                                                        </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <div className="mb-3 card">
                            <div className="card-header-tab card-header">
                                <div className="card-header-title">
                                    <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure"> </i>
                                    Ultimas Ventas
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="main-card mb-31 card list-margin">
                                    <div className="card-body">
                                        <table className="mb-0 table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>FACTURA</th>
                                                    <th>CLIENTE</th>
                                                    <th>FECHA</th>
                                                    <th>TOTAL</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">741</th>
                                                    <td>Mark mark</td>
                                                    <td>12/02/19</td>
                                                    <td>9,500.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">742</th>
                                                    <td>Jacob jacob</td>
                                                    <td>12/02/19</td>
                                                    <td>3,211.40</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">743</th>
                                                    <td>Larry larry</td>
                                                    <td>12/02/19</td>
                                                    <td>400.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">741</th>
                                                    <td>Mark mark</td>
                                                    <td>12/02/19</td>
                                                    <td>9,500.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">742</th>
                                                    <td>Jacob jacob</td>
                                                    <td>12/02/19</td>
                                                    <td>3,211.40</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">742</th>
                                                    <td>Jacob jacob</td>
                                                    <td>12/02/19</td>
                                                    <td>3,211.40</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">743</th>
                                                    <td>Larry larry</td>
                                                    <td>12/02/19</td>
                                                    <td>400.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">741</th>
                                                    <td>Mark mark</td>
                                                    <td>12/02/19</td>
                                                    <td>9,500.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">742</th>
                                                    <td>Jacob jacob</td>
                                                    <td>12/02/19</td>
                                                    <td>3,211.40</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">743</th>
                                                    <td>Larry larry</td>
                                                    <td>12/02/19</td>
                                                    <td>400.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">741</th>
                                                    <td>Mark mark</td>
                                                    <td>12/02/19</td>
                                                    <td>9,500.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">742</th>
                                                    <td>Jacob jacob</td>
                                                    <td>12/02/19</td>
                                                    <td>3,211.40</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">743</th>
                                                    <td>Larry larry</td>
                                                    <td>12/02/19</td>
                                                    <td>400.00</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">742</th>
                                                    <td>Jacob jacob</td>
                                                    <td>12/02/19</td>
                                                    <td>3,211.40</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Facturas</div>
                                        <div className="widget-subheading">Cantidad de ventas en el dia</div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="widget-numbers text-success">15</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-heading">Ingresos</div>
                                        <div className="widget-subheading">Ingreso total del dia</div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="widget-numbers text-warning">S/. 5215.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-4">
                        <div className="card mb-3 widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="widget-heading"></div>
                                        <div className="widget-subheading">Cantidad de Vendedores</div>
                                    </div>
                                    <div className="widget-content-right">
                                        <div className="widget-numbers text-danger">42</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="main-card mb-3 card">
                            <div className="card-header">Usuarios Activos                                
                            </div>
                            <div className="table-responsive">
                                <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th className="text-center">#</th>
                                            <th>Nombre</th>
                                            <th className="text-center">Ciudad</th>
                                            <th className="text-center">Estado</th>
                                            <th className="text-center">Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="text-center text-muted">#345</td>
                                            <td>
                                                <div className="widget-content p-0">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left mr-3">
                                                            <div className="widget-content-left">
                                                                <img width={40} className="rounded-circle" src="assets/images/avatars/4.jpg" alt='' />
                                                            </div>
                                                        </div>
                                                        <div className="widget-content-left flex2">
                                                            <div className="widget-heading">John Doe</div>
                                                            <div className="widget-subheading opacity-7">Web Developer
                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">Madrid</td>
                                            <td className="text-center">
                                                <div className="badge badge-warning">Pending</div>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" id="PopoverCustomT-1" className="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">#347</td>
                                            <td>
                                                <div className="widget-content p-0">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left mr-3">
                                                            <div className="widget-content-left">
                                                                <img width={40} className="rounded-circle" src="assets/images/avatars/3.jpg" alt='' />
                                                            </div>
                                                        </div>
                                                        <div className="widget-content-left flex2">
                                                            <div className="widget-heading">Ruben Tillman</div>
                                                            <div className="widget-subheading opacity-7">Etiam sit amet
                          orci eget</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">Berlin</td>
                                            <td className="text-center">
                                                <div className="badge badge-success">Completed</div>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" id="PopoverCustomT-2" className="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">#321</td>
                                            <td>
                                                <div className="widget-content p-0">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left mr-3">
                                                            <div className="widget-content-left">
                                                                <img width={40} className="rounded-circle" src="assets/images/avatars/2.jpg" alt='' />
                                                            </div>
                                                        </div>
                                                        <div className="widget-content-left flex2">
                                                            <div className="widget-heading">Elliot Huber</div>
                                                            <div className="widget-subheading opacity-7">Lorem ipsum
                          dolor sic</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">London</td>
                                            <td className="text-center">
                                                <div className="badge badge-danger">In Progress</div>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" id="PopoverCustomT-3" className="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="text-center text-muted">#55</td>
                                            <td>
                                                <div className="widget-content p-0">
                                                    <div className="widget-content-wrapper">
                                                        <div className="widget-content-left mr-3">
                                                            <div className="widget-content-left">
                                                                <img width={40} className="rounded-circle" src="assets/images/avatars/1.jpg" alt='' /></div>
                                                        </div>
                                                        <div className="widget-content-left flex2">
                                                            <div className="widget-heading">Vinnie Wagstaff</div>
                                                            <div className="widget-subheading opacity-7">UI Designer
                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center">Amsterdam</td>
                                            <td className="text-center">
                                                <div className="badge badge-info">On Hold</div>
                                            </td>
                                            <td className="text-center">
                                                <button type="button" id="PopoverCustomT-4" className="btn btn-primary btn-sm">Details</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-block text-center card-footer">
                                <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i className="pe-7s-trash btn-icon-wrapper"> </i></button>
                                <button className="btn-wide btn btn-success">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2 fsize-1">
                                            <div className="widget-numbers mt-0 fsize-3 text-danger">71%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                            <div className="progress-bar-xs progress">
                                                <div className="progress-bar bg-danger" role="progressbar" aria-valuenow={71} aria-valuemin={0} aria-valuemax={100} style={{ width: '71%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left fsize-1">
                                        <div className="text-muted opacity-6">Income Target</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2 fsize-1">
                                            <div className="widget-numbers mt-0 fsize-3 text-success">54%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                            <div className="progress-bar-xs progress">
                                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={54} aria-valuemin={0} aria-valuemax={100} style={{ width: '54%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left fsize-1">
                                        <div className="text-muted opacity-6">Expenses Target</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2 fsize-1">
                                            <div className="widget-numbers mt-0 fsize-3 text-warning">32%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                            <div className="progress-bar-xs progress">
                                                <div className="progress-bar bg-warning" role="progressbar" aria-valuenow={32} aria-valuemin={0} aria-valuemax={100} style={{ width: '32%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left fsize-1">
                                        <div className="text-muted opacity-6">Spendings Target</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                            <div className="widget-content">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left pr-2 fsize-1">
                                            <div className="widget-numbers mt-0 fsize-3 text-info">89%</div>
                                        </div>
                                        <div className="widget-content-right w-100">
                                            <div className="progress-bar-xs progress">
                                                <div className="progress-bar bg-info" role="progressbar" aria-valuenow={89} aria-valuemin={0} aria-valuemax={100} style={{ width: '89%' }} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left fsize-1">
                                        <div className="text-muted opacity-6">Totals Target</div>
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