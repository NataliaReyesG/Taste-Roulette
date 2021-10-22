export class Menu {
  //atributos -  definicion
  _id:string
  name:string
  price:string
  description:string
  availability:string
  type:string
  file:string
  //constructor
  constructor(_id = "", name = "", price = "", description = "",availability = "", type = "",file = ""){
    //inicializa los valores del atributo
    this._id = _id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.availability = availability;
    this.type = type;
    this.file = file;
  }
}
