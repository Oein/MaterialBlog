export const TISTORY_TAGS = {
  HEADING1: {
    open: `<h1 data-ke-size="size30">`,
    close: `</h1>`,
  },
  HEADING2: {
    open: `<h2 data-ke-size="size26">`,
    close: `</h2>`,
  },
  HEADING3: {
    open: `<h3 data-ke-size="size23">`,
    close: `</h3>`,
  },
  HEADING4: {
    open: `<h4 data-ke-size="size20">`,
    close: `</h4>`,
  },
  HEADING5: {
    open: `<h5 data-ke-size="size18">`,
    close: `</h5>`,
  },
  BODY1: {
    open: `<p data-ke-size="size18">`,
    close: `</p>`,
  },
  BODY2: {
    open: `<p data-ke-size="size16">`,
    close: `</p>`,
  },
  BODY3: {
    open: `<p data-ke-size="size14">`,
    close: `</p>`,
  },
  STRONG: {
    open: `<b>`,
    close: `</b>`,
  },
  ITALIC: {
    open: `<i>`,
    close: `</i>`,
  },
  UNDERLINE: {
    open: `<u>`,
    close: `</u>`,
  },
  STRIKE: {
    open: `<s>`,
    close: `</s>`,
  },
  CODE: {
    open: `<pre id="code_1695546883678" class=":lang" data-ke-language=":lang" data-ke-type="codeblock"><code>`,
    close: `</code></pre>`,
  },
  LIST: {
    open: `<ul style="list-style-type: disc;" data-ke-list-type="disc">`,
    close: `</ul>`,
  },
  LIST_ITEM: {
    open: `<li data-ke-list-li="li">`,
    close: `</li>`,
  },
  QUOTE: {
    open: `<div class="hljs" style="border-radius: 8px; padding: 1em 6px;">`,
    close: `</div>`,
  },
  COLOR_QUOTE: {
    open: `<div class="hljs" style="--color: :color; border-radius: 8px; padding: 1em 6px; background: rgba(var(--color),0.1); color: rgb(var(--color)); display: flex; flex-direction: row; gap: 5px;">`,
    mid: `<div>`,
    close: `</div></div>`,
  },
};

export const CALLOUTS: {
  [key: string]: {
    color: string;
    icon: string;
  };
} = {
  info: {
    color: "2, 122, 255",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-info"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`,
  },
  note: {
    color: "2, 122, 255",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-pencil"><line x1="18" y1="2" x2="22" y2="6"></line><path d="M7.5 20.5 19 9l-4-4L3.5 16.5 2 22z"></path></svg>`,
  },
  tip: {
    color: "83, 223, 221",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-flame"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`,
  },
  faq: {
    color: "224, 222, 113",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-help-circle"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  },
  todo: {
    color: "2, 122, 255",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-check-circle-2"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="m9 12 2 2 4-4"></path></svg>`,
  },
  example: {
    color: "168, 130, 255",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-list"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>`,
  },
  abstract: {
    color: "83, 223, 221",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="svg-icon lucide-clipboard-list"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>`,
  },
};
