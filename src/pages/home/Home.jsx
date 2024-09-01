import "./Home.css";
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
        <></>
     );
}
 
export default Home;