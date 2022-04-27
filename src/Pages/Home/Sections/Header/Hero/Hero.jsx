import "./Hero.css";
import slogan from "../../../../../Assets/Header/artboardText.png";
import heroBack from "../../../../../Assets/Header/artboardImg.png";

function Hero() {
	return (
		<div className={"heroImg"}>
			<img
				src={heroBack}
				className={"heroBack"}
				alt={"imagen principal"}
			/>
			<div className={"slogan"}>
				<img
					className={"sloganImage"}
					src={slogan}
					alt={"Comprometidos con el medio ambiente"}
				/>
				<p className={"heroText"}>
					Cuidamos y protegemos nuestros recursos haciendo un óptimo
					re-uso de nuestras materias primas
				</p>
			</div>
		</div>
	);
}

export default Hero;
