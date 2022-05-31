import { Router } from "express";

import {
  getRentals,
  postNewRental,
  setRentalAsFinished,
  deleteRental,
} from "../controllers/rentalsController.js";

import { setQueryOptionsFromQueryStrings } from "../middlewares/commonMiddlewares.js";

import {
    validateRentalData,
    validateExistingCostumerAndGame,
    validateAvailableGame,
    setSearchQueryObject,
    validateExistingRental,
  } from "../middlewares/rentalsMiddleware.js";
  
const rentalsRouter = Router();

rentalsRouter.get("/rentals",
    setQueryOptionsFromQueryStrings,
    setSearchQueryObject,
    getRentals);

rentalsRouter.post("/rentals",
    validateRentalData,
    validateExistingCostumerAndGame,
    validateAvailableGame,
    postNewRental);

rentalsRouter.post("/rentals/:id/return",
    validateExistingRental,
    setRentalAsFinished);

rentalsRouter.delete("/rentals/:id", validateExistingRental, deleteRental);

export default rentalsRouter;