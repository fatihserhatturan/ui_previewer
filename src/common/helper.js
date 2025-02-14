

export function createReactProject(reactCode){
    const files = {
        'package.json': JSON.stringify({
          name: 'react-preview',
          version: '0.0.0',
          private: true,
          dependencies: {
            'react': '18.2.0',
            'react-dom': '18.2.0',
            '@types/react': '18.2.0',
            '@types/react-dom': '18.2.0',
          },
        }, null, 2),
        'index.html': `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Preview</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`,
        'index.js': `
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
        'App.jsx': reactCode,
        'styles.css': '',
      };

      const project = {
        files,
        title: 'React Preview',
        description: 'React Component Preview',
        template: 'create-react-app'
      };

      return project;
}

export function createVueProject(vueCode) {
    const files = {
      'package.json': JSON.stringify({
        name: 'vue-preview',
        version: '0.1.0',
        private: true,
        scripts: {
          "serve": "vue-cli-service serve",
          "build": "vue-cli-service build"
        },
        dependencies: {
          'core-js': '^3.8.3',
          'vue': '^3.5.13',
          'typescript': '^5.7.3'
        }
      }, null, 2),
      'babel.config.js': `
  module.exports = {
    presets: [
      '@vue/cli-plugin-babel/preset'
    ]
  }`,
      'vue.config.js': `
  const { defineConfig } = require('@vue/cli-service')
  module.exports = defineConfig({
    transpileDependencies: true
  })`,
      'public/index.html': `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width,initial-scale=1.0">
      <title>Vue Preview</title>
    </head>
    <body>
      <div id="app"></div>
    </body>
  </html>`,
      'src/main.js': `
  import { createApp } from 'vue'
  import App from './App.vue'

  createApp(App).mount('#app')`,
      'src/App.vue': vueCode
    };

    const project = {
      files,
      title: 'Vue Preview',
      description: 'Vue Component Preview',
      template: 'vue'
    };

    return project;
  }

  export function createHtmlProject(htmlCode) {
    const files = {
      'index.html': htmlCode,
      'styles.css': '',
      'script.js': ''
    };

    const project = {
      files,
      title: 'HTML Preview',
      description: 'HTML Preview',
      template: 'html'
    };

    return project;
  }
