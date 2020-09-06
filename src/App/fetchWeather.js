import { useEffect } from "react";

export const useFetchWeather = (setWeatherData) => {
	useEffect(() => {
		const api = {
			key: "d892855dd51283817b1d30b7e3496f98",
			base: "https://api.openweathermap.org/data/2.5/weather",
			units: "metric",
			cityName: "Québec",
		};
		setWeatherData({ loading: true });
		fetch(`${api.base}?q=${api.cityName}&appid=${api.key}&units=${api.units}`)
			.then((res) => res.json())
			.then((data) => setWeatherData({ loading: false, data: data }))
			.catch((err) => console.log(err));
	}, [setWeatherData]);
};

/* copy of result of fetch so I don't use up all my requests */
export const placeholder = {
	coord: {
		lon: -71.21,
		lat: 46.81,
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
		temp: 17.22,
		feels_like: 14.98,
		temp_min: 15.56,
		temp_max: 18.89,
		pressure: 1022,
		humidity: 77,
	},
	visibility: 10000,
	wind: {
		speed: 4.6,
		deg: 240,
	},
	clouds: {
		all: 75,
	},
	dt: 1599411759,
	sys: {
		type: 1,
		id: 890,
		country: "CA",
		sunrise: 1599387104,
		sunset: 1599434083,
	},
	timezone: -14400,
	id: 6325494,
	name: "Québec",
	cod: 200,
};
