import React from "react";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaLinkedinIn,
	FaYoutube,
	FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-gray-400 py-8">
			{/* Disclaimer Section */}
			<div className="container mx-auto px-6 mb-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Disclaimer Text */}
					<div className="md:col-span-2">
						<p className="text-sm leading-relaxed">
							<strong className="text-gray-100">Disclaimer:</strong> All
							Trademarks and Logos are the property of their respective
							owners, depicted here purely for representation purposes.
							Job applicants are advised to evaluate independently. We do
							not guarantee any job to any jobseeker. All services are
							strictly designed for job search assistance.
						</p>
					</div>

					{/* Recognized By */}
					<div className="flex justify-center md:justify-end items-center">
						<div className="text-center">
							<p className="text-gray-100 font-semibold">
								Recognized By
							</p>
							<p className="text-yellow-400 text-lg font-bold">
								#startupindia
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-gray-700">
				{/* Social Media & Links */}
				<div className="container mx-auto px-6 pt-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						{/* Social Media Links */}
						<div className="flex gap-4 mb-4 md:mb-0">
							<a
								href="#"
								className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
								<FaWhatsapp size={16} />
							</a>
							<a
								href="#"
								className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
								<FaFacebookF size={16} />
							</a>
							<a
								href="#"
								className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
								<FaTwitter size={16} />
							</a>
							<a
								href="#"
								className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
								<FaInstagram size={16} />
							</a>
							<a
								href="#"
								className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
								<FaLinkedinIn size={16} />
							</a>
							<a
								href="#"
								className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
								<FaYoutube size={16} />
							</a>
						</div>

						{/* Footer Links */}
						<div className="text-sm text-center md:text-left">
							<a
								href="#"
								className="text-gray-400 hover:text-gray-200 mx-2">
								Terms and Conditions
							</a>
							|
							<a
								href="#"
								className="text-gray-400 hover:text-gray-200 mx-2">
								Privacy Policy
							</a>
							|
							<a
								href="#"
								className="text-gray-400 hover:text-gray-200 mx-2">
								Refund / Cancellation Policy
							</a>
							|
							<a
								href="#"
								className="text-gray-400 hover:text-gray-200 mx-2">
								About Us
							</a>
							|
							<a
								href="#"
								className="text-gray-400 hover:text-gray-200 mx-2">
								Contact Us
							</a>
							|
							<a
								href="#"
								className="text-gray-400 hover:text-gray-200 mx-2">
								FAQ
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Copyright Section */}
			<div className="mt-6 text-center text-gray-500 text-xs">
				© 2024 All Rights Reserved | Jobtech Ventures Private Limited
			</div>
		</footer>
	);
};

export default Footer;
