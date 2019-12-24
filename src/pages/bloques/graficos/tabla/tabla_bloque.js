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
    render() {
        return (
            <div style={{ maxWidth: "100%" }}>
                <MaterialTable
                    icons={tableIcons}
                    columns={[
                        { title: "Documento", field: "documento" },
                        { title: "Nombre", field: "nombre" },
                        { title: "D0150-1", field: "D0150-1" },
                        { title: "99401-1", field: "99401-2" }, 
                        { title: "D0150-1", field: "D0150-3" },
                        { title: "99401-1", field: "99401-4" }, 
                        { title: "D0150-1", field: "D0150-5" },
                        { title: "99401-1", field: "99401-6" }, 
                        { title: "D0150-1", field: "D0150-7" },
                        { title: "99401-1", field: "99401-8" },                        
                    ]}
                    data={[
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": (<button>Hola</button>) },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "SIVIRICHE SALAZAR DAREK FABRIZIO", 'D0150-1': 'OK', "99401-2": 'OK', 'D0150-3': 'OK', "99401-4": 'OK', 'D0150-5': 'OK', "99401-6": 'OK', 'D0150-7': 'OK', "99401-8": 'OK' },
                        { documento: "74672635", nombre: "KEREN ALMEYDA", 'D0150-1': 'OK', "99401-1": 'OK' },
                        { documento: "74672635", nombre: "DAVID MONTALVAN", 'D0150-1': 'OK', "99401-1": 'OK' },
                        { documento: "74672635", nombre: "DAVID ALMEYDA", 'D0150-1': 'OK', "99401-1": 'OK' },
                    ]}
                    title="Niño de 5 a menos de 12 años"
                />
            </div>
        );
    }
}

export default TablaBloque;