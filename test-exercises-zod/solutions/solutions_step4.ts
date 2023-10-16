import * as Z from "zod";

const Codec4_2A = Z.object({a: Z.number()});
const Codec4_2B = Z.object({b: Z.string()});

export const Codec4_1 = Z.union([Z.number(), Z.string()]);
export const Codec4_2 = Z.intersection(Codec4_2A, Codec4_2B);
