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
          "vuepress-plugin-references",
          {
            figures: {
              listTitle: "List of Images",
            },
          },
        ],
      ],
    });
    return app.process();
  });

  it("option pass-through", () => {
    const text = readFileSync(join(__dirname, "__cases__", "basic.multi.1.md"), "utf8");
    const { data, content } = parseFrontmatter(text);
    const { html } = app.markdown.render(content, {
      ...(data.ENV || {}),
      frontmatter: data,
    });
    expect(html).toMatchInlineSnapshot(`
      <h1 id="references"><a class="header-anchor" href="#references">#</a> References</h1>
      <p>
      <div id="the-stormtroopocat" class="wrapper">
        <figure>
          <img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat">
          <figcaption>
            <a href="#the-stormtroopocat">Figure 1</a>: The Stormtroopocat
          </figcaption>
        </figure>
      </div>
      </p>
      <div id="client-overview" class="wrapper">
        <figure>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Client</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Alice</td>
                <td>Mobile</td>
              </tr>
              <tr>
                <td>Bob</td>
                <td>Desktop</td>
              </tr>
            </tbody>
          </table>
          <figcaption>
            <a href="#client-overview">Table 1</a>: Client overview
          </figcaption>
        </figure>
      </div>
      <div id="wikipedia-authors-markdown" class="wrapper">
        <div>
          <div>
            <p>Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
              Markdown is often used for formatting readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
          </div>
          <p>
            <span>Based on: <a href="https://en.wikipedia.org/w/index.php?title=Markdown&oldid=975764292">Markdown</a> by <a href="https://en.wikipedia.org/w/index.php?title=Markdown&action=history">Wikipedia Authors</a>, License: <a href="https://creativecommons.org/licenses/by-sa/4.0/">Creative Commons: Attribution-ShareAlike 4.0</a></span>
          </p>
        </div>
      </div>
      <p>The example contains following references: <a href="#the-stormtroopocat">Figure 1</a>, <a href="#client-overview">Table 1</a>, <a href="#wikipedia-authors-markdown">Attribution 1</a>.</p>
      <h2 id="list-of-figures"><a href="#list-of-figures" class="header-anchor">#</a>List of Images</h2>
      <ol class="list-of-figures-list">
        <li><a href="#the-stormtroopocat">Figure 1</a>: The Stormtroopocat</li>
      </ol>
      <h2 id="list-of-tables"><a href="#list-of-tables" class="header-anchor">#</a>List of Tables</h2>
      <ol class="list-of-tables-list">
        <li><a href="#client-overview">Table 1</a>: Client overview</li>
      </ol>
      <h2 id="list-of-attributions"><a href="#list-of-attributions" class="header-anchor">#</a>List of Attributions</h2>
      <ol class="list-of-attributions-list">
        <li><a href="#wikipedia-authors-markdown">Attribution 1</a>: Markdown</li>
      </ol>
    `);
  });
});
