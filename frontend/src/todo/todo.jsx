import React, { Component } from 'react'

import axios from 'axios'

import PageHeader from '../template/pageheader'

//Importar Internas do ToDoApp
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:5005/api/todos'

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: '',
            list: []
        }
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleChange = this.handleChange.bind(this) //Adicionando o this ao metodo handleChange
        this.handleAdd = this.handleAdd.bind(this) //Adicionando o this do componente Todo para o metodo handleAdd para qualquer componente filho que chamar
        
        this.refresh()
    }

    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${URL}?=-createdAt${search}`)
            .then(resp =>
                this.setState({...this.state, description, list: resp.data})                
            )
    }

    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleRemove(todo){
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh())
    }

    handleClear(){
        this.refresh()
    }

    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
                .then(resp => this.refresh(this.state.description))
    }

    handleMarkAsPending(todo){
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
                .then(resp => this.refresh(this.state.description))
    }

    handleSearch(){
        this.refresh(this.state.description)
    }

    handleAdd(){
        const description = this.state.description
        axios.post(URL, {description})
            .then(resp => this.refresh())        
    }

    render(){
        return(
            <div>
                <PageHeader name="ToDo App" small="Cadastro" />
                <TodoForm 
                        handleAdd={this.handleAdd}
                        handleChange={this.handleChange}
                        value={this.state.description}
                        handleSearch={this.handleSearch}
                        handleClear={this.handleClear}
                        />
                <TodoList list={this.state.list}
                        handleRemove={this.handleRemove}
                        handleMarkAsDone={this.handleMarkAsDone}
                        handleMarkAsPending={this.handleMarkAsPending}        
                />
            </div>
        )
    }
}