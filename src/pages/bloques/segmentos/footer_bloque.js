import React, { Component } from 'react';

class FooterBloque extends Component {
    state = {

    }
    render() {
        return (
            <div className="app-wrapper-footer">
                <div className="app-footer">
                    <div className="app-footer__inner">
                        <div className="app-footer-left">
                        <div className='copy'> Copyright © 2019 Todos los derechos reservados v. 1.0</div>
                        </div>
                        <div className="app-footer-right">
                        <div className='copy'> Creado por David Almeyda</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterBloque;