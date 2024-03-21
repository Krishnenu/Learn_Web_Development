describe('RemoveToDo Component', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000');
    });
  
    it('should display todo items with delete and update buttons', () => {
      cy.get('.todo-item').each(($item) => {
        cy.wrap($item).should('contain', 'Delete').and('contain', 'Update');
      });
    });
  
    it('should delete a todo item when delete button is clicked', () => {
      cy.get('.todo-item').first().find('.delete-btn').click();
    });
  
    it('should switch to edit mode when update button is clicked', () => {    
      cy.get('.todo-item').first().find('.update-btn').click();
      cy.get('.update-todo').should('exist');
    });
  
    it('should update a todo item when edited', () => {
      cy.get('.todo-item').first().find('.update-btn').click();  
      cy.get('.update-todo input').type(' Updated');
      cy.get('.update-todo button').click();
      cy.contains('.todo-item', 'Updated').should('exist');
    });
  });
  