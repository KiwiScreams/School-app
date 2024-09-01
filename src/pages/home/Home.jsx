import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import Panel from "../panel/Panel";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/objects")
      .then((res) => {
        const dataWithAverageGrade = res.data.map((item) => {
          if (item.grades && item.grades.length > 0) {
            const averageGrade =
              item.grades.reduce((a, b) => a + b, 0) / item.grades.length;
            return { ...item, averageGrade };
          } else {
            return item;
          }
        });
        setData(dataWithAverageGrade);
      })
      .catch((err) => console.log(err));
  }, []);
  const [isDeleted, setIsDeleted] = useState(false);

  function handleDelete(id) {
    axios.delete("http://localhost:3030/objects/" + id).then((res) => {
      axios
        .get("http://localhost:3030/objects")
        .then((res) => {
          const dataWithAverageGrade = res.data.map((item) => {
            if (item.grades && item.grades.length > 0) {
              const averageGrade =
                item.grades.reduce((a, b) => a + b, 0) / item.grades.length;
              return { ...item, averageGrade };
            } else {
              return item;
            }
          });
          setData(dataWithAverageGrade);
          setIsDeleted(true);
          setTimeout(() => {
            setIsDeleted(false);
          }, 2000);
        })
        .catch((err) => console.log(err));
    });
  }

  return (
    <>
      <section className="home-section">
        <div className="home-container">
          <Link to="/create" className="create-btn">
            +
            <div className="tooltip">
              <p className="tooltiptext left">საგნის დამატება</p>
            </div>
          </Link>
          <Link to="/table" className="table-btn">
            <i className="fa-solid fa-table-cells-row-unlock"></i>
            <div className="tooltip">
              <p className="tooltiptext right">ონლაინ ცხრილი</p>
            </div>
          </Link>

          <h1>საგნები</h1>
          <table>
            <thead>
              <tr>
                <th>ხატულა</th>
                <th>საგანი</th>
                <th>საშუალო ქულა</th>
                <th>მოქმედება</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((d, i) => {
                  return (
                    <tr key={i} style={{ color: `${d.color}` }}>
                      <td
                        className="image"
                        style={{
                          backgroundImage: `url(${d.image})`,
                        }}
                      ></td>
                      <td className="name">{d.name}</td>
                      <td className="grade">
                        {d.averageGrade ? d.averageGrade.toFixed(1) : "0"}
                      </td>
                      <td>
                        <Link to={`/update/${d.id}`} className="btn">
                          <i
                            className="fa-solid fa-pen"
                            style={{ color: `${d.color}` }}
                          ></i>
                          <div className="tooltip">
                            <p
                              className="tooltiptext right"
                              style={{ backgroundColor: `${d.color}` }}
                            >
                              რედაქტირება
                            </p>
                          </div>
                        </Link>
                        <button
                          onClick={(e) => handleDelete(d.id)}
                          className="btn"
                        >
                          <i
                            className="fa-solid fa-delete-left"
                            style={{ color: `${d.color}` }}
                          ></i>
                          <div className="tooltip">
                            <p
                              className="tooltiptext right"
                              style={{ backgroundColor: `${d.color}` }}
                            >
                              წაშლა
                            </p>
                          </div>
                        </button>
                        <Link to={`/read/${d.id}`} className="btn">
                          <i
                            className="fa-regular fa-folder-open"
                            style={{ color: `${d.color}` }}
                          ></i>
                          <div className="tooltip">
                            <p
                              className="tooltiptext right"
                              style={{ backgroundColor: `${d.color}` }}
                            >
                              დეტალურად
                            </p>
                          </div>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr className="empty">
                  <td colSpan="4" style={{ textAlign: "center" }}>
                    სია ცარიელია
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
      {isDeleted && (
        <Panel>
          <h2>წარმატება</h2>
          <p>საგანი წარმატებულად წაიშალა</p>
        </Panel>
      )}
    </>
  );
};

export default Home;