# online-store
Rest api with node js and mondodb that allow us to do CRUD operations over a schema with mongose dependecie.


Paso por paso para ejecutar:

1. Clone este repositorio y abra la carpe online-store con un editor de text, Visual Studio Code por ejemplo.
2. Descarge el instalador e instale node js desde la web oficila, preferiblemente la version actual
3. Descarge el instalado e instale mongo db desde la web oficial
4. Todas las dependcias utilizadas en este proyecto estan en el archivo package-json
5. Cree la configuración de la base de datos en base al archivo config.js. (BD name: shop, port: 27017)
    - Tenga en cuenta que el número del puerto puede cambiar en su maquina local, por lo que debe actualizar el archivo config.js con ese nuevo puerto. 
6. Las tablas dentro de la base de datos se crean en los ficheros product.js y user.js. Verifique la definición de las tablas en estos ficheros. 
7. La aplicación inicia con el archivo index.js
    - Comando node index.jss
8. Si todo estuvo bien, va apoder ver el mensaje que idica que se pude conectar con la base de datos y que el api rest está corriendo en el puerto 8080. 
    - Valide que no tenga otro servicio corriendo en el puerto 8080, si lo tiene arrojará error indicando que el puerto está ocupado.
    - Si el puerto 8080 está ocupado, puede matar el servicio que lo ocupa o actualiar el puerto de está app en el archivo config.js
9. Una vez el api esté corriendo, puedo comenzar a hacer peticiones rest desde postman http//:localhost:puerto/ruta
    - Verifique las rutas en el archivo index.js dentro del directorio routes. 

Nota: 
Tutorial guía para este proyecto: https://www.youtube.com/playlist?list=PLUdlARNXMVkk7E88zOrphPyGdS50Tadlr

Vaya directamente a los videos de interes que quiera ver, por ejemplo como instalar node, mongoDB, como hacer peticiones con postman. 



