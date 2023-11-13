const sidebar = () => {
  let sidebar = document.getElementById("sidebar");
  if (sidebar == null) throw new Error("DOM : Sidebar not found");

  let sidebarItemsDOMLIST = document.querySelectorAll("#sidebar > a");
  if (sidebarItemsDOMLIST.length == 0)
    throw new Error("DOM : Sidebar items not found");

  let sidebarItems = Array.from(sidebarItemsDOMLIST)
    .filter((x) => x.getAttribute("path") != null)
    .sort((a, b) => {
      let ap = a.getAttribute("path");
      let bp = b.getAttribute("path");
      if (!ap || !bp) throw new Error("DOM : Sidebar item path not found");

      // compare which path is deeper
      let aDepth = ap.split("/").length;
      let bDepth = bp.split("/").length;
      if (aDepth == bDepth) {
        // if depth is same, compare which path is longer
        return bp.length - ap.length;
      }
      return aDepth - bDepth;
    });

  sidebarItems.forEach((item) => {
    if (item.getAttribute("nomove") == "") return;
    item.addEventListener("click", () => {
      let path = item.getAttribute("path");
      if (!path) throw new Error("DOM : Sidebar item path not found");
      (window as any).moveTo(path);
    });
  });

  for (let i = 0; i < sidebarItems.length; i++) {
    let item = sidebarItems[i];
    let path = item.getAttribute("path");
    if (!path) continue;

    if (location.pathname.startsWith(path)) {
      item.setAttribute("enabled", "");
      break;
    }
  }
};

try {
  sidebar();
} catch (e) {
  console.error(e);
}
