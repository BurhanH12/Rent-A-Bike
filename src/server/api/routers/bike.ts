import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
  } from "~/server/api/trpc";
import { getBikeSchema, getallbikesSchema, addBikeSchema } from "~/schema/bike";
import { TRPCError } from "@trpc/server";

export const bikeRouter = createTRPCRouter({
    all: publicProcedure.query(({ctx}) => {
        return ctx.prisma.bikes.findMany({});
    }),

    me: publicProcedure.query(({ctx}) => {
        return ctx.prisma.bikes;
    }),


    getBikeData: protectedProcedure
    .input(getBikeSchema)
    .query(async ({ctx, input}) => {
        try {
            console.log("input", input);

            const bike = await ctx.prisma.bikes.findFirst({
                where: { title: input?.title},
            });

            return { bike };
            
        } catch (error: any) {
            console.log({ error });
            throw new TRPCError({
              code: "INTERNAL_SERVER_ERROR",
              message: error.message,
            });
          }
    }),


    getAllBikes: publicProcedure
    .input(getallbikesSchema)
    .query(async ({ctx}) => {
        try {
            const allBikes = await ctx.prisma.bikes.findMany()

            return { allBikes }

        } catch (error: any) {
        console.log({ error });
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }
    }),

    addBike: protectedProcedure
    .input(addBikeSchema)
    .mutation(async({ctx, input}) => {
      try {
        if (
          !input.title &&
          !input.description &&
          !input.images &&
          !input.price &&
          !input.rentPerHour &&
          !input.availability &&
          !input.specifications &&
          !input.condition &&
          !input.rentCount
        ) {
          throw new TRPCError({
            code: "FORBIDDEN",
            message: "Please Add all your Fields",
          });
        } else {
          const paylaod: any = {
            title: input.title,
            description: input.description,
            images: input.images,
            price: input.price,
            rentPerHour: input.rentPerHour,
            availability: input.availability,
            specifications: input.specifications,
            condition: input.condition,
            rentCount: input.rentCount
          };
          console.log(paylaod, "paylaod");
          const result = await ctx.prisma.bikes.create({
            data: paylaod
          });
          console.log("Result:", result);
          
            
        }
      } catch (error: any) {
        console.log("Add Bike Error:",{ error })
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error?.message,
        });
      }
    }),
});
