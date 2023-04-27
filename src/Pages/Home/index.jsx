import ClassNames from "classnames/bind";
import styles from "./Home.module.scss";
import { useState, useContext } from "react";
import { DisplayContext } from "~/Components/Layout/DisplayHeader";

import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faMagnifyingGlass, faCircle, faGlobe, faShield, faCheck, faEnvelope, faUser, faMobileButton } from "@fortawesome/free-solid-svg-icons";
const cx = ClassNames.bind(styles);

function Home() {

    const context = useContext(DisplayContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className={cx("w-100")}>
            <header className={cx("wrapper", "mb-5")}>
                <div className="container d-flex justify-content-between align-items-center">
                    <div className={cx("box-width")}>200 x 100</div>
                    <div><FontAwesomeIcon className="me-3" icon={faUser} /><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
                </div>
            </header>
            <div className="container">
                <div className={cx("d-flex justify-content-center")}>
                    <h5 className={cx("p-e-5 p-s-5 mt-5 mb-5 text-center", "w-70", "introduce-head")}>Your storage in the cloud %TB of Clould Storage included fpr PC & Smartphone. Save space on your device by storing your documents in the Cloud Start now and enjoy your Free Trial.</h5>
                </div>
                <div className={cx("moblie-activation")}><FontAwesomeIcon className="me-3" icon={faMobileButton} /><h1><span className="text-thin">Mobile</span> Activation</h1></div>
                <div className="d-flex justify-content-center">
                    <div className={cx("col-lg-2 align-items-center", "activation")}>
                        <div className="col-lg-3 pe-3"><img className="w-100" src="https://www.freeiconspng.com/thumbs/global-icon/global-icon-13.png" alt="" /></div>
                        <div className="col-lg-9">
                            <h2>Online</h2>
                            <h3>Activation</h3>
                        </div>
                    </div>
                    <div className={cx("d-flex flex-column col-lg-2 col-12 align-items-center mt-5", "continue")}>
                        <div className={cx("box-continue", "col-lg-10 col-11")} onClick={handleShow}>
                            <FontAwesomeIcon className="me-5" icon={faDownload} />
                            <span>Continue</span>
                        </div>
                        <div className="d-flex align-items-center mt-3"><FontAwesomeIcon className="text-success me-3" icon={faCircle} /><h5 className="">High Speed & Unlimited</h5></div>
                    </div>
                </div>
            </div>
            <div className={cx("commit")}>
                <div className={cx("col-lg-4", "commit-item")}>
                    <FontAwesomeIcon className="h1" icon={faGlobe} />
                    <h4 className={cx("text-thin", "mt-3 ")}>Global</h4>
                    <p>Access</p>
                </div>
                <div className={cx("col-lg-4 col-6", "commit-item")}>
                    <FontAwesomeIcon className="h1" icon={faDownload} />
                    <h4 className={cx("mt-3 ")}>Unlimited Speed</h4>
                    <p className={cx("text-thin")}>5TB Of Cloud Space</p>
                </div>
                <div className={cx("col-lg-4 col-6", "commit-item")}>
                    <FontAwesomeIcon icon={faShield} />
                    <h4 className={cx("mt-3 ")}>100% Secure</h4>
                    <p className={cx("text-thin")}>Connection</p>
                </div>
            </div>
            <div className="container d-flex flex-column align-items-center text-center">
                <div className={cx("step")}>
                    <h3 className="mt-5">Get Access in Less than a Minute</h3>
                    <div className="d-flex align-items-center mt-5">
                        <div className="d-flex align-items-center"><div className={cx("index")}>1</div>Create Account</div>
                        <div className={cx("line")}></div>
                        <div className="d-flex align-items-center"><div className={cx("index")}>2</div>Verify Account</div>
                        <div className={cx("line")}></div>

                        <div className="d-flex align-items-center"><div className={cx("index")}>3</div>Access Granted</div>
                    </div>

                </div>
                <div className={cx("box-continue", "mt-5 col-lg-4 col-11")} onClick={handleShow}>
                    <span>Get Started Now</span>
                </div>
                <div className="d-flex align-items-center mt-4"><FontAwesomeIcon className="text-success me-3" icon={faCircle} /><h3 className="">High Speed & Unlimited</h3></div>
                <h1 className={cx("mt-5 mb-5", "text-thin")}>Find out why love people our website</h1>
                <div className="mb-5">
                    <div className="mb-3 d-flex align-items-center"><FontAwesomeIcon icon={faCheck} /><span className="ms-3">Global Access: from anywhere and in any device</span></div>
                    <div className="mb-3 d-flex align-items-center"><FontAwesomeIcon icon={faCheck} /><span className="ms-3">Your own space in the cloud: 5TB CLoud Storage space includes</span></div>
                    <div className="mb-3 d-flex align-items-center"><FontAwesomeIcon icon={faCheck} /><span className="ms-3">UNlimited Speed: no speed or transfer limits</span></div>
                </div>
                <p className={cx("text-des")}>Offer and Billing Terms: You can try our service for 5 days at 0.00€. If you are not satisfied or you do not want to keep your membership, contact us to cancel. If you do not cancel, at the end of the 5 days trial period, the service will automatically continue on a monthly basis and the service will automatically charge the credit card you have provided the applicable monthly 49.95€ fee stated at the beginning of each such period, for as long as you continue the service. You can cancel your membership at any time</p>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="d-flex flex-wrap">
                    <div className={cx("col-lg-6 col-12", "modal-left")}>
                        <div className="text-center"><span className={cx("text-thin")}>Get Access to your content</span><br></br>3 Easy Steps</div>
                        <div className={cx("mt-3", "modal-step")}>
                            <div className="d-flex align-items-center"><div className={cx("index-1")}>1</div><h4>Create Account</h4></div>
                            <div className={cx("line1")}></div>
                            <div className="d-flex align-items-center"><div className={cx("index")}>2</div><h6>Verify your Account</h6></div>
                            <div className={cx("line1")}></div>
                            <div className="d-flex align-items-center pb-3"><div className={cx("index")}>3</div><h6>Get Access to your content</h6></div>
                        </div>
                    </div>
                    <div className={cx("col-lg-6 col-12", "modal-right")}>
                        <h4>Create your Free Account</h4>
                        <Form method="POST" action="/detail" className="mt-3" onSubmit={context.setDataForm} >

                            {/* <Form.Control type="email" name="email" placeholder="Fill in your email" /> */}
                            <div id="form-custom" className={cx("form-custom")}>
                                <FontAwesomeIcon className="me-2" icon={faEnvelope} />
                                <input id="validationServer03" name="email" type="email" placeholder="Fill in your email" />
                            </div>
                            <Button className={cx("box-continue", "text-center mt-3 col-lg-12")} type="submit">
                                Continue
                            </Button>
                        </Form>
                        <p className={cx("by-click", "mt-3")}>By click on "Continue" you agree with the Terms & Conditions and the Privacy Policy.</p>
                    </div>

                </div>

            </Modal>
        </div >


    );
}
export default Home;
