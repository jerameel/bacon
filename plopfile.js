module.exports = (plop) => {
  plop.setGenerator('base', {
    description: 'Create a base component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your BASE component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/base/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/base/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: 'templates/base/base.props.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'templates/base/base.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/base/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'templates/base/base.view.tsx.hbs',
      },
      {
        type: 'add',
        path: 'storybook/stories/base/{{pascalCase name}}.js',
        templateFile: 'templates/base/base.story.js.hbs',
      },
      {
        type: 'append',
        path: 'storybook/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "  require('./stories/base/{{pascalCase name}}');",
      },
    ],
  });
  plop.setGenerator('module', {
    description: 'Create a module component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your MODULE component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/module/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/module/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: 'templates/module/module.props.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'templates/module/module.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/module/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'templates/module/module.view.tsx.hbs',
      },
      {
        type: 'add',
        path: 'storybook/stories/module/{{pascalCase name}}.js',
        templateFile: 'templates/module/module.story.js.hbs',
      },
      {
        type: 'append',
        path: 'storybook/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "  require('./stories/module/{{pascalCase name}}');",
      },
    ],
  });
  plop.setGenerator('svg', {
    description: 'Create svg component and storybook entry',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your SVG name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/base/SVG/{{pascalCase name}}.tsx',
        templateFile: 'templates/svg/component.tsx.hbs',
      },
      {
        type: 'append',
        path: 'src/components/base/SVG/index.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template:
          "export { default as {{pascalCase name}} } from './{{pascalCase name}}';",
      },
      {
        type: 'append',
        path: 'storybook/stories/base/SVG.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: '  {{pascalCase name}},',
      },
      {
        type: 'append',
        path: 'storybook/stories/base/SVG.js',
        pattern: '{/* PLOP_INJECT_INSTANCE*/}',
        template: `    <SVGWrapper label="{{pascalCase name}}">
      <{{pascalCase name}} fill="#000" />
    </SVGWrapper>`,
      },
    ],
  });
};
