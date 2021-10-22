const RegistroRes = require('../models/RegistroRes')
const restaurantesControllers = {};



restaurantesControllers.showRestaurante = async (req, res) => {
  const restaurantes = await RegistroRes.find();
  res.status(200).json(restaurantes);
};

restaurantesControllers.create = async (req, res) => {
  try {
    const {namerestaurante, nit, local, adress, phone, email,password,role } = req.body;
     const newRestaurante = new RegistroRes({namerestaurante, nit, local, adress, phone,email,password,role})
 
    await newRestaurante.save();
    res.status(201).json({message: "un nuevo restaurante ha sido creado", newRestaurante}) 
      }catch(error) {
    console.log(error);
    res.status(401).json({ message: "No se pudo crear el Restaurante" });
  }
  
} ;
restaurantesControllers.delete = async (req, res) => {
      try {
      const {id} = req.params
      console.log(id)
      const response = await RegistroRes.findByIdAndDelete(id)
      if (!response) {
        res.status(404).json({msg: 'No existe el restaurante a eliminar'}) 
        return
      } else {
        res.status(201).json({msg: 'Eliminado correctamente'}) 
      }
    } catch (error) {
      res.status(500).json({msg: 'No se pudo eliminar'}) 
    }
  
} 

restaurantesControllers.edit = (req, res) => {
  const restaurante = req.body;
 /* console.log(restaurante);*/
  console.log(restaurante._id);
  RegistroRes.findOneAndUpdate(
    {_id: restaurante._id}, 
    { $set: restaurante }, 
    { new: true }, 
    function(err, doc) {
    console.log(doc);
    res.status(201).json(doc) 
  })
}
restaurantesControllers.showById = (req, res) => {
  const { id } = req.params;
  RegistroRes.findById(id, function (err, restaurante) {
    console.log(restaurante);
    res.status(201).json(restaurante);
  });
};

module.exports = restaurantesControllers;