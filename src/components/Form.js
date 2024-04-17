import React, { useEffect, useLayoutEffect, useState } from "react";
import App from "../App";

const Form = ({ addMember, updateMember, memberToUpdate }) => {
  const [memberData, setMemberData] = useState({
    name: "",
    email: "",
    role: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    if (memberData.id) {
      updateMember(memberData);
    } else {
      addMember({ ...memberData, id: Math.round(Math.random() * 9999999) });
    }
    setMemberData({ name: "", email: "", role: "" });
  };

  useEffect(() => {
    if (memberToUpdate) {
      setMemberData(memberToUpdate);
    }
  }, [memberToUpdate]);

  return (

    <form onSubmit={submitHandler} className="member-form">

      <h2>
        {memberData.id ? `${memberData.name} Kaydini Guncelle` : "Yeni Kayit Formu"}      </h2>
      <div>
        <label>
          <span>Uye adi:</span>

          <input
            type="text"
            onChange={(e) => {
              setMemberData({ ...memberData, name: e.target.value });
            }}
            value={memberData.name}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Uye email:</span>

          <input
            type="email"
            onChange={(e) => {
              setMemberData({ ...memberData, email: e.target.value });
            }}
            value={memberData.email}
          />
        </label>
      </div>
      <div>
        <label>
          <span>Uye rolu:</span>
          <input
            type="text"
            onChange={(e) => {
              setMemberData({ ...memberData, role: e.target.value });
            }}
            value={memberData.role}
          />
        </label>
      </div>
      <div className="submit-btn-container">
        <button type="submit" disabled={!(memberData.name && memberData.email)}>
          {memberData.id ? "Guncelle" : "Yeni Kayit Olustur"}
        </button>
      </div>
    </form>
  );
};

export default Form;
