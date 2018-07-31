const express = require ('express');
const app = express();
const dbRoutes = require('./routes/databaseAccess.js');
const authRoutes = require('./routes/authorization.js');



//make build folder publicly available
app.use(express.static('build'));
app.use('/db', dbRoutes);
app.use('/auth', authRoutes);

//mongoDB stuff
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);


//change port here
app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
