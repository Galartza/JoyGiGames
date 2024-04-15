import '../Opinions/opinions-style.css';

function Opinions() {

  return (
    <>
      <div className="Opinions">
        <div className="opinions-contain">
          <h2 className='title-opinions'>
            Comentarios de videojuegos
          </h2>
          <div className="contain-opinions">

            <div className="content-opinions">
              <h3 className='title-card-op'>Carreras profesionales</h3>
              <p className='text-card-op'>Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas.
                - Shameeka Taylor
              </p>
            </div>

            <div className="content-opinions">
              <h3 className='title-card-op'>Luna nueva naciente</h3>
              <p className='text-card-op'>Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas.
                - Shameeka Taylor
              </p>
            </div>

            <div className="content-opinions">
              <h3 className='title-card-op'>Maestros del gran pinball</h3>
              <p className='text-card-op'>Las reseñas de otros clientes suponen una forma estupenda de impulsar tus ventas.
                - Shameeka Taylor
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Opinions
