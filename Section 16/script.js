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

let renderCountry = function (data, className = '') {
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

// getCountryDataFetchChain('usa');

/************************************************************************/
/********************** HANDLING REJECTED PROMISES **********************/
/************************************************************************/
console.log(
  `/********************** HANDLING REJECTED PROMISES **********************/`
);

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

renderCountry = function (data, className = '') {
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
  // countriesContainer.style.opacity = 1;
};

const getCountryDataFetchError = function (country) {
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
    .then(response => response.json())
    .then(data => renderCountry(data.pop(), 'neighbour'))
    // here we can use the same callback function
    // because the callback function here will also be called with the error object that occurred so, then we can handle it in some way
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
//   getCountryDataFetchError('usa');
// });

// getCountryDataFetchError('abc');

/************************************************************************/
/*********************** THROWING ERRORS MANUALLY ***********************/
/************************************************************************/
console.log(
  `/*********************** THROWING ERRORS MANUALLY ***********************/`
);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const getCountryWithErrorHandling = function (country) {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error('No neighbour found!');
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data.pop(), 'neighbour'))

    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// btn.addEventListener('click', function () {
// getCountryWithErrorHandling('usa');
// });

// getCountryWithErrorHandling('abc');
// getCountryWithErrorHandling('australia');

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 01 *************************/`
);

/**
 * In this challenge you will build a function `whereAmI()` which renders
 * a country only based on GPS coordinates. For that, you will use a
 * second API to geocode coordinates. So in this challenge, you will use
 * an API on your own for the first time 😁
 *
 * TEST DATA:
 * Coordinates 01: 52.508, 13.381 (lat, lng)
 * Coordinates 02: 19.037, 72.873 (lat, lng)
 * Coordinates 03: -33.933, 18.474 (lat, lng)
 */

// PART 01

/**
 * TODO 01:
 *
 * Create a function `whereAmI()` which takes as inputs a latitude value
 * (`lat`) and a longitude value (`lng`) (these are GPS coordinates,
 * examples are in the test data above).
 */

let whereAmI = function (lat, lng) {};

/**
 * TODO 02:
 *
 * Do "reverse geocoding" of the provided coordinates. Reverse geocoding
 * means to convert coordinates to a meaningful location, like a city and
 * country name. Use this API to do the reverse geocoding:
 * https://geocode.xyz/api
 *
 * The AJAX call will be done to a URL with this format:
 * https://geocode.xyz/52.508,13.381?geoit=json
 *
 * Use the fetch API and promises to get the data. Do not use the
 * `getJSON()` function we created, that is cheating 😉
 *
 * NOTE: geocode.xyz is no longer free so, we used nominatim.org with the
 * url of "https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10"
 */

whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then(res => res.json())
    .then(data => console.log(data));
};

/**
 * TODO 03
 *
 * Once you have the data, take a look at it in the console to see all the
 * attributes that you received about the provided location. Then, using
 * this data, log a message like this to the console: "You are in Berlin,
 * Germany"
 */

whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then(res => res.json())
    .then(data =>
      console.log(`You are in ${data.features?.[0]?.properties?.display_name}`)
    );
};
/**
 * TODO 04:
 *
 * Chain a `.catch()` method to the end of the promise chain and log
 * errors to the console.
 */

whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.features?.[0]?.properties?.display_name}`);
    })
    .catch(err => console.log(err));
};

/**
 * TODO 05:
 *
 * This API allows you to make only 3 requests per second. If you reload
 * fast, you will get this error with code 403. This is an error with the
 * request. Remember, `fetch()` does not reject the promise in this case.
 * So, create an error to reject the promise yourself, with a meaninful
 * error message.
 */
whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.features?.[0]?.properties?.display_name}`);
    })
    .catch(err => console.error(`${err.message} 💥💥💥`));
};

// PART 02

/**
 * TODO 06:
 *
 * Now it's time to use the received data to render a country. So take the
 * relevant attribute from the geocoding API result, and plug it into the
 * countries API that we have been using.
 */
whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.features?.[0]?.properties?.display_name}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data?.features?.[0]?.properties?.address?.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => console.log(data))
    .catch(err => console.error(`${err.message} 💥💥💥`));
};

/**
 * TODO 07:
 *
 * Render the country and catch any errors, just like we have done in the
 * last lesson (you can even copy this code, no need to type the same
 * code).
 */

whereAmI = function (lat, lng) {
  fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  )
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.features?.[0]?.properties?.display_name}`);
      return fetch(
        `https://restcountries.com/v3.1/name/${data?.features?.[0]?.properties?.address?.country}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);
      return res.json();
    })
    .then(data => {
      renderCountry(data.pop());
      countriesContainer.style.opacity = 1;
    })
    .catch(err => console.error(`${err.message} 💥💥💥`));
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
