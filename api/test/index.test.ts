import supertest from "supertest";
const app = require("../index");

describe("フィボナッチ数列API", () => {
  test("0を渡したら0を返す", async () => {
    const request = supertest(app);
    const response = await request.get("/api/0");

    expect(response.status).toBe(200);
    expect(response.text).toEqual("0");
  });

  test("4を渡したら3を返す", async () => {
    const request = supertest(app);
    const response = await request.get("/api/4");

    expect(response.status).toBe(200);
    expect(response.text).toEqual("3");
  });
});
