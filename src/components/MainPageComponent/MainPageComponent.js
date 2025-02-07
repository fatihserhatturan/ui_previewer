import sdk from '@stackblitz/sdk';
import hljs from 'highlight.js/lib/core';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';

hljs.registerLanguage('html', html);

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
      this.highlightedCode = hljs.highlight(code, { language: 'html' }).value;
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
      const files = {
        'index.html': this.codeInput,
        'styles.css': '',
        'index.js': ''
      };

      const project = {
        files,
        title: 'Preview',
        description: 'HTML Preview',
        template: 'html'
      };

      if (this.vm) {
        await this.vm.destroy();
      }

      this.vm = await sdk.embedProject('embed-container', project, {
        height: '100%',
        clickToLoad: false,
        hideNavigation: true,
        hideDevTools: false
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
