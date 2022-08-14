const cors = require("cors");
const authRouter = require('../routes/auth-router');

function executeMiddleware(express, app){
    app.use(cors());
    app.use(express.json());
    app.use((req, res, next) => {
        console.log(req.path, req.method);
        next();
    });
}

function initializeRoutes(app){
    app.get('/', (req, res) => {
        res.json({msg: "Welcome"});
    });
    app.use('/auth', authRouter);
}

module.exports = {initializeRoutes, executeMiddleware};