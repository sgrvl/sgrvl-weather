import React from "react";
import styled from "styled-components";

const Bar = styled.div`
	width: 35px;
	height: 5px;
	background-color: black;
	margin: 6px 0;
`;

const Menu = ({ isSearch, setIsSearch }) => {
	return (
		<div onClick={() => setIsSearch(!isSearch)}>
			<Bar />
			<Bar />
			<Bar />
		</div>
	);
};

export default Menu;
