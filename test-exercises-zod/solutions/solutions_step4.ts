import * as Z from "zod";

export const Codec4_1 = Z.union([Z.number(), Z.string()]);
export const Codec4_2 = Z.intersection(Z.object({a: Z.number()}), Z.object({b: Z.string()}));
