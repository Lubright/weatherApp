const express = require('express');
const {getWeatherInfo} = require('../lib/getweatherInfo');

const router = express.Router();

const global_params = {
  title: 'Weather',
  author: 'Benny'
};

router.get('/', function(req, res) {
  Object.assign(res.locals, global_params);
  res.locals.content = 'Hello From hbs';
  
  res.render('index', res.locals);
});

router.get('/help', function(req, res) {
  Object.assign(res.locals, global_params);
  
  res.render('help', res.locals);
});

router.get('/help/*', (req, res) => {
  Object.assign(res.locals, global_params);
  res.locals.errorMessage = '404 sub page of help Not Found!';

  res.render('error', res.locals);
});

router.get('/weather', (req, res) => {
  let query =req.query;
  console.log(req.query);

  if (!req.query.city) {
    return res.send({
      error: 'You must provide a city'
    });
  }

  Object.assign(res.locals, global_params);

  // TODO: getWeatherInfo
  getWeatherInfo(req.query.city, (err, result) => {
    // console.log('-'.repeat(50));
    // console.log('err:', err);
    // // console.log('result:', result);
    // console.log('location:', result.location.name);
    // console.log('temperature:', result.current.temperature, 'C');
    // console.log('time:', result.current.observation_time);
    // console.log('weather_descriptions:', result.current.weather_descriptions);

    return res.send({
      err: err,
      // result: result,
      location: result.location.name,
      temperature: result.current.temperature + "C",
      time: result.current.observation_time,
      weather_descriptions: result.current.weather_descriptions
    });

  });

});

router.get('*', (req, res) => {
  Object.assign(res.locals, global_params);
  res.locals.errorMessage = '404 Page Not Found!';

  res.render('error', res.locals);
});

module.exports = router;
