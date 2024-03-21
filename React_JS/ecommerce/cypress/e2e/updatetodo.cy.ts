describe('UpdateToDo Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should update the input field when typing', () => {
      const newText = 'New Task';
      cy.get('.update-todo input').type(newText);
      cy.get('.update-todo input').should('have.value', newText);
    });
  });
  