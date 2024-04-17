import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Form from "./components/Form";

function App() {
  const [memberlist, setmemberList] = useState([]);
  const [memberToUpdate, setmemberToUpdate] = useState();

  const addMember = (memberData) => {
    setmemberList([...memberlist, memberData]);
    console.log("new member data > ", memberData);
  };

  const updateMember = (memberData) => {
    setmemberList(
      memberlist.map((member) => {
        if (memberData.id == member.id) {
          return memberData;
        } else {
          return member;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="member-card header">
        <div>Isim :</div>
        <div>Email :</div>
        <div>Rol :</div>
        <div>Action:</div>
      </div>
      {memberlist.map((member) => (
        <div className="member-card">
          <div>{member.name}</div>
          <div>{member.email}</div>
          <div>{member.role}</div>
          <div>
            <button onClick={()=> setmemberToUpdate(member)}>
              Duzenle
            </button>
          </div>
        </div>
      ))}
      <br />
      <Form addMember={addMember} updateMember={updateMember} memberToUpdate={memberToUpdate}/>
    </div>
  );
}

export default App;
