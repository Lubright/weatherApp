// https://stackoverflow.com/questions/63928043/vanilla-js-ready-function-what-is-document-documentelement-doscroll

if (document.readyState === "complete") {
  // Document already fully loaded
  ready();
} else {
  // Add event listener for DOMContentLoaded (fires when document is fully loaded)
  document.addEventListener("DOMContentLoaded", ready);
}

function ready() {
  // Handler here
  console.log("DOM ready");

  var form = document.querySelector('form');
  var location_input = document.getElementById("location");
  var submit = document.getElementById("submit");
  var h4_location = document.querySelector('#h4-location');
  var temperature = document.querySelector('#temperature');
  var time = document.querySelector('#time');
  var weather_descriptions = document.querySelector('#weather_descriptions');

  form.addEventListener('submit', e => {
    e.preventDefault();
    let location = location_input.value;

    // TODO: fetch
    let index_url = window.location.href;
    // console.log(`index_url: ${index_url}`);
    let query_url = `${index_url}weather?city=${location}`;
    console.log(`query_url: ${query_url}`);
    fetch(query_url).then( res => {
      // console.log(res);
      // https://developer.mozilla.org/en-US/docs/Web/API/Response/json
      res.json().then( result => {
        if (result.error) {
          console.log(result.error);
        }
        else {
          console.log(result);
          h4_location.textContent = result.location;
          temperature.textContent = result.temperature;
          time.textContent = result.time;
          weather_descriptions.textContent = JSON.stringify(result.weather_descriptions, null, 2);
        }
      } );

    } );
  });

  

}