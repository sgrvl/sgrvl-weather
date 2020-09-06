import React from "react";
import styled from "styled-components";

/* &units=metric */
/* &units=imperial */

const StyledDegree = styled.div`
	display: flex;
	font-size: 0.75em;
`;

const Celsius = styled.div``;

const Fahrenheiht = styled.div`
	padding-left: 2px;
	color: #808080;
`;

const Degree = ({ data }) => {
	return (
		<StyledDegree>
			<Celsius>C&deg;</Celsius>/<Fahrenheiht>F&deg;</Fahrenheiht>
		</StyledDegree>
	);
};

export default Degree;
