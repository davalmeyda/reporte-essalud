
class CitasPorServiciosModel {

    constructor(CENTRO, SERVICIO, VOLUNTARIAS, RECITAS, INTERCONSULTAS, REFERIDOS, ESSAENLINEA, MODULOS, CENTROASIS) {

        this.CENTRO = CENTRO;
        this.SERVICIO = SERVICIO;
        this.VOLUNTARIAS = VOLUNTARIAS;
        this.RECITAS = RECITAS;
        this.INTERCONSULTAS = INTERCONSULTAS;
        this.REFERIDOS = REFERIDOS;
        this.ESSAENLINEA = ESSAENLINEA;
        this.MODULOS = MODULOS;
        this.CENTROASIS = CENTROASIS;
    }

    fromJson(json) {

        this.CENTRO = json.CENTRO;
        this.SERVICIO = json.SERVICIO;
        this.VOLUNTARIAS = json.VOLUNTARIAS;
        this.RECITAS = json.RECITAS;
        this.INTERCONSULTAS = json.INTERCONSULTAS;
        this.REFERIDOS = json.REFERIDOS;
        this.ESSAENLINEA = json.ESSAENLINEA;
        this.MODULOS = json.MODULOS;
        this.CENTROASIS = json.CENTROASIS;

    }
}
export default CitasPorServiciosModel;