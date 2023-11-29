function pagition() {
  const el = document.querySelector(
    "#paging > .pageItem > div > span.selected"
  );
  if (el == null) return;
  el.parentElement?.parentElement?.classList.add("enabled");
}

try {
  pagition();
} catch (e) {
  console.error(e);
}
