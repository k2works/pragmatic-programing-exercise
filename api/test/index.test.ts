import express from "express";
import supertest from "supertest";

describe("APIテスト", () => {
  test("getの場合", async () => {
    const app = express();
    app.get(
      "/",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.write("hello");
        res.end();
      }
    );

    const request = supertest(app);
    const response = await request.get("/");

    expect(response.status).toBe(200);
    expect(response.text).toEqual("hello");
  });

  test("postの場合", async () => {
    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.post(
      "/",
      async (
        req: express.Request,
        res: express.Response,
        next: express.NextFunction
      ) => {
        res.write(req.body.value);
        res.end();
      }
    );

    const request = supertest(app);
    const response = await request.post("/").send({ value: "text" });

    expect(response.status).toBe(200);
    expect(response.text).toEqual("text");
  });
});
