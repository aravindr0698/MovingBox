export const getIdAndPosition = (newPosition, direction) => {
    let newId;
    switch (newPosition) {
      case 0:
        if (direction === "forward") {
          newId = "slide-right-forward";
          newPosition++;
        } else {
          newId = "slide-down-backward";
          newPosition = 3;
        }
        break;
      case 1:
        if (direction === "forward") {
          newId = "slide-down-forward";
          newPosition++;
        } else {
          newId = "slide-left-backward";
          newPosition = 0;
        }
        break;
      case 2:
        if (direction === "forward") {
          newId = "slide-left-forward";
          newPosition++;
        } else {
          newId = "slide-top-backward";
          newPosition = 1;
        }
        break;
      case 3:
        if (direction === "forward") {
          newId = "slide-top-forward";
          newPosition = 0;
        } else {
          newId = "slide-right-backward";
          newPosition = 2;
        }
        break;
      default:
        break;
    }
    return { newPosition, newId };
  };