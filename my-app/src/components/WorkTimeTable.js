import WorkTimeRow from "./WorkTimeRow";

function WorkTimeTable() {
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Data</th>
                    <th scope="col">Horas</th>
                    <th scope="col">Request</th>
                    <th scope="col">On Call</th>
                    <th scope="col">Overtime</th>
                    <th scope="col">Comments</th>
                    <th scope="col">Overtime Comments</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
            <WorkTimeRow />
            </tbody>
        </table>
    );
}

export default WorkTimeTable;