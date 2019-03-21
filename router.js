const path = require('path');
const includeAll = require('include-all');
const Router = require('koa-router');

const controllers = includeAll({
  dirname: path.join(__dirname, 'src/controllers'),
  filter: /(.+)\.js$/,
  excludeDirs: /^\.(git|svn)$/
})
const policies = includeAll({
  dirname: path.join(__dirname, 'src/policies'),
  filter: /(.+)\.js$/,
  excludeDirs: /^\.(git|svn)$/
})
const routeAlias = require('./config/route_alias'), routeAliasList = Object.keys(routeAlias).map(_ => [_, routeAlias[_]]);
console.log('routeAlias', routeAlias)
const policyList = [];
Object.keys(policies).forEach(policy => {
    Object.keys(policies[policy]).forEach(policyItem => policyList.push([policyItem, policies[policy][policyItem]]))
});
console.log('policies', policies)
console.log('policyList', policyList)

const router = new Router();
Object.keys(controllers).forEach(controllerName => {
    const coller = controllers[controllerName];
    Object.keys(coller).forEach(actionName => {
        const action = coller[actionName];
        const reqPath = `/${controllerName}/${actionName}`;
      
        const myPolicies = policyList.filter(_ => {
            return RegExp(_[0]).test(reqPath);
        }).map(_ => _[1]);
        console.log('myPolicies', myPolicies)

        router.all(reqPath, ...myPolicies.concat(action));
        actionName === "index" && router.all(`/${controllerName}/`, ...myPolicies.concat(action))
        routeAliasList.forEach(arr => {
            arr[1] === reqPath && router.all(arr[0], ...myPolicies.concat(action))
        })
        console.log('router', router)
    })
})

module.exports = router;