import { useDispatch } from "react-redux";
import { Download, Share } from "@mui/icons-material";
import { downloadImage } from "../actions/imageAction";
import { handleShare } from "../utils/handleShare";

export const SingleImage = ({ image }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center mb-[20px]">
        <div className="w-[400px] mt-[20px] flex flex-col items-center xs:w-[300px]">
          <img
            className="w-[400px] h-[400px] rounded-md xs:w-[300px] xs:h-[300px]"
            src={image?.urls.regular}
            alt={image?.alt_description}
          />
          <div>
            <h2 className="text-xl font-bold mt-[10px] text-center">
              {image?.slug}
            </h2>
            <p>
              {image?.location.name && (
                <p>
                  <strong>Located in</strong> {image?.location.name}
                </p>
              )}
            </p>
            <p>
              <strong>Likes: </strong>
              {image?.likes} {image?.likes === 1 ? "like" : "likes"}
            </p>
            <p>
              <strong>Downloads: </strong>
              {image?.downloads}{" "}
              {image?.downloads === 1 ? "download" : "downloads"}
            </p>
            <p>
              <strong>Views: </strong>
              {image?.views} {image?.views === 1 ? "view" : "views"}
            </p>
            <p>
              <strong>Updated by: </strong>
              {image?.user.name}
            </p>
            <p>
              {image?.user.portfolio_url && (
                <div>
                  <strong>User portfolio: </strong>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={image?.user.portfolio_url}
                    className="font-semibold hover:underline"
                  >
                    {image?.user.portfolio_url}
                  </a>
                </div>
              )}
            </p>
            <div className="w-full mt-[20px] text-sm flex justify-evenly">
              <button
                onClick={() => {
                  dispatch(downloadImage(image?.id));
                }}
                className=" bg-primary-color text-white p-[10px] rounded-md hover:bg-primary-dark"
              >
                <Download sx={{ fontSize: 20 }} /> Download Image
              </button>
              <button
                onClick={() => handleShare(image?.id)}
                className="border border-primary-color text-primary-color p-[8px] rounded-md hover:bg-primary-color hover:text-white"
              >
                <Share sx={{ fontSize: 20 }} /> Share Image
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
