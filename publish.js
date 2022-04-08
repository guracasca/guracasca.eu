var ghpages = require("gh-pages");

ghpages.publish("_site", function (err) {
  if (err) console.error(err);
});
