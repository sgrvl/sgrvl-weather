import React from "react";
import styled from "styled-components";

const StyledDaily = styled.div`
	display: flex;
	height: min-content;
	justify-content: space-between;
`;

const DayWrap = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-areas:
		"Day Day"
		"Icon Icon"
		"Min Max";
	justify-items: center;
	align-items: center;
`;

const Day = styled.div`
	grid-area: Day;
`;

const Icon = styled.img`
	width: 25px; /* temporary */
	height: auto;
	grid-area: Icon;
`;

const Min = styled.div`
	grid-area: Min;
	font-size: 0.75em;
	color: white;
`;

const Max = styled.div`
	grid-area: Max;
	font-size: 0.75em;
`;

const Daily = ({ data }) => {
	//console.log(new Date(day.dt * 1000).getDate())
	/* data.daily
		.slice(1)
		.map((day) => console.log(new Date(day.dt * 1000).getDate())); */

	return (
		<StyledDaily>
			{data.daily.slice(1).map((day) => {
				const date = new Date(day.dt * 1000);
				const dayDate = date.getDate();
				const month = date.getMonth();
				const dayNum = date.getDay();
				const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
				const minTemp = Math.round(day.temp.min);
				const maxTemp = Math.round(day.temp.max);

				return (
					<DayWrap key={`${dayDate}/${month}`}>
						<Day>{days[dayNum]}</Day>
						<Icon
							src={require(`../../../Images/${day.weather[0].icon}.svg`)}
							alt={`${day.weather[0].description} icon`}
						/>
						<Min>{minTemp}&deg;</Min>
						<Max>{maxTemp}&deg;</Max>
					</DayWrap>
				);
			})}
		</StyledDaily>
	);
};

export default Daily;
