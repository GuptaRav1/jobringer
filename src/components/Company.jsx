import React from "react";

const Company = () => {
	return (
		<div className="bg-slate-700 px-6 md:px-20 py-8">
			<h2 className="font-semibold text-xl md:text-2xl mb-6 text-white text-center">
				Our Trusted Recruiters
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-center">
				<img
					className="w-20 md:w-32 opacity-75 mx-auto"
					src="public/company_logos/1.png"
					alt="Company Logo"
				/>
				<img
					className="w-20 md:w-32 opacity-75 mx-auto"
					src="public/company_logos/2.png"
					alt="Company Logo"
				/>
				<img
					className="w-20 md:w-32 opacity-75 mx-auto"
					src="public/company_logos/3.png"
					alt="Company Logo"
				/>
				<img
					className="w-20 md:w-32 opacity-75 mx-auto"
					src="public/company_logos/1.png"
					alt="Company Logo"
				/>
				<img
					className="w-20 md:w-32 opacity-75 mx-auto"
					src="public/company_logos/2.png"
					alt="Company Logo"
				/>
				<img
					className="w-20 md:w-32 opacity-75 mx-auto"
					src="public/company_logos/3.png"
					alt="Company Logo"
				/>
			</div>
		</div>
	);
};

export default Company;
