import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { UserAuth } from '../context/AuthContext';

const Signupcompo = () => {
  const emailRef = useRef();
  const passwordref = useRef();
  const { signup } = UserAuth();
  const navigate = useNavigate();
  const formsubmit = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordref.current.value;

    try {
      await signup(email, password);
    } catch (err) {
      console.log(err);
    }

    emailRef.current.value = '';
    passwordref.current.value = '';
    return navigate('/');
  };
  return (
    <>
      <div className="signup">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="sign in"
          className="signup_img"
        />

        <div className="signup_form">
          <div className="signup_form_box">
            <h1 className="signup_form_box_h1">SIGN UP</h1>

            <form onSubmit={formsubmit}>
              <input
                required
                className="signup_form_box_input"
                type="email"
                name="email"
                placeholder="Email Address"
                ref={emailRef}
              />
              <input
                required
                className="signup_form_box_input"
                type="password"
                name="password"
                placeholder=" Password"
                ref={passwordref}
              />
              <button type="submit" className="signup_form_box_btn">
                SIGNUP
              </button>

              <div className="signup_form_box_detail">
                <p className="signup_form_box_detail_flex">
                  <input type="checkbox" />
                  <span>REMEMBER ME?</span>
                </p>
                <p className="signup_form_box_detail_flex">NEED HELP?</p>
              </div>

              <p className="signup_form_box_signin">
                ALREADY SUBSCRIBED{' '}
                <span className="signup_form_box_signin_span">
                  <Link className="signup_form_box_signin_span" to="/signin">
                    SIGNIN.
                  </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signupcompo;
