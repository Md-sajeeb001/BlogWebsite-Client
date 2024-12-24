import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Comment from "./Comment";

const Comments = () => {
  const [comments, setComments] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchAllcomments = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/comments/${id}`
        );
        setComments(data);
      } catch (err) {
        console.log(err);
        if (err) {
          toast.error(err.message);
        }
      }
    };
    fetchAllcomments();
  }, [id]);

  return (
    <div>
      {comments?.map((comment) => (
        <Comment key={comment._id} comment={comment}></Comment>
      ))}
    </div>
  );
};

export default Comments;
