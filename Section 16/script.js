'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

/***********************************************************************/
/***************** OUR FIRST AJAX CALL: XMLHttpRequest *****************/
/***********************************************************************/
console.log(
  `/***************** OUR FIRST AJAX CALL: XMLHttpRequest *****************/`
);

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
        <img class="country__img" src="${data?.flags?.svg}" />
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

// getCountryData('india');
// getCountryData('usa');

/************************************************************************/
/*********************** WELCOME TO CALLBACK HELL ***********************/
/************************************************************************/
console.log(
  `/*********************** WELCOME TO CALLBACK HELL ***********************/`
);

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
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
};

const getCountryAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText).pop();
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const neighbour = data?.borders?.[0];

    // if there is no neighbouring country, return
    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText).pop();
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('india');
// getCountryAndNeighbour('usa');

// callback hell another example:
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 seconds passed');
    setTimeout(() => {
      console.log('3 seconds passed');
      setTimeout(() => {
        console.log('4 seconds passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/************************************************************************/
/********************** PROMISES AND THE FETCH API **********************/
/************************************************************************/
console.log(
  `/********************** PROMISES AND THE FETCH API **********************/`
);

// using XMLHttpRequest()
/* const request = new XMLHttpRequest();
request.open('GET', `https://restcountries.com/v3.1/name/india`);
request.send(); */

// using fetch API
const request = fetch(`https://restcountries.com/v3.1/name/india`);
console.log(request);

/************************************************************************/
/************************** CONSUMING PROMISES **************************/
/************************************************************************/
console.log(
  `/************************** CONSUMING PROMISES **************************/`
);

const getCountryDataFetch = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      renderCountry(data.pop());
    });
};

// getCountryDataFetch('india');

// simplified version of getCountryDataFetch()
const getCountryDataFetchSimplified = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => renderCountry(data.pop()));
};

// getCountryDataFetchSimplified('usa');

/***********************************************************************/
/************************** CHAINING PROMISES **************************/
/***********************************************************************/
console.log(
  `/************************** CHAINING PROMISES **************************/`
);

const getCountryDataFetchChain = function (country) {
  // Country 01
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      if (!neighbour) return;

      // Country 02
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    // here we are calling it response because it really is the response of the fetch() - we also call json() on it so that the string is converted to a JS object
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'));
};

getCountryDataFetchChain('usa');
