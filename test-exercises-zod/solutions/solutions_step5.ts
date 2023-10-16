import * as Z from "zod";


export const Codec5_1 = Z.string().max(3);
export const Codec5_2 = Z.number().nonnegative();
export const Codec5_3 = Z.string().startsWith("Name: ");
export const Codec5_4 = Z.string().email();
