import stream from 'stream';

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ('value' in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function');
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
          };
    return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };

    return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
}

function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === 'object' || typeof call === 'function')) {
        return call;
    }

    return _assertThisInitialized(self);
}

function createCommonjsModule(fn, module) {
    return (module = { exports: {} }), fn(module, module.exports), module.exports;
}

var html = createCommonjsModule(function(module, exports) {
    var _NS$HTML, _NS$MATHML, _NS$SVG, _exports$SPECIAL_ELEM;

    var NS = (exports.NAMESPACES = {
        HTML: 'http://www.w3.org/1999/xhtml',
        MATHML: 'http://www.w3.org/1998/Math/MathML',
        SVG: 'http://www.w3.org/2000/svg',
        XLINK: 'http://www.w3.org/1999/xlink',
        XML: 'http://www.w3.org/XML/1998/namespace',
        XMLNS: 'http://www.w3.org/2000/xmlns/'
    });
    exports.ATTRS = {
        TYPE: 'type',
        ACTION: 'action',
        ENCODING: 'encoding',
        PROMPT: 'prompt',
        NAME: 'name',
        COLOR: 'color',
        FACE: 'face',
        SIZE: 'size'
    };
    exports.DOCUMENT_MODE = {
        NO_QUIRKS: 'no-quirks',
        QUIRKS: 'quirks',
        LIMITED_QUIRKS: 'limited-quirks'
    };
    var $ = (exports.TAG_NAMES = {
        A: 'a',
        ADDRESS: 'address',
        ANNOTATION_XML: 'annotation-xml',
        APPLET: 'applet',
        AREA: 'area',
        ARTICLE: 'article',
        ASIDE: 'aside',
        B: 'b',
        BASE: 'base',
        BASEFONT: 'basefont',
        BGSOUND: 'bgsound',
        BIG: 'big',
        BLOCKQUOTE: 'blockquote',
        BODY: 'body',
        BR: 'br',
        BUTTON: 'button',
        CAPTION: 'caption',
        CENTER: 'center',
        CODE: 'code',
        COL: 'col',
        COLGROUP: 'colgroup',
        DD: 'dd',
        DESC: 'desc',
        DETAILS: 'details',
        DIALOG: 'dialog',
        DIR: 'dir',
        DIV: 'div',
        DL: 'dl',
        DT: 'dt',
        EM: 'em',
        EMBED: 'embed',
        FIELDSET: 'fieldset',
        FIGCAPTION: 'figcaption',
        FIGURE: 'figure',
        FONT: 'font',
        FOOTER: 'footer',
        FOREIGN_OBJECT: 'foreignObject',
        FORM: 'form',
        FRAME: 'frame',
        FRAMESET: 'frameset',
        H1: 'h1',
        H2: 'h2',
        H3: 'h3',
        H4: 'h4',
        H5: 'h5',
        H6: 'h6',
        HEAD: 'head',
        HEADER: 'header',
        HGROUP: 'hgroup',
        HR: 'hr',
        HTML: 'html',
        I: 'i',
        IMG: 'img',
        IMAGE: 'image',
        INPUT: 'input',
        IFRAME: 'iframe',
        KEYGEN: 'keygen',
        LABEL: 'label',
        LI: 'li',
        LINK: 'link',
        LISTING: 'listing',
        MAIN: 'main',
        MALIGNMARK: 'malignmark',
        MARQUEE: 'marquee',
        MATH: 'math',
        MENU: 'menu',
        META: 'meta',
        MGLYPH: 'mglyph',
        MI: 'mi',
        MO: 'mo',
        MN: 'mn',
        MS: 'ms',
        MTEXT: 'mtext',
        NAV: 'nav',
        NOBR: 'nobr',
        NOFRAMES: 'noframes',
        NOEMBED: 'noembed',
        NOSCRIPT: 'noscript',
        OBJECT: 'object',
        OL: 'ol',
        OPTGROUP: 'optgroup',
        OPTION: 'option',
        P: 'p',
        PARAM: 'param',
        PLAINTEXT: 'plaintext',
        PRE: 'pre',
        RB: 'rb',
        RP: 'rp',
        RT: 'rt',
        RTC: 'rtc',
        RUBY: 'ruby',
        S: 's',
        SCRIPT: 'script',
        SECTION: 'section',
        SELECT: 'select',
        SOURCE: 'source',
        SMALL: 'small',
        SPAN: 'span',
        STRIKE: 'strike',
        STRONG: 'strong',
        STYLE: 'style',
        SUB: 'sub',
        SUMMARY: 'summary',
        SUP: 'sup',
        TABLE: 'table',
        TBODY: 'tbody',
        TEMPLATE: 'template',
        TEXTAREA: 'textarea',
        TFOOT: 'tfoot',
        TD: 'td',
        TH: 'th',
        THEAD: 'thead',
        TITLE: 'title',
        TR: 'tr',
        TRACK: 'track',
        TT: 'tt',
        U: 'u',
        UL: 'ul',
        SVG: 'svg',
        VAR: 'var',
        WBR: 'wbr',
        XMP: 'xmp'
    });
    exports.SPECIAL_ELEMENTS = ((_exports$SPECIAL_ELEM = {}),
    _defineProperty(
        _exports$SPECIAL_ELEM,
        NS.HTML,
        ((_NS$HTML = {}),
        _defineProperty(_NS$HTML, $.ADDRESS, true),
        _defineProperty(_NS$HTML, $.APPLET, true),
        _defineProperty(_NS$HTML, $.AREA, true),
        _defineProperty(_NS$HTML, $.ARTICLE, true),
        _defineProperty(_NS$HTML, $.ASIDE, true),
        _defineProperty(_NS$HTML, $.BASE, true),
        _defineProperty(_NS$HTML, $.BASEFONT, true),
        _defineProperty(_NS$HTML, $.BGSOUND, true),
        _defineProperty(_NS$HTML, $.BLOCKQUOTE, true),
        _defineProperty(_NS$HTML, $.BODY, true),
        _defineProperty(_NS$HTML, $.BR, true),
        _defineProperty(_NS$HTML, $.BUTTON, true),
        _defineProperty(_NS$HTML, $.CAPTION, true),
        _defineProperty(_NS$HTML, $.CENTER, true),
        _defineProperty(_NS$HTML, $.COL, true),
        _defineProperty(_NS$HTML, $.COLGROUP, true),
        _defineProperty(_NS$HTML, $.DD, true),
        _defineProperty(_NS$HTML, $.DETAILS, true),
        _defineProperty(_NS$HTML, $.DIR, true),
        _defineProperty(_NS$HTML, $.DIV, true),
        _defineProperty(_NS$HTML, $.DL, true),
        _defineProperty(_NS$HTML, $.DT, true),
        _defineProperty(_NS$HTML, $.EMBED, true),
        _defineProperty(_NS$HTML, $.FIELDSET, true),
        _defineProperty(_NS$HTML, $.FIGCAPTION, true),
        _defineProperty(_NS$HTML, $.FIGURE, true),
        _defineProperty(_NS$HTML, $.FOOTER, true),
        _defineProperty(_NS$HTML, $.FORM, true),
        _defineProperty(_NS$HTML, $.FRAME, true),
        _defineProperty(_NS$HTML, $.FRAMESET, true),
        _defineProperty(_NS$HTML, $.H1, true),
        _defineProperty(_NS$HTML, $.H2, true),
        _defineProperty(_NS$HTML, $.H3, true),
        _defineProperty(_NS$HTML, $.H4, true),
        _defineProperty(_NS$HTML, $.H5, true),
        _defineProperty(_NS$HTML, $.H6, true),
        _defineProperty(_NS$HTML, $.HEAD, true),
        _defineProperty(_NS$HTML, $.HEADER, true),
        _defineProperty(_NS$HTML, $.HGROUP, true),
        _defineProperty(_NS$HTML, $.HR, true),
        _defineProperty(_NS$HTML, $.HTML, true),
        _defineProperty(_NS$HTML, $.IFRAME, true),
        _defineProperty(_NS$HTML, $.IMG, true),
        _defineProperty(_NS$HTML, $.INPUT, true),
        _defineProperty(_NS$HTML, $.LI, true),
        _defineProperty(_NS$HTML, $.LINK, true),
        _defineProperty(_NS$HTML, $.LISTING, true),
        _defineProperty(_NS$HTML, $.MAIN, true),
        _defineProperty(_NS$HTML, $.MARQUEE, true),
        _defineProperty(_NS$HTML, $.MENU, true),
        _defineProperty(_NS$HTML, $.META, true),
        _defineProperty(_NS$HTML, $.NAV, true),
        _defineProperty(_NS$HTML, $.NOEMBED, true),
        _defineProperty(_NS$HTML, $.NOFRAMES, true),
        _defineProperty(_NS$HTML, $.NOSCRIPT, true),
        _defineProperty(_NS$HTML, $.OBJECT, true),
        _defineProperty(_NS$HTML, $.OL, true),
        _defineProperty(_NS$HTML, $.P, true),
        _defineProperty(_NS$HTML, $.PARAM, true),
        _defineProperty(_NS$HTML, $.PLAINTEXT, true),
        _defineProperty(_NS$HTML, $.PRE, true),
        _defineProperty(_NS$HTML, $.SCRIPT, true),
        _defineProperty(_NS$HTML, $.SECTION, true),
        _defineProperty(_NS$HTML, $.SELECT, true),
        _defineProperty(_NS$HTML, $.SOURCE, true),
        _defineProperty(_NS$HTML, $.STYLE, true),
        _defineProperty(_NS$HTML, $.SUMMARY, true),
        _defineProperty(_NS$HTML, $.TABLE, true),
        _defineProperty(_NS$HTML, $.TBODY, true),
        _defineProperty(_NS$HTML, $.TD, true),
        _defineProperty(_NS$HTML, $.TEMPLATE, true),
        _defineProperty(_NS$HTML, $.TEXTAREA, true),
        _defineProperty(_NS$HTML, $.TFOOT, true),
        _defineProperty(_NS$HTML, $.TH, true),
        _defineProperty(_NS$HTML, $.THEAD, true),
        _defineProperty(_NS$HTML, $.TITLE, true),
        _defineProperty(_NS$HTML, $.TR, true),
        _defineProperty(_NS$HTML, $.TRACK, true),
        _defineProperty(_NS$HTML, $.UL, true),
        _defineProperty(_NS$HTML, $.WBR, true),
        _defineProperty(_NS$HTML, $.XMP, true),
        _NS$HTML)
    ),
    _defineProperty(
        _exports$SPECIAL_ELEM,
        NS.MATHML,
        ((_NS$MATHML = {}),
        _defineProperty(_NS$MATHML, $.MI, true),
        _defineProperty(_NS$MATHML, $.MO, true),
        _defineProperty(_NS$MATHML, $.MN, true),
        _defineProperty(_NS$MATHML, $.MS, true),
        _defineProperty(_NS$MATHML, $.MTEXT, true),
        _defineProperty(_NS$MATHML, $.ANNOTATION_XML, true),
        _NS$MATHML)
    ),
    _defineProperty(
        _exports$SPECIAL_ELEM,
        NS.SVG,
        ((_NS$SVG = {}),
        _defineProperty(_NS$SVG, $.TITLE, true),
        _defineProperty(_NS$SVG, $.FOREIGN_OBJECT, true),
        _defineProperty(_NS$SVG, $.DESC, true),
        _NS$SVG)
    ),
    _exports$SPECIAL_ELEM);
});
var html_1 = html.NAMESPACES;
var html_2 = html.ATTRS;
var html_3 = html.DOCUMENT_MODE;
var html_4 = html.TAG_NAMES;
var html_5 = html.SPECIAL_ELEMENTS;

