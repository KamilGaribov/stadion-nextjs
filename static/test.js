var INTRO = {
  intro: () => {
    var cover = document.createElement("div");
    // cover.setAttribute("id", "cover");
    // document.querySelector("body").append(cover);
    // x = document.querySelector(".nav-bar");
    // y = document.querySelector("#logo-img");
    // z = document.querySelector("#logo-name");
    // x.classList.remove("fadeIn");
    // x.classList.add("fadeOut");
    // x.style.transitionDuration = "0.5"
    // y.classList.add("img2");
    // z.classList.add("title2");
    // setTimeout(function () {
    //   x.classList.remove("fadeOut");
    //   x.classList.add("fadeIn");
    //   y.classList.remove("img2");
    //   z.classList.remove("title2");
    //   cover.style.opacity = "0";
    // }, 2000);
    // setTimeout(function () {
    //   x.style.transitionDuration = "0"
    //   document.body.removeChild(cover);
    // }, 3000);
  },
};

var mobile = false;
var CHECK = {
  mobile: () => {
    // let mobile = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        mobile = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return mobile;
  },
};

var z = 0;
var directLeft = "7.5vw";
var contentLeft = 0;
var SCROLL = {
  page3: () => {
    page = 3;
    PAGE.page = 3;
  },
  scroll: () => {
    if (CHECK.mobile()) {
      if (PAGE.page == 3) {
        var contentWidth = document.querySelector("#content").offsetWidth;
        var screenWidth = document.body.offsetWidth;
        var s = screenWidth * 5;
        var limit = contentWidth - screenWidth + 10;
        var rect = document
          .querySelector(".wrapper-mobile")
          .getBoundingClientRect();
        if (s - rect.right >= limit) {
          document.querySelector(".outer-wrapper-mobile").scrollTo(limit, 0);
        }
        var width = window.innerWidth;
        directLeft = +(width / 100) * 7.5 + (-rect.left - width * 3) + "px";
        contentLeft = -rect.left - width * 3;
      } else if (PAGE.page != 3 && scrollBehavior == false) {
        document.querySelector(".outer-wrapper-mobile").scrollTo(0, 0);
      }
    } else {
      if (PAGE.page == 3) {
        var contentWidth = document.querySelector("#content").offsetWidth;
        var screenWidth = document.body.offsetWidth;
        var s = screenWidth * 5;
        var limit = contentWidth - screenWidth + 10;
        var rect = document.querySelector(".wrapper").getBoundingClientRect();
        if (s - rect.right >= limit) {
          document.querySelector(".outer-wrapper").scrollTo(0, limit);
        }
        // var width2 = document.querySelector(".wrapper").offsetWidth;
        var width = window.innerWidth;
        directLeft = +(width / 100) * 7.5 + (-rect.left - width * 3) + "px";
        contentLeft = -rect.left - width * 3;
      } else if (PAGE.page != 3 && scrollBehavior == false) {
        document.querySelector(".outer-wrapper").scrollTo(0, 0);
      }
      // else{
      //   document.querySelector(".outer-wrapper").scrollTo(0, 0);
      // }
    }
  },
  mobile: () => {
    console.log("1");
    // document.querySelector(".outer-wrapper").scrollTo(0, 0);
  },
};

