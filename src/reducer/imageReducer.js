const initialState = {
  loading: false,
  images: [],
  image: null,
  imageUrl: "",
};

export const imageReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return { ...state, loading: true };
    case "GET_IMAGES":
      return { ...state, loading: false, images: payload };
    case "GET_IMAGE":
      return { ...state, loading: false, image: payload };
    case "SEARCH_IMAGE":
      return { ...state, loading: false, images: payload };
    case "DOWNLOAD_IMAGE":
      return { ...state, loading: false, imageUrl: payload };
    default:
      return state;
  }
};