var _default = createCommonjsModule(function(module, exports) {
    var DOCUMENT_MODE = html.DOCUMENT_MODE; //Node construction

    exports.createDocument = function() {
        return {
            nodeName: '#document',
            mode: DOCUMENT_MODE.NO_QUIRKS,
            childNodes: []
        };
    };

    exports.createDocumentFragment = function() {
        return {
            nodeName: '#document-fragment',
            childNodes: []
        };
    };

    exports.createElement = function(tagName, namespaceURI, attrs) {
        return {
            nodeName: tagName,
            tagName: tagName,
            attrs: attrs,
            namespaceURI: namespaceURI,
            childNodes: [],
            parentNode: null
        };
    };

    exports.createCommentNode = function(data) {
        return {
            nodeName: '#comment',
            data: data,
            parentNode: null
        };
    };

    var createTextNode = function createTextNode(value) {
        return {
            nodeName: '#text',
            value: value,
            parentNode: null
        };
    }; //Tree mutation

    var appendChild = (exports.appendChild = function(parentNode, newNode) {
        parentNode.childNodes.push(newNode);
        newNode.parentNode = parentNode;
    });

    var insertBefore = (exports.insertBefore = function(parentNode, newNode, referenceNode) {
        var insertionIdx = parentNode.childNodes.indexOf(referenceNode);
        parentNode.childNodes.splice(insertionIdx, 0, newNode);
        newNode.parentNode = parentNode;
    });

    exports.setTemplateContent = function(templateElement, contentElement) {
        templateElement.content = contentElement;
    };

    exports.getTemplateContent = function(templateElement) {
        return templateElement.content;
    };

    exports.setDocumentType = function(document, name, publicId, systemId) {
        var doctypeNode = null;

        for (var i = 0; i < document.childNodes.length; i++) {
            if (document.childNodes[i].nodeName === '#documentType') {
                doctypeNode = document.childNodes[i];
                break;
            }
        }

        if (doctypeNode) {
            doctypeNode.name = name;
            doctypeNode.publicId = publicId;
            doctypeNode.systemId = systemId;
        } else {
            appendChild(document, {
                nodeName: '#documentType',
                name: name,
                publicId: publicId,
                systemId: systemId
            });
        }
    };

    exports.setDocumentMode = function(document, mode) {
        document.mode = mode;
    };

    exports.getDocumentMode = function(document) {
        return document.mode;
    };

    exports.detachNode = function(node) {
        if (node.parentNode) {
            var idx = node.parentNode.childNodes.indexOf(node);
            node.parentNode.childNodes.splice(idx, 1);
            node.parentNode = null;
        }
    };

    exports.insertText = function(parentNode, text) {
        if (parentNode.childNodes.length) {
            var prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];

            if (prevNode.nodeName === '#text') {
                prevNode.value += text;
                return;
            }
        }

        appendChild(parentNode, createTextNode(text));
    };

    exports.insertTextBefore = function(parentNode, text, referenceNode) {
        var prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];

        if (prevNode && prevNode.nodeName === '#text') {
            prevNode.value += text;
        } else {
            insertBefore(parentNode, createTextNode(text), referenceNode);
        }
    };

    exports.adoptAttributes = function(recipient, attrs) {
        var recipientAttrsMap = [];

        for (var i = 0; i < recipient.attrs.length; i++) {
            recipientAttrsMap.push(recipient.attrs[i].name);
        }

        for (var j = 0; j < attrs.length; j++) {
            if (recipientAttrsMap.indexOf(attrs[j].name) === -1) {
                recipient.attrs.push(attrs[j]);
            }
        }
    }; //Tree traversing

    exports.getFirstChild = function(node) {
        return node.childNodes[0];
    };

    exports.getChildNodes = function(node) {
        return node.childNodes;
    };

    exports.getParentNode = function(node) {
        return node.parentNode;
    };

    exports.getAttrList = function(element) {
        return element.attrs;
    }; //Node data

    exports.getTagName = function(element) {
        return element.tagName;
    };

    exports.getNamespaceURI = function(element) {
        return element.namespaceURI;
    };

    exports.getTextNodeContent = function(textNode) {
        return textNode.value;
    };

    exports.getCommentNodeContent = function(commentNode) {
        return commentNode.data;
    };

    exports.getDocumentTypeNodeName = function(doctypeNode) {
        return doctypeNode.name;
    };

    exports.getDocumentTypeNodePublicId = function(doctypeNode) {
        return doctypeNode.publicId;
    };

    exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
        return doctypeNode.systemId;
    }; //Node types

    exports.isTextNode = function(node) {
        return node.nodeName === '#text';
    };

    exports.isCommentNode = function(node) {
        return node.nodeName === '#comment';
    };

    exports.isDocumentTypeNode = function(node) {
        return node.nodeName === '#documentType';
    };

    exports.isElementNode = function(node) {
        return !!node.tagName;
    }; // Source code location

    exports.setNodeSourceCodeLocation = function(node, location) {
        node.sourceCodeLocation = location;
    };

    exports.getNodeSourceCodeLocation = function(node) {
        return node.sourceCodeLocation;
    };
});
var _default_1 = _default.createDocument;
var _default_2 = _default.createDocumentFragment;
var _default_3 = _default.createElement;
var _default_4 = _default.createCommentNode;
var _default_5 = _default.appendChild;
var _default_6 = _default.insertBefore;
var _default_7 = _default.setTemplateContent;
var _default_8 = _default.getTemplateContent;
var _default_9 = _default.setDocumentType;
var _default_10 = _default.setDocumentMode;
var _default_11 = _default.getDocumentMode;
var _default_12 = _default.detachNode;
var _default_13 = _default.insertText;
var _default_14 = _default.insertTextBefore;
var _default_15 = _default.adoptAttributes;
var _default_16 = _default.getFirstChild;
var _default_17 = _default.getChildNodes;
var _default_18 = _default.getParentNode;
var _default_19 = _default.getAttrList;
var _default_20 = _default.getTagName;
var _default_21 = _default.getNamespaceURI;
var _default_22 = _default.getTextNodeContent;
var _default_23 = _default.getCommentNodeContent;
var _default_24 = _default.getDocumentTypeNodeName;
var _default_25 = _default.getDocumentTypeNodePublicId;
var _default_26 = _default.getDocumentTypeNodeSystemId;
var _default_27 = _default.isTextNode;
var _default_28 = _default.isCommentNode;
var _default_29 = _default.isDocumentTypeNode;
var _default_30 = _default.isElementNode;
var _default_31 = _default.setNodeSourceCodeLocation;
var _default_32 = _default.getNodeSourceCodeLocation;

