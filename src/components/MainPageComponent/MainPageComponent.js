import sdk from '@stackblitz/sdk';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import jsx from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import { createReactProject } from './helper';
import { createVueProject } from './helper';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('jsx', jsx);
hljs.registerLanguage('html', html);

export default {
  name: 'MainPageComponent',
  data() {
    return {
      codeInput: '',
      vm: null,
      highlightedCode: '',
      selectedFramework: 'react'
    };
  },
  mounted() {
    this.updateHighlight();
    this.syncScroll();
  },
  methods: {
    updateHighlight() {
      const code = this.codeInput || '';

      const language = this.selectedFramework === 'vue' ? 'html' : 'jsx';

      this.highlightedCode = hljs.highlight(code, { language }).value;

      this.$nextTick(() => {
        const textarea = this.$refs.codeEditor;
        if (textarea) {
          textarea.style.height = 'auto';
          textarea.style.height = textarea.scrollHeight + 'px';
        }
      });
    },
    syncScroll() {
      const textarea = this.$refs.codeEditor;
      if (textarea) {
        textarea.addEventListener('scroll', () => {
          const container = textarea.parentElement;
          if (container) {
            container.scrollTop = textarea.scrollTop;
            container.scrollLeft = textarea.scrollLeft;
          }
        });
      }
    },
    async runCode() {
      const code = this.codeInput;
      let project;

      if (this.selectedFramework === 'vue') {
        project = createVueProject(code);
      } else {
        project = createReactProject(code);
      }

      if (this.vm) {
        await this.vm.destroy();
      }

      this.vm = await sdk.embedProject('embed-container', project, {
        height: '100%',
        clickToLoad: false,
        hideNavigation: true,
        hideDevTools: true,
        view: 'preview'
      });
    },
    async clearCode() {
      this.codeInput = '';
      this.updateHighlight();
      if (this.vm) {
        await this.vm.destroy();
        this.vm = null;
      }
    },
    toggleFramework() {
      this.selectedFramework = this.selectedFramework === 'react' ? 'vue' : 'react';
      this.updateHighlight();
    }
  }
};
