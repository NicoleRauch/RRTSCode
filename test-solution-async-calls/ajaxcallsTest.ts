import { postUser, fetchUsers } from "../src-solution-async-calls/ajaxcalls";
import sinon, {SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from "sinon";
import expect from "must";
import {IUser} from "../src-solution-react/types";

declare var global: {XMLHttpRequest : SinonFakeXMLHttpRequestStatic};

const user: IUser = {
  firstName: "firstName",
    lastName: "lastName"
};

describe("validateInBackend", () => {
  let requests: SinonFakeXMLHttpRequest[];

  beforeEach(() => {
    requests = [];
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
    global.XMLHttpRequest.onCreate = request => {
      requests.push(request);
    };
  });

  afterEach(() => {
    delete global.XMLHttpRequest;
  });

  describe("postUser", () => {
    it("submits user data to the backend", () => {
      postUser(user, () => { /**/ });

      expect(requests.length).to.eql(1);
      expect(requests[0].url).to.eql("/api/user");
      expect(requests[0].method).to.eql("POST");
    });

    it("passes the result code to the callback", done => {
      postUser(user, data => {
        expect(data).to.eql(200);
        done();
      });

      requests[0].respond(200, { "Content-Type": "application/json" }, "");
    });
  });

  describe("fetchUsers", () => {
    it("makes request to the backend", () => {
      fetchUsers(() => { /**/ });

      expect(requests.length).to.eql(1);
      expect(requests[0].url).to.eql("/api/users");
      expect(requests[0].method).to.eql("GET");
    });

    it("passes the retrieved data to the callback", done => {
      fetchUsers(data => {
        expect(data).to.eql({somedata: true});
        done();
      });

      requests[0].respond(200, {"Content-Type": "application/json" }, `{ "somedata": true }`);
    });

  });
});
