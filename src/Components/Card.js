import { useState } from "react";
import data from "../Data";



function Card() {
    const [notes, setNotes] = useState(data);

    function remove(id) {
        setNotes(notes.filter((e) => e.key !== id));
    }
    return (
          <div className="col-md-4 g-5 ">
            <div className="card bg-primary bg-opacity-10 rounded-4 shadow border-0">
              <div className="card-body  text-light  ">
              {notes.map((e) => (<div className="notes-item">
                        <div>
                            <h4>Title: {e.title}</h4>
                            <p>Note: {e.des}</p>
                        </div>
                        <button type="input" onClick={() => remove(e.key)}>X</button>
                    </div>
                    ))}
              </div>
            </div>
          </div>
    );
  }
  export default Card;