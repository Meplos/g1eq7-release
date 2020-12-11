# Installation

## Via Docker

### Start

You can start the application by running the following script in the root folder :

```console
foo@bar:~$ sh start.sh
```

Make sure you have Docker installed on your computer first

### Stop

You can stop the application by running the following script in the root folder :

```console
foo@bar:~$ sh dockerstop.sh
```

## Via Terminal

### Pre-condition
You have to install MongoDB on your computer and having the **mongod** process running.
You have to replace, in backend/src/app/index.js, line 19 **HOST** by **HOST_LOCAL**.

### Front
```console
foo@bar:~$ cd backend/
foo@bar:~$ npm install
foo@bar:~$ npm run serve
```

### Back
```console
foo@bar:~$ cd frontend/
foo@bar:~$ npm install
foo@bar:~$ npm run serve
```

## Accès a l'application

You access to the application on **localhost** port **8080**
```http
http://localhost:8080
```