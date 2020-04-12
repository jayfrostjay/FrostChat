const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middlewares/logging');
const app = express();

const PORT = process.env.PORT || 5000;

// app.use(logger);

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars'); 

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false})); 

// api routes
app.use('/api/users', require('./routes/api/users'));  

// homepage of serverside route
app.use('/', (req, res) => {
    res.render('index', {
        title: 'Default Homepage of FrostChat Server'  
    });
}); 

//static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`)); 