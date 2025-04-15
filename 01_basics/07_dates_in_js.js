let myDate = new Date();

// ! Default Date object (in UTC)
console.log(myDate); // ? e.g., 2025-04-14T16:52:02.414Z

// * Local date and time as a string
console.log(myDate.toString()); // ? e.g., Mon Apr 14 2025 22:22:02 GMT+0530 (India Standard Time)

// * ISO 8601 format (UTC)
console.log(myDate.toISOString()); // ? e.g., 2025-04-14T16:52:02.414Z

// * Same as toISOString(), used for JSON serialization
console.log(myDate.toJSON()); // ? e.g., 2025-04-14T16:52:02.414Z

// * Time portion in local time zone
console.log(myDate.toTimeString()); // ? e.g., 22:23:16 GMT+0530 (India Standard Time)

// * Date portion in a readable format
console.log(myDate.toDateString()); // ? e.g., Mon Apr 14 2025


// ! Creating specific dates
let myCreatedDate = new Date(2023, 0, 23); // * January 23, 2023
let myCreatedDate2 = new Date(2023, 1, 23); // * February 23, 2023

// ? Months in JS start at 0 (Jan = 0, Feb = 1, ... Dec = 11)
console.log(myCreatedDate.toString(), myCreatedDate2.toString()); 
// ? Mon Jan 23 2023 00:00:00 GMT+0530 (India Standard Time) Thu Feb 23 2023 00:00:00 GMT+0530 (India Standard Time)


// ! Creating a date with time components
let date_with_time = new Date(2025, 3, 14, 22, 30); // * April 14, 2025 at 10:30 PM (local)
console.log("Date with time", date_with_time.toLocaleString()); // ? Date with time 14/4/2025, 10:30:00 pm


// ! Current timestamp in milliseconds
let my_time_stamp = Date.now();
console.log(my_time_stamp); // ? e.g., 1744650063634

// * Compare a future date with current timestamp
console.log(date_with_time.getTime() >= my_time_stamp); // ? false, because April 14, 2025 10:30 PM is earlier than now

// ! Current timestamp in seconds (Unix time)
console.log(Math.floor(Date.now() / 1000)); // ? e.g., 1744650063


// ! Custom formatted date using locale
console.log(
  myDate.toLocaleString("default", {
    weekday: "long",  // * Full name of the day (e.g., Monday)
    month: "long",    // * Full name of the month (e.g., April)
  })
);
// ? e.g., April Monday (note: ordering depends on locale)
