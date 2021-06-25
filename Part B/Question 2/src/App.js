/*
import { useDispatch, useSelector } from "react-redux";
import { fetchListData, sendListData } from "./store/list-action";
*/
import InputForm from "./component/Form";

function App() {
  
  /* Assume we have GET and POST API to receive and send all data.

  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchListData());
  }, [dispatch]);

  useEffect(() => {
    if (data.changed) {
      dispatch(sendListData(data));
    }
  }, [data, dispatch]);
  
  */

  return (
    <div>
      <h1>Orange Cap Marathon 2021</h1>
      <InputForm />
    </div>
  );
}

export default App;
