import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";
import { SingleImage } from "../components/SingleImage";
import { fetchSingleImage } from "../actions/imageAction";

export const Image = () => {
  const state = useSelector((state) => state);
  const { loading, image } = state;
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleImage(id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      {loading && !image ? (
        <div className="flex justify-center items-center mt-[60px]">
          <MoonLoader color="#377dff" />
        </div>
      ) : (
        <SingleImage image={image} />
      )}
    </>
  );
};
