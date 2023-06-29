import * as Z from "zod";

const ZUser = Z.object({
    firstName: Z.string().min(1),
    lastName: Z.string()
}).strict();
export type IUser = Z.infer<typeof ZUser>;

export const ZUsers = ZUser.array();
export type IUsers = Z.infer<typeof ZUsers>;

