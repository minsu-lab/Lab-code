(function () {
    "use strict";
    var countDownDate = new Date("Mar 11, 2021 20:49:30").getTime();

    const els = {
      s: initElements("s"),
      m: initElements("m"),
      h: initElements("h")
    };
  
    function initElements(type) {
      const els = [{}, {}];
  
      if (!["s", "m", "h"].includes(type)) return els; // 없으면 els 반환
        
      const target = document.querySelector(`.flip-clock-${type}`);
  
      if (!target) return els;
  
      let el;
  
      el = els[0];
      el.digit = target.querySelector(".digit-left");
    //   el.up = el.digit.querySelector(".up");
      el.card = el.digit.querySelector(".card");
      el.cardFaces = el.card.querySelectorAll(".card-face");
      el.cardFaceA = el.cardFaces[0];
      el.cardFaceB = el.cardFaces[1];
  
      el = els[1];
      el.digit = target.querySelector(".digit-right");
    //   el.up = el.digit.querySelector(".up");
      el.card = el.digit.querySelector(".card");
      el.cardFaces = el.card.querySelectorAll(".card-face");
      el.cardFaceA = el.cardFaces[0];
      el.cardFaceB = el.cardFaces[1];
  
      return els;
    }
  
    (function runClock() {
    //   const date = new Date();
        let x;
      const currentTime = new Date().getTime();
      const distance = countDownDate - currentTime;
      if (distance < 0) {
        clearInterval(x);
       return false;
      }
      const now = {
        /* h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds() */
        h: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        m: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        s: Math.floor((distance % (1000 * 60)) / 1000)
      };
      now.h = now.h < 10 ? `0${now.h}` : `${now.h}`;
      now.m = now.m < 10 ? `0${now.m}` : `${now.m}`;
      now.s = now.s < 10 ? `0${now.s}` : `${now.s}`;
      now.h0 = now.h[0];
      now.h1 = now.h[1];
      now.m0 = now.m[0];
      now.m1 = now.m[1];
      now.s0 = now.s[0];
      now.s1 = now.s[1];
      
    //   console.log(`${now.h0}${now.h1}:${now.m0}${now.m1}:${now.s0}${now.s1}`);
  
      for (const t of Object.keys(els)) { // els key 값만큼 for 문 돌기 s, m, h
        for (const i of ["0", "1"]) {   // 배열 만큼 돌기 , i는 배열값
          const curr = now[`${t}${i}`];  // now.h0, now.h1 ... 값들 : 현재시간
          let next = +curr - 1;  ///curr 문자열을 숫자로 +curr  : 다음 시간
           next = next == -1 ?   9 : next;
        //   console.log( `now[${t}${i}]`,curr , next)
          if (t === "h") {
            if (i === "0") next = next <= 2 ? `${next}` : "2";
            if (i === "1") next = next <= 3 ? `${next}` : "0";
          }
          if (t === "m") {
            if (i === "0") next = next <= 5 ? `${next}` : "5";
            if (i === "1") next = next <= 9 ? `${next}` : "0";
          }
          if (t === "s") {
            if (i === "0") next = next <= 5 ? `${next}` : "5";
            if (i === "1") next = next <= 9 ? `${next}` : "0";
          }
          const el = els[t][i];
          if (el && el.digit) {
            if (!el.digit.dataset.digitBefore) {// before값이 없으면 삽입
              el.digit.dataset.digitBefore = curr;
              el.cardFaceA.textContent = el.digit.dataset.digitBefore;
              el.digit.dataset.digitAfter = next;
              el.cardFaceB.textContent = el.digit.dataset.digitAfter;
            } else if (el.digit.dataset.digitBefore !== curr) {
                el.card.addEventListener(
                "transitionend",
                function () {
                  el.digit.dataset.digitBefore = curr;
                  el.cardFaceA.textContent = el.digit.dataset.digitBefore;
  
                  const cardClone = el.card.cloneNode(true);
                  cardClone.classList.remove("flipped");
                //   el.up.classList.remove("view");
                  el.digit.replaceChild(cardClone, el.card);
                  el.card = cardClone;
                  el.cardFaces = el.card.querySelectorAll(".card-face");
                  el.cardFaceA = el.cardFaces[0];
                  el.cardFaceB = el.cardFaces[1];
  
                  el.digit.dataset.digitAfter = next;
                  el.cardFaceB.textContent = el.digit.dataset.digitAfter;
                },
                { once: true }
              );

              if (!el.card.classList.contains("flipped")) {
                el.card.classList.add("flipped");
                // el.up.classList.add("view");
              }
            }
          }
        }
      }
  
      x = setTimeout(runClock, 1000);
       })();



       /*
       const flips =[ 1,2,3,4,5,6,7,8

       ]

       for( let i = 0;  i< flips.length; i++){
           let flip = flips[i];
           setTimeout(()=>{
               flip.intro(cur[i], speed)
               cur[i] = cur[i]< 1? 9: cur[i] -1;
           }, i*200);
       }
       */

  })();
  