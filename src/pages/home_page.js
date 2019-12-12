import React, { Component } from 'react';
import './home_page.css';
import firebase from 'firebase/app';
import 'firebase/auth';
// BLOQUES
import HeaderBloque from './bloques/header_bloque';

import PropTypes from 'prop-types';
import SiderBarBloque from './bloques/siderbar_bloque';
import ConfigBloque from './bloques/config_bloque';

class HomePage extends Component {
    state = {
        user: this.props.user,
    }

    handleSalid = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <HeaderBloque user={this.state.user}></HeaderBloque>
                <ConfigBloque></ConfigBloque>
                <div className='app-main'>
                    <SiderBarBloque></SiderBarBloque>
                </div>
            </div>
        );
    }
}
HomePage.propTypes = {
    user: PropTypes.any,
}


export default HomePage;