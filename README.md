[![Build Status](https://travis-ci.com/Kaytbode/holsfinderapi.svg?branch=develop)](https://travis-ci.com/Kaytbode/holsfinderapi)
[![Coverage Status](https://coveralls.io/repos/github/Kaytbode/holsfinderapi/badge.svg?branch=develop)](https://coveralls.io/github/Kaytbode/holsfinderapi)
[![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
[![Hosted on Heroku](https://img.shields.io/badge/hosted%20on-Heroku-blue.svg)](https://holsfinderapi.herokuapp.com/)
[![API-DOCS on Swagger](https://img.shields.io/badge/API--DOCS%20on-Swagger-green.svg)](https://app.swaggerhub.com/apis-docs/Kaytbode/Holsfinder/1.0.0)
# Holsfinderapi
An API for finding national holidays by country. Mainly designed for use in browsers.

## Usage
URL to get all supported countries : `https://holsfinderapi.herokuapp.com/api/v1/countries`   
URL to get holidays by country and month : `https://holsfinderapi.herokuapp.com/api/v1/holidays/{country}/{month}`  

## Examples
### Get all supported countries
Using the javascript fetch api
` fetch('https://holsfinderapi.herokuapp.com/api/v1/countries') `

### Get all holidays of a country by month
` fetch(https://holsfinderapi.herokuapp.com/api/v1/holidays/US/1)`

## Built with
- Node
- Express
- [Holiday api](https://github.com/holidayapi/holidayapi-node)




