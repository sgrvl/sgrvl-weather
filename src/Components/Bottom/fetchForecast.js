import { useEffect } from "react";

export const useFetchForecast = (lat, lon, setWeatherData) => {
	useEffect(() => {
		const api = {
			key: "d892855dd51283817b1d30b7e3496f98",
			base: "https://api.openweathermap.org/data/2.5/onecall?",
			units: "metric",
			part: "minutely",
		};
		setWeatherData({ loading: true });
		fetch(
			`${api.base}lat=${lat}&lon=${lon}&exclude=${api.part}&appid=${api.key}&units=${api.units}`
		)
			.then((res) => res.json())
			.then((data) => setWeatherData({ loading: false, data: data }))
			.catch((err) => console.log(err));
	}, [lat, lon, setWeatherData]);
};

export const placeholder = {
  "lat": -5.02,
  "lon": 104.17,
  "timezone": "Asia/Jakarta",
  "timezone_offset": 25200,
  "current": {
    "dt": 1599617852,
    "sunrise": 1599605959,
    "sunset": 1599649339,
    "temp": 24.81,
    "feels_like": 26.4,
    "pressure": 1011,
    "humidity": 65,
    "dew_point": 17.79,
    "uvi": 13.6,
    "clouds": 61,
    "visibility": 10000,
    "wind_speed": 1.59,
    "wind_deg": 54,
    "weather": [
      {
        "id": 803,
        "main": "Clouds",
        "description": "broken clouds",
        "icon": "04d"
      }
    ]
  },
  "hourly": [
    {
      "dt": 1599616800,
      "temp": 24.81,
      "feels_like": 26.4,
      "pressure": 1011,
      "humidity": 65,
      "dew_point": 17.79,
      "clouds": 61,
      "visibility": 10000,
      "wind_speed": 1.59,
      "wind_deg": 54,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599620400,
      "temp": 25.37,
      "feels_like": 26.92,
      "pressure": 1011,
      "humidity": 63,
      "dew_point": 17.82,
      "clouds": 62,
      "visibility": 10000,
      "wind_speed": 1.66,
      "wind_deg": 56,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599624000,
      "temp": 26.43,
      "feels_like": 27.94,
      "pressure": 1010,
      "humidity": 58,
      "dew_point": 17.5,
      "clouds": 70,
      "visibility": 10000,
      "wind_speed": 1.53,
      "wind_deg": 59,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.08
    },
    {
      "dt": 1599627600,
      "temp": 27.83,
      "feels_like": 29.62,
      "pressure": 1010,
      "humidity": 55,
      "dew_point": 17.96,
      "clouds": 76,
      "visibility": 10000,
      "wind_speed": 1.4,
      "wind_deg": 64,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.19
    },
    {
      "dt": 1599631200,
      "temp": 27.61,
      "feels_like": 30.1,
      "pressure": 1009,
      "humidity": 60,
      "dew_point": 19.15,
      "clouds": 80,
      "visibility": 10000,
      "wind_speed": 1.14,
      "wind_deg": 60,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.41,
      "rain": {
        "1h": 0.36
      }
    },
    {
      "dt": 1599634800,
      "temp": 25.91,
      "feels_like": 29.28,
      "pressure": 1008,
      "humidity": 73,
      "dew_point": 20.85,
      "clouds": 88,
      "visibility": 8448,
      "wind_speed": 0.94,
      "wind_deg": 72,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 0.74,
      "rain": {
        "1h": 1.63
      }
    },
    {
      "dt": 1599638400,
      "temp": 24.41,
      "feels_like": 28.24,
      "pressure": 1007,
      "humidity": 83,
      "dew_point": 21.35,
      "clouds": 93,
      "visibility": 5776,
      "wind_speed": 0.74,
      "wind_deg": 84,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 0.94,
      "rain": {
        "1h": 2.19
      }
    },
    {
      "dt": 1599642000,
      "temp": 22.97,
      "feels_like": 26.92,
      "pressure": 1006,
      "humidity": 90,
      "dew_point": 21.25,
      "clouds": 96,
      "visibility": 5561,
      "wind_speed": 0.51,
      "wind_deg": 102,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 0.97,
      "rain": {
        "1h": 2.22
      }
    },
    {
      "dt": 1599645600,
      "temp": 22.4,
      "feels_like": 26.23,
      "pressure": 1007,
      "humidity": 91,
      "dew_point": 20.98,
      "clouds": 96,
      "visibility": 10000,
      "wind_speed": 0.41,
      "wind_deg": 132,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 1.21
      }
    },
    {
      "dt": 1599649200,
      "temp": 21.47,
      "feels_like": 24.93,
      "pressure": 1008,
      "humidity": 93,
      "dew_point": 20.37,
      "clouds": 93,
      "visibility": 10000,
      "wind_speed": 0.53,
      "wind_deg": 131,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 0.71
      }
    },
    {
      "dt": 1599652800,
      "temp": 20.89,
      "feels_like": 24.08,
      "pressure": 1008,
      "humidity": 94,
      "dew_point": 19.96,
      "clouds": 94,
      "visibility": 10000,
      "wind_speed": 0.65,
      "wind_deg": 110,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 0.81
      }
    },
    {
      "dt": 1599656400,
      "temp": 20.84,
      "feels_like": 23.85,
      "pressure": 1009,
      "humidity": 93,
      "dew_point": 19.68,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.75,
      "wind_deg": 93,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.62,
      "rain": {
        "1h": 0.74
      }
    },
    {
      "dt": 1599660000,
      "temp": 20.69,
      "feels_like": 23.43,
      "pressure": 1010,
      "humidity": 90,
      "dew_point": 19.12,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.69,
      "wind_deg": 90,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.74,
      "rain": {
        "1h": 0.53
      }
    },
    {
      "dt": 1599663600,
      "temp": 20.38,
      "feels_like": 22.88,
      "pressure": 1010,
      "humidity": 89,
      "dew_point": 18.54,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.73,
      "wind_deg": 82,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.7,
      "rain": {
        "1h": 0.29
      }
    },
    {
      "dt": 1599667200,
      "temp": 20.31,
      "feels_like": 22.62,
      "pressure": 1010,
      "humidity": 87,
      "dew_point": 18.25,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.74,
      "wind_deg": 99,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.7
    },
    {
      "dt": 1599670800,
      "temp": 19.98,
      "feels_like": 22.28,
      "pressure": 1010,
      "humidity": 88,
      "dew_point": 18.09,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.66,
      "wind_deg": 99,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.66
    },
    {
      "dt": 1599674400,
      "temp": 19.45,
      "feels_like": 21.72,
      "pressure": 1009,
      "humidity": 90,
      "dew_point": 17.78,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.61,
      "wind_deg": 112,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.62
    },
    {
      "dt": 1599678000,
      "temp": 19.14,
      "feels_like": 21.28,
      "pressure": 1008,
      "humidity": 91,
      "dew_point": 17.64,
      "clouds": 97,
      "visibility": 10000,
      "wind_speed": 0.72,
      "wind_deg": 112,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.53
    },
    {
      "dt": 1599681600,
      "temp": 18.96,
      "feels_like": 20.98,
      "pressure": 1007,
      "humidity": 92,
      "dew_point": 17.68,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 0.88,
      "wind_deg": 124,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.53
    },
    {
      "dt": 1599685200,
      "temp": 18.99,
      "feels_like": 20.99,
      "pressure": 1007,
      "humidity": 93,
      "dew_point": 17.91,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 1.03,
      "wind_deg": 117,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.51
    },
    {
      "dt": 1599688800,
      "temp": 19.1,
      "feels_like": 21.19,
      "pressure": 1007,
      "humidity": 93,
      "dew_point": 18.09,
      "clouds": 98,
      "visibility": 10000,
      "wind_speed": 0.97,
      "wind_deg": 105,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.51
    },
    {
      "dt": 1599692400,
      "temp": 19.12,
      "feels_like": 21.27,
      "pressure": 1008,
      "humidity": 93,
      "dew_point": 18.09,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 0.89,
      "wind_deg": 101,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.47
    },
    {
      "dt": 1599696000,
      "temp": 20.49,
      "feels_like": 23,
      "pressure": 1009,
      "humidity": 89,
      "dew_point": 18.78,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 0.79,
      "wind_deg": 95,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.45
    },
    {
      "dt": 1599699600,
      "temp": 21.97,
      "feels_like": 24.8,
      "pressure": 1009,
      "humidity": 84,
      "dew_point": 19.32,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.67,
      "wind_deg": 99,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.31
    },
    {
      "dt": 1599703200,
      "temp": 22.57,
      "feels_like": 25.39,
      "pressure": 1009,
      "humidity": 81,
      "dew_point": 19.18,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.68,
      "wind_deg": 79,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.45
    },
    {
      "dt": 1599706800,
      "temp": 24.53,
      "feels_like": 26.95,
      "pressure": 1009,
      "humidity": 69,
      "dew_point": 18.6,
      "clouds": 97,
      "visibility": 10000,
      "wind_speed": 0.82,
      "wind_deg": 55,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.51
    },
    {
      "dt": 1599710400,
      "temp": 26.69,
      "feels_like": 29.18,
      "pressure": 1009,
      "humidity": 61,
      "dew_point": 18.57,
      "clouds": 98,
      "visibility": 10000,
      "wind_speed": 0.76,
      "wind_deg": 47,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.56,
      "rain": {
        "1h": 0.16
      }
    },
    {
      "dt": 1599714000,
      "temp": 26.4,
      "feels_like": 29.54,
      "pressure": 1008,
      "humidity": 66,
      "dew_point": 19.77,
      "clouds": 98,
      "visibility": 9973,
      "wind_speed": 0.47,
      "wind_deg": 87,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.77,
      "rain": {
        "1h": 0.91
      }
    },
    {
      "dt": 1599717600,
      "temp": 25.55,
      "feels_like": 29.45,
      "pressure": 1008,
      "humidity": 76,
      "dew_point": 21.06,
      "clouds": 98,
      "visibility": 6065,
      "wind_speed": 0.4,
      "wind_deg": 149,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 0.77,
      "rain": {
        "1h": 1.76
      }
    },
    {
      "dt": 1599721200,
      "temp": 25.42,
      "feels_like": 29.44,
      "pressure": 1007,
      "humidity": 78,
      "dew_point": 21.4,
      "clouds": 91,
      "visibility": 5300,
      "wind_speed": 0.45,
      "wind_deg": 187,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 0.93,
      "rain": {
        "1h": 2.2
      }
    },
    {
      "dt": 1599724800,
      "temp": 24.47,
      "feels_like": 28.3,
      "pressure": 1006,
      "humidity": 82,
      "dew_point": 21.26,
      "clouds": 96,
      "visibility": 4809,
      "wind_speed": 0.65,
      "wind_deg": 187,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 2.65
      }
    },
    {
      "dt": 1599728400,
      "temp": 23.47,
      "feels_like": 27.05,
      "pressure": 1006,
      "humidity": 86,
      "dew_point": 21.03,
      "clouds": 96,
      "visibility": 4939,
      "wind_speed": 0.86,
      "wind_deg": 179,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 2.72
      }
    },
    {
      "dt": 1599732000,
      "temp": 22.31,
      "feels_like": 25.81,
      "pressure": 1006,
      "humidity": 91,
      "dew_point": 20.83,
      "clouds": 96,
      "visibility": 5332,
      "wind_speed": 0.81,
      "wind_deg": 172,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 2.44
      }
    },
    {
      "dt": 1599735600,
      "temp": 21.02,
      "feels_like": 24.37,
      "pressure": 1008,
      "humidity": 95,
      "dew_point": 20.27,
      "clouds": 97,
      "visibility": 5069,
      "wind_speed": 0.62,
      "wind_deg": 169,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 2.4
      }
    },
    {
      "dt": 1599739200,
      "temp": 20.8,
      "feels_like": 24.08,
      "pressure": 1009,
      "humidity": 95,
      "dew_point": 20.07,
      "clouds": 97,
      "visibility": 4502,
      "wind_speed": 0.57,
      "wind_deg": 160,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 1,
      "rain": {
        "1h": 2.64
      }
    },
    {
      "dt": 1599742800,
      "temp": 20.77,
      "feels_like": 24.1,
      "pressure": 1009,
      "humidity": 94,
      "dew_point": 19.89,
      "clouds": 100,
      "visibility": 6986,
      "wind_speed": 0.37,
      "wind_deg": 142,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 0.97,
      "rain": {
        "1h": 2.38
      }
    },
    {
      "dt": 1599746400,
      "temp": 20.56,
      "feels_like": 23.81,
      "pressure": 1009,
      "humidity": 94,
      "dew_point": 19.57,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.34,
      "wind_deg": 127,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 0.95,
      "rain": {
        "1h": 1.49
      }
    },
    {
      "dt": 1599750000,
      "temp": 20,
      "feels_like": 22.98,
      "pressure": 1010,
      "humidity": 94,
      "dew_point": 19.16,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.36,
      "wind_deg": 146,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.91,
      "rain": {
        "1h": 0.55
      }
    },
    {
      "dt": 1599753600,
      "temp": 19.66,
      "feels_like": 22.76,
      "pressure": 1010,
      "humidity": 95,
      "dew_point": 18.85,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.09,
      "wind_deg": 153,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.87,
      "rain": {
        "1h": 0.17
      }
    },
    {
      "dt": 1599757200,
      "temp": 19.33,
      "feels_like": 22.01,
      "pressure": 1010,
      "humidity": 95,
      "dew_point": 18.57,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.48,
      "wind_deg": 83,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.87
    },
    {
      "dt": 1599760800,
      "temp": 19.03,
      "feels_like": 21.68,
      "pressure": 1010,
      "humidity": 95,
      "dew_point": 18.38,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.34,
      "wind_deg": 234,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.87
    },
    {
      "dt": 1599764400,
      "temp": 19.13,
      "feels_like": 21.89,
      "pressure": 1009,
      "humidity": 95,
      "dew_point": 18.39,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 0.24,
      "wind_deg": 266,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.6
    },
    {
      "dt": 1599768000,
      "temp": 19.02,
      "feels_like": 21.55,
      "pressure": 1009,
      "humidity": 95,
      "dew_point": 18.36,
      "clouds": 98,
      "visibility": 10000,
      "wind_speed": 0.5,
      "wind_deg": 261,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.59
    },
    {
      "dt": 1599771600,
      "temp": 18.92,
      "feels_like": 21.58,
      "pressure": 1008,
      "humidity": 95,
      "dew_point": 18.22,
      "clouds": 98,
      "visibility": 10000,
      "wind_speed": 0.25,
      "wind_deg": 254,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.62
    },
    {
      "dt": 1599775200,
      "temp": 18.82,
      "feels_like": 21.39,
      "pressure": 1009,
      "humidity": 95,
      "dew_point": 18.09,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 0.32,
      "wind_deg": 238,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.55
    },
    {
      "dt": 1599778800,
      "temp": 18.78,
      "feels_like": 21.3,
      "pressure": 1009,
      "humidity": 95,
      "dew_point": 18.01,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 0.37,
      "wind_deg": 231,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.51
    },
    {
      "dt": 1599782400,
      "temp": 20.04,
      "feels_like": 22.89,
      "pressure": 1010,
      "humidity": 92,
      "dew_point": 18.84,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 0.35,
      "wind_deg": 202,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.44
    },
    {
      "dt": 1599786000,
      "temp": 22.31,
      "feels_like": 25.37,
      "pressure": 1011,
      "humidity": 85,
      "dew_point": 19.68,
      "clouds": 99,
      "visibility": 10000,
      "wind_speed": 0.68,
      "wind_deg": 204,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.25
    }
  ],
  "daily": [
    {
      "dt": 1599627600,
      "sunrise": 1599605959,
      "sunset": 1599649339,
      "temp": {
        "day": 27.02,
        "min": 19.45,
        "max": 27.02,
        "night": 19.45,
        "eve": 20.92,
        "morn": 24.81
      },
      "feels_like": {
        "day": 29.38,
        "night": 21.72,
        "eve": 24.12,
        "morn": 26.5
      },
      "pressure": 1009,
      "humidity": 61,
      "dew_point": 18.86,
      "wind_speed": 1.14,
      "wind_deg": 60,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 76,
      "pop": 1,
      "rain": 10.69,
      "uvi": 13.6
    },
    {
      "dt": 1599714000,
      "sunrise": 1599692330,
      "sunset": 1599735726,
      "temp": {
        "day": 25.55,
        "min": 19.03,
        "max": 25.55,
        "night": 19.03,
        "eve": 20.8,
        "morn": 20.49
      },
      "feels_like": {
        "day": 29.45,
        "night": 21.68,
        "eve": 24.08,
        "morn": 23
      },
      "pressure": 1008,
      "humidity": 76,
      "dew_point": 21.06,
      "wind_speed": 0.4,
      "wind_deg": 149,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 98,
      "pop": 1,
      "rain": 22.62,
      "uvi": 13.63
    },
    {
      "dt": 1599800400,
      "sunrise": 1599778701,
      "sunset": 1599822112,
      "temp": {
        "day": 25.8,
        "min": 19.01,
        "max": 26.64,
        "night": 19.01,
        "eve": 20.61,
        "morn": 20.04
      },
      "feels_like": {
        "day": 28.69,
        "night": 21.69,
        "eve": 23.61,
        "morn": 22.89
      },
      "pressure": 1009,
      "humidity": 70,
      "dew_point": 20.09,
      "wind_speed": 1.09,
      "wind_deg": 216,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 90,
      "pop": 0.96,
      "rain": 9.34,
      "uvi": 14.01
    },
    {
      "dt": 1599883200,
      "sunrise": 1599865071,
      "sunset": 1599908498,
      "temp": {
        "day": 25.71,
        "min": 18.7,
        "max": 26.86,
        "night": 20.2,
        "eve": 23.02,
        "morn": 18.7
      },
      "feels_like": {
        "day": 28.4,
        "night": 23.17,
        "eve": 26.63,
        "morn": 20.99
      },
      "pressure": 1012,
      "humidity": 70,
      "dew_point": 20.03,
      "wind_speed": 1.32,
      "wind_deg": 177,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 0.95,
      "rain": 7.59,
      "uvi": 13.38
    },
    {
      "dt": 1599969600,
      "sunrise": 1599951441,
      "sunset": 1599994884,
      "temp": {
        "day": 25.41,
        "min": 19.72,
        "max": 25.41,
        "night": 19.97,
        "eve": 23,
        "morn": 19.72
      },
      "feels_like": {
        "day": 28.02,
        "night": 22.55,
        "eve": 25.92,
        "morn": 22.34
      },
      "pressure": 1012,
      "humidity": 72,
      "dew_point": 20.08,
      "wind_speed": 1.54,
      "wind_deg": 196,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 74,
      "pop": 0.83,
      "rain": 6.41,
      "uvi": 13.41
    },
    {
      "dt": 1600056000,
      "sunrise": 1600037811,
      "sunset": 1600081270,
      "temp": {
        "day": 24.86,
        "min": 18.62,
        "max": 25.41,
        "night": 20.59,
        "eve": 23.71,
        "morn": 18.62
      },
      "feels_like": {
        "day": 27.14,
        "night": 23.81,
        "eve": 26.92,
        "morn": 20.71
      },
      "pressure": 1011,
      "humidity": 71,
      "dew_point": 19.31,
      "wind_speed": 1.51,
      "wind_deg": 199,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 97,
      "pop": 0.64,
      "rain": 5.84,
      "uvi": 13.9
    },
    {
      "dt": 1600142400,
      "sunrise": 1600124181,
      "sunset": 1600167656,
      "temp": {
        "day": 25.59,
        "min": 19.61,
        "max": 27.48,
        "night": 20.86,
        "eve": 25.07,
        "morn": 19.61
      },
      "feels_like": {
        "day": 27.65,
        "night": 23.91,
        "eve": 27.49,
        "morn": 22.25
      },
      "pressure": 1012,
      "humidity": 67,
      "dew_point": 19.15,
      "wind_speed": 1.68,
      "wind_deg": 204,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 80,
      "pop": 0.65,
      "rain": 2.43,
      "uvi": 14.24
    },
    {
      "dt": 1600228800,
      "sunrise": 1600210551,
      "sunset": 1600254042,
      "temp": {
        "day": 27.59,
        "min": 19.55,
        "max": 28.33,
        "night": 19.79,
        "eve": 23.36,
        "morn": 19.55
      },
      "feels_like": {
        "day": 29.81,
        "night": 22.26,
        "eve": 26.88,
        "morn": 22.3
      },
      "pressure": 1012,
      "humidity": 56,
      "dew_point": 18.25,
      "wind_speed": 0.83,
      "wind_deg": 188,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 68,
      "pop": 0.87,
      "rain": 6.15,
      "uvi": 14
    }
  ]
};
