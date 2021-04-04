import { useState, useEffect } from 'react'
import {useSelector} from 'react-redux'

import "./cardCerts.css"

export default function CardCerts(props) {
    const certificados = useSelector(state => state.carrossel.dados)
    let [activeImg, setActiveImg] = useState(0)

    const controler = (e) => {
        if(e === "avancar") {
            if(activeImg < certificados.certs.length) {
                setActiveImg(activeImg++)
                console.log(activeImg)
            } else {
                setActiveImg(0)
            }
        }
        else if(e === "voltar") {
            if(activeImg < 0) {
                setActiveImg(certificados.certs.length - 1)
            } else {
                setActiveImg(activeImg--)
            }
        }
    }



    return(
        <>
            <div className="cardCerts">
                    <div className='disclaimer'>
                        Selecione uma referência para ver os certificados*
                    </div>
                    <img src={certificados.certs[activeImg]} placeholder="Certificado" />
                    <div class="container-close">
                        <button onClick={()=> controler('voltar')}></button>
                        <button onClick={()=> controler('avancar')}></button>
                    </div>
            </div>
        </>
    )
}