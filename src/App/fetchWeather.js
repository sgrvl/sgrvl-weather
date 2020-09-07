import { useEffect } from "react";

export const useFetchWeather = (city, setWeatherData, setCity) => {
	useEffect(() => {
		const api = {
			key: "d892855dd51283817b1d30b7e3496f98",
			base: "https://api.openweathermap.org/data/2.5/weather",
			units: "metric",
			cityName: city,
		};
		setWeatherData({ loading: true });
		fetch(`${api.base}?q=${api.cityName}&appid=${api.key}&units=${api.units}`)
			.then((res) => (res.ok ? res.json() : setCity("Québec")))
			.then((data) => setWeatherData({ loading: false, data: data }))
			.catch((err) => console.log(err));
	}, [city, setWeatherData, setCity]);
};

/* copy of result of fetch so I don't use up all my requests */
export const placeholder = {
	coord: {
		lon: 104.17,
		lat: -5.02,
	},
	weather: [
		{
			id: 800,
			main: "Clear",
			description: "clear sky",
			icon: "01n",
		},
	],
	base: "stations",
	main: {
		temp: 18.25,
		feels_like: 19.79,
		temp_min: 18.25,
		temp_max: 18.25,
		pressure: 1012,
		humidity: 92,
		sea_level: 1012,
		grnd_level: 921,
	},
	visibility: 10000,
	wind: {
		speed: 1.16,
		deg: 48,
	},
	clouds: {
		all: 5,
	},
	dt: 1599501695,
	sys: {
		country: "ID",
		sunrise: 1599519589,
		sunset: 1599562952,
	},
	timezone: 25200,
	id: 1637532,
	name: "Canggu",
	cod: 200,
};
