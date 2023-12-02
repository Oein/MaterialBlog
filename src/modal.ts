export default function openModal(props: {
  title: string;
  placeholder: string;
  inputScript: string;
  buttonScript: string;
}) {
  let searchModal = document.getElementById("searchModal");

  if (searchModal == null) throw new Error("DOM : Search modal not found");

  searchModal?.classList.add("enabled");
  if (document.getElementById("searchInput") != null) {
    document.getElementById("searchInput")!.focus();
    (document.getElementById("searchInput")! as HTMLInputElement).placeholder =
      props.placeholder;
  }
  if (document.getElementById("modalTitle") != null)
    document.getElementById("modalTitle")!.innerText = props.title;

  let inp = document.getElementById("searchInput");
  if (inp != null) {
    inp.setAttribute("onkeypress", props.inputScript);
    if (inp instanceof HTMLInputElement) inp.value = "";
  }
  let btn = document.getElementById("searchIt");
  if (btn != null) btn.setAttribute("onclick", props.buttonScript);
}

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
} catch (e) {
  console.error(e);
}
