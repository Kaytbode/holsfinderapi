import express from 'express';
import 'dotenv/config';
import routes from './routes/index';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(5000);

export default app;
