// Components/Comments.js
import React, { useState, useEffect } from "react";
import { fetchCommentsByNewsId, postComment } from "../Services/NewsServices";

const anonymousNames = ["lion", "deer", "wolf", "ant", "fish"];
const anonymousIcon = ["🦁", "🦒", "🐺", "🐜", "🐠"];

const iconMapping = {
    lion: "fa-solid fa-lion",
    deer: "fa-solid fa-deer",
    wolf: "fa-solid fa-wolf",
    ant: "fa-solid fa-ant",
    fish: "fa-solid fa-fish",
  };

const Comments = ({ newsId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [selectedAnonymousName, setSelectedAnonymousName] = useState("");

  useEffect(() => {
    const getComments = async () => {
      try {
        const fetchedComments = await fetchCommentsByNewsId(newsId);
        setComments(fetchedComments);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    getComments();
  }, [newsId]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const anonymousUser = selectedAnonymousName || anonymousNames[Math.floor(Math.random() * anonymousNames.length)];
    try {
      const comment = await postComment(newsId, newComment, anonymousUser);
      setComments([...comments, comment]);
      setNewComment("");
      setSelectedAnonymousName("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="comments-section bg-slate-100 p-4 rounded-md">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul className="mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="mb-2">
            {/* <i className={`${iconMapping[comment.anonymousUser]} mr-2`}></i> */}
            {anonymousIcon[anonymousNames.indexOf(comment.AnonymousUser)]}
            &nbsp;&nbsp;
            <strong>
                {comment.AnonymousUser}
            </strong>: {comment.CommentText}
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          rows="3"
          placeholder="Add a comment..."
        />
        <select
          value={selectedAnonymousName}
          onChange={(e) => setSelectedAnonymousName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        >
          <option value="">Select an anonymous name...</option>
          {anonymousNames.map((name, index) => (
            <option key={name} value={name}>{anonymousIcon[index]} &nbsp; {name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="p-2 border rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Comments;
