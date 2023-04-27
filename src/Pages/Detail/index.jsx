import ClassNames from "classnames/bind";
import styles from "./Detail.module.scss";
import { useState, useContext } from "react";
import { DisplayContext } from "~/Components/Layout/DisplayHeader";

import { Link } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield, faDownload, faCreditCard, faStar, faStarHalfStroke, faCircleCheck, faEuroSign, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const cx = ClassNames.bind(styles);

function Detail() {

    const context = useContext(DisplayContext)
    console.log(context);
    return (
        <div className={cx("w-100", "root")}>
            <header className={cx("header")}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className={cx("box-width")}>200 x 100</div>
                    <div><FontAwesomeIcon className="me-3" icon={faUser} /><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                </div>
            </header>
            <div className="w-100 d-flex justify-content-center">
                <div className={cx("content")}>
                    <div className="col-lg-6 col-12">
                        <div className={cx("content-left")}>
                            <div className={cx("content-left-heading")}><FontAwesomeIcon className="me-3" icon={faShield} />Secure & TLS Encrypted Verification</div>
                            <div className={cx("membership")}>
                                <h3 className="d-flex justify-content-between"><span>100% FREE MEMBERSHIP</span><span className="text-success"><FontAwesomeIcon className="me-2" icon={faEuroSign} />0.00</span></h3>
                                <h5 className={cx("mb-3 mt-3", "text-thin")}>Verify Your Account and <span>Get Access For Free</span></h5>
                                <h6 className={cx("vote")}><FontAwesomeIcon className="text-warning" icon={faStar} /><FontAwesomeIcon className="text-warning" icon={faStar} /><FontAwesomeIcon className="text-warning" icon={faStar} /><FontAwesomeIcon className="text-warning" icon={faStar} /><FontAwesomeIcon className="text-warning" icon={faStarHalfStroke} /><span className="ms-3">Based on 194.138 user reviews</span></h6>
                            </div>
                            <ul className={cx("list-action")}>
                                <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">Download the lastest apps</span></li>
                                <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">Watch popular movie</span></li>
                                <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">Learn from eBooks and Courses</span></li>
                                <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">And more!</span></li>
                            </ul>
                            <div className={cx("wrapper")}>
                                <form>
                                    <div class="form-group mb-4">
                                        <label className="mb-2" for="exampleInputEmail1">Email address</label>
                                        <input type="email" value={context.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    </div>
                                    <div class="form-group mb-4">
                                        <label className="mb-2" for="fullname">Full Name</label>
                                        <input type="text" class="form-control" id="fullname" />
                                    </div>
                                    <div class="form-group mb-4">
                                        <label className="mb-2" for="creaditcard">Credit Card Number</label>
                                        <input type="text" class="form-control" id="creaditcard" />
                                    </div>
                                    <div className="w-100">
                                        <div class="d-flex justify-content-between">
                                            <div class="form-group mb-4 col-md-4 col-4">
                                                <label className="mb-2" for="expmonth">Exp. month</label>
                                                <select id="expmonth" className={cx("appearance", "form-control")}>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                            <div class="form-group mb-4 col-md-3 col-3">
                                                <label className="mb-2" for="expyear">Exp. year</label>

                                                <select id="expyear" className={cx("appearance", "form-control")}>
                                                    <option selected>Choose...</option>
                                                    <option>...</option>
                                                </select>
                                            </div>
                                            <div class="form-group mb-4 col-md-4 col-4">
                                                <label className="mb-2" for="ccv">CCV</label>
                                                <div className={cx("input-box")}>
                                                    <input type="text" />
                                                    <FontAwesomeIcon className={cx("icon-in-box")} icon={faCreditCard} />
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className={cx("box-continue", "mt-5 mb-4 d-flex justify-content-center align-items-center col-lg-12")}>
                                        <FontAwesomeIcon className="me-5" icon={faDownload} />
                                        <span>GET ACCESS</span>
                                    </div>
                                </form>
                                <p className={cx("by-click", "mt-3")}>By click on "Continue" you agree with the <span className="text-success">Terms of Service</span> and the <span className="text-success">Privacy Policy</span>.</p>

                            </div>
                        </div>
                    </div>
                    <div className={cx("col-lg-5", "content-wrapper")}>
                        <div className={cx("content-right")}>
                            <div className="wrapper">
                                <div className="text-center">
                                    <img className={cx("w-80")} src="https://www.kyubit.com/Images/Dashboards/Dashboard-Table-1.png" alt="ccc" />
                                </div>
                                <div className="mt-5">
                                    <h3>Your membership will give you access to</h3>
                                    <ul>
                                        <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">Download the lastest apps</span></li>
                                        <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">Watch popular movie</span></li>
                                        <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">Learn from eBooks and Courses</span></li>
                                        <li><FontAwesomeIcon className="text-success mt-4" icon={faCircleCheck} /><span className="ms-4">And more!</span></li>
                                    </ul>
                                </div>
                                <div className="mt-5">
                                    <h3>WHY IS MY CREDIT CARD REQUIRED?</h3>
                                    <p className={cx("h4 mt-3 text-secondary")}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>



    );
}
export default Detail;
