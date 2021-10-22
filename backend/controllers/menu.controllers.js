const Menu = require("../models/Menu");
const menuControllers = {};
const { ObjectId } = require("mongodb");

menuControllers.showMenu = async (req, res) => {
  const menus = await Menu.find();
  res.status(200).json(menus);
};

menuControllers.create = async (req, res) => {
  try {
    const { name, price, description, availability, type, restaurantId,file } = req.body;
    const menu = new Menu({ name, price, description, availability, type, restaurantId,file });
    await menu.save();
    res.status(201).json({ alert: "un nuevo menu ha sido creado", menu });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "No se pudo crear el menu" });
  }
};


menuControllers.delete = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const response = await Menu.findByIdAndDelete(id);
    if (!response) {
      return res.status(404).json({ msg: "No existe el menu a eliminar" });
    } else {
      res.status(201).json({ msg: "Eliminado correctamente" });
    }
  } catch (error) {
    res.status(500).json({ msg: "No se pudo eliminar" });
  }
};

menuControllers.showById = (req, res) => {
  const { id } = req.params;
  Menu.findById(id, function (err, menu) {
   /* console.log(menu);*/
    res.status(201).json(menu);
  });
};

menuControllers.showRestaurantMenus = (req, res) => {
  const { id } = req.params;
  console.log(id);
  Menu.find({ restaurantId: id}, function (err, result) {
    res.status(200).json(result);
  })
};

menuControllers.edit = (req, res) => {
  const menu = req.body;
  /*console.log(menu);*/
 /* console.log(menu._id);*/
  Menu.findOneAndUpdate(
    { _id: menu._id },
    { $set: menu },
    { new: true },
    function (err, doc) {
     console.log(doc);
      res.status(201).json(doc);
    }
  );
};

module.exports = menuControllers;
