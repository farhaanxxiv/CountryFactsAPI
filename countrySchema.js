const mongoose = require('mongoose')


const string = {
    
        type:String,
  }

  const countrySchema = new mongoose.Schema({

    
    name: string,   
    facts: [String]
    

  });

  module.exports = new mongoose.model('Country', countrySchema,'Country');
  
 
