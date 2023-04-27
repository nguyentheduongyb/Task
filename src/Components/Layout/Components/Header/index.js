/* eslint-disable jsx-a11y/anchor-is-valid */
import ClassNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DisplayContext } from "~/Components/Layout/DisplayHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const cx = ClassNames.bind(styles);

function Header() {
    const displayHeader = useContext(DisplayContext);
    // useEffect(() => {
    //     if (displayHeader.isLogin) {
    //         loginRef.current.style.display = "none";
    //         avatarRef.current.style.display = "block";
    //     }
    // });

    return (
        <header className={cx("wrapper")}>
            <div className="container d-flex justify-content-between align-items-center">
                <div className={cx("box-width")}>200 x 100</div>
                <div><FontAwesomeIcon className="me-3" icon={faUser} /><FontAwesomeIcon icon={faMagnifyingGlass} /></div>
            </div>
        </header>
    );
}

export default Header;
