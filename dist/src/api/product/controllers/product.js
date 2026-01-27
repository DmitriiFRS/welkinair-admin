"use strict";
/**
 * product controller
 */
Object.defineProperty(exports, "__esModule", { value: true });
const strapi_1 = require("@strapi/strapi");
exports.default = strapi_1.factories.createCoreController("api::product.product", ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params;
        const entity = await strapi.db.query("api::product.product").findOne({
            where: { slug: id },
            populate: {
                previewImage: true,
                images: true,
                variation: {
                    populate: {
                        params: {
                            populate: {
                                airconds: true,
                                vrf_outer: true,
                                vrf_inner: true,
                                chillers: true,
                                heat_curtains: true,
                                centrifugal_chillers: true,
                            },
                        },
                    },
                },
                params_other: {
                    populate: {
                        humids: true,
                        dehumids: true,
                        boilers: true,
                    },
                },
                brand: true,
                categories: true,
                general_params: {
                    populate: {
                        icon: true,
                    },
                },
                video: true,
                img_description: {
                    populate: {
                        image: true,
                        image_mobile: true,
                    },
                },
                top_banner_description: {
                    populate: {
                        image: true,
                        image_mobile: true,
                    },
                },
                b_banner_description: {
                    populate: {
                        image: true,
                        image_mobile: true,
                    },
                },
            },
        });
        const sanitizedEntite = await this.sanitizeOutput(entity, ctx);
        return this.transformResponse(sanitizedEntite);
    },
}));
//
