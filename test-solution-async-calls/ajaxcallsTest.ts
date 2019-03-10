import { postUser, fetchUsers } from "../src-solution-async-calls/ajaxcalls";
import sinon, {SinonFakeXMLHttpRequest, SinonFakeXMLHttpRequestStatic} from "sinon";
import expect from "must";
import {UserType} from "../src-solution-react/types";

declare var global: {XMLHttpRequest : SinonFakeXMLHttpRequestStatic};

const user: UserType = {
  firstName: "firstName",
    lastName: "lastName"
};

describe("validateInBackend", function () {
  let requests: SinonFakeXMLHttpRequest[];

  beforeEach(function () {
    requests = [];
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
    global.XMLHttpRequest.onCreate = request => {
      requests.push(request);
    };
  });

  afterEach(function () {
    delete global.XMLHttpRequest;
  });

  describe("postUser", function () {
    it("submits user data to the backend", function () {
      postUser(user, () => {});

      expect(requests.length).to.eql(1);
      expect(requests[0].url).to.eql("/api/user");
      expect(requests[0].method).to.eql("POST");
    });

    it("passes the result code to the callback", function (done) {
      postUser(user, data => {
        expect(data).to.eql(200);
        done();
      });

      requests[0].respond(200, { "Content-Type": "application/json" }, "");
    });
  });

  describe("fetchUsers", function () {
    it("makes request to the backend", function () {
      fetchUsers(() => {});

      expect(requests.length).to.eql(1);
      expect(requests[0].url).to.eql("/api/users");
      expect(requests[0].method).to.eql("GET");
    });

    it("passes the retrieved data to the callback", function(done) {
      fetchUsers(data => {
        expect(data).to.eql({somedata: true});
        done();
      });

      requests[0].respond(200, {"Content-Type": "application/json" }, `{ "somedata": true }`);
    });

  });
});
