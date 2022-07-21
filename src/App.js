
import './App.css';
import React,{Component} from 'react'
import  MlModels  from './MLModels/MlModels'
import * as tf from '@tensorflow/tfjs'


class App extends Component {
  constructor(props){
    super(props)
this.state={


  text:"Welcome to Tensorflow Modeltrainer "

}

  }
 predictFunction=async()=>{

  const model=tf.sequential();
  model.add(tf.layers.dense({units:1,inputShape:[1]}));

  model.compile({

    loss:'meanSquaredError',
    optimizer:'sgd'


  })
const xs=tf.tensor2d([-1,0,1,2,3,4],[6,1])
const ys=tf.tensor2d([-3,-1,1,3,5,7],[6,1])
const epochs=document.querySelector(".epochs").value

await model.fit(xs,ys,{epochs:epochs})

const inputtest=document.querySelector(".input1").value;
const output=document.querySelector("h2")
const output_ext=await Number(inputtest) //immer als nummer umwandeln sonst läuft das nicht
output.innerText=model.predict(tf.tensor2d([output_ext],[1,1]));




  }



componentDidMount(){

  // this.keyTest()




}
  render(){


  
  return (

    <>
    <div className="App">
      <h1>{this.state.text}Predict Model Machinlearning with JS</h1>
      <h2></h2>
<div>
{
// hier kommt die Map function für die verschieden Modelle dich entwickeln möchte
MlModels.map(({name,input,image,test1})=>(
<>
<h1>{name}</h1>
<div onChange={this.predictFunction} >{input}</div>

</>

))

}
     
</div>
      <div>
      
      
      <input className='epochs' type={"number"} placeholder="Epochs/length train Model" />
      </div>
    </div>
    </>
  );
}

}
export default App;
