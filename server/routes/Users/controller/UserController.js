const User = require('.../model/UserModel')

const createUser = async(req,res) => {
    try{
        const{ name, age, favoriteMovie } = req.body
        const newUser = new User({
            name: name,
            age: age,
            favoriteMovie: favoriteMovie
        })

        const savedUser = await newUser.save()
        res.status(200)
        res.json({ message: "User has been created.", payload: savedUser })
    }
    catch(err) {
        res.status(500).json({ message: "error creating user.", error: err })
    }
}

const getSingleUser = async(req, res) => {
    const { id } = req.params
    try {
        let singleUser = await User.findById(id)
        res.status(200).json({ payload: singleUser })
    }
    catch(err) {
        res.status(500).json(err)
    }
}

const updateUser = async(req, res) => {
    const { id } = req.params
    try {
        let updateUser = await User.findByIdAndUpdate(id, req.body, { new:true })
        if(updateUser === null) throw new Error("Doesn't exist.")
        res.status(200).json({ message: "error", error: err.message })
    }
    catch(err) {
        res.status(500).json({ message: "error", error: err.message })
    } 
}

const deleteUser = async(req, res) => {
    const { id } = req.params
    try {
        let deleteUser = await User.findByIdAndDelete(id)
        if(deleteUser === null) throw new Error("Doesn't exist.")
        res.status(200).json({ message: "User has been deleted.", payload: deleteUser })
    }
    catch(err) {
        res.status(500).json({ message: "error", error: err.message })
    }
}

module.exports = {
    createUser,
    getSingleUser,
    updateUser,
    deleteUser
}