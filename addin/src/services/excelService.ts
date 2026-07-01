/* global Excel */

export class ExcelService {
  async setSelectedRangeFillColor(fillColor: string, fontColor?: string): Promise<void> {
    await Excel.run(async (context) => {
      const range = context.workbook.getSelectedRange();

      range.format.fill.color = fillColor;

      if (fontColor) {
        range.format.font.color = fontColor;
      }

      await context.sync();
    });
  }

  async clearSelectedRangeFormatting(): Promise<void> {
    await Excel.run(async (context) => {
      const range = context.workbook.getSelectedRange();

      range.format.fill.clear();
      range.format.font.color = "Automatic";

      await context.sync();
    });
  }
}

export const excelService = new ExcelService();