import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);

const CONNECTION_URL =
    'mongodb+srv://admin:admin@batch139.kdoph.mongodb.net/ice-lab';
const PORT = process.env.PORT || 4000;

mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () =>
            console.log(`Server running at localhost:${PORT}`)
        )
    )
    .catch((error) => console.log(`${error} did not connect.`));
