const dev = () => {
  document.body.setAttribute(
    "style",
    `--img: url('https://t1.daumcdn.net/tistory_admin/static/manage/images/r3/default_L.png');`
  );

  document.body.innerHTML = document.body.innerHTML
    .replace(/\[##_title_##\]/g, "DEV TISTORY")
    .replace(/\[##_desc_##\]/g, "BLOG DESC");

  if (location.pathname == "/") {
    document.body.id = "tt-body-index";
    document.querySelector("s_permalink_article_rep")?.remove();
  }
};

if (location.hostname == "localhost") dev();
