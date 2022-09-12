"use strict"

import {Comentario , interfaz } from "../Abstract/variables.js"

const interfazUser = new interfaz()
  
const users = async ()=>
{
    await fetch("../../data.json").then(res=>console.log(res)).then(Data=>console.log(Data))
}
    
users()