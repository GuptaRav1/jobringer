import React from "react";
import { MOBILE_URL } from "../utils/constants";

const OurApp = () => {
	return (
		<div className="flex flex-col-reverse items-center justify-center px-6 py-8 bg-blue-100 mt-14 md:flex-row md:px-36 md:py-14">
			<div className="flex items-center justify-center w-full mb-8 md:w-1/2 md:justify-end md:mb-0">
				<img
					className="max-w-[200px] md:max-w-[300px] h-auto md:mr-16"
					src={MOBILE_URL}
					alt="Mobile App"
				/>
			</div>

			<div className="w-full mb-10 text-center md:w-1/2 md:mb-0 md:text-left">
				<h2 className="text-2xl font-semibold">
					Get Job Updates on the Go
				</h2>
				<p className="my-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a at
					rerum iste ducimus corrupti accusantium minus amet suscipit ab.
					Modi voluptatum excepturi similique praesentium earum dolore
					aliquam quae dolores officiis, doloribus illum tempore officia
					totam cum dicta vel ratione.
				</p>
				<p className="font-semibold">Available at Mobile App</p>
				<div className="flex justify-center gap-2 mt-4 md:justify-start">
					<img
						className="w-[120px] md:w-[140px]"
						src="https://www.jobringer.com/images/anroid.png"
						alt="Android App"
					/>
					<img
						className="w-[120px] md:w-[140px]"
						src="https://www.jobringer.com/images/ios.png"
						alt="iOS App"
					/>
				</div>
			</div>
		</div>
	);
};

export default OurApp;
