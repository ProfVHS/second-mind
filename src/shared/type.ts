type filterType = "TODO" | "DONE" | "ALL";
type priority = "HIGH" | "MEDIUM" | "LOW";
type subPage = "HOME" | "CATEGORIES" | "CALENDAR" | "SETTINGS";
type progress = "TODO" | "DONE";
type taskValues = {
  taskname: string;
  desc: string;
  priority: priority;
  category: string;
  date: string;
  time: string;
  progress: progress;
};
type modalVisibility = false | "ADD" | "EDIT" | "DONE" | "DELETE";
