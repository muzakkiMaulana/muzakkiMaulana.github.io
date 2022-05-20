import React, { Component } from "react";

class Nav extends Component {
  constructor(load_Api, onNameChange) {
    super();
    this.state = {
      // link: "/home",
      // text: [1],
      load_Api: load_Api,
      data: false,
    };
  }

  componentDidMount() {
    // this.phoneData = [
    //     { name: "iPhone X", price: 10000000, discount: 50 },
    //     { name: "Oppo Find X", price: 14000000, discount: 30 },
    //     { name: "Redmi Note X", price: 5000000, discount: 42 },
    //   ];

    // this.props.onNameChange(1);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          data: json,
          load_Api: 1,
        })
      );

    // console.log(this.state);
  }

  goPremium() {
    //   const count = this.state.text.length + 1;
    //   const arr = this.state.text;
    //   arr.push(count)
    // this.setState({
    //   text:arr,
    //   data: count > 3
    // })
    // console.log(this.state.load_Api);
  }

  render() {
    // console.log(this.phoneData);
    // return (
    //     <div>
    //         {this.state.text.map((data, i) =>{
    //             return data
    //         })}
    //         <div>
    //             apakah ganjil ?
    //         {
    //             this.state.data ? 'tidak' : 'iya'
    //         }
    //         </div>
    //       <button onClick={() => this.goPremium()}>
    //         Go Premium
    //       </button>
    //     </div>
    // );

    if (!this.state.data) {
      return <div>loading</div>;
    }
    console.log(this.state.data);

    return (
      <nav className="navbar">
        <div className="container">
          <div className="list-menu">
            <ul>
              {this.state.data.map((data, i) => {
                const active = (i == 4 ? "active": "");
                console.log(active, i);
                if(i > 3){
                  return (
                   <li>
                     <a className={active}>{data.name}</a>
                   </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
