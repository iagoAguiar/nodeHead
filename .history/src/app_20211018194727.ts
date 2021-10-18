import express from "express";

const app = express();

app.get("/github", (request, response) =>{
    response.redirect( ``)
})

app.listen(4000, () => console.log('Server is running on PORT 4000'));

