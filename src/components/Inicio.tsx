import React, { useState } from 'react';

type InicioProps = {
    title: string,
    subtitle: string,
    buttonText: string,
    onCreate: () => void,
};
import { TaskForm } from './TaskForm'; // Asegúrate de importar el componente TaskForm

export const Inicio: React.FC<InicioProps> = ({ title, subtitle, buttonText, onCreate }) => {

    const [showPopup, setShowPopup] = useState(false);

    const handleCreate = () => {
        onCreate();
        setShowPopup(true);
    };

    return (
        <main className='h-[80%] w-[80%] bg-white/40 backdrop:blur-3xl m-7 rounded-xl shadow-xl flex flex-col items-center pt-6 pb-6'>
            <h1 className='font-extrabold m-9 text-[52px] tracking-wide text-gray-900 text-center'>
                {title}
            </h1>
            <p className='text-center font-semibold text-gray-800 text-[16px] w-[65%]'>
                {subtitle}
            </p>

            <div className="flex flex-col mt-8 mb-5 w-[30%]">
                <h2 className='text-center text-sky-900 font-extrabold'>¿Aún no controlas tus actividades? </h2>
                <button
                    className='btn bg-sky-700 hover:bg-sky-800 ease-linear duration-75'
                    onClick={handleCreate}>
                    {buttonText}
                </button>
            </div>

            {showPopup && <TaskForm closePopup={()=> setShowPopup(false)}/>}
        </main>
    )
}

