/* global Office */

import { excelService } from "../services/excelService";

export async function applyAdvice(event: Office.AddinCommands.Event) {
  try {
    await excelService.setSelectedRangeFillColor("#44A72C", "#FFFFFF");
  } catch (error) {
    console.error(error);
  }

  event.completed();
}

Office.onReady(() => {
  Office.actions.associate("applyAdvice", applyAdvice);
});