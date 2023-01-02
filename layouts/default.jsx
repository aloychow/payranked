
import { useState } from "react";

import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Navigation/Sidebar";
import Footer from "../components/Navigation/Footer";

const DefaultLayout = ({ children }) => {

	const [navLinks] = useState(() => {
		return [
			{
				text: "Companies",
				href: "/companies",
			},
			{
				text: "Jobs",
				href: "/jobs",
			},
			{
				text: "Salaries",
				href: "/salaries",
			},
			{
				text: "Insights",
				href: "/career-insights",
			},
			{
				text: "Blog",
				href: "/blog",
			},
			{
				text: "Contribute",
				href: "/submission",
			},
		];
	});

	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Sidebar isOpen={isOpen} toggle={toggle} navLinks={navLinks} />
			<Navbar toggle={toggle} navLinks={navLinks} />
			{children}
			<Footer />
		</div>
	)
}

export { DefaultLayout }