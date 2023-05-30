import React from "react";
import LoginHeader from "./LoginHeader";
import "../NewProject/login.css";

const LoginForm = () => {
  return (
    <>
      <LoginHeader />
      <div className="sub-header"></div>

      <div className="container-form bg-info">
        <div className="row bg-success">
          <div className="col-12 bg-primary d-flex">
            <div className="col-6">
              <p className="p-font px-4">
                Studies reveal that a staggering 70% of employees’ knowledge*
                comes from hands-on experience. Doing instead of memorizing
                helps employees think critically, apply skills in new ways, and
                learn from mistakes as they happen. Investing in
                experience-based project learning ensures technical teams
                acquire the skills needed to solve tomorrow’s problems. 
              </p>
            </div>
            <div className="col-6">
              <div className="container_2">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="first Name"
                    />
                    <div id="emailHelp" class="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Last Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Work Email"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Company Name"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="Job Title"
                    />
                  </div>
                  <div class="mb-3 form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="exampleCheck1"
                    />
                    <label class="form-check-label" for="exampleCheck1">
                      I’d like to receive occasional insights and information
                      from Udemy Business
                      <br/>

                      <p className="m-2">By signing up, you agree to our terms
                      and privacy policy. You agree that we can contact you
                      about Udemy and use data from third parties to personalize
                      your experience.</p> 
                    </label>
                  </div>
                  <button type="submit" class="btn btn_color">
                    Download
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
