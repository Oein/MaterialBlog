import "./style/global.css";
import "./style/colorTheme.css";
import "./style/sidebar.css";
import "./style/banner.css";
import "./style/searchModal.css";

(window as any).moveTo = (path: string) => {
  if (location.pathname == path) return;
  location.href = path;
};
