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
			id: 803,
			main: "Clouds",
			description: "broken clouds",
			icon: "04d",
		},
	],
	base: "stations",
	main: {
		temp: 24.81,
		feels_like: 26.4,
		temp_min: 24.81,
		temp_max: 24.81,
		pressure: 1011,
		humidity: 65,
		sea_level: 1011,
		grnd_level: 922,
	},
	visibility: 10000,
	wind: {
		speed: 1.59,
		deg: 54,
	},
	clouds: {
		all: 61,
	},
	dt: 1599617980,
	sys: {
		country: "ID",
		sunrise: 1599605959,
		sunset: 1599649339,
	},
	timezone: 25200,
	id: 1637532,
	name: "Canggu",
	cod: 200,
};
