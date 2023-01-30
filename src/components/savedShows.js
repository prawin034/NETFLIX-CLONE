import React, { useState, useEffect } from 'react';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { db } from '../firebase/firebase';
import { UserAuth } from '../context/AuthContext';

const SavedShows = () => {
  const [movies, setmovies] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setmovies(doc.data()?.savedshows);
    });
  }, [user?.email]);

  const movieref = doc(db, 'users', `${user?.email}`);
  const deletedoc = async (id) => {
    try {
      const results = movies.filter((item) => item.id !== id);
      await updateDoc(movieref, {
        savedshows: results,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="saved_shows">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/430b26cf-b6e1-473e-a55d-0abc03631481/IN-en-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="sign in"
        className="saved_shows_img"
      />
      <div className="saved_shows_box">
        <h1 className="saved_shows_box_h1">SAVED SHOWS</h1>

        {movies.map((item, id) => (
          <div className="saved_shows_box_box" key={id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item?.image}`}
                alt={item?.title}
                className="saved_shows_box_box_img "
              />
              <p className="saved_shows_box_box_title">{item.title}</p>
              <p
                onClick={() => deletedoc(item.id)}
                className="saved_shows_box_box_close"
              >
                <AiOutlineClose size={30} />{' '}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedShows;
