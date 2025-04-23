describe('RIQS Login Test', () => {
  it('Login with Valid Credentials & Verify Logo', () => {
    // visit RIQS Login Page
    cy.visit('https://praxismonitor.seliselocal.com/login')
    // Input Email
    cy.get('#mat-input-0').type("testuserriqs001@yopmail.com")
    // Input Password
    cy.get('#mat-input-1').type("T@1234u")

    // Clik on Login Button
    cy.get('button[aria-label="LOGIN"]', {timeout: 5000}).click()

    // Logo Assertions
    cy.get('img[alt="hrs dept demo 1"]').should('be.visible')
  })
})