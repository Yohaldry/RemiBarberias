import React, {Fragment} from 'react'


export const FooterInicio = () => {

    return (
        <Fragment>
        <div id="footerInicio" className="ContainerFooterInicio">
            <div className="logoFooter">
                <img src="https://res.cloudinary.com/dtkirmtfq/image/upload/v1633669900/Remi/Imagen3_gqex9c.png" alt="" />
                <p>La mayor red de profesionales de belleza <br />
                     con presencia en Bogota</p>
            </div> 
            <div className="infoFooterInicio">
                <h2>¿Quienes Somos?</h2>
                <hr /><br/>
                <p>Somos una Plataforma Digital de servicios de Barbería<br/> 
                    a DOMICILIO o agendamiento de citas en barberias aliadas,<br/>
                     con la finalidad de cubrir la necesidad<br/>
                     de Conectar un cliente con un Barbero  Independiente <br/>
                     o Barbería</p>
            </div>
 
            <div className="infoFooterInicio">
                <h2>Siguenos en nuestras redes Sociales</h2>
                <hr /><br/>
                <div className="redes">
                <p>
                   <i  class="fab fa-facebook-f"></i>
                </p>
                <p>
                    <i class="fab fa-instagram"></i>
                </p>
                <p>
                <i class="fab fa-tiktok"></i>
                </p>
                <p>
                <i class="fab fa-twitter"></i>
                </p>
                <p>
                <i class="fab fa-telegram-plane"></i>
                </p>
                <p>
                <i class="fas fa-envelope-open-text"></i>
                </p>
                </div>
                
            </div>
            
        </div>
        <p className="Creditos">©2021 REMI Servicios de Belleza S.L. - B81234567 Devolpers | Yohaldry Quintero | David Cardona | Erick Hernandez</p>
        </Fragment>
    )
}
