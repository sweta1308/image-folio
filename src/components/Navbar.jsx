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
        <div className="w-full px-[60px] py-[20px] shadow-md flex items-center">
          <h1
            onClick={() => navigate("/")}
            className="text-primary-color font-extrabold text-[36px] cursor-pointer"
          >
            ImageFolio
          </h1>
          <div className="flex ml-[400px]">
            <div className="border-b-2 border-black p-[5px]">
              <Search sx={{ fontSize: 15 }} />
              <input
                onClick={() => navigate("/")}
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="outline-none text-sm mx-[8px] w-[250px]"
                placeholder="Search..."
              />
            </div>
            <button
              onClick={() => {
                dispatch(searchImage(searchInput));
                setSearchInput("");
              }}
              className="ml-[20px] bg-primary-color text-white px-[10px] rounded-md hover:bg-primary-dark"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
