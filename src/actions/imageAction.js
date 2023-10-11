import axios from "axios";
import { handleDownload } from "../utils/handleDownload";

export const fetchImages = () => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { status, data } = await axios.get(
      "https://api.unsplash.com/photos?page=1&client_id=CyU8YsvA7ySMnH4oaTVYLnNDlIfXer9lFpf-TEhuVEQ"
    );
    if (status === 200) {
      dispatch({ type: "GET_IMAGES", payload: data });
    }
  } catch (e) {
    console.error(e);
  }
};

export const fetchSingleImage = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { status, data } = await axios.get(
      `https://api.unsplash.com/photos/${id}?client_id=CyU8YsvA7ySMnH4oaTVYLnNDlIfXer9lFpf-TEhuVEQ`
    );
    if (status === 200) {
      dispatch({ type: "GET_IMAGE", payload: data });
    }
  } catch (e) {
    console.error(e);
  }
};

export const searchImage = (searchInput) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { status, data } = await axios.get(
      `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=CyU8YsvA7ySMnH4oaTVYLnNDlIfXer9lFpf-TEhuVEQ`
    );
    if (status === 200) {
      dispatch({ type: "SEARCH_IMAGE", payload: data.results });
    }
  } catch (e) {
    console.error(e);
  }
};

export const downloadImage = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });
  try {
    const { status, data } = await axios.get(
      `https://api.unsplash.com/photos/${id}/download?client_id=CyU8YsvA7ySMnH4oaTVYLnNDlIfXer9lFpf-TEhuVEQ`
    );
    if (status === 200) {
      handleDownload(data.url);
    }
  } catch (e) {
    console.error(e);
  }
};
