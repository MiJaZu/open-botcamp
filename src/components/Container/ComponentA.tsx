import React, { Component } from "react";
import PropType from "prop-types";

import Contacto from '../../modules/Contact.class';

import ComponentB from "../Pure/ComponentB";

function ComponentA(props:any) {

    const contacto1:Contacto = new Contacto('Pedro', 'Perez', 'pedro.perez@mail.com', true);
    const contacto2:Contacto = new Contacto('Maria', 'Lopez', 'maria.lopez@mail.com', false);
    const contacto3:Contacto = new Contacto('Rosario', 'Navia', 'rosario.navia@mail.com', false);

    return (
        <div>
           <h1>Contactos: </h1>
           <ComponentB contacto={contacto1} />
           <ComponentB contacto={contacto2} />
           <ComponentB contacto={contacto3} />
        </div>
    )
}

export default ComponentA;