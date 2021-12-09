import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions";

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmN2YzNmQxNDcwYzMwMTczNTNhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA1MzQyNCwiZXhwIjoxNjM5MzEyNjI0fQ.ASAwsODywO_7kjCMqGcGn4tSfXcpDwsE1hi8s_cLjPk",
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmN2YzNmQxNDcwYzMwMTczNTNhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA1MzQyNCwiZXhwIjoxNjM5MzEyNjI0fQ.ASAwsODywO_7kjCMqGcGn4tSfXcpDwsE1hi8s_cLjPk",
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
        token:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjFmN2YzNmQxNDcwYzMwMTczNTNhNyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzOTA1MzQyNCwiZXhwIjoxNjM5MzEyNjI0fQ.ASAwsODywO_7kjCMqGcGn4tSfXcpDwsE1hi8s_cLjPk",
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};
