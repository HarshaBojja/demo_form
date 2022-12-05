import express from 'express'
import { createForm } from '../controllers/FormC.js';
const router=express.Router();

router.put("/create",createForm)

export default router