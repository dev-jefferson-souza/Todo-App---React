import { Container, Input, Button, Flex, Spacer, Item } from "./styles";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState} from "react";

function App() {
  const notify = () => toast('🦄 Adicione uma tarefa!', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });


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
      return  notify();
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
  
  // const [theme, setTheme] = useState(false);

  // //Alterando o tema
  // const toggleTheme = (theme) => {
  //  if(theme === true){
  //   setTheme(false);
  //  } else{
  //   setTheme(true);
  //  }
  // }


  return (
    <Container>
      <h1 className="title">TODO APP</h1>
      <Spacer />

      <Flex direction="row">
        <Input value={task}
        placeholder="Digite sua tarefa"
        onChange={(e) => setTask(e.target.value)}/>
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>
      <Spacer margin="1rem"/>

      <ul>
        {listTasks.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="row">
                <button>
                  <i onClick={() => toggleChecked(task.id, task.checked)} class='bx bx-check'></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i class='bx bxs-trash'></i>
                </button>
              </Flex>
            </Item>
            <Spacer margin="0.75rem"/>
          </>
        ))}
      </ul>
      <ToastContainer/>
      
    </Container>
  );
}

export default App;
