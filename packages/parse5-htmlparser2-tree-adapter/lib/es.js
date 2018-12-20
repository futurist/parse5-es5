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

var lib = createCommonjsModule(function(module, exports) {
    var DOCUMENT_MODE = html.DOCUMENT_MODE; //Conversion tables for DOM Level1 structure emulation

    var nodeTypes = {
        element: 1,
        text: 3,
        cdata: 4,
        comment: 8
    };
    var nodePropertyShorthands = {
        tagName: 'name',
        childNodes: 'children',
        parentNode: 'parent',
        previousSibling: 'prev',
        nextSibling: 'next',
        nodeValue: 'data'
    }; //Node

    var Node =
        /*#__PURE__*/
        (function() {
            function Node(props) {
                _classCallCheck(this, Node);

                var _arr = Object.keys(props);

                for (var _i = 0; _i < _arr.length; _i++) {
                    var key = _arr[_i];
                    this[key] = props[key];
                }
            }

            _createClass(Node, [
                {
                    key: 'firstChild',
                    get: function get() {
                        var children = this.children;
                        return (children && children[0]) || null;
                    }
                },
                {
                    key: 'lastChild',
                    get: function get() {
                        var children = this.children;
                        return (children && children[children.length - 1]) || null;
                    }
                },
                {
                    key: 'nodeType',
                    get: function get() {
                        return nodeTypes[this.type] || nodeTypes.element;
                    }
                }
            ]);

            return Node;
        })();

    Object.keys(nodePropertyShorthands).forEach(function(key) {
        var shorthand = nodePropertyShorthands[key];
        Object.defineProperty(Node.prototype, key, {
            get: function get() {
                return this[shorthand] || null;
            },
            set: function set(val) {
                this[shorthand] = val;
                return val;
            }
        });
    }); //Node construction

    exports.createDocument = function() {
        return new Node({
            type: 'root',
            name: 'root',
            parent: null,
            prev: null,
            next: null,
            children: [],
            'x-mode': DOCUMENT_MODE.NO_QUIRKS
        });
    };

    exports.createDocumentFragment = function() {
        return new Node({
            type: 'root',
            name: 'root',
            parent: null,
            prev: null,
            next: null,
            children: []
        });
    };

    exports.createElement = function(tagName, namespaceURI, attrs) {
        var attribs = Object.create(null);
        var attribsNamespace = Object.create(null);
        var attribsPrefix = Object.create(null);

        for (var i = 0; i < attrs.length; i++) {
            var attrName = attrs[i].name;
            attribs[attrName] = attrs[i].value;
            attribsNamespace[attrName] = attrs[i].namespace;
            attribsPrefix[attrName] = attrs[i].prefix;
        }

        return new Node({
            type: tagName === 'script' || tagName === 'style' ? tagName : 'tag',
            name: tagName,
            namespace: namespaceURI,
            attribs: attribs,
            'x-attribsNamespace': attribsNamespace,
            'x-attribsPrefix': attribsPrefix,
            children: [],
            parent: null,
            prev: null,
            next: null
        });
    };

    exports.createCommentNode = function(data) {
        return new Node({
            type: 'comment',
            data: data,
            parent: null,
            prev: null,
            next: null
        });
    };

    var createTextNode = function createTextNode(value) {
        return new Node({
            type: 'text',
            data: value,
            parent: null,
            prev: null,
            next: null
        });
    }; //Tree mutation

    var appendChild = (exports.appendChild = function(parentNode, newNode) {
        var prev = parentNode.children[parentNode.children.length - 1];

        if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
        }

        parentNode.children.push(newNode);
        newNode.parent = parentNode;
    });

    var insertBefore = (exports.insertBefore = function(parentNode, newNode, referenceNode) {
        var insertionIdx = parentNode.children.indexOf(referenceNode);
        var prev = referenceNode.prev;

        if (prev) {
            prev.next = newNode;
            newNode.prev = prev;
        }

        referenceNode.prev = newNode;
        newNode.next = referenceNode;
        parentNode.children.splice(insertionIdx, 0, newNode);
        newNode.parent = parentNode;
    });

    exports.setTemplateContent = function(templateElement, contentElement) {
        appendChild(templateElement, contentElement);
    };

    exports.getTemplateContent = function(templateElement) {
        return templateElement.children[0];
    };

    exports.setDocumentType = function(document, name, publicId, systemId) {
        var data = doctype.serializeContent(name, publicId, systemId);
        var doctypeNode = null;

        for (var i = 0; i < document.children.length; i++) {
            if (document.children[i].type === 'directive' && document.children[i].name === '!doctype') {
                doctypeNode = document.children[i];
                break;
            }
        }

        if (doctypeNode) {
            doctypeNode.data = data;
            doctypeNode['x-name'] = name;
            doctypeNode['x-publicId'] = publicId;
            doctypeNode['x-systemId'] = systemId;
        } else {
            appendChild(
                document,
                new Node({
                    type: 'directive',
                    name: '!doctype',
                    data: data,
                    'x-name': name,
                    'x-publicId': publicId,
                    'x-systemId': systemId
                })
            );
        }
    };

    exports.setDocumentMode = function(document, mode) {
        document['x-mode'] = mode;
    };

    exports.getDocumentMode = function(document) {
        return document['x-mode'];
    };

    exports.detachNode = function(node) {
        if (node.parent) {
            var idx = node.parent.children.indexOf(node);
            var prev = node.prev;
            var next = node.next;
            node.prev = null;
            node.next = null;

            if (prev) {
                prev.next = next;
            }

            if (next) {
                next.prev = prev;
            }

            node.parent.children.splice(idx, 1);
            node.parent = null;
        }
    };

    exports.insertText = function(parentNode, text) {
        var lastChild = parentNode.children[parentNode.children.length - 1];

        if (lastChild && lastChild.type === 'text') {
            lastChild.data += text;
        } else {
            appendChild(parentNode, createTextNode(text));
        }
    };

    exports.insertTextBefore = function(parentNode, text, referenceNode) {
        var prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];

        if (prevNode && prevNode.type === 'text') {
            prevNode.data += text;
        } else {
            insertBefore(parentNode, createTextNode(text), referenceNode);
        }
    };

    exports.adoptAttributes = function(recipient, attrs) {
        for (var i = 0; i < attrs.length; i++) {
            var attrName = attrs[i].name;

            if (typeof recipient.attribs[attrName] === 'undefined') {
                recipient.attribs[attrName] = attrs[i].value;
                recipient['x-attribsNamespace'][attrName] = attrs[i].namespace;
                recipient['x-attribsPrefix'][attrName] = attrs[i].prefix;
            }
        }
    }; //Tree traversing

    exports.getFirstChild = function(node) {
        return node.children[0];
    };

    exports.getChildNodes = function(node) {
        return node.children;
    };

    exports.getParentNode = function(node) {
        return node.parent;
    };

    exports.getAttrList = function(element) {
        var attrList = [];

        for (var name in element.attribs) {
            attrList.push({
                name: name,
                value: element.attribs[name],
                namespace: element['x-attribsNamespace'][name],
                prefix: element['x-attribsPrefix'][name]
            });
        }

        return attrList;
    }; //Node data

    exports.getTagName = function(element) {
        return element.name;
    };

    exports.getNamespaceURI = function(element) {
        return element.namespace;
    };

    exports.getTextNodeContent = function(textNode) {
        return textNode.data;
    };

    exports.getCommentNodeContent = function(commentNode) {
        return commentNode.data;
    };

    exports.getDocumentTypeNodeName = function(doctypeNode) {
        return doctypeNode['x-name'];
    };

    exports.getDocumentTypeNodePublicId = function(doctypeNode) {
        return doctypeNode['x-publicId'];
    };

    exports.getDocumentTypeNodeSystemId = function(doctypeNode) {
        return doctypeNode['x-systemId'];
    }; //Node types

    exports.isTextNode = function(node) {
        return node.type === 'text';
    };

    exports.isCommentNode = function(node) {
        return node.type === 'comment';
    };

    exports.isDocumentTypeNode = function(node) {
        return node.type === 'directive' && node.name === '!doctype';
    };

    exports.isElementNode = function(node) {
        return !!node.attribs;
    }; // Source code location

    exports.setNodeSourceCodeLocation = function(node, location) {
        node.sourceCodeLocation = location;
    };

    exports.getNodeSourceCodeLocation = function(node) {
        return node.sourceCodeLocation;
    };
});
var lib_1 = lib.createDocument;
var lib_2 = lib.createDocumentFragment;
var lib_3 = lib.createElement;
var lib_4 = lib.createCommentNode;
var lib_5 = lib.appendChild;
var lib_6 = lib.insertBefore;
var lib_7 = lib.setTemplateContent;
var lib_8 = lib.getTemplateContent;
var lib_9 = lib.setDocumentType;
var lib_10 = lib.setDocumentMode;
var lib_11 = lib.getDocumentMode;
var lib_12 = lib.detachNode;
var lib_13 = lib.insertText;
var lib_14 = lib.insertTextBefore;
var lib_15 = lib.adoptAttributes;
var lib_16 = lib.getFirstChild;
var lib_17 = lib.getChildNodes;
var lib_18 = lib.getParentNode;
var lib_19 = lib.getAttrList;
var lib_20 = lib.getTagName;
var lib_21 = lib.getNamespaceURI;
var lib_22 = lib.getTextNodeContent;
var lib_23 = lib.getCommentNodeContent;
var lib_24 = lib.getDocumentTypeNodeName;
var lib_25 = lib.getDocumentTypeNodePublicId;
var lib_26 = lib.getDocumentTypeNodeSystemId;
var lib_27 = lib.isTextNode;
var lib_28 = lib.isCommentNode;
var lib_29 = lib.isDocumentTypeNode;
var lib_30 = lib.isElementNode;
var lib_31 = lib.setNodeSourceCodeLocation;
var lib_32 = lib.getNodeSourceCodeLocation;

