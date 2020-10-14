import React from "react";
import { Button, Flex, Box, Text } from "rebass";

class Kaomoji extends React.Component {
  state = {
    kaomoji: [],
    copySuccess: -1,
  };

  loadKaomoji(category) {
    import(`../assets/kaomoji/${category}`).then((kaomoji) => {
      this.setState({ kaomoji: kaomoji.default });
    });
  }

  copyKaomoji(value, index) {
    navigator.clipboard.writeText(value);
    this.setState({ copySuccess: index });

    setTimeout(() => {
      this.setState({
        copySuccess: -1,
      });
    }, 2200);
  }

  componentDidMount() {
    this.loadKaomoji(this.props.category);
  }
  render() {
    return (
      <Flex flexWrap="wrap" mx={-2}>
        {this.state.kaomoji.map((k, index) => (
          <Box
            key={index}
            px={1}
            width={[1, 1 / 2, 1 / 3, 1 / 4]}
            minWidth="max-content"
          >
            <Button
              variant="kaomoji"
              value={k}
              onClick={() => this.copyKaomoji(k, index)}
            >
              {this.state.copySuccess === index ? "copied ✓" : `${k}`}
            </Button>
          </Box>
        ))}
      </Flex>
    );
  }
}

export default Kaomoji;