var mergeOptions = function mergeOptions(defaults, options) {
    options = options || Object.create(null);
    return [defaults, options].reduce(function(merged, optObj) {
        Object.keys(optObj).forEach(function(key) {
            merged[key] = optObj[key];
        });
        return merged;
    }, Object.create(null));
};

var DOCUMENT_MODE = html.DOCUMENT_MODE; //Const

var VALID_DOCTYPE_NAME = 'html';
var VALID_SYSTEM_ID = 'about:legacy-compat';
var QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';
var QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
    '+//silmaril//dtd html pro v0r11 19970101//en',
    '-//advasoft ltd//dtd html 3.0 aswedit + extensions//en',
    '-//as//dtd html 3.0 aswedit + extensions//en',
    '-//ietf//dtd html 2.0 level 1//en',
    '-//ietf//dtd html 2.0 level 2//en',
    '-//ietf//dtd html 2.0 strict level 1//en',
    '-//ietf//dtd html 2.0 strict level 2//en',
    '-//ietf//dtd html 2.0 strict//en',
    '-//ietf//dtd html 2.0//en',
    '-//ietf//dtd html 2.1e//en',
    '-//ietf//dtd html 3.0//en',
    '-//ietf//dtd html 3.0//en//',
    '-//ietf//dtd html 3.2 final//en',
    '-//ietf//dtd html 3.2//en',
    '-//ietf//dtd html 3//en',
    '-//ietf//dtd html level 0//en',
    '-//ietf//dtd html level 0//en//2.0',
    '-//ietf//dtd html level 1//en',
    '-//ietf//dtd html level 1//en//2.0',
    '-//ietf//dtd html level 2//en',
    '-//ietf//dtd html level 2//en//2.0',
    '-//ietf//dtd html level 3//en',
    '-//ietf//dtd html level 3//en//3.0',
    '-//ietf//dtd html strict level 0//en',
    '-//ietf//dtd html strict level 0//en//2.0',
    '-//ietf//dtd html strict level 1//en',
    '-//ietf//dtd html strict level 1//en//2.0',
    '-//ietf//dtd html strict level 2//en',
    '-//ietf//dtd html strict level 2//en//2.0',
    '-//ietf//dtd html strict level 3//en',
    '-//ietf//dtd html strict level 3//en//3.0',
    '-//ietf//dtd html strict//en',
    '-//ietf//dtd html strict//en//2.0',
    '-//ietf//dtd html strict//en//3.0',
    '-//ietf//dtd html//en',
    '-//ietf//dtd html//en//2.0',
    '-//ietf//dtd html//en//3.0',
    '-//metrius//dtd metrius presentational//en',
    '-//microsoft//dtd internet explorer 2.0 html strict//en',
    '-//microsoft//dtd internet explorer 2.0 html//en',
    '-//microsoft//dtd internet explorer 2.0 tables//en',
    '-//microsoft//dtd internet explorer 3.0 html strict//en',
    '-//microsoft//dtd internet explorer 3.0 html//en',
    '-//microsoft//dtd internet explorer 3.0 tables//en',
    '-//netscape comm. corp.//dtd html//en',
    '-//netscape comm. corp.//dtd strict html//en',
    "-//o'reilly and associates//dtd html 2.0//en",
    "-//o'reilly and associates//dtd html extended 1.0//en",
    '-//spyglass//dtd html 2.0 extended//en',
    '-//sq//dtd html 2.0 hotmetal + extensions//en',
    '-//sun microsystems corp.//dtd hotjava html//en',
    '-//sun microsystems corp.//dtd hotjava strict html//en',
    '-//w3c//dtd html 3 1995-03-24//en',
    '-//w3c//dtd html 3.2 draft//en',
    '-//w3c//dtd html 3.2 final//en',
    '-//w3c//dtd html 3.2//en',
    '-//w3c//dtd html 3.2s draft//en',
    '-//w3c//dtd html 4.0 frameset//en',
    '-//w3c//dtd html 4.0 transitional//en',
    '-//w3c//dtd html experimental 19960712//en',
    '-//w3c//dtd html experimental 970421//en',
    '-//w3c//dtd w3 html//en',
    '-//w3o//dtd w3 html 3.0//en',
    '-//w3o//dtd w3 html 3.0//en//',
    '-//webtechs//dtd mozilla html 2.0//en',
    '-//webtechs//dtd mozilla html//en'
];
var QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = QUIRKS_MODE_PUBLIC_ID_PREFIXES.concat([
    '-//w3c//dtd html 4.01 frameset//',
    '-//w3c//dtd html 4.01 transitional//'
]);
var QUIRKS_MODE_PUBLIC_IDS = ['-//w3o//dtd w3 html strict 3.0//en//', '-/w3c/dtd html 4.0 transitional/en', 'html'];
var LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ['-//W3C//DTD XHTML 1.0 Frameset//', '-//W3C//DTD XHTML 1.0 Transitional//'];
var LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = LIMITED_QUIRKS_PUBLIC_ID_PREFIXES.concat([
    '-//W3C//DTD HTML 4.01 Frameset//',
    '-//W3C//DTD HTML 4.01 Transitional//'
]); //Utils

