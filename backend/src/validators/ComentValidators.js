const { celebrate, Segments , Joi} = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY] : Joi.object().keys({
            produto_id : Joi.string().required(),
            user_id : Joi.string().required(),
            comentario : Joi.string().max(250).required(),
            avaliacao : Joi.number().integer().min(1).max(5).required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        }).unknown(),
    }),

    getByIds: celebrate({
        [Segments.BODY] : Joi.object().keys({
            user_id : Joi.string().required(),
            produto_id : Joi.string().required()
        }),
    }),

    getById: celebrate({
        [Segments.PARAMS] : Joi.object().keys({
            comentario_id : Joi.string().required(),
        }),
    }),

    updateById: celebrate({
        [Segments.PARAMS] : Joi.object().keys({
            comentario_id : Joi.string().required(),
        }),
        [Segments.BODY] : Joi.object().keys({
            comentario : Joi.string().required(),
            avaliacao : Joi.string().required()
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        }).unknown(),

    }),

    deleteById: celebrate({
        [Segments.PARAMS] : Joi.object().keys({
            comentario_id : Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object().keys({
            authorization: Joi.string().required(),
        }).unknown(),
    }),
};