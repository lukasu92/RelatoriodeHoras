function WorkTimeRow() {
    return (
        <tr>
            <th scope="row">1</th>
            <td>07/12/2024</td>
            <td>4 Horas</td>
            <td>ITD-15985</td>
            <td>false</td>
            <td>false</td>
            <td>Desenvolvimento</td>
            <td> </td>
            <td className="text-right">
                <div className="btn-group flex-btn-group-container">
                    <button className="btn btn-info btn-sm" type="submit" tabIndex="0">
                        <span className="fa fa-eye"></span>
                        <span className="d-none d-md-inline">
                            <span>View</span>
                        </span>
                    </button>
                    <button className="btn btn-primary btn-sm" type="submit" tabIndex="0">
                        <span className="fa fa-pencil"></span>
                        <span className="d-none d-md-inline">
                            <span>Edit</span>
                        </span>
                    </button>
                    <button className="btn btn-danger btn-sm" replaceurl="true" type="submit" tabIndex="0">
                        <span className="fa fa-remove"></span>
                        <span className="d-none d-md-inline">
                            <span>Delete</span>
                        </span>
                    </button>
                </div>
            </td>
        </tr>
    );
}
export default WorkTimeRow;