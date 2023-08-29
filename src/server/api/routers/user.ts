import {
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
  } from "~/server/api/trpc";
import { z } from "zod";
import { getUserSchema } from "~/schema/user";
import { TRPCError } from "@trpc/server";


export const userRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany({});
  }),

  me: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user;
  }),

  getUserData: publicProcedure
    .input(getUserSchema)
    .query(async ({ ctx, input }) => {
      try {
        console.log("input", { input });

        const user = await ctx.prisma?.user?.findFirst({
          where: { email: input?.email },
        });

        return { user };
      } catch (error: any) {
        console.log({ error });
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: error.message,
        });
      }
    }),
});