import * as Z from "zod";

export const Codec2_1 = Z.unknown().array();
export const Codec2_2 = Z.array(Z.number());
export const Codec2_3 = Z.tuple([Z.string(), Z.number()]);
