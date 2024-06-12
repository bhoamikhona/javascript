'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
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
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
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
  #mapZoomLevel = 13;
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

    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
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
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel); // setView() takes two parameters - the first one is an array with latitude and longitude value and the second parameter is a number which defines the zoom level of the map
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

  _hideForm() {
    // clearing the input fields after submitting the form
    // prettier-ignore
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
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
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + clear input fields
    this._hideForm();
  }

  _renderWorkoutMarker(workout) {
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
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      ) // allows us to set the text on popup
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
    <li class="workout workout--${workout.type}" data-id="${workout.id}">
      <h2 class="workout__title">${workout.description}</h2>
      <div class="workout__details">
        <span class="workout__icon">${
          workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
        }</span>
        <span class="workout__value">${workout.distance}</span>
        <span class="workout__unit">km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⏱</span>
        <span class="workout__value">${workout.duration}</span>
        <span class="workout__unit">min</span>
      </div>
  `;

    if (workout.type === 'running') {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.pace.toFixed(1)}</span>
        <span class="workout__unit">min/km</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">🦶🏼</span>
        <span class="workout__value">${workout.cadence}</span>
        <span class="workout__unit">spm</span>
      </div>
    </li>
    `;
    }

    if (workout.type === 'cycling') {
      html += `
      <div class="workout__details">
        <span class="workout__icon">⚡️</span>
        <span class="workout__value">${workout.speed.toFixed(1)}</span>
        <span class="workout__unit">km/h</span>
      </div>
      <div class="workout__details">
        <span class="workout__icon">⛰</span>
        <span class="workout__value">${workout.elevation}</span>
        <span class="workout__unit">m</span>
      </div>
    </li>
    `;
    }

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');
    console.log(workoutEl);

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );
    console.log(workout);

    /**
     * In leaflet, there is a method to move the map to specified
     * coordinates. This method is called `setView()`. This method is
     * available on all map objects.
     *
     * The first argument that the `setView()` method needs is a set of
     * coordinatesm and the second argument is the zoom level.
     *
     * It also takes a third argument, which is options.
     *
     * You can read the leaflet documentation to understand what
     * `animate`, `pan`, and `duration` mean.
     */
    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // using the public interface
    workout.click();
  }
}

const app = new App();
