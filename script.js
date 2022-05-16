'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, neighbour = '') {
  const html = `
<article class="country ${neighbour}" >
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);
//     renderCountry(data);
//     console.log(data);

//     const neighbour = data.borders?.[0];

//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       console.log(request2.responseText);
//       const dataN = JSON.parse(this.responseText);
//       renderCountry(dataN, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('portugal');
// getCountryAndNeighbour('usa');
// getCountryAndNeighbour('india');

// getCountryData('pakistan');

// const request = fetch('https://restcountries.com/v2/name/portugal');

// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// getCountryData('portugal');

const getJSON = function (url, errMsg) {
  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(`${errMsg} (${response.status})`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      let neighbour = data[0].borders?.[0];

      //   neighbour = 'dggdd';
      if (!neighbour) throw new Error('No neighbour found!');

      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        'Neighbour not found'
      );
    })
    .then(data1 => renderCountry(data1, 'neighbour'))
    .catch(err => {
      console.error(`${err} 🔥🔥🔥`);
      renderError(`Something went wrong ${err.message}. Try again`);
    });
};

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

// getCountryData('akakakak');

// coding challenge #1

const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(data => {
      data.json(data);
      console.log(data);
      return data;
    })
    // .then(data => console.log(data))
    .then(data => {
      console.log(data);

      if (data.error?.code === '006') throw new Error('wait for atleast 1 sec');

      if (data.error?.code === '018') throw new Error('Enter valid input');

      console.log(`You are in ${data.city}, ${data.country}`);

      getCountryData(data.country);
    })
    .catch(err => console.error(`Something went wrong ${err}`));
};

btn.addEventListener('click', function () {
  //   whereAmI(52.508, 13.381);
  //   whereAmI(19.037, 72.873);
  whereAmI(-33.933, 18.474);

  //   whereAmI(11, 'alksjs');
});
