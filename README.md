## Repo semilla para crear un backend con NodeJS

#### 1. Clonar el repo.

#### 2. Instalamos los paquetes y dependencias.

```
npm i
```

#### 3. Instalamos psql

> Psql nos permite conectarnos a bases Postgres mediante la consola.

```
psql --version
```

> Si ya tenemos una versión instalada no hace falta volver a hacerlo.

##### MacOS:

```
brew doctor
brew update
brew install libpq
brew link --force libpq
```

##### Linux Debian like:

```
sudo apt-get update
sudo apt-get install postgresql-client
```

#### 4. Docker

Instalamos Docker desde el siguiente link:

[Docker Docs](https://docs.docker.com/engine/install/)

Una vez instalado nos paramos en el directorio raíz del repo y ejecutamos:

```
docker-compose up -d
```

#### 5. Creación de la base

Nos conectamos a la base:

```
psql -h 127.0.0.1 -U postgres
```

> contraseña: admin1234

Creamos la base:

```
CREATE DATABASE desarrollo;
```
Nos pasamos a la base:

```
\c desarrollo;
```

Salimos con:

```
\q;
```

> Ahora podemos conectarnos asi: psql -h 127.0.0.1 -U postgres -d desarrollo

#### 6. Environment

Tenemos que crear una copia del archivo .env.example en .env.

Ejecutamos el código:

```
./run_dev.sh
```