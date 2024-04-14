import '../Asset/asset-style.css';
import { AiOutlineArrowDown } from "react-icons/ai";

function Asset() {

  return (
    <>
      <div className="Asset">
        <div className="asset-contain">
          <div className="contain">
            <h2 className='title-asset'>
              JoyGi
              <span className='span-logo'>Games</span>
            </h2>
            <p className='text-asset'>
              ¿Buscas los últimos lanzamientos?
              ¿O te va más los clásicos retro?
              En JoyGiGames, disponemos de una amplia selección de títulos para todos los jugadores.
            </p>
            <a className="link-asset">
              Nuestra coleccion de videojuegos
              <AiOutlineArrowDown className='arrow-asset' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Asset
