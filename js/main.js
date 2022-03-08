const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const TIMES = ['12:00', '13:00', '14:00'];

const IMAGE_NUMBERS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
];

const createAdvertisement = () => {
  const location = {
    lat: getRandomFloatNumber(35.65, 35.7, 5),
    lng: getRandomFloatNumber(139.7, 139.8, 5),
  };

  return {
    author: {
      avatar:
        `img/avatars/user${getRandomValuesFromArrayNoRepeat(IMAGE_NUMBERS, 1)[0]}.png`,
    },
    offer: {
      title: 'title',
      address: `${location.lat}, ${location.lng}`,
      price: getRandomIntNumber(1, 10000000),
      type: TYPE[getRandomIntNumber(0, TYPE.length - 1)],
      rooms: getRandomIntNumber(1, 10),
      guests: getRandomIntNumber(1, 30),
      checkin: TIMES[getRandomIntNumber(0, TIMES.length - 1)],
      checkout: TIMES[getRandomIntNumber(0, TIMES.length - 1)],
      features: getRandomValuesFromArrayNoRepeat(FEATURES.slice(), getRandomIntNumber(1, FEATURES.length - 1)),
      description: 'description',
      photos: getRandomValuesFromArrayNoRepeat(PHOTOS.slice(), getRandomIntNumber(1, PHOTOS.length - 1)),
      location,
    },
  };
};

function getRandomIntNumber(min, max) {
  if (min < 0 || max < 0 || max <= min) {
    return null;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloatNumber(min, max, accuracy) {
  if (min < 0 || max < 0 || max <= min) {
    return null;
  }

  const randomNumber = Math.random() * (max - min) + min;

  return parseFloat(randomNumber.toFixed(accuracy));
}

function getRandomValuesFromArrayNoRepeat(source, quantity) {
  const randomValues = [];

  if (source.length < quantity) {
    return null;
  }

  for (let i = 0; i < quantity; i++) {
    const elements = source.splice(getRandomIntNumber(0, source.length - 1), 1);
    randomValues.push(elements[0]);
  }

  return randomValues;
}


Array.from({ length: 10 }, createAdvertisement);
