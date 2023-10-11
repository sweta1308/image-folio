import { useSelector } from "react-redux";
import { MoonLoader } from "react-spinners";

export const Image = () => {
  const state = useSelector((state) => state);
  const { loading, image } = state;
  return (
    <>
      {loading && !image ? (
        <div className="flex justify-center items-center mt-[60px]">
          <MoonLoader color="#377dff" />
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-[500px] mt-[20px]">
            <img
              className="w-[400px] h-[400px] rounded-md"
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
          </div>
        </div>
      )}
    </>
  );
};
