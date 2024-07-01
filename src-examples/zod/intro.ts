/* eslint-disable @typescript-eslint/no-unnecessary-condition, no-console */
import * as Z from "zod";

export type Data = { a: { b: { c: string } } };

export const f = (d: Data): void => {
    if (d.a === undefined || d.a.b === undefined || typeof d.a.b.c !== "string") {
        throw new Error();
    }
    // do something
};


const ZUser = Z.object({
    userId: Z.number(),
    name: Z.string()
});

const myData: unknown = {};

type IUser = Z.infer<typeof ZUser>;

export const myUserValidation: IUser = ZUser.parse(myData);

try {
    ZUser.parse(myData);
} catch (e) {
    if(e instanceof Z.ZodError) {
        console.log(e);
    }
}
