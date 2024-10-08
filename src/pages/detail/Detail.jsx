import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Detail.css";
import tinycolor from "tinycolor2";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [newGrade, setNewGrade] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [averageGrade, setAverageGrade] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3030/objects/" + id)
      .then((res) => {
        const grades = res.data.grades.filter(
          (grade) => typeof grade === "number"
        );
        const updatedData = { ...res.data, grades };
        setData(updatedData);
        calculateAverageGrade(updatedData.grades);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleAddGrade = () => {
    axios
      .patch("http://localhost:3030/objects/" + id, {
        grades: [...data.grades, Number(newGrade)],
      })
      .then((res) => {
        const updatedData = {
          ...data,
          grades: [...data.grades, Number(newGrade)],
        };
        setData(updatedData);
        setNewGrade("");
        setShowInput(false);
        calculateAverageGrade(updatedData.grades);
      })
      .catch((err) => console.log(err));
  };

  const calculateAverageGrade = (grades) => {
    setAverageGrade(
      grades.length === 0
        ? 0
        : grades.reduce((a, b) => a + b, 0) / grades.length
    );
  };

  const isDarkColor = (color) => {
    const tinyColor = tinycolor(color);
    return tinyColor.isDark();
  };

  return (
    <>
      <div className="full" style={{ backgroundColor: `${data.color}` }}>
        <Link to="/" className="create-btn">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <section className="read-section">
          <div>
            <div
              className="image"
              style={{
                backgroundImage: `url(${data.image})`,
              }}
            ></div>
            <div className="read-container">
              <h1 style={{ color: `${data.color}` }}>{data.name}</h1>
              <button
                className="add"
                onClick={() => setShowInput(true)}
                style={{
                  backgroundColor: data.color ? data.color : "black",
                  color: data.color
                    ? isDarkColor(data.color)
                      ? "white"
                      : "black"
                    : "black",
                }}
              >
                დააამატე ქულა
              </button>
              <div className="flex">
                <div>
                  <p className="grade">
                    ქულა: {data.grades && data.grades.join(" | ")}
                  </p>
                  <p>საშუალო ქულა: {averageGrade.toFixed(1)}</p>
                </div>
                <button
                  className="add-desktop"
                  onClick={() => setShowInput(true)}
                  style={{
                    backgroundColor: data.color ? data.color : "black",
                    color: data.color
                      ? isDarkColor(data.color)
                        ? "white"
                        : "black"
                      : "black",
                  }}
                >
                  დააამატე ქულა
                </button>
              </div>
              {showInput && (
                <div className="show-input">
                  <input
                    type="number"
                    value={newGrade}
                    onChange={(e) => setNewGrade(e.target.value)}
                    placeholder="დაამატე ქულა"
                    style={{ border: `${data.color} 3px solid` }}
                  />
                  <button
                    onClick={handleAddGrade}
                    style={{
                      backgroundColor: data.color ? data.color : "black",
                      color: data.color
                        ? isDarkColor(data.color)
                          ? "white"
                          : "black"
                        : "black",
                    }}
                    disabled={newGrade === ""}
                  >
                    შენახვა
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Detail;
