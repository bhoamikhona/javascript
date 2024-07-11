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
/* setTimeout(() => {
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
}, 1000); */

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
// console.log(request);

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

/**********************************************************************/
/********************** THROWING ERRORS MANUALLY **********************/
/**********************************************************************/
console.log(
  `/*********************** THROWING ERRORS MANUALLY ***********************/`
);

let getJSON = function (url, errorMsg = 'Something went wrong') {
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

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

/************************************************************************/
/************************ EVENT LOOP IN PRACTICE ************************/
/************************************************************************/
console.log(
  `/************************ EVENT LOOP IN PRACTICE ************************/`
);

/* console.log('Test start');

// this timer will be put on the callback queue afte 0 seconds
setTimeout(() => console.log(`0 sec timer`), 0);

// building a promise that will resolve immediately - will learn about this in detail in the next lesson
Promise.resolve('Resolved promise 1').then(res => console.log(res));

// long running task in the promise - to demonstrate that the timer really doesn't run after 0 seconds
Promise.resolve('Resolved promise 2').then(res => {
  // for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
});

console.log(`Test end`); */

/***********************************************************************/
/********************** BUILDING A SIMPLE PROMISE **********************/
/***********************************************************************/
console.log(
  `/********************** BUILDING A SIMPLE PROMISE **********************/`
);

// // passing in an executor function inside the Promise() constructor
// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log(`Lottery draw is happening 🔮`);
//   setTimeout(function () {
//     /**
//      * Here we will generate a random number between 0 and 1. If the
//      * number is greater than 0.5 then we want to call the resolve()
//      * function that we pass into this function.
//      */
//     if (Math.random() >= 0.5) {
//       /**
//        * In this situation, we say that we win the lottery.
//        *
//        * This means a fulfilled promise.
//        *
//        * In order to set the promise as fulfilled, we use the resolve()
//        * function.
//        *
//        * Basically, calling the resolve() function like this, will make
//        * the promise as fulfilled.
//        *
//        * We can also call it a resolved promise, that's the reason why this
//        * method is called resolve.
//        */
//       resolve(`You WIN! 💰`);
//     } else {
//       reject(new Error(`You lost your money 💩`));
//     }
//   }, 2000);
// });

// // consuming the lotterPromise
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

/************************************/

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('1 second passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('2 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('3 seconds passed');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('4 seconds passed');
//   });

/** --------------- VS --------------- **/

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 seconds passed');
//     setTimeout(() => {
//       console.log('3 seconds passed');
//       setTimeout(() => {
//         console.log('4 seconds passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

/************************************/
/* 
// immediately resolved promise
Promise.resolve('abc').then(x => console.log(x));

// immediately rejected promise
// here we didn't use then() because there will be no resolved value
// anyway so, we directly use catch()
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
 */
/************************************************************************/
/******************* PROMISIFYING THE GEOLOCATION API *******************/
/************************************************************************/
console.log(
  `/******************* PROMISIFYING THE GEOLOCATION API *******************/`
);

// console.log('Getting position');

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;

      return fetch(
        `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
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

btn.addEventListener('click', whereAmI);

/***********************************************************************/
/************************* CODING CHALLENGE 02 *************************/
/***********************************************************************/
console.log(
  `/************************* CODING CHALLENGE 02 *************************/`
);

/**
 * For this challenge you will have to watch the lesson. Then, build the
 * image loading functionality that was shown in it.
 *
 * The tasks are not super descriptive so, pretend that you are working
 * on your own and figure some of the things out yourself.
 *
 * TEST DATA: Images in the img folder. Test the error handler by passing
 * a wrong image path. Set the network speed to "Fast 3G" in the dev tools
 * Network tab, otherwise images load too fast.
 */

// PART 01

/**
 * TODO 01:
 *
 * Create a function `createImage()` which receives `imgPath` as an input.
 * This function returns a promise which creates a new image (use
 * `document.createElement('img')`) and sets the `.src` attribute to the
 * provided image path.
 */
// let createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;
//   });
// };

/**
 * TODO 02:
 *
 * When the image is done loading, append it to the DOM element with the
 * 'images' class, and resolve the promise. The fulfilled value should be
 * the image element itself. In case there is an error loading the image
 * (listen for the `error` event), reject the promise.
 */
// const imgContainer = document.querySelector('.images');

// createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement('img');
//     img.src = imgPath;

//     img.addEventListener('load', function () {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image not found'));
//     });
//   });
// };

/**
 * TODO 03:
 *
 * If this part is too tricky for you, just watch the first part of the
 * solution.
 */

// PART 02

/**
 * TODO 04:
 *
 * Consume the promise using .then and also add an error handler.
 */

// createImage('./img/img-1.jpg')
//   .then(img => console.log('Image 1 loaded'))
//   .catch(err => console.error(err));

/**
 * TODO 05:
 *
 * After the image has loaded, pause execution for 2 seconds using the
 * `wait` function we created earlier.
 */

// createImage('./img/img-1.jpg')
//   .then(img => {
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('wait 2 seconds');
//   })
//   .catch(err => console.error(err));

/**
 * TODO 06:
 *
 * After the 2 seconds have passed, hide the current image (set display
 * CSS property to 'none'), and load a second image (Hint: Use the image
 * element returned by the 'createImage' promise to hide the current
 * image. You will need a global vairable for that 😉).
 */

let currentImg;

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/**
 * TODO 07:
 *
 * After the second image has loaded, pause execution for 2 seconds again.
 */

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     currentImg.style.display = 'block';
//     return wait(2);
//   })
//   .then(() => console.log('wait'))
//   .catch(err => console.error(err));

/**
 * TODO 08:
 *
 * After the 2 seconds have passed, hide the current image.
 */

// createImage('./img/img-1.jpg')
//   .then(img => {
//     currentImg = img;
//     console.log('Image 1 loaded');
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 2 loaded');
//     currentImg.style.display = 'block';
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .then(img => {
//     currentImg = img;
//     console.log('Image 3 loaded');
//     currentImg.style.display = 'block';
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/***********************************************************************/
/***************** CONSUMING PROMISES WITH ASYNC/AWAIT *****************/
/***********************************************************************/
console.log(
  `/***************** CONSUMING PROMISES WITH ASYNC/AWAIT *****************/`
);

const whereAmIAsync = async function () {
  // getting position
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // reverse geocoding
  const resGeo = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
  );
  const dataGeo = await resGeo.json();

  // fetching country
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
  );
  const data = await res.json();
  renderCountry(data.pop());
  countriesContainer.style.opacity = 1;
};

// whereAmIAsync();
// console.log('FIRST');

/***********************************************************************/
/******************* ERROR HANDLING WITH TRY...CATCH *******************/
/***********************************************************************/
console.log(
  `/******************* ERROR HANDLING WITH TRY...CATCH *******************/`
);

// error from catch block since `const` variable re-assigned
/* try {
  let y = 1;
  const x = 2;
  x = 3;
} catch (err) {
  console.error(err.message);
} */

// no error since `let` variable re-assigned
/* try {
  let y = 1;
  const x = 2;
  y = 3;
} catch (err) {
  console.error(err.message);
} */

let whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    );

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    console.log(data);
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;
  } catch (err) {
    console.log(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);
  }
};

// whereAmITry();

/***********************************************************************/
/**************** RETURNING VALUES FROM ASYNC FUNCTIONS ****************/
/***********************************************************************/
console.log(
  `/**************** RETURNING VALUES FROM ASYNC FUNCTIONS ****************/`
);

whereAmITry = async function () {
  try {
    // getting position
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // reverse geocoding
    const resGeo = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=geojson&lat=${lat}&lon=${lng}&zoom=10`
    );

    // checking if status is OK
    if (!resGeo.ok) {
      throw new Error(`Problem getting lcoation data`);
    }

    const dataGeo = await resGeo.json();

    // fetching country
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo?.features?.[0]?.properties?.address?.country}`
    ); // this should create a 404 error

    // checking if status is ok
    if (!res.ok) {
      throw new Error(`Problem getting the country`);
    }

    const data = await res.json();
    renderCountry(data.pop());
    countriesContainer.style.opacity = 1;

    // returning a string
    return `You are in ${dataGeo.features?.[0]?.properties?.display_name}`;
  } catch (err) {
    console.error(`${err} 💥`);
    // using our previously created renderError() function
    renderError(`Something went wrong 💥 ${err.message}`);

    // reject promise returned from the async function
    throw err;
  }
};

console.log(`1: Will get location`);

(async function () {
  try {
    const city = await whereAmITry();
    console.log(city);
  } catch (error) {
    console.error(`${error.message} 💥`);
  }
  console.log(`2: Finished getting location`);
})();

/**********************************************************************/
/******************** RUNNING PROMISES IN PARALLEL ********************/
/**********************************************************************/
console.log(
  `/******************** RUNNING PROMISES IN PARALLEL ********************/`
);

// this function was created in the "throwing errors manually" lesson
// in this lesson, we are going to simply utilize it
getJSON = function (url, errorMsg = 'Something went wrong') {
  // this function takes in a url from which we want to fetch data
  // it returns the JSON data if it is success or throws an error
  // the error message can customized or the default one will be used
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([data1.capital?.[0], data2.capital?.[0], data3.capital?.[0]]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map(d => d[0]?.capital?.[0]));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('greece', 'france', 'italy');

/**********************************************************************/
/******** OTHER PROMISE COMBINATORS: RACE, ALLSETTLED, AND ANY ********/
/**********************************************************************/
console.log(
  `/******** OTHER PROMISE COMBINATORS: RACE, ALLSETTLED, AND ANY ********/`
);

/***** Prmomise.race() *****/
(async function () {
  const res = await Promise.race([
    // getJSON(`https://restcountries.com/v3.1/name/brazilllll`),
    getJSON(`https://restcountries.com/v3.1/name/brazil`),
    getJSON(`https://restcountries.com/v3.1/name/portugal`),
    getJSON(`https://restcountries.com/v3.1/name/macau`),
  ]);
  console.log(res[0]);
})();

const timeout = function (seconds) {
  // here we are using _ for resolve because this promise is always
  // going to be rejected so, no use for resolve
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long!`));
    }, seconds * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

/***** Prmomise.allSettled() *****/
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Anoter Success'),
]).then(res => console.log(res));

/***** Prmomise.any() *****/
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Anoter Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
