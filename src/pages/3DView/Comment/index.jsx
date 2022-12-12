import React, { useEffect, useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { listComments } from "./data";
import user from "../../../assests/user.png";
import AskForLogin, { ee } from "../AskForCommentDialog";
import CommentAPI from "../../../api/commentAPI";
import moment from "moment";

const CommentPanel = ({ isShow, hideCommentPanel }) => {
  const [isShowLogin, setIsShowLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [listFeedback, setListFeedback] = useState([]);
  const [userWithoutLogin, setUserWithoutLogin] = useState({});
  const [feedbackInput, setFeedbackInput] = useState("");

  const handleHidePanel = () => {
    hideCommentPanel();
  };

  const getAllFeedback = async () => {
    try {
      const result = await CommentAPI.getAll();
      console.log(result);
      setListFeedback(result.feedbacks);
    } catch (error) {
      console.log(error);
    }
  };

  ee.on("login", function (text) {
    let userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    setUserInfo(userInfo);
  });

  useEffect(() => {
    let userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    setUserInfo(userInfo);
    getAllFeedback();
  }, []);

  const handlePostComment = async () => {
    if (userInfo.username) {
      try {
        const result = await CommentAPI.create({
          content: feedbackInput,
          userId: userInfo._id,
        });

        if (result.success) {
          getAllFeedback();
          setFeedbackInput("");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (userWithoutLogin.name) {
      try {
        const result = await CommentAPI.create({
          content: feedbackInput,
          name: userWithoutLogin.name,
        });

        if (result.success) {
          setFeedbackInput("");
          getAllFeedback();
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsShowLogin(true);
    }
  };

  const handleLoginSuccess = (values) => {
    //do sth
    setIsShowLogin(false);
    setUserWithoutLogin(values);
  };

  return (
    <div
      className={`fixed duration-100 ${
        isShow ? "right-0" : "-right-[400px]"
      } w-[400px] bg-white top-0 bottom-0 z-20 px-5`}
    >
      <div
        className="flex justify-between items-center mt-5"
        onClick={handleHidePanel}
      >
        <span>2340 comments</span>
        <BsArrowRightShort className="text-[30px] cursor-pointer" />
      </div>
      <div className="flex flex-col items-end gap-2 justify-end mt-3">
        <textarea
          placeholder="Enter your comments"
          rows="3"
          cols="50"
          value={feedbackInput}
          onChange={(e) => setFeedbackInput(e.target.value)}
        ></textarea>
        <button
          className="bg-blue-900 text-white px-10 py-1"
          onClick={handlePostComment}
        >
          Post
        </button>
      </div>
      <div>
        {listFeedback.map((item) => {
          return (
            <div className="flex gap-2 mt-4">
              <img src={user} alt="" className="w-10 self-start" />
              <div>
                <p className="text-base font-bold">
                  {item.name !== "" ? item.name : item.userId.username}
                </p>
                <p className="text-[15px]">{item.content}</p>
                <p className="text-xs text-gray-700">
                  {moment(item.updatedAt).fromNow()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <AskForLogin
        isShow={isShowLogin}
        onCancel={() => setIsShowLogin(false)}
        onOk={handleLoginSuccess}
      />
    </div>
  );
};

export default CommentPanel;
