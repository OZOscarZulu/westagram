import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Nav from "./Components/Nav/Nav";
//import LoginJE from "./Pages/jieun/Login/Login";
//import MainJE from "./Pages/jieun/Main/Main";
import Login from "./Pages/kyungto/Login/Login";
import Main from "./Pages/kyungto/Main/Main";
//import LoginMK from "./Pages/mikyung/Login/Login";
//import MainMK from "./Pages/mikyung/Main/Main";
//import LoginSH from "./Pages/seunghyun/Login/Login";
//import MainSH from "./Pages/seunghyun/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Nav} /> */}
                
          {/* <Route exact path="/login-je" component={LoginJE} />
          <Route exact path="/main-je" component={MainJE} /> */}

          <Route exact path="/login" component={Login} />
          <Route exact path="/main" component={Main} />

          {/* <Route exact path="/login-mk" component={LoginMK} />
          <Route exact path="/main-mk" component={MainMK} />

          <Route exact path="/login-sh" component={LoginSH} />
          <Route exact path="/main-sh" component={MainSH} /> */}
         

          {/* <Route exact path="/" component={Login} /> */}
        </Switch>
      </Router>
    );
  }
}
export default Routes;
