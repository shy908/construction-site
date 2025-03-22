import {
	Call,
	Location,
	LogoFacebook,
	LogoInstagram,
	LogoLinkedin,
	LogoWhatsapp,
	Mail,
} from "react-ionicons";
import logo from "../../assets/logo.svg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full flex flex-col bg-gray-100 text-gray-800">
			{/* Main Footer Section */}
			<div className="w-full px-5 lg:px-12 py-8 flex items-center justify-center">
				<div className="w-full flex lg:flex-row flex-col items-start justify-between gap-8">
					{/* Logo and Description */}
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-3">
							<img
								src={logo}
								alt="Darwandale Constructors Logo"
								className="w-[160px]"
							/>
							<span className="text-xl font-semibold text-primary">
							Darwandale Contractors
							</span>
						</div>
						<p className="text-[16px] text-gray-600 max-w-[300px] leading-relaxed">
							Your trusted partner for construction services.
						</p>
					</div>

					{/* Footer Links */}
					<div className="flex flex-col gap-3">
						<h4 className="text-lg font-bold text-primary">Quick Links</h4>
						{["Home", "Services", "About", "Projects", "Contact"].map((link) => (
							<a
								key={link}
								href={`#${link.toLowerCase()}`}
								className="text-[16px] font-medium text-secondary hover:text-primary transition-colors"
							>
								{link}
							</a>
						))}
					</div>

					{/* Contact Info */}
					<div className="flex flex-col gap-3">
						<h4 className="text-lg font-bold text-primary">Contact Us</h4>
						<div className="flex items-center gap-3">
							<Location cssClasses="!fill-primary !text-primary" />
							<span className="text-[16px] text-gray-600">
								Western Cape, South Africa
							</span>
						</div>
						<div className="flex items-center gap-3">
							<Call cssClasses="!fill-primary !text-primary" />
							<span className="text-[16px] text-gray-600">+27 641 930 218</span>
						</div>
						<div className="flex items-center gap-3">
							<Mail cssClasses="!fill-primary !text-primary" />
							<a
								href="mailto:darwandalecontractors@gmail.com"
								className="text-[16px] text-gray-600 hover:text-primary transition-colors"
							>
								darwandalecontractors@gmail.com
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Footer Bottom Section */}
			<div className="w-full px-5 lg:px-12 py-5 border-t border-gray-300 flex flex-col lg:flex-row items-center justify-between">
				<span className="text-[15px] text-gray-500">
					© {currentYear} Darwandale Contractors| All Rights Reserved
				</span>
				{/* Social Media Icons */}
				<div className="flex items-center gap-6 mt-4 lg:mt-0">
					<a
						href="https://www.facebook.com/profile.php?id=100063693813113"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LogoFacebook cssClasses="!fill-gray-600 hover:!fill-primary cursor-pointer transition-colors duration-200" />
					</a>
					<a
						href="https://wa.me/27642371193"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LogoInstagram cssClasses="!fill-gray-600 hover:!fill-primary cursor-pointer transition-colors duration-200" />
					</a>
					<a
						href="https://www.linkedin.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LogoLinkedin cssClasses="!fill-gray-600 hover:!fill-primary cursor-pointer transition-colors duration-200" />
					</a>
					<a
						href="https://wa.me/27641930218"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LogoWhatsapp cssClasses="!fill-green-500 hover:!fill-green-600 cursor-pointer transition-colors duration-200" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
