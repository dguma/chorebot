//import required actions
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();//server
const cors = require('cors'); //middleware
const mongoose = require('mongoose'); //database
const port = 4000;

const uuid = require('uuid');

mongoose.set('strictQuery', false);

//Define app to use the express javascript framework
const app = express();

//Define the properties for express to use including middleware
app.use(bodyParser.urlencoded({ extended: false })); //url endings
app.use(cors()); //middleware

//Connect to Database Local || Online
const mongoDBLocalURI = 'mongodb://127.0.0.1:27017/chorebot-api';
mongoose.connect(mongoDBLocalURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('Connected to Database'))
.catch((err) => console.log('There is a connection error: ', err));

//Define or import models

const UserProfile = require('./models/UserProfile');

//Define Routes or Paths

//Get, Fetch, Read info from DB
app.get('/user-profile', async (req, res) => {
    const user = await UserProfile.find();
    res.json(user);
})

app.get('user-profile/:id', (req,res) => {
    UserProfile.findById(req.params.id)
    .then(usr => res.json(usr))
} )

app.post('/user-profile/new', (req,res) => {
    const newUser = new UserProfile({
        user: {
            firstName: 'Dylan',
            lastName: 'Guma',
            userName: 'PumaGuma',
            id: mongoose.Types.ObjectId(),
        }
    })

    newUser.save();

    res.json(newUser);
})

app.patch('/user-profile/:id', (req,res) => {
    const id = req.params.id;
    UserProfile.findByIdAndUpdate(
        {_id: id},
        {
            user: {
                firstName: 'Dylan',
                lastName: 'Guma',
                userName: 'PumaGuma',
            },
            choreBot: {
                daysOfWeek: {
                    monday: {
                        assignments: {
                            assignment: 'Clean Kitchen',
                            isComplete: false,
                            assignedTo: {
                                userId: '63ceed8b65a552803c687534',
                            }
                        }
                    }
                }
            }
        },
        {new: true}
    )
    .then(msg => res.json(msg))
})

app.delete('/user-profile/:id/remove', (req,res) => {
    const id = req.params.id;
    UserProfile.findByIdAndDelete({_id: id})
    .then(usr => res.json(usr))
})

//Define the port in which app will listen on
app.listen(port || process.env.DB_PORT, () => {
    console.log(`Express server is listening on port: ${port}`)
});