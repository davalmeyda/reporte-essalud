import React, { Component } from 'react';
import './login.css';
// Importar Provider
import LoginProviders from '../../providers/login_provider';
// Importar Router
import { withRouter } from "react-router-dom";
// Importar firebase
// import firebase from 'firebase/app';
import 'firebase/auth';
// importamos modelo
import Login from '../../models/login_models';

import PropTypes from 'prop-types';

class LoginPage extends Component {
    state = {
        show: 'logcontainer',
        login: true,
        errorRegistro: '',
        user: 'null',
        currentUser: null,
        disabled: false,
    }

    // cambia de Iniciar sesion a registro    
    // inicia sesion o registra al usuario

    handleLogin = () => {

        this.setState({
            disabled: true,
            errorRegistro: '',
        }, async () => {
            console.log(this.state.disabled);

            const User = document.getElementById('User').value;
            const Password = document.getElementById('Password').value;

            if (User === '') {
                console.log('vacio');
                return;
            }
            let resultado;
            let error = '';

            resultado = await LoginProviders.ingresarUsuario(User, Password);
            if (resultado === 'auth/wrong-password') {
                error = 'Error de Contraseña';
            } else if (resultado === 'usuario') {
                error = 'Usuario no Valido';
            }
            if (error !== '' || resultado === "auth/too-many-requests") {                
                this.setState({
                    errorRegistro: error,
                    show: 'logcontainer',
                    disabled: false,
                });
            }            
        });
    }

    handleRegistrar = () => {
        this.setState({
            disabled: true,
            errorRegistro: '',
        }, async () => {
            const show = `${this.state.show} logactive`;
            const { history } = this.props;

            const login = Login;
            login.user.email = document.getElementById('Remail').value;
            // eslint-disable-next-line 
            const emailrex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!emailrex.test(login.user.email)) {
                this.setState({
                    errorRegistro: 'email no valido',
                    disabled: false,
                })
                return;
            }
            login.user.password = document.getElementById('RPassword').value;
            login.user.userName = document.getElementById('RUser').value;
            const a = login.user.userName.split(' ');
            if (a[0] !== login.user.userName) {
                this.setState({
                    errorRegistro: 'ingrese un usuario valido',
                    disabled: false,
                })
                return;
            }
            login.user.displayName = document.getElementById('RNombre').value;
            const resultado = await LoginProviders.registrarUsuario(login.user);
            console.log('RESULTADO DE CONSULTA');
            console.log(resultado);
            console.log('RESULTADO DE CONSULTA');
            let error;
            if (resultado.data.code === 'auth/email-already-exists') {
                error = 'el E-mail ya esta registrado';
                this.setState({
                    errorRegistro: error,
                    disabled: false,
                })
                return;
            } else if (resultado.data === 'El Usuario Existe') {
                error = 'El Usuario ya Existe';
                this.setState({
                    errorRegistro: error,
                    disabled: false,
                })
                return;
            }

            this.setState({
                show,
                errorRegistro: '',
            }, () => {
                setTimeout(() => {
                    history.push('/index');
                }, 2000);
            });
        })
    }

    render() {
        return (
            <div className='body'>
                <div className={this.state.show}>
                    <div className="logbox" />
                    <div className="logcontainer-forms">
                        <div className="logcontainer-info">
                            <div className="loginfo-item">
                                <div className="logtable">
                                    <div className="logtable-cell">
                                        <p>
                                            ¿Tienes una cuenta?
                                        </p>
                                        <div className="logbtn" onClick={this.handleCambiar}>
                                            Ingresar
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="loginfo-item">
                                <div className="logtable">
                                    <div className="logtable-cell">
                                        <p>
                                            ¿No tienes una cuenta?
                                        </p>
                                        <div className="logbtn" onClick={this.handleCambiar}>
                                            Registrate
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="logcontainer-form">
                            <div className="logform-item loglog-in">
                                <div className="logtable">
                                    <div className="logtable-cell">
                                        <input id="User" placeholder="Usuario" type="text" />
                                        <input id="Password" placeholder="Contraseña" type="Password" onKeyDown={this._handleKeyDown1} />
                                        <div className='error'>{this.state.errorRegistro}</div>
                                        <div className="logbtn" onClick={this.handleLogin} style={this.state.disabled ? { display: 'none' } : {}}>
                                            Ingresar
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="logform-item logsign-up">
                                <div className="logtable">
                                    <div className="logtable-cell">
                                        <input id="Remail" placeholder="E-mail" type="text" />
                                        <input id="RNombre" placeholder="Nombre" type="text" />
                                        <input id="RUser" placeholder="Usuario" type="text" />
                                        <input id="RPassword" placeholder="Contraseña" type="Password" onKeyDown={this._handleKeyDown2} />
                                        <div className='error'>{this.state.errorRegistro}</div>
                                        <div className="logbtn" onClick={this.handleRegistrar} style={this.state.disabled ? { display: 'none' } : {}}>
                                            Registrar
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }

    _handleKeyDown1 = (e) => {
        if (e.key === 'Enter') {
            this.handleLogin();
        }
    }

    _handleKeyDown2 = (e) => {
        if (e.key === 'Enter') {
            this.handleRegistrar();
        }
    }

    handleCambiar = () => {
        let show;
        if (this.state.login) {
            show = 'logcontainer loglog-in';

        } else {
            show = 'logcontainer';
        }
        this.setState({
            show,
            login: !this.state.login,
            errorRegistro: '',
        });
    }
}
LoginPage.propTypes = {
    history: PropTypes.any,
}

export default withRouter(LoginPage);