'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function (country) {
  const request = new XMLHttpRequest();

  // first parameter is to mention the kind of request we want to make
  // second parameter is a string containing the URL to which the AJAX call should be made to
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);

  /**
   * Here we send the request.
   *
   * That request then fetches the data in the background and then, once
   * that is done, it will emit the `load` event.
   */
  request.send();

  /**
   * Using the `addEventListener()` we are waiting for that `load` event
   * to emit so, as soon as the data arrives, its callback function will be
   * called.
   */
  request.addEventListener('load', function () {
    /**
     * The `this` keyword inside the `addEventListener()` is the `request`.
     * So, we could also log `request` but, let's stick with `this`.
     *
     * The response is in the property `responseText` - Again, this property
     * is only set once the data has actually arrived.
     */
    // console.log(this.responseText);

    // converting JSON to JS object and storing it in a variable
    const data = JSON.parse(this.responseText).pop();
    console.log(data);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${Object.values(
            data.languages
          ).join(', ')}</p>
          <p class="country__row"><span>💰</span>${
            Object.values(data.currencies)[0].name
          }</p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('india');
getCountryData('usa');
