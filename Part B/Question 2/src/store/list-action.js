import { listActions } from "./list-slice";

// GET method
export const fetchListData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://some-link-to-store-data.com/datas.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch list data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const listData = await fetchData();
      dispatch(
        listActions.receiveList({
          data: listData.data,
        })
      );
    } catch (error) {
      alert(error);
    }
  };
};

// PUT method
export const sendListData = (data) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://some-link-to-store-data.com/datas.json",
        {
          method: "PUT",
          body: JSON.stringify({
            data: data.data,
          }),
          headers: {
            'Content-Type' : 'application/json'
          },
        }
      );

      if (!response.ok) {
        throw new Error("Could not send list data!");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      alert(error);
    }
  };
};
