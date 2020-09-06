import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Title from "./Title";
import Degree from "./Degree";

const StyledHeader = styled.div`
	position: fixed;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr 8fr 1fr;
	align-items: center;
	justify-content: center;
`;

const Header = ({ data }) => {
	return (
		<StyledHeader>
			<Menu />
			<Title data={data} />
			<Degree data={data} />
		</StyledHeader>
	);
};

export default Header;
