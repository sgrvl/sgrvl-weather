import React from "react";
import styled from "styled-components";
import { windDirection } from "./utils";

const Grid = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const Detail = styled.div``;

const Name = styled.div``;

const Value = styled.div``;

const Details = ({ data }) => {
	console.log(data);
	return (
		<Grid>
			<Detail>
				<Name>Dew Point</Name>
				<Value>{Math.round(data.dew_point)}&deg;</Value>
			</Detail>
			<Detail>
				{/* metric */}
				<Name>Wind</Name>
				<Value>{`${Math.round(data.wind_speed * 3.6)}km/h ${windDirection(
					data.wind_deg
				)}`}</Value>
			</Detail>
			<Detail>
				<Name>Humidity</Name>
				<Value>{data.humidity}%</Value>
			</Detail>
			<Detail>
				<Name>Pressure</Name>
				<Value>{data.pressure}hPa</Value>
			</Detail>
			<Detail>
				<Name>Visibility</Name>
				<Value>{data.visibility / 1000}km</Value>
			</Detail>
			<Detail>
				<Name>Clouds</Name>
				<Value>{data.clouds}%</Value>
			</Detail>
		</Grid>
	);
};

export default Details;
