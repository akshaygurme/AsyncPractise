'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////

const renderCountry = function (data, neighbour = '') {
  // console.log(data);
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

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   countriesContainer.style.opacity = 1;
// };

// // const getCountryAndNeighbour = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v2/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     renderCountry(data);
// //     console.log(data);

// //     const neighbour = data.borders?.[0];

// //     if (!neighbour) return;

// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       console.log(request2.responseText);
// //       const dataN = JSON.parse(this.responseText);
// //       renderCountry(dataN, 'neighbour');
// //     });
// //   });
// // };

// // getCountryAndNeighbour('portugal');
// // getCountryAndNeighbour('usa');
// // getCountryAndNeighbour('india');

// // getCountryData('pakistan');

// // const request = fetch('https://restcountries.com/v2/name/portugal');

// // console.log(request);

// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v2/name/${country}`)
// //     .then(function (response) {
// //       console.log(response);
// //       return response.json();
// //     })
// //     .then(function (data) {
// //       console.log(data);
// //       renderCountry(data[0]);
// //     });
// // };

// // getCountryData('portugal');

// const getJSON = function (url, errMsg) {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errMsg} (${response.status})`);
//     }
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       let neighbour = data[0].borders?.[0];

//       //   neighbour = 'dggdd';
//       if (!neighbour) throw new Error('No neighbour found!');

//       return getJSON(
//         `https://restcountries.com/v2/alpha/${neighbour}`,
//         'Neighbour not found'
//       );
//     })
//     .then(data1 => renderCountry(data1, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 🔥🔥🔥`);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     });
// };

// // btn.addEventListener('click', function () {
// //   getCountryData('portugal');
// // });

// // getCountryData('akakakak');

// // coding challenge #1

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(data => {
//       data.json(data);
//       //   console.log(data);
//       return data;
//     })
//     // .then(data => console.log(data))
//     .then(data => {
//       console.log(data);

//       if (data.error?.code === '006') throw new Error('wait for atleast 1 sec');

//       if (data.error?.code === '018') throw new Error('Enter valid input');

//       console.log(`You are in ${data.city}, ${data.country}`);

//       getCountryData(data.country);
//     })
//     .catch(err => console.error(`Something went wrong ${err}`));
// };

// btn.addEventListener('click', function () {
//   whereAmI(52.508, 13.381);
//   //   whereAmI(19.037, 72.873);
//   //   whereAmI(-33.933, 18.474);

//   //   whereAmI(11, 'alksjs');
// });

// console.log('Test start');

// setTimeout(() => console.log('timeout executed 0 sec'), 0);

// Promise.resolve('resolved promise 1').then(res => console.log(res));

// Promise.resolve('resolved promise 2').then(res => {
//   for (let i = 0; i < 100000000; i++) {}
//   console.log(res);
// });

// console.log('Test end');

// create promise

// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You won the Lottery 🏆');
//   } else {
//     reject('You lost your Money');
//   }
// });

// lotteryPromise
//   .then(res => console.log(`Inside resolve ${res}`))
//   .catch(err => console.error(`Inside reject ${err}`));

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(3)
//   .then(() => {
//     console.log(`3 seconds passed`);
//     return wait(2);
//   })
//   .then(() => console.log(`2 Seconds passed`));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then(pos => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       const { latitude: lat, longitude: lng } = pos;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then(data => {
//       // data.json(data);
//       //   console.log(data);
//       return data.json();
//     })
//     // .then(data => console.log(data))
//     .then(data => {
//       console.log(data);

//       if (data.error?.code === '006') throw new Error('wait for atleast 1 sec');

//       if (data.error?.code === '018') throw new Error('Enter valid input');

//       console.log(
//         `You are in ${data.standard.city}, ${data.standard.countryname}`
//       );

//       getCountryData(data.country);
//     })
//     .catch(err => console.error(`Something went wrong ${err}`));
// };

// btn.addEventListener('click', whereAmI);

// imageEl;
// var element = document.getElementById('new');

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     var imageEl = document.createElement('img');
//     imageEl.src = imgPath;

//     imageEl.addEventListener('load', function (e) {
//       // console.log(e);
//       element.appendChild(imageEl);
//       resolve(imageEl);
//     });

//     imageEl.addEventListener('error', function (e) {
//       reject(new Error(`Image failed to load ${e}`));
//     });
//   });
// };

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imageEl = document.createElement('img');
// imageEl.src = 'img/img-1.jpg';

// console.log('hello');

// var image;

// createImage('img/img-3.jpg')
//   .then(img => {
//     console.log('Image loaded 1');
//     image = img;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//     return wait(2);
//   })
//   .then(() => createImage('img/img-2.jpg'))
//   .then(img => {
//     console.log('Image loaded 2');
//     image = img;
//     return wait(2);
//   })
//   .then(() => {
//     image.style.display = 'none';
//     // return wait(2);
//   })
//   .catch(err => console.log(err));

// wait(2).then();

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = async function () {
//   try {
//     const pos = await getPosition();
//     const { latitude: lat, longitude: lng } = pos.coords;
//     const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     // console.log(resGeo);
//     if (!resGeo.ok) {
//       throw new Error('Reverse Geo error');
//     }
//     const resGeoJson = await resGeo.json();
//     const res = await fetch(
//       `https://restcountries.com/v2/name/${resGeoJson.country}`
//     );
//     // console.log(res);
//     if (!res.ok) {
//       throw new Error('Country error');
//     }
//     const data = await res.json();
//     renderCountry(data[1]);

//     return `2: You are in ${resGeoJson.city}, ${resGeoJson.country}`;
//   } catch (err) {
//     // console.log(`Something went wrong ${err}`);
//     throw new Error('error occured');
//   }
// };

// console.log('1: will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI().then(city => console.log(city));

// (async function () {
//   try {
//     const city = await whereAmI();
//     console.log(city);
//   } catch (e) {
//     console.log(e);
//   } finally {
//     console.log('3: Finished getting location');
//   }
// })();

// whereAmI('india');

// try {
//   let x;
//   const y = 19;
//   y = 2;
// } catch (err) {
//   console.log(err);
// }

// Challenge #3

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    var imageEl = document.createElement('img');
    imageEl.src = imgPath;

    imageEl.addEventListener('load', function (e) {
      // console.log(e);
      element.appendChild(imageEl);
      resolve(imageEl);
    });

    imageEl.addEventListener('error', function (e) {
      reject(new Error(`Image failed to load ${e}`));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imageEl = document.createElement('img');
var element = document.getElementById('new');
var image;

const loadNPause = async function () {
  let wait1, img;
  try {
    img = await createImage('img/img-1.jpg');
    console.log('Image 1 loaded');
    // image = img;
    wait1 = await wait(2);
    img.style.display = 'none';
    console.log('Image 1 disaapered');
    wait1 = await wait(2);
  } catch (e) {
    console.log(e);
  }
  try {
    img = await createImage('img/img-2.jpg');
    console.log('Image loaded 2');
    // image = img;
    wait1 = await wait(2);
    img.style.display = 'none';
    console.log('Image 2 disaapered');
  } catch (e) {
    console.log(e);
  }
};

// loadNPause();

const loadAll = async function (imgArr) {
  // const imgs = imgArr.map(img => createImage(img));
  const imgs = await Promise.all(
    imgArr.map(async img => {
      let imageEl = await createImage(img);
      // console.log(imageEl);
      imageEl.classList.add('parallel');
      return imageEl;
    })
  );
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
