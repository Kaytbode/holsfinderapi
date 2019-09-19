import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';

chai.use(chaiHttp);

const countriesRoute = '/api/v1/countries';
const wrongRoute = '/api/v1/';
const holidaysRoute = '/api/v1/US/1';
const holidaysRouteWithoutCountry = '/api/v1//1';
const holidaysRouteWithoutMonth = '/api/v1/US/';

describe('Test for getting all countries', () => {
  it('should successfully return all listed countries', (done) => {
    chai
      .request(app)
      .get(countriesRoute)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return an error if route is wrong', (done) => {
    chai
      .request(app)
      .get(wrongRoute)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

describe('Test for getting holidays by country and month', () => {
  it('should successfully return all holidays of a country in a given month', (done) => {
    chai
      .request(app)
      .get(holidaysRoute)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });
  it('should return an error if country is not provided', (done) => {
    chai
      .request(app)
      .get(holidaysRouteWithoutCountry)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
  it('should return an error if month is not provided', (done) => {
    chai
      .request(app)
      .get(holidaysRouteWithoutMonth)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
  it('should return an error if month and country are not provided', (done) => {
    chai
      .request(app)
      .get(wrongRoute)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
