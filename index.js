#!/usr/bin/env node
console.log ("bonjour");
'use strict'

const axios = require('axios');
const countryCode = require('country-list');

let country = process.argv[2];
let years = process.argv[3];
let code = countryCode.getCode(country);


if (country == undefined) {
    console.log("Please, enter a country");
} else if (years == undefined) {
    const date = new Date();
    const year = date.getFullYear();
    years = year;
} else {
    years = process.argv[3];
}

axios.get(`https://date.nager.at/api/v2/publicholidays/${years}/${code}`)
  .then(holidays => {

    for(let day of holidays.data){
        console.log(day.name + " : " + day.date);
    }

  })
  .catch(err => {
    console.log(err);
});