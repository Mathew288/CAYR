import { Header } from "./components/Header"
// import { TaskForm } from "./components/TaskForm"
import '../src/index.css'
// import { TaskForm } from "./components/TaskForm"
import { Inicio } from "./components/Inicio"

function App() {

  return (
    <div className="items-center justify-center flex flex-col">
      <Header />
      <Inicio
        title="¡Organiza tus actividades y haz más productiva tu vida con CAYR!"
        subtitle="Descubre una nueva forma de organizar tu vida diaria: planifica tus tareas, establece metas, configura recordatorios personalizados y lleva un seguimiento detallado de tus actividades de manera fácil y rápida."
        buttonText="Crear una actividad"
        onCreate={()=>{}}
      />

      {/* <TaskForm/> */}
    </div>

  )
}

export default App
