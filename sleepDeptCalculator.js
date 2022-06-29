const getSleepHours = day => {
  switch(day) {
    case 'Monday':
      return 8
      break;
    case 'Tuesday':
      return 8
      break;
    case 'Wednesday':
      return 3
      break;
    case 'Thursday':
      return 8
      break;
    case 'Friday':
      return 5
      break;
    case 'Saturday':
      return 8
      break;
    case 'Sunday':
      return 1
      break;
    default:
    return 'Error!'
  }
};

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

console.log(getActualSleepHours());
console.log(getSleepHours('Monday'));

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if(actualSleepHours === idealSleepHours) {
    console.log('you got the perfect amount of sleep!')
  }
  else if (actualSleepHours > idealSleepHours) {
    console.log('You have got' + (idealSleepHours - actualSleepHours) + 'sleep than needed')
  }
  else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest! You slept ' + (idealSleepHours - actualSleepHours)+ 'hours less than you should have this week')}
  else {
    console.log('ERROR: Check your code!')
  }
}


calculateSleepDebt()

