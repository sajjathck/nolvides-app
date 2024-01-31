import { useState } from "react";
import data from "../Data";
import Card from "./Card";

function MainPage() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [notes, setNotes] = useState(data);
  const [count, setCount] = useState(4);

  function remove(id) {
    setNotes(notes.filter((e) => e.key !== id));
  }

  function handle() {
    if (!title || !des) {
      window.alert("Incomplete input");
      return;
    }
    setNotes([...notes, { key: count, title: title, des: des }]);
    setCount(count + 1);
    setTitle("");
    setDes("");
    console.log(notes);
  }

  return (
    <div className="container-fluid bg-light">
      <div className="row g-4 ">
        <div className="head mt-5 d-flex justify-content-center">
          <h1 className="text-success"> No Olvides</h1>
        </div>
        <div className="d-flex justify-content-center mt-0">
          <h6 className="text-muted"> Don't Forget</h6>
        </div>
        <div className="row  justify-content-center my-5">
          <div className="col-md-6 p-5 rounded-5 shadow border ">
            <h3>Add Notes</h3>
            <div class="mb-3">
              <input
                className="shadow rounded-5 form-control"
                type="text"
                id="title"
                placeHolder="Title Here "
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></input>
            </div>
            <div className="mb-3">
              <textarea
                className="shadow rounded-4 form-control"
                rows="3"
                type="text"
                id="description"
                placeholder="Notes"
                value={des}
                onChange={(e) => {
                  setDes(e.target.value);
                }}
              ></textarea>
            </div>
            <div className="mb-3">
              <button
                className="shadow btn btn-outline-dark"
                type="submit"
                onClick={handle}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
        <div className="row row-cols-3">
          {notes.map((e) => (
            <div className="card-group">
              <div className="card bg-primary bg-opacity-10 rounded-4 shadow-1 border-0 mt-3">
                <div className="card-body ">
                  <button
                    className="btn btn-close position-absolute top-0 end-0 m-2"
                    type="input"
                    onClick={() => remove(e.key)}
                  />
                  <h2 className="card-title"> {e.title}</h2>
                  <p className="card-text"> {e.des}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
