import { TodoProvider } from "../TodoContext";
import AppUi from "./AppUi";

// const defaultTodos = [
//  { text: 'Cortar Cebolla', completed: true, time: '10:00 - 11:00'},
//  { text: 'Acabar el curso de React', completed: false, time: '11:00 - 12:00'}, 
//  { text: 'Sobrevivir a la AstraZeneca', completed: false , time: '12:00 - 13:00'} 
// ]

function App(){
  return(
    <TodoProvider>
      <AppUi/>
    </TodoProvider>
  )
}

export default App;