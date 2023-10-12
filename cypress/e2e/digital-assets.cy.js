import { digitalAssets } from "../../page-objects/page-object-digital-assets"

describe('Research Page', () => {
  let data = {}
  it("visits the page and requests data from api",() => {
    cy.visit(digitalAssets.homePage);
    cy.request(digitalAssets.requestedData).then((response) => {
      data = response.body
    });
  })

  describe('Featured Content', () => {
    it('displays the correct Image', () => {
      cy.get(digitalAssets.featuredImage).should('have.attr', 'src').then((src) => {
        let imageUrl = data.featured.image.split("/");
        expect(src).to.include(imageUrl[4]);
      })
    })
    it('displays the correct title', () => {
      cy.get(digitalAssets.featuredTitle).should('contain.text', data.featured.title);
    })
  })

  describe('Analysts Section', () => {
    it('displays the correct Analyst data', () => {
      cy.get(digitalAssets.analystInfo).each((info, idx) => {
        cy.wrap(info).find(digitalAssets.analystName).should("have.text", data.analysts[idx].name);
        cy.wrap(info).find(digitalAssets.analystTitle).eq(0).should("have.text", data.analysts[idx].title);
        cy.wrap(info).find(digitalAssets.analystExpertise).eq(1).should("have.text", data.analysts[idx].expertise);
        cy.wrap(info).find(digitalAssets.analystImageUrl).should("have.attr", "src").then((src) => {
          let imageUrl = data.analysts[idx].image
          if (imageUrl.includes(digitalAssets.imagePrefix)) {
            imageUrl = data.analysts[idx].image.split("/");
            expect(src).to.include(imageUrl[5]);
          } else {
            expect(src).to.include(imageUrl[0]);
          }
        })
      })
    })
  })

  describe('Read More', () => {
    let newData = []
    it('displays the correct DataFeed data', () => {
      cy.get(digitalAssets.researchStreamCard).each((info, idx) => {
        cy.wrap(info).find(digitalAssets.articleTitle).should("have.text", data.dataFeed[idx].title);
        cy.wrap(info).find(digitalAssets.articleTitle).should("have.attr", "href",data.dataFeed[idx].articleURL);
        cy.wrap(info).find(digitalAssets.articleDescription).should("have.text", data.dataFeed[idx].description);
        cy.wrap(info).find(digitalAssets.articleAuthor).then((a) => {
          cy.wrap(a).should("have.text", data.dataFeed[idx].author);
          cy.wrap(a).should("have.attr", "href",`${data.dataFeed[idx].authorLink}/`)
        })
        cy.wrap(info).find(digitalAssets.articleImage).should("have.attr", "src").then((src) => {
          let imageUrl = data.dataFeed[idx].image.split("/");
          expect(src).to.include(imageUrl[4]);
        });
        cy.wrap(info).find(digitalAssets.articleLink).should("have.attr", "href",data.dataFeed[idx].articleURL)
      })
    })

    it('shows 3 more articles when show more button is clicked', () => {
      cy.get(digitalAssets.researchPageButton).click()
      cy.request(digitalAssets.showMoreData).then((response) => {
        newData = response.body
      });
      cy.get(digitalAssets.researchStreamCard).each((info, idx) => {
        let totalDataFeed = [...data.dataFeed, ...newData.dataFeed];
        cy.wrap(info).find(digitalAssets.articleTitle).should("have.text", totalDataFeed[idx].title);
        cy.wrap(info).find(digitalAssets.articleTitle).should("have.attr", "href",totalDataFeed[idx].articleURL);
        cy.wrap(info).find(digitalAssets.articleDescription).should("have.text", totalDataFeed[idx].description);
        cy.wrap(info).find(digitalAssets.articleAuthor).then((a) => {
          cy.wrap(a).should("have.text", totalDataFeed[idx].author);
          cy.wrap(a).should("have.attr", "href",`${totalDataFeed[idx].authorLink}/`);
        })
        cy.wrap(info).find(digitalAssets.articleImage).should("have.attr", "src").then((src) => {
          let imageUrl = totalDataFeed[idx].image.split("/");
          expect(src).to.include(imageUrl[4]);
        });
        cy.wrap(info).find(digitalAssets.articleLink).should("have.attr", "href",totalDataFeed[idx].articleURL);
      })
    })
  })
})