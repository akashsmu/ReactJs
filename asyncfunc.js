import React from "react";
import axios from "axios";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const createInitialState = {
  loading: false,
  users: [],
  error: "",
};

const reducer = (state = createInitialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_DATA":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading:false
      };
    case "FETCH_USERS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
  }
};

const fetchUsersData = () => {
  return {
    type: "FETCH_USERS_DATA",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USERS_SUCCESS",
    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: "FETCH_USERS_ERROR",
    payload: error,
  };
};

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersData());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error.message));
        console.log(error.message);
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => {
   console.log(store.getState());
});

store.dispatch(fetchUsers());
export default fetchUsers;
