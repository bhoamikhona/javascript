'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// getCurrentPosition() takes in two callback function - one is for success and the other is for error
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { longitude, latitude } = position.coords;
      console.log(longitude, latitude);
      console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your position');
    }
  );
}
