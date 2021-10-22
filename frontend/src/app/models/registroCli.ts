export class RegistroCli {

  constructor(_id = "", name = "", lastname = "", adress = "", phone = "",email = "",password = "",role = ""){
    //inicializa los valores del atributo
    this._id = _id;
    this.name = name;
    this.lastname = lastname;
    this.adress = adress;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.role = role;

  }
  //atributos -  definicion
  _id:any
  name:any
  lastname:any
  adress:any
  phone:any
  email:any
  password:any
  role:any
  //constructor

}
