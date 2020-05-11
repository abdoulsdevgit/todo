import React from 'react';
import styles from './Todo.module.css';


function Todo(props) {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.contentDisplay}>
                    <h1 className={styles.todoValue}>{props.value.value}</h1>
                </div>
                
                <div className={styles.controls}>
                    <button onClick={() => props.onEdit()}> Edit </button>
                    <button onClick={() => props.handleDelete()}> Delete </button>
                </div>
            </div>
        </div>
    )
}

export default Todo;