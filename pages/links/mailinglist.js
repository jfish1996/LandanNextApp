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
  const SECTION_NAME = "Mailing List.links";
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
      <Modal
        modalActive={activeModal}
        onClickBackDrop={deactivateModal}
        posts={posts}
      />

      <RichTextParagraph markup={markup} />
      {returnLinks(posts, feedView, link, activateModal)}
    </>
  );
}
