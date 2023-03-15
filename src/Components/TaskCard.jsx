import React from 'react'
import { useDispatch } from 'react-redux'
import { handleComplet, handleDelete } from '../redux/actions'

const TaskCard = ({task}) => {
    // console.log(task)
    const dispatch=useDispatch()
  return (
    <div>
        <h1>{task.action}</h1>
        <button onClick={()=>dispatch(handleDelete(task.id))} >Delete</button>
        <button onClick={()=>dispatch(handleComplet(task.id))} >Complet</button>
    </div>
  )
}

export default TaskCard