import request from 'request';
import rp from  'request-promise';
import poe from '../../resources/randomPoe.json';

/************************
  Exercise 1:
************************/

function titleCase(string){
  return string;
}

/***********************
  Exercise 2:
***********************/

function alphaToPoe(poe){

}

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

/************************
  Ignore this below!
************************/

module.exports = {
     titleCase: titleCase,
     whatsUrBestDay: whatsUrBestDay,
     numberFromBinary: numberFromBinary
}
