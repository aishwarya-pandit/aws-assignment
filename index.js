const express = require('express');
// Init App
const app = express();
const router = express.Router(); //routing system
const appConfig = require('./config/config');
//can destructure more values from as file grows
let {server: env} = require('./config/config'); 




// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config(); 
//     //automatically fetch config from .env file
//     //if you do not want to go to infra level, can manage env variables at app level. 
//     //But if the value defined at infra (system) level, then that will take priority.
//     console.log(`Environment: ${process.env.NODE_ENV}`); 
// }


// app.use(router);
// router.get('/', (req, res) => {
//    res.send('My AWS Assignment');
// })


app.get('/test', (req, res) => {
   res.send('My AWS Assignment');
})

app.set(`port`, (process.env.PORT || appConfig[env].port));
app.listen(app.get('port'), () => {
    console.log(`Server started at ${app.get('port')}`)
});




