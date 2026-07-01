import { Activity, ActivityId } from "../models/activity";

export const ACTIVITIES: Activity[] = [
  {
    id: "acquisitie",
    label: "Acquisitie",
    fillColor: "#4472C4",
    fontColor: "#FFFFFF",
  },
  {
    id: "advies",
    label: "Advies",
    fillColor: "#70AD47",
    fontColor: "#FFFFFF",
  },
  {
    id: "legoBetaald",
    label: "Lego betaald",
    fillColor: "#FFC000",
    fontColor: "#000000",
  },
  {
    id: "training",
    label: "Training",
    fillColor: "#7030A0",
    fontColor: "#FFFFFF",
  },
  {
    id: "intern",
    label: "Intern",
    fillColor: "#A5A5A5",
    fontColor: "#000000",
  },
  {
    id: "afwezig",
    label: "Afwezig",
    fillColor: "#C00000",
    fontColor: "#FFFFFF",
  },
  {
    id: "anders",
    label: "Anders",
    fillColor: "#ED7D31",
    fontColor: "#FFFFFF",
  },
  {
    id: "leeg",
    label: "Leegmaken",
    fillColor: null,
    fontColor: null,
  },
];

export function getActivityById(id: ActivityId): Activity {
  const activity = ACTIVITIES.find((item) => item.id === id);

  if (!activity) {
    throw new Error(`Onbekende activiteit: ${id}`);
  }

  return activity;
}