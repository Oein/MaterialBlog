import "./style/global.css";
import "./style/colorTheme.css";
import "./style/sidebar.css";
import "./style/banner.css";
import "./style/searchModal.css";
import "./style/rowview.css";
import "./style/article.css";

try {
  (window as any).moveTo = (path: string) => {
    if (location.pathname == path) return;
    location.href = path;
  };
} catch (e) {}
