import React from "react";
import styled from "styled-components";
import { windDirection } from "./utils";

const Detail = styled.div``;

const Details = ({ data }) => {
	return (
		<div>
			<Detail>{windDirection(data.wind.deg)}</Detail>
		</div>
	);
};

export default Details;
