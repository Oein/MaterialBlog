const sidebarCreate = () => {
  let searchBTN = document.getElementById("searchBTN");
  let searchModal = document.getElementById("searchModal");

  if (searchBTN == null) throw new Error("DOM : Search button not found");
  if (searchModal == null) throw new Error("DOM : Search modal not found");

  searchBTN.addEventListener("click", () => {
    searchModal?.classList.add("enabled");
    if (document.getElementById("searchInput") != null) {
      document.getElementById("searchInput")!.focus();
      (
        document.getElementById("searchInput")! as HTMLInputElement
      ).placeholder = "검색어";
    }
    if (document.getElementById("modalTitle") != null)
      document.getElementById("modalTitle")!.innerText = "글 검색하기";
  });
};

try {
  document.getElementById("modal")?.addEventListener("submit", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    e.stopPropagation();
  });
  document.getElementById("modalbg")?.addEventListener("click", () => {
    document.getElementById("searchModal")?.classList.remove("enabled");
  });

  document.getElementById("modal")?.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  sidebarCreate();
} catch (e) {
  console.error(e);
}
