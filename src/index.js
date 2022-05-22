import React, { Suspense, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./style/style.css";
// import Navigation from '../src/components/nav';
const Navigation = React.lazy(() => import("../src/components/nav"));
const Hero = React.lazy(() => import("../src/components/hero"));


const load_Api = {
  test: 1,
};

// const App = () => {
//   const [userDetails, setUserDetails] = useState({});

//   useEffect(() => {
//     // fetchUserDetails().then(setUserDetails)
//   }, []);
//   console.log(userDetails);

//   if (userDetails == 1) {
//   console.log(userDetails);

//   }

//   const handleNameChange = name => {
//     userDetails = name
//   }

//   return (
//     // <div>
//     //   <h1>Tutorial Reactjs untuk Pemula</h1>
//     //   <h2>Panduan step-by-step belajar Reactjs</h2>
//     //   <p>Membuat komponen dengan class</p>
//     //   <Suspense fallback={<div>Loading...</div>}>
//     //     <Navigation load_Api={load_Api}></Navigation>
//     //   </Suspense>
//     // </div>
//     // <h1 className='text-red-800 font-bold underline bg-slate-50'>adsdasd</h1>
//     <div>
//       <h1>Tutorial Reactjs untuk Pemula</h1>
//       <h2>Panduan step-by-step belajar Reactjs</h2>
//       <p>Membuat komponen dengan class</p>
//       <Suspense fallback={<div>Loading...</div>}>
//         <Navigation userDetails={userDetails} onNameChange={handleNameChange}></Navigation>
//       </Suspense>
//     </div>
//   );
// };

// const UserWelcome = () => {

//   useEffect(() => {
//     loadData.nav().then(
//       data => console.log(data)
//     );
//   }, []);

//   // const userDetails = loadData.nav()
//   // console.log(userDetails);
//   // code to render welcome message

//   return(
//     <ul>

//   </ul>
//   )
// }
// class App extends React.Component {

//   useEffect(() => {
//     fetchUserDetails().then(setUserDetails)
//   }, []),
//   render() {
//     const data= loadData.nav()
//     console.log(data);
//     return (
//       <div>
//         <h1>Tutorial Reactjs untuk Pemula</h1>
//         <h2>Panduan step-by-step belajar Reactjs</h2>
//         <p>Membuat komponen dengan class</p>
//         <Suspense fallback={<div>Loading...</div>}>
//           <Navigation load_Api={load_Api}></Navigation>
//         </Suspense>
//       </div>
//       // <h1 className='text-red-800 font-bold underline bg-slate-50'>adsdasd</h1>
//     );
//   }
// }

class App extends React.Component {
  
  state = {
    userDetails: "",
    setUserDetails: "",
  }

  handleNameChange = (name) => {
    console.log(name);
    this.setState({userDetails:name});
  }

  render() {
    if (this.state.userDetails == 1) {
      console.log(this.state);
    }

    const jsx =  (
      <div>
        <Suspense fallback={<div>Loading...</div>}>

        {/* nav */}
          <Navigation
            userDetails={this.state.userDetails}
            onNameChange={this.handleNameChange}
          ></Navigation>
          {/* end nav */}


          {/* jumbrotoon */}

          <Hero></Hero>

          {/* end jumbrotoon */}
        </Suspense>
      </div>
      
    );

    return jsx;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
