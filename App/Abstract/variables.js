export const root = document.getElementById("root");
export const regexp = 
{
    vacio: /[a-zA-Z0-9]/
}  
// export const storage = new window.localStorage;


export class interfaz
{

    constructor(reply="none")
    {
        this.crearVariables()
        this.reply = reply
        this.agregarEstilos()
        this.introducirFragment()
        this.agregarEventListener()
        document.body.appendChild(this.Contenedor)

    }

    crearVariables()
    {
        this.reply;
        this.Contenedor=document.createElement("div");
        this.emisorMensaje=document.createElement("textarea");
        this.userImgSend=document.createElement("img");
        this.sendButton=document.createElement("button");
        
    }        
    agregarEstilos()
    {   
        if(this.reply=="none")
        {
            this.Contenedor.classList.add("interfaz");
            this.emisorMensaje.classList.add("interfaz-input");
            this.emisorMensaje.placeholder = "Add a comment...";
        //Agregar imagen
            this.userImgSend.src="/images/avatars/image-juliusomo.png";
        //Agregar imagen
            this.sendButton.textContent="Send"
            this.userImgSend.classList.add("interfaz-userimg");
            this.sendButton.classList.add("interfaz-send");
        }
        if(this.reply=="reply")
        {
            this.Contenedor.classList.add("interfazReply");
            this.emisorMensaje.classList.add("interfazReply-input");
            this.emisorMensaje.placeholder = "Add a comment...";
        //Agregar imagen
            this.userImgSend.src="/images/avatars/image-juliusomo.png";
        //Agregar imagen
            this.sendButton.textContent="Send"
            this.userImgSend.classList.add("interfazReply-userimg");
            this.sendButton.classList.add("interfazReply-send");
        }


    }

    introducirFragment()
    {
        this.Contenedor.appendChild(this.emisorMensaje)
        this.Contenedor.appendChild(this.userImgSend)
        this.Contenedor.appendChild(this.sendButton)
        if(this.reply == "reply"){
            root.appendChild(this.Contenedor);
        }
    }

    agregarEventListener()
    {
        if(this.reply == "none")
        {
            this.sendButton.addEventListener("click",()=>
            {
                if(this.emisorMensaje.value == "")
                {
                    alert("Write something")
                }
                else
                {
                 new interfaz("reply");
                // new Comentario("julio somo",this.userImgSend.src,this.emisorMensaje.value,"reply")
                this.emisorMensaje.value = ""
                }

            })

            this.emisorMensaje.addEventListener("keypress",(event)=>
            {
            // console.log(event)
                switch(event.key){

                
                    case "Enter" :   
                        if(!regexp.vacio.test(event.target.value))
                        {
                        
                            alert("Write something")
                        }
                        else
                        {
                            new Comentario("julio somo",this.userImgSend.src,this.emisorMensaje.value,"comment")
                        
                            event.target.value = ""
                        }
                        break;
               
                }
           
            })
        }
        else
        {
            this.sendButton.addEventListener("click",(event)=>
            {
                if(this.emisorMensaje.value == "")
                {
                    alert("Write something")
                }
                else
                {
                   
                    new Comentario("julio somo",this.userImgSend.src,this.emisorMensaje.value,"unaffiliated")
                    
                    document.body.removeChild(this.Contenedor);
                }

            }) 
        }
    
    }
    


}

export class Comentario
{

    static id = 0;
    
    constructor(nombre,img,content,type)
    {
        Comentario.id++;
        this.declaracion_de_variables()
        this.addClasses(type)
        this.agregarEventos(type)
        this.setComentario(content);
        this.setID_s();
        this.addValues(nombre,img,content);
        
        root.appendChild(this.documentIncluder(type))
       
    } 
    
