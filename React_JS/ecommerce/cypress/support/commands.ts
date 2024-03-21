const cy = require("cypress");

describe('AddToDo component', () => {
  it('should add a new to-do item', () => {
    // Arrange (set up the application state)
    cy.visit('http://localhost:3000/'); // Replace with your app's URL

    // Act (perform the action)
    const newToDoItem = "Buy Milk";
    cy.get('input[type="text"]').type(newToDoItem);
    cy.get('button').click();

    // Assert (verify the resulting state)
    cy.get('.todo-list li').should('contain', newToDoItem); // Adjust selector based on your to-do list rendering
  });
});

export default cy;