const cars = [
  {
    manufacturer: "Fiat",
    model: "Punto",
    yearOfManufacture: 1998,
    countryOfOrigin: "Italy",
    color: "Blue",
    horsepower: 55,
  },
  {
    manufacturer: "Ford",
    model: "Fiesta",
    yearOfManufacture: 2014,
    countryOfOrigin: "America",
    color: "Black",
    horsepower: 95,
  },
  {
    manufacturer: "Renault",
    model: "Megan",
    yearOfManufacture: 2008,
    countryOfOrigin: "France",
    color: "Black",
    horsepower: 112,
  },
  {
    manufacturer: "Skoda",
    model: "Fabia",
    yearOfManufacture: 2016,
    countryOfOrigin: "Czech",
    color: "Blue",
    horsepower: 95,
  },
  {
    manufacturer: "Renault",
    model: "4",
    yearOfManufacture: 1987,
    countryOfOrigin: "France",
    color: "White",
    horsepower: 34,
  },
  {
    manufacturer: "Volkswagen",
    model: "Golf GTI",
    yearOfManufacture: 1990,
    countryOfOrigin: "Germany",
    color: "Red",
    horsepower: 110,
  },
];

//1. sortorat niz auta po godinama, ispisat novi niz
function sortArray() {
  const sortedCars = [...cars];
  sortedCars.sort(sortByYear);
  return sortedCars;
}

function sortByYear(a, b) {
  return b.yearOfManufacture - a.yearOfManufacture;
}

console.log("Original array:", cars);
console.log("Sorted array:", sortArray());

//2. pronac prvi automobil odgovarajuce boje, ispisat cijeli objekt auta
function findByColor(color) {
  const result = cars.find((car) => car.color === color);
  return result;
}

console.log("Result of findByColor function:", findByColor("Black"));

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

console.log(
  "Result of function isHpBiggerThenAverage:",
  isHpBiggerThenAverage()
);

//4. novi niz koji sadrzava automobile samo odredene boje, ispisat novi niz
function haveSameColor(color) {
  const sameColorCars = [];
  for (car of cars) {
    if (car.color === color) sameColorCars.push(car);
    else continue;
  }
  return sameColorCars;
}

console.log("Result of function haveSameColor:", haveSameColor("Blue"));

//5. pretty print
function prettyPrint(car) {
  const prettyCars = [];
  for (car of cars) {
    prettyCars.push(`Manufacturer: ${car.manufacturer}
Model: ${car.model}
Year: ${car.yearOfManufacture}
Country: ${car.countryOfOrigin}
Color: ${car.color}
HP: ${car.horsepower}`);
  }
  return prettyCars;
}

console.log(prettyPrint(cars));

//6. isprintat aute koji su prozvedeni izmedju 2 poslana parametra godina, ispisat novi niz
function producedBetween(producedFrom, producedUpTo) {
  const carsProducedBetween = [];
  for (car of cars) {
    if (
      car.yearOfManufacture >= producedFrom &&
      car.yearOfManufacture <= producedUpTo
    ) {
      carsProducedBetween.push(car);
    }
  }
  return carsProducedBetween;
}

console.log("Produced between:", producedBetween(2008, 2014));

//7. dodavanje novog automobila preko prompta
function formatInput(input) {
  let firstLetter = input.charAt(0).toUpperCase();
  return firstLetter + input.slice(1);
}

function addCar() {
  const carObj = {};
  const predefinedColors = ["white", "black", "red", "green", "blue"];
  let carManufacturer = "";
  let carModel = "";
  let carYear;
  let carCountry = "";
  let carColor = "";
  let carPower;

  carManufacturer = prompt("Enter car manufacturer:").toLowerCase();
  carManufacturer = formatInput(carManufacturer);
  carObj.manufacturer = carManufacturer;

  carModel = prompt("Enter car model:").toLowerCase();
  carModel = formatInput(carModel);
  carObj.model = carModel;

  do {
    carYear = parseInt(prompt("Enter car year:"));
  } while (isNaN(carYear) || carYear < 1886 || carYear > 2023);
  carObj.yearOfManufacture = carYear;

  carCountry = prompt("Enter car country of origin:").toLowerCase();
  carCountry = formatInput(carCountry);
  carObj.countryOfOrigin = carCountry;

  do {
    carColor = prompt("Enter car color:").toLowerCase();
    if (predefinedColors.includes(carColor)) break;
    else carColor = "";
  } while (!carColor);
  carColor = formatInput(carColor);
  carObj.color = carColor;

  do {
    carPower = parseInt(prompt("Enter car horsepower:"));
  } while (carPower < 0 || isNaN(carPower));
  carObj.horsepower = carPower;

  console.log("Adding:", carObj);

  cars.push(carObj);
}

addCar();

console.log("New cars array:", cars);

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
  console.log(
    `Average HP is ${average}, and car with most HP is:`,
    carWithMaxHp
  );
}

printMaxHp();

//9. napravit novi niz ferarija, formatirat tako da ubacimo povlake
const ferraris = ["458 Italia", "F355", "250 GTO", "Daytona SP3", "308 GTB"];

function printMinus() {
  const minusFerraris = [];
  for (car of ferraris) {
    let newFerrari = "";
    let length = 0;
    for (char of car) {
      length++;
    }
    for (i = 0; i < length; i++) {
      if (i === length - 1) {
        newFerrari += `${car[i]}`;
        minusFerraris.push(newFerrari);
        break;
      }
      newFerrari += `${car[i]}-`;
    }
  }

  console.log(minusFerraris);
}

printMinus();
