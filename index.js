const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Country = require('./countrySchema')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }))
app.use('/img', express.static('img'));



const uri = "mongodb+srv://farhaanxxiv:farhaan24@buymeachai.hrdm0x6.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("HI USER");
    })

    .catch(err => {
        console.log("Maybe I have not looked into this project since a long time and some services needs to be renewed", err); 
    });


    app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
        next();
    });



    app.get('/', (req,res) =>{
      //  res.send('Random Country Facts API---https://countryfacts-api.herokuapp.com/{countryName}')
      res.render('index')
    })


    // app.get('/save', async (req,res)=>{

    //     try {
    //         let post = new Country({
    //             name: 'ind',
    //             facts: ["bad", "good"] 
    //         });
        
    //         post = await post.save()
    //         console.log(post);
          
    //     } catch (e) {
        
        
    //         console.error(e);
        
    //     }
        
    // }) 


app.get('/:id', async (req,res) => {

    try{
        let post = await Country.find({name:req.params.id})
        let rand = Math.floor(Math.random() * 4);
        res.send(post[0].facts[rand])

        }catch(e){
    
            //console.log(e);
            res.send('Incorrect Country or Country Not Available')
        }

})

 


app.listen(process.env.PORT || 8000);

