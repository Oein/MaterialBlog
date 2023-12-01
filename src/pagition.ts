function pagition() {
  const el = document.querySelector(
    "#paging > .pageItem > div > span.selected"
  );
  if (el == null) return;
  el.parentElement?.parentElement?.classList.add("enabled");
}
function dotdotdot() {
  const el = [
    ...document.querySelectorAll("#paging > .pageItem > div > span"),
  ].filter((x) => x.textContent == "···");
  if (el.length == 0) return;
  if (el[0].parentElement?.parentElement == null) return;
  el[0].parentElement.parentElement.id = "dotdotdot";

  const dotdotdot = document.getElementById("dotdotdot");
  if (dotdotdot == null) return;
  dotdotdot.addEventListener("click", () => {
    let searchModal = document.getElementById("searchModal");
    searchModal?.classList.add("enabled");
    if (document.getElementById("searchInput") != null) {
      document.getElementById("searchInput")!.focus();
      (
        document.getElementById("searchInput")! as HTMLInputElement
      ).placeholder = "페이지 번호";
    }
    if (document.getElementById("modalTitle") != null)
      document.getElementById("modalTitle")!.innerText = "페이지 이동하기";
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
