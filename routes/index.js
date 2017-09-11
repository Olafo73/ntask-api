module.exports = app => {
  /**
    * @api{get}/ API status
    * @apiGroup Status
    * @apiSuccess {String} status API Status' Message
    * @apiSuccesExample {json} Success
    * HTTP/1.1 200 OK
    * {"status": "NTASK API"}
    */
  app.get("/", (req, res) => {
    res.json({status: "NTask API "});
  });
};
