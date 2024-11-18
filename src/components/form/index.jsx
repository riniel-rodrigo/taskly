import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { MdOutlineCancel } from "react-icons/md";

import * as S from "./styles";

const Form = ({ getTasks, onEdit, setOnEdit }) => {
    const ref = useRef();
    const [nameLength, setNameLength] = useState(0);
    const maxLength = 100;
    const [price, setPrice] = useState("");
    const [order, setOrder] = useState("");

    useEffect(() => {
        if (onEdit) {
            const task = ref.current;
            task.name.value = onEdit.name;
            task.price.value = onEdit.price;
            task.deadline.value = new Date(onEdit.deadline).toISOString().slice(0, 10);
            task.order.value = onEdit.order;

            setPrice(onEdit.price);
            setOrder(onEdit.order);
            setNameLength(onEdit.name.length);
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

        if (task.order.value > maxCost) {
            return toast.error(`Insira um número de ordem válido.`);
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

        setNameLength(0);

        setOnEdit(null);
        getTasks();

        setPrice("");
        setOrder("");
    };

    const handleOrderChange = (e) => {
        const value = e.target.value;

        const regex = /^[0-9]*$/;

        if (regex.test(value) || value === "") {
            setOrder(value);
        }
    };

    const handlePriceChange = (e) => {
        const value = e.target.value;

        const regex = /^[0-9]*[.,]?[0-9]{0,2}$/;

        if (regex.test(value) || value === "") {
            setPrice(value);
        }
    };

    const handleNameChange = (e) => {
        const currentLength = e.target.value.length;
        setNameLength(currentLength);
    };

    const checkTaskName = async (name, id) => {
        try {
            const response = await axios.get("https://api-taskly-production.up.railway.app/");
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

        setNameLength(0);

        setPrice("");
    };

    return (
        <S.Container>
            <div>
                <S.Title>{onEdit ? "Editar tarefa:" : "Adicionar tarefa:"}</S.Title>
                <S.FormContainer ref={ref} onSubmit={handleSubmit}>
                    <S.InputArea>
                        <S.Label>Nome</S.Label>
                        <S.Input name="name" onChange={handleNameChange} maxLength={maxLength} />

                        {nameLength >= maxLength && (
                            <S.NameWarning>Atingiu o máximo de caracteres.</S.NameWarning>
                        )}
                    </S.InputArea>
                    <S.InputArea>
                        <S.Label>Custo</S.Label>
                        <S.Input name="price" value={price} onChange={handlePriceChange} maxLength={8} />
                    </S.InputArea>
                    <S.InputArea>
                        <S.Label>Data limite</S.Label>
                        <S.Input name="deadline" type="date" />
                    </S.InputArea>
                    <S.InputArea>
                        <S.Label>Ordem</S.Label>
                        <S.Input name="order" value={order} onChange={handleOrderChange} maxLength={8} />
                    </S.InputArea>
                    <S.Buttons style={{ alignItems: nameLength >= maxLength ? "center" : "end", marginBottom: nameLength >= maxLength ? "0" : "3px" }}>
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