function enquoteDoctypeId(id) {
    var quote = id.indexOf('"') !== -1 ? "'" : '"';
    return quote + id + quote;
}

function hasPrefix(publicId, prefixes) {
    for (var i = 0; i < prefixes.length; i++) {
        if (publicId.indexOf(prefixes[i]) === 0) {
            return true;
        }
    }

    return false;
} //API

var isConforming = function isConforming(token) {
    return (
        token.name === VALID_DOCTYPE_NAME &&
        token.publicId === null &&
        (token.systemId === null || token.systemId === VALID_SYSTEM_ID)
    );
};

var getDocumentMode = function getDocumentMode(token) {
    if (token.name !== VALID_DOCTYPE_NAME) {
        return DOCUMENT_MODE.QUIRKS;
    }

    var systemId = token.systemId;

    if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return DOCUMENT_MODE.QUIRKS;
    }

    var publicId = token.publicId;

    if (publicId !== null) {
        publicId = publicId.toLowerCase();

        if (QUIRKS_MODE_PUBLIC_IDS.indexOf(publicId) > -1) {
            return DOCUMENT_MODE.QUIRKS;
        }

        var prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;

        if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.QUIRKS;
        }

        prefixes =
            systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;

        if (hasPrefix(publicId, prefixes)) {
            return DOCUMENT_MODE.LIMITED_QUIRKS;
        }
    }

    return DOCUMENT_MODE.NO_QUIRKS;
};

