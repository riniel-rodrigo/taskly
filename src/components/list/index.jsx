import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { CiCircleChevUp, CiCircleChevDown } from "react-icons/ci";
import { toast } from "react-toastify";

import * as S from "./styles";

const List = ({ tasks, setTasks, setOnEdit }) => {

    // func moveUp
    const moveUp = async (id, index) => {
        if (index === 0) return;

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];

        setTasks(updatedTasks);

        await updateTaskOrder(updatedTasks);
    };

    // func moveDown
    const moveDown = async (id, index) => {
        if (index === tasks.length - 1) return;

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];

        setTasks(updatedTasks);

        await updateTaskOrder(updatedTasks);
    };

    // func order
    const updateTaskOrder = async (updatedTasks) => {
        try {
            await axios.put("https://api-taskly-production.up.railway.app/reorder", updatedTasks); // Assumindo que o endpoint é esse
            toast.success("Ordem das tarefas atualizada!");
        } catch (error) {
            toast.error("Erro ao atualizar a ordem das tarefas.");
        }
    };

    // func edit
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    // func delete
    const handleDelete = async (id) => {
        toast(
            ({ closeToast }) => (
                <S.ToastDelete>
                    <p>Tem certeza que deseja excluir esta tarefa?</p>
                    <div>
                        <S.ButtonToast
                            onClick={async () => {
                                await axios
                                    .delete("https://api-taskly-production.up.railway.app/" + id)
                                    .then(({ data }) => {
                                        const newArray = tasks.filter((task) => task.id !== id);
                                        setTasks(newArray);
                                        toast.success(data);
                                    })
                                    .catch(({ data }) => toast.error(data));

                                setOnEdit(null);
                                closeToast();
                            }}
                        >
                            Sim
                        </S.ButtonToast>
                        <S.ButtonToast variant="danger" onClick={closeToast}>Não</S.ButtonToast>
                    </div>
                </S.ToastDelete>
            ),
            { autoClose: false }
        );
    };

    return (
        <S.CardContainer>
            {tasks.map((item, index) => (
                <S.Card key={item.id}>
                    <S.CardContent>
                        <S.CardHeader>
                            <S.TaskName>{item.name}</S.TaskName>

                            {/* Botões de subir e descer */}
                            <S.ButtonsMoveBox>
                                <CiCircleChevUp title="Mover para cima" onClick={() => moveUp(item.id, index)} />
                                <CiCircleChevDown title="Mover para baixo" onClick={() => moveDown(item.id, index)} />
                            </S.ButtonsMoveBox>
                        </S.CardHeader>

                        <S.TaskDetails>
                            <S.TaskId>Identificador: {item.id}</S.TaskId>

                            <S.TaskPrice style={{ color: item.price >= 1000 ? "#b69121" : "inherit" }}>
                                Custo: R$ {item.price}
                            </S.TaskPrice>

                            <S.TaskDate>
                                Data limite: {
                                    new Date(item.deadline).toISOString().slice(0, 10).split("-").reverse().join("/")
                                }
                            </S.TaskDate>
                        </S.TaskDetails>
                    </S.CardContent>
                    <S.CardActions>
                        <FaEdit title="Editar" onClick={() => handleEdit(item)} />
                        <FaTrash title="Editar" onClick={() => handleDelete(item.id)} />
                    </S.CardActions>
                </S.Card>
            ))}
        </S.CardContainer>
    );
};

export default List;
