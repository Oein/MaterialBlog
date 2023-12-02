import openModal from "./modal";

function pagition() {
  const el = document.querySelector(
    "#paging > .pageItem > div > span.selected"
  );
  if (el == null) return;
  el.parentElement?.parentElement?.classList.add("enabled");
}
function dotdotdot() {
  (window as any).movePage2 = () => {
    let sinput = document.getElementById("searchInput");
    if (!(sinput instanceof HTMLInputElement)) return;
    if (sinput.value != "") {
      let a = [
        ...document.querySelectorAll('.pageItem:not(.enabled):not([href=""])'),
      ];
      let b = [
        ...document.querySelectorAll(".pageItem:not(.enabled):not([href])"),
      ];
      let a0 = a.filter((x) => !b.includes(x))[0];
      if (!(a0 instanceof HTMLAnchorElement)) return;
      let u = new URL(a0.href);
      u.searchParams.set("page", sinput.value);
      location.href = u.href;
    }
  };

  const el = [
    ...document.querySelectorAll("#paging > .pageItem > div > span"),
  ].filter((x) => x.textContent == "···");
  el.forEach((dotdotdot) => {
    if (dotdotdot.parentElement?.parentElement == null) return;
    dotdotdot.parentElement.parentElement.id = "dotdotdot";

    dotdotdot.addEventListener("click", () => {
      openModal({
        title: "페이지 이동하기",
        placeholder: "페이지 번호",
        inputScript: `if(event.keyCode == 13) {document.getElementById("searchIt").click();}`,
        buttonScript: `window.movePage2();`,
      });
    });
  });
}

try {
  dotdotdot();
} catch (e) {}
try {
  pagition();
} catch (e) {
  console.error(e);
}
