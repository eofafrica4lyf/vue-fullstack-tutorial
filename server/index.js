const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//Middlewares
app.use(bodyParser.json())
app.use(cors());

const posts = require('./routes/api/post.js')

app.use('/api/posts', posts);


//Handle production. Make sure this is below the route just above
if(process.env.NODE_ENV === 'production'){
  //Static folder
  app.use(express.static(__dirname + '/public'));

  //Handle SPA
  app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'))
}


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
