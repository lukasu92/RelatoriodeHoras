// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
        <h1>Relatório de Horas</h1>
        <button class="btn btn-primary"><span class="fa fa-plus">Create a new Work Time</span></button>
        
        <form class="input-group">
          <select class="form-control" name="search-Field">
            <option value="0: Request">Request</option> 
            <option value="1: Date">Date</option> 
            <option value="2: On call">On call</option> 
            <option value="3: Overtime">Overtime</option>            
          </select>
          <input class="form-control" name="search-bar" placeholder="Search..." type="text"/>
            <span class="input-group-append"> 
              <button class="btn btn-primary" type="submit">
                <i class="fa fa-search">Search</i>
              </button> 
            </span>          
        </form> 

        <table class="table table-dark">
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
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td class="text-right">
                <div class="btn-group flex-btn-group-container"> 
                  <button class="btn btn-info btn-sm" type="submit" tabindex="0"> 
                    <span class="fa fa-eye"></span> 
                      <span class="d-none d-md-inline">
                        <span>View</span>
                      </span> 
                  </button> 
                  <button class="btn btn-primary btn-sm" type="submit" tabindex="0"> 
                    <span class="fa fa-pencil"></span> 
                    <span class="d-none d-md-inline">
                      <span>Edit</span>
                    </span> 
                  </button>
                  <button class="btn btn-danger btn-sm" replaceurl="true" type="submit" tabindex="0">
                    <span class="fa fa-remove"></span>
                    <span class="d-none d-md-inline">
                      <span>Delete</span>
                    </span>
                  </button>
                </div>
              </td>
            </tr>            
          </tbody>
        </table>

    </div>
  );
}

export default App;