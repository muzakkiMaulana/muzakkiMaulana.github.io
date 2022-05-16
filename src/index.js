import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import Navigation from '../src/components/nav';
const Navigation = React.lazy(() => import('../src/components/nav'));
import './style/style.css';

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
          <Suspense fallback={<div>Loading...</div>}>
            <Navigation load_Api={load_Api} ></Navigation>
          </Suspense>
        </div>
        // <h1 className='text-red-800 font-bold underline bg-slate-50'>adsdasd</h1>

      );
    }


}



  ReactDOM.render(<Header/>, document.getElementById("root"));
  