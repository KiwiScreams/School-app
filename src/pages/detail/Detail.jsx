import "./Detail.css";
const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [newGrade, setNewGrade] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [averageGrade, setAverageGrade] = useState(0);
  const [newDate, setNewDate] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3030/objects/" + id)
      .then((res) => {
        setData(res.data);
        calculateAverageGrade(res.data.grades);
      })
      .catch((err) => console.log(err));
  }, []);
  return <><div className="full" style={{ backgroundColor: `${data.color}` }}>
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
        <div className="flex">
          <div>
            <p className="grade">
              ქულა: {data.grades && data.grades.join(" | ")}
            </p>
            <p>საშუალო ქულა: {averageGrade.toFixed(1)}</p>
          </div>
          <button
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
                  
              }}
            >
              შენახვა
            </button>
          </div>
        )}
      </div>
    </div>
  </section>
</div></>;
};

export default Detail;
