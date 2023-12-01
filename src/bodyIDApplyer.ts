try {
  let id = document.body.id;

  switch (id) {
    case "tt-body-index":
      [...document.querySelectorAll(".viewOnly_home")].forEach((e) => {
        e.classList.remove("viewOnly_home");
      });
      break;
    case "tt-body-page":
      document.getElementById("mayrowview")?.classList.remove("rowview");
      [...document.querySelectorAll(".notOnPage")].forEach((e) => {
        e.remove();
      });
      [...document.querySelectorAll(".onPage")].forEach((e) => {
        e.classList.remove("onPage");
      });
      let mvh = document.getElementById("move2here_1");
      let mvo = document.getElementById("moveOnLoad_1");
      if (mvh && mvo) {
        mvh.outerHTML = mvo.outerHTML;
        mvo.remove();
      }
      break;
    case "tt-body-search":
      [...document.querySelectorAll(".viewOnly_search")].forEach((e) => {
        e.classList.remove("viewOnly_search");
      });
      break;
  }

  if (
    document.getElementById("moveme2_0") != null &&
    document.getElementById("move2here_0") != null
  ) {
    document.getElementById("move2here_0")!.outerHTML =
      document.getElementById("moveme2_0")!.outerHTML;
    document.getElementById("moveme2_0")!.remove();
  }
} catch (e) {
  console.error(e);
}
