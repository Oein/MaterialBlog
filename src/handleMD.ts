import md2html from "./lib/md2html";

const handleMD = () => {
  let elements = [...document.querySelectorAll(".handleMD")];
  if (elements.length == 0) return;
  elements.forEach((elem) => {
    let tc = elem.textContent;
    if (tc == null) return;

    if (tc.toLocaleLowerCase().replace(/ /g, "").includes("rendermarkdown")) {
      let tcsp = tc.split(" ");

      for (let i = tcsp.length - 1; i >= 0; i--) {
        let md = tcsp[i];
        try {
          let dt = atob(md);
          let markdown = md2html(dt);

          const nel = document.createElement("div");
          nel.innerHTML = markdown;
          elem.textContent = nel.innerText.replace(/\n/g, " ") || "";
          break;
        } catch (e) {}
      }
    }
  });
};

try {
  handleMD();
} catch (e) {
  console.error(e);
}
