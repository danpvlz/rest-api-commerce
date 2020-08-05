const mongoose =require('mongoose')

const URI = process.env.MONGOOSE_URI
? process.env.MONGOOSE_URI
: 'mongodb://localhost/rest-api-commerce';

mongoose.connect(URI,{
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true});

const con=mongoose.connection;

con.once('open',()=>{
    console.log('DB connected!');
});