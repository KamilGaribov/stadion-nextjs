import App, { Container } from "next/app";
import { useState, useEffect } from "react";
import Head from "next/head";
import NoteProvider from "../components/NoteProvider";
import styles1 from "../styles/app.css";
import styles from "../styles/index.module.css";
import UseScript from "../components/script.js";
import Link from "next/link";
import Router from "next/router";
// import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyApp extends App {
  componentDidMount() {
    if (CHECK.mobile()) {
      var x = document.querySelector(".outer-wrapper");
      var y = document.querySelector(".wrapper");
      document.documentElement.style.setProperty(
        "--mobile-windowHeight",
        `${window.innerHeight}px`
      );
      document.documentElement.style.setProperty(
        "--mobile-windowHeight-minus",
        `${-window.innerHeight}px`
      );
      x.classList.remove("outer-wrapper");
      y.classList.remove("wrapper");
      x.classList.add("outer-wrapper-mobile");
      x.classList.add("outer-wrapper-mobile2");
      y.classList.add("wrapper-mobile");
      var content = document.querySelector("#content");
      content.style.height = `${(window.innerHeight / 100) * 65}px`;
      // var container = document.querySelector("#container");
      // container.style.height = `${(window.innerHeight / 100) * 65}px`;
      // container.style.width = `${(window.innerWidth / 100) * 65}px`;
    }

    Router.events.on("routeChangeComplete", (url) => {
      if (CHECK.mobile()) {
        if (url == "/how") {
          document.querySelector(".outer-wrapper-mobile").style.overflowX =
            "hidden";
            PAGE.how()
          // document.querySelector(".wrapper-mobile").style.left = 0 + "%";
        } else if (url == "/account") {
          document.querySelector(".outer-wrapper-mobile").style.overflowX =
            "hidden";
            PAGE.account()
          // document.querySelector(".wrapper-mobile").style.left = -100 + "%";
        } else if (url == "/") {
          document.querySelector(".outer-wrapper-mobile").style.overflowX =
            "hidden";
          PAGE.home()
          // document.querySelector(".wrapper-mobile").style.left = -200 + "%";
          document.querySelector(".nav-logoname").classList.add("fadeIn");
          document.querySelector(".nav-bar").classList.add("fadeIn");
          document.querySelector(".nav-menu").classList.add("fadeOut");
        } else if (url == "/stadiums") {
          document.querySelector(".outer-wrapper-mobile").style.overflowX =
            "scroll";
          // document.querySelector(".wrapper-mobile").style.left = -300 + "%";
          PAGE.stadiums()
          SCROLL.page3();
        } else if (url.substring(0, 10) == "/stadiums/") {
          document.querySelector(".outer-wrapper-mobile").style.overflowX =
          "hidden";
          // document.querySelector(".wrapper-mobile").style.left = -300 + "%";
          var id = url.substring(url.lastIndexOf("/") + 1);
          
          PAGE.direct()
        }
      } else {
        if (url == "/how") {
          // document.querySelector(".wrapper").style.top = 0 + "%";
          PAGE.how()
        } else if (url == "/account") {
          // document.querySelector(".wrapper").style.top = -100 + "%";
          PAGE.account()
        } else if (url == "/") {
          // INTRO.intro()
          // document.querySelector(".wrapper").style.top = -200 + "%";
          document.querySelector(".nav-logoname").classList.add("fadeIn");
          document.querySelector(".nav-bar").classList.add("fadeIn");
          document.querySelector(".nav-menu").classList.add("fadeOut");
          PAGE.home()
        } else if (url == "/stadiums") {
          // document.querySelector(".wrapper").style.top = -300 + "%";
          // SCROLL.page3();
          PAGE.stadiums()
        } else if (url.substring(0, 10) == "/stadiums/") {
        // document.querySelector(".wrapper").style.top = -300 + "%";
        var id = url.substring(url.lastIndexOf("/") + 1);

        PAGE.setPage(4)

        PAGE.direct()
      }
      }
    });
    var path = window.location.pathname;
    if (CHECK.mobile()) {
      if (path == "/how") {
        PAGE.setPage(0)
        document.querySelector(".outer-wrapper-mobile").style.overflowX =
          "hidden";
        document.querySelector(".wrapper-mobile").style.left = 0 + "%";
      } else if (path == "/account") {
        PAGE.setPage(1)
        document.querySelector(".outer-wrapper-mobile").style.overflowX =
          "hidden";
        document.querySelector(".wrapper-mobile").style.left = -100 + "%";
      } else if (path == "/") {
        PAGE.setPage(2)
        document.querySelector(".outer-wrapper-mobile").style.overflowX =
          "hidden";
        document.querySelector(".wrapper-mobile").style.left = -200 + "%";
        document.querySelector(".nav-logoname").classList.add("fadeIn");
        document.querySelector(".nav-bar").classList.add("fadeIn");
        document.querySelector(".nav-menu").classList.add("fadeOut");
      } else if (path == "/stadiums") {
        PAGE.setPage(3)
        document.querySelector(".outer-wrapper-mobile").style.overflowX =
          "scroll";
        document.querySelector(".wrapper-mobile").style.left = -300 + "%";
        SCROLL.page3();
      } else if (path.substring(0, 10) == "/stadiums/") {
        PAGE.setPage(4)
        document.querySelector(".outer-wrapper-mobile").style.overflowX =
          "hidden";
        document.querySelector(".wrapper-mobile").style.left = -300 + "%";
        var id = path.substring(path.lastIndexOf("/") + 1);
        PAGE.direct()
        // PAGE.test()
        
      }
    } else {
      if (path == "/how") {
        PAGE.setPage(0)
        document.querySelector(".wrapper").style.top = 0 + "%";
      } else if (path == "/account") {
        PAGE.setPage(1)
        document.querySelector(".wrapper").style.top = -100 + "%";
      } else if (path == "/") {
        PAGE.setPage(2)
        INTRO.intro();
        document.querySelector(".wrapper").style.top = -200 + "%";
        document.querySelector(".nav-logoname").classList.add("fadeIn");
        document.querySelector(".nav-bar").classList.add("fadeIn");
        document.querySelector(".nav-menu").classList.add("fadeOut");
      } else if (path == "/stadiums") {
        PAGE.setPage(3)
        document.querySelector(".wrapper").style.top = -300 + "%";
        SCROLL.page3();
      } else if (path.substring(0, 10) == "/stadiums/") {
        PAGE.setPage(4)
        document.querySelector(".wrapper").style.top = -300 + "%";
        var id = path.substring(path.lastIndexOf("/") + 1);
        PAGE.direct()
        // PAGE.test()
        
      }
    }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,height=device-height initial-scale=1"
          ></meta>
          <script type="text/javascript" src="../static/test.js"></script>
          <script>
            {/* var cover = document.createElement("div")
            cover.setAttribute("id", "cover")
            document.querySelector("body").append(cover) */}
          </script>
          <title>Stadion.az</title>
        </Head>
        <nav>
          <Link href="/">
            <div
              className="nav-logo"
              onClick={(e) => {
                COPY.copy(e);
                // PAGE.home();
              }}
            >
              <div id="logo-img">
                <img src="../static/images/logo_s.png"></img>
              </div>
              <div id="logo-name" className="nav-logoname">
                <span>Stadion.az</span>
              </div>
            </div>
          </Link>
          <div className="nav-bar">
            <Link href="/how">
              <span
                onClick={(e) => {
                  COPY.copy(e);
                  // PAGE.how();
                }}
              >
                nece isleyir?
              </span>
            </Link>
            <Link href="/account">
              <span
                onClick={(e) => {
                  COPY.copy(e);
                  // PAGE.account();
                }}
              >
                hesab
              </span>
            </Link>
            <Link href="/stadiums">
              <span
                onClick={(e) => {
                  COPY.copy(e);
                  // PAGE.stadiums();
                }}
              >
                stadionlar
              </span>
            </Link>
          </div>
          <div className="nav-menu">
            <img src="../static/icons/hamburger-menu.png"></img>
          </div>
        </nav>
        <div className="nav" onScroll={() => SCROLL.mobile()}>
          <Link href="/how">
            <div
              onClick={(e) => {
                COPY.copy(e);
                // PAGE.how();
              }}
            >
              <div>
                <img src="../static/icons/icons8-question-mark-96.png"></img>
              </div>
              <div>
                <span>nece isleyir?</span>
              </div>
            </div>
          </Link>
          <Link href="/account">
            <div
              onClick={(e) => {
                COPY.copy(e);
                // PAGE.account();
              }}
            >
              <div>
                <img src="../static/icons/icons8-customer-64.png"></img>
              </div>
              <div>
                <span>hesab</span>
              </div>
            </div>
          </Link>
          <Link href="/stadiums">
            <div
              onClick={(e) => {
                COPY.copy(e);
                // PAGE.stadiums();
              }}
            >
              <div>
                <img src="../static/icons/icons8-stadium-50.png"></img>
              </div>
              <div>
                <span>stadionlar</span>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="outer-wrapper"
          onScroll={() => SCROLL.scroll()}
          onTouchMove={() => SCROLL.scroll()}
        >
          <div className="wrapper" id="wrapper">
            <div id="main">
              <div className="how">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
              <div id="grass">
                <div className="grass">1</div>
                <div className="grass">2</div>
                <div className="grass">3</div>
                <div className="grass">4</div>
                {/* <div className="grass">1</div>
                <div className="grass">2</div>
                <div className="grass">3</div>
                <div className="grass">4</div> */}
              </div>
              <div id="home">
                <div id="home-text">
                  <div>axtar</div>
                  <div>Rezervasiya et</div>
                  <div>OYNA!</div>
                </div>
                <div id="store-img">
                  <img src="../static/images/appstore.png" />
                </div>
              </div>
            </div>
            <div id="content">
              <NoteProvider stars={this.props.stars}>
                <Component
                  stars={this.props.stars}
                  query={this.props.query}
                  user={this.props.user}
                  // text={this.props.text}
                />
              </NoteProvider>
            </div>
            <div id="content2"></div>
          </div>
        </div>
        {/* <div id="modal"></div> */}
        {/* <div id="cover"></div> */}
      </div>
    );
  }
}

export default MyApp;

MyApp.getInitialProps = async (ctx) => {
  const res = await fetch("http://192.168.31.51:8000/api/stadion/");
  const json = await res.json();

  const res1 = await fetch("http://192.168.31.51:8000/api/user/");
  const json1 = await res1.json();
  if (ctx.query) {
    var query = ctx.query;
  } else {
    var query = "bosh";
  }
  return { stars: json, query: ctx.query, user: json1 };
};

// export async function getServerSideProps(context) {
//   const res = await fetch("http://localhost:8000/api/stadion/")
//   const data = await res.json()
//   return {
//     props: {
//       text: "sa",
//       context: context
//     },
//   }
// }