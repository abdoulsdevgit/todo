import React from 'react';
import styles from './Todo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash, faPencilAlt} from '@fortawesome/free-solid-svg-icons'


function Todo(props) {

    let checked = props.value.isChecked ? styles.checked: null;
    console.log(`Handle check in todo clicked ${props.value.isChecked}`);
    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.contentDisplay}>
                    <h1 onClick={() => props.handleCheck()} className={`${checked} ${styles.todoValue}`} >{props.value.value}</h1>
                </div>
                
                <div className={styles.controls}>
                    {/* <button onClick={() => props.onEdit()}> Edit </button> */}
                    <FontAwesomeIcon onClick={() => props.onEdit()} icon={faPencilAlt} className={styles.control} />
                    <FontAwesomeIcon onClick={() => props.handleDelete()} icon={faTrash} className={styles.control}  />
                    {/* <button onClick={() => props.handleDelete()}> Delete </button> */}
                </div>
            </div>
        </div>
    )
}

export default Todo;