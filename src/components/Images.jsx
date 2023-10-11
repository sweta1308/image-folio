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
      <div className="flex justify-center">
        {state.images.length === 0 ? (
          <div className="flex justify-center items-center mt-[60px]">
            <MoonLoader color="#377dff" />
          </div>
        ) : (
          <div className="grid grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
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
