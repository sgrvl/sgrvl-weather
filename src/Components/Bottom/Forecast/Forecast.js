import React from "react";
import styled from "styled-components";
import Daily from "./Daily";

const StyledForecast = styled.div`
	width: 100%;
`;

const Forecast = ({ data }) => {
	return (
		<StyledForecast>
			<Daily data={data} />
		</StyledForecast>
	);
};

export default Forecast;
