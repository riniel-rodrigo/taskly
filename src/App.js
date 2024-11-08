import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "./components/form/index";
import List from "./components/list/index";

import GlobalStyle from "./styles/global";
import * as S from "./styles";

function App() {
  const [tasks, setTasks] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getTasks = async () => {
    try {
      const res = await axios.get("https://tasklyapi-ea0eb614f538.herokuapp.com/");
      setTasks(res.data.sort((a, b) => (a.order > b.order ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [setTasks]);

  return (
    <>
      <S.Container>
        <S.Title>TASKLY</S.Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks} />
        <List tasks={tasks} setTasks={setTasks} setOnEdit={setOnEdit} />
      </S.Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
