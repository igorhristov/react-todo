import React from "react";

const Clock = () => {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: "30px"
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "#04756f";
  } else if (hours >= 12 && hours < 18) {
    timeOfDay = "afternoon";
    styles.color = "blue";
  } else {
    timeOfDay = "night";
    styles.color = "red";
  }

  return (
    <h2 className="text-center bg-warning my-0 py-1" style={styles}>
      Good {timeOfDay}
    </h2>
  );
};

export default Clock;