        declaracion_de_variables()
        {   
            this.bolson = document.createElement("div");
            this.reply = document.createElement("button");
            this.editSend = document.createElement("button");
            this.reacionesValue = 0
            this.div = document.createElement("div");
            this.comentario = document.createElement("p");
            this.userIMG = document.createElement("img");
            this.buttonRemove = document.createElement("button");
            this.buttonEdit = document.createElement("button");
            this.agregarReaccion = document.createElement("button");
            this.reacciones=document.createElement("span")
            this.reducirReaccion  = document.createElement("button");
            this.divsito =  document.createElement("div");
            this.nombre = document.createElement("span");
            this.hora_de_subida = document.createElement("span");
            this.sender = document.createElement("span");
            //delete
            this.deleteCube = document.createElement("div");
            this.deleteTitule = document.createElement("span");
            this.deleteText = document.createElement("span");
            this.buttonCancel = document.createElement("button");
            this.buttonContinueDelete = document.createElement("button");
        }
        setID_s()
        {  
            this.bolson.id=`bolson-${Comentario.id}`
            this.div.id = `div-${Comentario.id}`;
            this.comentario.id=`coment-${Comentario.id}`;
            this.buttonEdit.id=`edit-${Comentario.id}`;
            this.buttonRemove.id=`remove-${Comentario.id}`;
            this.agregarReaccion.id =`addR-${Comentario.id}`;
            this.reducirReaccion.id =`RedR-${Comentario.id}`;
            this.divsito.id = `aux-${Comentario.id}`;
            this.nombre.id = `user-${Comentario.id}`;
            
        }
        addClasses(type)
        {  
            if(type === "comment" || type === "unaffiliated")
            {
                this.reply
                this.div.classList.add("root-comment_container");
                this.userIMG.classList.add("root-comment_container--img");
                this.comentario.classList.add("root-comment_container--Comment")
                this.nombre.classList.add("root-comment_container--nombre")
                this.sender.classList.add("root-comment_container--sender")
                this.hora_de_subida.classList.add("root-comment_container--timer")
                this.divsito.classList.add("root-comment_container--containterbuttons")
                this.agregarReaccion.classList.add("root-comment_container--containterbuttons---pluslike")
                this.reacciones.classList.add("root-comment_container--containterbuttons---likes")
                this.reducirReaccion.classList.add("root-comment_container--containterbuttons---minuslike")
                this.buttonRemove.classList.add("root-comment_container--containterbuttons---delete")
                this.buttonEdit.classList.add("root-comment_container--containterbuttons---edit")
                this.editSend.classList.add("root-comment_container--containterbuttons---edit")
                this.bolson.classList.add("root-comment_container--containterbuttons---bolson")
            //delete
                this.deleteCube.classList.add("root-question")
                this.deleteTitule.classList.add("root-question--spanlider")
                this.deleteText.classList.add("root-question--span")
                this.buttonCancel.classList.add("root-question--button1")
                this.buttonContinueDelete.classList.add("root-question--button2")
            }
            if(type === "reply" || type === "replyUnaffiliated")
            {
                this.div.classList.add("root-reply_container");
                this.userIMG.classList.add("root-reply_container--img");
                this.comentario.classList.add("root-reply_container--Comment")
                this.nombre.classList.add("root-reply_container--nombre")
                this.sender.classList.add("root-reply_container--sender")
                this.hora_de_subida.classList.add("rootreplyt_container--timer")
                this.divsito.classList.add("root-reply_container--containterbuttons")
                this.agregarReaccion.classList.add("root-reply_container--containterbuttons---pluslike")
                this.reacciones.classList.add("root-reply_container--containterbuttons---likes")
                this.reducirReaccion.classList.add("root-reply_container--containterbuttons---minuslike")
                this.buttonRemove.classList.add("root-reply_container--containterbuttons---delete")
                this.buttonEdit.classList.add("root-reply_container--containterbuttons---edit")
                this.editSend.classList.add("root-reply_container--containterbuttons---edit")
                this.bolson.classList.add("root-comment_container--containterbuttons---bolson")
            //delete
                this.deleteCube.classList.add("root-question")
                this.deleteTitule.classList.add("root-question--spanlider")
                this.deleteText.classList.add("root-question--span")
                this.buttonCancel.classList.add("root-question--button1")
                this.buttonContinueDelete.classList.add("root-question--button2")
            }


        }
        documentIncluder(type)
        { 
            if(type=="comment")
            {
                this.divsito.appendChild(this.agregarReaccion);
                this.divsito.appendChild(this.reacciones);
                this.divsito.appendChild(this.reducirReaccion);
                this.divsito.appendChild(this.buttonRemove);
                this.divsito.appendChild(this.buttonEdit);
                this.divsito.appendChild(this.bolson);
                this.div.appendChild(this.userIMG);
                this.div.appendChild(this.nombre);
                this.div.appendChild(this.sender);
                this.div.appendChild(this.hora_de_subida);
                this.div.appendChild(this.comentario);
                this.div.appendChild(this.divsito);
            

                this.deleteCube.appendChild(this.deleteTitule)
                this.deleteCube.appendChild(this.deleteText)
                this.deleteCube.appendChild(this.buttonCancel)
                this.deleteCube.appendChild(this.buttonContinueDelete)
            }
            if(type=="unaffiliated")
            {
                this.divsito.appendChild(this.agregarReaccion);
                this.divsito.appendChild(this.reacciones);
                this.divsito.appendChild(this.reducirReaccion);
                this.divsito.appendChild(this.reply);
                this.divsito.appendChild(this.bolson);
                this.div.appendChild(this.userIMG);
                this.div.appendChild(this.nombre);
                this.div.appendChild(this.sender);
                this.div.appendChild(this.hora_de_subida);
                this.div.appendChild(this.comentario);
                this.div.appendChild(this.divsito);
            

                
            }
            
            
            


            return this.div;

        }

