import React from "react";
import RichTextParagraph from "../RichTextParagraph/RichTextParagraph";
import { useStateContext } from "../../../lib/context";
import AddToCart from "../SVGs/AddToCart";
import { theme } from "../../../styles/constants";
import Flex from "../Styled-Containers/Flex/Flex";
import toast from "react-hot-toast";
export default function ProductContainer({ children, item, id }) {
  const { Title, Price, Date, FullDescription } = item;
  const { onAdd, onRemove, darkMode } = useStateContext();
  const img = item.Img.data[0].attributes.formats.small.url;
  const notify = (item) => {
    toast.success(`${item} added to cart!`, {
      duration: 1000,

      // Styling
      style: {
        backgroundColor: darkMode ? theme.dark.sidebar : theme.light.sidebar,
        color: darkMode ? theme.dark.text : theme.light.text,
      },
    });
  };
  return (
    <>
      {children}
      <Flex alignItems={"center"} gap={"10px"}>
        <h3>{Title}</h3>
        <AddToCart
          fill={theme.light.sidebar}
          hover="yellow"
          active={"black"}
          onClick={() => {
            onAdd({ Title, Price, Date, id, url: img });
            notify(Title);
          }}
        />
      </Flex>
      <RichTextParagraph
        markup={FullDescription}
        width={"50px"}
        height={"50px"}
      />
      <p>${Price}</p>
      <p>{Date}</p>
    </>
  );
}
