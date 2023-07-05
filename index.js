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

//1. sortorat niz auta po godinama, ispisat novi niz
function sortArray() {
  const sortedCars = [...cars];
  sortedCars.sort(sortByYear);
  return sortedCars;
}

function sortByYear(a, b) {
  return b.yearOfManufacture - a.yearOfManufacture;
}

console.log("Sorted array:", sortArray());
console.log("Original array:", cars);

//2. pronac prvi automobil odgovarajuce boje, ispisat cijeli objekt auta
function findByColor(color) {
  const result = cars.find((car) => car.color === color);
  return result;
}

console.log("Result of findByColor function:", findByColor("Crna"));

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

console.log("Result of function haveSameColor:", haveSameColor("Plava"));

//5. pretty print
function prettyPrint(car) {
  const prettyCars = [];
  for (car of cars) {
    prettyCars.push(`Manufacturer: ${car.manufacturer}, Model: ${car.model}, Year: ${car.yearOfManufacture}, 
    Country: ${car.countryOfOrigin}, Color: ${car.color}, HP: ${car.horsepower}`);
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
const ferraris = ["458 Italia", "F355", "250 GTO", "458 Speciale"];

const ferrariString = ferraris.toString();
console.log(ferrariString);
const ferrArr = ferrariString.split("");
// console.log(ferrArr);

const noviNiz = ferrArr.map((char) => {
  return `${char}-`;
});
console.log(noviNiz);
