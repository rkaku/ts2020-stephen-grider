const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.push('clk');

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

const importantDates: (Date | string)[] = [];
importantDates.push('2030-10-10');
importantDates.push(new Date());
