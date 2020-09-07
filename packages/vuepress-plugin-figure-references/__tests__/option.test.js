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
          "vuepress-plugin-figure-references",
          {
            listTitle: "List of Images",
          },
        ],
      ],
    });
    return app.process();
  });

  it("option passthrough", () => {
    const text = readFileSync(join(__dirname, "__cases__", "basic.1.md"), "utf8");
    const { data, content } = parseFrontmatter(text);
    const { html } = app.markdown.render(content, {
      ...(data.ENV || {}),
      frontmatter: data,
    });
    expect(html).toMatchInlineSnapshot(`
      <h1 id="hello-world"><a class="header-anchor" href="#hello-world">#</a> Hello World</h1>
      <p>
      <div id="the-stormtroopocat" class="figure-wrapper">
        <figure>
          <img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat" id="the-stormtroopocat-img">
          <figcaption>
            <a href="#the-stormtroopocat">Figure 1</a>: The Stormtroopocat
          </figcaption>
        </figure>
      </div>
      </p>
      <h2 id="list-of-figures"><a href="#list-of-figures" class="header-anchor">#</a>List of Images</h2>
      <ol class="list-of-figures-list">
        <li><a href="#the-stormtroopocat">Figure 1</a>: The Stormtroopocat</li>
      </ol>
    `);
  });
});
