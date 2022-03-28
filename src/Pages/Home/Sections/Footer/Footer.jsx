import Contact from "./Contact/Contact";
import "./Footer.css";
import Policies from "./Policies/Policies";

function Footer() {
	return (
		<div className='footer' id='footer'>
			<Contact />
			<Policies />
		</div>
	);
}

export default Footer;
