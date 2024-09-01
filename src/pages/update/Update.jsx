import "./Update.css";
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
        <></>
     );
}
 
export default Update;