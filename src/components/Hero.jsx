import React from "react";
import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";

const Hero = () => {
	return (
		<div className="flex flex-col items-center p-6 pb-0 bg-blue-100 md:px-20 md:py-0 md:flex-row md:justify-center md:items-center">
			<HeroLeft />
			<HeroRight />
		</div>
	);
};

export default Hero;
