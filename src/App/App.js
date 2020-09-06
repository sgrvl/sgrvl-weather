import React, { useState } from "react";
import { /* useFetchWeather, */ placeholder } from "./fetchWeather";
import { createGlobalStyle } from "styled-components";
import Header from "../Components/Header/Header";
import Top from "../Components/Top/Top";
import Bottom from "../Components/Bottom/Bottom";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
		scroll-behavior: smooth;
		overflow: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

	body {
		width: 100%;
		max-width: 100vw;
		margin: 0;
		padding: 0;
	}

  h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;			
  }

  ol, ul {
    list-style: none;
  }
`;

const App = () => {
	const [weatherData, setWeatherData] = useState({
		loading: false,
		data: placeholder,
	});

	//useFetchWeather(setWeatherData);
	console.log(weatherData.data);

	return (
		<>
			{weatherData.data && !weatherData.loading && (
				<div className="App">
					<Header data={weatherData.data} />
					<Top data={weatherData.data} />
					<Bottom />
				</div>
			)}
			<GlobalStyle />
		</>
	);
};

export default App;
