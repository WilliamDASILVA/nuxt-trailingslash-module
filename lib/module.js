const defaults = {
  base: '',
  methods: [
    'GET', 'HEAD',
  ],
};

module.exports = function module(moduleOptions) {
  const options = Object.assign({}, defaults, this.options.trailingslash, moduleOptions);

  function checkMethods(method) {
    return options.methods.includes(method);
  }

  this.addServerMiddleware((req, res, next) => {
    if (checkMethods(req.method)) {
      const reQuery = /[?&]+/;
      const reDoubleSlashes = /(\/\/+)/;

      // Use originalUrl when defined ( for express compatibility);
      const url = (req.originalUrl || req.url).split(reQuery);
      const location = url[0];
      let redirect = null;

      if (location[location.length - 1] === '/' && location !== '/') {
        // remove slashes
        redirect = location.slice(0, location.length - 1);
      }

      // complete the redirect url
      if (redirect) {
        if (url.length > 1) {
          redirect += `?${url.slice(1).join('&')}`;
        }

        redirect = options.base + redirect; // prepend the base path
        redirect = redirect.replace(reDoubleSlashes, '/');

        if (redirect[0] !== '/') {
          redirect = `/${redirect}`; // guarantee absolute redirect
        }

        res.writeHead(301, { location: redirect });
        res.end();
      } else {
        next();
      }
    } else {
      next();
    }
  });
};
