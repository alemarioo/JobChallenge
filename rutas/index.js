//const Crud = require('../Crud/crud_info');
const {Router} = require('express');
const express = require('express');
const router = Router();

router.post('/', express.json({type: '*/*'}), (req,res)=> {
    
})

router.get('/distance', (req,res)=> {
    console.log(req.query)
})

module.exports = router;