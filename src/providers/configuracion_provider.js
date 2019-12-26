import firebase from 'firebase/app';
import 'firebase/firestore';

import ConfiguracionGlobal from '../configuracionGloba';

class ConfiguracionProvider {

    configuracionGlobal = new ConfiguracionGlobal();
    collectionProcedimientos = firebase.firestore().collection((this.configuracionGlobal.ipress['cas'] + '-procedimientos'));

    agregarProcedimiento = async (codigo, descripcion) => {
        let ok;
        await this.collectionProcedimientos.doc(codigo).set({
            descripcion
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
                descripcion: nuevo.descripcion
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
            }
            ddd.push(proc);
        });
        return ddd;
    }
}

export default ConfiguracionProvider;