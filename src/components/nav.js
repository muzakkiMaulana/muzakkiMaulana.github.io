import React,{Component} from 'react';
 
class Nav extends Component {
  constructor(load_Api){
    super()
    this.state= {
            link : '/home',
            text : [
                1
            ],
            load_Api: load_Api,
            data: false,
        }
  }
 
  componentDidMount() {
    // this.phoneData = [
    //     { name: "iPhone X", price: 10000000, discount: 50 },
    //     { name: "Oppo Find X", price: 14000000, discount: 30 },
    //     { name: "Redmi Note X", price: 5000000, discount: 42 },
    //   ];      
     
    console.log('load');
  }


  goPremium(){
      const count = this.state.text.length + 1;
      const arr = this.state.text;
      arr.push(count)

    this.setState({
      text:arr,
      data: count > 3
    })
    console.log(this.state.load_Api);
  }

  render() {

      console.log(this.phoneData);
      return (
          <div>
              {this.state.text.map((data, i) =>{
                  return data
              })}
              <div>
                  apakah ganjil ? 
              {
                  this.state.data ? 'tidak' : 'iya' 
              }
              </div>
            <button onClick={() => this.goPremium()}>
              Go Premium
            </button>
          </div>
      ); 
  }
}
 
export default Nav;