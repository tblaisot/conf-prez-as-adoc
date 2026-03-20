import * as bespoke from "bespoke";
// import bullets from "bespoke-bullets";
import backdrop from "bespoke-backdrop";
import multimedia from "bespoke-multimedia";
import extern from "bespoke-extern";
import state from "bespoke-state";
// import classes from "bespoke-classes";

// Import and Register the languages you need
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import java from 'highlight.js/lib/languages/java';
import ruby from 'highlight.js/lib/languages/ruby';
import asciidoc from 'highlight.js/lib/languages/asciidoc';
import json from 'highlight.js/lib/languages/json';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('java', java);
hljs.registerLanguage('ruby', ruby);
hljs.registerLanguage('asciidoc', asciidoc);
hljs.registerLanguage('json', json);

import {bullets} from "./bespoke-bullets.js";
import {highlight} from "./bespoke-highlight.js";

import {
    classes,
    debug,
    hash,
    nav,
    progress,
    scale,
    // bullets,
    viewMode,
    speakerView,
    // highlight
} from "@tblaisot/prez-as-adoc/bespoke/plugins"

const config = {
    parent: '.slides',
    slides: 'section.slide',
    notes: 'aside.speaker-notes'
}

// Bespoke.js
bespoke.from(config, [
    classes(),
    nav(),
    scale(config),
    bullets('.olist[data-step] li, .ulist[data-step] li, [data-step]:not(.ulist):not(.olist), .inline-step'),
    hash(),
    // overview(),
    multimedia(),
    progress(),
    // extern(bespoke),
    speakerView(config),
    debug(),
    state(),
    viewMode(),
    backdrop(),
    highlight(),
]);
