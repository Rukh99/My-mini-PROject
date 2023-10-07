const express = require("express");
const Model = require ("../Models/Projectmodel");

const router= express.Router();
router.post("/add", (req, res) => {
    console.log(req.body);
  
    new Model(req.body)
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      })
    })
    router.get("/getall", (req, res) => {
      
        Model.find({})
          .then((result) => {
            res.json(result);
          })
          .catch((err) => {
            console.log(err);
            res.json(err);
          })
        })
        router.put("/update/:id", (req, res) => {
          Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then((result) => {
              res.json(result);
            })
            .catch((err) => {
              res.json(err);
            });
        });

    module.exports = router;