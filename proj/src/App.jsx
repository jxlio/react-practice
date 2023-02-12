import Admin from "./pages/admin";
import Index from "./pages/index";
import Login from "./pages/login";
import Registro from "./pages/registro";
import PublicLayaout from "./layaouts/publicLayaout";
import Auth from "./layaouts/auth";
import PrivateLayaout from "./layaouts/privateLayaout";
import Clientes from "./pages/admin/clientes";
import Vehiculos from "./pages/admin/vehiculos";


import "./styles/styles.css"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={["/admin", "/admin/clientes", "/admin/vehiculos"]}>
          <PrivateLayaout>
            <Switch>
                <Route path={"/admin/clientes"}>
                    <Clientes/>
                </Route> 
                <Route path={"/admin/vehiculos"}>
                  <Vehiculos/>
                </Route>
              <Route path={"/admin"}>
                <Admin />
              </Route>
            </Switch>
          </PrivateLayaout>
        </Route>
        <Route path={["/login", "/registro"]}>
          <Auth>
            <Switch>
              <Route path={"/login"}>
                <Login />
              </Route>
              <Route path={"/registro"}>
                <Registro />
              </Route>
            </Switch>
          </Auth>
        </Route>
        <Route path={["/"]}>
          <PublicLayaout>
            <Switch>
              <Route path={"/"}>
                <Index />
              </Route>
            </Switch>
          </PublicLayaout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
