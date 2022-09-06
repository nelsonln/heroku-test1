import React, {useState} from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

export default function ACLineChart() {
  var post_data = {
    action: "line-chart-data",
  };

  fetch('http://admin.nelsonlin.pa-sys.com/test/acbook/', {
    method: 'POST',
    body: JSON.stringify(post_data),
  })
  .then(res => res.json())
  .then(data => {
    // console.log(data);
    genChart(data);
  })
  .catch(e => {

  });

  const [chartData, setChartData] = useState();
  function genChart(chart_data){
    setChartData(chart_data);
  }   

  // const data = [
  //   {name: "Page A",amount: 4000},
  //   {name: "Page B",amount: 3000},
  //   {name: "Page C",amount: 2000},
  //   {name: "Page D",amount: 2780},
  //   {name: "Page E",amount: 1890},
  //   {name: "Page F",amount: 2390},
  //   {name: "Page G",amount: 3490}
  // ];
  return (
    <LineChart
      width={600}
      height={400}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      
      <Line type="monotone" dataKey="amount" stroke="#82ca9d" />
    </LineChart>
  );
}
