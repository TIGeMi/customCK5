/**
 * @license Copyright (c) 2014-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
// import Image from '@ckeditor/ckeditor5-image/src/image.js';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
	Alignment,
	Bold,
	CodeBlock,
	Heading,
	Italic,
	Link,
	List,
	Paragraph,
	Table,
	TableToolbar,
	TextTransformation
];
Editor.defaultConfig = {
  toolbar: {
    items: [
      "codeBlock",
      "alignment",
      "heading",
      "|",
      "bold",
      "italic",
      "link",
      "bulletedList",
      "numberedList",
      "|",
      "|",
      "imageUpload",
      "blockQuote",
      "insertTable",
      "undo",
      "redo",
    ],
  },
  language: "en",
  table: {
    contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
  },
  licenseKey: "",
};

export default Editor;
