import React from "react";
import styled from "styled-components";

const Block = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: 1fr 0.5fr 1.5fr;
	grid-template-areas:
		". Temp Minmax ."
		". Feels Feels ."
		". . . .";
	justify-items: center;
	align-items: center;
`;

const Temp = styled.div`
	font-size: 5em;
	grid-area: Temp;
`;

const Minmax = styled.div`
	grid-area: Minmax;
`;

const Min = styled.div`
	font-weight: bold;
`;

const Max = styled.div`
	font-weight: bold;
`;

const Feels = styled.div`
	grid-area: Feels;
	align-self: flex-start;
`;

const Temperature = ({ data }) => {
	return (
		<Block>
			<Temp>{Math.round(data.temp)}&deg;</Temp>
			<Minmax>
				<Max>&#9650;{Math.round(data.temp_max)}&deg;</Max>
				<Min>&#9660;{Math.round(data.temp_min)}&deg;</Min>
			</Minmax>
			<Feels>Feels like {Math.round(data.feels_like)}&deg;</Feels>
		</Block>
	);
};

export default Temperature;
