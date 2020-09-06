import { useEffect } from "react";

export const useFetchForecast = (lat, lon, setWeatherData) => {
	useEffect(() => {
		const api = {
			key: "d892855dd51283817b1d30b7e3496f98",
			base: "https://api.openweathermap.org/data/2.5/onecall?",
			units: "metric",
			part: "current,minutely",
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
  "lat": 46.81,
  "lon": -71.21,
  "timezone": "America/Toronto",
  "timezone_offset": -14400,
  "hourly": [
    {
      "dt": 1599422400,
      "temp": 18.91,
      "feels_like": 15.88,
      "pressure": 1021,
      "humidity": 55,
      "dew_point": 9.68,
      "clouds": 75,
      "visibility": 10000,
      "wind_speed": 4.26,
      "wind_deg": 236,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.63
    },
    {
      "dt": 1599426000,
      "temp": 18.44,
      "feels_like": 15.98,
      "pressure": 1021,
      "humidity": 60,
      "dew_point": 10.54,
      "clouds": 41,
      "visibility": 10000,
      "wind_speed": 3.79,
      "wind_deg": 242,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0.62
    },
    {
      "dt": 1599429600,
      "temp": 17.37,
      "feels_like": 15.69,
      "pressure": 1020,
      "humidity": 67,
      "dew_point": 11.19,
      "clouds": 36,
      "visibility": 10000,
      "wind_speed": 2.94,
      "wind_deg": 230,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0.54
    },
    {
      "dt": 1599433200,
      "temp": 15.07,
      "feels_like": 14.08,
      "pressure": 1021,
      "humidity": 75,
      "dew_point": 10.68,
      "clouds": 24,
      "visibility": 10000,
      "wind_speed": 1.74,
      "wind_deg": 221,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "pop": 0.4
    },
    {
      "dt": 1599436800,
      "temp": 13.5,
      "feels_like": 12.62,
      "pressure": 1021,
      "humidity": 80,
      "dew_point": 10.12,
      "clouds": 17,
      "visibility": 10000,
      "wind_speed": 1.37,
      "wind_deg": 182,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0.28
    },
    {
      "dt": 1599440400,
      "temp": 12.81,
      "feels_like": 11.84,
      "pressure": 1022,
      "humidity": 82,
      "dew_point": 9.89,
      "clouds": 20,
      "visibility": 10000,
      "wind_speed": 1.38,
      "wind_deg": 180,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599444000,
      "temp": 12.4,
      "feels_like": 11.63,
      "pressure": 1022,
      "humidity": 83,
      "dew_point": 9.62,
      "clouds": 15,
      "visibility": 10000,
      "wind_speed": 1.01,
      "wind_deg": 197,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599447600,
      "temp": 11.89,
      "feels_like": 11.11,
      "pressure": 1022,
      "humidity": 83,
      "dew_point": 9.25,
      "clouds": 9,
      "visibility": 10000,
      "wind_speed": 0.84,
      "wind_deg": 169,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599451200,
      "temp": 11.54,
      "feels_like": 10.35,
      "pressure": 1021,
      "humidity": 84,
      "dew_point": 8.99,
      "clouds": 8,
      "visibility": 10000,
      "wind_speed": 1.36,
      "wind_deg": 134,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599454800,
      "temp": 10.92,
      "feels_like": 9.71,
      "pressure": 1020,
      "humidity": 85,
      "dew_point": 8.52,
      "clouds": 6,
      "visibility": 10000,
      "wind_speed": 1.24,
      "wind_deg": 97,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599458400,
      "temp": 10.59,
      "feels_like": 8.77,
      "pressure": 1019,
      "humidity": 85,
      "dew_point": 8.22,
      "clouds": 5,
      "visibility": 10000,
      "wind_speed": 2,
      "wind_deg": 89,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599462000,
      "temp": 10.28,
      "feels_like": 8.29,
      "pressure": 1018,
      "humidity": 85,
      "dew_point": 8.03,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 2.14,
      "wind_deg": 78,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599465600,
      "temp": 10.22,
      "feels_like": 8.37,
      "pressure": 1018,
      "humidity": 84,
      "dew_point": 7.78,
      "clouds": 0,
      "visibility": 10000,
      "wind_speed": 1.85,
      "wind_deg": 55,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599469200,
      "temp": 10.34,
      "feels_like": 8.18,
      "pressure": 1017,
      "humidity": 83,
      "dew_point": 7.67,
      "clouds": 8,
      "visibility": 10000,
      "wind_speed": 2.28,
      "wind_deg": 65,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599472800,
      "temp": 10.57,
      "feels_like": 8.2,
      "pressure": 1016,
      "humidity": 81,
      "dew_point": 7.57,
      "clouds": 26,
      "visibility": 10000,
      "wind_speed": 2.54,
      "wind_deg": 73,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599476400,
      "temp": 11.63,
      "feels_like": 9.46,
      "pressure": 1016,
      "humidity": 79,
      "dew_point": 8.23,
      "clouds": 38,
      "visibility": 10000,
      "wind_speed": 2.48,
      "wind_deg": 71,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599480000,
      "temp": 13.88,
      "feels_like": 11.86,
      "pressure": 1015,
      "humidity": 77,
      "dew_point": 9.93,
      "clouds": 49,
      "visibility": 10000,
      "wind_speed": 2.92,
      "wind_deg": 77,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599483600,
      "temp": 16.48,
      "feels_like": 15.36,
      "pressure": 1014,
      "humidity": 74,
      "dew_point": 11.97,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.41,
      "wind_deg": 110,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599487200,
      "temp": 17.86,
      "feels_like": 17.49,
      "pressure": 1013,
      "humidity": 74,
      "dew_point": 13.26,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 1.94,
      "wind_deg": 123,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599490800,
      "temp": 20.5,
      "feels_like": 20.5,
      "pressure": 1012,
      "humidity": 69,
      "dew_point": 14.72,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.11,
      "wind_deg": 148,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599494400,
      "temp": 23.59,
      "feels_like": 21.45,
      "pressure": 1011,
      "humidity": 60,
      "dew_point": 15.5,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 5.55,
      "wind_deg": 202,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.2,
      "rain": {
        "1h": 0.16
      }
    },
    {
      "dt": 1599498000,
      "temp": 22.04,
      "feels_like": 19.71,
      "pressure": 1011,
      "humidity": 65,
      "dew_point": 15.37,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 5.72,
      "wind_deg": 206,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.35,
      "rain": {
        "1h": 0.14
      }
    },
    {
      "dt": 1599501600,
      "temp": 20.72,
      "feels_like": 19.19,
      "pressure": 1010,
      "humidity": 67,
      "dew_point": 14.46,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 4.17,
      "wind_deg": 197,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.25
    },
    {
      "dt": 1599505200,
      "temp": 20.2,
      "feels_like": 18.94,
      "pressure": 1010,
      "humidity": 68,
      "dew_point": 14.33,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 3.66,
      "wind_deg": 206,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.5,
      "rain": {
        "1h": 0.12
      }
    },
    {
      "dt": 1599508800,
      "temp": 19.45,
      "feels_like": 19.03,
      "pressure": 1010,
      "humidity": 74,
      "dew_point": 14.88,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.75,
      "wind_deg": 219,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.63,
      "rain": {
        "1h": 0.22
      }
    },
    {
      "dt": 1599512400,
      "temp": 18.78,
      "feels_like": 18.9,
      "pressure": 1010,
      "humidity": 78,
      "dew_point": 14.96,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.07,
      "wind_deg": 198,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "pop": 0.72,
      "rain": {
        "1h": 0.14
      }
    },
    {
      "dt": 1599516000,
      "temp": 18.89,
      "feels_like": 18.43,
      "pressure": 1010,
      "humidity": 77,
      "dew_point": 14.78,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.85,
      "wind_deg": 197,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.6
    },
    {
      "dt": 1599519600,
      "temp": 19.6,
      "feels_like": 18.13,
      "pressure": 1010,
      "humidity": 70,
      "dew_point": 14.09,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 3.89,
      "wind_deg": 213,
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
      "dt": 1599523200,
      "temp": 20.14,
      "feels_like": 18.34,
      "pressure": 1011,
      "humidity": 65,
      "dew_point": 13.46,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 4.07,
      "wind_deg": 225,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.41
    },
    {
      "dt": 1599526800,
      "temp": 20.08,
      "feels_like": 18.54,
      "pressure": 1012,
      "humidity": 65,
      "dew_point": 13.48,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 3.67,
      "wind_deg": 232,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.42
    },
    {
      "dt": 1599530400,
      "temp": 19.48,
      "feels_like": 18,
      "pressure": 1012,
      "humidity": 72,
      "dew_point": 14.38,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 4.07,
      "wind_deg": 233,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.55,
      "rain": {
        "1h": 0.33
      }
    },
    {
      "dt": 1599534000,
      "temp": 18.31,
      "feels_like": 16.59,
      "pressure": 1013,
      "humidity": 87,
      "dew_point": 16.2,
      "clouds": 100,
      "visibility": 4495,
      "wind_speed": 5.36,
      "wind_deg": 238,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 0.7,
      "rain": {
        "1h": 2.38
      }
    },
    {
      "dt": 1599537600,
      "temp": 18.34,
      "feels_like": 16.94,
      "pressure": 1014,
      "humidity": 90,
      "dew_point": 16.78,
      "clouds": 100,
      "visibility": 3989,
      "wind_speed": 5.21,
      "wind_deg": 235,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 0.78,
      "rain": {
        "1h": 2.23
      }
    },
    {
      "dt": 1599541200,
      "temp": 18.26,
      "feels_like": 17.33,
      "pressure": 1014,
      "humidity": 90,
      "dew_point": 16.68,
      "clouds": 100,
      "visibility": 6415,
      "wind_speed": 4.49,
      "wind_deg": 239,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "pop": 0.86,
      "rain": {
        "1h": 1.1
      }
    },
    {
      "dt": 1599544800,
      "temp": 17.76,
      "feels_like": 17.5,
      "pressure": 1015,
      "humidity": 89,
      "dew_point": 16.04,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 3.16,
      "wind_deg": 225,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.9,
      "rain": {
        "1h": 0.35
      }
    },
    {
      "dt": 1599548400,
      "temp": 16.94,
      "feels_like": 16.78,
      "pressure": 1016,
      "humidity": 90,
      "dew_point": 15.44,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.69,
      "wind_deg": 261,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.49,
      "rain": {
        "1h": 0.25
      }
    },
    {
      "dt": 1599552000,
      "temp": 16.17,
      "feels_like": 15.55,
      "pressure": 1016,
      "humidity": 85,
      "dew_point": 13.71,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.52,
      "wind_deg": 291,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.58,
      "rain": {
        "1h": 0.23
      }
    },
    {
      "dt": 1599555600,
      "temp": 14.99,
      "feels_like": 14.41,
      "pressure": 1017,
      "humidity": 80,
      "dew_point": 11.68,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 1.53,
      "wind_deg": 277,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "pop": 0.53,
      "rain": {
        "1h": 0.23
      }
    },
    {
      "dt": 1599559200,
      "temp": 13.9,
      "feels_like": 13.07,
      "pressure": 1018,
      "humidity": 80,
      "dew_point": 10.63,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 1.45,
      "wind_deg": 255,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "pop": 0.52
    },
    {
      "dt": 1599562800,
      "temp": 13.07,
      "feels_like": 11.55,
      "pressure": 1019,
      "humidity": 80,
      "dew_point": 9.81,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.12,
      "wind_deg": 268,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.52
    },
    {
      "dt": 1599566400,
      "temp": 13.86,
      "feels_like": 12.3,
      "pressure": 1019,
      "humidity": 77,
      "dew_point": 9.98,
      "clouds": 97,
      "visibility": 10000,
      "wind_speed": 2.26,
      "wind_deg": 268,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.49
    },
    {
      "dt": 1599570000,
      "temp": 15.06,
      "feels_like": 13.59,
      "pressure": 1020,
      "humidity": 72,
      "dew_point": 10.14,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.19,
      "wind_deg": 254,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.04
    },
    {
      "dt": 1599573600,
      "temp": 16.57,
      "feels_like": 14.55,
      "pressure": 1021,
      "humidity": 63,
      "dew_point": 9.58,
      "clouds": 100,
      "visibility": 10000,
      "wind_speed": 2.76,
      "wind_deg": 248,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.04
    },
    {
      "dt": 1599577200,
      "temp": 18.35,
      "feels_like": 15.61,
      "pressure": 1021,
      "humidity": 52,
      "dew_point": 8.53,
      "clouds": 90,
      "visibility": 10000,
      "wind_speed": 3.36,
      "wind_deg": 247,
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.01
    },
    {
      "dt": 1599580800,
      "temp": 19.2,
      "feels_like": 15.81,
      "pressure": 1021,
      "humidity": 49,
      "dew_point": 8.53,
      "clouds": 67,
      "visibility": 10000,
      "wind_speed": 4.26,
      "wind_deg": 243,
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "pop": 0.01
    },
    {
      "dt": 1599584400,
      "temp": 19.68,
      "feels_like": 16.18,
      "pressure": 1021,
      "humidity": 48,
      "dew_point": 8.58,
      "clouds": 54,
      "visibility": 10000,
      "wind_speed": 4.46,
      "wind_deg": 243,
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
      "dt": 1599588000,
      "temp": 20.06,
      "feels_like": 16.39,
      "pressure": 1022,
      "humidity": 47,
      "dew_point": 8.66,
      "clouds": 46,
      "visibility": 10000,
      "wind_speed": 4.71,
      "wind_deg": 242,
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "pop": 0
    },
    {
      "dt": 1599591600,
      "temp": 20.09,
      "feels_like": 16.83,
      "pressure": 1022,
      "humidity": 48,
      "dew_point": 9.04,
      "clouds": 2,
      "visibility": 10000,
      "wind_speed": 4.25,
      "wind_deg": 237,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "pop": 0
    }
  ],
  "daily": [
    {
      "dt": 1599408000,
      "sunrise": 1599387104,
      "sunset": 1599434083,
      "temp": {
        "day": 18.91,
        "min": 12.34,
        "max": 18.91,
        "night": 12.34,
        "eve": 18.44,
        "morn": 18.91
      },
      "feels_like": {
        "day": 16.04,
        "night": 11.63,
        "eve": 15.98,
        "morn": 16.04
      },
      "pressure": 1021,
      "humidity": 55,
      "dew_point": 9.68,
      "wind_speed": 4.04,
      "wind_deg": 228,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 75,
      "pop": 0.76,
      "rain": 0.22,
      "uvi": 5.47
    },
    {
      "dt": 1599494400,
      "sunrise": 1599473581,
      "sunset": 1599520364,
      "temp": {
        "day": 20.5,
        "min": 10.34,
        "max": 20.72,
        "night": 18.31,
        "eve": 18.78,
        "morn": 10.34
      },
      "feels_like": {
        "day": 20.5,
        "night": 16.59,
        "eve": 18.9,
        "morn": 8.18
      },
      "pressure": 1012,
      "humidity": 69,
      "dew_point": 14.72,
      "wind_speed": 2.11,
      "wind_deg": 148,
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 0.72,
      "rain": 3.63,
      "uvi": 5.41
    },
    {
      "dt": 1599580800,
      "sunrise": 1599560058,
      "sunset": 1599606645,
      "temp": {
        "day": 18.35,
        "min": 13.86,
        "max": 20.06,
        "night": 15.91,
        "eve": 19.4,
        "morn": 14.99
      },
      "feels_like": {
        "day": 15.61,
        "night": 15.22,
        "eve": 17.09,
        "morn": 14.41
      },
      "pressure": 1021,
      "humidity": 52,
      "dew_point": 8.53,
      "wind_speed": 3.36,
      "wind_deg": 247,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 90,
      "pop": 0.53,
      "rain": 0.7,
      "uvi": 5.5
    },
    {
      "dt": 1599667200,
      "sunrise": 1599646535,
      "sunset": 1599692925,
      "temp": {
        "day": 15.77,
        "min": 10.52,
        "max": 16.47,
        "night": 10.52,
        "eve": 13.93,
        "morn": 13.8
      },
      "feels_like": {
        "day": 12.46,
        "night": 6.39,
        "eve": 10.9,
        "morn": 11.31
      },
      "pressure": 1027,
      "humidity": 71,
      "dew_point": 10.53,
      "wind_speed": 5,
      "wind_deg": 61,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 75,
      "pop": 0.79,
      "rain": 0.86,
      "uvi": 5.5
    },
    {
      "dt": 1599753600,
      "sunrise": 1599733012,
      "sunset": 1599779205,
      "temp": {
        "day": 13.87,
        "min": 11,
        "max": 16.93,
        "night": 13.64,
        "eve": 16.93,
        "morn": 11
      },
      "feels_like": {
        "day": 13.04,
        "night": 12.7,
        "eve": 17.18,
        "morn": 7.61
      },
      "pressure": 1023,
      "humidity": 89,
      "dew_point": 12.22,
      "wind_speed": 2.11,
      "wind_deg": 69,
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 0.94,
      "rain": 1.74,
      "uvi": 5.52
    },
    {
      "dt": 1599840000,
      "sunrise": 1599819489,
      "sunset": 1599865485,
      "temp": {
        "day": 15.78,
        "min": 10.25,
        "max": 19,
        "night": 10.28,
        "eve": 18.12,
        "morn": 10.25
      },
      "feels_like": {
        "day": 13.27,
        "night": 7.34,
        "eve": 14.71,
        "morn": 8.55
      },
      "pressure": 1023,
      "humidity": 49,
      "dew_point": 5.36,
      "wind_speed": 2,
      "wind_deg": 305,
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": 2,
      "pop": 0.04,
      "uvi": 5.45
    },
    {
      "dt": 1599926400,
      "sunrise": 1599905966,
      "sunset": 1599951764,
      "temp": {
        "day": 13.47,
        "min": 6.42,
        "max": 16.44,
        "night": 12.33,
        "eve": 16.04,
        "morn": 6.42
      },
      "feels_like": {
        "day": 10.74,
        "night": 9.03,
        "eve": 13.54,
        "morn": 3.74
      },
      "pressure": 1027,
      "humidity": 53,
      "dew_point": 4.26,
      "wind_speed": 2.04,
      "wind_deg": 95,
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "clouds": 19,
      "pop": 0,
      "uvi": 5.51
    },
    {
      "dt": 1600012800,
      "sunrise": 1599992443,
      "sunset": 1600038044,
      "temp": {
        "day": 11.25,
        "min": 11.25,
        "max": 13.73,
        "night": 13.73,
        "eve": 12.06,
        "morn": 12.33
      },
      "feels_like": {
        "day": 9.37,
        "night": 13.48,
        "eve": 10.66,
        "morn": 10.26
      },
      "pressure": 1018,
      "humidity": 88,
      "dew_point": 9.38,
      "wind_speed": 2.5,
      "wind_deg": 132,
      "weather": [
        {
          "id": 502,
          "main": "Rain",
          "description": "heavy intensity rain",
          "icon": "10d"
        }
      ],
      "clouds": 100,
      "pop": 1,
      "rain": 36.54,
      "uvi": 5.4
    }
  ]
}
