import React, { Component } from "react";
import { NoteConsumer } from "../components/NoteProvider";
import Head from "next/head";
import styles from "../styles/account.module.css";
import Link from "next/link";
import HomePage from ".";

class AccountPage extends Component {
  render() {
    return (
      <div id="container" className={styles.container}>
        <Head>
          <title>Hesab</title>
          {/* <script type="text/javascript" src="../static/test.js"></script> */}
        </Head>
        <NoteConsumer>
          {({ state }) => (
            <div>Hesab</div>
          )}
        </NoteConsumer>
      </div>
    );
  }
}
export default AccountPage;
