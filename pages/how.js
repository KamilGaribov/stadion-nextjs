import React, { Component } from "react";
import { NoteConsumer } from "../components/NoteProvider";
import Head from "next/head";
import styles from "../styles/how.module.css";
import Link from "next/link";
import HomePage from ".";

class HowPage extends Component {
  render() {
    return (
      <div id="container" className={styles.container}>
        <Head>
          <title>Nece isleyir?!</title>
          <script type="text/javascript" src="../static/how.js"></script>
        </Head>
        <NoteConsumer>
          {({ state }) => (
            <div className={styles.cont}>
              <button className={styles.test} onClick={()=> TEST.test()}>click</button>
              <p>Nece isleyir</p>
              <div className={styles.line}>
                <div className={styles.line2} id="line2"></div>
              </div>
            </div>
          )}
        </NoteConsumer>
      </div>
    );
  }
}
export default HowPage;
