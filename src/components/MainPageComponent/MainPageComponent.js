import sdk from '@stackblitz/sdk';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import jsx from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('jsx', jsx);

export default {
  name: 'MainPageComponent',
  data() {
    return {
      codeInput: '',
      vm: null,
      highlightedCode: ''
    };
  },
  mounted() {
    this.updateHighlight();
    this.syncScroll();
  },
  methods: {
    updateHighlight() {
      const code = this.codeInput || '';
      this.highlightedCode = hljs.highlight(code, { language: 'jsx' }).value;
      this.$nextTick(() => {
        const textarea = this.$refs.codeEditor;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
      });
    },
    syncScroll() {
      const textarea = this.$refs.codeEditor;
      textarea.addEventListener('scroll', () => {
        const container = textarea.parentElement;
        container.scrollTop = textarea.scrollTop;
        container.scrollLeft = textarea.scrollLeft;
      });
    },
    async runCode() {
      const reactCode = this.codeInput;

      // Create basic React project structure
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

      if (this.vm) {
        await this.vm.destroy();
      }

      this.vm = await sdk.embedProject('embed-container', project, {
        height: '100%',
        clickToLoad: false,
        hideNavigation: true,
        hideDevTools: true,
        view: 'preview',
      });
    },
    async clearCode() {
      this.codeInput = '';
      this.updateHighlight();
      if (this.vm) {
        await this.vm.destroy();
        this.vm = null;
      }
    }
  }
};
