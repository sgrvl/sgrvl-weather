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
	lat: -5.02,
	lon: 104.17,
	timezone: "Asia/Jakarta",
	timezone_offset: 25200,
	hourly: [
		{
			dt: 1599501600,
			temp: 18.25,
			feels_like: 19.79,
			pressure: 1012,
			humidity: 92,
			dew_point: 16.93,
			clouds: 5,
			visibility: 10000,
			wind_speed: 1.16,
			wind_deg: 48,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01n",
				},
			],
			pop: 0.24,
		},
		{
			dt: 1599505200,
			temp: 18.04,
			feels_like: 19.45,
			pressure: 1012,
			humidity: 91,
			dew_point: 16.55,
			clouds: 12,
			visibility: 10000,
			wind_speed: 1.13,
			wind_deg: 46,
			weather: [
				{
					id: 801,
					main: "Clouds",
					description: "few clouds",
					icon: "02n",
				},
			],
			pop: 0,
		},
		{
			dt: 1599508800,
			temp: 17.68,
			feels_like: 18.8,
			pressure: 1010,
			humidity: 88,
			dew_point: 15.67,
			clouds: 19,
			visibility: 10000,
			wind_speed: 1.06,
			wind_deg: 46,
			weather: [
				{
					id: 801,
					main: "Clouds",
					description: "few clouds",
					icon: "02n",
				},
			],
			pop: 0,
		},
		{
			dt: 1599512400,
			temp: 17.3,
			feels_like: 17.88,
			pressure: 1010,
			humidity: 82,
			dew_point: 14.2,
			clouds: 15,
			visibility: 10000,
			wind_speed: 1.07,
			wind_deg: 44,
			weather: [
				{
					id: 801,
					main: "Clouds",
					description: "few clouds",
					icon: "02n",
				},
			],
			pop: 0,
		},
		{
			dt: 1599516000,
			temp: 16.89,
			feels_like: 17.07,
			pressure: 1011,
			humidity: 77,
			dew_point: 12.84,
			clouds: 13,
			visibility: 10000,
			wind_speed: 1,
			wind_deg: 46,
			weather: [
				{
					id: 801,
					main: "Clouds",
					description: "few clouds",
					icon: "02n",
				},
			],
			pop: 0,
		},
		{
			dt: 1599519600,
			temp: 16.69,
			feels_like: 16.45,
			pressure: 1011,
			humidity: 72,
			dew_point: 11.69,
			clouds: 10,
			visibility: 10000,
			wind_speed: 1.07,
			wind_deg: 47,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599523200,
			temp: 18.42,
			feels_like: 18.44,
			pressure: 1012,
			humidity: 69,
			dew_point: 12.66,
			clouds: 8,
			visibility: 10000,
			wind_speed: 1.13,
			wind_deg: 45,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599526800,
			temp: 22.41,
			feels_like: 22.85,
			pressure: 1012,
			humidity: 57,
			dew_point: 13.69,
			clouds: 9,
			visibility: 10000,
			wind_speed: 0.92,
			wind_deg: 51,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599530400,
			temp: 25.47,
			feels_like: 25.63,
			pressure: 1013,
			humidity: 45,
			dew_point: 12.96,
			clouds: 14,
			visibility: 10000,
			wind_speed: 0.95,
			wind_deg: 77,
			weather: [
				{
					id: 801,
					main: "Clouds",
					description: "few clouds",
					icon: "02d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599534000,
			temp: 27.06,
			feels_like: 27.39,
			pressure: 1013,
			humidity: 44,
			dew_point: 13.83,
			clouds: 10,
			visibility: 10000,
			wind_speed: 1.21,
			wind_deg: 74,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599537600,
			temp: 28.13,
			feels_like: 28.56,
			pressure: 1012,
			humidity: 44,
			dew_point: 14.89,
			clouds: 7,
			visibility: 10000,
			wind_speed: 1.54,
			wind_deg: 70,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599541200,
			temp: 29.05,
			feels_like: 29.78,
			pressure: 1011,
			humidity: 44,
			dew_point: 15.74,
			clouds: 6,
			visibility: 10000,
			wind_speed: 1.55,
			wind_deg: 69,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599544800,
			temp: 29.21,
			feels_like: 30.16,
			pressure: 1010,
			humidity: 45,
			dew_point: 16.32,
			clouds: 5,
			visibility: 10000,
			wind_speed: 1.5,
			wind_deg: 65,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599548400,
			temp: 28.6,
			feels_like: 29.91,
			pressure: 1009,
			humidity: 50,
			dew_point: 17.28,
			clouds: 6,
			visibility: 10000,
			wind_speed: 1.61,
			wind_deg: 63,
			weather: [
				{
					id: 800,
					main: "Clear",
					description: "clear sky",
					icon: "01d",
				},
			],
			pop: 0.21,
		},
		{
			dt: 1599552000,
			temp: 27.08,
			feels_like: 29.21,
			pressure: 1008,
			humidity: 59,
			dew_point: 18.48,
			clouds: 30,
			visibility: 10000,
			wind_speed: 1.18,
			wind_deg: 61,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10d",
				},
			],
			pop: 0.53,
			rain: {
				"1h": 0.24,
			},
		},
		{
			dt: 1599555600,
			temp: 25.12,
			feels_like: 27.87,
			pressure: 1008,
			humidity: 71,
			dew_point: 19.63,
			clouds: 40,
			visibility: 10000,
			wind_speed: 1,
			wind_deg: 59,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10d",
				},
			],
			pop: 0.7,
			rain: {
				"1h": 0.65,
			},
		},
		{
			dt: 1599559200,
			temp: 23.46,
			feels_like: 26.78,
			pressure: 1009,
			humidity: 84,
			dew_point: 20.61,
			clouds: 40,
			visibility: 10000,
			wind_speed: 0.95,
			wind_deg: 51,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10d",
				},
			],
			pop: 0.81,
			rain: {
				"1h": 0.92,
			},
		},
		{
			dt: 1599562800,
			temp: 21.27,
			feels_like: 24.13,
			pressure: 1010,
			humidity: 92,
			dew_point: 20.06,
			clouds: 46,
			visibility: 10000,
			wind_speed: 1.14,
			wind_deg: 44,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10d",
				},
			],
			pop: 0.87,
			rain: {
				"1h": 0.75,
			},
		},
		{
			dt: 1599566400,
			temp: 20.63,
			feels_like: 23.28,
			pressure: 1011,
			humidity: 94,
			dew_point: 19.79,
			clouds: 53,
			visibility: 10000,
			wind_speed: 1.25,
			wind_deg: 43,
			weather: [
				{
					id: 803,
					main: "Clouds",
					description: "broken clouds",
					icon: "04n",
				},
			],
			pop: 0.83,
		},
		{
			dt: 1599570000,
			temp: 20.58,
			feels_like: 23.13,
			pressure: 1012,
			humidity: 94,
			dew_point: 19.65,
			clouds: 96,
			visibility: 10000,
			wind_speed: 1.36,
			wind_deg: 44,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.2,
		},
		{
			dt: 1599573600,
			temp: 20.58,
			feels_like: 23.13,
			pressure: 1013,
			humidity: 94,
			dew_point: 19.58,
			clouds: 98,
			visibility: 10000,
			wind_speed: 1.35,
			wind_deg: 43,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.18,
		},
		{
			dt: 1599577200,
			temp: 20.45,
			feels_like: 22.93,
			pressure: 1013,
			humidity: 93,
			dew_point: 19.39,
			clouds: 98,
			visibility: 10000,
			wind_speed: 1.25,
			wind_deg: 41,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.11,
		},
		{
			dt: 1599580800,
			temp: 20.25,
			feels_like: 22.68,
			pressure: 1013,
			humidity: 93,
			dew_point: 19.21,
			clouds: 98,
			visibility: 10000,
			wind_speed: 1.2,
			wind_deg: 40,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.07,
		},
		{
			dt: 1599584400,
			temp: 20.11,
			feels_like: 22.48,
			pressure: 1012,
			humidity: 93,
			dew_point: 19.04,
			clouds: 98,
			visibility: 10000,
			wind_speed: 1.19,
			wind_deg: 40,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.07,
		},
		{
			dt: 1599588000,
			temp: 19.98,
			feels_like: 22.37,
			pressure: 1011,
			humidity: 93,
			dew_point: 18.9,
			clouds: 98,
			visibility: 10000,
			wind_speed: 1.09,
			wind_deg: 35,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.03,
		},
		{
			dt: 1599591600,
			temp: 19.72,
			feels_like: 22.01,
			pressure: 1010,
			humidity: 93,
			dew_point: 18.58,
			clouds: 97,
			visibility: 10000,
			wind_speed: 1.06,
			wind_deg: 35,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0,
		},
		{
			dt: 1599595200,
			temp: 19.55,
			feels_like: 21.57,
			pressure: 1010,
			humidity: 90,
			dew_point: 18.03,
			clouds: 91,
			visibility: 10000,
			wind_speed: 1.03,
			wind_deg: 34,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0,
		},
		{
			dt: 1599598800,
			temp: 19.4,
			feels_like: 21.25,
			pressure: 1010,
			humidity: 88,
			dew_point: 17.4,
			clouds: 91,
			visibility: 10000,
			wind_speed: 0.96,
			wind_deg: 34,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.01,
		},
		{
			dt: 1599602400,
			temp: 19.36,
			feels_like: 21.01,
			pressure: 1010,
			humidity: 85,
			dew_point: 16.87,
			clouds: 90,
			visibility: 10000,
			wind_speed: 0.91,
			wind_deg: 38,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.01,
		},
		{
			dt: 1599606000,
			temp: 19.06,
			feels_like: 20.46,
			pressure: 1010,
			humidity: 83,
			dew_point: 16.23,
			clouds: 88,
			visibility: 10000,
			wind_speed: 0.9,
			wind_deg: 38,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599609600,
			temp: 19.97,
			feels_like: 21.47,
			pressure: 1011,
			humidity: 81,
			dew_point: 16.61,
			clouds: 87,
			visibility: 10000,
			wind_speed: 1.03,
			wind_deg: 41,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599613200,
			temp: 22.5,
			feels_like: 24.19,
			pressure: 1011,
			humidity: 71,
			dew_point: 17.03,
			clouds: 56,
			visibility: 10000,
			wind_speed: 0.97,
			wind_deg: 40,
			weather: [
				{
					id: 803,
					main: "Clouds",
					description: "broken clouds",
					icon: "04d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599616800,
			temp: 25.32,
			feels_like: 26.53,
			pressure: 1012,
			humidity: 56,
			dew_point: 16.06,
			clouds: 56,
			visibility: 10000,
			wind_speed: 1.06,
			wind_deg: 43,
			weather: [
				{
					id: 803,
					main: "Clouds",
					description: "broken clouds",
					icon: "04d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599620400,
			temp: 27.2,
			feels_like: 28.15,
			pressure: 1012,
			humidity: 49,
			dew_point: 15.79,
			clouds: 41,
			visibility: 10000,
			wind_speed: 1.24,
			wind_deg: 47,
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599624000,
			temp: 28.5,
			feels_like: 29.78,
			pressure: 1011,
			humidity: 47,
			dew_point: 16.26,
			clouds: 43,
			visibility: 10000,
			wind_speed: 1.05,
			wind_deg: 53,
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d",
				},
			],
			pop: 0,
		},
		{
			dt: 1599627600,
			temp: 29.41,
			feels_like: 31.01,
			pressure: 1010,
			humidity: 46,
			dew_point: 16.81,
			clouds: 45,
			visibility: 10000,
			wind_speed: 0.87,
			wind_deg: 65,
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d",
				},
			],
			pop: 0.03,
		},
		{
			dt: 1599631200,
			temp: 28.78,
			feels_like: 30.73,
			pressure: 1009,
			humidity: 50,
			dew_point: 17.36,
			clouds: 49,
			visibility: 10000,
			wind_speed: 0.79,
			wind_deg: 93,
			weather: [
				{
					id: 802,
					main: "Clouds",
					description: "scattered clouds",
					icon: "03d",
				},
			],
			pop: 0.03,
		},
		{
			dt: 1599634800,
			temp: 26.31,
			feels_like: 29.08,
			pressure: 1008,
			humidity: 64,
			dew_point: 18.96,
			clouds: 89,
			visibility: 10000,
			wind_speed: 0.63,
			wind_deg: 142,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10d",
				},
			],
			pop: 0.68,
			rain: {
				"1h": 0.58,
			},
		},
		{
			dt: 1599638400,
			temp: 25.75,
			feels_like: 28.86,
			pressure: 1007,
			humidity: 70,
			dew_point: 19.96,
			clouds: 73,
			visibility: 9420,
			wind_speed: 0.74,
			wind_deg: 168,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			pop: 0.91,
			rain: {
				"1h": 1.15,
			},
		},
		{
			dt: 1599642000,
			temp: 24.43,
			feels_like: 27.91,
			pressure: 1007,
			humidity: 80,
			dew_point: 20.79,
			clouds: 67,
			visibility: 9808,
			wind_speed: 0.83,
			wind_deg: 174,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			pop: 0.99,
			rain: {
				"1h": 1.56,
			},
		},
		{
			dt: 1599645600,
			temp: 23.12,
			feels_like: 26.72,
			pressure: 1008,
			humidity: 88,
			dew_point: 21.16,
			clouds: 73,
			visibility: 7988,
			wind_speed: 0.85,
			wind_deg: 190,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			pop: 0.99,
			rain: {
				"1h": 1.69,
			},
		},
		{
			dt: 1599649200,
			temp: 21.45,
			feels_like: 24.82,
			pressure: 1009,
			humidity: 93,
			dew_point: 20.41,
			clouds: 78,
			visibility: 6093,
			wind_speed: 0.65,
			wind_deg: 187,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			pop: 1,
			rain: {
				"1h": 1.85,
			},
		},
		{
			dt: 1599652800,
			temp: 21.16,
			feels_like: 24.39,
			pressure: 1010,
			humidity: 93,
			dew_point: 20.04,
			clouds: 82,
			visibility: 6439,
			wind_speed: 0.65,
			wind_deg: 177,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10n",
				},
			],
			pop: 1,
			rain: {
				"1h": 1.75,
			},
		},
		{
			dt: 1599656400,
			temp: 20.99,
			feels_like: 24.09,
			pressure: 1010,
			humidity: 93,
			dew_point: 19.89,
			clouds: 100,
			visibility: 6164,
			wind_speed: 0.72,
			wind_deg: 174,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10n",
				},
			],
			pop: 0.94,
			rain: {
				"1h": 1.84,
			},
		},
		{
			dt: 1599660000,
			temp: 20.78,
			feels_like: 23.65,
			pressure: 1011,
			humidity: 92,
			dew_point: 19.6,
			clouds: 100,
			visibility: 10000,
			wind_speed: 0.8,
			wind_deg: 163,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10n",
				},
			],
			pop: 0.94,
			rain: {
				"1h": 1.52,
			},
		},
		{
			dt: 1599663600,
			temp: 20.28,
			feels_like: 23.04,
			pressure: 1011,
			humidity: 93,
			dew_point: 19.2,
			clouds: 100,
			visibility: 10000,
			wind_speed: 0.75,
			wind_deg: 166,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10n",
				},
			],
			pop: 0.94,
			rain: {
				"1h": 0.73,
			},
		},
		{
			dt: 1599667200,
			temp: 19.87,
			feels_like: 22.58,
			pressure: 1011,
			humidity: 94,
			dew_point: 19.01,
			clouds: 100,
			visibility: 10000,
			wind_speed: 0.67,
			wind_deg: 175,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10n",
				},
			],
			pop: 0.95,
			rain: {
				"1h": 0.18,
			},
		},
		{
			dt: 1599670800,
			temp: 19.59,
			feels_like: 22.17,
			pressure: 1010,
			humidity: 95,
			dew_point: 18.93,
			clouds: 99,
			visibility: 9005,
			wind_speed: 0.78,
			wind_deg: 173,
			weather: [
				{
					id: 804,
					main: "Clouds",
					description: "overcast clouds",
					icon: "04n",
				},
			],
			pop: 0.75,
		},
	],
	daily: [
		{
			dt: 1599541200,
			sunrise: 1599519589,
			sunset: 1599562952,
			temp: {
				day: 29.12,
				min: 18.38,
				max: 29.12,
				night: 19.98,
				eve: 20.63,
				morn: 18.38,
			},
			feels_like: {
				day: 30.04,
				night: 22.37,
				eve: 23.28,
				morn: 18.67,
			},
			pressure: 1010,
			humidity: 45,
			dew_point: 15.98,
			wind_speed: 1.5,
			wind_deg: 65,
			weather: [
				{
					id: 500,
					main: "Rain",
					description: "light rain",
					icon: "10d",
				},
			],
			clouds: 5,
			pop: 0.83,
			rain: 2.68,
			uvi: 14.01,
		},
		{
			dt: 1599627600,
			sunrise: 1599605959,
			sunset: 1599649339,
			temp: {
				day: 28.78,
				min: 19.54,
				max: 28.78,
				night: 19.54,
				eve: 21.16,
				morn: 19.97,
			},
			feels_like: {
				day: 30.73,
				night: 22.15,
				eve: 24.39,
				morn: 21.47,
			},
			pressure: 1009,
			humidity: 50,
			dew_point: 17.36,
			wind_speed: 0.79,
			wind_deg: 93,
			weather: [
				{
					id: 502,
					main: "Rain",
					description: "heavy intensity rain",
					icon: "10d",
				},
			],
			clouds: 49,
			pop: 1,
			rain: 12.89,
			uvi: 13.42,
		},
		{
			dt: 1599714000,
			sunrise: 1599692330,
			sunset: 1599735726,
			temp: {
				day: 23.38,
				min: 19.2,
				max: 24.31,
				night: 19.2,
				eve: 20.04,
				morn: 19.98,
			},
			feels_like: {
				day: 26.32,
				night: 21.6,
				eve: 22.78,
				morn: 22.37,
			},
			pressure: 1008,
			humidity: 86,
			dew_point: 21.06,
			wind_speed: 1.7,
			wind_deg: 207,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			clouds: 93,
			pop: 1,
			rain: 11.59,
			uvi: 14.09,
		},
		{
			dt: 1599800400,
			sunrise: 1599778701,
			sunset: 1599822112,
			temp: {
				day: 25.42,
				min: 19.08,
				max: 27.19,
				night: 19.08,
				eve: 20.13,
				morn: 19.82,
			},
			feels_like: {
				day: 28.11,
				night: 21.6,
				eve: 22.93,
				morn: 22.22,
			},
			pressure: 1009,
			humidity: 72,
			dew_point: 20.16,
			wind_speed: 1.44,
			wind_deg: 194,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			clouds: 67,
			pop: 1,
			rain: 9.15,
			uvi: 14.31,
		},
		{
			dt: 1599883200,
			sunrise: 1599865071,
			sunset: 1599908498,
			temp: {
				day: 23.25,
				min: 18.17,
				max: 23.25,
				night: 19.28,
				eve: 21.86,
				morn: 18.17,
			},
			feels_like: {
				day: 25.96,
				night: 21.58,
				eve: 24.36,
				morn: 20.36,
			},
			pressure: 1012,
			humidity: 84,
			dew_point: 20.43,
			wind_speed: 1.67,
			wind_deg: 191,
			weather: [
				{
					id: 502,
					main: "Rain",
					description: "heavy intensity rain",
					icon: "10d",
				},
			],
			clouds: 64,
			pop: 1,
			rain: 12.04,
			uvi: 13.59,
		},
		{
			dt: 1599969600,
			sunrise: 1599951441,
			sunset: 1599994884,
			temp: {
				day: 24.81,
				min: 18.91,
				max: 26.65,
				night: 20.28,
				eve: 22.98,
				morn: 18.91,
			},
			feels_like: {
				day: 26.81,
				night: 23.16,
				eve: 26.24,
				morn: 20.98,
			},
			pressure: 1013,
			humidity: 69,
			dew_point: 18.88,
			wind_speed: 1.58,
			wind_deg: 175,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			clouds: 96,
			pop: 0.7,
			rain: 4.58,
			uvi: 13.6,
		},
		{
			dt: 1600056000,
			sunrise: 1600037811,
			sunset: 1600081270,
			temp: {
				day: 26.4,
				min: 18.96,
				max: 26.4,
				night: 20.21,
				eve: 23.38,
				morn: 18.96,
			},
			feels_like: {
				day: 28.62,
				night: 23.3,
				eve: 26.74,
				morn: 21.14,
			},
			pressure: 1012,
			humidity: 63,
			dew_point: 18.82,
			wind_speed: 1.3,
			wind_deg: 186,
			weather: [
				{
					id: 502,
					main: "Rain",
					description: "heavy intensity rain",
					icon: "10d",
				},
			],
			clouds: 48,
			pop: 0.83,
			rain: 14.29,
			uvi: 13.33,
		},
		{
			dt: 1600142400,
			sunrise: 1600124181,
			sunset: 1600167656,
			temp: {
				day: 26.95,
				min: 19.44,
				max: 26.95,
				night: 26.01,
				eve: 26.01,
				morn: 19.44,
			},
			feels_like: {
				day: 30.32,
				night: 30.34,
				eve: 30.34,
				morn: 22.11,
			},
			pressure: 1011,
			humidity: 67,
			dew_point: 20.43,
			wind_speed: 0.67,
			wind_deg: 119,
			weather: [
				{
					id: 501,
					main: "Rain",
					description: "moderate rain",
					icon: "10d",
				},
			],
			clouds: 61,
			pop: 0.85,
			rain: 5.86,
			uvi: 13.65,
		},
	],
};