export default lib;
export {
    lib_1 as createDocument,
    lib_2 as createDocumentFragment,
    lib_3 as createElement,
    lib_4 as createCommentNode,
    lib_5 as appendChild,
    lib_6 as insertBefore,
    lib_7 as setTemplateContent,
    lib_8 as getTemplateContent,
    lib_9 as setDocumentType,
    lib_10 as setDocumentMode,
    lib_11 as getDocumentMode,
    lib_12 as detachNode,
    lib_13 as insertText,
    lib_14 as insertTextBefore,
    lib_15 as adoptAttributes,
    lib_16 as getFirstChild,
    lib_17 as getChildNodes,
    lib_18 as getParentNode,
    lib_19 as getAttrList,
    lib_20 as getTagName,
    lib_21 as getNamespaceURI,
    lib_22 as getTextNodeContent,
    lib_23 as getCommentNodeContent,
    lib_24 as getDocumentTypeNodeName,
    lib_25 as getDocumentTypeNodePublicId,
    lib_26 as getDocumentTypeNodeSystemId,
    lib_27 as isTextNode,
    lib_28 as isCommentNode,
    lib_29 as isDocumentTypeNode,
    lib_30 as isElementNode,
    lib_31 as setNodeSourceCodeLocation,
    lib_32 as getNodeSourceCodeLocation
};
