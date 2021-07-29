// codecademy lesson on function (final session)

// given
const plantNeedsWater = (day) => {
  return day === 'Wednesday' ? true : false;
};
// traditional function 1
function plantNeedsWater_trad1(day) {
  let isWednesday = false;
  if (day === 'Wednesday') {
      isWednesday = true;
  } else {
      isWednesday = false;
  }
  return isWednesday;
}
// traditional function 2
const plantNeedsWater_trad2 = function (day) {
  let isWednesday = false;
  if (day === 'Wednesday') {
      isWednesday = true;
  } else {
      isWednesday = false;
  }
  return isWednesday;
}
// simplified function (arrow function) notation
const plantNeedsWater_ans = day => day === 'Wednesday' ? true : false;

console.log(plantNeedsWater('Wednesday'))
console.log(plantNeedsWater_trad1('Wednesday'))
console.log(plantNeedsWater_trad2('Wednesday'))
console.log(plantNeedsWater_ans('Wednesday'))