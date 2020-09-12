const { resolve, join } = require("path");
const { readFileSync } = require("fs");

const { createApp } = require("@vuepress/core");
const { parseFrontmatter } = require("@vuepress/shared-utils");

describe("options", () => {
  let app;

  beforeAll(async () => {
    const temp = resolve(__dirname, ".temp");
    app = createApp({
      temp,
      plugins: [
        [
          "vuepress-plugin-attribution-references",
          {
            options: {
              list: {
                title: "List of Resources",
              },
            },
          },
        ],
      ],
    });
    return app.process();
  });

  it("option passthrough", () => {
    const text = readFileSync(
      join(__dirname, "__cases__", "basic.1.md"),
      "utf8"
    );
    const { data, content } = parseFrontmatter(text);
    const { html } = app.markdown.render(content, {
      ...(data.ENV || {}),
      frontmatter: data,
    });
    expect(html).toMatchInlineSnapshot(`
      <h1 id="markdown"><a class="header-anchor" href="#markdown">#</a> Markdown</h1>
      <div id="wikipedia-authors-markdown" class="wrapper">
        <div class="parent">
          <div class="child">
            <p>Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
              Markdown is often used for formatting readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
          </div>
          <p><a href="#wikipedia-authors-markdown" class="anchor">§</a><a href="#wikipedia-authors-markdown" class="label">Attribution 1</a><span>Based on: <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;oldid=975764292" target="_blank" rel="noopener noreferrer">Markdown<OutboundLink/></a> by <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;action=history" target="_blank" rel="noopener noreferrer">Wikipedia Authors<OutboundLink/></a>, License: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons: Attribution-ShareAlike 4.0<OutboundLink/></a></span></p>
        </div>
      </div>
      <h2 id="list-of-attributions" class="list"><a class="header-anchor" href="#list-of-attributions">#</a> List of Resources</h2>
      <ol class="list">
        <li class="item"><a href="#wikipedia-authors-markdown" class="label">Attribution 1</a>: <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;oldid=975764292" target="_blank" rel="noopener noreferrer">Markdown
            <OutboundLink />
          </a> (By: <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;action=history" target="_blank" rel="noopener noreferrer">Wikipedia Authors
            <OutboundLink />
          </a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons: Attribution-ShareAlike 4.0
            <OutboundLink />
          </a></li>
      </ol>
    `);
  });
});
