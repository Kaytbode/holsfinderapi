import { HolidayAPI } from 'holidayapi';
import 'dotenv/config';
import { success, badRequest } from '../utils/statuscode';
import { successMsg, errorMsg } from '../utils/messages';
import response from '../utils/response';


const key = process.env.API_KEY;
const holidayApi = new HolidayAPI({ key });

const getCountries = async (req, res) => {
  try {
    const { countries } = await holidayApi.countries();

    return response(res, success, successMsg, countries);
  } catch (err) {
    return response(res, badRequest, errorMsg, err);
  }
};

const getHolidays = async (req, res) => {
  const { country, month } = req.params;

  try {
    const { holidays } = await holidayApi.holidays({
      country,
      year: '2018',
      month,
    });
    return response(res, success, successMsg, holidays);
  } catch (err) {
    return response(res, badRequest, errorMsg, err);
  }
};

export { getCountries, getHolidays };
