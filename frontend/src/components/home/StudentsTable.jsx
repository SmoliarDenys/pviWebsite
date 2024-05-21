import useGetTable from "../../hooks/useGetTable";
import StudentTable from "./StudentTable";

const StudentsTable = () => {
    const { users } = useGetTable();

    return <div>

        <div className="overflow-x-auto">
            <table className="table table-zebra">
                
                <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <th>№</th>
                    <th>Username</th>
                    <th>Group</th>
                    <th>Gender</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Funcs</th>
                </tr>
                </thead>
                <tbody>

                {users.map((user, idx) => (
                    <StudentTable 
                        key={idx}
                        user={user}
                        idx={idx + 1}
                    />
                ))}
            

                </tbody>
            </table>
        </div>

    </div>
}

export default StudentsTable;