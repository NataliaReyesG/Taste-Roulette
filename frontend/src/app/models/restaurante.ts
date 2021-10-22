export class Restaurante {

  constructor(_id = "", namerestaurante = "", nit = "", adress = "",local = "", phone = ""){
    //inicializa los valores del atributo
    this._id = _id;
    this.namerestaurante = namerestaurante;
    this.nit = nit;
    this.adress = adress;
    this.local = local;
    this.phone = phone;


  }
  //atributos -  definicion
  _id:string
  namerestaurante:string
  nit:string
  adress:string
  local:string
  phone:string

  //constructor

}
