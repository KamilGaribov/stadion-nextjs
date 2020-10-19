import React, { Component } from "react";
import { NoteConsumer } from "../../components/NoteProvider";
import Head from "next/head";
import styles from "../../styles/direct.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Router from "next/router";
import { Button } from "../../components/button";

// };

const Direct = (stars, data, query) => {
  const router = useRouter();
  const { id } = router.query;
  const post = () => {
    for (let i = 0; i < stars.stars.length; i++) {
      if (stars.stars[i].id == id) {
        return stars.stars[i];
      }
    }
  };
  const i = post();
  const width = i.images.length + "00%";
  const width2 = 100 / i.images.length + "%";
  const widthMobile = i.images.length * 90 + "px";
  const widthFB = i.feedback.length + "00%";
  const widthFB2 = 100 / i.feedback.length + "%";

  const load = () => {
    var content = document.querySelector("#content #direct123");
    document.querySelector("#stadium").append(content);
    document.querySelector("#stadium").style.display = "block";
  };

  const click = (e) => {
    alert("s");
    if (e.target != document.querySelector("#container")) {
      Router.back();
      alert("s");
    }
  };
  const close = () => {
    router.back();
  };
  const schedule = () => {
    if (document.querySelector("#info").offsetLeft == 0) {
      document.querySelector("#info").style.left =
        document.querySelector("#images").offsetWidth + "px";
      setTimeout(function () {
        document.querySelector("#images").style.zIndex = "0";
        document.querySelector("#table").style.zIndex = "1";
        // document.querySelector("#cedvel").style.opacity = "0"
        // document.querySelector("#cedvel").innerHTML = '<img src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"/> cedvel'
        // document.querySelector("#cedvel").style.opacity = "1"
      }, 250);
    } else {
      document.querySelector("#info").style.left = 0 + "px";
      setTimeout(function () {
        document.querySelector("#images").style.zIndex = "1";
        document.querySelector("#table").style.zIndex = "0";
        // document.querySelector("#cedvel").style.opacity = "0"
        // document.querySelector("#cedvel").innerHTML = '<img src="https://img.icons8.com/metro/26/000000/calendar-12.png"/> cedvel'
        // document.querySelector("#cedvel").style.opacity = "1"
      }, 250);
    }
  };
  const beCustomer = () => {
    let div = document.createElement("div");
    div.setAttribute("id", "modal");
    let beCustomerDiv =
      "<div id='beCustomer'>" +
      '<div id="textareaEl"' +
      'onclick="FUNC.labelFocus()"'+
      // 'onclick="document.querySelector'+
      // '("'+
      // '#textareaEl label").classList.add(' +
      // '"labelFocus")'+
      '">' +
      "<div id='textareaicon'><img src='../../static/icons/cafe.png'/></div>" +
      '<label for="w3review">Ozunu teqdim et</label>' +
      '<textarea id="w3review" name="w3review" rows="4" cols="50" maxlength="100">' +
      "</textarea>" +
      "</div>"
      "</div>";
    div.innerHTML = beCustomerDiv;
    document.body.appendChild(div);
  };
  const changeTab = (e) => {
    var tab = document.querySelectorAll("#tab div");
    var tabs = Array.prototype.slice.call(tab);
    var index = tabs.indexOf(e.target);
    document.querySelector("#tab-line").style.left = index * 25 + "%";
    document.querySelector("#content-mobile").style.left = -index * 100 + "%";
  };
  var current = 1;
  const slideLeft = () => {
    if (current == 1) {
      return;
    }
    document.querySelector("#slider").style.left = -((current - 2) * 100) + "%";
    current--;
    document.querySelector("#current_img").innerHTML = current;
  };
  const slideRight = () => {
    if (current == i.images.length) {
      current = 0;
    }
    document.querySelector("#slider").style.left = -current * 100 + "%";
    current++;
    document.querySelector("#current_img").innerHTML = current;
  };
  const slideLeftMobile = () => {
    if (current == 1) {
      return;
    }
    document.querySelector("#content-mobile #slider").style.left =
      -((current - 2) * 100) + "%";
    current--;
  };
  const slideRightMobile = () => {
    if (current == i.images.length) {
      current = 0;
    }
    document.querySelector("#content-mobile #slider").style.left =
      -current * 100 + "%";
    current++;
  };
  const sliderSelect = (e) => {
    var img = document.querySelectorAll("#slider_mobile div img");
    var imgs = Array.prototype.slice.call(img);
    var index = imgs.indexOf(e.target);
    document.querySelector("#content-mobile #slider").style.left =
      -index * 100 + "%";
    current = index + 1;
  };
  var currentFB = 1;
  const feedbackLeft = () => {
    if (currentFB == 1) {
      return;
    }
    document.querySelector("#feedback_slider").style.left =
      -((currentFB - 2) * 100) + "%";
    currentFB--;
    // document.querySelector("#current_img").innerHTML = currentFB;
  };
  const feedbackRight = () => {
    if (currentFB == i.feedback.length) {
      currentFB = 0;
    }
    document.querySelector("#feedback_slider").style.left =
      -currentFB * 100 + "%";
    currentFB++;
    // document.querySelector("#current_img").innerHTML = currentFB;
  };
  var startX = "";
  const swipeSliderStart = (e) => {
    startX = e.touches[0].clientX;
    var startY = e.touches[0].clientY;
    console.log(startX, startY);
  };
  const swipeSlider = (e) => {
    var x = e.touches[0].clientX;
    var y = e.touches[0].clientY;
    console.log(x, y);
    if (startX > x) {
      let contentWidth = i.images.length * 90;
      let containerWidth = document.querySelector("#tab").offsetWidth;
      let left = document.querySelector("#slider_mobile").offsetLeft;
      if (100 < contentWidth - containerWidth - -left) {
        document.querySelector("#slider_mobile").style.left = left - 100 + "px";
      } else {
        document.querySelector("#slider_mobile").style.left =
          -(contentWidth - containerWidth) + "px";
      }
    } else {
      let contentWidth = i.images.length * 90;
      let containerWidth = document.querySelector("#tab").offsetWidth;
      let left = document.querySelector("#slider_mobile").offsetLeft;
      if (100 < contentWidth - containerWidth - -left) {
        document.querySelector("#slider_mobile").style.left = left + 100 + "px";
      } else {
        document.querySelector("#slider_mobile").style.left =
          -(contentWidth - containerWidth) + "px";
      }
    }
  };

  return (
    <NoteConsumer>
      {({ state }) => (
        <div id="direct1" className={styles.container}>
          <Head>
            <title>{i.name}</title>
            <script type="text/javascript" src="../static/test.js"></script>
          </Head>
          <div id="direct2" className={styles.container_inner}>
            <div className={styles.info} id="info">
              <div className={styles.info_title}>
                <div className={styles.name}>{i.name}</div>
                <div className={styles.rating}>
                  {i.star >= 1 ? (
                    <img src="../static/icons/star-true.png" />
                  ) : (
                    <img src="../static/icons/star-false.png" />
                  )}
                  {i.star >= 2 ? (
                    <img src="../static/icons/star-true.png" />
                  ) : (
                    <img src="../static/icons/star-false.png" />
                  )}
                  {i.star >= 3 ? (
                    <img src="../static/icons/star-true.png" />
                  ) : (
                    <img src="../static/icons/star-false.png" />
                  )}
                  {i.star >= 4 ? (
                    <img src="../static/icons/star-true.png" />
                  ) : (
                    <img src="../static/icons/star-false.png" />
                  )}
                  {i.star >= 5 ? (
                    <img src="../static/icons/star-true.png" />
                  ) : (
                    <img src="../static/icons/star-false.png" />
                  )}
                </div>
              </div>
              <div className={styles.info_content}>
                <div className={styles.content1}>
                  <div className={styles.adress}>
                    <div>
                      <img src="../../static/icons/icons8-marker-48.png"></img>
                    </div>
                    <div>
                      {i.city}, {i.district}
                    </div>
                  </div>
                  <div className={styles.size}>
                    <div>
                      <img src="../../static/icons/size.png"></img>
                    </div>
                    <div>{i.size}</div>
                  </div>
                  <div className={styles.floor}>
                    <div>
                      <img src="../../static/icons/grass.png"></img>
                    </div>
                    <div>{i.floor}</div>
                  </div>
                  <div className={styles.price}>
                    <div>
                      <img src="../../static/icons/azn.png"></img>
                    </div>
                    <div>{i.price}</div>
                  </div>
                </div>
                <div className={styles.content2}>
                  <div>
                    <img
                      src={
                        i.park == true
                          ? "../../static/icons/park-true.png"
                          : "../../static/icons/park-false.png"
                      }
                    />
                  </div>
                  <div>
                    <img
                      src={
                        i.cafe == true
                          ? "../../static/icons/cafe-true.png"
                          : "../../static/icons/cafe-false.png"
                      }
                    />
                  </div>
                  <div>
                    <img
                      src={
                        i.cover == true
                          ? "../../static/icons/cover-true.png"
                          : "../../static/icons/cover-false.png"
                      }
                    />
                  </div>
                  <div>
                    <img
                      src={
                        i.video == true
                          ? "../../static/icons/video-true.png"
                          : "../../static/icons/video-false.png"
                      }
                    />
                  </div>
                </div>
              </div>
              <div className={styles.info_button}>
                <Button
                  clickEvent={beCustomer}
                  title="musterisi ol"
                  width="auto"
                  id="contained"
                  icon="handshake"
                />
                <Button
                  clickEvent={schedule}
                  title="cedvel"
                  width="auto"
                  id="outlined"
                  icon="schedule"
                />
              </div>
            </div>
            <div className={styles.images} id="images">
              <div className={styles.slider} id="slider">
                {i.images.map((item, i) => {
                  return (
                    <div key={i} id="slider_item">
                      <img src={`${item.image}`} />
                    </div>
                  );
                })}
              </div>
              <div className={styles.slider_bar}>
                <div className={styles.slider_left} onClick={slideLeft}>
                  <img src="../../static/icons/left.png" />
                </div>
                <div className={styles.slider_right} onClick={slideRight}>
                  <img src="../../static/icons/right.png" />
                </div>
                <div className={styles.slider_count}>
                  <span id="current_img">1</span>
                  <span>/{i.images.length}</span>
                </div>
              </div>
            </div>
            <div
              className={styles.close_btn}
              id="close-btn"
              onClick={() => {
                close();
                state.setDirectLeft();
              }}
            >
              <img src="../../static/icons/close-black.png" />
            </div>
            <div className={styles.table} id="table">
              <table>
                <thead>
                  <tr>
                    <th></th>
                    <th>Bazer er.</th>
                    <th>Cers ax.</th>
                    <th>Cersenbe</th>
                    <th>Cume ax.</th>
                    <th>Cume</th>
                    <th>Senbe</th>
                    <th>Bazar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>13:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>14:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>15:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>16:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>17:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>18:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>19:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>20:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>21:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>22:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>23:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>24:00</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="direct2" className={styles.container_inner_mobile}>
            <div className={styles.tab} id="tab">
              <div onClick={changeTab} className={styles.tab_li}>
                haqqinda
              </div>
              <div onClick={changeTab}>sekiller</div>
              <div onClick={changeTab}>cedvel</div>
              <div onClick={changeTab}>reyler</div>
            </div>
            <div id="tab-line"></div>
            <div className={styles.content} id="content-mobile">
              <div className={styles.info} id="info">
                <div className={styles.info_title}>
                  {i.name.length >= 10 ? (
                    <div className={styles.name_long}>{i.name}</div>
                  ) : (
                    <div className={styles.name_short} id="title">
                      {i.name}
                    </div>
                  )}
                  <div className={styles.rating}>
                    {i.star >= 1 ? (
                      <img src="../static/icons/star-true.png" />
                    ) : (
                      <img src="../static/icons/star-false.png" />
                    )}
                    {i.star >= 2 ? (
                      <img src="../static/icons/star-true.png" />
                    ) : (
                      <img src="../static/icons/star-false.png" />
                    )}
                    {i.star >= 3 ? (
                      <img src="../static/icons/star-true.png" />
                    ) : (
                      <img src="../static/icons/star-false.png" />
                    )}
                    {i.star >= 4 ? (
                      <img src="../static/icons/star-true.png" />
                    ) : (
                      <img src="../static/icons/star-false.png" />
                    )}
                    {i.star >= 5 ? (
                      <img src="../static/icons/star-true.png" />
                    ) : (
                      <img src="../static/icons/star-false.png" />
                    )}
                  </div>
                </div>
                <div className={styles.info_content}>
                  <div className={styles.content1}>
                    <div className={styles.adress}>
                      <div>
                        <img src="../../static/icons/icons8-marker-48.png"></img>
                      </div>
                      <div>
                        {i.city}, {i.district}
                      </div>
                    </div>
                    <div className={styles.size}>
                      <div>
                        <img src="../../static/icons/size.png"></img>
                      </div>
                      <div>{i.size}</div>
                    </div>
                    <div className={styles.floor}>
                      <div>
                        <img src="../../static/icons/grass.png"></img>
                      </div>
                      <div>{i.floor}</div>
                    </div>
                    <div className={styles.price}>
                      <div>
                        <img src="../../static/icons/azn.png"></img>
                      </div>
                      <div>{i.price}</div>
                    </div>
                  </div>
                  <div className={styles.content2}>
                    <div>
                      <img
                        src={
                          i.park == true
                            ? "../../static/icons/park-true.png"
                            : "../../static/icons/park-false.png"
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          i.cafe == true
                            ? "../../static/icons/cafe-true.png"
                            : "../../static/icons/cafe-false.png"
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          i.cover == true
                            ? "../../static/icons/cover-true.png"
                            : "../../static/icons/cover-false.png"
                        }
                      />
                    </div>
                    <div>
                      <img
                        src={
                          i.video == true
                            ? "../../static/icons/video-true.png"
                            : "../../static/icons/video-false.png"
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.info_button}>
                  <Button
                    clickEvent={beCustomer}
                    title="musterisi ol"
                    width="auto"
                    id="contained"
                    icon="handshake"
                  />
                </div>
              </div>
              <div className={styles.images}>
                <div className={styles.main_slider} id="slider">
                  {i.images.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={styles.main_slider_item}
                        id="slider_item"
                      >
                        <img src={`${item.image}`} />
                      </div>
                    );
                  })}
                </div>
                <div className={styles.images_slider}>
                  <div id="slider_mobile">
                    {i.images.map((item, i) => {
                      return (
                        <div key={i} className={styles.slider_item}>
                          <img src={`${item.image}`} onClick={sliderSelect} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className={styles.slider_left} onClick={slideLeftMobile}>
                  <img src="../../static/icons/left.png" />
                </div>
                <div className={styles.slider_right} onClick={slideRightMobile}>
                  <img src="../../static/icons/right.png" />
                </div>
                <div className={styles.slider_bar}>
                  {/* <div className={styles.slider_left} onClick={slideLeft}>
                    <img src="../../static/icons/left.png" />
                  </div>
                  <div className={styles.slider_right} onClick={slideRight}>
                    <img src="../../static/icons/right.png" />
                  </div>
                  <div className={styles.slider_count}>
                    <span id="current_img">1</span>
                    <span>/{i.images.length}</span>
                  </div> */}
                </div>
              </div>
              <div className={styles.table}>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>
                        <img src="../../static/icons/close-black.png" />
                      </th>
                      <th>
                        <div>14/11</div>
                      </th>
                      <th>
                        <div>14/11</div>
                      </th>
                      <th>
                        <div>14/11</div>
                      </th>
                      <th>
                        <div>14/11</div>
                      </th>
                      <th>
                        <div>14/11</div>
                      </th>
                      <th>
                        <div>14/11</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>12:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>13:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>14:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>15:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>16:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>17:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>18:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>19:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>20:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>21:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>22:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>23:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>24:00</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={styles.feedback}>
                <div className={styles.feedback_inner}>
                  <div className={styles.feedback_slider} id="feedback_slider">
                    {i.feedback.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className={styles.feedback_slider_item}
                          id="feedback_slider_item"
                        >
                          <div>
                            <div>{`${item.user.username}`}</div>
                            <div>{`${item.comment}`}</div>
                            <div>
                              {item.stars >= 1 ? (
                                <div>
                                  <img src="../static/icons/star-true.png" />
                                </div>
                              ) : (
                                <div>
                                  <img src="../static/icons/star-false.png" />
                                </div>
                              )}
                              {item.stars >= 2 ? (
                                <div>
                                  <img src="../static/icons/star-true.png" />
                                </div>
                              ) : (
                                <div>
                                  <img src="../static/icons/star-false.png" />
                                </div>
                              )}
                              {item.stars >= 3 ? (
                                <div>
                                  <img src="../static/icons/star-true.png" />
                                </div>
                              ) : (
                                <div>
                                  <img src="../static/icons/star-false.png" />
                                </div>
                              )}
                              {item.stars >= 4 ? (
                                <div>
                                  <img src="../static/icons/star-true.png" />
                                </div>
                              ) : (
                                <div>
                                  <img src="../static/icons/star-false.png" />
                                </div>
                              )}
                              {item.stars >= 5 ? (
                                <div>
                                  <img src="../static/icons/star-true.png" />
                                </div>
                              ) : (
                                <div>
                                  <img src="../static/icons/star-false.png" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  <div
                    className={styles.feedback_slider_left}
                    onClick={feedbackLeft}
                  >
                    <img src="../../static/icons/left2.png" />
                  </div>
                  <div
                    className={styles.feedback_slider_right}
                    onClick={feedbackRight}
                  >
                    <img src="../../static/icons/right2.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style jsx>{`
            #tab-line {
              position: relative;
              left: 0;
              transition: 0.2s left ease-in-out;
              width: 25%;
              height: 100%;
              background-color: #19b853;
            }
            #tab::before {
              position: absolute;
              content: "";
              width: 400%;
              height: 2px;
              left: 0;
              bottom: -2px;
              background-color: #19b85344;
            }
            #slider {
              width: ${width};
            }
            #slider_item {
              width: ${width2};
              height: 100%;
              float: left;
            }
            #slider_mobile {
              width: ${widthMobile};
              height: 100%;
            }
            #feedback_slider {
              width: ${widthFB};
            }
            #feedback_slider_item {
              width: ${widthFB2};
              height: 100%;
              float: left;
            }
          `}</style>
        </div>
      )}
    </NoteConsumer>
  );
};

export default Direct;

// export async function getServerSideProps(ctx) {
//   // Fetch data from external API
//   const res = await fetch(`http://localhost:8000/api/user/${ctx.query}`)
//   const data = await res.json();

//   // Pass data to the page via props
//   return { props: { data} };
// }
