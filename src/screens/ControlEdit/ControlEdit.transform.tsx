import { ControlElement } from 'store/controls';

export const propertiesToSaveElementData = (
  elements: ControlElement[],
  labels: Record<string, string>,
  sizes: Record<string, number>,
  heights: Record<string, number>,
  widths: Record<string, number>,
  types: Record<string, 'BUTTON' | 'TERMINAL'>,
  onPressCommands: Record<string, string>,
  onReleaseCommands: Record<string, string>,
) => {
  const formattedData = elements.map((a) => ({
    ...a,
    ...(labels[a.id] ? { label: labels[a.id] } : {}),
    ...(sizes[a.id] ? { size: sizes[a.id] } : {}),
    ...(heights[a.id] ? { height: heights[a.id] } : {}),
    ...(widths[a.id] ? { width: widths[a.id] } : {}),
    ...(types[a.id] ? { type: types[a.id] } : {}),
    command: {
      ...a.command,
      ...(onPressCommands[a.id] ? { onPress: onPressCommands[a.id] } : {}),
      ...(onReleaseCommands[a.id]
        ? { onRelease: onReleaseCommands[a.id] }
        : {}),
    },
  }));

  return formattedData;
};
