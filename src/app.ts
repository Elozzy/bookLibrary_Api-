import express,{Application, Request, Response, NextFunction} from 'express';

import * as bookController from './controllers/bookController';
import bodyParser = require('body-parser');

const app:Application = express();
app.set("port", 3000);

app.get('/', (req: Request, res: Response, next:NextFunction) => {
    res.send("Welcome to typescript server");
});

//bodyParser
app.use(bodyParser.json());
// API Endpoints
app.get("/books", bookController.allBooks);
app.get("/book/:id", bookController.getBook);
app.put("/book", bookController.addBook);
app.post("/book/:id", bookController.updateBook);
app.delete("/book/:id", bookController.deleteBook);

app.listen(app.get("port"), () => {
    console.log("Server is active on http://localhost:%d", app.get("port"));
});