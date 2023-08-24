export const useButtonLinkHandler = (buttonLink) => {
  let openLink;
  if (typeof buttonLink != "function") {
    return (openLink = () => window.open(buttonLink));
  } else {
    return (openLink = () => buttonLink());
  }
};
