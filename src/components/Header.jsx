import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => setMenuOpen(!menuOpen);

	return (
		<header className="flex items-center justify-between p-4 bg-white shadow-lg">
			{/* Logo */}
			<img className="h-10" src={LOGO_URL} alt="logo" />

			{/* Hamburger Menu Icon (Mobile View) */}
			<div className="md:hidden">
				<button
					onClick={toggleMenu}
					className="text-2xl focus:outline-none">
					{menuOpen ? <FaTimes /> : <FaBars />}
				</button>
			</div>

			{/* Navigation Menu */}
			<nav
				className={`${menuOpen ? "flex text-white" : "hidden"}
                flex-col md:flex-row gap-4 items-center absolute md:static py-4 top-16 left-0 w-full md:w-auto bg-green-600 md:bg-transparent shadow-md md:shadow-none md:flex`}>
				<ul className="flex flex-col w-full gap-4 font-semibold text-center md:flex-row md:w-auto">
					<li className="cursor-pointer hover:text-green-700">Jobs</li>
					<li className="cursor-pointer hover:text-green-700">
						Employers
					</li>
					<li className="cursor-pointer hover:text-green-700">
						Candidates
					</li>
					<li className="cursor-pointer hover:text-green-700">Pricing</li>
				</ul>
			</nav>

			{/* Buttons */}
			<div
				className={`${menuOpen ? "hidden" : "hidden"} 
                flex-col md:flex-row gap-4 justify-center mt-4 md:mt-0 md:flex`}>
				<button className="px-4 py-2 border rounded border-slate-500 hover:text-white hover:bg-green-700">
					Jobseeker
				</button>
				<button className="px-4 py-2 text-white bg-green-600 rounded hover:bg-green-700">
					Employer
				</button>
			</div>
		</header>
	);
};

export default Header;
