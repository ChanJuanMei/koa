// import { Router, Route, IndexRoute } from 'react-router';
import App from './App';
import List from './containers/List';
import User from './containers/User';
import Test from './containers/Test'
import Test2 from './containers/Test2'
import ContextTest from './containers/ContextTest'

import NotMatch from './error/404'

// export default routes = (
//   <Router>
//     <Route path="/" component={App} />
//   </Router>
// )
export const routes = [{
  path: "/",
  component: App
}, {
  path: "/list",
  component: List
}, {
  path: "/user",
  component: User
}, {
  path: "/contexttest",
  component: ContextTest
}, {
  path: "/test",
  component: Test
}, {
  path: "/test2",
  component: Test2
}
//  {
//   path: '*',
//   component: NotMatch
// }
]
