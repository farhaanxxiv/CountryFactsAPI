const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Country = require('./countrySchema')



const uri = "mongodb+srv://farhaanxxiv:farhaan24@cluster0.tsjcz.mongodb.net/Countries?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("database connected");
    })

    .catch(err => {
        console.log("Could not connect", err); 
    });


    app.use(express.json());



    app.get('/save', async (req,res)=>{

        try {
            let post = new Country({
                name: 'ind',
                facts: ["bad", "good"] 
            });
        
            post = await post.save()
            console.log(post);
          
        } catch (e) {
        
        
            console.error(e);
        
        }
        
    }) 


app.get('/:id', async (req,res) => {

    try{
        let post = await Country.find({name:req.params.id})
        
        let rand = Math.floor(Math.random() * 4);
        console.log(rand)
        res.send(post[0].facts[rand])


        }catch(e){
    
            console.log(e);
        }

        
})


app.listen(4000);