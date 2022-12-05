# 12m--dashboard-backend

## MongoDB Setup

### `Install MongoDB Community Server`

initialize connection in port `:27017` and create a database named `12mdb`.

### `Install MongoDB Database Tools`

If you have the collection files follow [this](https://www.geeksforgeeks.org/import-data-to-mongodb/) guide to import them to the database.

## Available Scripts

In the project directory, when running it for the first time, you should run:

### `cd server`
### `npm install` installs all dependencies then,
### `npm start`

Runs the server in [http://localhost:5000](http://localhost:5000).

## Project Structure

### Models

This folder contains the format data should be in the database,\
if the data is wrongfully formatted, won't be submitted.

### Routes

This folder contains the CRUD operations for the different collections in the database\
The routes are used by the frontend to communicate with the server.

### Server.js

This file initializes the server and adds necessary packages.

## Testing

### Automatic Dummy Data Upload

Uncomment the last line in the `server.js` file and save it.\
This will start uploading data to the Prp, Monitor, and Iflo collections
every 5 seconds. The time argument can be modified in 'ms'.

### Postman

Use [Postman](https://www.postman.com/) to test api routes.\
The format should be `localhost:5000/api/<route-name>` where\
you replace `<route-name>` with the route name which you are testing.\
Route names are found next to its respective function.

