export class Auth {
  //constructor
  constructor(_id = "",name = "",lastname = "",adress = "",phone = "", email = "", password = "", role = 0){
      //inicializa los valores del atributo
      this._id = _id;
      this.name= name;
      this.lastname= lastname;
      this.adress= adress;
      this.phone= phone;
      this.email = email;
      this.password = password;
      this.role = role;

  }

  //atributos -  definicion
  _id:string
  name:string
  lastname:string
  adress:string
  phone:string
  email:string
  password:string
  role:number
}
