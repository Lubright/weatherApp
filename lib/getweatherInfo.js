const request = require('request');

function getWeatherInfo(addr, cb) {

  let url = `http://api.weatherstack.com/current?access_key=32ee3e29c616faab57fde7efa3386be3&query=${addr}&units=m`;

  request.get({
    url: url,
    json: true // body to json
  }, (err, res, body) => {
    if (err) {
      cb('error', null);
      return ;
    }
    else if (res.body.error) {
      cb('res.body.error', null);
      return ;
    }

    const result = res.body;
    cb(err, result);
  });
}

module.exports = {
  getWeatherInfo: getWeatherInfo
};