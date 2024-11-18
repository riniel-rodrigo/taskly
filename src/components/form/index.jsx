import React, { useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineCancel } from "react-icons/md";

import * as S from "./styles";

const Form = ({ getTasks, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const task = ref.current;
            task.name.value = onEdit.name;
            task.price.value = onEdit.price;
            task.deadline.value = new Date(onEdit.deadline).toISOString().slice(0, 10);
            task.order.value = onEdit.order;

            task.name.focus();
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const task = ref.current;

        if (!task.name.value || !task.price.value || !task.deadline.value || !task.order.value) {
            return toast.warn("Preencha todos os campos!");
        }

        const taskExists = await checkTaskName(task.name.value, onEdit ? onEdit.id : null);
        if (taskExists && (!onEdit || (onEdit && onEdit.name !== task.name.value))) {
            return toast.error("Já existe uma tarefa com esse nome.");
        }

        if (task.price.value < 0) {
            return toast.error("O custo da tarefa não pode ser negativo.");
        }

        const maxCost = 99999999;
        if (task.price.value > maxCost) {
            return toast.error(`O custo não pode ser maior que R$${maxCost.toLocaleString()}.`);
        }

        if (onEdit) {
            await axios
                .put("http://localhost:3000/" + onEdit.id, {
                    name: task.name.value,
                    price: task.price.value,
                    deadline: task.deadline.value,
                    order: task.order.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:3000/", {
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

    const checkTaskName = async (name, id) => {
        try {
            const response = await axios.get("http://localhost:3000/");
            const existingTasks = response.data;
    
            return existingTasks.some(
                (task) => task.name === name && task.id !== id
            );
        } catch (error) {
            toast.error("Erro ao verificar tarefas existentes.");
            return false;
        }
    };

    const handleCancel = () => {
        setOnEdit(null);
        ref.current.name.value = "";
        ref.current.price.value = "";
        ref.current.deadline.value = "";
        ref.current.order.value = "";
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
                        <S.Label>Custo</S.Label>
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
                    <S.Buttons>
                        <S.Button title="Salvar tarefa" type="submit">Salvar</S.Button>
                        {onEdit && (
                            <MdOutlineCancel title="Cancelar edição" onClick={handleCancel} />
                        )}
                    </S.Buttons>
                </S.FormContainer>
            </div>
        </S.Container>
    );
};

export default Form;
