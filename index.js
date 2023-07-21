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
    manufacturer: "Ferrari",
    model: "312P",
    yearOfManufacture: 1696,
    countryOfOrigin: "Italy",
    color: "Red",
    horsepower: 320,
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
    manufacturer: "Ferrari",
    model: "F355",
    yearOfManufacture: 1994,
    countryOfOrigin: "Italy",
    color: "Red",
    horsepower: 375,
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
    manufacturer: "Ferrari",
    model: "250 GTO",
    yearOfManufacture: 1962,
    countryOfOrigin: "Italy",
    color: "Red",
    horsepower: 296,
  },
  {
    manufacturer: "Ferrari",
    model: "Daytona SP3",
    yearOfManufacture: 2022,
    countryOfOrigin: "Italy",
    color: "Red",
    horsepower: 830,
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
function getSortedCarsByYearOfManufactureDesc() {
  const sortedCars = [...cars];
  sortedCars.sort((a, b) => b.yearOfManufacture - a.yearOfManufacture);

  console.log("Sorted array:", sortedCars);
}

getSortedCarsByYearOfManufactureDesc(cars);

//2. pronac prvi automobil odgovarajuce boje, ispisat cijeli objekt auta
function findByColor(color) {
  const result = cars.find((car) => car.color === color);
  return result;
}

console.log("Result of findByColor function:", findByColor("Black"));

//3. provjerit postoji li auto koji ima vise od prosjecne KS
function getAverageHorsepower() {
  const sum = cars.reduce((accumulator, current) => {
    accumulator += current.horsepower;
    return accumulator;
  }, 0);

  const average = sum / cars.length;

  return average;
}

function doesCarWithMoreThanProvidedHorsepowerExist(horsepower) {
  let result = cars.some((car) => car.horsepower > horsepower);
  result
    ? console.log(
        `In cars collection we have car that has more than ${horsepower} horsepower!`
      )
    : console.log(
        `In cars collection we dont have car that has more than ${horsepower} horsepower...`
      );
}

doesCarWithMoreThanProvidedHorsepowerExist(100);

//4. novi niz koji sadrzava automobile samo odredene boje, ispisat novi niz
function getFilteredCarsByColor(arr, color) {
  const result = [...arr];
  console.log(
    "Filtered cars that have same color: ",
    result.filter((el) => el.color.toLowerCase().includes(color.toLowerCase()))
  );
}
getFilteredCarsByColor(cars, "blACK");

//5. pretty print
function prettyPrinting() {
  const carsDetailInformations = cars.map(
    (car) =>
      `Manufacturer: ${car.manufacturer}, Model: ${car.model}, YearOfManufacture: ${car.yearOfManufacture}, CountryOfOrigin: ${car.countryOfOrigin}, Color: ${car.color}, Horsepower: ${car.horsepower}.`
  );

  carsDetailInformations.forEach((car) => console.log(car));
}

prettyPrinting(cars);

//6. isprintat aute koji su prozvedeni izmedju 2 poslana parametra godina, ispisat novi niz
function filterCarsByYearOfManufacture(manufacturedFrom, manufacturedUpTo) {
  const carsManufacturedBetweenYears = cars.filter((car) => {
    return (
      car.yearOfManufacture >= manufacturedFrom &&
      car.yearOfManufacture <= manufacturedUpTo
    );
  });
  console.log(
    "Manufactured between",
    manufacturedFrom,
    "and",
    manufacturedUpTo,
    carsManufacturedBetweenYears
  );
}

filterCarsByYearOfManufacture(2008, 2014);

//7. dodavanje novog automobila preko prompta
function capitalize(string) {
  const lowerCased = string.toLowerCase();
  const firstLetter = lowerCased.charAt(0).toUpperCase();

  return firstLetter + lowerCased.slice(1);
}

function addCar() {
  const predefinedColors = ["White", "Black", "Red", "Green", "Blue"];
  let yearOfManufacture;
  let color;
  let horsepower;

  const manufacturer = capitalize(prompt("Enter car manufacturer:"));

  const model = capitalize(prompt("Enter car model:"));

  do {
    yearOfManufacture = parseInt(prompt("Enter car year:"));

    if (
      isNaN(yearOfManufacture) ||
      yearOfManufacture < 1886 ||
      yearOfManufacture > 2023
    )
      alert("Year must be a number between 1886 and 2023.");
  } while (
    isNaN(yearOfManufacture) ||
    yearOfManufacture < 1886 ||
    yearOfManufacture > 2023
  );

  const countryOfOrigin = capitalize(prompt("Enter car country of origin:"));

  do {
    color = capitalize(prompt("Enter car color:"));
    if (!predefinedColors.includes(color)) {
      alert(
        'Color must be one of predefined ("White", "Black", "Red", "Green", "Blue")'
      );
    }
  } while (!predefinedColors.includes(color));

  do {
    horsepower = parseInt(prompt("Enter car horsepower:"));
    if (horsepower < 0 || isNaN(horsepower)) {
      alert("Horsepower must be positive number.");
    }
  } while (horsepower < 0 || isNaN(horsepower));

  const carToAdd = {
    manufacturer,
    model,
    yearOfManufacture,
    countryOfOrigin,
    color,
    horsepower,
  };

  cars.push(carToAdd);
}

addCar();

console.log("New cars array:", cars);

//8. ispisat prosjecnu KS i auto cija KS najvise odskace od prosjecne
function getCarWithTheMostDifferenceInHorsepower() {
  const average = getAverageHorsepower();

  let matchingIndex = 0;
  let tempValue = 0;

  cars.forEach((car, index) => {
    if (Math.abs(car.horsepower - average) > tempValue) {
      tempValue = Math.abs(car.horsepower - average);
      matchingIndex = index;
    }
  });

  console.log(
    `Average horsepower is ${average}, and car with the most difference in horsepower is:`,
    cars[matchingIndex]
  );
}

getCarWithTheMostDifferenceInHorsepower();

//9. napravit novi niz ferarija, formatirat tako da ubacimo povlake
function formatFerrariCarNames() {
  const ferraris = cars.filter((car) => car.manufacturer === "Ferrari");

  const ferrariDashedNames = ferraris.map((ferrari) => {
    return ferrari.model.split("").join("-");
  });

  console.log(ferrariDashedNames);
}

formatFerrariCarNames();