var scrollBehavior = false;
// var PAGE.page = 4;
var PAGE = {
  page: 4,
  fadeIn: () => {
    document.querySelector(".nav-logoname").classList.add("fadeIn");
    document.querySelector(".nav-bar").classList.add("fadeIn");
    document.querySelector(".nav-menu").classList.add("fadeOut");
  },
  fadeOut: () => {
    document.querySelector(".nav-logoname").classList.remove("fadeIn");
    document.querySelector(".nav-bar").classList.remove("fadeIn");
    document.querySelector(".nav-menu").classList.remove("fadeOut");
  },
  contentTransition: () => {
    var content = document.querySelector("#content");
    content.style.transitionDuration = "0s";
    content.style.opacity = "0";
    setTimeout(function () {
      content.style.transitionDuration = "0.5s";
      content.style.opacity = "1";
    }, 200);
  },
  how: () => {
    if (PAGE.page != 0) {
      PAGE.contentTransition();
    }
    if (PAGE.page == 3 || PAGE.page == 4) {
      scrollBehavior = true;
      setTimeout(function () {
        scrollBehavior = false;
      }, 500);
      if (CHECK.mobile()) {
        var myVar = setInterval(myTimer, 5);
        if (contentLeft == 0) {
          var rect = document
            .querySelector(".wrapper-mobile")
            .getBoundingClientRect();
          var width = window.innerWidth;
          contentLeft = -rect.left - width * 3;
        }
        var i = contentLeft / 100;
        var count = 0;
        document.querySelector(".wrapper-mobile").style.left = 0 + "%";
        function myTimer() {
          count++;
          document
            .querySelector(".outer-wrapper-mobile")
            .scrollBy({ top: 0, left: -i });
          if (count == 100) {
            document
              .querySelector(".outer-wrapper-mobile")
              .scrollTo({ top: 0, left: 0 });
            clearInterval(myVar);
          }
        }
      } else {
        var myVar = setInterval(myTimer, 5);
        if (contentLeft == 0) {
          var rect = document.querySelector(".wrapper").getBoundingClientRect();
          var width = window.innerWidth;
          contentLeft = -rect.left - width * 3;
        }
        var i = contentLeft / 100;
        var count = 0;
        document.querySelector(".wrapper").style.top = 0 + "%";
        function myTimer() {
          count++;
          document
            .querySelector(".outer-wrapper")
            .scrollBy({ top: -i, left: 0 });
          if (count == 100) {
            document
              .querySelector(".outer-wrapper")
              .scrollTo({ top: 0, left: 0 });
            clearInterval(myVar);
          }
        }
      }
    } else {
      if (CHECK.mobile()) {
        document.querySelector(".outer-wrapper-mobile").scrollTo(0, 0);
        document.querySelector(".wrapper-mobile").style.left = 0 + "%";
      } else {
        document.querySelector(".outer-wrapper").scrollTo(0, 0);
        document.querySelector(".wrapper").style.top = 0 + "%";
      }
    }
    PAGE.page = 0;
    PAGE.fadeOut();
  },
  account: () => {
    if (PAGE.page != 1) {
      PAGE.contentTransition();
    }
    if (PAGE.page == 3 || PAGE.page == 4) {
      scrollBehavior = true;
      setTimeout(function () {
        scrollBehavior = false;
      }, 500);
      if (CHECK.mobile()) {
        var myVar = setInterval(myTimer, 5);
        if (contentLeft == 0) {
          var rect = document
            .querySelector(".wrapper-mobile")
            .getBoundingClientRect();
          var width = window.innerWidth;
          contentLeft = -rect.left - width * 3;
        }
        var i = contentLeft / 100;
        var count = 0;
        document.querySelector(".wrapper-mobile").style.left = -100 + "%";
        function myTimer() {
          count++;
          document
            .querySelector(".outer-wrapper-mobile")
            .scrollBy({ top: 0, left: -i });
          if (count == 100) {
            document
              .querySelector(".outer-wrapper-mobile")
              .scrollTo({ top: 0, left: 0 });
            clearInterval(myVar);
          }
        }
      } else {
        var myVar = setInterval(myTimer, 5);
        if (contentLeft == 0) {
          var rect = document.querySelector(".wrapper").getBoundingClientRect();
          var width = window.innerWidth;
          contentLeft = -rect.left - width * 3;
        }
        var i = contentLeft / 100;
        var count = 0;
        document.querySelector(".wrapper").style.top = -100 + "%";
        function myTimer() {
          count++;
          document
            .querySelector(".outer-wrapper")
            .scrollBy({ top: -i, left: 0 });
          if (count == 100) {
            document
              .querySelector(".outer-wrapper")
              .scrollTo({ top: 0, left: 0 });
            clearInterval(myVar);
          }
        }
      }
    } else {
      if (CHECK.mobile()) {
        document.querySelector(".outer-wrapper-mobile").scrollTo(0, 0);
        document.querySelector(".wrapper-mobile").style.left = -100 + "%";
      } else {
        document.querySelector(".outer-wrapper").scrollTo(0, 0);
        document.querySelector(".wrapper").style.top = -100 + "%";
      }
    }
    PAGE.page = 1;
    PAGE.fadeOut();
  },
  home: () => {
    if (PAGE.page != 2) {
      PAGE.contentTransition();
    }
    if (PAGE.page == 3 || PAGE.page == 4) {
      scrollBehavior = true;
      setTimeout(function () {
        scrollBehavior = false;
      }, 500);
      if (CHECK.mobile()) {
        var myVar = setInterval(myTimer, 5);
        if (contentLeft == 0) {
          var rect = document
            .querySelector(".wrapper-mobile")
            .getBoundingClientRect();
          var width = window.innerWidth;
          contentLeft = -rect.left - width * 3;
        }
        var i = contentLeft / 100;
        var count = 0;
        document.querySelector(".wrapper-mobile").style.left = -200 + "%";
        function myTimer() {
          count++;
          document
            .querySelector(".outer-wrapper-mobile")
            .scrollBy({ top: 0, left: -i });
          if (count == 100) {
            document
              .querySelector(".outer-wrapper-mobile")
              .scrollTo({ top: 0, left: 0 });
            clearInterval(myVar);
          }
        }
      } else {
        var myVar = setInterval(myTimer, 5);
        if (contentLeft == 0) {
          var rect = document.querySelector(".wrapper").getBoundingClientRect();
          var width = window.innerWidth;
          contentLeft = -rect.left - width * 3;
        }
        var i = contentLeft / 100;
        var count = 0;
        document.querySelector(".wrapper").style.top = -200 + "%";
        function myTimer() {
          count++;
          document
            .querySelector(".outer-wrapper")
            .scrollBy({ top: -i, left: 0 });
          if (count == 100) {
            document
              .querySelector(".outer-wrapper")
              .scrollTo({ top: 0, left: 0 });
            clearInterval(myVar);
          }
        }
      }
    } else {
      if (CHECK.mobile()) {
        document.querySelector(".outer-wrapper-mobile").scrollTo(0, 0);
        document.querySelector(".wrapper-mobile").style.left = -200 + "%";
      } else {
        document.querySelector(".outer-wrapper").scrollTo(0, 0);
        document.querySelector(".wrapper").style.top = -200 + "%";
      }
    }
    PAGE.page = 2;
    PAGE.fadeIn();
  },
  stadiums: () => {
    directLeft = "7.5vw";
    if (PAGE.page != 3) {
      PAGE.contentTransition();
    }
    if (PAGE.page != 4) {
      if (CHECK.mobile()) {
        document.querySelector(".outer-wrapper-mobile").scrollTo(0, 0);
        document.querySelector(".wrapper-mobile").style.left = -300 + "%";
      } else {
        document.querySelector(".outer-wrapper").scrollTo(0, 0);
        document.querySelector(".wrapper").style.top = -300 + "%";
      }
    }
    PAGE.page = 3;
    page = 3;
    PAGE.fadeOut();
  },
  direct: () => {
    var content = document.querySelectorAll("#direct2");
    content[0].style.left = directLeft
    content[1].style.left = directLeft;
    page = 4;
    this.page = 4;
  },
  test: () => {
    page = 4;
    console.log("page", page);
  },
  setPage: (n) => {
    PAGE.page = n;
  },
  we: () => {
    alert("wewewew")
    console.log("w: ", PAGE.page);
  },
};

var COPY = {
  copy: (e) => {
    // console.log(content.offsetWidth, "width");
    content = document.querySelector("#content");
    content2 = content.cloneNode(true);
    document.querySelector("#content2").innerHTML = "";
    document.querySelector("#content2").append(content2);
    // document.querySelector("#content2").style.opacity = 0;
    // setTimeout(function () {
    //   document.querySelector("#content2").style.opacity = 1;
    // }, 500);
  },
};

var FUNC = {
  labelFocus: () => {
    document.querySelector("#textareaEl label").classList.add("labelFocus")
  }
}