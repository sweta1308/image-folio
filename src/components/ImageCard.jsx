import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MoreVert } from "@mui/icons-material";
import { fetchSingleImage } from "../actions/imageAction";
import { CardModal } from "./CardModal";

export const ImageCard = ({ image }) => {
  const { id, urls, alt_description, description, likes } = image;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => {
          dispatch(fetchSingleImage(id));
          navigate(`/image/${id}`);
        }}
        className="w-[250px] p-[10px] m-[10px] relative cursor-pointer shadow-xl"
      >
        <div className="relative">
          <img
            className="w-[250px] h-[250px]"
            src={urls.regular}
            alt={alt_description}
          />
          <div
            onClick={(e) => {
              e.stopPropagation();
              setShowModal(!showModal);
            }}
            className="absolute top-2 right-2 cursor-pointer"
          >
            <MoreVert sx={{ color: "white" }} />
          </div>
        </div>

        <div className="px-[7px]">
          <p className="my-[5px] font-bold">
            {description
              ? description.length > 22
                ? description.substring(0, 22) + "..."
                : description
              : alt_description.length > 22
              ? alt_description.substring(0, 22) + "..."
              : alt_description}
          </p>
          <p className="mt-[-6px]">
            {likes} {likes === 1 ? "like" : "likes"}
          </p>
        </div>
        {showModal && <CardModal imageId={id} setShowModal={setShowModal} />}
      </div>
    </div>
  );
};
