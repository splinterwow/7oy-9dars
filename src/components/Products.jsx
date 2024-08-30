import React, { useState, useEffect } from "react";
import axios from "axios";
import { CiBookmark } from "react-icons/ci";
import { MdLocalMovies } from "react-icons/md";
import { FaBookmark } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Products = () => {
  const [data, setData] = useState([]);
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    // Fetch movies data
    axios
      .get("https://api.kinopoisk.dev/v1.4/movie?rating.imdb=8-10&limit=30", {
        headers: {
          "X-API-KEY": "Z95NM1Z-SD44EGA-GQ8QVTP-VA07DE7",
        },
      })
      .then((response) => {
        setData(response.data.docs);
        const savedMovies =
          JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
        setBookmarkedMovies(savedMovies);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleSave = (movie) => {
    const isBookmarked = bookmarkedMovies.some((m) => m.id === movie.id);
    const updatedBookmarkedMovies = isBookmarked
      ? bookmarkedMovies.filter((m) => m.id !== movie.id)
      : [...bookmarkedMovies, movie];

    localStorage.setItem(
      "bookmarkedMovies",
      JSON.stringify(updatedBookmarkedMovies)
    );
    setBookmarkedMovies(updatedBookmarkedMovies);
    toast[isBookmarked ? "error" : "success"](
      isBookmarked ? "Movie removed from bookmarks" : "Movie added to bookmarks!"
    );
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 ml-[80px]">
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Search for movies"
          className="bg-gray-800 text-white rounded-lg p-2 w-full max-w-[1000px]"
        />
      </div>

      <h1 className="text-3xl font-bold mb-4">Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((mov) => (
          <div className="relative w-80" key={mov.id}>
            <div
              className="absolute p-2 rounded-full cursor-pointer -mt-2 right-2 top-2"
              onClick={() => handleSave(mov)}
            >
              {bookmarkedMovies.some((m) => m.id === mov.id) ? (
                <FaBookmark className="text-white w-6 h-6" />
              ) : (
                <CiBookmark className="text-white w-6 h-6" />
              )}
            </div>
            <img
              src={mov.poster?.previewUrl || "https://picsum.photos/470/309"}
              alt={mov.name}
              className="w-full h-[174px] rounded-lg object-cover"
            />
            <div className="mt-4 text-gray-500">
              <p className="text-xs flex items-center space-x-2">
                <span>{mov.year}</span>
                <span className="flex items-center">
                  <MdLocalMovies className="text-base" /> {mov.type}
                </span>
                <span>PG</span>
              </p>
              <h3 className="text-white text-base font-semibold mt-2">
                {mov.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
