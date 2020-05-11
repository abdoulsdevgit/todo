import React from 'react';
import styles from './Todo.module.css';


function Todo(props) {

    let checked = props.value.isChecked ? styles.checked: null;
    console.log(`Handle check in todo clicked ${props.value.isChecked}`);
    return(
        <div >
            <div className={styles.container}>
                <div className={styles.contentDisplay}>
                    <h1 onClick={() => props.handleCheck()} className={[styles.todoValue, checked]} >{props.value.value}</h1>
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