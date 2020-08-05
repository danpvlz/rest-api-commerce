const express = require('express')
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app=express();

//settings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req,file,cb){
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname,'public')));

//rote
app.use('/api/categoria',require('./routes/categorias'));
app.use('/api/producto',require('./routes/productos'));
app.use('/api/cliente',require('./routes/cliente'));
app.use('/api/pedido',require('./routes/pedidos'));

module.exports = app;