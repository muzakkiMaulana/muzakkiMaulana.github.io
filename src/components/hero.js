import React, { Component } from "react";
import Contact from "./contact";

class Hero extends Component {
  constructor() {
    super();
   
  }

  // componentDidMount() {
    
  // }

  render() {

    // if (!this.state.data) {
    //   return <div>loading</div>;
    // }

    const jsx = (
      <section className="hero">
        
        <div className="container mx-auto">
         

          <div className="flex mt-3 flex-col flex-col-reverse lg:flex-row">
          {/* <div className="grid grid-cols-1 mt-4 md:grid-cols-2"> */}

            <div className="flex-none text-center w-26 mr-4">
              <Contact></Contact>
            </div>
            
            <div className="text-center mb-3 ml-4 lg:mb-0">
              <div className="text-xl font-medium text-black text-left mb-3 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </div>

              <div className="text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex soluta impedit. Quos soluta eveniet, odit ea possimus iure adipisci explicabo totam debitis? Natus, eveniet dolore. Soluta quidem quis illo.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ex soluta impedit. Quos soluta eveniet, odit ea possimus iure adipisci explicabo totam debitis? Natus, eveniet dolore. Soluta quidem quis illo.
              
              </div>
            </div>

            {/* <div className="flex-none text-center w-64 ">
              test 2
            </div> */}

           
            
          </div>
        </div>

      </section>
    );
    return jsx;
  }
}

export default Hero;
