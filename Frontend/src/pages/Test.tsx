import comments from "../../Data/comments.json";

const Test = () => {
  const thirdLayerComments = comments.filter((comment) => {
    if (!comment.parentId) return false; // top-level
    const parentComment = comments.find((c) => c._id === comment.parentId);
    return parentComment?.parentId !== null; // parent is a reply
  });

   // number of third-layer comments

  return <div>{thirdLayerComments.length}</div>;
};

export default Test;
