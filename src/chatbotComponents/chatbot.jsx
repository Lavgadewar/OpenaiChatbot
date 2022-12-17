import "./chatbot.css";
import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { BiBot, BiUser } from "react-icons/bi";

function Basic() {
  const [chat, setChat] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [botTyping, setbotTyping] = useState(false);
  //   const [data, setData] = useState([]);
  let arr = [];
  //   let arru = [];

  console.log("lav", arr);
  useEffect(() => {
    // console.log("called", chat);
    const objDiv = document.getElementById("messageArea");
    objDiv.scrollTop = objDiv.scrollHeight;
  }, [chat]);
  console.log("called", chat);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const name = "lav";
    const request_temp = { sender: "user", sender_id: name, msg: inputMessage };
    console.log("lav i am at submit");
    if (inputMessage !== "") {
      setChat((chat) => [...chat, request_temp]);
      // console.log("chat",chat)
      setbotTyping(true);
      setInputMessage("");
      // rasaAPI(name,inputMessage);
    } else {
      window.alert("Please enter valid message");
    }
  };

  const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const getOpenAIRespoense = () => {
    arr.push("USER:" + inputMessage);
    console.log("lav login arry" + arr.join());
    openai
      .createCompletion({
        model: "text-davinci-002",
        prompt:
          "The following is a conversation between USER and JAX.\n\
           JAX is a sentient machine who is a career counsellor who will help you think through on the possible career path\n\
           and then ask any of the following  questions one after other to know about the user and after questions are done then give them carrer suggestions \n\
           1.What are your interests and hobbies? \n\
           2.What are your plans after high school? \n\
           3.Do you have any particular career goals? \n\
           4.What are your favorite subjects in school? \n\
           5.What are your favorite activities outside of school? \n\
           6.What are your thoughts on college? \n\
           7.What do you feel you need help with the most? \n\
           8.What do you feel are your strengths and weaknesses? \n\
           9.Have you begun to look at any colleges or universities? \n\
           10.What kind of advice would you like to receive? \n\
           11.What do you think are the most important factors to consider when choosing a career? \n\
           12.What are your thoughts on taking a gap year? \n\
           13.How have you performed in school? \n\
           14.How do you spend your free time? \n\
           15.What is your opinion about college life? \n\
           16.What subjects do you like and dislike? \n\
           17.Are you planning to take up any specific stream in 11th? \n\
           18.What are your parents or guardians views on your future plans? \n\
           19.Have you given any thought to your future career? \n\
           20. What kind of work environment do you prefer? \n\
           21.How do you manage your time? \n\
           22.Which stream are you planning to take- science, commerce or arts? \n\
           23.What do you hope to achieve after completing your studies? \n\
           24.Do you have any questions for me? \n\
           Kabaddi is a contact team sport. Played between two teams of seven players, the objective of the game is for a single player on offence, referred to as a raider, to run into the opposing team's half of a court, touch out as many of their defenders as possible, and return to their own half of the court, all without being tackled by the defenders, and in a single breath. Points are scored for each player tagged by the raider, while the opposing team earns a point for stopping the raider. Players are taken out of the game if they are touched or tackled, but are brought back in for each point scored by their team from a tag or tackle.\
           It is popular in the Indian subcontinent and other surrounding Asian countries. Although accounts of kabaddi appear in the histories of ancient India, the game was popularised as a competitive sport in the 20th century. It is the national sport of Bangladesh.[2] It is the state game of the Indian states of Tamil Nadu, Andhra Pradesh, Bihar, Haryana, Karnataka, Kerala, Maharashtra, Odisha, Punjab, Telangana, and Uttar Pradesh.[3] \n\
           There are two major disciplines of kabaddi: 'Punjabi kabaddi', also referred to as 'circle styles', comprises traditional forms of the sport that are played on a circular field outdoors, while the 'standard style', played on a rectangular court indoors, is the discipline played in major professional leagues and international competitions such as the Asian Games.\n\
           This game is known by numerous names in different parts of the Indian subcontinent, such as: kabaddi or chedugudu in Andhra Pradesh and Telangana; kabaddi in Maharashtra, Karnataka and Kerala; kabaddi, komonti or ha-du-du in West Bengal and Bangladesh; bhavatik in Maldives, kauddi or kabaddi in the Punjab region; hu-tu-tu in Western India, hu-do-do in Eastern India; chadakudu in South India; kapardi in Nepal; and kabadi or sadugudu in Tamil Nadu.[4]\n\
           \n\
           eg\n\
           JAX:What are your interests and hobbies?\n\
           USER:piaying Video Games \n\
           JAx:What are your plans after high school?\n\
           USER: go to collage \n\
           JAx: you can make career in game develpoement. \n" +
          arr.join() +
          "\n JAX:",
        max_tokens: 100,
        temperature: 0.7,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
        stop: ["USER:"],
      })
      .then((response) => {
        console.log("lavv2", response);
        if (response.data.choices) {
          response.data.choices.map((item) => {
            const response_temp = {
              sender: "bot",
              recipient_id: 1,
              msg: item.text,
            };
            setbotTyping(false);

            setChat((chat) => [...chat, response_temp]);
          });
        }
      });
  };
  const stylecard = {
    maxWidth: "35rem",
    border: "1px solid black",
    paddingLeft: "0px",
    paddingRight: "0px",
    paddingTop: "0px",
    borderRadius: "30px",
    boxShadow: "0 16px 20px 0 rgba(0,0,0,0.4)",
  };
  const styleHeader = {
    height: "4.5rem",
    borderBottom: "1px solid black",
    borderRadius: "30px 30px 0px 0px",
    backgroundColor: "#282c34",
  };
  const styleFooter = {
    //maxWidth : '32rem',
    borderTop: "1px solid black",
    borderRadius: "0px 0px 30px 30px",
    backgroundColor: "#282c34",
  };
  const styleBody = {
    paddingTop: "10px",
    height: "28rem",
    overflowY: "a",
    overflowX: "hidden",
  };

  return (
    <div>
      <div className="container parent">
        <div className=" flex justify-content-center allin">
          <div className="card child" style={stylecard}>
            <div className="cardHeader text-white" style={styleHeader}>
              <h1 style={{ margin: "0px", color: "white" }}>carrer counsler</h1>

              {botTyping ? <h6>Bot Typing....</h6> : null}
            </div>
            <div className="cardBody" id="messageArea" style={styleBody}>
              {/* {console.log("chat",chat)} */}

              <div className="row msgarea">
                {/* {console.log("kush",chat)} */}
                {chat.map((user, key) => {
                  if (user.sender === "bot") {
                    // arr[key]=user.msg

                    arr.push("JAX:" + user.msg);
                    console.log("RESPONSE", arr);
                  }
                  if (user.sender === "user") {
                    arr[key] = user.msg;
                    arr.push("\n USER:" + user.msg);
                    // arr.push({...arr,user:user.msg});
                    console.log(arr, "arr");
                  }
                  return (
                    <div key={key}>
                      {user.sender === "bot" ? (
                        <div className="msgalignstart">
                          <BiBot className="botIcon" />
                          <h5 className="botmsg">
                            <div>{user.msg}</div>
                          </h5>
                        </div>
                      ) : (
                        <div className="msgalignend">
                          <h5 className="usermsg">{user.msg}</h5>
                          <BiUser className="userIcon" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="cardFooter text-white" style={styleFooter}>
              <div className="row">
                <form style={{ display: "flex" }} onSubmit={handleSubmit}>
                  <div className="col-10" style={{ paddingRight: "0px" }}>
                    <input
                      onChange={(e) => setInputMessage(e.target.value)}
                      value={inputMessage}
                      type="text"
                      className="msginp"
                    ></input>
                  </div>
                  <div className="col-2 cola">
                    <button
                      type="submit"
                      onClick={getOpenAIRespoense}
                      className="circleBtn"
                    >
                      <IoMdSend className="sendBtn" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
