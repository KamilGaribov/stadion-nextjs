import React, { Component } from "react";
import { NoteConsumer } from "../components/NoteProvider";
import Head from "next/head";
import styles from "../styles/index.module.css";
import Link from "next/link";

class HomePage extends Component {
  render() {
    return (
      // <div id="container" className={styles.container}>
      //   <NoteConsumer>
      //     {({ state }) => (
      //       // <div></div>
      //     )}
      //   </NoteConsumer>
      // </div>
      <div></div>
    );
  }
}
export default HomePage;

// HomePage.getInitialProps = async (props) => {
//   const ctx = props;
//   return { ctx };
// };
