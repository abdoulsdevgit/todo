import React, {Component} from 'react';
import styles from './Main.module.css';
import Todo from '../todo/Todo';

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            input: "",
            todos: ["Hello"],
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
                
                if(this.state.isEdit) {
                    this.setState({
                        isEdit: false
                    });
                }

                return;
            }

            if(this.state.isEdit) {
                const editedArray = [...this.state.todos];
                editedArray[this.state.editedIndex] = this.state.input;
                this.setState(oldState => ({
                    isEdit: !oldState.isEdit,
                    todos: editedArray,
                    input: ""
                }));

            } else {

                this.setState({
                    todos: [...this.state.todos, this.state.input],
                    input: "",
                })
            }
            
        }
    }

    // called by the child edit button
    handleEdit = (index) => {

        this.setState( oldState => ({
            isEdit: !oldState.isEdit,
            input: oldState.todos[index],
            editedIndex: index
        }));
        console.log("Edit Clicked");
    }

    // creates todo with the given index.
    createTodo = (index) => {

        const todo = {
            isChecked: false,
            value: ""
        };

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
            isEdit: false,
            input: "",
        });
    }
}

export default Main;