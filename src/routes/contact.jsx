import { Link } from "react-router-dom"
import Footer from "../components/Footer";


export default function Contact() {
	const sectionHeading = "text-xl py-4 font-medium xl:text-2xl";
	const links = "text-gray-500 dark:text-gray-400";

	return (
		<div className="dark:bg-gray-800 dark:text-white min-h-screen 2xl:text-2xl">
			<header className="">
				<nav className=" flex flex-wrap items-center justify-between py-4 border-b mx-8 md:mx-16">
					<div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
						<Link to="/">
							<h1 className="text-4xl hover:font-medium">Ben Hardy</h1>
						</Link>
						<div className="text-lg ">
							<Link to="/">
								<p className="text-xl hover:font-semibold px-2">Home</p>
							</Link>
						</div>
					</div>	
				</nav>	
			</header>
			<main className="py-4 px-8 md:px-24 w-auto">
				<h1 className={sectionHeading}>Contact</h1>
				<ul className="px-4 md:px-8">
					<li className="py-2">email: ben(at)benjamin(dot)zone</li>
					<li className="py-2">github: <a href="https://github.com/Ben-Hardy" className={links}>https://github.com/Ben-Hardy</a></li>
					<li className="py-2">Discord: Ben_H#9587</li>
				</ul>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}