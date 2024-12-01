import React from "react";
import SearchBar from "./SearchBar";

const HeroLeft = () => {
	const hashtagArray = [
		"Fresher",
		"WFH",
		"IT",
		"HR",
		"BPO Jobs",
		"ITES",
		"Finance",
		"Accounts",
		"Medical",
		"Pharma",
		"Manager",
		"Developer",
		"Marketing",
		"Engineering",
		"Non Government Jobs",
	];

	return (
		<div className="w-full md:w-2/3">
			<h1 className="text-2xl font-bold text-gray-700 md:text-4xl">
				Bringing you, THE PERFECT JOB
			</h1>
			<p className="my-4 text-sm md:my-6 md:text-base">
				Resume-Library is a true performance-based job board. Enjoy custom
				hiring products and access to up to 10,000 new resume registrations
				daily, with no subscriptions or user licenses.
			</p>
			<SearchBar />
			<ul className="flex flex-wrap gap-2 my-4 md:my-6">
				{hashtagArray.map((hashtag) => (
					<li
						key={hashtag}
						className="px-2 py-1 text-xs text-white bg-green-700 rounded-lg cursor-pointer md:text-sm">
						#{hashtag}
					</li>
				))}
			</ul>
		</div>
	);
};

export default HeroLeft;
