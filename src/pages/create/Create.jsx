import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Create.css";
import Panel from "../panel/Panel";

const Create = () => {
  const [inputData, setInputData] = useState({
    name: "",
    image: "",
    color: "",
    grades: [],
  });
  const navigate = useNavigate();
  const { name, image, color } = inputData;
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    if (name && image) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [name, image, color]);
  const [isCreated, setIsCreated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3030/objects", inputData).then((res) => {
      setIsCreated(true);
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
        <section className="create-section">
          <div className="create-container">
            <div className="header">
              <div className="line"></div>
              <h1>შექმნა</h1>
              <div className="line"></div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label htmlFor="name">საგანი</label>
                <input
                  type="text"
                  name="name"
                  placeholder="ჩაწერეთ საგნის დასახელება"
                  onChange={(e) =>
                    setInputData({ ...inputData, name: e.target.value })
                  }
                />
              </div>
              <div className="input-container">
                <label htmlFor="image">ხატულა:</label>
                <input
                  type="text"
                  name="image"
                  placeholder="ჩააგდეთ ხატულას URL"
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
                  placeholder="აირჩიეთ საგნის ფერი"
                  onChange={(e) =>
                    setInputData({ ...inputData, color: e.target.value })
                  }
                />
              </div>
              <button disabled={!isFormValid}>შექმნა</button>
            </form>
          </div>
        </section>
      </div>
      {isCreated && (
        <Panel>
          <i className="fa-solid fa-folder-plus"></i>
          <h2>წარმატება</h2>
          <p>საგანი წარმატებულად შეიქმნა</p>
        </Panel>
      )}
    </>
  );
};

export default Create;
