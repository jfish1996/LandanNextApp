import React, { useState } from "react";
import { returnSectionData } from "../../lib/returnData";
import { returnLinks } from "../../lib/returnLinks";
import RichTextParagraph from "../../components/atoms/RichTextParagraph/RichTextParagraph";
import { TOP_PARAGRAPH_SECTION_PADDING } from "../../styles/constants";
import Header from "../../components/atoms/List-Items/Header";
import Modal from "../../components/atoms/Modal/Modal";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { useStateContext } from "../../lib/context";
import Image from "next/image";
import Flex from "../../components/atoms/Styled-Containers/Flex/Flex";

export default function MailingList({ feedView }) {
  const SECTION_NAME = "MailingList.links";
  const { activeModal, setActiveModal } = useStateContext();
  const activateModal = () => {
    setActiveModal(true);
  };
  const deactivateModal = () => {
    setActiveModal(false);
  };
  const { posts, markup } = returnSectionData(SECTION_NAME);

  let link;
  posts ? (link = posts[0]?.attributes?.FullDescription) : null;
  return (
    <>
      <Header
        textAlign={"left"}
        fontWeight={"700"}
        color={"black"}
        padding={`${TOP_PARAGRAPH_SECTION_PADDING}px 0 0 0`}
        bigScreenPadding={0}
      >
        {"mailing list"}
      </Header>
      <Modal modalActive={activeModal} onClickBackDrop={deactivateModal}>
        <Flex flexDirection={"row"}>
          <Flex>
            {posts?.map((item) => {
              const defaultURL =
                item?.attributes?.Img?.data[0]?.attributes?.url;
              return (
                <img
                  style={{
                    flexShrink: "0",
                    objectFit: "cover",
                    padding: 0,
                    height: "100%",
                  }}
                  src={defaultURL}
                  width={"200px"}
                  height={"200px"}
                  id={item.id}
                />
              );
            })}
            <Flex flexDirection={"column"} padding={"40px"}>
              <Flex
                justifyContent={"flex-end"}
                gap={"10px"}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  deactivateModal();
                }}
              >
                X
              </Flex>
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
          </Flex>
        </Flex>
      </Modal>
      <RichTextParagraph markup={markup} />
      {returnLinks(posts, feedView, link, activateModal)}
    </>
  );
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

      <Flex>
        <input
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
          placeholder="your@email.com"
          required
        />

        <input
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      </Flex>
    </form>
  );
}
