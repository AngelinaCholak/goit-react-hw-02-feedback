const handleFeedback = (option, setStateCallback) => {
  setStateCallback((prevState) => {
    return {
      [option]: prevState[option] + 1,
    };
  });
}

export default handleFeedback;
