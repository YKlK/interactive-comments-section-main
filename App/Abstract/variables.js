export const root = document.getElementById("root");

export class Comentario{

    static id = 0;
    
    constructor(img,content){
        Comentario.id++;

        //creando etiquetas
        this.div = document.createElement("div")
        this.comentario = document.createElement("p")
        this.userIMG = document.createElement("img")
        this.buttonRemove = document.createElement("button")
        this.buttonEdit = document.createElement("button")
        this.agregarReaccion = document.createElement("button")
        this.reducirReaccion  = document.createElement("button")
        this.divsito =  document.createElement("div")
        this.nombre = document.createElement("span")
        this.hora_de_subida = document.createElement("span")
        //creando etiquetas

        this.imgUser(img)
        this.setComentario(content)
        this.seID_s()
        this.div.appendChild(this.comentario)
        root.appendChild(this.div)
       
    }  
        seID_s(){
            this.div.id = `div-${Comentario.id}`;
            this.comentario.id=`coment-${Comentario.id}`;
            this.buttonEdit.id=`edit-${Comentario.id}`;
            this.buttonRemove.id=`remove-${Comentario.id}`;
            this.agregarReaccion.id =`addR-${Comentario.id}`;
            this.reducirReaccion.id =`RedR-${Comentario.id}`;
            this.divsito.id = `aux-${Comentario.id}`;
            this.nombre.id =  `user-${Comentario.id}`;
        }

        setComentario(texto){
            this.comentario.textContent = texto
        }

        imgUser(imgPath){
            this.userIMG.src = imgPath
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