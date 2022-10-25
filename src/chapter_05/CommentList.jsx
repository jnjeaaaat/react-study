import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이인제",
        comment: "처음 쓰는 댓글입니다.",
    },
    {
        name: "박태준",
        comment: "이름 바꿔보기 테스트",
    },
    {
        name: "박진솔",
        comment: "엘리먼트 여러개 만들어보기",
    }
]
function CommentList(props) {
    return(
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} /> 
                )
            })}
        </div>
    );
}

export default CommentList;