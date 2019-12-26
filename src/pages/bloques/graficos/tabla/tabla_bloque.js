import React, { Component } from "react";

import MaterialTable from "material-table";

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

// CSS PROPIO
import './tabla_bloque.css'


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class TablaBloque extends Component {

    state = {
        columns: this.props.columns,
        data: this.props.data,
    }

    render() {
        return (
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    icons={tableIcons}
                    columns={this.state.columns}
                    data={this.state.data}
                    title={this.props.titulo}
                    localization={
                        {
                            pagination: {
                                firstAriaLabel: 'filas',
                                firstTooltip: 'Incio',
                                // labelDisplayedRows: 'filas3',
                                labelRowsPerPage: 'filas4',
                                labelRowsSelect: 'Filas',
                                lastAriaLabel: 'filas6',
                                lastTooltip: 'Ultimo',
                                nextAriaLabel: 'filas8',
                                nextTooltip: 'Siguiente',
                                previousAriaLabel: 'fila10',
                                previousTooltip: 'Atras',
                            },
                            toolbar: {
                                searchPlaceholder: 'Buscar',
                            },
                            body: {
                                deleteTooltip: 'Eliminar',
                                editTooltip: 'Editar',
                                editRow: {
                                    deleteText: 'Esta seguro que desea eliminar el Procedimiento?',
                                    cancelTooltip: 'Cancelar',
                                    saveTooltip: 'Guardar'
                                }
                            }
                        }
                    }
                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    if (oldData) {
                                        this.setState(prevState => {
                                            const editar = this.props.editar;
                                            editar(oldData, newData);
                                            const data = [...prevState.data];
                                            data[data.indexOf(oldData)] = newData;
                                            return { ...prevState, data };
                                        });
                                    }
                                }, 600);
                            }),
                        onRowDelete: oldData =>
                            new Promise(resolve => {
                                setTimeout(() => {
                                    resolve();
                                    this.setState(prevState => {
                                        const eliminar = this.props.eliminar;
                                        eliminar(oldData);
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                />
            </div>
        );
    }
}

export default TablaBloque;