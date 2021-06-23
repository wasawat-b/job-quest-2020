import { useFetchDataQuery } from "../store/api-slice";
import { useAppSelector } from "../store/hook";

const ShownData: React.FC = () => {
  const inputItem = useAppSelector((state) => state.data.item);
  const { data = { type: "", value: [] }, isFetching } =
    useFetchDataQuery(inputItem);

  return (
    <div>
      <p>Number of jokes fetched : {data.value.length}</p>
      {data.value.map((item) => (
        <div key={item.id}>
          <p>{item.joke}</p>
        </div>
      ))}
    </div>
  );
};

export default ShownData;

/*
    <div>
        <p>Number of jokes fetched : {data.value.length}</p>
        {data.value.map(item => (
            <div key={item.id}>
                <p>{item.joke}</p>
            </div>
        ))}
    </div>

    <div>
        <p>{Object.values(data.value)[1]}</p>
    </div>
*/
