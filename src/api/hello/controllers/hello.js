'use strict';

/**
 * A set of functions called "actions" for `hello`
 */

module.exports = {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }

//   async index(ctx, next) {
//     // try {
//     //   ctx.body = 'ok';
//     // } catch (err) {
//     //   ctx.body = err;
//     // }

//     const entries = await strapi.db.query('api::demo.demo').findMany({
//       select: ['text'],
//       where: { text: 'hello world' },
//       orderBy: { publishedAt: 'DESC' }
//     });

//      ctx.body = entries;
//   }
// };


  async index(ctx, next) {

    const message = 1;

    if (message == 1) {  // if message is equal to 1, then we trigger this
      // return ctx.badRequest('bad thing fam', { thisMessage : 'not sent' })
      return ctx.unauthorized('bad thing fam', { thisMessage : 'unauthorized' })
    }

    ctx.body = "hello world";
  }
}
