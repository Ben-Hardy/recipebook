import { Link } from "react-router-dom"
import Footer from "../components/Footer";


export default function Portfolio() {
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
				<h1 className={"text-2xl py-4 font-medium xl:text-4xl"}>Portfolio</h1>
				<div>

				</div>
				<h1 className={"text-xl py-4 font-medium lg:text-2xl"}>Bendle</h1>
				<div className="lg:columns-2 py-8">
					<div>
						<img src={"../img/bendle.jpeg"} className="w-full px-16" alt={"Picture of bendle running"}/>
					</div>
					<div className="px-16 py-8 lg:py-0">
						<p>Having seen a bunch of other people make clones of Wordle, I decided to try making one myself. The result of this is Bendle, which is available to be played at <a className={links} href="https://bendle.xyz">bendle.xyz</a>. After making the basic game work I decided I wanted to come up with my own twist on it. Rather than focusing on emphasizing guessing as few times as possible like most Wordle clones, I decided to instead focus on encouraging the player to solve the puzzle as quickly as possible. In Bendle, the goal is to solve the puzzle in under 60 seconds and then keep a streak of correct solutions going until the player fails a puzzle. Wasting guesses is no longer a concern so long as the puzzle gets solved. The player can use either the buttons on screen or a keyboard to input their guesses. </p>
						<br/>
						<p>Bendle was created using a series of newer web technologies. The overall implementation was done in React. The layout and styling was all completed using TailwindCSS, which sped things up a great deal. The overall application was built using ViteJS, a relatively new development and build server designed to be both much lighter weight than typical NPM servers and much faster. ViteJS allowed for a lightweight static website for the game to be generated trivially.</p>
						<br/>
						<p>The code for Bendle can be found at <a className={links} href="https://github.com/Ben-Hardy/bendle">github.com/Ben-Hardy/bendle</a></p>
						
					</div>
				</div>
				<h1 className={"text-xl py-4 font-medium xl:text-2xl"}>RecipeBook</h1>
				<div className="lg:columns-2 py-8">
					<div>
						<img src={"../img/recipebook.jpeg"} className="w-full px-16" alt={"Picture of RecipeBook"}/>
					</div>
					<div className="px-16 py-8 lg:py-0">
					<p>RecipeBook is as the name says, a book of recipes. It can be viewed at <a className = {links} href="https://benjamin.zone/#/recipebook">benjamin.zone/#/recipebook</a>. It's a single page application made when I was first learning React. It utilizes react-router's hash routing feature for page navigation and direct page linking capabilities. The site was styles using TailwindCSS and was built using ViteJS, much like Bendle. I tried going for a weird 3D depth theme while making each recipe's entry look like a Polaroid picture. The site also responsively adjusts to fit the display size. The backend of the website is arranged such that it would be easy to drop in any type of datastore for recipes so long as they follow the design of the recipe object used as the basis for the whole site.</p>
					<br/>
					<p>The code for Bendle can be found at <a className={links} href="https://github.com/Ben-Hardy/recipebook">github.com/Ben-Hardy/recipebook</a></p>
					</div>
				</div>
				<h1 className={"text-xl py-4 font-medium xl:text-2xl"}>MedTracker</h1>
				<div className="lg:columns-2 py-8">
					<div>
						<img src={"../img/medtracker.jpeg"} className="w-full px-16" alt={"Picture of MedTracker"}/>
					</div>
					<div className="px-16 py-8 lg:py-0">
						<p>MedTracker is a basic Android application used to maintain a diary of medications taken. The user adds their medications to the app and then is able to add entries each time they take a given medicine. Users are also able to add in a schedule for when they need to take their medications. A summary screen provides a list of medications needed to be taken along with all medications already taken for a given day. I mostly created this app because I wanted to learn how the backend of more complex Android applications worked so the UI isn't exactly polished in any way. The app utilizes an SQLite database to store all relevant information added by the user and is updated as the user provides information to the app.</p>
						<br/>
						<p>The code for MedTracker is available at <a className={links} href="https://github.com/Ben-Hardy/medtracker">github.com/Ben-Hardy/medtracker</a> and requires Android Studio in order to be run. There's instructions in the GitHub readme on how to get it up and running.</p>
					</div>
				</div>
				<h1 className={"text-xl py-4 font-medium xl:text-2xl"}>SC2 MMR Data Analysis and Visualization</h1>
				<div className="lg:columns-2 py-8">
					<div>
						<img src={"../img/dataanalysis.jpeg"} className="w-full px-16" alt={"A screenshot of the data analysis notebook"}/>
					</div>
					<div className="px-16 py-8 lg:py-0">
					<p>After seeing someone ask about the number of people who actively played the game StarCraft 2, I found out that there was publicly available data for StarCraft 2's multiplayer ladder so I decided to acquire the data and see what I could find. Rather than applying to use the rather broken Blizzard API to fetch the data, I instead used the python library BeautifulSoup to scrape the data from a website that used the Blizzard API. After acquiring the hundreds of thousands of rows of data, I cleaned the data up using the python data analysis tool Pandas.</p>
					<br/>
					<p>This data analysis can be examined at <a className={links} href="https://github.com/Ben-Hardy/sc2_data_vis">github.com/Ben-Hardy/sc2_data_vis</a>. There's an PDF available on GitHub also. If you have Jupyter Notebook installed you can also open and view the notebook using that. Be warned that the notebook and PDF file are big since they contain a large number of data visualizations, some of them huge. The notebook is the better reading experience.</p>
					</div>
				</div>
				<h1 className={"text-xl py-4 font-medium xl:text-4xl"}>Other Things I've Done</h1>
				<h1 className={"text-xl py-4 font-medium xl:text-2xl"}>I Guess I Should Mention I Have Two Degrees?</h1>
				<div className={"py-4"}>
					<p>Since this is a portfolio, I suppose I should mention my educational background. I have two degrees. The first is a Bachelor of Science in Computer Science. My main areas of focus while studying were algorithms/data structures, UI development, Image Processing and Computer Vision, and Artificial Intelligence. I found that I enjoyed theoretical computer science a great deal and that area ended up being my strength. Having said that, I still did most of the standard CS courses like Web Development, Operating Systems, and others.</p>
					<br/>
					<p>After graduating and taking a break from the academic world due to family events outside of my control, I returned to school to finish off a Bachelor of Science in Mathematics degree that I had partially completed before I switched to Computer Science. Returning to school after a break was weirdly pleasant and I managed to get back up to speed quickly. Jumping back into second and third year math courses after being away for years was tricky at first but I managed. In the end I graduated with a BSc. in Mathematics. My studies focused largely on discrete mathematics and statistics. I'm one of those weird people who enjoys statistics, so I substituted in several statistics classes like Mathematical Statistics and Analysis of Experiments in for elective math classes since it was allowed.</p>
				</div>
				<h1 className={"text-xl py-4 font-medium xl:text-2xl"}>2021 Advent of Code</h1>
				<div className="py-4">
					<p>I participated in the 2021 edition of the <a className={links} href="https://adventofcode.com">Advent of Code</a>, which is a yearly advent calendar of increasingly difficult programming problems. My solutions are available at <a className={links} href="https://github.com/Ben-Hardy/advent_of_code_2021">github.com/Ben-Hardy/advent_of_code_2021</a> and all of them were done in Python. I managed to stick it out until I was in the final 10% of people remaining still solving the increasingly tricky problems when I decided to stop. One of my favourite solutions was for Day 13, which involved being given a bunch of coordinates to mark and a series of folds to complete on an matrix with the result being a message being drawn out within the indices of the matrix. I ended up using NumPY matrices and a pair of double-ended queues to solve the problem. Another highlight was Day 8, which involved creating a program that would logically deduce the solution to the problem on its own from a set of input values that only provide some of the necessary information.</p>
				</div>
				<h1 className={"text-xl py-4 font-medium xl:text-2xl"}>This Website</h1>
				<div className="py-4">
					<p>This website may look relatively simple (this is deliberate. I like minimalist websites), but it's actually built with all of the same technologies as many of my other projects. It's was created with React and react-router and was statically generated using ViteJS. It is responsive in all of the ways one would want it to be and adapts to whether the user has their device set in Dark Mode or not.</p>
				</div>
				<h1 className={"text-xl py-4 font-medium xl:text-2xl"}>...And Much More!</h1>
				<div className="py-4">
					<p>My GitHub page, <a className={links} href="https://github.com/Ben-Hardy">github.com/Ben-Hardy</a>, has many more examples of my work, including a portfolio of school work and many other small projects I've tinkered with over the years. There's an Arduino thermometer setup, a maze solver, a collection of the FizzBuzz problem being solved in over a dozen different programming languages, a Markov Chain Kickstarter pitch generator, a command-line version of a poker game, along with many other things.</p>
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	)
}