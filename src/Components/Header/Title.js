import React from "react";
import styled from "styled-components";

const StyledTitle = styled.h1`
	text-align: center;
`;

const Title = ({ data }) => {
	return <StyledTitle>{data.name}</StyledTitle>;
};

export default Title;
