import React, { Component } from "react";
import { NoteConsumer } from "../../components/NoteProvider";
import Head from "next/head";
import styles from "../../styles/stadiums.module.css";
import Link from "next/link";
import HomePage from "..";
import { Input } from "../../components/input";
import { SearchForm } from "../../components/form";
import Card from "../../components/card";
import { useRouter } from "next/router";
import { GetServerSideProps, getInitialProps } from "next";
import "isomorphic-unfetch";
import fetch from "isomorphic-unfetch";

// class StadiumsPage extends Component {
function StadiumsPage({ stars, user }) {
  async function api() {
    const res = await fetch("http://localhost:8000/api/stadion/");
    const json = await res.json();
    return json;
  }
  var stadiums = [
    {
      id: 0,
      name: "Ruslan 93",
      adress: "Baki, Nizami",
      price: "60",
      rating: 4,
    },
    {
      id: 1,
      name: "Serhedci",
      adress: "Baki, Xetai",
      price: "50",
      rating: 3,
    },
    {
      id: 2,
      name: "Azfar",
      adress: "Baki, Yasamal",
      price: "70",
      rating: 5,
    },
  ];
  const handleForm = () => {
    alert("sa");
  };
  var data = stars;
  const makeList = data.slice(0, 2).map((item, i) => {
    return (
      // <div className={styles.card_list} id="card_list">
      <Card
        key={item.id}
        i={item}
        avatar={`../../static/images/stadion/${i}.jpg`}
      />
      // </div>
    );
  });
  const makeList3 =
    typeof result != "undefined"
      ? result.map((item, i) => {
          return (
            // <div className={styles.card_list} id="card_list">
            <Card
              key={item.id}
              i={item}
              avatar={`../../static/images/stadion/${i}.jpg`}
            />
            // </div>
          );
        })
      : null;
  const makeList2 = (result) => {
    data = result;
  };
  const test = (result) => {
    data = result;
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Stadionlar</title>
      </Head>
      <NoteConsumer>
        {({ state }) => (
          <div className={styles.container_inner} id="stadiums_container_inner">
            <div className={styles.form}>
              <SearchForm state={state} />
            </div>
            <div className={styles.card_list} id="card_list">
              {state.data.slice(0, 8).map((item, i) => {
                return (
                  <Card
                    key={item.id}
                    i={item}
                    avatar={`../../static/images/stadion/${i}.jpg`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </NoteConsumer>
      <style jsx>{`
        // button {
        //   font-size: 18px;
        //   color: white;
        //   z-index: 1;
        //   height: 50px;
        //   background: #19b853;
        //   outline: none;
        //   border: none;
        // }
        // button:hover{
        //   background: white;
        //   color: #202124;
        //   border: 1px solid #19b853;
        // }
      `}</style>
    </div>
  );
  // }
}

export default StadiumsPage;
