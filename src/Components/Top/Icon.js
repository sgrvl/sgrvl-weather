import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: auto 20%;
`;

const Image = styled.img`
	width: 100%;
	margin-bottom: 1em;
`;

const Desc = styled.div``;

const Icon = ({ data }) => {
	return (
		<Wrap>
			<Image
				src={require(`../../Images/${data.weather[0].icon}.svg`)}
				alt={`${data.weather[0].description} icon`}
			/>
			<Desc>{data.weather[0].description}</Desc>
		</Wrap>
	);
};

export default Icon;
