import express from "express";
import indexRoutes from './routes/index.routes'
import { create } from 'express-handlebars';
import path from 'path';
import morgan from 'morgan';



const app = express()

app.set("views", path.join(__dirname, 'views'));

//para servir archivos con extension.hbs
app.engine(
    ".hbs", 
    create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
}).engine
);
app.set("view engine", ".hbs")

//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
//rutas
app.use(indexRoutes)

//static files
app.use(express.static(path.join(__dirname, "public")));
//conexion a mongodb
// const mongoose = require('mongoose');

// const server = '127.0.0.1:27017'; // REPLACE WITH YOUR OWN SERVER
// const database = 'test';          // REPLACE WITH YOUR OWN DB NAME

// mongoose.connect(`mongodb://${server}/${database}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('MongoDB connected =) !!');
// }).catch(err => {
//     console.log('Failed to connect to MongoDB', err);
// });

export default app;