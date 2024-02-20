import React, { Component } from 'react'
import SignUp from '../components/SignUp'

export default class SignUpPage extends Component {
  render() {
    return (
  <main className="main" id="top">
  <div className="container-fluid">
    <div className="row min-vh-100 flex-center g-0">
      <div className="col-lg-8 col-xxl-5 py-3 position-relative"><img className="bg-auth-circle-shape" src="../../../assets/img/icons/spot-illustrations/bg-shape.png" alt="true" width={250} /><img className="bg-auth-circle-shape-2" src="../../../assets/img/icons/spot-illustrations/shape-1.png" alt="true" width={150} />
        <div className="card overflow-hidden z-1">
          <div className="card-body p-0">
            <div className="row g-0 h-100">
              <div className="col-md-5 text-center bg-card-gradient">
                <div className="position-relative p-4 pt-md-5 pb-md-7" data-bs-theme="light">
                  <div className="bg-holder bg-auth-card-shape" style={{backgroundImage: 'url(../../../assets/img/icons/spot-illustrations/half-circle.png)'}} />{/*/.bg-holder*/}
                  <div className="z-1 position-relative"><a className="link-light mb-4 font-sans-serif fs-5 d-inline-block fw-bolder" href="../../../index.html">falcon</a>
                    <p className="opacity-75 text-white">With the power of Falcon, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
                  </div>
                </div>
                <div className="mt-3 mb-4 mt-md-4 mb-md-5" data-bs-theme="light">
                  <p className="pt-3 text-white">Have an account?<br /><a className="btn btn-outline-light mt-2 px-4" href="login.html">Log In</a></p>
                </div>
              </div>
              <div className="col-md-7 d-flex flex-center">
              <SignUp/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>

    )
  }
}
