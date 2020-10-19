// else if(page != 3 && transition == false) {
//     document.querySelector(".outer-wrapper").scrollTo(0, 0);
//   }


//   home: () => {
//     document.querySelector(".outer-wrapper").scrollTo({top: 0, left: 0, behavior: 'smooth'});
//     if (page == 3 || page == 4) {
//       transition = true;
//       setTimeout(function () {
//         transition = false;
//       }, 1500);

//       // document.querySelector(".outer-wrapper").scrollTo({top: 0, left: contentLeft-i, behavior: 'smooth'});
//       var myVar = setInterval(myTimer, 300);
//       var i = contentLeft/5
//       var j = contentLeft/5
//       function myTimer() {
//         // console.log(contentLeft, contentLeft/5, j)
//         if(i <= contentLeft){
//           console.log("scrolling..", contentLeft-i)
//           document.querySelector(".outer-wrapper").scrollTo({top: 0, left: contentLeft-i, behavior: 'smooth'});
//           i += j
//           var s = document.querySelector(".wrapper").getBoundingClientRect()
//         //  console.log(s.left)
//         }
//         else{
//          var s = document.querySelector(".wrapper").getBoundingClientRect()
//         //  console.log(s.left)
//           // document.querySelector(".outer-wrapper").scrollTo({top: 0, left: 0, behavior: 'smooth'});
//           console.log("clear interval")
//           clearInterval(myVar);
//         }
//       }
//     }

//     if (page != 2) {
//       PAGE.contentTransition();
//     }
//     if (mobile) {
//       document.querySelector(".outer-wrapper-mobile").scrollTo(0, 0);
//       document.querySelector(".wrapper-mobile").style.left = -200 + "%";
//       page = 2;
//       PAGE.fadeIn();
//     } else {
//       // document.querySelector(".outer-wrapper").scrollTo(0, 0);
//       document.querySelector(".wrapper").style.top = -200 + "%";
//       page = 2;
//       PAGE.fadeIn();
//     }
//   },