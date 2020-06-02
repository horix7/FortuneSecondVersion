import React, {Component, Fragment} from 'react';


class Table extends Component {
    state = {

    }



    render() {

        return (
            <Fragment>

<table className="striped">
        <thead>
          <tr>
          {  this.props.heads.map(x => <th key={x}>{x}</th>) }
          </tr>
        </thead>

        <tbody>

            {this.props.information.map((n,id) => (
                 <tr key={id}>
                  {  this.props.heads.map((x, i) => <td key={i}>{n[x]}</td>) }
               </tr>
            ))}
         
        </tbody>
      </table>
                
            </Fragment>

        )
    }
}


export default Table;


