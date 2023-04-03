import * as Z from "zod";

export const Codec5_1 = Z.object({
    a: Z.union([Z.string(), Z.literal(123)])
}).strict();
export const Codec5_2 = Z.intersection(
    Z.object({a: Z.string()}),
    Z.object({b: Z.string()}).partial()
);
export const Codec5_3 = Z.intersection(
    Z.object({a: Z.string()}),
    Z.union([Z.object({b: Z.string()}), Z.object({c: Z.string()})])
);
