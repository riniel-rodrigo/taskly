import React, { useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import * as S from "./styles";

const Form = ({ getTasks, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const task = ref.current;
            task.name.value = onEdit.name;
            task.price.value = onEdit.price;
            task.deadline.value = onEdit.deadline;
            task.order.value = onEdit.order;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const task = ref.current;

        if (!task.name.value || !task.price.value || !task.deadline.value || !task.order.value) {
            return toast.warn("Preencha todos os campos!");
        }

        const taskExists = await checkTaskName(task.name.value);
        if (taskExists) {
            return toast.error("Já existe uma tarefa com esse nome.");
        }

        if (onEdit) {
            await axios
                .put("https://api-taskly-production.up.railway.app/" + onEdit.id, {
                    name: task.name.value,
                    price: task.price.value,
                    deadline: task.deadline.value,
                    order: task.order.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("https://api-taskly-production.up.railway.app/", {
                    name: task.name.value,
                    price: task.price.value,
                    deadline: task.deadline.value,
                    order: task.order.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        task.name.value = "";
        task.price.value = "";
        task.deadline.value = "";
        task.order.value = "";

        setOnEdit(null);
        getTasks();
    };

    const checkTaskName = async (name) => {
        try {
            const response = await axios.get("https://api-taskly-production.up.railway.app/");
            const existingTasks = response.data;
            return existingTasks.some((task) => task.name.toLowerCase() === name.toLowerCase());
        } catch (error) {
            toast.error("Erro ao verificar tarefas existentes.");
            return false;
        }
    };

    return (
        <S.Container>
            <div>
                <S.Title>{onEdit ? "Editar tarefa:" : "Adicionar tarefa:"}</S.Title>
                <S.FormContainer ref={ref} onSubmit={handleSubmit}>
                    <S.InputArea>
                        <S.Label>Nome</S.Label>
                        <S.Input name="name" />
                    </S.InputArea>
                    <S.InputArea>
                        <S.Label>Preço</S.Label>
                        <S.Input name="price" />
                    </S.InputArea>
                    <S.InputArea>
                        <S.Label>Data limite</S.Label>
                        <S.Input name="deadline" type="date" />
                    </S.InputArea>
                    <S.InputArea>
                        <S.Label>Ordem</S.Label>
                        <S.Input name="order" />
                    </S.InputArea>
                    <S.Button type="submit">SALVAR</S.Button>
                </S.FormContainer>
            </div>
        </S.Container>
    );
};

export default Form;
