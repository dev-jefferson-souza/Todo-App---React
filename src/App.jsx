import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState} from "react";

function App() {
  const notify = () => toast('🦄 Por favor, adicione uma tarefa!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

    const notifyDark = () => toast('🦄 Por favor, adicione uma tarefa!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });

  //Array de tarefas
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([{
    id: 1,
    task: "Estudar Java",
    checked: true
  }, {
    id: 2,
    task: "Estudar React",
    checked: false
  }
  ]);
  
  //Adicionando a tarefa e limpando o campo de texto
  const addTask = () => {
    if(!task){
      if(theme == true){
        return  notify();
      } else{
        return notifyDark();
      }
    };

    const newTask = {
      id: Math.random(),
      task: task,
      checked: false
    }
    
    setListTasks([...listTasks, newTask]);
    setTask("");
  };
  
  //Removendo uma tarefa pelo ID
  const removeTask = (id) => {
    const newList = listTasks.filter(task => task.id != id);
    setListTasks(newList);
  };
  
  //Alterando o atributo checked
  const toggleChecked = (id, checked) => {
    const index = listTasks.findIndex(task => task.id === id);
    const newList = listTasks;
    newList[index].checked = !checked;
    
    setListTasks([... newList])
  };
  
  
  //Alterando o tema
  const [theme, setTheme] = useState(false);
  const toggleTheme = (theme) => {
   if(theme === true){
    setTheme(false);
   } else{
    setTheme(true);
   }
  }


  return (
    <Container theme={theme}>
      <h1 className="title">TODO APP</h1>
      <Spacer />

      <Flex direction="row">
        <Input value={task}
        theme={theme} 
        placeholder="Digite sua tarefa"
        onChange={(e) => setTask(e.target.value)}/>
        <Button theme={theme} onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="1rem"/>

      <ul>
        {listTasks.map((task) => (
          <>
            <Item theme={theme} checked={task.checked} key={task.id}>
              <p theme={theme}>{task.task}</p>
              <Flex direction="row">
                <button theme={theme}>
                  <i theme={theme} onClick={() => toggleChecked(task.id, task.checked)} class='bx bx-check'></i>
                </button>
                <button theme={theme} onClick={() => removeTask(task.id)}>
                  <i theme={theme} class='bx bxs-trash'></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="0.75rem"/>
          </>
        ))}
      </ul>
      <Spacer margin="1rem" padding="1.75rem"/>
      <div id="sombra">
        <button theme={theme} id="change-button">
          <i onClick={() => toggleTheme(theme)} class='bx bxs-sun'></i>
          <i onClick={() => toggleTheme(theme)} class='bx bxs-moon bx-flip-horizontal' ></i>
        </button>
      </div>

      <ToastContainer/>
      
    </Container>
  );
}

export default App;
