(() => {
  let searchBTN = document.getElementById("searchBTN");
  let searchModal = document.getElementById("searchModal");

  if (searchBTN == null) throw new Error("DOM : Search button not found");
  if (searchModal == null) throw new Error("DOM : Search modal not found");

  searchBTN.addEventListener("click", () => {
    searchModal?.setAttribute("enabled", "");
  });
})();
