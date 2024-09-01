import "./Create.css";
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
  return <></>;
};

export default Create;
