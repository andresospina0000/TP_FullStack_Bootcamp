Hola!

Mi nombre es Andres Ospina :D

Este es un ejemplo practico de una REST Api escrita en Node JS para el modulo "Bootcamp - Tecnologias para el desarrollo web" de Three Points.

Por favor sigue los siguientes pasos para poder ejecutar la aplicacion en tu ambiente local:

1. Descarga el codigo base clonando este repo: https://github.com/andresospina0000/TP_FullStack_Bootcamp.git

2. Utilizando la consola de tu preferencia, situate en la raiz del proyecto y ejecuta el comando 
                                        npm install
con el fin de instalar todos los paquetes/dependencias que requiere la aplicacion para ser ejecutada

3. Ejecuta el comando docker:
     docker compose up -d
Esto con el fin de crear el contenedor de nuestra instancia de MongoDB, este se encargara de descargar la imagen y levantar la instancia automaticamente para poder ejecutar nuestros endpoints.

4. Para dockerizar la api por favor ejecuta el siguiente comando: 
    docker build -t <tu usuario o algun prefijo>/node-web-app .