import { Router } from "express";

import { getGames, postNewGame } from "../controllers/gamesController.js";
import { setQueryOptionsFromQueryStrings } from "../middlewares/commonMiddlewares.js";
import {
    validateGameData,
    validateUniqueGame,
    setSearchQueryObject,
  } from "../middlewares/gamesMiddleware.js";
  
const gamesRouter = Router();

gamesRouter.get("/games",
    setQueryOptionsFromQueryStrings,
    setSearchQueryObject,
    getGames);

gamesRouter.post("/games", validateGameData, validateUniqueGame, postNewGame);

export default gamesRouter;