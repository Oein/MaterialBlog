import openModal from "./modal";

let inputScript = document
  .getElementById("searchInput")
  ?.getAttribute("onkeypress");
let buttonScript = document.getElementById("searchIt")?.getAttribute("onclick");

const sidebarCreate = () => {
  let searchBTN = document.getElementById("searchBTN");
  let searchModal = document.getElementById("searchModal");

  if (searchBTN == null) throw new Error("DOM : Search button not found");
  if (searchModal == null) throw new Error("DOM : Search modal not found");

  searchBTN.addEventListener("click", () => {
    openModal({
      title: "글 검색하기",
      placeholder: "검색어",
      inputScript: inputScript!,
      buttonScript: buttonScript!,
    });
  });
};

try {
  sidebarCreate();
} catch (e) {
  console.error(e);
}
