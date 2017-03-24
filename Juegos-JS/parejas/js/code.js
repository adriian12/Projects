        //Array original con las imagenes que nunca se manipula
        var animales = ["orni1.jpg", "orni2.jpg","comodo1.jpg","comodo2.jpg","tigre1.jpg","tigre2.jpg","cerdo1.jpg","cerdo2.jpg","ave1.jpg","ave2.jpg","gaviota1.jpg","gaviota2.jpg","gato1.jpg","gato2.jpg","boxer1.jpg","boxer2.jpg"];
        
        var animales2 = [];
        var animales3 = [];
        
        //Este array es en el que 
        var tablero = [];        
        
        
        var imagen1 ="";
        var nombre1;
        var imagen2 ="";
        var nombre2;
        
        //Conesta variable controlaremos los clicks del ratón
        var pulsacion=1;
        
        var contador = 1;
        var aciertos = 0;
        var tamaño = 0;
        var aleatorio = 0;
        
        
        //Comprobamos que las dos imagenes son identicas
        function comprobar(){
            
            //Si las imagenes son diferentes volvemos a darle la vuelta a la imagen y volvemos a poner el onclick
            if (nombre1 != nombre2){
                document.getElementById("imagen"+imagen1).setAttribute("src","img/sindescubrir.jpg");
                document.getElementById("imagen"+imagen1).setAttribute("onclick", "juego(this)");
                document.getElementById("imagen"+imagen2).setAttribute("src","img/sindescubrir.jpg");
                document.getElementById("imagen"+imagen2).setAttribute("onclick", "juego(this)");                
            }
            
            else{
                aciertos++;
                if(aciertos == tamaño/2){
                    alert("has ganado");
                }
            }
        }
        
        //Con esta funcion colocaremos el tablero y las imagenes       
        function poner_imagenes(){                  
                      
            tablero = [];
            animales2 = [];
            animales3=[];
            aciertos = 0;
            contador = 0;
            tamaño = document.getElementById("tamaño").value;
            
            //Comprobamos que el numero es par y esta entre 3 y 17
            if(tamaño%2 == 0 && tamaño <= 16 && tamaño >= 4){

                //Vaciamos el tablero por si ya hubiera uno de otra partida
                document.getElementById("mesa").innerHTML = "";
                
                //Con este bucle creamos el tablero
                for(var a = 1; a <= tamaño; a++){

                    document.getElementById("mesa").innerHTML += "<div class='celdas'><img id='imagen"+ a +"'onclick='juego(this)' src='img/sindescubrir.jpg' /></div>";
                }
                
                //Copiamos el array animales que es donde tenemos las imagenes en animales2.
                for(var a = 0 ; a < animales.length; a++){
                    
                    animales2[a] = animales[a];
                }
                
                contador = 0;

                //En el array animales3 cogemos las imagenes por pajeras y de forma aleatoria del array animales2
                while(contador < tamaño){
                   
                    aleatorio = Math.floor((Math.random() * animales.length) + 0);  
                      
                    if(aleatorio%2 == 1){

                        if(animales2[aleatorio] != null){      

                            animales3[contador] = animales2[aleatorio-1];
                            animales3[contador+1] = animales2[aleatorio];                            
                            contador = contador + 2;
                            delete animales2[aleatorio];   
                            delete animales2[aleatorio-1];                             
                        }                
                    }
                }         
            
                contador = 1;

                //En el array tablero cogemos las imagenes de forma aleatoria del array animales3               
                while(contador <= tamaño){

                    aleatorio = Math.floor((Math.random() * tamaño) + 0);  

                    if(animales3[aleatorio] != null){      

                        tablero[contador] = animales3[aleatorio];
                        contador++;
                        delete animales3[aleatorio];                  
                    }                
                }  
            }
            
            else{
                alert("introduzca un numero par y que sea mayor que 3 y menor que 17");
            }
            
        }
         
        //Cada vez que pulsemos en una imagen llamaremos a esta funcion
        function juego(x){    

                if (pulsacion==2){
                    //comprobar si las imagenes son iguales
                    pulsacion=1;
                    imagen2=x.getAttribute("id");
                    imagen2 = parseInt(imagen2.substr(6));
                    x.setAttribute("src","img/"+tablero[imagen2]);
                    nombre2 = tablero[imagen2].slice(0,-5); 
                    document.getElementById("imagen"+imagen2).setAttribute("onclick", "");
                    //Ponemos un setTimeout para que de tiempo a ver la segunda imagen
                    setTimeout("comprobar()", 200);
    
                    

                }
                else{
                    pulsacion++
                    //Cogemos el id de la imagen
                    imagen1 = x.getAttribute("id");
                    //Nos quedamos con el numero del id
                    imagen1 = parseInt(imagen1.substr(6));
                    //Cambiamos la imagen por la que tenemos en el tablero
                    x.setAttribute("src","img/"+tablero[imagen1]);
                    //eliminamos el numero.jpg del nombre de la imagen
                    nombre1 = tablero[imagen1].slice(0,-5);
                    //vaciamos el onclick para que no se pueda volver a pulsar esta imagen
                    document.getElementById("imagen"+imagen1).setAttribute("onclick", "");                
                }       
            }
            
