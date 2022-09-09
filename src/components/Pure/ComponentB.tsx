import React, { Component } from "react";
import PropType from "prop-types";

import Contacto from '../../modules/Contact.class';

function ComponentB({contacto}:any) {
    
    return (
        <div className="container">
            <label> <strong> Nombre: </strong>{ contacto.nombre }</label>
            <label> <strong> Apellido: </strong>  { contacto.apellido } </label>
            <label> <strong> Correo:</strong> { contacto.email }</label>
            <label> <strong> Estado: </strong>  { contacto.conectado? 'Contacto en Linea': 'Contacto no Disponible' } </label>
        </div>
    )
}

ComponentB.prototype = {
    contacto: PropType.instanceOf(Contacto)
}

export default ComponentB;