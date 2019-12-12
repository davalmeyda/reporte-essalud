import axios from 'axios';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

class LoginProviders {

    static registrarUsuario = async (user) => {
        const usuario = await axios({
            method: 'post',
            url: 'https://us-central1-sistema-ventas-dde3f.cloudfunctions.net/crearUsuario',
            data: user
        });
        return usuario;
    }

    static ingresarUsuario = async (nameuser, password) => {

        const db = firebase.firestore().collection('usuarios');
        const usuario = await db.doc(nameuser).get();

        if (usuario.exists) {
            const email = usuario.data().email;
            let err = '';
            await firebase.auth().signInWithEmailAndPassword(email, password).catch(error => {
                err = error.code;
            });
            if (err === '') {
                return;
            } else {
                return err;
            }
        }
        return 'usuario';
    }
}

export default LoginProviders;