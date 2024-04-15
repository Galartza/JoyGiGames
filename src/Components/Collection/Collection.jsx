import './colection-style.css'

import imgCard1 from '../../assets/Card1.jpg'
import imgCard2 from '../../assets/Card2.jpg'
import imgCard3 from '../../assets/Card3.jpg'

function Collection() {

    return (
        <>
            <div className="Collection">
                <div className="collection-contain">
                    <div className="contain">
                        <div className="Card-contain">
                            <img src={imgCard1} alt="" className="card-img" />
                            <div className="card-content">
                                <h2 className="card-title">
                                Juegos de Estrategia en tiempo real
                                </h2>
                                <p className="card-text">
                                Rétate a ti mismo en una batalla de ingenio y habilidades frente a personajes no jugadores y otros jugadores parecidos.
                                </p>
                                <div className="btn-content">
                                <button className="card-btn">
                                    Ver mas
                                </button>
                                </div>

                            </div>
                        </div>

                        <div className="Card-contain">
                            <img src={imgCard2} alt="" className="card-img" />
                            <div className="card-content">
                                <h2 className="card-title">
                                Juegos de Estrategia en tiempo real
                                </h2>
                                <p className="card-text">
                                Rétate a ti mismo en una batalla de ingenio y habilidades frente a personajes no jugadores y otros jugadores parecidos.
                                </p>
                                <div className="btn-content">
                                <button className="card-btn">
                                    Ver mas
                                </button>
                                </div>

                            </div>
                        </div>

                        <div className="Card-contain">
                            <img src={imgCard3} alt="" className="card-img" />
                            <div className="card-content">
                                <h2 className="card-title">
                                Juegos de Estrategia en tiempo real
                                </h2>
                                <p className="card-text">
                                Rétate a ti mismo en una batalla de ingenio y habilidades frente a personajes no jugadores y otros jugadores parecidos.
                                </p>
                                <div className="btn-content">
                                <button className="card-btn">
                                    Ver mas
                                </button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default Collection