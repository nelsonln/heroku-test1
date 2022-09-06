import {React, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

export default function ACPieChart(props) {
  var post_data = {
    action: "pie-chart-data",
    date_from: props.day.firstDay,
    date_to: props.day.lastDay
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
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
    { name: "Group E", value: 200 }
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "yellow"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={chartData}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}
