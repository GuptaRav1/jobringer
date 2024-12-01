import React from "react";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
	return (
		<div className="">
			<h2 className="m-10 text-2xl font-bold text-center text-gray-700">
				Featured Jobs
			</h2>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-20">
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
				<JobCard />
			</div>
		</div>
	);
};

export default FeaturedJobs;
