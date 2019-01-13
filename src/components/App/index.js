import React, {Component } from "react";
import styles from "./index.css";

class App extends Component {
    render() {
        console.log(styles);
        
        return (
            <div>
                <h1 className={styles.title}>Hello world</h1>
            </div>
        )
    }
}

export default App;