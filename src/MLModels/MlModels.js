
const MlModels=[
    {
    name:"Predict Math",
    image:"",
    input:<input className="input1" type="number" placeholder="type Number"/>,

    test1(){

        const input=document.querySelector(".input1").value
        console.log(input,1)


    }
    },

    {
        name:"Predict Cancer Sickness",
    image:"",
    input:<input className="input2" type="number" placeholder="type Number"/>,  
    test1(){

        const input=document.querySelector(".input2").value
       console.log(input,2)
 
 
 
     }
},
    {
        name:"Predict Score",
    image:"",
    input:(<input className="input3" type="text" placeholder="type Number"/>),
    
    test1(){

        const input=MlModels[2].input.value
       console.log(input,3)
 
 
 
     }

}]

export default MlModels;