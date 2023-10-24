"use strict";

module.exports = (err, req, res, next) => {

  const errorStatusCode = res?.errorStatusCode || 500;
  
  res.status(errorStatusCode).send({
    error: true,
    message: err.message,
    cause: err.cause,
    body: req.body,
  });
};

// module.exports = (err, req, res, next) => {

//     return res.status(res?.errorStatusCode || 500).send({
//         error: true,
//         message: err.message,
//         cause: err.cause,
//         body: req.body
//     });
// }
