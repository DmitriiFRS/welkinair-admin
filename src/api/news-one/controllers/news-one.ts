/**
 * news-one controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::news-one.news-one", ({ strapi }) => ({
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
