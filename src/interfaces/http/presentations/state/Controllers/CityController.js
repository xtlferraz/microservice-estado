const API = ({ getCityOperation, getAllCityOperation, createCityOperation, updateCityOperation, deleteCityOperation }) => ({
  getCity: async (req, res) => {
    const city = await getCityOperation.execute(req.params.id);
    res.send({status:200,result:city});
  },
  getAll: async (req, res) => {
    const city = await getAllCityOperation.execute();
    res.header('X-Total-Count',city.total);
    res.send({status:200,result:city.data});
  },
  createCity: async (req, res) => {
    const result = await createCityOperation.execute(req.body);
    res.send({status:200,result:result});
  },
  updateCity: async (req, res) => {
  
    const result = await updateCityOperation.execute(req.body);
    res.send({status:200,result:result});
  },
  deleteCity: async (req, res) => {
    await deleteCityOperation.execute(req.params.id);
    const city = await getCityOperation.execute(req.params.id);
    res.send({status:200,result:city});
  }
})

module.exports = API;