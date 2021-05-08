const { celebrate, Segments , Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY] : Joi.object().keys({
            password: Joi.string().min(6).required(),
            name : Joi.string().required(),
            email : Joi.string().email().required(),
            endereco : Joi.string().required(),
            cidade : Joi.string().required(),
            estado : Joi.string().required(),
            cep : Joi.number().integer().required(),
            flor : Joi.string().required(),
            cartao : Joi.number().integer().optional(),
            mes : Joi.number().integer().optional(),
            ano : Joi.number().integer().optional(),
            cvc : Joi.number().integer().optional(),
        }),
    }),

    getById: celebrate({
        [Segments.PARAMS] : Joi.object().keys({
            user_id : Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        }).unknown(),
    }),

    updateById: celebrate({
        [Segments.PARAMS] : Joi.object().keys({
            user_id : Joi.string().required(),
        }),
        [Segments.BODY] : Joi.object().keys({
            name : Joi.string().optional(),
            email : Joi.string().email().optional(),
            endereco : Joi.string().optional(),
            cidade : Joi.string().optional(),
            estado : Joi.string().optional(),
            cep : Joi.number().integer().optional(),
            flor : Joi.string().optional(),
            cartao : Joi.number().integer().optional(),
            mes : Joi.number().integer().optional(),
            ano : Joi.number().integer().optional(),
            cvc : Joi.number().integer().optional(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        }).unknown(),
    }),

    deleteById: celebrate({
        [Segments.PARAMS] : Joi.object().keys({
            user_id : Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        }).unknown(),
    }),
};