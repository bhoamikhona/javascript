// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/***********************************************************************/
/******************* SETTING UP PRETTIER AND VS CODE *******************/
/***********************************************************************/

const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

/************************************************************************/
/***************** USING GOOGLE, STACKOVERFLOW, AND MDN *****************/
/************************************************************************/

// PROBLEM:

/**
 * PROBLEM 01:
 *
 * We work for a company building a smart home thermometer. Our most
 * recent task is this: "Given an array of temperatures of one day,
 * calculate the temperature amplitude. Keep in mind that sometimes there
 * might be a sensor error."
 */

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

/**
 * TODO 01: Understanding the problem.
 *
 * What is temperature amplitude?
 * How do we calculate the highest and the lowest temperature in an array?
 * What is a sensor error? and what to do when it occurs?
 */

/**
 * TODO 02: Breaking up into sub-problems.
 *
 * How to ignore errors?
 * Find max value in temp array.
 * Find min value in temp array.
 * Subtract min from max (amplitude) and return it.
 */

/**
 * TODO 03: Research for solutions.
 *
 * Using Google and StackOverflow - https://stackoverflow.com/questions/1669190/find-the-min-max-element-of-an-array-in-javascript (5th solution).
 */

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

/**
 * PROBLEM 02:
 *
 * Function should now receive 2 arrays of temperatures.
 */

/**
 * TODO 01: Understanding the problem.
 *
 * With 2 arrays, should we implement functionality twice? NO! Just merge
 * two arrays.
 */

/**
 * TODO 02: Breaking up into sub-problems.
 *
 * How to merge two arrays?
 */

/**
 * TODO 03: Research for solutions.
 *
 * Using Google and MDN - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat.
 */

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let currentTemp = temps[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

/************************************************************************/
/************** DEBUGGING WITH THE CONSOLE AND BREAKPOINTS **************/
/************************************************************************/

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  // B) FIND
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(amplitudeBug);

/***********************************************************************/
/************************* CODING CHALLENGE 01 *************************/
/***********************************************************************/

const printForecast = function (temps) {
  let forecastString = '...';

  for (let i = 0; i < temps.length; i++) {
    forecastString = forecastString + `${temps[i]}°C in ${i + 1} days...`;
  }

  console.log(forecastString);
};

const data01 = [17, 21, 23];
const data02 = [12, 5, -5, 0, 4];

printForecast(data01);
printForecast(data02);
