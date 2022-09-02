"use strict"
import {root} from "../Abstract/variables.js"
class Comentario{

    static id = 0;
    
    constructor(img,content){
        Comentario.id++;
        this.div = document.createElement("div")
        this.div.id = `div-${Comentario.id}`;
        
        this.comentario = document.createElement("p")
        this.comentario.id=`coment-${Comentario.id}`;
        this.comentario.textContent=content;
        this.userIMG = document.createElement("img")
        this.userIMG.src = img
        this.buttonRemove = document.createElement("button")
        this.buttonEdit = document.createElement("button")
        this.div.appendChild(this.comentario)
        root.appendChild(this.div)
       
    }  
    
    

}   

    let user = new Comentario("../../images/avatars/image-juliusomo.png","no antojen");
    