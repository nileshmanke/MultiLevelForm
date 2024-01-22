import React from "react";
import Mapcomponant from "./Mapcomponant";

const details =[
  { name: "nilesh", post: "manager", age: 21 },
  { name: "ajay", post: "officer", age: 23 },
  { name: "mangesh", post: "CEO", age: 25 },
  { name: "Abhishek", post: "HR", age: 26 },
  { name: "Devesh", post: "Pion", age: 29 },
  { name: "Shivani", post: "HR", age: 40 },
];

const Map = () => {
  return <div>
    {details.map((element)=>(
<div key={element.age}>
<Mapcomponant  name={element.name} post={element.post} age={element.age}/ >
</div>
    ))}
  </div>;
};

export default Map;
