import kebabCase from 'lodash/kebabCase';

import type { App, Component } from 'vue';

export type WithInstall = {
  install: (app: App) => void;
};

export default function withInstall<T extends Component>(
  component: T,
): WithInstall {
  return {
    install: (app: App) => {
      const prefixName = 'Hld';
      const { name } = component;
      const fullName = prefixName + name;
      app.component(fullName, component);
      app.component(kebabCase(fullName), component);
    },
  };
}
