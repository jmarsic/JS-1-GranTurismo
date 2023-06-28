const cars = [
  {
    manufacturer: "Fiat",
    model: "Punto",
    yearOfManufacture: 1998,
    countryOfOrigin: "Italija",
    color: "Plava",
    horsepower: 55,
  },
  {
    manufacturer: "Ford",
    model: "Fiesta",
    yearOfManufacture: 2014,
    countryOfOrigin: "Amerika",
    color: "Crna",
    horsepower: 95,
  },
  {
    manufacturer: "Renault",
    model: "Megan",
    yearOfManufacture: 2008,
    countryOfOrigin: "Francuska",
    color: "Crna",
    horsepower: 112,
  },
  {
    manufacturer: "Skoda",
    model: "Fabia",
    yearOfManufacture: 2016,
    countryOfOrigin: "Ceska",
    color: "Plava",
    horsepower: 95,
  },
  {
    manufacturer: "Renault",
    model: "4",
    yearOfManufacture: 1987,
    countryOfOrigin: "Francuska",
    color: "Bijela",
    horsepower: 34,
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf GTI",
    yearOfManufacture: 1990,
    countryOfOrigin: "Njemacka",
    color: "Crvena",
    horsepower: 110,
  },
];

// console.log(cars);

// for (car of cars) {
//   console.log(car.color);
// }

//1. sortorat niz auta po godinama, ispisat novi niz

function sortCarsByYear() {
  const carsByYear = cars.sort((car) => {
    car.yearOfManufacture;
  });
  return carsByYear;
}
console.log(sortCarsByYear());
// const years = cars.map((car) => {
//   return car.yearOfManufacture;
// });

// const result = years.sort((a, b) => {
//   return a - b;
// });

//2. pronac prvi automobil odgovarajuce boje, ispisat cijeli objekt auta
//4. novi niz koji sadrzava automobile samo odredene boje, ispisat novi niz
//5. pretty print
//6. isprintat aute koji su prozvedeni izmedju 2 poslana parametra godina, ispisat novi niz
//7. dodavanje novog automobila preko prompta

//8. ispisat prosjecnu KS i auto cija KS najvise odskace od prosjecne
function printMaxHp() {
  const average = averageHorsepower();
  let maxHp = 0;
  let carWithMaxHp;

  for (let car of cars) {
    if (car.horsepower > maxHp) {
      maxHp = car.horsepower;
    }
  }
  for (let car in cars) {
    carWithMaxHp = cars.find((car) => {
      return car.horsepower === maxHp;
    });
  }
  console.log(average, carWithMaxHp);
}

printMaxHp();

//9. napravit novi niz ferarija, formatirat tako da ubacimo povlake

// const printCars = [`Marka: fiat`, `Marka: golf`];
// console.log(printCars);

//3. provjerit postoji li auto koji ima vise od prosjecne KS
function averageHorsepower() {
  let average = 0;
  let sum = 0;

  for (let car of cars) {
    sum += car.horsepower;
  }
  average = sum / cars.length;

  return average;
}

function isHpBiggerThenAverage() {
  const average = averageHorsepower();
  for (car of cars) {
    if (car.horsepower > average) return true;
  }
  return false;
}

console.log(isHpBiggerThenAverage());
