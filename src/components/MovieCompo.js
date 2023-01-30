import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { db } from '../firebase/firebase';
import { UserAuth } from '../context/AuthContext';
import { arrayUnion, updateDoc, doc } from 'firebase/firestore';

const MovieCompo = ({ item }) => {
  const [like, setlike] = useState(false);
  const { user } = UserAuth();
  const [saved, setsaved] = useState(false);

  const SPECIFICID = doc(db, 'users', `${user?.email}`);

  const savedshows = async () => {
    if (user?.email) {
      setlike(!like);
      setsaved(true);

      await updateDoc(SPECIFICID, {
        savedshows: arrayUnion({
          id: item.id,
          title: item.title,
          image: item.backdrop_path,
        }),
      });
    } else {
      alert('PLEASE SIGN UP TO SAVE SHOWS');
    }
  };

  return (
    <div className="Row_imgbox_min">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
        className="Row_imgbox_min_img "
      />

      <p className="Row_imgbox_min_visible">{item?.title}</p>
      <p onClick={savedshows} className="Row_imgbox_min_like">
        {like ? <FaHeart /> : <FaRegHeart />}{' '}
      </p>
    </div>
  );
};

export default MovieCompo;
