import React, { Component } from "react";
import Head from "next/head";
import { NoteConsumer } from "../components/NoteProvider";
import styles from "../styles/test.module.css";

// function Test(props) {
//   return <div id="test" className={styles.container}>test div</div>;
// }

// export default Test;

class Test extends Component {
  render() {
    return (
      <div id="container" className={styles.container}>
        <Head>
          <title>test</title>
        </Head>
        <NoteConsumer>
          {({ state }) => (
            <div>test</div>
          )}
        </NoteConsumer>
      </div>
    );
  }
}
export default Test;