import { Router } from "express";

import { getCategories, postNewCategory } from "./../controllers/categoriesController.js";
import { validateCategoryData, validateUniqueCategory } from "./../middlewares/categoriesMiddleware.js";
import { setQueryOptionsFromQueryStrings } from "../middlewares/commonMiddlewares.js";

const categoriesRouter = Router();

categoriesRouter.get("/categories", setQueryOptionsFromQueryStrings, getCategories);
categoriesRouter.post("/categories", validateCategoryData, validateUniqueCategory, postNewCategory);

export default categoriesRouter;