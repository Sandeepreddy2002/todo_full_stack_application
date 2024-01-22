const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://sandip_6178:cNjJVJmoXySISRxt@cluster0.hzky8v9.mongodb.net/')

const userSchema = new mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})

const todo = mongoose.model('Todo', userSchema);

module.exports = todo;


// async function createUser(){
//     // const user = new User({
//     //     title:"Learn NodeJs",
//     //     description:"Daily 2 hrs",
//     //     completed:false
//     // })

//     // await user.save();

//     const user = await User.create({
//         title:"Learn NodeJs",
//         description:"Daily 2 hrs",
//         completed:false
//     })
// }

// createUser();