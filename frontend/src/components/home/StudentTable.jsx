import { MdDeleteForever, MdEdit } from "react-icons/md";

import useDeleteUser from "../../hooks/useDeleteUser";

const StudentTable = ({ user, idx }) => {
    const { deleteUser } = useDeleteUser();

    return  <tr>
        <th>
            <label>
                <input type="checkbox" className="checkbox" />
            </label>
        </th>
        <th>{ idx }</th>
        <td>{ user.username }</td>
        <td>{ user.group }</td>
        <td>{ user.gender }</td>
        <td>{ user.date }</td>
        <td>Online</td>
        <td>
            <div className="flex justify-end">
                <button 
                    className="btn btn-sm justify-self-end bg-blue-300"
                    //edit func
                >        
                    <MdEdit />
                </button>
                <button 
                    className="btn btn-sm justify-self-end bg-blue-300 ml-3"
                    onClick={() => {deleteUser(user._id)}}
                >
                    <MdDeleteForever />
                </button>
            </div>
        </td>
    </tr>
}

export default StudentTable;