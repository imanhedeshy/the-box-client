export default function timeAgoConverter(date) {
  const now = new Date();
  const postedDate = new Date(date);
  let diffInMs = now - postedDate;

  diffInMs = Math.max(0, diffInMs);

  const seconds = Math.round(diffInMs / 1000);
  const minutes = Math.round(seconds / 60);
  const hours = Math.round(minutes / 60);
  const days = Math.round(hours / 24);
  const weeks = Math.round(days / 7);
  const months = Math.round(days / 30);
  const years = Math.round(days / 365);

  return seconds < 60
    ? `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`
    : minutes < 60
    ? `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`
    : hours < 24
    ? `${hours} ${hours === 1 ? "hour" : "hours"} ago`
    : days < 7
    ? `${days} ${days === 1 ? "day" : "days"} ago`
    : weeks < 4
    ? `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`
    : months < 12
    ? `${months} ${months === 1 ? "month" : "months"} ago`
    : `${years} ${years === 1 ? "year" : "years"} ago`;
}
