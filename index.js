

    function changeContent(buttonNumber) {
                    var image = document.getElementById("image");
                    var text = document.getElementById("text");
                    var text2 = document.getElementById("text2");
                    
                    switch(buttonNumber) {
                    case 1:
                        image.src = "R.jpg";
                        text.innerHTML = "Nuestras impletaciones IoT van desde sistemas comunes como casas domoticas hasta sistemas de monitoreo de areas remotas con cobertura vegetal ";
                        text2.innerHTML = "IoT es la abreviatura de “Internet de las cosas”.";
                        break;
                    case 2:
                        image.src = "R (1).jpg";
                        text.innerHTML = "Ahora bien si deseas tener una implementacion de APIs como solucion de un problema de su empresa u hogar nosotros nos encargamos y hacemos la coneccion con servicios como gmail, github, facebook, ETC...";
                        text2.innerHTML = "Una API es un intermediario entre dos sistemas";
                        break;
                    case 3:
                        image.src = "OIG.jpg";
                        text.innerHTML = "Nuestros servicios están diseñados para ser escalables, flexibles y rentables, lo que nos permite implementar y administrar rápidamente su infraestructura de TI sin tener que invertir en hardware o software costoso";
                        text2.innerHTML = "Es mucho más que solo almacenamiento en nube.";
                        break;
                    case 4:
                        image.src = "big-data1.jpg";
                        text.innerHTML = "Dada la naturaleza de nuestra empresa contamos con una extensa fuente de recursos de almacenamiento por lo que estos estan tambien en disposicion para nuestros clientes esto con cita previa y un estudio de sus necesidades";
                        text2.innerHTML = "Es esencial si quieres saber que es lo que quieren tus clientes.";
                        break;
                    default:
                        image.src = "vasos (1).PNG";
                        text.innerHTML = "Para nosotros lo mas importante eres tu y por eso cada servicio es unico, aun asi es nuestro deber como empresa mostrar la calidad y excelencia en nuestros servicios es por eso que aqui veras nuestros servicios mas solicitados ";
                        text2.innerHTML = "si se";
                        break;

                    

                    }
                }