var serializeContent = function serializeContent(name, publicId, systemId) {
    var str = '!DOCTYPE ';

    if (name) {
        str += name;
    }

    if (publicId) {
        str += ' PUBLIC ' + enquoteDoctypeId(publicId);
    } else if (systemId) {
        str += ' SYSTEM';
    }

    if (systemId !== null) {
        str += ' ' + enquoteDoctypeId(systemId);
    }

    return str;
};

var doctype = {
    isConforming: isConforming,
    getDocumentMode: getDocumentMode,
    serializeContent: serializeContent
};

var $ = html.TAG_NAMES;
var NS = html.NAMESPACES; //Default serializer options

var DEFAULT_OPTIONS = {
    treeAdapter: _default
}; //Escaping regexes

var AMP_REGEX = /&/g;
var NBSP_REGEX = /\u00a0/g;
var DOUBLE_QUOTE_REGEX = /"/g;
var LT_REGEX = /</g;
var GT_REGEX = />/g; //Serializer

var Serializer =
    /*#__PURE__*/
    (function() {
        function Serializer(node, options) {
            _classCallCheck(this, Serializer);

            this.options = mergeOptions(DEFAULT_OPTIONS, options);
            this.treeAdapter = this.options.treeAdapter;
            this.html = '';
            this.startNode = node;
        } //API

        _createClass(Serializer, [
            {
                key: 'serialize',
                value: function serialize() {
                    this._serializeChildNodes(this.startNode);

                    return this.html;
                } //Internals
            },
            {
                key: '_serializeChildNodes',
                value: function _serializeChildNodes(parentNode) {
                    var childNodes = this.treeAdapter.getChildNodes(parentNode);

                    if (childNodes) {
                        for (var i = 0, cnLength = childNodes.length; i < cnLength; i++) {
                            var currentNode = childNodes[i];

                            if (this.treeAdapter.isElementNode(currentNode)) {
                                this._serializeElement(currentNode);
                            } else if (this.treeAdapter.isTextNode(currentNode)) {
                                this._serializeTextNode(currentNode);
                            } else if (this.treeAdapter.isCommentNode(currentNode)) {
                                this._serializeCommentNode(currentNode);
                            } else if (this.treeAdapter.isDocumentTypeNode(currentNode)) {
                                this._serializeDocumentTypeNode(currentNode);
                            }
                        }
                    }
                }
            },
            {
                key: '_serializeElement',
                value: function _serializeElement(node) {
                    var tn = this.treeAdapter.getTagName(node);
                    var ns = this.treeAdapter.getNamespaceURI(node);
                    this.html += '<' + tn;

                    this._serializeAttributes(node);

                    this.html += '>';

                    if (
                        tn !== $.AREA &&
                        tn !== $.BASE &&
                        tn !== $.BASEFONT &&
                        tn !== $.BGSOUND &&
                        tn !== $.BR &&
                        tn !== $.COL &&
                        tn !== $.EMBED &&
                        tn !== $.FRAME &&
                        tn !== $.HR &&
                        tn !== $.IMG &&
                        tn !== $.INPUT &&
                        tn !== $.KEYGEN &&
                        tn !== $.LINK &&
                        tn !== $.META &&
                        tn !== $.PARAM &&
                        tn !== $.SOURCE &&
                        tn !== $.TRACK &&
                        tn !== $.WBR
                    ) {
                        var childNodesHolder =
                            tn === $.TEMPLATE && ns === NS.HTML ? this.treeAdapter.getTemplateContent(node) : node;

                        this._serializeChildNodes(childNodesHolder);

                        this.html += '</' + tn + '>';
                    }
                }
            },
            {
                key: '_serializeAttributes',
                value: function _serializeAttributes(node) {
                    var attrs = this.treeAdapter.getAttrList(node);

                    for (var i = 0, attrsLength = attrs.length; i < attrsLength; i++) {
                        var attr = attrs[i];
                        var value = Serializer.escapeString(attr.value, true);
                        this.html += ' ';

                        if (!attr.namespace) {
                            this.html += attr.name;
                        } else if (attr.namespace === NS.XML) {
                            this.html += 'xml:' + attr.name;
                        } else if (attr.namespace === NS.XMLNS) {
                            if (attr.name !== 'xmlns') {
                                this.html += 'xmlns:';
                            }

                            this.html += attr.name;
                        } else if (attr.namespace === NS.XLINK) {
                            this.html += 'xlink:' + attr.name;
                        } else {
                            this.html += attr.namespace + ':' + attr.name;
                        }

                        this.html += '="' + value + '"';
                    }
                }
            },
            {
                key: '_serializeTextNode',
                value: function _serializeTextNode(node) {
                    var content = this.treeAdapter.getTextNodeContent(node);
                    var parent = this.treeAdapter.getParentNode(node);
                    var parentTn = void 0;

                    if (parent && this.treeAdapter.isElementNode(parent)) {
                        parentTn = this.treeAdapter.getTagName(parent);
                    }

                    if (
                        parentTn === $.STYLE ||
                        parentTn === $.SCRIPT ||
                        parentTn === $.XMP ||
                        parentTn === $.IFRAME ||
                        parentTn === $.NOEMBED ||
                        parentTn === $.NOFRAMES ||
                        parentTn === $.PLAINTEXT ||
                        parentTn === $.NOSCRIPT
                    ) {
                        this.html += content;
                    } else {
                        this.html += Serializer.escapeString(content, false);
                    }
                }
            },
            {
                key: '_serializeCommentNode',
                value: function _serializeCommentNode(node) {
                    this.html += '<!--' + this.treeAdapter.getCommentNodeContent(node) + '-->';
                }
            },
            {
                key: '_serializeDocumentTypeNode',
                value: function _serializeDocumentTypeNode(node) {
                    var name = this.treeAdapter.getDocumentTypeNodeName(node);
                    this.html += '<' + doctype.serializeContent(name, null, null) + '>';
                }
            }
        ]);

        return Serializer;
    })(); // NOTE: used in tests and by rewriting stream

