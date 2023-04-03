import * as Z from "zod";

export const Codec3_1 = Z.record(Z.string(), Z.unknown());
export const Codec3_2 = Z.record(Z.string(), Z.number());
export const Codec3_3 = Z.object({
    a: Z.number(),
    b: Z.string(),
});
export const Codec3_4 = Z.object({
    a: Z.number(),
    b: Z.string(),
}).partial();
export const Codec3_5 = Z.object({
    a: Z.number(),
    b: Z.string(),
}).strict();
