import Joi from "joi";

export const newRentalSchema = Joi.object ({
    customerId: Joi.string().required(),
    gameId: Joi.number().required(),
    daysRented: Joi.number().min(1).required()
})