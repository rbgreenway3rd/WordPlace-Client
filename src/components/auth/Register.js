import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Auth.css";

export const Register = () => {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const verifyPassword = useRef();
  const passwordDialog = useRef();
  const invalidDialog = React.createRef();
  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password.current.value === verifyPassword.current.value) {
      const newUser = {
        username: username.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        email: email.current.value,
        password: password.current.value,
        created_on: new Date().toISOString().slice(0, 10),
        active: 1,
      };

      return fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(typeof res);
          if ("token" in res) {
            localStorage.setItem("wordplace_token", res.token);
            history.push("/");
          }
        });
    } else {
      passwordDialog.current.showModal();
    }
  };

  return (
    <main style={{ textAlign: "center" }}>
      <dialog className="dialog dialog--password" ref={passwordDialog}>
        <div>Passwords do not match</div>
        <button
          className="button--close"
          onClick={(e) => passwordDialog.current.close()}
        >
          Close
        </button>
      </dialog>
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
          <h2 class="active"> Register </h2>

          {/* <!-- Icon --> */}
          <div class="fadeIn first">
            <img
              src="http://danielzawadzki.com/codepen/01/icon.svg"
              id="icon"
              alt="User Icon"
            />
          </div>

          {/* <!-- Login Form --> */}
          <form onSubmit={handleRegister}>
            <input
              ref={firstName}
              type="text"
              name="first_name"
              className="form-control"
              class="fadeIn second"
              placeholder="First name"
              required
              autoFocus
            />

            <input
              ref={lastName}
              type="text"
              name="last_name"
              className="form-control"
              class="fadeIn second"
              placeholder="Last name"
              required
            />

            <input
              ref={username}
              type="text"
              name="username"
              className="form-control"
              class="fadeIn third"
              placeholder="Choose a user name"
              required
            />

            <input
              ref={email}
              type="text"
              name="email"
              className="form-control"
              class="fadeIn third"
              placeholder="Email address"
              required
            />

            <input
              ref={password}
              type="text"
              name="password"
              className="form-control"
              class="fadeIn fourth"
              placeholder="Password"
              required
            />

            <input
              ref={verifyPassword}
              type="text"
              name="verifyPassword"
              className="form-control"
              class="fadeIn fourth"
              placeholder="Verify password"
              required
            />
            <input type="submit" class="fadeIn fourth" value="Register"></input>
          </form>
          <div id="formFooter">
            <a class="underlineHover" href="/register">
              <Link to="/login">Already Registered?</Link>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

{
  /* <div class="wrapper fadeInDown">
        <form className="form--login" onSubmit={handleRegister}>
          <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
          <fieldset>
            <label htmlFor="first_name"> First Name </label>
            <input
              ref={firstName}
              type="text"
              name="first_name"
              className="form-control"
              placeholder="First name"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <label htmlFor="last_name"> Last Name </label>
            <input
              ref={lastName}
              type="text"
              name="last_name"
              className="form-control"
              placeholder="Last name"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="username"> User Name </label>
            <input
              ref={username}
              type="text"
              name="username"
              className="form-control"
              placeholder="Choose a user name"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="inputEmail"> Email address </label>
            <input
              ref={email}
              type="email"
              name="email"
              className="form-control"
              placeholder="Email address"
              required
            />
          </fieldset>

          <fieldset>
            <label htmlFor="inputPassword"> Password </label>
            <input
              ref={password}
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              required
            />
          </fieldset>
          <fieldset>
            <label htmlFor="verifyPassword"> Verify Password: </label>
            <input
              ref={verifyPassword}
              type="password"
              name="verifyPassword"
              className="form-control"
              placeholder="Verify password"
              required
            />
          </fieldset>

          <fieldset
            style={{
              textAlign: "center",
            }}
          >
            <button className="btn btn-1 btn-sep icon-send" type="submit">
              Register
            </button>
          </fieldset>
        </form>
        <section className="link--register">
          Already registered? <Link to="/login">Login</Link>
        </section>
      </div>
    </main>
  );
}; */
}
