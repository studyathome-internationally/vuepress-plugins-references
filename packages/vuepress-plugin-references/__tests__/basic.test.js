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
      plugins: [["vuepress-plugin-references"]],
    });
    return app.process();
  });

  it("mutli label insertion", () => {
    const text = readFileSync(
      join(__dirname, "__cases__", "basic.multi.1.md"),
      "utf8"
    );
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
            <a href="#the-stormtroopocat" class="anchor">§</a><a href="#the-stormtroopocat" class="label">Figure 1</a>: The Stormtroopocat
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
            <a href="#client-overview" class="anchor">§</a><a href="#client-overview" class="label">Table 1</a>: Client overview
          </figcaption>
        </figure>
      </div>
      <div id="wikipedia-authors-markdown" class="wrapper">
        <div class="parent">
          <div class="child">
            <p>Markdown is a lightweight markup language with plain-text-formatting syntax, created in 2004 by John Gruber with Aaron Swartz.
              Markdown is often used for formatting readme files, for writing messages in online discussion forums, and to create rich text using a plain text editor.</p>
          </div>
          <p><a href="#wikipedia-authors-markdown" class="anchor">§</a><a href="#wikipedia-authors-markdown" class="label">Attribution 1</a><span>Based on: <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;oldid=975764292" target="_blank" rel="noopener noreferrer">Markdown<OutboundLink/></a> by <a href="https://en.wikipedia.org/w/index.php?title=Markdown&amp;action=history" target="_blank" rel="noopener noreferrer">Wikipedia Authors<OutboundLink/></a>, License: <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">Creative Commons: Attribution-ShareAlike 4.0<OutboundLink/></a></span></p>
        </div>
      </div>
      <p>The example contains following references: <a href="#the-stormtroopocat" class="figure-reference">Figure 1</a>, <a href="#client-overview" class="table-reference">Table 1</a>, <a href="#wikipedia-authors-markdown" class="attribution-reference">Attribution 1</a>.</p>
      <h2 id="list-of-figures" class="list"><a class="header-anchor" href="#list-of-figures">#</a> List of Figures</h2>
      <ol class="list">
        <li class="item"><a href="#the-stormtroopocat" class="label">Figure 1</a>: The Stormtroopocat</li>
      </ol>
      <h2 id="list-of-tables" class="list"><a class="header-anchor" href="#list-of-tables">#</a> List of Tables</h2>
      <ol class="list">
        <li class="item"><a href="#client-overview" class="label">Table 1</a>: Client overview</li>
      </ol>
      <h2 id="list-of-attributions" class="list"><a class="header-anchor" href="#list-of-attributions">#</a> List of Attributions</h2>
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
