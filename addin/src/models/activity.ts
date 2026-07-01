export type ActivityId =
  | "acquisitie"
  | "advies"
  | "legoBetaald"
  | "training"
  | "intern"
  | "afwezig"
  | "anders"
  | "leeg";

export interface Activity {
  id: ActivityId;
  label: string;
  fillColor: string | null;
  fontColor: string | null;
}