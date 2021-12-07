
function average(numbers) {
  const newArray = numbers.filter( value => !Number.isNaN(value) );
  return newArray.reduce((a, b)=> a + b, 0) / newArr.length;
}

module.exports = {average};
