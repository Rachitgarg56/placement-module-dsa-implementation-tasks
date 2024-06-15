// Q9.
// How to convert 24 hours format to 12 hours in Javascript

const date = new Date();

const hrs = date.getHours();
const mins = date.getMinutes();

const twentyFourHoursFormat = hrs + ":" + mins;


