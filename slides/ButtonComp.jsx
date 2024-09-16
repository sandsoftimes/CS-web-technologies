import React from "react";
import StudentNames from "./StudentNames";
import "../cssfolder/mainfile.css";
function ButtonComp(probs) {
  /* const studens = [
    { reg: 1, name: "Ali" },
    { reg: 2, name: "Ahmad" },
    { reg: 3, name: "Hassan" },
  ]; */
  // return <button className="TextSize colorclass">I'm a button</button>;
  //return <h3>I am using a car named {probs.detail}</h3>;
  return (
    <h3>
      I am teaching {probs.detail.course} course to Semester (
      {probs.detail.section})
    </h3>
  );
  /* return (
    <>
      <h1>Name of Students</h1>
      <ul>
        {studens.map((item) => (
          <StudentNames key={item.reg} stdname={item.name} />
        ))}
      </ul>
    </>
  ); */
}
export default ButtonComp;
