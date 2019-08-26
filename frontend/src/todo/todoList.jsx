import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markedAsDone, markAsPending, remove } from './todoActions'

const todoList = props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}> {todo.description} </td>
                <td>
                    <IconButton style="success" icon="check" hide={todo.done}
                                onClick={() => props.markedAsDone(todo)}></IconButton>
                    <IconButton style="warning" icon="undo" hide={!todo.done}
                                onClick={() => props.markAsPending(todo)}></IconButton>
                    <IconButton style="danger" icon="trash-o" hide={!todo.done}
                                onClick={() => props.remove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

    return(
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableAction">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = (dispatch) => bindActionCreators({ markedAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(todoList)
