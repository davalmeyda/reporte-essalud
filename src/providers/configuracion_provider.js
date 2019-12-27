import firebase from 'firebase/app';
import 'firebase/firestore';

import ConfiguracionGlobal from '../configuracionGloba';

class ConfiguracionProvider {

    configuracionGlobal = new ConfiguracionGlobal();
    collectionProcedimientos = firebase.firestore().collection((this.configuracionGlobal.ipress['cas'] + '-procedimientos'));
    collectionCarteras = firebase.firestore().collection((this.configuracionGlobal.ipress['cas'] + '-carteras'));

    agregarProcedimiento = async (codigo, descripcion, control) => {
        let ok;
        await this.collectionProcedimientos.doc(codigo).set({
            descripcion,
            control: parseInt(control)
        }).then(() => {
            ok = true;
            console.log('AGREGADO');
        }).catch(error => {
            ok = false;
            console.log(error);
        });
        return ok;
    }

    eliminarProcedimiento = async (valor) => {
        let ok;
        await this.collectionProcedimientos.doc(valor.codigo).delete()
            .then(() => {
                ok = true;
                console.log('eliminado' + valor.codigo);
            }).catch(error => {
                ok = false;
                console.log(error);
            });
        return ok;
    }

    editarProcedimiento = async (anterior, nuevo) => {
        let ok;
        if (anterior.codigo === nuevo.codigo) {
            await this.collectionProcedimientos.doc(anterior.codigo).update({
                descripcion: nuevo.descripcion,
                control: parseInt(nuevo.control)
            }).then(() => {
                ok = true;
                console.log('editado');
            }).catch(error => {
                ok = false;
                console.log(error);
            })
        } else {
            ok = await this.eliminarProcedimiento(anterior);
            await this.collectionProcedimientos.doc(nuevo.codigo).set({
                descripcion: nuevo.descripcion
            }).then(() => {
                ok = true;
                console.log('AGREGADO');
            }).catch(error => {
                ok = false;
                console.log(error);
            });
        }
        return ok;
    }

    traerProcedimientos = async () => {
        const ddd = [];
        const query = await this.collectionProcedimientos.get()
        query.forEach(doc => {
            const proc = {
                codigo: doc.id,
                descripcion: doc.data()['descripcion'],
                control: doc.data()['control']
            }
            ddd.push(proc);
        });
        return ddd;
    }

    agregarCartera = async (data, cartera) => {
        let car = {};
        let ok;
        data.forEach(d => {
            const cod = d.codigo;
            car[cod] = d.codigo;
        });
        console.log(car);
        this.collectionCarteras.doc(cartera).set(car)
            .then(() => {
                ok = true;
                console.log('AGREGADO');
            }).catch(error => {
                ok = false;
                console.log(error);
            });
        return ok;;

    }

    traerCartera = async (cartera) => {
        const ddd = [];
        const docCart = await this.collectionCarteras.doc(cartera).get();
        const data = docCart.data()
        console.log(data)

        for (let item in data) {
            const cart = {
                codigo: item,
                descripcion: data[item]
            }
            ddd.push(cart);
        }
        return ddd;
    }

    traerTodasCarteras = async () => {
        const ddd = {};
        const carteras = await this.collectionCarteras.get();
        carteras.forEach(doc => {
            ddd[doc.id] = doc.data()
        });
        return ddd;
    }
}

export default ConfiguracionProvider;