// gnb
$(".gnb>li").mouseenter(function () {
  $(this).children(".sub_wrap").stop().slideDown("fast");
});
$(".gnb>li").mouseleave(function () {
  $(this).children(".sub_wrap").stop().slideUp("fast");
});

// search
$(".search_drop_down").hide();

$(".search, .mob_search").on("click", function () {
  $(".search_drop_down").stop().slideToggle("fast");
});

$(".mob_bars").click(function () {
  $(".mob_gnb").animate({ left: 0 }, 300);
  $("body, html").css({ overflow: "hidden" });
});
$(".mob_close").click(function () {
  $(".mob_gnb").animate({ left: "-100%" }, 300);
  $("body, html").css({ overflow: "" });
});

$("#gnb1-1, #gnb2-1, #gnb3-1, #gnb4-1").hide();

// gnb1
$("#gnb1").click(function () {
  $("#mob_sub1").slideDown("fast");
  $("#gnb1-1").show();
  $("#gnb1").hide();
});
$("#gnb1-1").click(function () {
  $("#mob_sub1").slideUp("fast");
  $("#gnb1").show();
  $("#gnb1-1").hide();
});

$(document).mouseup(function (e) {
  if ($("#gnb1").has(e.target).length === 0) {
    $("#mob_sub1").slideUp("fast");
    $("#gnb1-1").hide();
    $("#gnb1").show();
  }
});
// gnb2
$("#gnb2").click(function () {
  $("#mob_sub2").slideDown("fast");
  $("#gnb2-1").show();
  $("#gnb2").hide();
});
$("#gnb2-1").click(function () {
  $("#mob_sub2").slideUp("fast");
  $("#gnb2").show();
  $("#gnb2-1").hide();
});

$(document).mouseup(function (e) {
  if ($("#gnb2").has(e.target).length === 0) {
    $("#mob_sub2").slideUp("fast");
    $("#gnb2-1").hide();
    $("#gnb2").show();
  }
});

// gnb3
$("#gnb3").click(function () {
  $("#mob_sub3").slideDown("fast");
  $("#gnb3-1").show();
  $("#gnb3").hide();
});
$("#gnb3-1").click(function () {
  $("#mob_sub3").slideUp("fast");
  $("#gnb3").show();
  $("#gnb3-1").hide();
});

$(document).mouseup(function (e) {
  if ($("#gnb3").has(e.target).length === 0) {
    $("#mob_sub3").slideUp("fast");
    $("#gnb3-1").hide();
    $("#gnb3").show();
  }
});

// gnb4
$("#gnb4").click(function () {
  $("#mob_sub4").slideDown("fast");
  $("#gnb4-1").show();
  $("#gnb4").hide();
});
$("#gnb4-1").click(function () {
  $("#mob_sub4").slideUp("fast");
  $("#gnb4").show();
  $("#gnb4-1").hide();
});

$(document).mouseup(function (e) {
  if ($("#gnb4").has(e.target).length === 0) {
    $("#mob_sub4").slideUp("fast");
    $("#gnb4-1").hide();
    $("#gnb4").show();
  }
});

$(document).mouseup(function (e) {
  if ($(".search_drop_down").has(e.target).length === 0) {
    $(".search_drop_down").slideUp("fast");
  }
});
