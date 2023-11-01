$(function () {
  /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("#header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("#nav a").on("click", function () {
    $("#header").toggleClass("open");
  });
});

$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + $(this).height() / 2) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});

$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein2").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + $(this).height() / 2) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });

  function fadeAnime() {
    // flipLeft
    $(".gallery-wrapper li").each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight) {
        $(this).addClass("flipLeft");
      } else {
        $(this).removeClass("flipLeft");
      }
    });
  }

  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    fadeAnime();
  });
});

$(".slider").slick({
  autoplay: true, //自動的に動き出すか。初期値はfalse。
  infinite: true, //スライドをループさせるかどうか。初期値はtrue。
  slidesToShow: 2, //スライドを画面に2枚見せる
  slidesToScroll: 2, //1回のスクロールで2枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
  dots: true, //下部ドットナビゲーションの表示
  responsive: [
    {
      breakpoint: 769, //モニターの横幅が769px以下の見せ方
      settings: {
        slidesToShow: 1, //スライドを画面に1枚見せる
        slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
      },
    },
  ],
});
