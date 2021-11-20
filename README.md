# API Mundo Disney

API para posts de un blog

___


## Empezando

Para ver casos de usos precargados ingresa a la carpeta [postman](https://github.com/moncholamas/blog_server/tree/master/postman).

___

## Dependencias
Antes de inicar el clonado del repositorio verifica tener:

- Mysql 8 o superior
- NodeJS 14 o superior


***


## Iniciando clonado del repositorio
```sh
#Clonar el repositorio 
git clone https://github.com/moncholamas/blog_server.git

```

### Instalar las dependencias
```sh
npm install
```

### Generar base de datos
En la raiz del proyecto ejecutar:
```sh
mysql -h hostname -u user database < /db_mysql/db.sql

```

### Actualizar variables de entorno
En la raiz del documento agregar un archivo .env donde recuperamos las variables de entorno con los datos locales, las variables son:

```sh
DB_USER=       #nombre del usuario de la DB
DB_PASS=       #clave para la db
DB_HOST=       #nombre del servidor (localhost)
DB_PORT=       #puerto mysql (por defecto 3306)
DB_DB=         #nombre de la base de datos a usar
```

___




Correr en modo desarrollo

```sh
npm run dev
```

Lanzar a Producción

```sh
#Construye un directorio /dist
npm run build 

#Ejecuta el código generado en /dist
npm run start
```

___



### Autor
Por sugerencias, correcciones o comentarios: 
[Manuel Lamas](https://github.com/moncholamas/)