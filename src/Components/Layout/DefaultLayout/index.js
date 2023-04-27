import ClassNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "~/Components/Layout/Components/Header";
const cx = ClassNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx("wrapper")}>
            {children}
        </div>
    );
}

export default DefaultLayout;
