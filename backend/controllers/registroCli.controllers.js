const RegistroCli = require("../models/registroCli");
const registroCliControllers = {};

const jwt = require("jsonwebtoken");

registroCliControllers.sayHi = async (req, res) => {
  console.log(req.decoded)
  res.status(200).json({ message: "hola" });
};

registroCliControllers.signup = async (req, res) => {
  console.log(req.body)
  const {  name, lastname, adress, phone, email, password, role } = req.body;

  const registroCliExists = await RegistroCli.findOne({ email });

  if (registroCliExists) {
    res.status(400).json({ message: "Usuario ya existe!" });
  } else {
    console.log(role)
    const newregistroCli = new RegistroCli({  name, lastname, adress, phone, email, password, role });
    await newregistroCli.save();

    //const token = jwt.sign({_id: newUser._id, email: newUser.email}, "pato")

    res.status(201).json({ message: "Usuario creado",newregistroCli });
  }
};

registroCliControllers.signin = async (req, res) => {
  //escribimos en el formulario
  const { email, password } = req.body;

  //lo que me devuelve la base de datos
  const registroCli = await RegistroCli.findOne({ email });

  if (!registroCli) {
    return res.status(401).json({ message: "Usuario no existe" });
  }

  if (registroCli.password !== password) {
    return res.status(401).json({ message: "La contraseña es incorrecta!" });
  }

  const token = jwt.sign({ _id: registroCli._id, name: registroCli.name,
   lastname: registroCli.lastname, adress: registroCli.adress,
    phone: registroCli.phone, email: registroCli.email,
     password: registroCli.password, role: registroCli.role }, "roulette");

  res.status(200).json({ message: "Tu estas logueado correctamente", token });
};

module.exports = registroCliControllers;

