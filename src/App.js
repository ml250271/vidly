import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

class App extends React.Component {
    render() {
        return (
            <main className="container">
                <Movies />
            </main>
        );
    }
}

export default App;
