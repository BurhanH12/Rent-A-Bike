import { string, z } from "zod";

export const getBikeSchema = z.object({
    title: z.string()
})

export const getallbikesSchema = z.object({
})

export const addBikeSchema = z.object({
    title :  z.string(),
    description : z.string(),
    images :  z.string(),
    price : z.number(),
    rentPerHour : z.number(),
    availability : z.boolean(),
    specifications : z.array(string()),
    condition : z.string(),
    rentCount : z.number()
})