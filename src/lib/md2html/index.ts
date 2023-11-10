import { CALLOUTS, TISTORY_TAGS } from "./constants";

export default function md2html(md: string) {
  const mdFIle = md.split("\n");

  let isOnList = false;
  let isOnCode = false;

  const res: string[] = [];

  const RENDMARKDOWN = (line: string, subCall = false) => {
    const res: string[] = [];

    const exitList = () => {
      if (isOnList) {
        res.push(TISTORY_TAGS.LIST.close);
        isOnList = false;
      }
    };

    if (!isOnCode) {
      if (line.trim().startsWith("##### ")) {
        exitList();

        res.push(TISTORY_TAGS.HEADING5.open);
        res.push(RENDMARKDOWN(line.replace("##### ", ""), true));
        res.push(TISTORY_TAGS.HEADING5.close);
        return res.join("");
      }
      if (line.trim().startsWith("#### ")) {
        exitList();

        res.push(TISTORY_TAGS.HEADING4.open);
        res.push(RENDMARKDOWN(line.replace("#### ", ""), true));
        res.push(TISTORY_TAGS.HEADING4.close);
        return res.join("");
      }
      if (line.trim().startsWith("### ")) {
        exitList();

        res.push(TISTORY_TAGS.HEADING3.open);
        res.push(RENDMARKDOWN(line.replace("### ", ""), true));
        res.push(TISTORY_TAGS.HEADING3.close);
        return res.join("");
      }
      if (line.trim().startsWith("## ")) {
        exitList();

        res.push(TISTORY_TAGS.HEADING2.open);
        res.push(RENDMARKDOWN(line.replace("## ", ""), true));
        res.push(TISTORY_TAGS.HEADING2.close);
        return res.join("");
      }
      if (line.trim().startsWith("# ")) {
        exitList();

        res.push(TISTORY_TAGS.HEADING1.open);
        res.push(RENDMARKDOWN(line.replace("# ", ""), true));
        res.push(TISTORY_TAGS.HEADING1.close);
        return res.join("");
      }
      if (line.trim().startsWith("> ")) {
        exitList();

        const REPLACED = line.replace("> ", "");

        const CALLOUT = (color: string, svg: string, type: string) => {
          res.push(TISTORY_TAGS.COLOR_QUOTE.open.replace(":color", color));
          res.push(
            svg.replace("<svg ", `<svg style="height: calc(1em * 2.2);" `)
          );
          res.push(TISTORY_TAGS.COLOR_QUOTE.mid);
          res.push(RENDMARKDOWN(REPLACED.replace("[!" + type + "]", ""), true));
          res.push(TISTORY_TAGS.COLOR_QUOTE.close);
          return res.join("");
        };

        let CALLOUT_KEYS = Object.keys(CALLOUTS);

        for (let i = 0; i < CALLOUT_KEYS.length; i++) {
          let key = CALLOUT_KEYS[i];
          if (REPLACED.startsWith(`[!${key}]`))
            return CALLOUT(CALLOUTS[key].color, CALLOUTS[key].icon, key);
        }

        res.push(TISTORY_TAGS.QUOTE.open);
        res.push(RENDMARKDOWN(line.replace("> ", "")));
        res.push(TISTORY_TAGS.QUOTE.close);
        return res.join("");
      }
      if (line.trim().startsWith("- ")) {
        if (isOnList == false) res.push(TISTORY_TAGS.LIST.open);
        isOnList = true;
        res.push(TISTORY_TAGS.LIST_ITEM.open);
        res.push(RENDMARKDOWN(line.replace("- ", ""), true));
        res.push(TISTORY_TAGS.LIST_ITEM.close);
        return res.join("");
      }
    }

    if (line.trim().startsWith("```")) {
      const lang = line.replace("```", "");
      if (!isOnCode) {
        res.push(
          TISTORY_TAGS.CODE.open
            .replace(":lang", lang)
            .replace(":lang", lang)
            .replace(":lang", lang)
        );
        isOnCode = true;
      } else {
        res.push(TISTORY_TAGS.CODE.close);
        isOnCode = false;
      }
      return res.join("");
    }

    if (isOnCode) {
      res.push(line);
      res.push("\n");
      return res.join("");
    }

    while (line.includes("**")) {
      line = line.replace("**", TISTORY_TAGS.STRONG.open);
      line = line.replace("**", TISTORY_TAGS.STRONG.close);
    }
    while (line.includes("*")) {
      line = line.replace("*", TISTORY_TAGS.ITALIC.open);
      line = line.replace("*", TISTORY_TAGS.ITALIC.close);
    }
    while (line.includes("_")) {
      line = line.replace("_", TISTORY_TAGS.UNDERLINE.open);
      line = line.replace("_", TISTORY_TAGS.UNDERLINE.close);
    }
    while (line.includes("~~")) {
      line = line.replace("~~", TISTORY_TAGS.STRIKE.open);
      line = line.replace("~~", TISTORY_TAGS.STRIKE.close);
    }

    if (isOnList && !subCall) {
      line += TISTORY_TAGS.LIST.close;
      isOnList = false;
    }

    if (!subCall) line += "<br>";

    return line.replace(/ /g, "&nbsp;");
  };

  mdFIle.forEach((line) => {
    res.push(RENDMARKDOWN(line));
  });

  if (isOnList) {
    res.push(TISTORY_TAGS.LIST.close);
    isOnList = false;
  }
  if (isOnCode) {
    res.push(TISTORY_TAGS.CODE.close);
    isOnCode = false;
  }

  const resText = res.join("");

  return resText;
}
