import React from 'react'
import PageHeader from '../template/pageheader'

//Importar Internas do ToDoApp
import TodoForm from './todoForm'
import TodoList from './todoList'

export default props => (
  <div>
      <PageHeader name="ToDo App" small="Cadastro" />
      <TodoForm  />
      <TodoList />
  </div>
)
