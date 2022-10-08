import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isvalid, setIsvalid] = useState(false);

    const submitHandler = (event)=>{
        event.preventDefault();
        if(title.trim().length === 0 || description.trim().length === 0 ||name.trim().length === 0 || profession.trim().length === 0 ){
            alert("Add All Fields!");
            setIsvalid(true);
            return ;
        }

        props.onSubmitHandler(name, profession, title, description);
    }

    const changeNameHandler = (event)=>{
        setIsvalid(false);
        setName(event.target.value);
    }
    const changeProfessionHandler = (event)=>{
        setIsvalid(false);
        setProfession(event.target.value);
    }
    const changeTitleHandler = (event)=>{
        setIsvalid(false);
        setTitle(event.target.value);
    }
    const changeDescriptionHandler = (event)=>{
        setIsvalid(false);
        setDescription(event.target.value);
    }

  return (
    <div className="form">
      <form className="form__control" onSubmit={submitHandler}>
        <div className="form__control__inside">
          <div className="form__control__inside__each">
            <label htmlFor="name">Name:</label>
            <input type="text" onChange={changeNameHandler} value={name}/>
          </div>
          <div className="form__control__inside__each">
            <label htmlFor="name">Profession:</label>
            <input type="text" onChange={changeProfessionHandler} value={profession}/>
          </div>
        </div>
        <div className="form__control__inside">
          <div className="form__control__inside__each">
            <label htmlFor="name">Title:</label>
            <input type="text" onChange={changeTitleHandler} value={title}/>
          </div>
          <div className="form__control__inside__each">
            <label htmlFor="name">Description:</label>
            <input type="text" onChange={changeDescriptionHandler} value={description}/>
          </div>
        </div>
        <div className="action">
            <button type="submit" className="action__btn" disabled={isvalid}>Add</button>
        </div>
       
      </form>
    </div>
  );
};

export default Form;
