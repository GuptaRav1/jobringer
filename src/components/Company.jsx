import React from "react";
import {
	COMPANY_LOGO1,
	COMPANY_LOGO2,
	COMPANY_LOGO3,
} from "../utils/constants";

const Company = () => {
	return (
		<div className="px-6 py-8 bg-slate-700 md:px-20">
			<h2 className="mb-6 text-xl font-semibold text-center text-white md:text-2xl">
				Our Trusted Recruiters
			</h2>
			<div className="grid items-center justify-center grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
				<img
					className="w-20 mx-auto opacity-75 md:w-32"
					src={COMPANY_LOGO1}
					alt="Company Logo"
				/>
				<img
					className="w-20 mx-auto opacity-75 md:w-32"
					src={COMPANY_LOGO2}
					alt="Company Logo"
				/>
				<img
					className="w-20 mx-auto opacity-75 md:w-32"
					src={COMPANY_LOGO3}
					alt="Company Logo"
				/>
				<img
					className="w-20 mx-auto opacity-75 md:w-32"
					src={COMPANY_LOGO1}
					alt="Company Logo"
				/>
				<img
					className="w-20 mx-auto opacity-75 md:w-32"
					src={COMPANY_LOGO2}
					alt="Company Logo"
				/>
				<img
					className="w-20 mx-auto opacity-75 md:w-32"
					src={COMPANY_LOGO3}
					alt="Company Logo"
				/>
			</div>
		</div>
	);
};

export default Company;
