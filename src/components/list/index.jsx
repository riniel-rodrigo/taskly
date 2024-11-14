import React from "react";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

import * as S from "./styles";

const List = ({ tasks, setTasks, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

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
            {tasks.map((item, i) => (
                <S.Card key={i} >
                    <S.CardContent>
                        <S.TaskName>{item.name}</S.TaskName>

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
                        <FaEdit onClick={() => handleEdit(item)} />
                        <FaTrash onClick={() => handleDelete(item.id)} />
                    </S.CardActions>
                </S.Card>
            ))}
        </S.CardContainer>
    );
};

export default List;
