import "./Home.css";

import Blog from "./Sections/Blog/Blog";
import Footer from "./Sections/Footer/Footer";
import Hero from "./Sections/Header/Hero/Hero";
import About from "./Sections/About/About"

function Home() {
	return (
		<div className='home' id='home'>
			<Hero />
			<About />
		</div>
	);
}

export default Home;
