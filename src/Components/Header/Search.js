import React, { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
	position: absolute;
	left: 35px;
`;

const Search = ({ setCity }) => {
	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		setCity(value);
	};
	return (
		<Box>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={(e) => setValue(e.target.value)} />
				<input type="submit" value="submit" />
			</form>
		</Box>
	);
};

export default Search;
