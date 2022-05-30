import { Router } from "express";

const rentalsRouter = Router();

rentalsRouter.get("/rentals");

rentalsRouter.post("/rentals");

rentalsRouter.delete("/rentals/:id");

export default rentalsRouter;