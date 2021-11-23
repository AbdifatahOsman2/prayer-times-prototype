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

    } catch (error) {
        console.error(error)
    }
}

getSalah()