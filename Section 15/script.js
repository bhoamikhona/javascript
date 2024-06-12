'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;

    this.calcPace();
  }

  calcPace() {
    this.pace = this.duration / this.distance;
  }
}
class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;

    this.calcSpeed();
  }

  calcSpeed() {
    // km/h
    this.calcSpeed = this.distance / (this.duration / 60);
  }
}

// const running1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Running([39, -12], 27, 95, 523);
// console.log(running1, cycling1);

///////////////////////////////////////////
// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  #workouts = [];

  constructor() {
    this._getPosition();

    /**
     * If you are working with event listeners in classes, then you will
     * have to often use `bind()` to set the value of `this` keyword.
     * This is because when you have a callback function, the `this`
     * keyword will point to the element on which the event listener is
     * attached, and not to the class in which you are working. Keep that
     * in mind.
     */
    form.addEventListener('submit', this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your location');
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    /**
     * The element that is passed inside the `L.map()` should be the id
     * of the element in which you want to display the map.
     *
     * In our case, we have a div in HTML with the id of "map".
     *
     * `L` is kind of like a namespace that leaflet provides us with.
     * Similar to the `Intl` namespace that is provided by
     * internationalization API.
     *
     * This `L` namespace provides us with some methods e.g. `map()`,
     * `tileLayer()` and `marker()`.
     */
    this.#map = L.map('map').setView(coords, 13); // setView() takes two parameters - the first one is an array with latitude and longitude value and the second parameter is a number which defines the zoom level of the map
    console.log(this.#map);

    // You can have a different map style here - google around for that
    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    /**
     * When we click on the map, we want the marker and the popup to
     * appear where we clicked. We cannot use the traditional
     * `addEventListener()` for that because then we won't know where we
     * clicked on the map.
     *
     * To get the specific coords of where we clicked on the map, the
     * leaflet library provides a method called `on()` on the map
     * object.
     *
     * NOTE: This `on()` method is not coming from JS. It is coming from
     * the leaflet library.
     *
     * The `on()` method from the leaflet library takes two arguments.
     * The first one is the event type and the second one is a callback
     * function. So, quite similar to `addEventListener()`.
     *
     * Now, when leaflet calls the `on()` function, it will do so with
     * a special map event. This is similar to the event that we get
     * when we use `addEventListener()`.
     */
    // handling clicks on map
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    /**
     * When we expand the mapEvent object, we see a property called
     * `latlng` which consists of the coordinates at which we clicked
     * on the map.
     *
     * We can now use those coords to put a marker and a popup.
     */
    console.log(mapE);
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  // switching the cadence and elevation input fields depending on selected type of activity in the form
  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    /**
     * Takes in an arbitrary amount of inputs. Converts those inputs into
     * one single array using the rest parameter. Uses every() method to
     * check if all the numbers in the array are finite numbers or not.
     */
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    // checks if all the numbers are greater than 0
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      // check if data is valid
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);
    console.log(workout);

    // Render workout on map as marker
    this.renderWorkoutMarker(workout);

    // Render workout on list

    // Hide form + clear input fields
    // clearing the input fields after submitting the form
    // prettier-ignore
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = ''
  }

  renderWorkoutMarker(workout) {
    /**
     * marker() creates a marker at the provided coordinates
     *
     * addTo() adds the marker to the map
     *
     * bindPopup() binds the popup to the marker. Here we can pass in
     * a string that you want the popup to display or we can pass in
     * an options to create a more customized options. We can do that
     * by passing in `L.popup({})` and withing {} we can pass the
     * options.
     *
     * You can read about what options you can pass in and more about
     * these methods in the leaflet documentation:
     * https://leafletjs.com/reference.html
     *
     * openPopup() opens the popup
     */
    // Display marker
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false, // prevents the popup from closing when we click on the map
          className: `${workout.type}-popup`, // allows us to add a css classname so we can design it the way we want
        })
      )
      .setPopupContent('workout') // allows us to set the text on popup
      .openPopup();
  }
}

const app = new App();
