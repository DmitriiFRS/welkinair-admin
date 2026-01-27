"use strict";
/**
 * news-one controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::news-one.news-one", ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query("api::news-one.news-one").findOne({
            where: { slug: id },
            populate: {
                image: true,
                images: true,
            },
        });
        const sanitizedEntite = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntite);
    },
}));
