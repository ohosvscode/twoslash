/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkUI
 */
import { UIContext } from '../@ohos.arkui.UIContext';
import { RenderNode } from './RenderNode';
import { Size, Position, Edges, LengthMetrics, SizeT } from './Graphics';
import { DrawContext } from './Graphics';
import { ComponentContent } from './ComponentContent';
/**
 * Layout constraint, include the max size, the min size and the reference size for children to calculate percent.
 *
 * @interface LayoutConstraint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LayoutConstraint {
    /**
     * MaxSize
     *
     * @type { Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    maxSize: Size;
    /**
     * MinSize
     *
     * @type { Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    minSize: Size;
    /**
     * PercentReference, if the size unit of the child nodes is percentage, then they use PercentReference to calculate
     * the px size.
     *
     * @type { Size }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    percentReference: Size;
}
/**
 * Defines the cross-language options.
 * Provides options for configuring or querying the cross-language access permissions for a FrameNode.
 * For example, for nodes created using ArkTS, this API can control whether non-ArkTS languages are allowed to
 * access or modify the properties of these nodes.
 *
 * @interface CrossLanguageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare interface CrossLanguageOptions {
    /**
     * Defines if it enables setting attributes cross-language. Default value is false.
     *
     * @type { boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    attributeSetting?: boolean;
}
/**
 * The interaction event binding status information on the component.
 *
 * @interface InteractionEventBindingInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare interface InteractionEventBindingInfo {
    /**
     * Whether to bind events declaratively.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    baseEventRegistered: boolean;
    /**
     * Whether to bind events in an imperative FrameNode mode.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    nodeEventRegistered: boolean;
    /**
     * Whether to bind the event as an imperative NativeNode.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    nativeEventRegistered: boolean;
    /**
     * Whether the component binds built-in event.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    builtInEventRegistered: boolean;
}
/**
 * Enum for the expand mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
export enum ExpandMode {
    /**
     * Do not expand the children of node.
     * The child nodes of the current FrameNode are not expanded. If the FrameNode contains LazyForEach child nodes,
     * the child nodes are not expanded when the nodes in the main tree are being obtained.
     * The child node sequence numbers are calculated based on the nodes in the main tree.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    NOT_EXPAND = 0,
    /**
     * Expand the children of node.
     * The child nodes of the current FrameNode are expanded. If the FrameNode contains LazyForEach child nodes,
     * all child nodes are expanded when being obtained.
     * The child node sequence numbers are calculated based on all child nodes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    EXPAND = 1,
    /**
     * Expand the children of node if needed.
     * The child nodes of the current FrameNode are expanded on demand. If the FrameNode contains LazyForEach child nodes,
     * the child nodes are not expanded when the nodes in the main tree are being obtained, but are expanded when nodes
     * not in the main tree are being obtained. The child node sequence numbers are calculated based on all child nodes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    LAZY_EXPAND = 2
}
/**
 * Enum for the UI state of one component, which is used for handling of state style.
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
export enum UIState {
    /**
     * The normal state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
    */
    NORMAL = 0,
    /**
     * The pressed state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
    */
    PRESSED = 1 << 0,
    /**
     * The focused state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
    */
    FOCUSED = 1 << 1,
    /**
     * The disabled state.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
    */
    DISABLED = 1 << 2,
    /**
     * The selected state, this state is only supported by some specific kind of component,
     * they are Checkbox, Radio, Toggle and List/Grid/MenuItem, please check the StateStyles docs for details.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SELECTED = 1 << 3
}
/**
 * UI state change handling function, it returns the current UI states, the value is the result
 * of all current state enumeration values or calculations, and you can determine the state
 * by performing the & operation as follows。
 *    if (currentStates & UIState.PRESSED == UIState.PRESSED)
 * But, please be awared, for the normal state check, the equal should be used directly.
 *    if (currentStates == UIState.NORMAL)
 *
 * @typedef { function } UIStatesChangeHandler
 * @param { FrameNode } node - Current node which is triggering the state change.
 * @param { number } currentUIStates - Current UI states when the handler is triggered.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare type UIStatesChangeHandler = (node: FrameNode, currentUIStates: number) => void;
/**
 * Defines FrameNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines FrameNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export class FrameNode {
    /**
     * Constructor.
     * Constructor used to create a FrameNode.
     *
     * @param { UIContext } uiContext - uiContext used to create the FrameNode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Constructor.
     * Constructor used to create a FrameNode.
     *
     * @param { UIContext } uiContext - uiContext used to create the FrameNode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(uiContext: UIContext);
    /**
     * Get the RenderNode in FrameNode.
     *
     * @returns { RenderNode | null } - Returns a RenderNode inside the FrameNode, or null if not contained.
     * If the current FrameNode does not hold any RenderNode, null is returned.
     * If the current FrameNode is a node created by a declarative component, null is returned.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the RenderNode in FrameNode.
     *
     * @returns { RenderNode | null } - Returns a RenderNode inside the FrameNode, or null if not contained.
     * If the current FrameNode does not hold any RenderNode, null is returned.
     * If the current FrameNode is a node created by a declarative component, null is returned.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getRenderNode(): RenderNode | null;
    /**
     * Return a flag to indicate whether the current FrameNode can be modified. Indicates whether the FrameNode supports appendChild, insertChildAfter, removeChild, clearChildren.
     *
     * @returns { boolean } - Returns true if the FrameNode can be modified, otherwise return false.
     * When false is returned, the FrameNode does not support the appendChild, insertChildAfter, removeChild,
     * and clearChildren operations.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isModifiable(): boolean;
    /**
     * Add child to the end of the FrameNode's children.
     * If this FrameNode is not modifiable, an exception is thrown.
     * When appendChild is called, typeNode validates the type or number of child nodes.
     * If the validation fails, an exception is thrown. For specific limitations, see typeNode.
     *
     * @param { FrameNode } node - The node will be added.
     * The child node cannot be one created declaratively, which is not modifiable.
     * Only declarative nodes obtained from a BuilderNode can be used as child nodes.
     * If the child node does not meet the specifications, an exception is thrown.
     * The FrameNode cannot have a parent node. Otherwise, an exception is thrown.
     * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    appendChild(node: FrameNode): void;
    /**
     * Add child to the current FrameNode.
     * If this FrameNode is not modifiable, an exception is thrown.
     *
     * @param { FrameNode } child - The node will be added.
     * The child node cannot be a declarative node, that is, a FrameNode that cannot be modified.
     * Only declarative nodes obtained from a BuilderNode can be used as child nodes.
     * If the child node does not meet the specifications, an exception is thrown.
     * The child node cannot have a parent node. Otherwise, an exception is thrown.
     * @param { FrameNode | null } sibling - The new node is added after this node. When sibling is null, insert node as the first children of the node.
     * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    insertChildAfter(child: FrameNode, sibling: FrameNode | null): void;
    /**
     * Remove child from the current FrameNode.
     * If this FrameNode is not modifiable, an exception is thrown.
     *
     * @param { FrameNode } node - The node will be removed.
     * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeChild(node: FrameNode): void;
    /**
     * Clear children of the current FrameNode.
     * If this FrameNode is not modifiable, an exception is thrown.
     *
     * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    clearChildren(): void;
    /**
     * Get a child of the current FrameNode by index.
     *
     * @param { number } index - The index of the desired node in the children of FrameNode.
     * @returns { FrameNode | null } - Returns a FrameNode. When the required node does not exist, returns null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getChild(index: number): FrameNode | null;
    /**
     * Get a child of the current FrameNode by index.
     *
     * @param { number } index - The index of the desired node in the children of FrameNode.
     * @param { ExpandMode } expandMode - The expand mode. Default value is ExpandMode.EXPAND.
     * @returns { FrameNode | null } - Returns a FrameNode. When the required node does not exist, returns null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    getChild(index: number, expandMode?: ExpandMode): FrameNode | null;
    /**
     * Get the index of the current FrameNode's first child node which is on the tree.
     * The child node sequence numbers are calculated based on all child nodes.
     *
     * @returns { number } - Returns the index of the current FrameNode's first child node which is on the tree.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    getFirstChildIndexWithoutExpand(): number;
    /**
     * Get the index of the current FrameNode's last child node which is on the tree.
     * The child node sequence numbers are calculated based on all child nodes.
     *
     * @returns { number } - Returns the index of the current FrameNode's last child node which is on the tree.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    getLastChildIndexWithoutExpand(): number;
    /**
     * Get the first child of the current FrameNode.
     *
     * @returns {  FrameNode | null } - Returns a FrameNode, which is first child of the current FrameNode. If current FrameNode does not have child node, returns null.
     * If current FrameNode does not have child node, returns null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getFirstChild(): FrameNode | null;
    /**
     * Get the next sibling node of the current FrameNode.
     *
     * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have next sibling node, returns null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getNextSibling(): FrameNode | null;
    /**
     * Get the previous sibling node of the current FrameNode.
     *
     * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have previous sibling node, returns null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPreviousSibling(): FrameNode | null;
    /**
     * Get the parent node of the current FrameNode.
     *
     * @returns { FrameNode | null } - Returns a FrameNode. If current FrameNode does not have parent node, returns null.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getParent(): FrameNode | null;
    /**
     * Get the children count of the current FrameNode.
     *
     * @returns { number } - Returns the number of the children of the current FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getChildrenCount(): number;
    /**
     * Move node to the target Framenode as child.
     * If this FrameNode is not modifiable, an exception is thrown.
     * When targetParent is a typeNode, the API validates the type or number of child nodes.
     * If the validation fails, an exception is thrown. For specific limitations, see typeNode.
     *
     * <p><strong>NOTE</strong>:
     * <br>Currently, only the following types of TypedFrameNode are supported for the movement operations: Stack, XComponent.
     * </p>
     *
     * @param { FrameNode } targetParent - The target parent node.
     * The target parent node must not be a declaratively created node, that is, a FrameNode that is not modifiable.
     * If it does not meet the specifications, an exception is thrown.
     * @param { number } index - The index which the node is moved to. If the value is a negative number or invalid,
     * the node is moved to the end of the target parent node. Moves to the end of the target parent node by default.
     * If the target FrameNode has n nodes, the value range for index is 0 to n-1.
     * Default value: -1
     * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    moveTo(targetParent: FrameNode, index?: number): void;
    /**
     * Dispose the FrameNode immediately.
     *
     * <p><strong>NOTE</strong>:
     * <br>After the <em>dispose</em> API is called, the FrameNode object no longer corresponds to any entity FrameNode.
     * <br>In this case, attempts to call certain query APIs, such as getMeasuredSize and getLayoutPosition,
     * <br>will result in a JS crash in the application.
     * <br>To check whether the current FrameNode object corresponds to an entity FrameNode, you can use getUniqueId API.
     * <br>A <em>UniqueId</em> value greater than 0 indicates that the object is associated with an entity FrameNode.
     * </p>
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dispose(): void;
    /**
     * Get the position of the node relative to window, in vp.
     *
     * @returns { Position } - Returns position of the node relative to window, in vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPositionToWindow(): Position;
    /**
     * Get the position of the node relative to its parent, in vp.
     *
     * @returns { Position } - Returns position of the node relative to its parent, in vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPositionToParent(): Position;
    /**
     * Get the size of the FrameNode after measure, with unit PX.
     *
     * @returns { Size } - Returns the size of the FrameNode after measure, with unit PX.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getMeasuredSize(): Size;
    /**
     * Get the offset to the parent of the FrameNode after layout, with unit PX.
     * The offset is the result of the parent component's layout on this node;
     * therefore, the offset attribute that takes effect after layout and the position attribute that does not
     * participate in layout do not affect this offset value.
     *
     * @returns { Position } - Returns the offset to the parent of the FrameNode after layout, with unit PX.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getLayoutPosition(): Position;
    /**
     * Get the user config border width of the FrameNode.
     *
     * @returns { Edges<LengthMetrics> } - Returns the user config border width of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getUserConfigBorderWidth(): Edges<LengthMetrics>;
    /**
     * Get the user config padding of the FrameNode.
     *
     * @returns { Edges<LengthMetrics> } - Returns the user config padding of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getUserConfigPadding(): Edges<LengthMetrics>;
    /**
     * Get the user config margin of the FrameNode.
     *
     * @returns { Edges<LengthMetrics> } - Returns the user config margin of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getUserConfigMargin(): Edges<LengthMetrics>;
    /**
     * Get the user config size of the FrameNode.
     *
     * @returns { SizeT<LengthMetrics> } - Returns the user config size of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getUserConfigSize(): SizeT<LengthMetrics>;
    /**
     * Get the id of the FrameNode.
     *
     * @returns { string } - Returns the id of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getId(): string;
    /**
     * Get the unique id of the FrameNode.
     *
     * @returns { number } - Returns the unique id of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getUniqueId(): number;
    /**
     * Get the type of the FrameNode. The type is the name of component, for example, the nodeType of Button is "Button",
     * and the nodeType of custom  component is "__Common__".
     *
     * @returns { string } - Returns the type of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getNodeType(): string;
    /**
     * Get the opacity of the FrameNode.
     * The minimum value is 0, and the maximum value is 1.
     *
     * @returns { number } - Returns the opacity of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getOpacity(): number;
    /**
     * Get if the FrameNode is visible.
     *
     * @returns { boolean } - Returns if the FrameNode is visible.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isVisible(): boolean;
    /**
     * Get if the FrameNode is clip to frame.
     * This API returns true after the dispose API is called to release the reference to the FrameNode.
     *
     * @returns { boolean } - Returns if the FrameNode is clip to frame.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isClipToFrame(): boolean;
    /**
     * Get if the FrameNode is attached to the root node tree.
     *
     * @returns { boolean } - Returns if the FrameNode is attached to the root node tree.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    isAttached(): boolean;
    /**
     * Get if the node is disposed.
     *
     * @returns { boolean } - Returns true if the node is disposed, false otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isDisposed(): boolean;
    /**
     * Get the inspector information of the FrameNode.
     * Obtains the structure information of the node, which is consistent with what is found in DevEco Studio's built-in
     * ArkUI Inspector tool.
     *
     * @returns { Object } - Returns the inspector information of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getInspectorInfo(): Object;
    /**
     * * Get the custom property of the component corresponding to this FrameNode.
     *
     * @param { string } name - the name of the custom property.
     * @returns { Object | undefined } - Returns the value of the custom property.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getCustomProperty(name: string): Object | undefined;
    /**
     * Set commonEvent response to the current FrameNode.
     * The set basic events will compete with declaratively defined events for event handling without overriding them.
     * If two event callbacks are set at the same time, the callback for the declaratively defined event is prioritized.
     * In scenarios involving LazyForEach, where nodes may be destroyed and reconstructed, you need to reset or re-attach
     * event listeners to the newly created nodes to ensure they respond to events correctly.
     *
     * @returns { UICommonEvent } - Returns a Object inside the FrameNode, which is used to set callbacks about different events.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get commonEvent(): UICommonEvent;
    /**
     * Get gestureEvent of the current FrameNode.
     * Gesture events set using the gestureEvent API will not override gestures bound using the declarative gesture API.
     * If both APIs are used to set gestures, the declarative API takes precedence.
     *
     * @returns { UIGestureEvent } - Returns a Object inside the FrameNode, which is used to set callbacks about different gesture events.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    get gestureEvent(): UIGestureEvent;
    /**
     * Get the CommonAttribute of the current FrameNode.
     * Note that only the attributes of a custom node can be modified.
     *
     * <p><strong>NOTE</strong>:
     * <br>The visual representation of the FrameNode is similar to that of a Stack container that is aligned to the top start edge.
     * <br>For details about the supported attributes, see CommonModifier.
     * </p>
     *
     * @returns { CommonAttribute } - Returns the CommonAttribute which is used to modify the common attributes of the FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get commonAttribute(): CommonAttribute;
    /**
     * Draw Method. Executed when the current FrameNode is rendering its content.
     *
     * @param { DrawContext } context - The DrawContext will be used when executed draw method.
     * The self-drawing area cannot exceed the component's own size.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDraw?(context: DrawContext): void;
    /**
     * Method to measure the FrameNode and its content to determine the measured size. Use this method to override the
     * default measure method when measuring the FrameNode.
     *
     * @param { LayoutConstraint } constraint - The layout constraint of the node, will be used when executed measure
     * method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onMeasure(constraint: LayoutConstraint): void;
    /**
     * Method to assign a position to the FrameNode and each of its children. Use this method to override the
     * default layout method.
     * It can be used to specify how the FrameNode and its child nodes are positioned and sized within the layout.
     *
     * @param { Position } position - The position of the node, will be used when executed layout method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onLayout(position: Position): void;
    /**
     * Set the size of the FrameNode after measure, with unit PX.
     * If the configured width and height are negative numbers, the value is automatically set to 0.
     *
     * @param { Size } size - The size of the FrameNode after measure.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setMeasuredSize(size: Size): void;
    /**
     * Set the position to the parent of the FrameNode after layout, with unit PX.
     *
     * @param { Position } position - The position to the parent of the FrameNode after layout.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setLayoutPosition(position: Position): void;
    /**
     * This is called to find out how big the FrameNode should be. The parent node supplies constraint information. The
     * actual measurement work of the FrameNode is performed in onMeasure or the default measure method.
     *
     * @param { LayoutConstraint } constraint - The layout constraint of the node, supplied by the parent node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    measure(constraint: LayoutConstraint): void;
    /**
     * This is called to assign position to the FrameNode and all of its descendants. The position is used to init
     * the position of the frameNode, and the actual layout work of FrameNode is performed in onLayout or the default
     * layout method.
     *
     * @param { Position } position - The position of the node, will be used when executed the layout method.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    layout(position: Position): void;
    /**
     * Mark the frame node as need layout, so that it will be relaid out in the next frame.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setNeedsLayout(): void;
    /**
     * Invalidate the RenderNode in the FrameNode, which will cause a re-render of the RenderNode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    invalidate(): void;
    /**
     * Get the position of the node relative to screen, in vp.
     *
     * @returns { Position } - Returns position of the node relative to screen, in vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPositionToScreen(): Position;
    /**
     * Get the position of the node relative to window with transform, in vp.
     *
     * @returns { Position } - Returns position of the node relative to window with transform, in vp.
     * If other drawing attributes (such as transform and translate) are set, the return value may slightly deviate
     * due to the precision of floating point numbers.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPositionToWindowWithTransform(): Position;
    /**
     * Get the position of the node relative to its parent with transform, in vp.
     * The coordinates returned are the coordinates of the upper left corner during layout after transformation.
     *
     * @returns { Position } - Returns position of the node relative to its parent with transform, in vp.
     * If other drawing attributes (such as transform and translate) are set, the return value may slightly deviate
     * due to the precision of floating point numbers.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPositionToParentWithTransform(): Position;
    /**
     * Get the position of the node relative to screen with transform, in vp.
     * The coordinates returned are the coordinates of the upper left corner during layout after transformation.
     *
     * @returns { Position } - Returns position of the node relative to screen with transform, in vp.
     * If other drawing attributes (such as transform and translate) are set, the return value may slightly deviate
     * due to the precision of floating point numbers.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPositionToScreenWithTransform(): Position;
    /**
     * Detach from parent and dispose all child recursively.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    disposeTree(): void;
    /**
     * Mount ComponentContent to FrameNode.
     * The current node must be modifiable, which means the return value of isModifiable must be true.
     * If the node is not modifiable, an exception is thrown.
     *
     * @param { ComponentContent<T> } content - Newly added ComponentContent.
     * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    addComponentContent<T>(content: ComponentContent<T>): void;
    /**
     * Set the cross-language options of the target FrameNode.
     * This API allows you to specify whether a FrameNode created in ArkTS can be accessed or modified by non-ArkTS languages.
     * If the current FrameNode is not modifiable or does not support setting cross-language access options, an exception will be thrown.
     *
     * <p><strong>NOTE</strong>:
     * <br>Currently, only Scroll type TypedFrameNode supports setting cross-language access options.
     * </p>
     *
     * @param { CrossLanguageOptions } options - The cross-language options.
     * @throws { BusinessError } 100022 - The FrameNode cannot be set whether to support cross-language common attribute setting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    setCrossLanguageOptions(options: CrossLanguageOptions): void;
    /**
     * Get the cross-language options of the target FrameNode.
     * This API allows you to check whether a FrameNode created in ArkTS can be accessed or modified by non-ArkTS languages.
     *
     * @returns { CrossLanguageOptions } - Returns the cross-language options of the target FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    getCrossLanguageOptions(): CrossLanguageOptions;
    /**
     * Recycle current FrameNode From JsFrameNode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    recycle(): void;
    /**
     * Reuse current FrameNode From JsFrameNode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    reuse(): void;
    /**
     * Gets event binding information of the target node.
     *
     * @param { EventQueryType } eventType - The interaction event type to be queried.
     * @returns { InteractionEventBindingInfo | undefined }
     *   - Returns one InteractionEventBindingInfo object indicating the event binding details if any interaction
     *     events binded on current node, returns undefined if no one binded on.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    getInteractionEventBindingInfo(eventType: EventQueryType): InteractionEventBindingInfo | undefined;
    /**
     * Adds the polymorphic style states supported by the component. To handle states efficiently, specify the
     * states of interest and the corresponding handler. When a state of interest occurs, the handler will be executed.
     *  - You can adjust the UI style based on the current state within the callback. If this API is called multiple
     * times on the same node, the last set of states and handler will take precedence.
     *  - Some component types have default system handling for certain states. For example, the <b>Button</b>
     * component has a default style effect for the PRESSED state. When custom state handling is implemented on such
     * components, the default style effect will be applied first, followed by the custom style changes, resulting in
     * a combined effect. To disable the default style effects, set <b>excludeInner</b> to <b>true</b>, if this is allowed
     * by the system implementation.
     *  - And when this API is called, the provided handler function will be executed immediately.
     *  - There is no need to explicitly register a listener for the NORMAL state. Once a non-NORMAL state is registered,
     * the system will automatically notify your application when the state changes back to NORMAL.
     *
     * @param { number } uiStates - The target UI state the node need to handle.
     *     The combination of all target states can be calculated by the OR operation,
     *     e.g. targetUIStates = UIState.PRESSED | UIState.FOCUSED.
     * @param { UIStatesChangeHandler } statesChangeHandler - The UI state chhanging handling function.
     * @param { boolean } excludeInner - The flag to forbid the inner default state style handling, default is false.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    addSupportedUIStates(uiStates: number, statesChangeHandler: UIStatesChangeHandler, excludeInner?: boolean): void;
    /**
     * Removes registered UI states. When all states registered using <b>OH_ArkUI_AddSupportedUIStates</b>
     * are removed, the registered <b>stateChangeHandler</b> will no longer be executed.
     *
     * @param { number } uiStates - The target UI state the node need to remove from.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    removeSupportedUIStates(uiStates: number): void;
    /**
     * create property animation in FrameNode.
     *
     * @param { AnimationPropertyType } property - enumeration of property that produces the animation.
     * @param { Optional<number[]> } startValue - start value of animation.
     * Undefined means that the last final value is used as the starting value of the animation,
     * and it is recommended to set undefined if the property already has a value.
     * @param { number[] } endValue - end value of animation.
     * @param { AnimateParam } param - param of animation.
     * @returns { boolean } whether the createAnimation operation is successful. For example,
     * if the array lengths of startValue and endValue do not match the data lengths required by type, creating animation fails.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    createAnimation(property: AnimationPropertyType, startValue: Optional<number[]>, endValue: number[], param: AnimateParam): boolean;
    /**
     * request to cancel all animations on specified properties. It blocks synchronously to wait for the cancellation result.
     * If the cancellation is successful, the corresponding properties on the node are restored to the cancelled value.
     *
     * @param { AnimationPropertyType[] } properties - animation property types to cancel.
     * @returns { boolean } whether the cancel operation is successful. For example,
     * if ipc fails, canceling the animation fails.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    cancelAnimations(properties: AnimationPropertyType[]): boolean;
    /**
     * get property value from node.
     *
     * @param { AnimationPropertyType } property - animation property type to get value.
     * @returns { number[] } - the property value on the node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getNodePropertyValue(property: AnimationPropertyType): number[];
}
/**
 * Used to define the FrameNode type.
 *
 * <p><strong>NOTE</strong>:
 * <br>The commonAttribute API is only effective on <em>CustomFrameNode</em>.
 * <br>For <em>TypedFrameNode</em>, the behavior of <em>commonAttribute</em> is undefined.
 * <br>For setting universal attributes, it is recommended that you use the attribute API,
 * <br>such as node.attribute.backgroundColor(Color.Pink), rather than commonAttribute.
 * </p>
 *
 * @extends FrameNode
 * @interface TypedFrameNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface TypedFrameNode<C, T> extends FrameNode {
    /**
     * Initialize FrameNode.
     *
     * @type { C }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    initialize: C;
    /**
     * Get attribute instance of FrameNode to set attributes.
     *
     * @type { T }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly attribute: T;
}
/**
 * Provides methods to implement FrameNode.
 * When typeNode is used to create nodes such as Text, Image, Select, or Toggle, if the UIContext instance
 * corresponding to the passed UIContext is destroyed, calling this API will return an invalid FrameNode.
 * This invalid node cannot be properly mounted or displayed.
 *
 * @namespace typeNode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export namespace typeNode {
    /**
     * Define the FrameNode type for Text.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>TextInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Text</em> component.
     * <br><em>TextAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Text</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<TextInterface, TextAttribute> } Text
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Text = TypedFrameNode<TextInterface, TextAttribute>;
    /**
     * Create a FrameNode of Text type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Text' } nodeType - node type.
     * @returns { Text } - Return Text type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Text'): Text;
    /**
     * Define the FrameNode type for Column.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ColumnInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Column</em> component.
     * <br><em>ColumnAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Column</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ColumnInterface, ColumnAttribute> } Column
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Column = TypedFrameNode<ColumnInterface, ColumnAttribute>;
    /**
     * Create a FrameNode of Column type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Column' } nodeType - node type.
     * @returns { Column } - Return Column type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Column'): Column;
    /**
     * Define the FrameNode type for Row.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>RowInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Row</em> component.
     * <br><em>RowAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Row</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<RowInterface, RowAttribute> } Row
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Row = TypedFrameNode<RowInterface, RowAttribute>;
    /**
     * Create a FrameNode of Row type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Row' } nodeType - node type.
     * @returns { Row } - Return Row type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Row'): Row;
    /**
     * Define the FrameNode type for Stack.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>StackInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Stack</em> component.
     * <br><em>StackAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Stack</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<StackInterface, StackAttribute> } Stack
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Stack = TypedFrameNode<StackInterface, StackAttribute>;
    /**
     * Create a FrameNode of Stack type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Stack' } nodeType - node type.
     * @returns { Stack } - Return Stack type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Stack'): Stack;
    /**
     * Define the FrameNode type for GridRow.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>GridRowInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>GridRow</em> component.
     * <br><em>GridRowAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>GridRow</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<GridRowInterface, GridRowAttribute> } GridRow
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type GridRow = TypedFrameNode<GridRowInterface, GridRowAttribute>;
    /**
     * Create a FrameNode of GridRow type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'GridRow' } nodeType - node type.
     * @returns { GridRow } - Return GridRow type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'GridRow'): GridRow;
    /**
     * Define the FrameNode type for GridCol.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>GridColInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>GridCol</em> component.
     * <br><em>GridColAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>GridCol</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<GridColInterface, GridColAttribute> } GridCol
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type GridCol = TypedFrameNode<GridColInterface, GridColAttribute>;
    /**
     * Create a FrameNode of GridCol type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'GridCol' } nodeType - node type.
     * @returns { GridCol } - Return GridCol type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'GridCol'): GridCol;
    /**
     * Define the FrameNode type for Flex.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>FlexInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Flex</em> component.
     * <br><em>FlexAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Flex</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<FlexInterface, FlexAttribute> } Flex
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Flex = TypedFrameNode<FlexInterface, FlexAttribute>;
    /**
     * Create a FrameNode of Flex type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Flex' } nodeType - node type.
     * @returns { Flex } - Return Flex type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Flex'): Flex;
    /**
     * Define the FrameNode type for Swiper.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>SwiperInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Swiper</em> component.
     * <br><em>SwiperAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Swiper</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<SwiperInterface, SwiperAttribute> } Swiper
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Swiper = TypedFrameNode<SwiperInterface, SwiperAttribute>;
    /**
     * Create a FrameNode of Swiper type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Swiper' } nodeType - node type.
     * @returns { Swiper } - Return Swiper type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Swiper'): Swiper;
    /**
     * Define the FrameNode type for Progress.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ProgressInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Progress</em> component.
     * <br><em>ProgressAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Progress</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ProgressInterface, ProgressAttribute> } Progress
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Progress = TypedFrameNode<ProgressInterface, ProgressAttribute>;
    /**
     * Create a FrameNode of Progress type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Progress' } nodeType - node type.
     * @returns { Progress } - Return Progress type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Progress'): Progress;
    /**
     * Define the FrameNode type for Scroll.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ScrollInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Scroll</em> component.
     * <br><em>ScrollAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Scroll</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ScrollInterface, ScrollAttribute> } Scroll
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Scroll = TypedFrameNode<ScrollInterface, ScrollAttribute>;
    /**
     * Create a FrameNode of Scroll type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Scroll' } nodeType - node type.
     * @returns { Scroll } - Return Scroll type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Scroll'): Scroll;
    /**
     * Get the attribute instance of FrameNode to set attributes.
     * If the node is not created using ArkTS, cross-language access must be enabled; otherwise, undefined is returned.
     * This API does not support declaratively created nodes.
     *
     * @param { FrameNode } node - the target FrameNode.
     * @param { 'Scroll' } nodeType - node type.
     * @returns { ScrollAttribute | undefined } - Return the attribute instance of FrameNode, and return undefined if it
     * does not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    function getAttribute(node: FrameNode, nodeType: 'Scroll'): ScrollAttribute | undefined;
    /**
     * Get the event instance of Scroll node.
     *
     * @param { FrameNode } node - the target FrameNode.
     * @param { 'Scroll' } nodeType - node type.
     * @returns { UIScrollEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
     * does not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    function getEvent(node: FrameNode, nodeType: 'Scroll'): UIScrollEvent | undefined;
    /**
     * Bind the controller of FrameNode.
     * If the node is not created using ArkTS, cross-language access must be enabled; otherwise, an exception is returned.
     * This API does not support declaratively created nodes.
     *
     * @param { FrameNode } node - the target FrameNode.
     * @param { Scroller } controller - the controller which is bind to the target FrameNode.
     * @param { 'Scroll' } nodeType - node type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. the type of the node is error.
     * 2. the node is null or undefined.
     * @throws { BusinessError } 100021 - The FrameNode is not modifiable.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    function bindController(node: FrameNode, controller: Scroller, nodeType: 'Scroll'): void;
    /**
     * Define the FrameNode type for RelativeContainer.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>RelativeContainerInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>RelativeContainer</em> component.
     * <br><em>RelativeContainerAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>RelativeContainer</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<RelativeContainerInterface, RelativeContainerAttribute> } RelativeContainer
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type RelativeContainer = TypedFrameNode<RelativeContainerInterface, RelativeContainerAttribute>;
    /**
     * Create a FrameNode of RelativeContainer type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'RelativeContainer' } nodeType - node type.
     * @returns { RelativeContainer } - Return RelativeContainer type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'RelativeContainer'): RelativeContainer;
    /**
     * Define the FrameNode type for Divider.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>DividerInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Divider</em> component.
     * <br><em>DividerAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Divider</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<DividerInterface, DividerAttribute> } Divider
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Divider = TypedFrameNode<DividerInterface, DividerAttribute>;
    /**
     * Create a FrameNode of Divider type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Divider' } nodeType - node type.
     * @returns { Divider } - Return Divider type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Divider'): Divider;
    /**
     * Define the FrameNode type for LoadingProgress.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>LoadingProgressInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>LoadingProgress</em> component.
     * <br><em>LoadingProgressAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>LoadingProgress</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<LoadingProgressInterface, LoadingProgressAttribute> } LoadingProgress
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type LoadingProgress = TypedFrameNode<LoadingProgressInterface, LoadingProgressAttribute>;
    /**
     * Create a FrameNode of LoadingProgress type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'LoadingProgress' } nodeType - node type.
     * @returns { LoadingProgress } - Return LoadingProgress type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'LoadingProgress'): LoadingProgress;
    /**
     * Define the FrameNode type for Search.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>SearchInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Search</em> component.
     * <br><em>SearchAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Search</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<SearchInterface, SearchAttribute> } Search
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Search = TypedFrameNode<SearchInterface, SearchAttribute>;
    /**
     * Create a FrameNode of Search type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Search' } nodeType - node type.
     * @returns { Search } - Return Search type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Search'): Search;
    /**
     * Define the FrameNode type for Blank.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>BlankInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Blank</em> component.
     * <br><em>BlankAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Blank</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<BlankInterface, BlankAttribute> } Blank
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Blank = TypedFrameNode<BlankInterface, BlankAttribute>;
    /**
     * Create a FrameNode of Blank type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Blank' } nodeType - node type.
     * @returns { Blank } - Return Blank type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Blank'): Blank;
    /**
     * Define the FrameNode type for Image.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ImageInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Image</em> component.
     * <br><em>ImageAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Image</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ImageInterface, ImageAttribute> } Image
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Image = TypedFrameNode<ImageInterface, ImageAttribute>;
    /**
     * Create a FrameNode of Image type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Image' } nodeType - node type.
     * @returns { Image } - Return Image type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Image'): Image;
    /**
     * Define the FrameNode type for List.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ListInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>List</em> component.
     * <br><em>ListAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>List</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ListInterface, ListAttribute> } List
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type List = TypedFrameNode<ListInterface, ListAttribute>;
    /**
     * Create a FrameNode of List type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'List' } nodeType - node type.
     * @returns { List } - Return List type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'List'): List;
    /**
     * Define the FrameNode type for ListItem.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ListItemInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>ListItem</em> component.
     * <br><em>ListItemAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>ListItem</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ListItemInterface, ListItemAttribute> } ListItem
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type ListItem = TypedFrameNode<ListItemInterface, ListItemAttribute>;
    /**
     * Get the event instance of Scroll node.
     *
     * @param { FrameNode } node - the target FrameNode.
     * @param { 'List' } nodeType - node type.
     * @returns { UIListEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
     * does not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    function getEvent(node: FrameNode, nodeType: 'List'): UIListEvent | undefined;
    /**
     * Create a FrameNode of ListItem type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'ListItem' } nodeType - node type.
     * @returns { ListItem } - Return ListItem type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'ListItem'): ListItem;
    /**
     * Define the FrameNode type for TextInput.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>TextInputInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>TextInput</em> component.
     * <br><em>TextInputAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>TextInput</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<TextInputInterface, TextInputAttribute> } TextInput
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type TextInput = TypedFrameNode<TextInputInterface, TextInputAttribute>;
    /**
     * Create a FrameNode of TextInput type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'TextInput' } nodeType - node type.
     * @returns { TextInput } - Return TextInput type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'TextInput'): TextInput;
    /**
     * Define the FrameNode type for Button.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ButtonInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Button</em> component.
     * <br><em>ButtonAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Button</em> component.
     * <br>If a value is specified for the label parameter, a Button component is created in label mode.
     * This component cannot contain child components, and any attempt to set child components will result in an exception.
     * The mode in which the Button component is created cannot be dynamically modified in subsequent initialize calls.
     * As such, to include child components, do not set the label parameter during the first initialize call.
     * When created in child component mode, a Button component can contain a single child component.
     * Any attempt to set multiple child components will result in an exception.
     * </p>
     *
     * @typedef { TypedFrameNode<ButtonInterface, ButtonAttribute> } Button
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type Button = TypedFrameNode<ButtonInterface, ButtonAttribute>;
    /**
     * Create a FrameNode of Button type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Button' } nodeType - node type.
     * @returns { Button } - Return Button type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'Button'): Button;
    /**
     * Define the FrameNode type for ListItemGroup.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ListItemGroupInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>ListItemGroup</em> component.
     * <br><em>ListItemGroupAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>ListItemGroup</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ListItemGroupInterface, ListItemGroupAttribute> } ListItemGroup
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type ListItemGroup = TypedFrameNode<ListItemGroupInterface, ListItemGroupAttribute>;
    /**
     * Create a FrameNode of ListItemGroup type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'ListItemGroup' } nodeType - node type.
     * @returns { ListItemGroup } - Return ListItemGroup type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'ListItemGroup'): ListItemGroup;
    /**
     * Define the FrameNode type for WaterFlow.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>WaterFlowInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>WaterFlow</em> component.
     * <br><em>WaterFlowAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>WaterFlow</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<WaterFlowInterface, WaterFlowAttribute> } WaterFlow
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type WaterFlow = TypedFrameNode<WaterFlowInterface, WaterFlowAttribute>;
    /**
     * Create a FrameNode of WaterFlow type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'WaterFlow' } nodeType - node type.
     * @returns { WaterFlow } - Return WaterFlow type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'WaterFlow'): WaterFlow;
    /**
     * Get the event instance of Scroll node.
     *
     * @param { FrameNode } node - the target FrameNode.
     * @param { 'WaterFlow' } nodeType - node type.
     * @returns { UIWaterFlowEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
     * does not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    function getEvent(node: FrameNode, nodeType: 'WaterFlow'): UIWaterFlowEvent | undefined;
    /**
     * Define the FrameNode type for FlowItem.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>FlowItemInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>FlowItem</em> component.
     * <br><em>FlowItemAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>FlowItem</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<FlowItemInterface, FlowItemAttribute> } FlowItem
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type FlowItem = TypedFrameNode<FlowItemInterface, FlowItemAttribute>;
    /**
     * Create a FrameNode of FlowItem type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'FlowItem' } nodeType - node type.
     * @returns { FlowItem } - Return FlowItem type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'FlowItem'): FlowItem;
    /**
     * Define the FrameNode type for XComponent.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>XComponentInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>XComponent</em> component.
     * <br><em>XComponentAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>XComponent</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<XComponentInterface, XComponentAttribute> } XComponent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type XComponent = TypedFrameNode<XComponentInterface, XComponentAttribute>;
    /**
     * Create a FrameNode of XComponent type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'XComponent' } nodeType - node type.
     * @returns { XComponent } - Return XComponent type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'XComponent'): XComponent;
    /**
     * Create a FrameNode of XComponent type with options.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'XComponent' } nodeType - node type.
     * @param { XComponentOptions } options - initialization parameters.
     * @returns { XComponent } - Return XComponent type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    function createNode(context: UIContext, nodeType: 'XComponent', options: XComponentOptions): XComponent;
    /**
     * Create a FrameNode of XComponent type with options for native developing.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'XComponent' } nodeType - node type.
     * @param { NativeXComponentParameters } parameters - initialization parameters.
     * @returns { XComponent } - Return XComponent type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    function createNode(context: UIContext, nodeType: 'XComponent', parameters: NativeXComponentParameters): XComponent;
    /**
     * Define the FrameNode type for Checkbox.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>CheckboxInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Checkbox</em> component.
     * <br><em>CheckboxAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Checkbox</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<CheckboxInterface, CheckboxAttribute> } Checkbox
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    type Checkbox = TypedFrameNode<CheckboxInterface, CheckboxAttribute>;
    /**
     * Create a FrameNode of Checkbox type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Checkbox' } nodeType - node type.
     * @returns { Checkbox } - Return Checkbox type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    function createNode(context: UIContext, nodeType: 'Checkbox'): Checkbox;
    /**
     * Define the FrameNode type for CheckboxGroup.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>CheckboxGroupInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>CheckboxGroup</em> component.
     * <br><em>CheckboxGroupAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>CheckboxGroup</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<CheckboxGroupInterface, CheckboxGroupAttribute> } CheckboxGroup
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    type CheckboxGroup = TypedFrameNode<CheckboxGroupInterface, CheckboxGroupAttribute>;
    /**
     * Create a FrameNode of CheckboxGroup type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'CheckboxGroup' } nodeType - node type.
     * @returns { CheckboxGroup } - Return CheckboxGroup type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    function createNode(context: UIContext, nodeType: 'CheckboxGroup'): CheckboxGroup;
    /**
     * Define the FrameNode type for Radio.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>RadioInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Radio</em> component.
     * <br><em>RadioAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Radio</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<RadioInterface, RadioAttribute> } Radio
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    type Radio = TypedFrameNode<RadioInterface, RadioAttribute>;
    /**
     * Create a FrameNode of Radio type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Radio' } nodeType - node type.
     * @returns { Radio } - Return Radio type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    function createNode(context: UIContext, nodeType: 'Radio'): Radio;
    /**
     * Define the FrameNode type for Rating.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>RatingInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Rating</em> component.
     * <br><em>RatingAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Rating</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<RatingInterface, RatingAttribute> } Rating
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    type Rating = TypedFrameNode<RatingInterface, RatingAttribute>;
    /**
     * Create a FrameNode of Rating type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Rating' } nodeType - node type.
     * @returns { Rating } - Return Rating type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    function createNode(context: UIContext, nodeType: 'Rating'): Rating;
    /**
     * Define the FrameNode type for Select.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>SelectInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Select</em> component.
     * <br><em>SelectAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Select</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<SelectInterface, SelectAttribute> } Select
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    type Select = TypedFrameNode<SelectInterface, SelectAttribute>;
    /**
     * Create a FrameNode of Select type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Select' } nodeType - node type.
     * @returns { Select } - Return Select type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    function createNode(context: UIContext, nodeType: 'Select'): Select;
    /**
     * Define the FrameNode type for Slider.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>SliderInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Slider</em> component.
     * <br><em>SliderAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Slider</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<SliderInterface, SliderAttribute> } Slider
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    type Slider = TypedFrameNode<SliderInterface, SliderAttribute>;
    /**
     * Create a FrameNode of Slider type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Slider' } nodeType - node type.
     * @returns { Slider } - Return Slider type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    function createNode(context: UIContext, nodeType: 'Slider'): Slider;
    /**
     * Define the FrameNode type for Toggle.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>ToggleInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Toggle</em> component.
     * <br><em>ToggleAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Toggle</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<ToggleInterface, ToggleAttribute> } Toggle
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    type Toggle = TypedFrameNode<ToggleInterface, ToggleAttribute>;
    /**
     * Create a FrameNode of Toggle type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Toggle' } nodeType - node type.
     * @param { ToggleOptions } options - ToggleOptions.
     * @returns { Toggle } - Return Toggle type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    function createNode(context: UIContext, nodeType: 'Toggle', options?: ToggleOptions): Toggle;
    /**
     * Define the FrameNode type for Marquee.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>MarqueeInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Marquee</em> component.
     * <br><em>MarqueeAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Marquee</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<MarqueeInterface, MarqueeAttribute> } Marquee
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type Marquee = TypedFrameNode<MarqueeInterface, MarqueeAttribute>;
    /**
     * Create a FrameNode of Marquee type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Marquee' } nodeType - node type.
     * @returns { Marquee } - Return Marquee type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'Marquee'): Marquee;
    /**
     * Define the FrameNode type for TextArea.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>TextAreaInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>TextArea</em> component.
     * <br><em>TextAreaAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>TextArea</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<TextAreaInterface, TextAreaAttribute> } TextArea
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type TextArea = TypedFrameNode<TextAreaInterface, TextAreaAttribute>;
    /**
     * Create a FrameNode of TextArea type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'TextArea' } nodeType - node type.
     * @returns { TextArea } - Return TextArea type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'TextArea'): TextArea;
    /**
     * Define the FrameNode type for SymbolGlyph.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>SymbolGlyphInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>SymbolGlyph</em> component.
     * <br><em>SymbolGlyphAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>SymbolGlyph</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<SymbolGlyphInterface, SymbolGlyphAttribute> } SymbolGlyph
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type SymbolGlyph = TypedFrameNode<SymbolGlyphInterface, SymbolGlyphAttribute>;
    /**
     * Create a FrameNode of SymbolGlyph type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'SymbolGlyph' } nodeType - node type.
     * @returns { SymbolGlyph } - Return SymbolGlyph type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'SymbolGlyph'): SymbolGlyph;
    /**
     * Define the FrameNode type for QRCode.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>QRCodeInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>QRCode</em> component.
     * <br><em>QRCodeAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>QRCode</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<QRCodeInterface, QRCodeAttribute> } QRCode
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type QRCode = TypedFrameNode<QRCodeInterface, QRCodeAttribute>;
    /**
     * Create a FrameNode of QRCode type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'QRCode' } nodeType - node type.
     * @returns { QRCode } - Return QRCode type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'QRCode'): QRCode;
    /**
     * Define the FrameNode type for Badge.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>BadgeInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Badge</em> component.
     * <br><em>BadgeAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Badge</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<BadgeInterface, BadgeAttribute> } Badge
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type Badge = TypedFrameNode<BadgeInterface, BadgeAttribute>;
    /**
     * Create a FrameNode of Badge type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Badge' } nodeType - node type.
     * @returns { Badge } - Return Badge type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'Badge'): Badge;
    /**
     * Define the FrameNode type for TextClock.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>TextClockInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>TextClock</em> component.
     * <br><em>TextClockAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>TextClock</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<TextClockInterface, TextClockAttribute> } TextClock
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type TextClock = TypedFrameNode<TextClockInterface, TextClockAttribute>;
    /**
     * Create a FrameNode of TextClock type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'TextClock' } nodeType - node type.
     * @returns { TextClock } - Return TextClock type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'TextClock'): TextClock;
    /**
     * Define the FrameNode type for TextTimer.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>TextTimerInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>TextTimer</em> component.
     * <br><em>TextTimerAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>TextTimer</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<TextTimerInterface, TextTimerAttribute> } TextTimer
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type TextTimer = TypedFrameNode<TextTimerInterface, TextTimerAttribute>;
    /**
     * Create a FrameNode of TextTimer type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'TextTimer' } nodeType - node type.
     * @returns { TextTimer } - Return TextTimer type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'TextTimer'): TextTimer;
    /**
     * Define the FrameNode type for Grid.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>GridInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>Grid</em> component.
     * <br><em>GridAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>Grid</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<GridInterface, GridAttribute> } Grid
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type Grid = TypedFrameNode<GridInterface, GridAttribute>;
    /**
     * Create a FrameNode of Grid type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'Grid' } nodeType - node type.
     * @returns { Grid } - Return Grid type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'Grid'): Grid;
    /**
     * Get the event instance of Scroll node.
     *
     * @param { FrameNode } node - the target FrameNode.
     * @param { 'Grid' } nodeType - node type.
     * @returns { UIGridEvent | undefined } - Return the event instance of FrameNode, and return undefined if it
     * does not exist.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    function getEvent(node: FrameNode, nodeType: 'Grid'): UIGridEvent | undefined;
    /**
     * Define the FrameNode type for GridItem.
     *
     * <p><strong>NOTE</strong>:
     * <br><em>GridItemInterface</em> is used as the input parameter of the initialize API of TypedFrameNode.
     * <br>The input parameter is of the constructor type for the <em>GridItem</em> component.
     * <br><em>GridItemAttribute</em> is used as the return value of the attribute API of <em>TypedFrameNode</em>.
     * <br>It returns the attribute setting object of the <em>GridItem</em> component.
     * </p>
     *
     * @typedef { TypedFrameNode<GridItemInterface, GridItemAttribute> } GridItem
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    type GridItem = TypedFrameNode<GridItemInterface, GridItemAttribute>;
    /**
     * Create a FrameNode of GridItem type.
     *
     * @param { UIContext } context - uiContext used to create the FrameNode.
     * @param { 'GridItem' } nodeType - node type.
     * @returns { GridItem } - Return GridItem type FrameNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    function createNode(context: UIContext, nodeType: 'GridItem'): GridItem;
}
/**
 * Used for lazy loading of typeNode.
 *
 * <p><strong>NOTE</strong>:
 * The input parameter cannot be a negative number; otherwise, no processing is performed.
 * </p>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class NodeAdapter {
    /**
     * Constructor.
     * A constructor used to create a NodeAdapter object.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor();
    /**
     * Dispose the NodeAdapter immediately.
     * Bindings, if any, of the object will be cleared before the object is disposed of.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dispose(): void;
    /**
     * Set the total number of node count.
     *
     * @param { number } count - The total number of node count.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    set totalNodeCount(count: number);
    /**
     * Get the total number of node count.
     *
     * @returns { number } - Return the total number of node count.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get totalNodeCount(): number;
    /**
     * Define the operation of reloading all data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reloadAllItems(): void;
    /**
     * Define the data reload operation.Reload a specified amount of data starting from the index value.
     *
     * @param { number } start - Start loading index values for data.
     * @param { number } count - Load the number of data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reloadItem(start: number, count: number): void;
    /**
     * Define data deletion operations.Delete a specified amount of data starting from the index value.
     *
     * @param { number } start - Start deleting index values for data.
     * @param { number } count - Delete the number of data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeItem(start: number, count: number): void;
    /**
     * Define data insertion operations.Insert a specified amount of data starting from the index value.
     *
     * @param { number } start - Start Insert index values for data.
     * @param { number } count - Insert the number of data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    insertItem(start: number, count: number): void;
    /**
     * Define data movement operations. Move data from the starting index to the ending index.
     *
     * @param { number } from - Starting index value.
     * @param { number } to - End index value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    moveItem(from: number, to: number): void;
    /**
     * Obtain all data results.
     *
     * @returns { Array<FrameNode> } - Return all valid FrameNode collections.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getAllAvailableItems(): Array<FrameNode>;
    /**
     * This callback will be triggered when a FrameNode is bound.
     *
     * @param { FrameNode } target - The bound FrameNode node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onAttachToNode?(target: FrameNode): void;
    /**
     * This callback will be triggered when the binding is released.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDetachFromNode?(): void;
    /**
     * Call this callback when loading for the first time or when a new node slides in.Used to generate custom IDs, developers need to ensure the uniqueness of the IDs themselves.
     *
     * @param { number } index - Load the index value of the data.
     * @returns { number } - Returning the developer's custom ID requires the developer to ensure its uniqueness.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onGetChildId?(index: number): number;
    /**
     * Call this callback when loading for the first time or when a new node slides in.
     *
     * @param { number } index - Load the index value of the data.
     * @returns { FrameNode } - Returns the FrameNode node that loads the node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onCreateChild?(index: number): FrameNode;
    /**
     * Called when the child node is about to be destroyed.
     *
     * @param { number } id - The child node ID that is about to be destroyed.
     * @param { FrameNode } node - The FrameNode node that is about to be destroyed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDisposeChild?(id: number, node: FrameNode): void;
    /**
     * Call this callback when reloading or reusing.
     *
     * @param { number } id - The index value of the reloaded data.
     * @param { FrameNode } node - Reused FrameNode nodes.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onUpdateChild?(id: number, node: FrameNode): void;
    /**
     * Add a NodeAdapter to bind to the node.A node can only be bound to one NodeAdapter. Binding failure returns false.
     *
     * @param { NodeAdapter } adapter - Define lazy loading classes.
     * @param { FrameNode } node - The bound FrameNode node.
     * @returns { boolean } Return the binding result.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static attachNodeAdapter(adapter: NodeAdapter, node: FrameNode): boolean;
    /**
     * Remove the bound NodeAdapter from the node.A node can only be bound to one NodeAdapter.
     *
     * @param { FrameNode } node - Unbind the FrameNode node.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static detachNodeAdapter(node: FrameNode): void;
    /**
     * Get if the node is disposed.
     *
     * @returns { boolean } - Returns true if the node is disposed, false otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    isDisposed(): boolean;
}
