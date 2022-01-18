import express from 'express';

import User from '../models/Users.js';

const router = express.Router();

export const addUser = async (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export default router;
