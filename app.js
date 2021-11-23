const firstEl = document.querySelector("#first")
const secondEld = document.querySelector("#second")
const thirdEl = document.querySelector("#third")
const fourthEl = document.querySelector("#fourth")
const fifthEl = document.querySelector("#fifth")
const monthEl = document.querySelector("#month")
const arabicEl = document.querySelector("#arabic")


const d = new Date();
const currentDay = d.getDate()
console.log(currentDay)

const getSalah = async () => {
    try {
        const response = await axios.get(`http://api.aladhan.com/v1/calendarByCity?city=Phoenix&country=United%20States&method=2&month=${d.getMonth()+1}&year=${d.getFullYear()}`);
        const salah = response.data.data[currentDay].timings
        console.log(response.data.data[currentDay])
        monthEl.textContent = 'Month of '+response.data.data[currentDay].date.hijri.month.en
        arabicEl.innerHTML = response.data.data[currentDay].date.hijri.month.ar
        firstEl.innerHTML = salah.Fajr
        secondEld.innerHTML = salah.Dhuhr
        thirdEl.innerHTML = salah.Asr
        fourthEl.innerHTML = salah.Maghrib
        fifthEl.innerHTML = salah.Isha


        var time = salah.Fajr
        time = time.split('');
        console.log(time)
        var hours = Number(time[0] + time[1]);
        console.log(hours)
        var minutes = Number(time[3] + time[4]);
        console.log(minutes)
        var timeValue;

        if (hours > 0 && hours <= 12) {
            timeValue= "" + hours;
          } else if (hours > 12) {
            timeValue= "" + (hours - 12);
          } else if (hours == 0) {
            timeValue= "12";
          }
          timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
            timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

          console.log(timeValue)

    } catch (error) {
        console.error(error)
    }
}

getSalah()

// military to standard time converter ...still working
// const convert = (prayer) => {
//   var time = prayer
//   time = time.split('');
//   var hours = Number(time[0] + time[1]);
//   console.log("function "+hours)
//   var minutes = Number(time[3] + time[4]);
//   console.log("function "+minutes)
//   var timeValue = "";

//   if (hours > 0 && hours <= 12) {
//       timeValue= "" + hours;
      
//     } else if (hours > 12) {
//       timeValue= "" + (hours - 12);
//     } else if (hours == 0) {
//       timeValue= "12";
//     }
//     timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
//       timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM
// }

// console.log(`this is the func `+convert(salah.Isha))