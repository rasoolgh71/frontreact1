class MyForm1 extends React.Component{

   render(){
       return(
          <form>
            <input type="text" placeholder="Name" />
          </form>
       )
   }

}

class TableExample extends React.Component {
  constructor(props) {
    super(props);

    //this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: ''
    };
  }
  render(){
    return (
      <div>
        <table>
          <th>name</th>
          <th>family</th>
          <th>age</th>
          <th>email</th>
        </table>
       </div>
    )
  }

}


ReactDOM.render(<TableExample />,document.getElementById("table"))
ReactDOM.render(<MyForm1/>,document.getElementById("form1"))

