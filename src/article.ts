import md2html from "./lib/md2html";

let article: { [key: string]: string } = {};
let articleDOM = document.getElementById("article");

const parseArticleData = () => {
  let xmlArticle = document.querySelectorAll("articlemeta > metaitem");
  if (xmlArticle.length == 0) return;

  for (let i = 0; i < xmlArticle.length; i++) {
    const xmlItem = xmlArticle[i];
    const key = xmlItem.querySelector("key");
    const value = xmlItem.querySelector("value");

    if (key && value) {
      article[key.textContent!.toLocaleLowerCase()] = value.textContent!;
    } else {
      console.error("Error parsing article");
    }
  }
};

const renderArticle = () => {
  if (!articleDOM) throw new Error("Article DOM not found");
  if (typeof article.render != "undefined") {
    // custom render
    if (article.render == "Markdown") {
      const MD_DATA = document
        .querySelector("articlemeta")
        ?.parentElement?.querySelector("data")?.textContent;
      if (!MD_DATA) throw new Error("Article data not found");
      articleDOM.innerHTML = md2html(atob(MD_DATA));
    }
    return;
  }

  // normal render
  articleDOM.innerHTML = document.getElementById("articledata")!.innerHTML;
};

try {
  (() => {
    if (document.getElementById("tt-body-page") == null) return;
    if (!articleDOM) throw new Error("Article DOM not found");
    parseArticleData();
    renderArticle();

    // remove article data
    document.getElementById("articledata")?.remove();
  })();
} catch (e) {
  console.error(e);
}
