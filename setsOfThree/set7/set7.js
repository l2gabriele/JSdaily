import request from 'request';
import rp from  'request-promise';
import cities from '../../resources/cities.json';

/***********************
  Exercise 1:
***********************/

/************************
  Exercise 2: This function should take in the cities array and sort based on two
  criteria:
    1. More than 99 percent population growth from 2000 to 2013
    2. Population under 100,000 people.
************************/

function theProblemWithStrings(citiesArr){

};

/***********************
  Exercise 3:

***********************/

function whatsUrBestDay(){
      let options = {
        uri: 'https://wakatime.com/api/v1/users/current/stats/last_7_days',
        qs: {
            access_token: '6614618d-bdab-4d22-9fe1-9f6d15a3cfa0'
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
      };
      
      rp(options)
        .then(function (repos) {
            console.log('User has %d repos', repos);
        })
        .catch(function (err) {
            // API call failed...
        });
  }

  whatsUrBestDay();

/************************
  Ignore this below!
************************/

module.exports = {
      theProblemWithStrings: theProblemWithStrings,
      whatsUrBestDay: whatsUrBestDay,
}
