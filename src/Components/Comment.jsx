/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
  const { userProfile, userAuthor, textArea } = comment || {};
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="user profile" src={userProfile} />
        </div>
      </div>
      <p className="text-sm font-bold pb-2">{userAuthor}</p>
      <div className="chat-bubble">{textArea}</div>
    </div>
  );
};

export default Comment;
