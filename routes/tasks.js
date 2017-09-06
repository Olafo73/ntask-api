module.exports = app => {
  const Tasks = app.db.models.Tasks;

  app.route("/tasks")
    .all((req, res, next) => {
      // Middleware for preexecution of routes
      delete req.body.id;
      next();
    })
    .get((req, res) => {
      // "/tasks": List tasks
      Tasks.findAll({})
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({msg: error.message});
        });
    })
    .post((req, res) => {
      // "/tasks": Save new task
    });

    app.route("/tasks/:id")
      .all((req, res, next) => {
        // Middleware for preexecution of routes
        delete req.body.id;
        next();
      })
      .get((req, res) => {
        // "/tasks/1": Find a task
      })
      .put((req, res) => {
        // "/tasks/1": Update a task
      })
      .delete((req, res) => {
        // "/tasks/1": Delete a tesk
      });
};
