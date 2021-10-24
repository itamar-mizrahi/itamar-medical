import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Formik, Field, Form } from "formik";
function App() {
  return (
    <div className="login-box">
       <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Login />
          </Route>
          <Route path="/users">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
        {/* <Formik
        initialValues={{ name: "", email: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="login-box">
          <Field className="field" name="name" type="text" />
          <Field className="field" name="password" type="password" />
          <button type="submit">Submit</button>
        </Form>
      </Formik> */}
    </div>
  );
}

function Login() {
  return <Formik
  initialValues={{ name: ""}}
  onSubmit={async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    alert(JSON.stringify(values, null, 2));
  }}
>
  <Form className="login-box">
    <Field className="field" name="name" type="text" />
    <Field className="field" name="password" type="password" />
    <button  onClick={()=>{}} type="submit">Submit</button>
  </Form>
</Formik>;
}


const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };
}
function Homepage() {
  return <h2>About</h2>;
}

export default App;
