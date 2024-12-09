import './App.css';
import WorkTimeTable from "./components/WorkTimeTable";

function App() {
  return (
    <div className="container">
      <h1>Relatório de Horas</h1>
      <button className="btn btn-primary"><span className="fa fa-plus">Create a new Work Time</span></button>

      <form className="input-group">
        <select className="form-control" name="search-Field">
          <option value="0: Request">Request</option>
          <option value="1: Date">Date</option>
          <option value="2: On call">On call</option>
          <option value="3: Overtime">Overtime</option>
        </select>
        <input className="form-control" name="search-bar" placeholder="Search..." type="text" />
        <span className="input-group-append">
          <button className="btn btn-primary" type="submit">
            <i className="fa fa-search">Search</i>
          </button>
        </span>
      </form>
      <WorkTimeTable />
    </div>
  );
}

export default App;