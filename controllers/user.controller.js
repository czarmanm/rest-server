const { request, response } = require('express')

const userGet = (req = request, res = response) => {
    const { q, name = "No name", apikey } = req.query

    res.json({
        message : "get API - controller",
        q,
        name,
        apikey
    })
}

const userPost = (req, res = response) => {
    const { name, age } = req.body

    res.json({
        message : "post API - controller",
        name,
        age
    })
}

const userPut = (req = request, res = response) => {
    const { id } = req.params

    res.json({
        message : "put API - controller",
        id
    })
}

const userPatch = (req, res = response) => {
    res.json({
        message : "patch API - controller"
    })
}

const userDelete = (req, res = response) => {
    res.json({
        message : "delete API - controller"
    })
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userPatch,
    userDelete,
}