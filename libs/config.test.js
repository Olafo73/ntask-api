module.exports = {
  database: "ntask_test",
  username: "",
  password: "",
  params: {
    dialect: "sqlite",
    storage: "ntask.sqlite",
    logging: false,
    define: {
      underscored: true
    }
  },
  jwtSecret: 'NTASK-TEST',
  jwtSession: {session: false}
};
