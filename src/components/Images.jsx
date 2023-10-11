import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";
import { fetchImages } from "../actions/imageAction";
import { ImageCard } from "./ImageCard";

export const Images = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);
  const state = useSelector((state) => state);
  return (
    <>
      <div>
        {state.images.length === 0 ? (
          <div className="flex justify-center items-center mt-[60px]">
            <MoonLoader color="#377dff" />
          </div>
        ) : (
          <div className="flex flex-wrap px-[30px] justify-between">
            {state.images.map((image) => (
              <div key={image.id}>
                <ImageCard image={image} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
