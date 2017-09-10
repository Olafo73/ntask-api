import jwt from 'jwt-simple';

describe("Routes: Users", () => {
  const Users = app.db.models.Users;
  const jwtSecret = app.libs.config.jwtSecret;
  let token;
  beforeEach(done => {
    //Runs before each test...
    Users
      .destroy({where: {} })
      .then(() => Users.create({
        name: "John",
        email: "john@mail.net",
        password: "12345"
      }))
      .then(user => {
        token = jwt.encode({id:user.id}, jwtSecret);
        done();
      });
  });
  describe("GET /user", () => {
    describe("status 200", () => {
      it("returns an authenticated user", done => {
        //Test's logic
        request.get("/user")
          .set("Authorization", `JWT ${token}`)
          .expect(200)
          .end((err, res) => {
            expect(res.body.name).to.eql("John");
            expect(res.body.email).to.eql("john@mail.net");
            done(err);
          });
      });
    });
  });
  describe("DELETE /user", () => {
    describe("status 204", () => {
      it("deletes an authenticated user", done => {
        //Test's logic
        request.delete("/user")
          .set("Authorization", `JWT ${token}`)
          .expect(204)
          .end((err, res) => done(err));
      });
    });
  });
  describe("POST /users", () => {
    describe("status 204", () => {
      it("creates a new user", done => {
        //Test's logic
        request.post("/users")
          .send({
            name: "Mary",
            email: "mary@mail.net",
            password: "12345"
          })
          .expect(204)
          .end((err, res) => {
            done(err);
          });
      });
    });
  });
});
