import '../../src/styles/General.css'
import '../../src/styles/TaskForm.css'
import '../../src/index.css'



import { taskPriorities } from "../types/TaskTypes";

function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Hoalsalslas")
}

interface TaskFormTypes {
    closePopup:()=>void;
}

export function TaskForm ({closePopup}:TaskFormTypes) {
    return (
        <form onSubmit={handleSubmit} className='flex flex-col backdrop:blur-md bg-white/40 p-8'>
            <span className='text-right m-0 cursor-pointer font-extrabold' onClick={closePopup}>X</span>
            <h2 className='font-extrabold text-lg mt-0'>Nueva tarea</h2>

            <input type="text" placeholder="Nombre de la actividad" className='input bg-inherit/50 placeholder:text-black/75' />

            <textarea id="description" className='input bg-inherit/50 placeholder:text-black/75' 
            cols={30} rows={10} maxLength={200} placeholder="Descripción de la actividad"></textarea>

            <div className='flex-row'>
                <label htmlFor="priority" className='text-lg'>Prioridad:</label>
                <select id="priority" className='input'>
                    {
                        taskPriorities.map((priority, index) => {
                            return <option className='' 
                            key={index} 
                            value={priority}>{priority}</option>
                        })
                    }
                    
                </select>

            </div>

            <input type="submit" value="Guardar tarea" className='btn bg-blue-600 hover:bg-blue-700
            ease-linear duration-75 cursor-pointer' />
        </form>
    )
}