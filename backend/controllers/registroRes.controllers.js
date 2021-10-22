
const RegistroRes = require("../models/RegistroRes");
const registroResControllers = {};

const jwt = require("jsonwebtoken");

registroResControllers.sayHi = async (req, res) => {
  console.log(req.decoded);
  res.status(200).json({ message: "hola" });
};

registroResControllers.signup = async (req, res) => {
  try {
  const {namerestaurante, nit, adress, local, phone, email, password, role, file} = req.body;

  const registroResExists = await RegistroRes.findOne({ email });

  if (registroResExists) {
    res.status(400).json({ message: "Restaurante ya existe!" });
  } else {
    console.log(role);
    const newregistroRes = new RegistroRes({ namerestaurante, nit, adress, local, phone, email, password, role,file});
    await newregistroRes.save();

       res.status(201).json({ message: "Restaurante creado", newregistroRes });
  }
  } catch (error) {
   console.log(error); 
  }
};

registroResControllers.signin = async (req, res) => {
  //escribimos en el formulario
  const { email, password } = req.body;

  //lo que me devuelve la base de datos
  const registroRes = await RegistroRes.findOne({ email });

  if (!registroRes) {
    return res.status(401).json({ message: "Usuario no existe" });
  }

  if (registroRes.password !== password) {
    return res.status(401).json({ message: "La contraseña es incorrecta!" });
  }

  const token = jwt.sign(
    {
      _id: registroRes._id,
      namerestaurante: registroRes.namerestaurante,
      nit: registroRes.nit,
      local: registroRes.local,
      adress: registroRes.adress,
      phone: registroRes.phone,
      email: registroRes.email,
      password: registroRes.password,
      role: registroRes.role
    },
    "roulette"
  );

  res.status(200).json({ message: "Tu estas logueado correctamente", token });
};

module.exports = registroResControllers;
