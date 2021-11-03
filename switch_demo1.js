let dayNumber = 3;
let dayName = '';

switch (dayNumber) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    default:
        console.log('Invalid choice');
}
console.log(dayName);