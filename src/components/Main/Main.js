import React, {Component} from 'react';
import styles from './Main.module.css';
import Todo from '../todo/Todo';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            todos: [this.newTodo("first")],
            isEdit: false,
            editedIndex: -1,

        }
    }

    render() {
        return(
            <div className={styles.main}>
                <input 
                    value={this.state.input}
                    onChange={this.handleChange}
                    onKeyPress={this.addTodo}
                />


                <h1>{this.state.todos.length} Todos</h1>

                {this.state.todos.map((x, index) => this.createTodo(index))}

            </div>
        )
    }

    handleChange = (event) => {
        this.setState({input: event.target.value});
    }
    
    addTodo = (event) => {
        if(event.key === "Enter") {

            // do nothing if input field is empty and user pushes Enter.
            if(this.state.input === null || this.state.input.trim() === '') {
                return;
            }

            if(this.checkForEdit()) {
                
                const editedArray = [...this.state.todos];
                editedArray[this.state.editedIndex].value = this.state.input;
                editedArray[this.state.editedIndex].isEdited = false;
                this.setState(oldState => ({
                    isEdit: !oldState.isEdit,
                    todos: editedArray,
                    input: ""
                }));

            } else {

                this.setState({
                    todos: [...this.state.todos, this.newTodo(this.state.input)],
                    input: "",
                })
            }
            
        }
    }

    newTodo = (value) => {
        return  {
            isChecked: false,
            isEdited: false,
            value,
        };
    }

    // called by the child edit button
    handleEdit = (index) => {

        const todos = [...this.state.todos];
        todos.forEach(e => e.isEdited = false);
        todos[index].isEdited = !todos[index].isEdited;

        this.setState( oldState => ({
            input: oldState.todos[index].value,
            editedIndex: index,
            todos,
        }));
        console.log("Edit Clicked");
    }

    // creates todo with the given index.
    createTodo = (index) => {

        return (
            <Todo 
                key={index}
                value={this.state.todos[index]}
                onEdit={() => this.handleEdit(index)}
                handleDelete={() => this.handleDelete(index)}
            />
        )
    }

    // delete's a todo
    handleDelete = (index) =>  {
        
        const temp = this.state.todos.slice();
        temp.splice(index, 1);
        this.setState({
            todos: temp,
            input: "",
        });
    }

    // this checks for a todo
    checkForEdit = () => {
        for(let i = 0; i < this.state.todos.length; i++) {
            let todo = this.state.todos[i];
            if(todo.isEdited) {
                return todo;
            }
        }
        return null;
    }
    // when checked move it at the bottom of the list
}

export default Main;

/** if you click edit you set all of the other todos edit to false
 * the set the current todo edit to true.
 */