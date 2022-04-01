import './About.css'
import remera from '../../../../Assets/About/anna-sullivan-pFhkBHJCuIw-unsplash.png'
import tela from '../../../../Assets/About/ethan-bodnar-kgC99X3WH1w-unsplash.png'
import botas from '../../../../Assets/About/ravin-rau-eNOlrYUx5ZQ-unsplash.png'

function About(){
    return(
        <section id={'about'}>

            <div className={'aboutCards'}>
                <div className={'imgContainer'}>
                    <img src={botas} alt={'botas'} className={'aboutImg'}/>
                </div>
                <div className={'aboutText'}>
                    <p className={'cardTitle'}>¿Quiénes somos?</p>
                    <br/>
                    <p>
                        Somos una comunidad comprometida con el medio ambiente, interesados en combatir la contaminación
                        provocada por la moda rápida. Nuestro objetivo es concienciar a nuestro publico y proveer una
                        plataforma única para el reciclaje de esa materia prima, asi mejorando el ciclo de utilidad de las
                        prendas para un uso optimo de los tejidos.
                    </p>
                </div>
            </div>

            <div className={'aboutCards'}>
                <div className={'aboutText'}>
                    <p className={'cardTitle'}>Nuestra Misión</p>
                    <br/>
                    <p>
                        Educar a los consumidores sobre los impactos ambientales y sociales de la industria de moda
                        creando un futuro sostenible para las personas y el planeta. Estamos innovando con un programa
                        de reciclaje de moda, el primero de su tipo, para proporcionar ropa sostenible a quienes la
                        necesitan, al mismo tiempo que convertimos la ropa en materia prima para nuevos textiles.
                    </p>
                </div>
                <div className={'imgContainer'}>
                    <img src={tela} alt={'telas'} className={'aboutImg'}/>
                </div>
            </div>

            <div className={'aboutCards'}>
                <div className={'imgContainer'}>
                    <img src={remera} alt={'remera'} className={'aboutImg'}/>
                </div>
                <div className={'aboutText'}>
                    <p className={'cardTitle'}>Visión</p>
                    <br/>
                    <p>
                        Hacer que el cambio suceda, disminuyendo notoriamente la contaminación causada por la industria
                        de la moda. Educar y concienciar la comunidad y Llegar a ser uno de los principales pilares del
                        sector que promuevan la longevidad de la materia prima. Por un planeta sostenible y una vida
                        “ética”.
                    </p>
                </div>
            </div>

            <hr/>

        </section>
    )
}

export default About;