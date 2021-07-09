const { resolve, join } = require("path");
const { readFileSync } = require("fs");

const { createApp } = require("@vuepress/core");
const { parseFrontmatter } = require("@vuepress/shared-utils");

describe("basic functionality", () => {
  let app;

  beforeAll(async () => {
    const temp = resolve(__dirname, ".temp");
    app = createApp({
      temp,
      plugins: [["vuepress-plugin-attribution-references", {
        options: {
          sources: [
            {
              key: "wiki:markdown",
              author: ["Wikipedia Authors", "https://en.wikipedia.org/w/index.php?title=Markdown&action=history"],
              title: ["Markdown", "https://en.wikipedia.org/w/index.php?title=Markdown&oldid=975764292"],
              license: ["Creative Commons: Attribution-ShareAlike 4.0", "https://creativecommons.org/licenses/by-sa/4.0/"],
            },
          ],
        }
      }]],
    });
    return app.process();
  });

  it("header-anchor insertion", () => {
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
      <div id="wiki_markdown__1" class="wrapper">
        <div class="parent">
          <div class="child">
            <p>Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
              Markdown is often used for formatting readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
          </div>
          <p><a href="#wiki_markdown__1" class="anchor">§</a>[<a href="#wiki_markdown" class="label">1</a>]</p>
        </div>
      </div>
      <h2 id="list-of-attributions" class="list"><a class="header-anchor" href="#list-of-attributions">#</a> List of Attributions</h2>
      <ol class="list">
        <li id="wiki_markdown" class="item"><span class="label">[1]</span>: <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;oldid=975764292" class="title" target="_blank" rel="noopener noreferrer">Markdown
            <OutboundLink />
          </a> (By: <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;action=history" class="author" target="_blank" rel="noopener noreferrer">Wikipedia Authors
            <OutboundLink />
          </a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/" class="license" target="_blank" rel="noopener noreferrer">Creative Commons: Attribution-ShareAlike 4.0
            <OutboundLink />
          </a>)</li>
      </ol>
    `);
  });
});
