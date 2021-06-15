const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Jugal:FDSpqU1e4mLeTJyI@video-streaming.lv3gs.mongodb.net/test?retryWrites=true&w=majority',
    {useNewUrlParser: true , useUnifiedTopology: true}).then(() =>console.log('DB Connect'))
                            .catch(err => console.error(err));

app.get('/', (req,res)=>{
    res.send('Hello Jugal')
});

app.listen(5000);

