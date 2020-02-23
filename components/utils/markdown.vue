<template>
  <div class="markdown-container" v-html="srcRender">
  </div>
</template>

<script>
import marked from 'assets/marked-element-ui/marked'
import 'highlight.js/styles/monokai-sublime.css'
import 'assets/marked-element-ui/marked-element-ui.scss'
import 'assets/mathjax-fix.scss'

const MathJax = require('mathjax-full/js/mathjax.js').mathjax
import { TeX } from 'mathjax-full/js/input/tex'
import { CHTML } from 'mathjax-full/js/output/chtml'
import { SVG } from 'mathjax-full/js/output/svg'
import { LiteAdaptor } from 'mathjax-full/js/adaptors/liteAdaptor'
import { RegisterHTMLHandler } from 'mathjax-full/js/handlers/html'
const AllPackages = require('mathjax-full/js/input/tex/AllPackages.js').AllPackages;

let liteAdaptor = new LiteAdaptor({ fontSize: 16 })
RegisterHTMLHandler(liteAdaptor)

let chtml = new CHTML({
            exFactor: 0.5,
            fontURL: '/mj-fonts/'
          })

export default {
  props: ['src'],
  computed: {
    srcRender() { 
        let doc = liteAdaptor.parse(this.src)
        const html = MathJax.document(doc, {
          InputJax: new TeX({
            inlineMath: [ ['$','$'] ],
            displayMath: [ ['$$','$$'], ['\\[', '\\]' ] ],
            processEscapes: true,
            maxBuffer: 5 * 1024,
            packages: AllPackages
          }),
          OutputJax: chtml
        })
        html.render()
        return liteAdaptor.innerHTML(liteAdaptor.head(html.document))
          + marked(liteAdaptor.innerHTML(liteAdaptor.body(html.document)))
    }
  }
}
</script>