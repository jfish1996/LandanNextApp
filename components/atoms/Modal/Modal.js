import React, { useState } from "react";
import styled from "styled-components";
import { animate, motion } from "framer-motion";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { MAX_WINDOW_WIDTH } from "../../../styles/constants";
import Flex from "../Styled-Containers/Flex/Flex";
const StyledModal = styled(motion.div)`
  width: 100%;
  position: fixed;
  background-color: white;
  border: 1px solid black;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    max-width: 60%;
    min-width: 500px;
    position: fixed;
  }
`;
const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  background-color: black;
  z-index: 9;
  opacity: 0.9;
`;

const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    flex-direction: row;
  }
`;

const StyledImg = styled.img`
  flex-shrink: 0;
  object-fit: cover;
  padding: 0;
  width: 100%;
  height: 200px;
  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    height: 100%;
    width: 200px;
    height: 200px;
  }
`;

const StyledInput = styled.input`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.textColor};
  cursor: ${(props) => props.cursor};
  border: ${(props) => props.border};
  flex-grow: ${(props) => props.flexGrow}; ;
`;

const StyledCloseDiv = styled.button`
  display: flex;
  justify-content: "flex-end";
  gap: 10px;
  position: "absolute";
  top: "10px";
  right: "10px";
  cursor: "pointer";
  color: white;
  background: none;
  border: none;
  &:hover {
    color: yellow;
  }

  @media (min-width: ${MAX_WINDOW_WIDTH}px) {
    color: black;
  }
`;

export default function Modal({ modalActive, posts, onClickBackDrop }) {
  return modalActive ? (
    <>
      <StyledBackdrop onClick={onClickBackDrop} />
      <StyledModal
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.09 }}
      >
        <StyledContentContainer>
          <StyledContentContainer>
            {posts?.map((item) => {
              const defaultURL =
                item?.attributes?.Img?.data[0]?.attributes?.url;
              return (
                <StyledImg
                  src={defaultURL}
                  width={"200px"}
                  height={"200px"}
                  id={item.id}
                />
              );
            })}
            <Flex flexDirection={"column"} padding={"40px"}>
              <StyledCloseDiv
                justifyContent={"flex-end"}
                gap={"10px"}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  onClickBackDrop();
                }}
              >
                X
              </StyledCloseDiv>
              <MailchimpSubscribe
                render={({ subscribe, status, message }) => (
                  <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                  />
                )}
              />
            </Flex>
          </StyledContentContainer>
        </StyledContentContainer>
      </StyledModal>
    </>
  ) : null;
}
function CustomForm({ status, message, onValidated }) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
      });
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <p>
        enter your email below for your chance to win big! no wait, i mean
        you'll get emails from me every once and a while same thing, right?
      </p>

      {status === "sending" && (
        <div className="mc__alert mc__alert--sending">sending...</div>
      )}
      {status === "error" && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === "success" && (
        <div dangerouslySetInnerHTML={{ __html: message }} />
      )}

      <Flex width={"100%"}>
        <StyledInput
          flexGrow={1}
          border={"2px solid black"}
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="your@email.com"
          required
        />

        <StyledInput
          border={"none"}
          backgroundColor={"black"}
          textColor={"white"}
          cursor={"pointer"}
          className="submit-button"
          label="subscribe"
          type="submit"
          value={"subscribe"}
          formValues={[email, firstName, lastName]}
        />
      </Flex>
    </form>
  );
}