        addValues(nombre,imgPath ,texto)
        {   
            this.reply.innerHTML = `<svg width="14" height="13" xmlns="http://www.w3.org/2000/svg"><path d="M.227 4.316 5.04.16a.657.657 0 0 1 1.085.497v2.189c4.392.05 7.875.93 7.875 5.093 0 1.68-1.082 3.344-2.279 4.214-.373.272-.905-.07-.767-.51 1.24-3.964-.588-5.017-4.829-5.078v2.404c0 .566-.664.86-1.085.496L.227 5.31a.657.657 0 0 1 0-.993Z" fill="#5357B6"/></svg> Reply`
            this.buttonRemove.innerHTML = `<svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="#ED6368"/></svg> Delete`
            this.buttonEdit.innerHTML = `<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg> Edit`
            this.agregarReaccion.innerHTML = `<svg width="11" height="11" xmlns="http://www.w3.org/2000/svg"><path d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z" fill="#C5C6EF"/></svg>`
            this.reducirReaccion.innerHTML = `<svg width="11" height="3" xmlns="http://www.w3.org/2000/svg"><path d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" fill="#C5C6EF"/></svg>`
            this.reacciones.textContent = this.reacionesValue
            this.nombre.textContent= nombre
            this.sender.textContent= "You"
            this.userIMG.src = imgPath;
            this.comentario.textContent = texto;

        
            // this.hora_de_subida agregar funcion tomadora de hora 

            //delete
            this.deleteTitule.textContent = "Delete Comment"
            this.deleteText.textContent = "Are you sure you want to delate this comment? this will remove the comment and can't be undone."
            this.buttonContinueDelete.textContent = "YES, DELETE"
            this.buttonCancel.textContent = "NO, CANCEL"


            //edit
            this.editSend.innerHTML =  `<svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.371Zm-2.975 2.923L8.159 3.449 9.865 1.7l2.389 2.39-1.75 1.706Z" fill="#5357B6"/></svg> UPDATE`
        }

        setComentario(texto)
        {
            this.comentario.textContent = texto;
        }

        imgUser(imgPath)
        {
            this.userIMG.src = imgPath;
        }
        
        agregarEventos(type)
        {

            if(type=="comment" || type=="reply")
            {
                this.buttonRemove.addEventListener("click",()=>
                {
                    root.classList.add("transparencia")
                    document.body.appendChild(this.deleteCube)

                })
                this.buttonCancel.addEventListener("click",()=>
                {
                document.body.removeChild(this.deleteCube)
                root.classList.remove("transparencia")
                })
                this.buttonContinueDelete.addEventListener("click",()=>
                {   
                root.classList.remove("transparencia")
                root.removeChild(this.div)
                document.body.removeChild(this.deleteCube)
                })
                this.buttonEdit.addEventListener("click",(event)=>
                {
                    this.comentario.contentEditable = true
                    this.divsito.removeChild(event.target)
                    this.divsito.appendChild(this.editSend);
                })
            }


            // this.reply.addEventListener("click",(event)=>
            // {
            //     this.bolson.appendChild(new interfaz("reply"))
                    
            //         document.body.removeChild(this.Contenedor);
            // })
            this.agregarReaccion.addEventListener("click",(event)=>
            {
                this.reacionesValue+=1
                this.reacciones.textContent = this.reacionesValue
                console.log(event)
                if(this.reacionesValue > 0)
                {
                    this.reacciones.classList.remove("negative")
                    this.reacciones.classList.add("positive")
                }
                if(this.reacionesValue == 0)
                {
                    this.reacciones.classList.remove("negative")
                    this.reacciones.classList.remove("positive")
                }
            })
            this.reducirReaccion.addEventListener("click",(event)=>
            {
                event.disabled=true
                this.reacionesValue-=1
                this.reacciones.textContent = this.reacionesValue
                if(this.reacionesValue == 0)
                {
                    this.reacciones.classList.remove("negative")
                    this.reacciones.classList.remove("positive")
                }
                if(this.reacionesValue < 0)
                {
                    this.reacciones.classList.remove("positive")
                    this.reacciones.classList.add("negative")
                }
            })           
           
            this.editSend.addEventListener("click",(event)=>
            {   
                if(!regexp.vacio.test(this.comentario.textContent)){
                        
                    alert("Write something")
                }else{
                this.comentario.contentEditable = false
                this.divsito.removeChild(event.target)
                this.divsito.appendChild(this.buttonEdit);
                }
            })
        }

}   


// TimeStamp modificar


// function updateTimes(){
//     // Seleccionamos elementos con atributo time
//     var times = document.querySelectorAll('[time]');
//     // Calculamos nº de segundos de la fecha actual
//     var now = Math.floor((new Date()).getTime() / 1000);
//     // Por cada elemento (div)
//     times.forEach(function(item){
//       // Calculamos la diferencia respecto a la fecha actual
//       var diff = now - parseInt(item.getAttribute('time'));
//       // En función del valor mostramos el dato en segundos, minutos, horas o días
//       if (diff < 60){
//         item.innerText = 'Hace ' + diff + ' segundos';
//         return;
//       }
//       diff = Math.floor(diff / 60);
//       if (diff < 60){
//         item.innerText = 'Hace ' + diff + ' minutos';
//         return;
//       }
//       diff = Math.floor(diff / 60);
//       if (diff < 24){
//         item.innerText = 'Hace ' + diff + ' horas';
//         return;
//       }
//       diff = Math.floor(diff / 24);
//       item.innerText = 'Hace ' + diff + ' días';
//     });
//   }
  
//   updateTimes();
//   setInterval(updateTimes, 10000);