import pages from "../fixtures/pages.json";

describe("Check outbound links open in a new tab", () => {
  pages.forEach((page) => {
    it(`on ${page} page`, () => {
      cy.visit(page);
      cy.get("a").then((links) => {
        const filteredLinks = [];
        let baseUrl = Cypress.config().baseUrl;
        baseUrl = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
        for (const link of links) {
          const href = link.getAttribute("href");
          if (
            !Boolean(href) ||
            href === "#" ||
            href === "/" ||
            href.slice(0, 4) === "tel:" ||
            href.slice(0, 7) === "mailto:" ||
            getLinkBaseURL(href) === baseUrl
          ) {
            continue;
          }
          filteredLinks.push(link);
        }
        filteredLinks.forEach((link) => {
          cy.wrap(link).should("have.attr", "target").should("eq", "_blank");
        });
      });
    });
  });
});

const getLinkBaseURL = (href) => {
  let pathArray = href.split("/");
  let protocol = pathArray[0];
  let host = pathArray[2];
  let url = protocol + "//" + host;
  return url.endsWith("/") ? url.slice(0, -1) : url;
};