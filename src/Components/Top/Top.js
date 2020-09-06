import React from "react";
import styled from "styled-components";
import Icon from "./Icon";
import Temperature from "./Temperature/Temperature";

const StyledTop = styled.div`
	height: 100vh;
	max-height: 100%;
	padding-top: 35px;
	display: grid;
	grid-template-rows: 45% 45% 1fr;
`;

const Top = ({ data }) => {
	return (
		<StyledTop>
			<Icon data={data} />
			<Temperature data={data.main} />
			<button onClick={() => window.scrollBy(0, window.innerHeight)}>
				Bottom
			</button>
		</StyledTop>
	);
};

export default Top;
