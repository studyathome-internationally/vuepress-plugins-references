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
      plugins: [["vuepress-plugin-table-references"]],
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
      <h1 id="hello-world"><a class="header-anchor" href="#hello-world">#</a> Hello World</h1>
      <div class="table-wrapper" id="client-overview">
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
      <h2 id="list-of-figures"><a href="#list-of-tables" class="header-anchor">#</a>List of Tables</h2>
      <ol class="list-of-tables-list">
        <li><a href="#client-overview">Table 1</a>: Client overview</li>
      </ol>
    `);
  });
});
