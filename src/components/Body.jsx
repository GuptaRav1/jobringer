import Company from "./Company";
import Counter from "./Counter";
import FeaturedJobs from "./FeaturedJobs";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import JobsByLocation from "./JobsByLocation";
import OurApp from "./OurApp";
import RemoteJobs from "./RemoteJobs";

function Body() {
	return (
		<>
			<Header />
			<Hero />
			<Company />
			<FeaturedJobs />
			<RemoteJobs />
			<OurApp />
			<Counter />
			<JobsByLocation />
			<Footer />
		</>
	);
}

export default Body;
