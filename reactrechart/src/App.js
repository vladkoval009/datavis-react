import './App.css';
import {
  ResponsiveContainer,
  Area,
  AreaChart,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter
} from 'recharts';
import {useEffect, useState} from 'react';





function App() {


  const[data_one,setData_one] = useState();
  const[data_two,setData_two] = useState();
  const[data_three,setData_three] = useState();
  const[data_four,setData_four] = useState();


  async function getData(){
    const data = await fetch('./jstest.json')
    const res = await data.json()

    console.log(res)

    //I need to transform the data from the key values dm,ohh etc...
     let data_a = res.DM;
     let data_b = res.OOH;
     let data_c = res.PPC;
     let data_d = res.TV;


      let new_data_a = data_a.map((a,index) => (index,{DM: a}))

      let new_data_b = data_b.map(b => ({OOH: b}))

      let new_data_c = data_c.map(c => ({PPC: c}))

      let new_data_d = data_d.map(d => ({TV: d}))

      
    //Data for each line - a data value.
    setData_one(new_data_a)
    setData_two(new_data_b)
    setData_three(new_data_c)
    setData_four(new_data_d)
  }




  useEffect(()=>{
    //Caliing my lovely function when component is mounted.
    getData();

  },[]) 

  //Dependancy [], load data on 1st load.

  return (
    <div className="App">
      <header className="App-header">
        <h1>Line Chart for the data ...</h1>
        <LineChart
        width={720}
        height={500}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      >
      <CartesianGrid   strokeDasharray="2" />
      <Tooltip />
      <Legend />
      <XAxis dataKey="index"/>

      
      <Line type="monotone" data={data_one} dataKey="DM" stroke="orange" />
      <Line type="monotone" data={data_two} dataKey="OOH" stroke="red"/>
      <Line type="monotone" data={data_three} dataKey="PPC" stroke="blue"/>
      <Line type="monotone" data={data_four} dataKey="TV" stroke="green"/>

    </LineChart>

      </header>
    </div>
  );
}

export default App;
