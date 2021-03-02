import { ControlElement } from 'store/controls';

export const propertiesToSaveElementData = (
  elements: ControlElement[],
  labels: Record<string, string>,
  sizes: Record<string, number>,
  onPressCommands: Record<string, string>,
  onReleaseCommands: Record<string, string>,
) => {
  const formattedData = elements.map((a) => ({
    ...a,
    ...(labels[a.id] ? { label: labels[a.id] } : {}),
    ...(sizes[a.id] ? { size: sizes[a.id] } : {}),
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