Serializer.escapeString = function(str, attrMode) {
    str = str.replace(AMP_REGEX, '&amp;').replace(NBSP_REGEX, '&nbsp;');

    if (attrMode) {
        str = str.replace(DOUBLE_QUOTE_REGEX, '&quot;');
    } else {
        str = str.replace(LT_REGEX, '&lt;').replace(GT_REGEX, '&gt;');
    }

    return str;
};

var serializer = Serializer;

var Readable = stream.Readable;

var SerializerStream =
    /*#__PURE__*/
    (function(_Readable) {
        _inherits(SerializerStream, _Readable);

        function SerializerStream(node, options) {
            var _this;

            _classCallCheck(this, SerializerStream);

            _this = _possibleConstructorReturn(
                this,
                _getPrototypeOf(SerializerStream).call(this, {
                    encoding: 'utf8'
                })
            );
            _this.serializer = new serializer(node, options);
            Object.defineProperty(_this.serializer, 'html', {
                //NOTE: To make `+=` concat operator work properly we define
                //getter which always returns empty string
                get: function get() {
                    return '';
                },
                set: _this.push.bind(_assertThisInitialized(_assertThisInitialized(_this)))
            });
            return _this;
        } //Readable stream implementation

        _createClass(SerializerStream, [
            {
                key: '_read',
                value: function _read() {
                    this.serializer.serialize();
                    this.push(null);
                }
            }
        ]);

        return SerializerStream;
    })(Readable);

var lib = SerializerStream;

export default lib;
