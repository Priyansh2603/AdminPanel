import express from "express";
import {protect} from '../middlewares/protect.js'
import { AddUser, deleteUser, editUserDetails, getAllUsers, searchUser } from "../controllers/adminTasks.js";
import { checkRole } from "../middlewares/checkRole.js";

const router = express.Router();
// router.post("/login",authLogin);
router.post("/add",protect,checkRole,AddUser);
router.get("/getUsers",protect,checkRole,getAllUsers);
router.delete("/delete/:userId",protect,checkRole,deleteUser);
router.put("/update/:userId",protect,checkRole, editUserDetails);
router.post("/search",protect,checkRole,searchUser);
export const adminRoute = router;