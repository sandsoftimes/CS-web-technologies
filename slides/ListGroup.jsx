import "bootstrap/dist/css/bootstrap.css";
import ButtonComp from "./ButtonComp";
import UseStateComp from "./UseStateComp";
function ListGroup() {
  let names = ["Hamza", "Imran", "Ali", "Muhammad"];
  //names = [];
  const Subjects = { course: "Web Technologies", section: "8A" };
  return (
    <>
      <h2>Student Names</h2>
      {names.length === 0 && <p>No name found</p>}
      <ul className="list-group list-group-flush">
        {names.map((item, index) => (
          <li
            onClick={(event) => console.log(event)}
            className="list-group-item"
            key={item}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
      {/* <ButtonComp detail={Subjects} /> */}
      <UseStateComp />
    </>
  );
}
export default ListGroup;
