module.exports = (plop) => {
  plop.setGenerator('base', {
    description: 'Create a base component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your base component name?',
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
        message: 'What is your module component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/modules/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/module/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/modules/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: 'templates/module/module.props.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/modules/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'templates/module/module.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/modules/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'templates/module/module.view.tsx.hbs',
      },
      {
        type: 'add',
        path: 'storybook/stories/modules/{{pascalCase name}}.js',
        templateFile: 'templates/module/module.story.js.hbs',
      },
      {
        type: 'append',
        path: 'storybook/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "  require('./stories/modules/{{pascalCase name}}');",
      },
    ],
  });
  plop.setGenerator('layout', {
    description: 'Create a layout component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/layouts/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/layout/index.tsx.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layouts/{{pascalCase name}}/{{pascalCase name}}.props.ts',
        templateFile: 'templates/layout/layout.props.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layouts/{{pascalCase name}}/{{pascalCase name}}.style.ts',
        templateFile: 'templates/layout/layout.style.ts.hbs',
      },
      {
        type: 'add',
        path:
          'src/components/layouts/{{pascalCase name}}/{{pascalCase name}}.view.tsx',
        templateFile: 'templates/layout/layout.view.tsx.hbs',
      },
      {
        type: 'add',
        path: 'storybook/stories/layouts/{{pascalCase name}}.js',
        templateFile: 'templates/layout/layout.story.js.hbs',
      },
      {
        type: 'append',
        path: 'storybook/index.js',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "  require('./stories/layouts/{{pascalCase name}}');",
      },
    ],
  });
};
