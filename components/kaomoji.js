import React, { useState } from "react";
import { Button, Flex, Box } from "rebass";

const Kaomoji = ({ kaomoji }) => {
  const [copySuccess, alertCopySuccess] = useState(-1);

  function copyKaomoji(value, index) {
    navigator.clipboard.writeText(value);
    alertCopySuccess(index);

    setTimeout(() => {
      alertCopySuccess(-1);
    }, 2200);
  }

  return (
    <Flex flexWrap="wrap" mx={-2}>
      {kaomoji.map((k, index) => (
        <Box
          key={index}
          px={1}
          width={[1, 1 / 2, 1 / 3, 1 / 4]}
          minWidth="max-content"
        >
          <Button
            variant="kaomoji"
            value={k}
            onClick={() => copyKaomoji(k, index)}
          >
            {copySuccess === index ? "copied ✓" : `${k}`}
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default Kaomoji;
