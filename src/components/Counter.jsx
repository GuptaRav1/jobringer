import React from "react";
import CountUp from "react-countup";

const Counter = () => {
	return (
		<div className="bg-slate-700 flex flex-wrap justify-around md:justify-between items-center px-6 md:px-48 py-8">
			<div className="mb-6 md:mb-0">
				<h1 className="text-center text-white text-3xl font-bold">
					<CountUp end={31} duration={2} />
					k+
				</h1>
				<p className="text-center text-white text-lg">Jobs Posted</p>
			</div>

			<div className="mb-6 md:mb-0">
				<h1 className="text-center text-white text-3xl font-bold">
					<CountUp end={15} duration={2} />
					k+
				</h1>
				<p className="text-center text-white text-lg">Jobs Filled</p>
			</div>

			<div className="mb-6 md:mb-0">
				<h1 className="text-center text-white text-3xl font-bold">
					<CountUp end={19} duration={2} />
					k+
				</h1>
				<p className="text-center text-white text-lg">Employers</p>
			</div>

			<div>
				<h1 className="text-center text-white text-3xl font-bold">
					<CountUp end={12} duration={2} />
					M+
				</h1>
				<p className="text-center text-white text-lg">Active Users</p>
			</div>
		</div>
	);
};

export default Counter;
