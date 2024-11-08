// import React from "react";
// import axios from "axios";
// import { FaTrash, FaEdit } from "react-icons/fa";
// import { toast } from "react-toastify";

// import * as S from "./styles";

// const List = ({ tasks, setTasks, setOnEdit }) => {
//     const handleEdit = (item) => {
//         setOnEdit(item);
//     };

//     const handleDelete = async (id) => {
//         await axios
//             .delete("https://tasklyapi-ea0eb614f538.herokuapp.com/" + id)
//             .then(({ data }) => {
//                 const newArray = tasks.filter((task) => task.id !== id);
//                 setTasks(newArray);
//                 toast.success(data);
//             })
//             .catch(({ data }) => toast.error(data));

//         setOnEdit(null);
//     };


//     return (
//         <S.Table>
//             <S.Thead>
//                 <S.Tr>
//                     <S.Th>Nome</S.Th>
//                     <S.Th>Preco</S.Th>
//                     <S.Th onlyWeb>Data</S.Th>
//                     <S.Th></S.Th>
//                     <S.Th></S.Th>
//                 </S.Tr>
//             </S.Thead>
//             <S.Tbody>
//                 {tasks.map((item, i) => (
//                     <S.Tr key={i}>
//                         <S.Td width="30%">{item.name}</S.Td>
//                         <S.Td width="30%">{item.price}</S.Td>
//                         <S.Td onlyWeb>
//                             {item.deadline}
//                         </S.Td>
//                         <S.Td alignCenter width="5%">
//                             <FaEdit onClick={() => handleEdit(item)} />
//                         </S.Td>
//                         <S.Td alignCenter width="5%">
//                             <FaTrash onClick={() => handleDelete(item.id)} />
//                         </S.Td>
//                     </S.Tr>
//                 ))}
//             </S.Tbody>
//         </S.Table>
//     );
// };

// export default List;

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
        await axios
            .delete("https://tasklyapi-ea0eb614f538.herokuapp.com/" + id)
            .then(({ data }) => {
                const newArray = tasks.filter((task) => task.id !== id);
                setTasks(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    return (
        <S.CardContainer>
            {tasks.map((item, i) => (
                <S.Card key={i}>
                    <S.CardContent>
                        <S.TaskName>{item.name}</S.TaskName>
                        <S.TaskDetails>
                            <S.TaskPrice>Preço: {item.price}</S.TaskPrice>
                            <S.TaskDate>
                                Data limite: {new Date(item.deadline).toLocaleDateString("pt-BR")}
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
