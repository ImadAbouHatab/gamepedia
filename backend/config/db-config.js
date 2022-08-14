const mongoose = require("mongoose");

function connectToDatabase(app, PORT){
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log("Connected to DB and listening on port", PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
}

module.exports = {connectToDatabase};