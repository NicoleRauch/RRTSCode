import { postUser, fetchUsers } from "../src-solution-async-calls/ajaxcalls";
import sinon from "sinon";
import expect from "must";

describe("validateInBackend", function () {
  beforeEach(function () {
    this.requests = [];
    global.XMLHttpRequest = sinon.FakeXMLHttpRequest;
    global.XMLHttpRequest.onCreate = request => {
      this.requests.push(request);
    };
  });

  afterEach(function () {
    delete global.XMLHttpRequest;
  });

  describe("postUser", function () {
    it("submits user data to the backend", function () {
      postUser("myUsername", () => {});

      expect(this.requests.length).to.be(1);
      expect(this.requests[0].url).to.be("/api/user");
      expect(this.requests[0].method).to.be("POST");
    });

    it("passes the result code to the callback", function (done) {
      postUser("validUsername", data => {
        expect(data).to.eql(200);
        done();
      });

      this.requests[0].respond(200);
    });
  });

  describe("fetchUsers", function () {
    it("makes request to the backend", function () {
      fetchUsers(() => {});

      expect(this.requests.length).to.be(1);
      expect(this.requests[0].url).to.be("/api/users");
      expect(this.requests[0].method).to.be("GET");
    });

    it("passes the retrieved data to the callback", function(done) {
      fetchUsers(data => {
        expect(data).to.eql({somedata: true});
        done();
      });

      this.requests[0].respond(200, {"Content-Type": "application/json" }, `{ "somedata": true }`);
    });

  });
});
