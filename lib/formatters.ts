import formatDuration from "format-duration";

export const formatTime = (timeInSeconds = 0) => {
  return formatDuration(timeInSeconds);
};

export const formatDate = (date: Date) => {
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
