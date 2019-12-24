import React, { Component } from 'react';

import CarterasProviders from '../providers/carteras_provider';


class CarterasPage extends Component {
    state = {

    }
    carterasProviders = new CarterasProviders();

    componentDidMount = async () => {
        await this.carterasProviders.comparacionReporteCartera();
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
                <div className="main-card mb-3 card">
                    <div className="card-body">
                        <div id="example_wrapper" className="dataTables_wrapper dt-bootstrap4">
                            <div className="row"><div className="col-sm-12 col-md-6">
                                <div className="dataTables_length" id="example_length">
                                    <label className='tabla1'>
                                        Show
                                        <select name="example_length" aria-controls="example" className="custom-select custom-select-sm form-control form-control-sm">
                                            <option value={10}>
                                                10
                                            </option>
                                            <option value={25}>
                                                25
                                            </option>
                                            <option value={50}>
                                                50
                                            </option>
                                            <option value={100}>
                                                100
                                            </option>
                                        </select>
                                        entries
                                    </label>
                                </div>
                            </div>
                                <div className="col-sm-12 col-md-6">
                                    <div id="example_filter" className="dataTables_filter">
                                        <label>
                                            Search:
                                        <input type="search" className="form-control form-control-sm" placeholder aria-controls="example" />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="row"><div className="col-sm-12"><table style={{ width: '100%' }} id="example" className="table table-hover table-striped table-bordered dataTable dtr-inline" role="grid" aria-describedby="example_info">
                                <thead>
                                    <tr role="row">
                                        <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{ width: '117.2px' }} aria-label="Name: activate to sort column ascending">
                                            Name
                                    </th>
                                        <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{ width: '188.2px' }} aria-label="Position: activate to sort column ascending">
                                            Position
                                    </th>
                                        <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{ width: '82.2px' }} aria-label="Office: activate to sort column ascending">
                                            Office
                                    </th>
                                        <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{ width: '39.2px' }} aria-label="Age: activate to sort column ascending">
                                            Age
                                    </th>
                                        <th className="sorting_desc" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{ width: '86.2px' }} aria-label="Start date: activate to sort column ascending" aria-sort="descending">
                                            Start date
                                    </th>
                                        <th className="sorting" tabIndex={0} aria-controls="example" rowSpan={1} colSpan={1} style={{ width: '63.2px' }} aria-label="Salary: activate to sort column ascending">
                                            Salary
                                    </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr role="row" className="odd">
                                        <td className tabIndex={0}>Thor Walton</td>
                                        <td className>Developer</td>
                                        <td>New York</td>
                                        <td className>61</td>
                                        <td className="sorting_1">2013/08/11</td>
                                        <td>$98,540</td>
                                    </tr><tr role="row" className="even">
                                        <td className tabIndex={0}>Quinn Flynn</td>
                                        <td className>Support Lead</td>
                                        <td>Edinburgh</td>
                                        <td className>22</td>
                                        <td className="sorting_1">2013/03/03</td>
                                        <td>$342,000</td>
                                    </tr><tr role="row" className="odd">
                                        <td className tabIndex={0}>Jennifer Acosta</td>
                                        <td className>Junior Javascript Developer</td>
                                        <td>Edinburgh</td>
                                        <td className>43</td>
                                        <td className="sorting_1">2013/02/01</td>
                                        <td>$75,650</td>
                                    </tr><tr role="row" className="even">
                                        <td className tabIndex={0}>Haley Kennedy</td>
                                        <td className>Senior Marketing Designer</td>
                                        <td>London</td>
                                        <td className>43</td>
                                        <td className="sorting_1">2012/12/18</td>
                                        <td>$313,500</td>
                                    </tr><tr role="row" className="odd">
                                        <td tabIndex={0} className>Brielle Williamson</td>
                                        <td className>Integration Specialist</td>
                                        <td>New York</td>
                                        <td className>61</td>
                                        <td className="sorting_1">2012/12/02</td>
                                        <td>$372,000</td>
                                    </tr><tr role="row" className="even">
                                        <td className tabIndex={0}>Michael Silva</td>
                                        <td className>Marketing Designer</td>
                                        <td>London</td>
                                        <td className>66</td>
                                        <td className="sorting_1">2012/11/27</td>
                                        <td>$198,500</td>
                                    </tr><tr role="row" className="odd">
                                        <td className tabIndex={0}>Bradley Greer</td>
                                        <td className>Software Engineer</td>
                                        <td>London</td>
                                        <td className>41</td>
                                        <td className="sorting_1">2012/10/13</td>
                                        <td>$132,000</td>
                                    </tr><tr role="row" className="even">
                                        <td className tabIndex={0}>Dai Rios</td>
                                        <td className>Personnel Lead</td>
                                        <td>Edinburgh</td>
                                        <td className>35</td>
                                        <td className="sorting_1">2012/09/26</td>
                                        <td>$217,500</td>
                                    </tr><tr role="row" className="odd">
                                        <td tabIndex={0} className>Herrod Chandler</td>
                                        <td className>Sales Assistant</td>
                                        <td>San Francisco</td>
                                        <td className>59</td>
                                        <td className="sorting_1">2012/08/06</td>
                                        <td>$137,500</td>
                                    </tr><tr role="row" className="even">
                                        <td className tabIndex={0}>Zorita Serrano</td>
                                        <td className>Software Engineer</td>
                                        <td>San Francisco</td>
                                        <td className>56</td>
                                        <td className="sorting_1">2012/06/01</td>
                                        <td>$115,000</td>
                                    </tr></tbody>
                                <tfoot>
                                    <tr><th rowSpan={1} colSpan={1}>Name</th><th rowSpan={1} colSpan={1}>Position</th><th rowSpan={1} colSpan={1}>Office</th><th rowSpan={1} colSpan={1}>Age</th><th rowSpan={1} colSpan={1}>Start date</th><th rowSpan={1} colSpan={1}>Salary</th></tr>
                                </tfoot>
                            </table>
                            </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="example_info" role="status" aria-live="polite">
                                        Showing 1 to 10 of 57 entries
                                        </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="example_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled" id="example_previous">
                                                <a href="#" aria-controls="example" data-dt-idx={0} tabIndex={0} className="page-link">
                                                    Previous
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="#" aria-controls="example" data-dt-idx={1} tabIndex={0} className="page-link">
                                                    1
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="example" data-dt-idx={2} tabIndex={0} className="page-link">
                                                    2
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="example" data-dt-idx={3} tabIndex={0} className="page-link">
                                                    3
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="example" data-dt-idx={4} tabIndex={0} className="page-link">
                                                    4
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="example" data-dt-idx={5} tabIndex={0} className="page-link">
                                                    5
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="#" aria-controls="example" data-dt-idx={6} tabIndex={0} className="page-link">
                                                    6
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item next" id="example_next">
                                                <a href="#" aria-controls="example" data-dt-idx={7} tabIndex={0} className="page-link">
                                                    Next
                                                </a>
                                            </li>
                                        </ul>
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

export default CarterasPage;