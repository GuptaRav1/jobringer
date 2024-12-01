import React from "react";

const JobCard = () => {
	const tags = ["App", "Figma", "PSD"];
	return (
		<div className="p-6 mx-auto transition-transform duration-300 transform bg-white border border-gray-200 rounded-lg shadow-md max-w-72 hover:-translate-y-2">
			<h2 className="text-lg font-semibold text-gray-800">Figma Designer</h2>

			<div className="flex items-center mt-2 text-sm text-gray-500">
				<span className="flex items-center space-x-1">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-4 h-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M8 16l-4-4m0 0l4-4m-4 4h16"
						/>
					</svg>
					<span>Full Time</span>
				</span>
				<span className="mx-2">·</span>
				<span>Posted 2 years ago</span>
			</div>

			<p className="mt-4 text-sm text-gray-600">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
				architecto eveniet, dolor quo repellendus pariatur.
			</p>

			<div className="flex flex-wrap gap-2 mt-4">
				{tags.map((tag, index) => (
					<span
						key={index}
						className="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full">
						{tag}
					</span>
				))}
			</div>

			<div className="mt-6">
				<button className="px-4 py-2 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700">
					Apply Now
				</button>
			</div>
		</div>
	);
};

export default JobCard;
