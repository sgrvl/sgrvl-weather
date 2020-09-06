import React from "react";
import styled from "styled-components";

const StyledBot = styled.div`
	height: 100vh;
	max-height: 100%;
	padding-top: 35px;
	display: grid;
	grid-template-rows: 1fr 90%;
`;

const Bottom = () => {
	return (
		<StyledBot>
			<button onClick={() => window.scrollBy(0, -window.innerHeight)}>
				Top!
			</button>
			<h1>Bottom!</h1>
		</StyledBot>
	);
};

export default Bottom;
