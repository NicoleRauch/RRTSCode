
export const logToConsole = (...args: unknown[]): void => { console.log(...args); } // eslint-disable-line no-console

export const logAndReturn = <T>(arg: T, text?: string): T => {
    if(text === undefined) {
        console.log(arg); // eslint-disable-line no-console
    } else {
        console.log(text, arg); // eslint-disable-line no-console
    }
    return arg;
}
