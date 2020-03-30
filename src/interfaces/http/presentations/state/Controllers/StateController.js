const formidable = require('./node_modules/formidable');
var fs = require('fs');
const API = ({ getStateOperation, getAllStateOperation, createStateOperation , updateStateOperation , deleteStateOperation }) => ({
  getState: async (req, res) => {
    const state = await getStateOperation.execute(req.params.id);
    res.send({status:200,result:state});
  },
  getAll: async (req, res) => {
    const state = await getAllStateOperation.execute();
    res.header('X-Total-Count',state.total);

    res.send({status:200,result:state.data});
  },
  getImage: async (req, res) => {
    res.sendFile(`${__dirname }/state/uploads/${req.params.image}`);
  },
  createState: async (req, res) => { 
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      throw err
    }


    
    fs.copyFileSync(files.flag.path,  __dirname + '/state/uploads/' + files.flag.name, function(err) {  
      if (err) {
        throw err
      }
     });

     createStateOperation.execute({ name: fields.name, flag:files.flag.name}).then(function(response) {
      res.send({status:200,result:response});
    }).catch(function(e) {
      throw e;
    });
  });
   
  },
  updateState: (req, res) => {
    new formidable.IncomingForm().parse(req, (err, fields, files) => {
      if (err) {
        throw err
      }      
      fs.copyFileSync(files.flag.path,  __dirname + '/state/uploads/' + files.flag.name, function(err) {  
        if (err) {
          throw err
        }
       });
  
       updateStateOperation.execute({ id: fields.id,name: fields.name, flag:files.flag.name}).then(function(response) {
        res.send({status:200,result:response});
      }).catch(function(e) {
        throw e;
      });
    }); 
  },
  deleteState: async (req, res) => {
    await deleteStateOperation.execute(req.params.id);
    const state = await getStateOperation.execute(req.params.id);
    res.send({status:200,result:state});
  }
})

module.exports = API;