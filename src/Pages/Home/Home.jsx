import "./Home.css";

import Blog from "./Sections/Blog/Blog";
import Footer from "./Sections/Footer/Footer";
import Hero from "./Sections/Header/Hero/Hero";
import About from "./Sections/About/About";
import ToTop from "../../Components/ToTop/ToTop";

function Home() {
	return (
		<div className='home' id='home'>
			<Hero />
			<About />
			<Blog />
			<Footer />
			<ToTop />
		</div>
	);
}

export default Home;
