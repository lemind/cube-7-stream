import isAuth from '../middlewares/isAuth';

export default (router) => {
  router
    .use(isAuth)
    .use(function (err, req, res, next) {
      if (err) {
        if (err.status === 401) {
          return res.status(401).json({ success: false, error: err });
        } else {
          return res.status(500).json({ success: false, error: err });
        }
      } else {
        next()
      }
    })
    .route('/ping')
    .get((req, res) => {
      return res.json({test: 'pong', success: true })
        .status(200).end();
      },
    )
  }
