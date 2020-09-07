import React, { useState } from "react";
import styled from "styled-components";
import Menu from "./Menu";
import Title from "./Title";
import Degree from "./Degree";
import Search from "./Search";

const StyledHeader = styled.div`
	position: fixed;
	width: 100vw;
	display: grid;
	grid-template-columns: 1fr 8fr 1fr;
	align-items: center;
	justify-content: center;
`;

const Header = ({ data, setCity }) => {
	const [isSearch, setIsSearch] = useState(false);

	return (
		<StyledHeader>
			<Menu setIsSearch={setIsSearch} isSearch={isSearch} />
			{isSearch && <Search setCity={setCity} />}
			<Title data={data} />
			<Degree data={data} />
		</StyledHeader>
	);
};

export default Header;
