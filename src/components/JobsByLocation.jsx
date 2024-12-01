import React from "react";

const locations = [
	{
		name: "Canada",
		jobs: 3,
		image: "https://themesflat.co/html/jobtex/images/review/lo4.jpg",
	},
	{
		name: "United States",
		jobs: 3,
		image: "https://themesflat.co/html/jobtex/images/review/lo8.jpg",
	},
	{
		name: "Germany",
		jobs: 3,
		image: "https://themesflat.co/html/jobtex/images/review/lo1.jpg",
	},
	{
		name: "United Kingdom",
		jobs: 3,
		image: "https://themesflat.co/html/jobtex/images/review/lo7.jpg",
	},
	{
		name: "India",
		jobs: 3,
		image: "https://themesflat.co/html/jobtex/images/review/lo3.jpg",
	},
	{
		name: "France",
		jobs: 3,
		image: "https://themesflat.co/html/jobtex/images/review/lo6.jpg",
	},
	{
		name: "Vietnam",
		jobs: 3,
		image: "https://themesflat.co/html/jobtex/images/review/lo5.jpg",
	},
];

const JobsByLocation = () => {
	return (
		<div className="bg-gray-50 py-10">
			<div className="container mx-auto px-6">
				<div className="text-center mb-8">
					<h2 className="text-3xl font-bold mb-2">Jobs by Location</h2>
					<p className="text-gray-600">
						Find your favourite jobs and get the benefits of yourself
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
					{locations.map((location, index) => (
						<div
							key={index}
							className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg">
							<img
								src={location.image}
								alt={location.name}
								className="w-full h-40 object-cover transform transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition duration-300"></div>
							<div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
								<h3 className="font-semibold text-lg">
									{location.name}
								</h3>
								<p className="text-sm">Open Jobs ({location.jobs})</p>
							</div>
						</div>
					))}
				</div>

				<div className="mt-8 text-right">
					<a
						href="#"
						className="text-blue-600 hover:underline font-medium flex items-center justify-end">
						All Locations
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4 ml-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	);
};

export default JobsByLocation;
