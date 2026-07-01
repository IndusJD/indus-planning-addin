/*
 * Indus Planning Add-in
 */

/* global Office Excel console */

import { getActivityById } from "../config/activities";

export async function applyAdvice(event: Office.AddinCommands.Event) {
  try {
    const activity = getActivityById("advies");

    await Excel.run(async (context) => {
      const range = context.workbook.getSelectedRange();

      if (activity.fillColor) {
        range.format.fill.color = activity.fillColor;
      }

      if (activity.fontColor) {
        range.format.font.color = activity.fontColor;
      }

      await context.sync();
    });
  } catch (error) {
    console.error("Fout bij toepassen van Advies:", error);
  }

  event.completed();
}

Office.onReady(() => {
  Office.actions.associate("applyAdvice", applyAdvice);
});