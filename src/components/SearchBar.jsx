import React from "react";

const SearchBar = () => {
	return (
		<div className="flex items-center rounded-lg overflow-hidden bg-white p-2">
			<div className="flex-1 px-4 py-2">
				<input
					type="text"
					placeholder="Job title, key words or company"
					className="w-full border-none outline-none text-gray-700"
				/>
			</div>

			<button className="bg-green-600 flex items-center font-semibold rounded text-white px-4 py-2 hover:bg-green-700">
				Find Jobs
			</button>
		</div>
	);
};

export default SearchBar;
