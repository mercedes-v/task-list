// importar funciones
import React, { createContext, useContext } from "react";
import { useEffect, useState } from "react";
import Task from "./Task";


// crear contexto
const MyContext = createContext();

// componente padre
function ParentComponent(props) {
  const list = [
    {
      id: 1,
      taskname: "Example task 1",
      description: "task's 1 very short description ",
      completed: true,
    },
    {
      id: 2,
      taskname: "Name task 2",
      description:
        "task's 2 keeps a long description without change the user interfaz",
      completed: false,
    },
    {
      id: 3,
      taskname: "Task 3",
      description: "task's 3 description",
      completed: false,
    },
    {
      id: 4,
      taskname: "Example task 4",
      description: "task's 4 description",
      completed: false,
    },
    {
      id: 5,
      taskname: "Name task 5",
      description: "task's 5 description",
      completed: true,
    },
  ];

  const cargaAuxiliar = JSON.parse(window.localStorage.getItem("lista"));
  const cargaAuxiliarPendientes = JSON.parse(
    window.localStorage.getItem("listaPendientes")
  );
  const cargaAuxiliarRealizadas = JSON.parse(
    window.localStorage.getItem("listaRealizadas")
  );

  const [miLista, setMiLista] = useState(cargaAuxiliar ? cargaAuxiliar : list);
  const [tareasPendientes, setTareasPendientes] = useState(
    cargaAuxiliarPendientes ? cargaAuxiliarPendientes : cargaAuxiliar
  );
  const [tareasRealizadas, setTareasRealizadas] = useState(
    cargaAuxiliarRealizadas ? cargaAuxiliarRealizadas : cargaAuxiliar
  );

  const handleModificarElemento = (id) => {
    const listaModificada = miLista.map((iteracion) => {
      if (iteracion.id === id) {
        return { ...iteracion, completed: !iteracion.completed };
      } else {
        return iteracion;
      }
    });
    setMiLista(listaModificada);
    localStorage.setItem("lista", JSON.stringify(listaModificada));

    const listaModificadaTareasPendientes = listaModificada.filter(
      (iteracion) => iteracion.completed === false
    );
    setTareasPendientes(listaModificadaTareasPendientes);
    localStorage.setItem(
      "listaPendientes",
      JSON.stringify(listaModificadaTareasPendientes)
    );

    const listaModificadaTareasRealizadas = listaModificada.filter(
      (iteracion) => iteracion.completed === true
    );
    setTareasRealizadas(listaModificadaTareasRealizadas);
    localStorage.setItem(
      "listaRealizadas",
      JSON.stringify(listaModificadaTareasRealizadas)
    );
  };

  // envolver los componentes hijos con el provedor de my context
  return (
    <MyContext.Provider
      value={{
        miLista,
        handleModificarElemento,
        tareasPendientes,
        tareasRealizadas,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

// primer componente hijo
function TareasRealizadas() {
  const { tareasRealizadas, handleModificarElemento } = useContext(MyContext);

  return (
    <ul>
      {tareasRealizadas.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          taskname={task.taskname}
          description={task.description}
          completed={task.completed}
          onModificarElemento={handleModificarElemento}
        />
      ))}
    </ul>
  );
}

function TareasPendientes() {
  const { handleModificarElemento, tareasPendientes } = useContext(MyContext);

  return (
    <ul>
      {tareasPendientes.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          taskname={task.taskname}
          description={task.description}
          completed={task.completed}
          onModificarElemento={handleModificarElemento}
        />
      ))}
    </ul>
  );
}

//componente principal
function Context() {
   return (
     <ParentComponent>
  <h3>Pending Task</h3>
       <TareasPendientes></TareasPendientes>
       <h3>Done Task</h3>
       <TareasRealizadas></TareasRealizadas>
     </ParentComponent>
  );

  return (
    <ParentComponent>
      <div className="task-list-header">
        <h3>Pending Tasks</h3>
      </div>
      <ul>
        <TareasPendientes></TareasPendientes>
      </ul>
      <div className="task-list-header">
        <h3>Completed Tasks</h3>
      </div>
      <ul>
        <TareasRealizadas></TareasRealizadas>
      </ul>
    </ParentComponent>
  );
}

export default Context;

import React, { createContext, useContext, useEffect, useState } from "react";
 import Task from "./Task";
 const MyContext = createContext();
 function ParentComponent(props) {
   const list = [
     {
       id: 1,
       taskname: "Example task 1",
       description: "task's 1 very short description",
       completed: true,
         },
     {
     id: 2,
       taskname: "Name task 2",
       description:
         "task's 2 keeps a long description without change the user interface",
       completed: false,
     },
     {
       id: 3,
       taskname: "Task 3",
       description: "task's 3 description",
       completed: false,
     },
     {
       id: 4,
       taskname: "Example task 4",
       description: "task's 4 description",
       completed: false,
     },
     {
       id: 5,
       taskname: "Name task 5",
       description: "task's 5 description",
       completed: true,
     },
   ];

   const cargaAuxiliar = JSON.parse(localStorage.getItem("lista"));
  const cargaAuxiliarPendientes = JSON.parse(
     localStorage.getItem("listaPendientes")
   );
const cargaAuxiliarRealizadas = JSON.parse(
    localStorage.getItem("listaRealizadas")
   );

   const [miLista, setMiLista] = useState(cargaAuxiliar || list);
   const [tareasPendientes, setTareasPendientes] = useState(
     cargaAuxiliarPendientes || cargaAuxiliar || list
   );
   const [tareasRealizadas, setTareasRealizadas] = useState(
cargaAuxiliarRealizadas || cargaAuxiliar || list
   );

  const handleModificarElemento = (id) => {
     const listaModificada = miLista.map((iteracion) => {
       if (iteracion.id === id) {
         return { ...iteracion, completed: !iteracion.completed };
       } else {
        return iteracion;
       }
     });
     setMiLista(listaModificada);
     localStorage.setItem("lista", JSON.stringify(listaModificada));

     const listaModificadaTareasPendientes = listaModificada.filter(
       (iteracion) => !iteracion.completed
    );
     setTareasPendientes(listaModificadaTareasPendientes);
     localStorage.setItem(
       "listaPendientes",
       JSON.stringify(listaModificadaTareasPendientes)
     );

     const listaModificadaTareasRealizadas = listaModificada.filter(
       (iteracion) => iteracion.completed
     );
     setTareasRealizadas(listaModificadaTareasRealizadas);
     localStorage.setItem(
       "listaRealizadas",
       JSON.stringify(listaModificadaTareasRealizadas)
     );
   };
   return (
     <MyContext.Provider
       value={{
         miLista,
         handleModificarElemento,
         tareasPendientes,
         tareasRealizadas,
       }}
     >
       {props.children}
     </MyContext.Provider>
   );
 }

function TareasRealizadas() {
   const { tareasRealizadas, handleModificarElemento } = useContext(MyContext);

   return (
     <ul>
     {tareasRealizadas.map((task) => (
         <Task
           key={task.id}
           id={task.id}
           taskname={task.taskname}
          description={task.description}
   completed={task.completed}onModificarElemento={handleModificarElemento}
        />
       ))}
     </ul>
   );
}

function Context() {
   return (
    <ParentComponent>
       <TareasRealizadas />
     </ParentComponent>
  );
 }

export default Context;