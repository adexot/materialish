export default [
  {
    name: 'Avatar',
    url: 'avatar',
    componentKey: 'avatar',
    description: `An Avatar repesents a user. Avatars can display an image representing the user, or their initials.`,
    component: 'src/components/component-doc',
  },
  {
    name: 'Dialog',
    url: 'dialog',
    componentKey: 'dialog',
    editorHeight: '500px',
    description:
      'Dialogs inform users about a task or decision that needs to be made.',
    component: 'src/components/component-doc',
    materialDocsLink: 'https://material.io/design/components/dialogs.html',
  },
  {
    name: 'Elevation',
    url: 'elevation',
    componentKey: 'elevation',
    description:
      'Elevations create a sense of depth by applying a drop shadow to an element.',
    component: 'src/components/component-doc',
  },
  {
    name: 'Menu',
    url: 'menu',
    componentKey: 'menu',
    description:
      'Menus represent a list of items. They can be used within selects or dropdowns.',
    component: 'src/components/component-doc',
  },
  {
    name: 'Snackbar',
    url: 'snackbar',
    componentKey: 'snackbar',
    description:
      'Snackbars provide brief messages about app processes at the bottom of the screen.',
    component: 'src/components/component-doc',
    materialDocsLink: 'https://material.io/design/components/snackbars.html',
  },
  {
    name: 'Table',
    url: 'table',
    componentKey: 'table',
    editorHeight: '700px',
    wrapperStyle: { width: '100%' },
    description: 'Tables present structured information.',
    component: 'src/components/component-doc',
    materialDocsLink: 'https://material.io/design/components/data-tables.html',
  },
  {
    name: 'Input',
    url: 'input',
    componentKey: 'input',
    editorHeight: '350px',
    description: 'An input allows a user to provide or edit a text value.',
    component: 'src/components/component-doc',
    materialDocsLink: 'https://material.io/design/components/text-fields.html',
  },
  {
    name: 'Progress Indicators',
    url: 'progress-indicators',
    componentKey: 'progress-indicators',
    description:
      'Progress indicators provide information regarding the progress of a deterministic or nondeterministic process.',
    component: 'src/components/progress-indicators',
    materialDocsLink:
      'https://material.io/design/components/progress-indicators.html#',
    children: [
      {
        name: 'Spinner',
        url: 'spinner',
        componentKey: 'spinner',
        description: 'A Spinner is a nondeterministic loading indicator.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/progress-indicators.html#circular-progress-indicators',
      },
      {
        name: 'Inline Spinner',
        url: 'inline-spinner',
        componentKey: 'inline-spinner',
        description:
          'An InlineSpinner is a nondeterministic loading indicator.',
        component: 'src/components/component-doc',
      },
    ],
  },
  {
    name: 'Selection Controls',
    url: 'selection-controls',
    componentKey: 'selection-controls',
    description: 'Selection controls allow the user to select options.',
    component: 'src/components/selection-controls',
    materialDocsLink:
      'https://material.io/design/components/selection-controls.html',
    children: [
      {
        name: 'Checkbox',
        url: 'checkbox',
        componentKey: 'checkbox',
        description:
          'A Checkbox represents a boolean value that can be in one of two states, true or false.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/selection-controls.html#checkboxes',
      },
      {
        name: 'Radio Button',
        url: 'radio',
        componentKey: 'radio',
        description:
          'A Radio button represents one option among several choices.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/selection-controls.html#radio-buttons',
      },
      {
        name: 'Switch',
        url: 'switch',
        componentKey: 'switch',
        description:
          'A Switch represents a value that can be toggled on or off.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/selection-controls.html#switches',
      },
    ],
  },
  {
    name: 'Buttons',
    url: 'buttons',
    componentKey: 'buttons',
    description:
      'Button represent that an action will occur when the user clicks or touches them.',
    component: 'src/components/buttons',
    materialDocsLink: 'https://material.io/design/components/buttons.html',
    children: [
      {
        name: 'Button',
        url: 'button',
        componentKey: 'button',
        description:
          'A button represents that an action will occur when the user clicks or touches it.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/guidelines/components/buttons.html',
      },
    ],
  },
  {
    name: 'Chips',
    url: 'chips',
    componentKey: 'chips',
    description:
      'Chips are versatile elements that can serve numerous roles in your application.',
    component: 'src/components/chips',
    materialDocsLink: 'https://material.io/design/components/chips.html',
    children: [
      {
        name: 'Input Chip',
        url: 'input-chip',
        componentKey: 'input-chip',
        description:
          'Input chips represent information, such as an entity or different attributes.',
        component: 'src/components/component-doc',
        editorHeight: '470px',
        materialDocsLink:
          'https://material.io/design/components/chips.html#input-chips',
      },
      {
        name: 'Action Chip',
        url: 'action-chip',
        componentKey: 'action-chip',
        description:
          'Action chips represent that an action will occur when a user clicks or touches it. They are an alternative to buttons.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/chips.html#action-chips',
      },
      {
        name: 'Choice Chip',
        url: 'choice-chip',
        componentKey: 'choice-chip',
        description:
          'Choice chips allow for the selection of a single chip from a set of options. They are an alternative to dropdowns and radio buttons.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/chips.html#choice-chips',
      },
      {
        name: 'Filter Chip',
        url: 'filter-chip',
        componentKey: 'filter-chip',
        description:
          'Filter chips use descriptive words to filter content. They are an alternative to checkboxes.',
        component: 'src/components/component-doc',
        materialDocsLink:
          'https://material.io/design/components/chips.html#filter-chips',
      },
    ],
  },
];
