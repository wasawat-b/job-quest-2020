import { useFetchDataQuery } from "../store/api-slice";
import { useAppSelector } from "../store/hook";

const ShownData: React.FC = () => {
  const inputItem = useAppSelector((state) => state.data.item);
  const { data = { type: "", value: [] }, isFetching } =
    useFetchDataQuery(inputItem);

  return (
    <div className="container">
      <h3 className="text-decoration-underline">Lists</h3>
      {data.value.map((item) => (
        <ul key={item.id}>
          <li>{item.joke}</li>
        </ul>
      ))}
    </div>
  );
};

export default ShownData;