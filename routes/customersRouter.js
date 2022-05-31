import { Router } from "express";

import {
  getCustomers,
  getCustomerById,
  postNewCustomer,
  updateCustomer
} from "../controllers/customersController.js";
import { setQueryOptionsFromQueryStrings } from "../middlewares/commonMiddlewares.js";
import { 
    validateCustomerData,
    validateUniqueCostumer,
    validateCpfConflictOnUpdate,
    setSearchQueryObject,
    setUpdateQueryObject,
  } from "../middlewares/customersMiddleware.js";
  
const customersRouter = Router();

customersRouter.get("/customers",
    setQueryOptionsFromQueryStrings,
    setSearchQueryObject,
    getCustomers);

customersRouter.get("/customers/:id",
    setQueryOptionsFromQueryStrings,
    setSearchQueryObject,
    getCustomerById);

customersRouter.post("/customers",
    validateCustomerData,
    validateUniqueCostumer,
    postNewCustomer);

customersRouter.put("/customers/:id",
    validateCustomerData,
    validateCpfConflictOnUpdate,
    setUpdateQueryObject,
    updateCustomer);

export default customersRouter;