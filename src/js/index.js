//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.min.css';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Timer from "./component/home.jsx";

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Timer/>);

