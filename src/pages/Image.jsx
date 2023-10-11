import { useDispatch, useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";
import { handleShare } from "../utils/handleShare";
import { Download, Share } from "@mui/icons-material";
import { downloadImage } from "../actions/imageAction";

export const Image = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading, image } = state;
  return (
    <>
      {loading && !image ? (
        <div className="flex justify-center items-center mt-[60px]">
          <MoonLoader color="#377dff" />
        </div>
      ) : (
        <div className="flex justify-center mb-[20px]">
          <div className="w-[500px] mt-[20px] sm:w-[400px] flex flex-col items-center xs:w-[300px]">
            <img
              className="w-[400px] h-[400px] rounded-md sm:w-[350px] sm:h-[350px] xs:w-[300px] xs:h-[300px]"
              src={image.urls.regular}
              alt={image.alt_description}
            />
            <h2 className="text-xl font-bold mt-[10px]">
              {image.description ? image.description : image.alt_description}
            </h2>
            <p>
              {image.likes} {image.likes === 1 ? "like" : "likes"}
            </p>
            <p>Updated by: {image.user.name}</p>
            <p>
              {image.user.portfolio_url && (
                <div>
                  User portfolio:{" "}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={image.user.portfolio_url}
                    className="font-semibold hover:underline"
                  >
                    {image.user.portfolio_url}
                  </a>
                </div>
              )}
            </p>
            <div className="w-full mt-[20px] text-sm flex justify-evenly">
              <button
                onClick={() => {
                  dispatch(downloadImage(image.id));
                }}
                className=" bg-primary-color text-white p-[10px] rounded-md hover:bg-primary-dark"
              >
                <Download sx={{ fontSize: 20 }} /> Download Image
              </button>
              <button
                onClick={() => handleShare(image.id)}
                className="border border-primary-color text-primary-color p-[8px] rounded-md hover:bg-primary-color hover:text-white"
              >
                <Share sx={{ fontSize: 20 }} /> Share Image
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
