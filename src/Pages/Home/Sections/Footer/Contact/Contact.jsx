import "./Contact.css";

import Logo from "../../../../../Assets/Logo.svg";
import imgIg from "../../../../../Assets/Footer/Instagram.svg";
import imgFb from "../../../../../Assets/Footer/Facebook.svg";
import imgTw from "../../../../../Assets/Footer/Twitter.svg";
import imgLnk from "../../../../../Assets/Footer/Linkedin.svg";
import imgWtsp from "../../../../../Assets/Footer/Whatsapp.svg";

import { openInNewTab } from "../../../../../Helpers/openNewTab";

function Contact() {
	return (
		<div className='contact' id='contact'>
			<div className='contact--content'>
				<div className='contact--content--left ai-center'>
					<div className='contact--top--about--img'>
						<img src={Logo} alt='logo' />
					</div>
					<div className='contact--top--about--text'>
						Comunidad comprometida con el Medio Ambiente. Creando
						soluciones para combatir la Contaminación Cuidando
						Nuestro Planeta
					</div>
				</div>
				<div className='contact--content--right fd-column jc-start ai-center'>
					<div className='contact--content--title ta-center'>
						Siguenos en
					</div>
					<div className='contact--top--socials--icons'>
						<img
							src={imgIg}
							alt='logo ig'
							className='contact--top--socials--icons--link'
							onClick={() =>
								openInNewTab(
									"https://www.instagram.com/trekshift/"
								)
							}
						/>
						<img
							src={imgFb}
							alt=' logo fb'
							className='contact--top--socials--icons--link'
							onClick={() =>
								openInNewTab(
									"https://www.facebook.com/trekshiftspain/"
								)
							}
						/>
						<img
							src={imgTw}
							alt=''
							className='contact--top--socials--icons--link'
							onClick={() =>
								openInNewTab("https://twitter.com/TrekShifT/")
							}
						/>
						<img
							src={imgLnk}
							alt=''
							className='contact--top--socials--icons--link'
							onClick={() =>
								openInNewTab(
									"https://linkedin.com/company/trekshift/"
								)
							}
						/>
					</div>
				</div>
			</div>
			<div className='contact--content'>
				{/* COMENTAR PARA AGREGAR WHATSAPP */}
				<div className='contact--bottom--direct--email'>
					<div className='contact--content--title'>Email</div>
					<div className='contact--bottom--direct--email-direction'>
						shifttrek@gmail.com
					</div>
				</div>

				{/* DESCOMENTAR PARA AGREAR WHATSAPP */}
				{/* <div className='contact--content--left fd-column jc-end '>
					<div className='contact--bottom--direct--phone'>
						<div className='contact--content--title'>Contacto</div>
						<div className='contact--bottom--direct--phone--number'>
							+123 456 789 0
						</div>
					</div>
					<div className='contact--bottom--direct--email'>
						<div className='contact--content--title'>Email</div>
						<div className='contact--bottom--direct--email-direction'>
							shifttrek@gmail.com
						</div>
					</div>
				</div>
				<div className='contact--content--right fd-row jc-center ai-end whatsappContainer'>
					<div className='contact--bottom--wtsp--content'>
						<div className='contact--content--title ta-end'>
							¿Deseas comunicarte con nosotros?
						</div>
						<div className='contact--bottom--wtsp--content--text'>
							Puedes enviarnos un whatsapp aqui
						</div>
					</div>
					<img
						src={imgWtsp}
						alt=''
						className='contact--top--socials--icons--link'
						onClick={() =>
							openInNewTab(
								"https://linkedin.com/company/trekshift/"
							)
						}
					/>
				</div> */}
			</div>
		</div>
	);
}

export default Contact;
