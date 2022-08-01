const express = require('express');
const router = express.Router();
const {Traveller,Trip,Location} = require('../models');

router.get("/",async (req,res)=>{
    await Traveller.findAll({
        include:[Trip]
    }).then(data=>{
        res.json(data)
    }).catch(err=>{
        res.status(500).json({msg:"oh noes! error!",err})
    })
})
router.post("/",(req,res)=>{
    Traveller.create(req.body).then(newTraveller=>{
        res.json(newTraveller)
    }).catch(err=>{
        res.status(500).json({msg:"oh noes! error!",err})
    })
})
router.get('/:id',async (req, res) => {
    // find a single product by its `id`
    // be sure to include its associated Category and Tag data
    id = req.params.id
    await Traveller.findOne({
      where:{
        id: req.params.id,
      },
      include:[Trip]
    }).then(data=>{
      res.json(data)
    }).catch(err=>{
      res.status(500).json({msg:"oh noes! error!",err})
    })
  });




module.exports = router;