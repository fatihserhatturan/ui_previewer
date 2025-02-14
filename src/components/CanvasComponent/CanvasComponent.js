import sdk from '@stackblitz/sdk';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import jsx from 'highlight.js/lib/languages/javascript';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/github.css';
import { createHtmlProject, createReactProject, createVueProject } from '../../common/helper';
import { useToast } from "vue-toastification";

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('jsx', jsx);
hljs.registerLanguage('html', html);

export default {
  name: 'CanvasComponent',
  setup() {
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      codeInput: '',
      vm: null,
      highlightedCode: '',
      selectedFramework: 'react',
      activeTab: 'input', // Default active tab
      tabs: [
        { id: 'input', label: 'INPUT' },
        { id: 'preview', label: 'PREVIEW' }
      ],
      frameworks: [
        { id: 'vue', label: 'VUE' },
        { id: 'react', label: 'REACT' },
        { id: 'html', label: 'HTML' }
      ]
    };
  },

  mounted() {
    this.updateHighlight();
    this.syncScroll();
  },

  methods: {
    selectFramework(framework) {
      this.selectedFramework = framework;
      this.updateHighlight();
    },

    updateHighlight() {
      const code = this.codeInput || '';
      const language = this.selectedFramework === 'html' ? 'html' :
        this.selectedFramework === 'vue' ? 'html' : 'jsx';

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
      if (this.codeInput === '') {
        this.toast.error("Kod girişi boş olamaz");
      } else {
        const code = this.codeInput;
        let project;

        if (this.vm) {
          const container = document.getElementById('embed-container');
          if (container) {
            container.innerHTML = '';
          }
          this.vm = null;
        }

        switch (this.selectedFramework) {
          case 'vue':
            project = createVueProject(code);
            break;
          case 'react':
            project = createReactProject(code);
            break;
          case 'html':
            project = createHtmlProject(code);
            break;
        }

        this.vm = await sdk.embedProject('embed-container', project, {
          height: '100%',
          clickToLoad: false,
          hideNavigation: true,
          hideDevTools: true,
          view: 'preview'
        });

        // Switch to preview tab after running code
        this.activeTab = 'preview';
      }
    },

    async clearCode() {
      this.codeInput = '';
      this.updateHighlight();
      if (this.vm) {
        const container = document.getElementById('embed-container');
        if (container) {
          container.innerHTML = '';
        }
        this.vm = null;
      }
    }
  }
};
