import { useState } from "react";
import { Search } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchImage } from "../actions/imageAction";

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div className="sticky top-0 z-30 bg-white">
        <div className="w-full px-[60px] py-[20px] shadow-md flex items-center md:flex-col md:items-start sm:px-[20px]">
          <h1
            onClick={() => navigate("/")}
            className="text-primary-color font-extrabold text-[36px] cursor-pointer md:text-[30px] sm:text-[26px]"
          >
            ImageFolio
          </h1>
          <div className="rounded-md flex ml-[400px] border border-black xl:ml-[200px] md:ml-0 md:mt-[15px]">
            <input
              onClick={() => navigate("/")}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="outline-none text-sm mx-[8px] p-[5px] w-[400px] lg:w-[300px] xs:w-[250px]"
              placeholder="Search..."
            />
            <button
              disabled={searchInput.length === 0}
              onClick={() => {
                dispatch(searchImage(searchInput));
                setSearchInput("");
              }}
              className="bg-primary-color text-white px-[10px] py-[5px] hover:bg-primary-dark"
            >
              <Search sx={{ fontSize: 25 }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
