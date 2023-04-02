import * as z from "zod";


const ZState = z.union([z.literal("on"), z.literal("off")]);

const ZTemperature = z.object({
    temperature: z.number()
});
const ZHeatSwitch = z.object({
    heat: ZState
});
const ZTargetSet = z.object({
    target: ZTemperature
});

const ZCommand = z.union([ZHeatSwitch, ZTargetSet]);
export const ZCommands = z.array(ZCommand);
export type ICommands = z.infer<typeof ZCommands>;
