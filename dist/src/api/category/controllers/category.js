"use strict";
/**
 * category controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::category.category", ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query("api::category.category").findOne({
            where: { slug: id },
        });
        const sanitizedEntite = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntite);
    },
}));
