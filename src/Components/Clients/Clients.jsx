import React from 'react'
import VisionUrbana from '../../assets/vsurbana.webp'
import Pastelerialogo from '../../assets/logopasteleria.webp'
import ThesisCenter from '../../assets/thesiscenter.webp'
import Sil from '../../assets/sil.webp'


const Clients = () => {
  return (
    <>
      <div className="bg-hero">
        <h5 className='carrousel-title'><span>Nuestros clientes</span> nos respaldan</h5>
        <div className='carrousel-clients'>
          <div className="h-20 ">
            <img src={VisionUrbana} alt="Visión Urbana" />
          </div>
          <div className="h-32 ">
            <img src={Pastelerialogo} alt="Pastelería Daniela" />
          </div>
          <div className="h-32 ">
            <img src={ThesisCenter} alt="Thesis Center" />
          </div>
          <div className="h-32 ">
            <img src={Sil} alt="San Ignacio de Loyola" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Clients