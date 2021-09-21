import React, { useRef } from "react";
import { Link, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Auth.css";
import { NavBar } from "../nav/NavBar";
import { ApplicationViews } from "../ApplicationViews";

export const Login = () => {
  const username = React.createRef();
  const password = React.createRef();
  const invalidDialog = React.createRef();
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    return fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if ("valid" in res && res.valid && "token" in res) {
          localStorage.setItem("wordplace_token", res.token);
          history.push("/");
        } else {
          invalidDialog.current.showModal();
        }
      });
  };

  return (
    <div class="wrapper fadeInDown">
      <dialog className="dialog dialog--auth" ref={invalidDialog}>
        <div>Username or password was not valid.</div>
        <button
          className="button--close"
          onClick={(e) => invalidDialog.current.close()}
        >
          Close
        </button>
      </dialog>
      <div id="formContent">
        {/* <!-- Tabs Titles --> */}
        <h2 class="active"> Sign In </h2>

        {/* <!-- Icon --> */}
        <div class="fadeIn first">
          <img
            src="http://danielzawadzki.com/codepen/01/icon.svg"
            id="icon"
            alt="User Icon"
          />
        </div>

        {/* <!-- Login Form --> */}
        <form onSubmit={handleLogin}>
          <input
            ref={username}
            required
            autoFocus
            type="text"
            id="login"
            class="fadeIn second"
            name="login"
            placeholder="username"
          ></input>
          <input
            ref={password}
            required
            autoFocus
            type="password"
            id="password"
            class="fadeIn third"
            name="password"
            placeholder="password"
          ></input>
          <input type="submit" class="fadeIn fourth" value="Log In"></input>
        </form>
        <div id="formFooter">
          <a class="underlineHover" href="/register">
            <Link to="/register">Not Registered Yet? Make an Account!</Link>
          </a>
        </div>
      </div>
    </div>
  );
};

// <main className="container--login">
//   <dialog className="dialog dialog--auth" ref={invalidDialog}>
//     <div>Username or password was not valid.</div>
//     <button
//       className="button--close"
//       onClick={(e) => invalidDialog.current.close()}
//     >
//       Close
//     </button>
//   </dialog>
//   <section>
//     <form className="form--login" onSubmit={handleLogin}>
//       <h1>WordPlace</h1>
//       <h2>Please sign in</h2>
//       <fieldset>
//         <label htmlFor="inputUsername">User name </label>
//         <input
//           ref={username}
//           type="username"
//           id="username"
//           className="form-control"
//           placeholder="Username"
//           required
//           autoFocus
//         />
//       </fieldset>
//       <fieldset>
//         <label htmlFor="inputPassword"> Password </label>
//         <input
//           ref={password}
//           type="password"
//           id="password"
//           className="form-control"
//           placeholder="Password"
//           required
//         />
//       </fieldset>
//       <fieldset
//         style={{
//           textAlign: "center",
//         }}
//       >
//         <button className="btn btn-1 btn-sep icon-send" type="submit">
//           Sign In
//         </button>
//       </fieldset>
//       <section className="link--register">
//         <Link to="/register">Not a member yet?</Link>
//       </section>
//     </form>
//   </section>
// </main>
