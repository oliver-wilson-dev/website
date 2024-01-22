export const allViewports = (tests) => {
  describe('Mobile viewport (all viewports block)', () => {
    beforeEach(() => {
      cy.setViewportMobile();
    });


    tests();
  });

  describe('Tablet viewport (all viewports block)', () => {
    beforeEach(() => {
      cy.setViewportTablet();
    });


    tests();
  });

  describe('Desktop viewport (all viewports block)', () => {
    beforeEach(() => {
      cy.setViewportDesktop();
    });


    tests();
  });
};
