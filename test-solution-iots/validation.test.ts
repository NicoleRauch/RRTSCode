import * as R from "ramda";

import {IOUser, IOUserList, IUser} from "../src-solution-iots-alt/types";
import {validationSuccessfulTemplate, validationFailsTemplate} from "./validationHelpers";

const user: IUser = {
    firstName: "Peter",
    lastName: "Meier"
};
const user2: IUser = {
    firstName: "Fritz",
    lastName: "Weber"
};

describe("Validation of", () => {

    describe("IUser", () => {
        const validationSuccessful = validationSuccessfulTemplate(IOUser);
        const validationFailed = validationFailsTemplate(IOUser);

        it("IUser gets validated successfully", (done) => {
            validationSuccessful(user, done);
        });

        it("IUser needs the firstName field", (done) => {
            validationFailed(R.dissoc("firstName", user), done);
        });

        it("IUser needs the lastName field", (done) => {
            validationFailed(R.dissoc("lastName", user), done);
        });

        it("additional fields are only ok if not strict", (done) => {
            validationSuccessful({...user, additional: "field"}, done);
        });
    });

    describe("IUserList", () => {
        const validationSuccessful = validationSuccessfulTemplate(IOUserList);
        const validationFailed = validationFailsTemplate(IOUserList);

        it("IUser gets validated successfully", (done) => {
            validationSuccessful([user, user2], done);
        });

        it("IUser needs the firstName field", (done) => {
            validationFailed([R.dissoc("firstName", user), user2], done);
        });

        it("IUser needs the lastName field", (done) => {
            validationFailed([R.dissoc("lastName", user), user2], done);
        });

    });

});
