import { getStorybookUI, configure } from '@storybook/react-native';

// import stories
configure(() => {
  /* PLOP_INJECT_IMPORT */
  require('./stories/base/SVG');
  require('./stories/base/TextInput');
  require('./stories/base/Button');
  require('./stories/base/Text');
  // Imported components
}, module);

const StorybookUIRoot = getStorybookUI({});

export default StorybookUIRoot;
