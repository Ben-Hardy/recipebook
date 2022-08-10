import { Link } from "react-router-dom"
import Footer from "../components/Footer";


export default function Homepage() {
	const sectionHeading = "text-xl py-4 font-medium xl:text-2xl";
	const links = "text-gray-500 dark:text-gray-400";

	return (
		<div className="dark:bg-gray-800 dark:text-white h-fit  xl:text-xl min-h-screen">
			<header className="">
				<nav className=" flex flex-wrap items-center py-4 border-b mx-8 md:mx-16">
					<div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
						<Link to="/">
							<h1 className="text-4xl hover:font-medium">Ben Hardy</h1>
						</Link>
						<div className="text-lg ">
						<Link to="/contact" className="px-2 hover:font-semibold">
							Contact
						</Link>
						{"  "}
						<Link to="/recipebook" className="px-2 hover:font-semibold">
							RecipeBook
						</Link>
						{"  "}
						<Link to="/portfolio" className="px-2 hover:font-semibold">
							Portfolio
						</Link>
						</div>
					</div>	
				</nav>	
			</header>
			<main className="py-4 px-8 md:px-24 w-auto">
				<div className="md:flex md:flex-row sm:columns-1">
					<div className=" py-4">
						<p>Hi! I'm Ben! I'm guessing if you're here, you are likely looking to learn a bit about me. Or maybe something else. Who knows. Either way, hello!</p>
						<br/>
						<p>I suppose a simple Cliff's Notes summary of me is that I'm a Canadian that has a penchant for questionable music and a love/hate relationship with technology. I'm also quite fond of dogs. If you're interested in learning more about me, keep reading. If you want to contact me for some reason, there's a handy dandy page linked above where you can contact me.</p>
					</div>
					<img src={"../img/me.jpg"} className="px-16 py-4 object-scale-down md:h-64 sm:h-96" />
				</div>

				<h1 className={sectionHeading}>The Basics</h1>
				

				<p>I suppose to start with, my name is Ben (what a shock!). I'm from Saskatoon, Saskatchewan and have lived here my entire life. I'm not a big city person at all so this type of environment suites me well. I also love going up north to the lake where we have a family cabin. I've gone since I was a child and as such, I'm just as comfortable in the forest chopping wood with an axe or riding a motorbike as I am on a computer.</p>

				<div className="">
					<h2 className={sectionHeading}>Education</h2>
					<p>Having grown up in Saskatoon, I've attended various educational institutions within the city. I graduated with high honours from Centennial Collegiate in 2010 as part of the first full graduating class. I then attended the University of Saskatchewan in fall of that year. Initially I was in business school but found it wasn't for me, so I eventually settled on Computer Science since it suited me well. I graduated with a 4 year BSc. in Computer Science in the spring of 2015. After a brief break from academia and technical stuff, I felt like I wanted to return to university. So I did. I graduated in the summer of 2020 with a second 4 year BSc., this time in Mathematics.</p>
				</div>
			
				<div className="">
					<h2 className={sectionHeading}>Programming</h2>

					<p>Ever since I was a small child, I've loved computers, so it seemed natural that at some point I would get into programming. When I was in my early teens, I started fiddling around with Linux and in doing so got used to how Unix-style command-lines worked. I didn't start programming proper until my third year of university when I switched into Computer Science. Programming immediately clicked with me in a way nothing other than music had and it has been one of my favourite pastimes ever since. </p>
					<br/>
					<p>As far as languages and platforms go, I've done the extreme majority of my programming on Mac and Linux. I've at least had a bit of a go with quite a few languages (check out my stupid <a href="https://github.com/Ben-Hardy/SoManyFizzBuzzes" className={links}>FizzBuzz thing</a> I did on GitHub! I also have a bunch of other stuff on there too), but the one that has clicked the most with me is Python by a mile. I've used the site <a href="https://www.codewars.com/users/Ben-Hardy/"  className={links}>CodeWars</a> to keep my skills sharp for a while now and through it I found the magic of functional programming in Python. In recent years I've been spending quite a bit of time combining my knowledge of Python with my experience with mathematics and statistics to learn data analysis and machine learning.</p>
				</div>

				<div className="">
					<h2 className={sectionHeading}>Music</h2>

					<p>Music has always been a huge part of my life and always will be. I started playing piano in the sixth grade before switching to guitar and bass a couple years later. I also played alto saxophone through all of high school. In recent years I have been getting into learning both songwriting and music production. My hope one day in the future is to be able to be a musician or producer professionally in some capacity.</p>
					<br/>
					<p>Listening to music is just as much of a hobby as playing it is for me. I listen to all types of music from jazz fusion to pop, from classical to the craziest/goofiest brands of metal. I'm the type of person that would rather listen to and think about an album over watching a movie or television show. It's a guarantee that at any point, even if I don't have a way of listening to music, I have a song playing in my head.</p>
				</div>
			
				<div className="">
					<h2 className={sectionHeading}>Running</h2>

					<p>Running is a another activity I love to do. I do it as much for the mental aspect of it as the physical aspect. It's one of those activities where you can focus 100% on it or use it as a way to set aside time to think about other things. I started running in the summer of 2013 on a whim and haven't really stopped since, other than for a couple injuries. When I first started I could barely complete a kilometre without stopping but I could see how to improve and as such I've stuck with it. I've completed two official half marathon events and done plenty more on my own time around the university and my neighbourhood.</p>
				</div>
			</main>
			<footer className="h-full">
				<Footer />
			</footer>
		</div>
	)
}