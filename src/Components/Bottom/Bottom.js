import React from "react";
import styled from "styled-components";
import Forecast from "./Forecast/Forecast";
import Details from "./Details";

const StyledBot = styled.div`
	height: 100vh;
	max-height: 100%;
	padding-top: 35px;
	display: grid;
	grid-template-rows: 1fr 2fr 75%;
	justify-items: center;
	align-items: center;
`;

const Bottom = ({ data }) => {
	return (
		<StyledBot>
			<button onClick={() => window.scrollBy(0, -window.innerHeight)}>
				Top
			</button>
			<Forecast lat={data.coord.lat} lon={data.coord.lon} />
			<Details data={data} />
		</StyledBot>
	);
};

export default Bottom;
