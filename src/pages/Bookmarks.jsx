import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";

const Bookmarks = () => {
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    const savedMovies = JSON.parse(localStorage.getItem("bookmarkedMovies")) || [];
    setBookmarkedMovies(savedMovies);
  }, []);

  const handleDelete = (movieId) => {
    const updatedMovies = bookmarkedMovies.filter((movie) => movie.id !== movieId);
    setBookmarkedMovies(updatedMovies);
    localStorage.setItem("bookmarkedMovies", JSON.stringify(updatedMovies));
    toast.error("Movie removed from bookmarks");
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 ml-[80px]">
      <h1 className="text-3xl font-bold mb-4">Bookmarked Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {bookmarkedMovies.length ? (
          bookmarkedMovies.map((movie) => (
            <div className="relative w-80 h-auto" key={movie.id}>
              <div
                className="absolute p-2 rounded-full cursor-pointer -mt-2 right-2 top-2"
                onClick={() => handleDelete(movie.id)}
              >
                <MdDelete className="text-red-600 w-6 h-6" />
              </div>
              <img
                src={movie.poster?.previewUrl || "https://picsum.photos/470/309"}
                alt={movie.name}
                className="w-full h-[174px] rounded-lg object-cover"
              />
              <div className="mt-4 text-gray-500">
                <p className="text-xs flex items-center space-x-2">
                  <span>{movie.year}</span>
                  <span className="flex items-center">{movie.type}</span>
                  <span>PG</span>
                </p>
                <h3 className="text-white text-base font-semibold mt-2">{movie.name}</h3>
              </div>
            </div>
          ))
        ) : (
          <p>No bookmarked movies found.</p>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
