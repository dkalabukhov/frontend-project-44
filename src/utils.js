// Функция возвращает случайное число в заданном интервале, включая min и max
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export default getRandomNumber;
