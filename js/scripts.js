$(document).ready((function() {
    function e(e) { return "<span>" + (e = ("00" + e).substr(-2))[0] + "</span><span>" + e[1] + "</span>" }
    $("a[href^='#']").click((function() { var e = $(this).attr("href"); return $("html, body").animate({ scrollTop: $(e).offset().top + "px" }), !1 })),
        function t() { var s = new Date,
                n = new Date;
            n.setHours(23), n.setMinutes(59), n.setSeconds(59), 23 === s.getHours() && 59 === s.getMinutes() && 59 === s.getSeconds && n.setDate(n.getDate() + 1); var o = Math.floor((n.getTime() - s.getTime()) / 1e3),
                r = Math.floor(o / 3600);
            o -= 3600 * r; var a = Math.floor(o / 60);
            o -= 60 * a, $(".timer .hours").html(e(r)), $(".timer .minutes").html(e(a)), $(".timer .seconds").html(e(o)), setTimeout(t, 200) }(), $(".owl-carousel").owlCarousel({ items: 1, loop: !0, autoHeight: !0, smartSpeed: 300, mouseDrag: !1, pullDrag: !0, nav: !0, navText: "" }) }));
let lastScrollTop = 0;
document.addEventListener("scroll", (function(e) { const t = window.scrollY;
    t > 160 && (t > lastScrollTop ? document.querySelector("header").classList.remove("active") : document.querySelector("header").classList.add("active"), lastScrollTop = t) }));
const menuItems = document.querySelectorAll("#menu a");
hamburger.addEventListener("click", (function(e) { e.preventDefault();
    e.currentTarget;
    menu.classList.contains("show-menu") ? menu.classList.remove("show-menu") : menu.classList.add("show-menu") })), menuItems.forEach((function(e, t) { e.addEventListener("click", (function(e) { menu.classList.remove("show-menu") })) }));