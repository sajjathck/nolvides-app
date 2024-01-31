
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
        <div className="container-fluid">
            <div className="row g-4 ">
                <div className="head d-flex justify-content-center">
                    <h1 className="text-success"> notes</h1>
                </div>
                <div>
                    <div className=" align-items-center">
                        <h3>Add Notes</h3>
                        <div class="mb-3">
                            <input
                                className="form-control"
                                type="text"
                                id="title"
                                placeHolder="Add title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            ></input>
                        </div>
                        <div class="mb-3">
                            <textarea
                                className="form-control"
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
                        <button className="btn btn-outline-dark" type="submit" onClick={handle}>
                            Submit
                        </button>
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