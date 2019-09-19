import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import routes from './routes/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.use((req, res, next) => res.status(404).send("Sorry can't find that!"));

app.listen(process.env.PORT);

export default app;
