import { Download, Share } from "@mui/icons-material";
import { handleShare } from "../utils/handleShare";

export const CardModal = ({ imageId, setShowModal }) => {
  return (
    <>
      <div className="bg-white z-[20] absolute top-12 right-3 text-sm font-semibold rounded-sm">
        <p className="p-[8px] hover:text-primary-color">
          <Download sx={{ fontSize: 20 }} /> Download Image
        </p>
        <hr />
        <p
          onClick={(e) => {
            e.stopPropagation();
            handleShare(imageId);
            setShowModal(false);
          }}
          className="p-[8px] hover:text-primary-color"
        >
          <Share sx={{ fontSize: 20 }} /> Share Image
        </p>
      </div>
    </>
  );
};
