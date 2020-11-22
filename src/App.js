import React from 'react';
import Row from './components/Row/Row'
import TableHead from './components/TableHeader/TableHeader'
import API from './utils/API';

class App extends React.Component {


constructor() {
  super() 
  this.state = {
    employees: [],
    search: "",
    sortType: ""
  }
}

componentDidMount() {
  API.getUsers().then((res) => {
    this.setState({
      employees: res.data.results
    })
  })
}


onchange = e => {
  this.setState({ search: e.target.value });
  console.log(this.state.search);

}


render() {


  const filteredEmployees = this.state.employees.filter( (employee) => {
    return employee.gender.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.name.first.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.name.last.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.location.city.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.location.state.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1 ||
    employee.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
  });
  const {sortType} = this.state;

  const sorted = filteredEmployees.sort( (a, b) => {
    const isReversed = (sortType === "asc") ? 1 : -1;
    return isReversed * a.name.last.toString().localeCompare(b.name.last.toString())
  });

  return (

    <div className="container">

      <div className="row">
        <input style={styles.search} type="text" className="col" placeholder="Search for an employee" onChange={this.onchange}/>
      </div>


      <div className="row">
        <div className="col">
            <button className="btn btn-primary" style={styles.asc} onClick={() => this.setState({sortType: 'asc'})}>Sort by last name asc.</button>
            <button className="btn btn-primary" style={styles.desc} onClick={() => this.setState({sortType: 'desc'})}>Sort by last name desc.</button>
        </div>
      </div>

 
      <div className="row">
        <table className="col-sm" style={styles.table}>
        <TableHead />
          <tbody>
          <Row employees={filteredEmployees}/>
          </tbody>
        </table>        
      </div> 

      
    </div>
  );
}
}

const styles = {
  desc: {
    position: 'relative',
    backgroundColor: 'blue',
    left: '470px',
    margin: '30px',
    width: '300px'
  },
  asc: {
    position: 'relative',
    backgroundColor: 'blue',
    width: '300px'
  }, 
  search: {
    position: 'relative',
    top: '10px',
    padding: '10px',
    margin: '10px'
  }, 
  table: {
    margin: '35px 0', 
    fontSize: '0.9em', 
    minWidth: '200px', 
    width: '300px', 
    overflow: 'hidden', 
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'
  },
  row: {
    height: '1000px'
  }
  
}

export default App;
