'use strict';

var github = require('../_common/github.js');
var owner = 'ahmetb';
var repo = 'kubectx';

module.exports = function (request) {
  return github(request, owner, repo).then(function (all) {
    all._names = ['kubectx', 'kubens'];
    return all;
  });
};

if (module === require.main) {
  module.exports(require('@root/request')).then(function (all) {
    all = require('../_webi/normalize.js')(all);
    // just select the first 5 for demonstration
    all.releases = all.releases.slice(0, 5);
    console.info(JSON.stringify(all, null, 2));
  });
}
