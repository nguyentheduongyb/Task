import React from "react";
import ReactDOM from "react-dom/client";
import App from "~/App.js";
import GlobalStyles from "./Components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { DisplayProvider } from "~/Components/Layout/DisplayHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <DisplayProvider>
            <GlobalStyles>
                <App></App>
            </GlobalStyles>
        </DisplayProvider>
    </Router>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
