import React, { useState }from 'react';
import { Fastar } from 'react-icons/fa';
import "/.StarRating.css";

export const StarRating = () => {
    const[rating, setRating] = useState(null);
    const[hover, setHover] = useState(null);

  return (
    <div>
        {[...Array(5)].map((star,i) =>{
            const ratingValue = i+1;
            return(
                <label>
                    <input
                    type="radio"
                    name="rating"
                    value={ratingValue}
                    onClick={()=>setRating(ratingValue)}
                    />
                <Fastar
                    className="Star"
                    color={ratingValue <= (hover || rating)? "#ffc107" : "#e4e5e9"}
                    size={50}
                    onMouseEnter={()=>setHover(ratingValue)}
                    onMouseLeave={()=>setHover(null)}
                />
                </label>
            );
        })}
        
    </div>
  );
}
