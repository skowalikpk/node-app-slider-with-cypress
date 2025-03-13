// describe('Swiper Gallery Test', function () {
//   it('Checks if second slide contains "United Kingdom"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
//   });
// });

// describe('Swiper Gallery Test', function () {
//   it('Checks if third slide contains "Paris"', function () {
//     cy.visit('http://localhost:3000');
//     cy.get('.swiper-button-next').click();
//     cy.wait(2000);
//     cy.get('.swiper-button-next').click({ force: true });
//     cy.wait(2000);
//     cy.get('.swiper-slide-active').should('contain', 'Paris');
//   });
// });

describe('Swiper Gallery Test', function () {
  it('Checks if gellery is correctly displayed', function () {
    cy.visit('http://localhost:3000');
    cy.get('div.card-image:has(img), div.card-contents:has(img)').should('exist');
    cy.get('div.card-image:has(img), div.card-contents:has(img)').its('length').then((count) => {
      expect(count).to.be.equal(3);
    });
    for (let i = 0; i < 3; i++) {
      cy.get('div.swiper-button-next').should('exist').click();
      cy.get('div.card-image:has(img), div.card-contents:has(img)').should('be.visible');
    };
    for (let i = 0; i < 3; i++) {
      cy.get('div.swiper-button-prev').should('exist').click();
    };
  });
});