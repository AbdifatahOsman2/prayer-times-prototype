# Overview

## Project Description

searchable salah times for muslims using a Salah Api(a prototype)

## Wireframes

<img src="./Assets/Desktop - 1Pr.png"/>

## API and Data Sample

### Example Link:
```https://aladhan.com/prayer-times-api```

```
{
  "code": 200,
  "status": "OK",
  "results": {
    "datetime": [
      {
        "times": {
          "Imsak": "06:10 AM",
          "Sunrise": "07:30 AM",
          "Fajr": "06:20 AM",
          "Dhuhr": "12:34 PM",
          "Asr": "03:16 PM",
          "Sunset": "05:38 PM",
          "Maghrib": "05:52 PM",
          "Isha": "06:48 PM",
          "Midnight": "11:59 PM"
        },
        "date": {
          "timestamp": 1641340800,
          "gregorian": "2022-01-05",
          "hijri": "1443-06-02"
        }
      }
    ],
    "location": {
      "latitude": 33.4483757019043,
      "longitude": -112.07403564453124,
      "elevation": 331.0,
      "city": "Phoenix",
      "country": "United States",
      "country_code": "US",
      "timezone": "America/Phoenix",
      "local_offset": -7.0
    },
    "settings": {
      "timeformat": "hh:mm tt",
      "school": "Ithna Ashari",
      "juristic": "Shafii",
      "highlat": "None",
      "fajr_angle": 15.0,
      "isha_angle": 15.0
    }
  }
}
```



#### PostMVP  

- Add second API
- Update UI
