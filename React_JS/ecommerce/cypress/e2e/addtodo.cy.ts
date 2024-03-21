describe('AddToDo component', () => {
  it('should add a new to-do item', () => {
    cy.visit('http://localhost:3000/');

    const newToDoItem = "item";
    cy.get('input[type="text"]').type(newToDoItem);
    cy.get('button').click();
    cy.get('.todo-list li').should('contain', newToDoItem);
  });
});
