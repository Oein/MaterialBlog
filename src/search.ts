const sidebarCreate = () => {
  let searchBTN = document.getElementById("searchBTN");
  let searchModal = document.getElementById("searchModal");

  if (searchBTN == null) throw new Error("DOM : Search button not found");
  if (searchModal == null) throw new Error("DOM : Search modal not found");

  searchBTN.addEventListener("click", () => {
    searchModal?.classList.add("enabled");
    document.getElementById("searchInput")?.focus();
  });

  document.getElementById("modalbg")?.addEventListener("click", () => {
    searchModal?.classList.remove("enabled");
  });

  document.getElementById("modal")?.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};

try {
  document.getElementById("modal")?.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  });
  sidebarCreate();
} catch (e) {
  console.error(e);
}
