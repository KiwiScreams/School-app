import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Update.css";
import Panel from "../panel/Panel";
const Update = () => {
  const { id } = useParams();
  const [inputData, setInputData] = useState({
    id: id,
    name: "",
    image: "",
    color: "",
  });
  const navigate = useNavigate();
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3030/objects/" + id)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (inputData.name && inputData.image && inputData.color) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [inputData]);
  const [isCreated, setIsCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsCreated(true);
    axios.put("http://localhost:3030/objects/" + id, inputData).then((res) => {
      setTimeout(() => {
        navigate("/");
      }, 1000);
    });
  };

  return (
    <>
      <div className="full">
        <Link to="/" className="create-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <section className="update-section">
          <div className="update-container">
            <div className="header">
              <h1>ედითი</h1>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="name">საგანი:</label>
                <input
                  type="text"
                  name="name"
                  value={inputData.name}
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="image">სურათი:</label>
                <input
                  type="text"
                  name="image"
                  value={inputData.image}
                  onChange={(e) =>
                    setInputData({ ...inputData, image: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="color">ფერი:</label>
                <input
                  type="color"
                  name="color"
                  value={inputData.color}
                  onChange={(e) =>
                    setInputData({ ...inputData, color: e.target.value })
                  }
                />
              </div>
              <button disabled={!isFormValid}>ედითი</button>
            </form>
          </div>
        </section>
      </div>
      {isCreated && (
        <Panel>
          <i className="fa-solid fa-file-pen"></i>
          <h2>წარმატება</h2>
          <p>საგანი წარმატებულად შეიცვალა</p>
        </Panel>
      )}
    </>
  );
};

export default Update;
