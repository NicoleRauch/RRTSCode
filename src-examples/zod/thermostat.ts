import * as Z from "zod";


const ZState = Z.union([Z.literal("on"), Z.literal("off")]);

const ZTemperature = Z.object({
    temperature: Z.number()
});
const ZHeatSwitch = Z.object({
    heat: ZState
});
const ZTargetSet = Z.object({
    target: ZTemperature
});

const ZCommand = Z.union([ZHeatSwitch, ZTargetSet]);
export const ZCommands = Z.array(ZCommand);
export type ICommands = Z.infer<typeof ZCommands>;
