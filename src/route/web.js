import express from "express";
import homeController from "../controller/homeController";

let router = express.Router()

const initWebRouter = (app) => {
    router.get('/', homeController.indexController);
    router.get('/header', homeController.headerController);
    router.get('/user', homeController.headerUser);
    return app.use('/', router)
}

export default initWebRouter;