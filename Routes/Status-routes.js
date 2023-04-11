const express=require("express");
const {addStatus}=require("../Controller/status-control")

const statusRouter=express.Router();

statusRouter.put("/:id",addStatus)

module.exports=statusRouter;