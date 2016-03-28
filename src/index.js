'use strict';
import SeriesInfoView from 'series-info-view';

export default function () {
  // Look up our todos from the server
  fetch(`http://gateway.marvel.com:80/v1/public/series/2021?apikey=3483ce45801a173a8d3e9f5dafe775c6`)
    // Wait for all of the text to come back from the server
    //   parse text from the server as JSON
    .then((response) => response.json())
    // // Take the JSON parsed data
    .then((info) => {
      // Select element
      const sidebar = document.querySelector(`.sidebar`);
      // throw into element
      const prof = new SeriesInfoView(sidebar, info.data.results[0]);
    });
}
