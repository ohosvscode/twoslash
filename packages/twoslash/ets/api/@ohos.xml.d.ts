/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit ArkTS
 */
/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @since 8
 */
/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * The xml module provides utilities for converting XML text to Javascript object, XML generation and parsing.
 *
 * @namespace xml
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare namespace xml {
    /**
     * The XmlDynamicSerializer interface is used to dynamically generate an xml file.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 20
     * @name XmlDynamicSerializer
     */
    class XmlDynamicSerializer {
        /**
         * A parameterized constructor used to create a new XmlDynamicSerializer instance.
         * The input parameter is an encoding format of string type.
         *
         * @param { string } [encoding] - [encoding='utf8']  this is its encoding, only support utf-8.
         * @throws { BusinessError } 10200066 - Incorrect encoding format, only support utf-8.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        constructor(encoding?: string);
        /**
         * Write an attribute to xml element.
         *
         * @param { string } name - Key name of the attribute. Cannot be an empty string.
         * @param { string } value - Values of attribute.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200063 - Illegal position for xml.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        setAttributes(name: string, value: string): void;
        /**
         * Add an empty element.
         *
         * @param { string } name - Name of the element.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        addEmptyElement(name: string): void;
        /**
         * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200063 - Illegal position for xml.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        setDeclaration(): void;
        /**
         * Writes a element start tag with the given name.
         *
         * @param { string } name - Name of the element.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        startElement(name: string): void;
        /**
         * Writes end tag of the element.
         *
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200065 - There is no match between the startElement and the endElement.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        endElement(): void;
        /**
         * Writes the namespace of the current element tag.
         *
         * @param { string } prefix - Values name of the prefix. Cannot be an empty string.
         * @param { string } namespace - Values of namespace. Cannot be an empty string.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        setNamespace(prefix: string, namespace: string): void;
        /**
         * Writes the comment to xml.
         *
         * @param { string } text - Values of comment. Cannot be an empty string.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        setComment(text: string): void;
        /**
         * Writes the CDATA.
         *
         * @param { string } text - Values of CDATA. Cannot be an empty string.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        setCdata(text: string): void;
        /**
         * Writes the text to xml element.
         *
         * @param { string } text - Values of text. Cannot be an empty string.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        setText(text: string): void;
        /**
         * Writes the DOCTYPE.
         *
         * @param { string } text - Values of docType. Cannot be an empty string.
         * @throws { BusinessError } 10200062 - The cumulative length of xml has exceeded the upper limit 100000.
         * @throws { BusinessError } 10200064 - Cannot be an empty string.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        setDocType(text: string): void;
        /**
         * Get an ArrayBuffer from a XmlDynamicSerializer instance.
         *
         * @returns { ArrayBuffer } - Returns ArrayBuffer result from a XmlDynamicSerializer instance. Empty ArrayBuffer would return if internal error happens.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getOutput(): ArrayBuffer;
    }
    /**
     * The XmlSerializer interface is used to generate an xml file.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @name XmlSerializer
     */
    /**
     * The XmlSerializer interface is used to generate an xml file.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     * @name XmlSerializer
     */
    /**
     * The XmlSerializer interface is used to generate an xml file.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     * @name XmlSerializer
     */
    class XmlSerializer {
        /**
         * A parameterized constructor used to create a new XmlSerializer instance.
         * As the input parameter of the constructor function, init supports three types.
         * The input parameter is an Arrarybuffer.
         * The input parameter is a DataView.
         * The input parameter is an encoding format of string type.
         *
         * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
         * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * A parameterized constructor used to create a new XmlSerializer instance.
         * As the input parameter of the constructor function, init supports three types.
         * The input parameter is an Arrarybuffer.
         * The input parameter is a DataView.
         * The input parameter is an encoding format of string type.
         *
         * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
         * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * A constructor used to create an XmlSerializer instance.
         *
         * @param { ArrayBuffer | DataView } buffer - ArrayBuffer or DataView for storing the XML information to set.
         * @param { string } [encoding] - Encoding format. The default value is 'utf-8' (the only format currently supported).
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        constructor(buffer: ArrayBuffer | DataView, encoding?: string);
        /**
         * Write an attribute.
         *
         * @param { string } name - Key name of the attribute.
         * @param { string } value - Values of attribute.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Write an attribute.
         *
         * @param { string } name - Key name of the attribute.
         * @param { string } value - Values of attribute.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sets an attribute.
         *
         * @param { string } name - Key of the attribute.
         * @param { string } value - Value of the attribute.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types; 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setAttributes(name: string, value: string): void;
        /**
         * Add an empty element.
         *
         * @param { string } name - Key name of the attribute.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Add an empty element.
         *
         * @param { string } name - Key name of the attribute.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Adds an empty element.
         *
         * @param { string } name - Name of the empty element to add.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        addEmptyElement(name: string): void;
        /**
         * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes xml declaration with encoding. For example: <?xml version="1.0" encoding="utf-8"?>.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sets a file declaration with encoding.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setDeclaration(): void;
        /**
         * Writes a element start tag with the given name.
         *
         * @param { string } name - Name of the element.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes a element start tag with the given name.
         *
         * @param { string } name - Name of the element.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Writes the start tag based on the given element name.
         *
         * @param { string } name - Name of the element.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        startElement(name: string): void;
        /**
         * Writes end tag of the element.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes end tag of the element.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Writes the end tag of the element.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        endElement(): void;
        /**
         * Writes the namespace of the current element tag.
         *
         * @param { string } prefix - Values name of the prefix.
         * @param { string } namespace - Values of namespace.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes the namespace of the current element tag.
         *
         * @param { string } prefix - Values name of the prefix.
         * @param { string } namespace - Values of namespace.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sets the namespace for an element tag.
         *
         * @param { string } prefix - Prefix of the element and its child elements.
         * @param { string } namespace - Namespace to set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setNamespace(prefix: string, namespace: string): void;
        /**
         * Writes the comment.
         *
         * @param { string } text - Values of comment.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes the comment.
         *
         * @param { string } text - Values of comment.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sets a comment.
         *
         * @param { string } text - Comment to set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setComment(text: string): void;
        /**
         * Writes the CDATA.
         *
         * @param { string } text -  Values of CDATA.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes the CDATA.
         *
         * @param { string } text - Values of CDATA.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Adds data to the CDATA tag. The structure of the generated CDATA tag is "<! <![CDATA["+ Data added + "]]>".
         *
         * @param { string } text - CDATA data to set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setCDATA(text: string): void;
        /**
         * Writes the text.
         *
         * @param { string } text - Values of text.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes the text.
         *
         * @param { string } text - Values of text.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sets a tag value.
         *
         * @param { string } text - Tag value to set, which is the content of the text attribute.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setText(text: string): void;
        /**
         * Writes the DOCTYPE.
         *
         * @param { string } text - Values of docType.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Writes the DOCTYPE.
         *
         * @param { string } text - Values of docType.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sets a document type.
         *
         * @param { string } text - Content of DocType to set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        setDocType(text: string): void;
    }
    /**
     * The event types represented by XML elements.
     *
     * @enum { number }
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The event types represented by XML elements.
     *
     * @enum { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * The event types represented by XML elements.
     *
     * @enum { number }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enum EventType {
        /**
         * Start a document.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Start a document.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Start a document.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        START_DOCUMENT,
        /**
         * End a document.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * End a document.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * End a document.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        END_DOCUMENT,
        /**
         * Start a tag.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Start a tag.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Start a tag.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        START_TAG,
        /**
         * End a tag.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * End a tag.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * End a tag.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        END_TAG,
        /**
         * Character data.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Character data.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Character data.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        TEXT,
        /**
         * A CDATA sections.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * A CDATA sections.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * A CDATA sections.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        CDSECT,
        /**
         * An XML comment.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * An XML comment.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * An XML comment.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        COMMENT,
        /**
         * An XML document type declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * An XML document type declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * An XML document type declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        DOCDECL,
        /**
         * An XML processing instruction declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * An XML processing instruction declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * An XML processing instruction declaration.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        INSTRUCTION,
        /**
         * An entity reference.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * An entity reference.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * An entity reference.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        ENTITY_REFERENCE,
        /**
         * A whitespace.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * A whitespace.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * A whitespace.
         *
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        WHITESPACE
    }
    /**
     * The current parse info.
     *
     * @typedef ParseInfo
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * The current parse info.
     *
     * @typedef ParseInfo
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * The current parse info.
     *
     * @typedef ParseInfo
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    interface ParseInfo {
        /**
         * The current column number, starting from 1.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * The current column number, starting from 1.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the current column number, starting from 1.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getColumnNumber(): number;
        /**
         * The current depth of the element.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * The current depth of the element.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the depth of this element.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getDepth(): number;
        /**
         * The current line number, starting from 1.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * The current line number, starting from 1.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the current line number, starting from 1.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getLineNumber(): number;
        /**
         * The current element's name.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * The current element's name.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the name of this element.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getName(): string;
        /**
         * The current element's namespace.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * The current element's namespace.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the namespace of this element.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getNamespace(): string;
        /**
         * The current element's prefix.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * The current element's prefix.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the prefix of this element.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getPrefix(): string;
        /**
         * The text content of the current event as String.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * The text content of the current event as String.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the text of the current event.
         *
         * @returns { string }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getText(): string;
        /**
         * Returns true if the current element is empty.
         *
         * @returns { boolean }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Returns true if the current element is empty.
         *
         * @returns { boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Checks whether the current element is empty.
         *
         * @returns { boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        isEmptyElementTag(): boolean;
        /**
         * Checks whether the current TEXT event contains only whitespace characters.
         *
         * @returns { boolean }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Checks whether the current TEXT event contains only whitespace characters.
         *
         * @returns { boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Checks whether the current event contains only whitespace characters.
         *
         * @returns { boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        isWhitespace(): boolean;
        /**
         * Returns the number of attributes of the current start tag.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Returns the number of attributes of the current start tag.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Obtains the number of attributes for the current start tag.
         *
         * @returns { number }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        getAttributeCount(): number;
    }
    /**
     * Parse options for XmlPullParser.
     *
     * @typedef ParseOptions
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     */
    /**
     * Parse options for XmlPullParser.
     *
     * @typedef ParseOptions
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Parse options for XmlPullParser.
     *
     * @typedef ParseOptions
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    interface ParseOptions {
        /**
         * Whether to parsing Doctype of the elements.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to parsing Doctype of the elements.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Whether to parsing Doctype of the elements.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        supportDoctype?: boolean;
        /**
         * Whether to ignore parsing texts of the elements.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Whether to ignore parsing texts of the elements.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Whether to ignore parsing texts of the elements.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        ignoreNameSpace?: boolean;
        /**
         * Tag value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Tag value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Tag value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        tagValueCallbackFunction?: (name: string, value: string) => boolean;
        /**
         * Attribute value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Attribute value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Attribute value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        attributeValueCallbackFunction?: (name: string, value: string) => boolean;
        /**
         * Token value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Token value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Token value callback function.
         *
         * @type { ?function }
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        tokenValueCallbackFunction?: (eventType: EventType, value: ParseInfo) => boolean;
    }
    /**
     * The XmlPullParser interface is used to parse the existing xml file.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 8
     * @name XmlPullParser
     */
    /**
     * The XmlPullParser interface is used to parse the existing xml file.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     * @name XmlPullParser
     */
    /**
     * The XmlPullParser interface is used to parse the existing xml file.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     * @name XmlPullParser
     */
    class XmlPullParser {
        /**
         * A constructor used to create a new XmlPullParser instance.
         *
         * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
         * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * A constructor used to create a new XmlPullParser instance.
         *
         * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
         * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Creates and returns an XmlPullParser object.
         *
         * @param { ArrayBuffer | DataView } buffer - A instance, the new XmlPullParser with.
         * @param { string } [encoding] - [encoding='utf8']  this is its encoding.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        constructor(buffer: ArrayBuffer | DataView, encoding?: string);
        /**
         * Starts parsing the XML file.
         *
         * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
           * two Boolean variables and three callback functions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types.
         * @syscap SystemCapability.Utils.Lang
         * @since 8
         */
        /**
         * Starts parsing the XML file.
         *
         * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
           * two Boolean variables and three callback functions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Starts parsing the XML file.
         *
         * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
           * two Boolean variables and three callback functions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        /**
         * Starts parsing the XML file.
         *
         * @param { ParseOptions } option - Parse options for XmlPullParser, the interface including
           * two Boolean variables and three callback functions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         * @deprecated since 14
         * @useinstead ohos.xml.XmlPullParser.parseXml
         */
        parse(option: ParseOptions): void;
        /**
         * Parses XML information.
         *
         * @param { ParseOptions } option - XML parsing options.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 14
         */
        parseXml(option: ParseOptions): void;
    }
}
export default xml;
