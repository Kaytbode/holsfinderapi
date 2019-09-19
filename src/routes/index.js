import { Router } from 'express';
import { getCountries, getHolidays } from '../controllers/holiday';

const routes = Router();

routes.get('/', (req, res) => res.status(200).send('Welcome to holsfinder'));

routes.get('/api/v1/countries', getCountries);

routes.get('/api/v1/holidays/:country/:month', getHolidays);


export default routes;
