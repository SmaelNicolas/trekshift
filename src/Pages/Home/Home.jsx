import "./Home.css";

import Blog from "./Sections/Blog/Blog";
import Footer from "./Sections/Footer/Footer";

function Home() {
	return (
		<div className='home' id='home'>
			<Blog />
			<Footer />
		</div>
	);
}

export default Home;
