import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from '../src/components/nav';

const load_Api = {

    test:1

}
class Header extends React.Component {

    

    render(){
      return (
        <div>
          <h1>Tutorial Reactjs untuk Pemula</h1>
          <h2>Panduan step-by-step belajar Reactjs</h2>
          <p>Membuat komponen dengan class</p>
          <Navigation load_Api={load_Api} ></Navigation>
        </div>
      );
    }


}



  ReactDOM.render(<Header/>, document.getElementById("root"));
  