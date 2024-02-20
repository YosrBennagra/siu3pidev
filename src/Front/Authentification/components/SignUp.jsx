import React, { Component } from 'react'

export default class SignUp extends Component {
    render() {
        return (
            <div className="p-4 p-md-5 flex-grow-1">
                <h3>Register</h3>
                <form>
                    <div className="mb-3"><label className="form-label" htmlFor="card-name">Name</label><input className="form-control" type="text" autoComplete="on" id="card-name" /></div>
                    <div className="mb-3"><label className="form-label" htmlFor="card-email">Email address</label><input className="form-control" type="email" autoComplete="on" id="card-email" /></div>
                    <div className="row gx-2">
                        <div className="mb-3 col-sm-6"><label className="form-label" htmlFor="card-password">Password</label><input className="form-control" type="password" autoComplete="on" id="card-password" /></div>
                        <div className="mb-3 col-sm-6"><label className="form-label" htmlFor="card-confirm-password">Confirm Password</label><input className="form-control" type="password" autoComplete="on" id="card-confirm-password" /></div>
                    </div>
                    <div className="form-check"><input className="form-check-input" type="checkbox" id="card-register-checkbox" /><label className="form-label" htmlFor="card-register-checkbox">I accept the <a href="#!">terms </a>and <a className="white-space-nowrap" href="#!">privacy policy</a></label></div>
                    <div className="mb-3"><button className="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button></div>
                </form>
                <div className="position-relative mt-4">
                    <hr />
                    <div className="divider-content-center">or register with</div>
                </div>
                <div className="row g-2 mt-2">
                    <div className="col-sm-6">
                        <a className="btn btn-outline-google-plus btn-sm d-block w-100" href="#">
                            <svg className="svg-inline--fa fa-google-plus-g fa-w-20 me-2" data-fa-transform="grow-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-g" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg style={{ transformOrigin: '0.625em 0.5em' }}><g transform="translate(320 256)"><g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)"><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" transform="translate(-320 -256)" /></g></g></svg>{/* <span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com */} google</a></div>
                    <div className="col-sm-6">
                        <a className="btn btn-outline-facebook btn-sm d-block w-100" href="#">
                            <svg className="svg-inline--fa fa-facebook-square fa-w-14 me-2" data-fa-transform="grow-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg style={{ transformOrigin: '0.4375em 0.5em' }}><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" transform="translate(-224 -256)" /></g></g></svg>{/* <span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com */} facebook</a></div>
                </div>
            </div>
        )
    }
}
