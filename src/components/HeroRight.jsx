import React from "react";
import { IMG_URL } from "../utils/constants";

const HeroRight = () => {
	return (
		<div className="flex justify-center w-full md:w-1/3">
			<img className="h-auto max-w-full" src={IMG_URL} alt="girl" />
		</div>
	);
};

export default HeroRight;
