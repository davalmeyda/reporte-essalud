import React, { Component } from 'react';
import CharsCompraVenta from './bloques/chars_bloque';

class NuevaCompraPage extends Component {
    state = { 

     }
    render() { 
        return ( 
            <div>
                <h1>Nueva Compra</h1>
            <CharsCompraVenta></CharsCompraVenta>
            </div>
         );
    }
}
 
export default NuevaCompraPage;