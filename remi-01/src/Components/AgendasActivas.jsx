import React, {Fragment} from 'react'


const AgendasActivas = () => {


    return (
    <Fragment>

        
                     
           
                        <div className="About_AgendasActivas">

<table className="table">
 <thead className="linea1">
        <tr>
         <th scope="col">#</th>
         <th scope="col">Nombre</th>
         <th scope="col">Servicio</th>
         <th scope="col">Fecha</th>
         <th scope="col">Hora</th>
         <th scope="col">Barbero</th>
         <th scope="col">Numero</th>
         <th scope="col">Total</th>
         </tr>
         
</thead>

<tbody>

<tr>
         <th scope="row">1</th>
         <td>Juan Perez</td>
         <td>Corte + Barba</td>
         <td>08/10/21</td>
         <td>14:30</td>
         <td>Yohaldry Quintero</td>
         <td>3223908903</td>
         <td>18000</td>
 </tr>
 <tr>
         <th scope="row">2</th>
         <td>David Cardona</td>
         <td>Corte</td>
         <td>08/10/21</td>
         <td>16:00</td> 
         <td>Erick Fernandez</td>
         <td>3222134661</td>
         <td>10000</td>
 </tr>

</tbody>
</table>
</div>


        
</Fragment>
    )
}

export default AgendasActivas
