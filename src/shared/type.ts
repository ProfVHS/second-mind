export type progressFilter = "TODO" | "DONE" | "ALL";
export type filterType = "CATEGORY" | "TODAYS" | "DATE";
export type priority = "HIGH" | "MEDIUM" | "LOW";
export type subPage = "HOME" | "CATEGORIES" | "CALENDAR" | "SETTINGS";
export type progress = "TODO" | "DONE";
export type taskValues = {
  taskname: string;
  desc: string;
  priority: priority;
  category: string;
  date: string;
  time: string;
  progress: progress;
};
export type categoryValues = {
  name: string;
  isDefault: boolean;
};
export type modalVisibility = false | "ADD" | "EDIT" | "DONE" | "DELETE";
