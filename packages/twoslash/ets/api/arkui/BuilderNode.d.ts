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
import { FrameNode } from './FrameNode';
import { Size } from './Graphics';
/**
 * Render type of the node using for indicating that
 * if the node will be shown on the display or rendered to a texture
 *
 * @enum { number } Render type
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Render type of the node using for indicating that
 * if the node will be shown on the display or rendered to a texture
 *
 * <p><strong>NOTE</strong>:
 * <br>Currently, the <em>RENDER_TYPE_TEXTURE</em> type takes effect only for the XComponentNode and the BuilderNode
 * <br>holding a component tree whose root node is a custom component.
 * <br>In the case of BuilderNode, the following custom components that function as the root node support texture export:
 * <br>Badge, Blank, Button, CanvasGradient, CanvasPattern, CanvasRenderingContext2D, Canvas, CheckboxGroup, Checkbox,
 * <br>Circle, ColumnSplit, Column, ContainerSpan, Counter, DataPanel, Divider, Ellipse, Flex, Gauge, Hyperlink,
 * <br>ImageBitmap, ImageData, Image, Line, LoadingProgress, Marquee, Matrix2D, OffscreenCanvasRenderingContext2D,
 * <br>OffscreenCanvas, Path2D, Path, PatternLock, Polygon, Polyline, Progress, QRCode, Radio, Rating, Rect,
 * <br>RelativeContainer, RowSplit, Row, Shape, Slider, Span, Stack, TextArea, TextClock, TextInput, TextTimer, Text,
 * <br>Toggle, Video (without support for full-screen playback), Web, XComponent
 * <br>The following components support texture export since API version 12: DatePicker, ForEach, Grid, IfElse,
 * <br>LazyForEach, List, Scroll, Swiper, TimePicker, @Component decorated custom components, NodeContainer,
 * <br>and FrameNode and RenderNode mounted to a NodeContainer.
 * </p>

For details, see Rendering and Drawing Video and Button Components at the Same Layer.
 *
 * @enum { number } Render type
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum NodeRenderType {
    /**
     * Display type.The node will be shown on the display.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Display type.The node will be shown on the display.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    RENDER_TYPE_DISPLAY = 0,
    /**
     * Exporting texture type.The node will be render to a  texture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Exporting texture type.The node will be render to a  texture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    RENDER_TYPE_TEXTURE = 1
}
/**
 * RenderOptions info.
 *
 * @interface RenderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * RenderOptions info.
 *
 * @interface RenderOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface RenderOptions {
    /**
     * The ideal size of the node.
     * @type { ?Size } selfIdealSize - The ideal size of the node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The ideal size of the node.
     * @type { ?Size } selfIdealSize - The ideal size of the node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    selfIdealSize?: Size;
    /**
     * Render type of the node.
     * @type { ?NodeRenderType } type - Render type of the node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Render type of the node.
     * @type { ?NodeRenderType } type - Render type of the node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    type?: NodeRenderType;
    /**
     * The surfaceId of a texture consumer
     * @type { ?string } surfaceId - surfaceId of a consumer who can receive the texture of the Node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * The surfaceId of a texture consumer
     * Generally, the texture receiver is an OH_NativeImage instance.
     * @type { ?string } surfaceId - surfaceId of a consumer who can receive the texture of the Node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    surfaceId?: string;
}
/**
 * BuildOptions info.
 *
 * @interface BuildOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface BuildOptions {
    /**
     * Build type of the Builder.
     * @type { ?boolean } nestingBuilderSupported - Build type of the Builder.
     * Indicates whether support the type that WrappedBuilder contains builder used different params.
     * The value false means that the input arguments for @Builder are consistent, and true means the opposite.
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    nestingBuilderSupported?: boolean;
    /**
     *The LocalStorage of the Builder.
     * @type { ?LocalStorage } localStorage - The LocalStorage of the Builder.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    localStorage?: LocalStorage;
}
/**
 * Defines the event type used for posting.
 *
 * @typedef { TouchEvent | MouseEvent | AxisEvent } InputEventType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare type InputEventType = TouchEvent | MouseEvent | AxisEvent;
/**
 * Defines BuilderNode.
 * Implements a BuilderNode, which can create a component tree through the stateless UI method @Builder and hold the
 * root node of the component tree. A BuilderNode cannot be defined as a state variable. The FrameNode held in the
 * BuilderNode is only used to mount the BuilderNode to other FrameNodes as a child node. Undefined behavior may occur
 * if you set attributes or perform operations on subnodes of the FrameNode held by the BuilderNode. Therefore, after
 * you have obtained a RenderNode through the getFrameNode method of the BuilderNode and the getRenderNode method of the
 * FrameNode, avoid setting the attributes or operating the subnodes through APIs of the RenderNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines BuilderNode.
 * Implements a BuilderNode, which can create a component tree through the stateless UI method @Builder and hold the
 * root node of the component tree. A BuilderNode cannot be defined as a state variable. The FrameNode held in the
 * BuilderNode is only used to mount the BuilderNode to other FrameNodes as a child node. Undefined behavior may occur
 * if you set attributes or perform operations on subnodes of the FrameNode held by the BuilderNode. Therefore, after
 * you have obtained a RenderNode through the getFrameNode method of the BuilderNode and the getRenderNode method of the
 * FrameNode, avoid setting the attributes or operating the subnodes through APIs of the RenderNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export class BuilderNode<Args extends Object[]> {
    /**
     * Constructor.
     * When the content generated by the BuilderNode is embedded in another RenderNode for display, that is, the
     * RenderNode corresponding to the BuilderNode is mounted to another RenderNode for display, selfIdealSize in
     * RenderOptions must be explicitly specified. If selfIdealSize is not set, the node in the builder follows the
     * default parent component layout constraint [0, 0], which means that the size of the root node of the subtree in
     * BuilderNode is [0, 0].
     *
     * <p><strong>Note:</strong>
     * <br>The input parameter for uiContext must be a valid value, that is, the UI context must be correct. If an invalid
     * <br>value is passed in or if no value is specified, creation will fail.
     * </p>
     *
     * @param { UIContext } uiContext - uiContext used to create the BuilderNode
     * @param { RenderOptions } options - Render options of the Builder Node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Constructor.
     * When the content generated by the BuilderNode is embedded in another RenderNode for display, that is, the
     * RenderNode corresponding to the BuilderNode is mounted to another RenderNode for display, selfIdealSize in
     * RenderOptions must be explicitly specified. If selfIdealSize is not set, the node in the builder follows the
     * default parent component layout constraint [0, 0], which means that the size of the root node of the subtree in
     * BuilderNode is [0, 0].
     *
     * <p><strong>Note:</strong>
     * <br>The input parameter for uiContext must be a valid value, that is, the UI context must be correct. If an invalid
     * <br>value is passed in or if no value is specified, creation will fail.
     * </p>
     *
     * @param { UIContext } uiContext - uiContext used to create the BuilderNode
     * @param { RenderOptions } options - Render options of the Builder Node
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(uiContext: UIContext, options?: RenderOptions);
    /**
     * Build the BuilderNode with the builder.
     * Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI
     * method @Builder has at most one root node. Custom components are allowed. Yet, the custom components cannot use
     * decorators, such as @Reusable, @Link, @Provide, and @Consume, for state synchronization with the page to which the
     * BuilderNode is mounted. Since API version 12, custom components can receive LocalStorage instances. You can use
     * LocalStorage related decorators such as @LocalStorageProp and @LocalStorageLink by passing LocalStorage instances.
     *
     * <p><strong>Note:</strong>
     * <br>When nesting @Builder, ensure that the input objects for the inner and outer @Builder methods are consistent.
     * <br>The outermost @Builder supports only one input argument.
     * <br>To operate objects in a BuilderNode, ensure that the reference to the BuilderNode is not garbage collected.
     * <br>Once a BuilderNode object is collected by the virtual machine, its FrameNode and RenderNode objects will also
     * <br>be dereferenced from the backend nodes. This means that any FrameNode objects obtained from a BuilderNode will
     * <br>no longer correspond to any actual node if the BuilderNode is garbage collected.
     * </p>
     *
     * @param { WrappedBuilder<Args> } builder - Defined the builder will be called to build the node.
     * @param { Object } arg - Defined the args will be used in the builder.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Build the BuilderNode with the builder.
     * Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI
     * method @Builder has at most one root node. Custom components are allowed. Yet, the custom components cannot use
     * decorators, such as @Reusable, @Link, @Provide, and @Consume, for state synchronization with the page to which the
     * BuilderNode is mounted. Since API version 12, custom components can receive LocalStorage instances. You can use
     * LocalStorage related decorators such as @LocalStorageProp and @LocalStorageLink by passing LocalStorage instances.
     *
     * <p><strong>Note:</strong>
     * <br>When nesting @Builder, ensure that the input objects for the inner and outer @Builder methods are consistent.
     * <br>The outermost @Builder supports only one input argument.
     * <br>To operate objects in a BuilderNode, ensure that the reference to the BuilderNode is not garbage collected.
     * <br>Once a BuilderNode object is collected by the virtual machine, its FrameNode and RenderNode objects will also
     * <br>be dereferenced from the backend nodes. This means that any FrameNode objects obtained from a BuilderNode will
     * <br>no longer correspond to any actual node if the BuilderNode is garbage collected.
     * </p>
     *
     * @param { WrappedBuilder<Args> } builder - Defined the builder will be called to build the node.
     * @param { Object } arg - Defined the args will be used in the builder.
     * Only one input argument is supported, and the type of the input argument must be consistent with the type defined
     * by @Builder.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    build(builder: WrappedBuilder<Args>, arg?: Object): void;
    /**
     * Build the BuilderNode with the builder.Support the type that WrappedBuilder contains builder used different params.
     * Creates a component tree based on the passed object and holds the root node of the component tree. The stateless UI
     * method @Builder has at most one root node. Custom components are allowed. Yet, the custom components cannot use
     * decorators, such as @Reusable, @Link, @Provide, and @Consume, for state synchronization with the current page.
     * Since API version 12, custom components can receive LocalStorage instances. You can use LocalStorage related
     * decorators such as @LocalStorageProp and @LocalStorageLink by passing LocalStorage instances.
     *
     * <p><strong>Note:</strong>
     * <br>For details about the creation and update using @Builder, see @Builder.
     * <br>The outermost @Builder supports only one input argument.
     * </p>
     *
     * @param { WrappedBuilder<Args> } builder - Defined the builder will be called to build the node.
     * @param { Object } arg - Defined the args will be used in the builder.
     * Only one input argument is supported, and the type of the input argument must be consistent with the type defined
     * by @Builder.
     * @param { BuildOptions } options - Defined the options will be used when build.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    build(builder: WrappedBuilder<Args>, arg: Object, options: BuildOptions): void;
    /**
     * Update the BuilderNode based on the provided parameters.
     * Updates this BuilderNode based on the provided parameter, which is of the same type as the input parameter passed
     * to the build API.
     * To call this API on a custom component, the variable used in the component must be defined as the @Prop type.
     *
     * @param { Object } arg - Parameters used to update the BuilderNode, which must match the types required by the builder bound to the BuilderNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Update the BuilderNode based on the provided parameters.
     * Updates this BuilderNode based on the provided parameter, which is of the same type as the input parameter passed
     * to the build API.
     * To call this API on a custom component, the variable used in the component must be defined as the @Prop type.
     *
     * @param { Object } arg - Parameters used to update the BuilderNode, which must match the types required by the builder bound to the BuilderNode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    update(arg: Object): void;
    /**
     * Get the FrameNode in BuilderNode.
     * The FrameNode is generated only after the BuilderNode executes the build operation.
     *
     * @returns { FrameNode | null } - Returns a FrameNode inside the BuilderNode, or null if not contained.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the FrameNode in BuilderNode.
     * The FrameNode is generated only after the BuilderNode executes the build operation.
     *
     * @returns { FrameNode | null } - Returns a FrameNode inside the BuilderNode, or null if not contained.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getFrameNode(): FrameNode | null;
    /**
     * Dispatch touchEvent to targetNode.
     * postTouchEvent dispatches the event from a middle node in the component tree downwards. To ensure the event is
     * dispatched correctly, it needs to be transformed into the coordinate system of the parent component, as shown in
     * the figure below.
     * OffsetA indicates the offset of the BuildNode relative to the parent component. You can obtain this offset by
     * calling getPositionToParent in the FrameNode. OffsetB indicates the offset of the touch point relative to the
     * BuildNode. You can obtain this offset from the TouchEvent object. OffsetC is the sum of OffsetA and OffsetB. It
     * represents the final offset that you need to pass to postTouchEvent.
     *
     * <p><strong>Note:</strong>
     * <br>The coordinates you pass in need to be converted to pixel values (px). If the BuilderNode has any affine
     * <br>transformations applied to it, they must be taken into account and combined with the touch event coordinates.
     * <br>In Webview, coordinate system transformations are already handled internally, so you can directly dispatch the
     * <br>touch event without additional adjustments.
     * <br>The postTouchEvent API can be called only once for the same timestamp.
     * <br>UIExtensionComponent is not supported.
     * </p>
     *
     * @param { TouchEvent } event - The touchEvent which will be sent to the targetNode.
     * @returns { boolean } - Returns true if the TouchEvent has been successfully posted to the targetNode, false otherwise.
     * If the event does not hit the expected component, ensure the following:
     * 1. The coordinate system has been correctly transformed
     * 2. The component is in an interactive state.
     * 3. The event has been bound to the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Dispatch touchEvent to targetNode.
     * postTouchEvent dispatches the event from a middle node in the component tree downwards. To ensure the event is
     * dispatched correctly, it needs to be transformed into the coordinate system of the parent component, as shown in
     * the figure below.
     * OffsetA indicates the offset of the BuildNode relative to the parent component. You can obtain this offset by
     * calling getPositionToParent in the FrameNode. OffsetB indicates the offset of the touch point relative to the
     * BuildNode. You can obtain this offset from the TouchEvent object. OffsetC is the sum of OffsetA and OffsetB. It
     * represents the final offset that you need to pass to postTouchEvent.
     *
     * <p><strong>Note:</strong>
     * <br>The coordinates you pass in need to be converted to pixel values (px). If the BuilderNode has any affine
     * <br>transformations applied to it, they must be taken into account and combined with the touch event coordinates.
     * <br>In Webview, coordinate system transformations are already handled internally, so you can directly dispatch the
     * <br>touch event without additional adjustments.
     * <br>The postTouchEvent API can be called only once for the same timestamp.
     * <br>UIExtensionComponent is not supported.
     * </p>
     *
     * @param { TouchEvent } event - The touchEvent which will be sent to the targetNode.
     * @returns { boolean } - Returns true if the TouchEvent has been successfully posted to the targetNode, false otherwise.
     * If the event does not hit the expected component, ensure the following:
     * 1. The coordinate system has been correctly transformed
     * 2. The component is in an interactive state.
     * 3. The event has been bound to the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    postTouchEvent(event: TouchEvent): boolean;
    /**
     * Dispose the BuilderNode immediately.
     * Calling dispose on a BuilderNode object breaks its reference to the backend entity node, and also simultaneously
     * severs the references of its contained FrameNode and RenderNode to their respective entity nodes.
     *
     * <p><strong>Note:</strong>
     * <br>Calling dispose on a BuilderNode object breaks its reference to the backend entity node, and also
     * <br>simultaneously severs the references of its contained FrameNode and RenderNode to their respective entity nodes.
     * <br>If the frontend object BuilderNode cannot be released, memory leaks may occur. To avoid this, be sure to call
     * <br>dispose on the BuilderNode when you no longer need it. This reduces the complexity of reference relationships
     * <br>and lowers the risk of memory leaks.
     * </p>
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dispose(): void;
    /**
     * Reuse the BuilderNode based on the provided parameters.
     *
     * @param { Object } [param] - Parameters for reusing BuilderNode.
     * It is of the same type as the parameter passed to the build API.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reuse(param?: Object): void;
    /**
     * Recycle the BuilderNode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    recycle(): void;
    /**
     * Notify BuilderNode to update the configuration to trigger a reload of the BuilderNode.
     *
     * <p><strong>Note:</strong>
     * <br>The updateConfiguration API is used to instruct an object to update, with the system environment used for the
     * <br>update being determined by the changes in the application's current system environment.
     * </p>
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    updateConfiguration(): void;
    /**
     * Dispatch mouse event to targetNode.
     *
     * @param { InputEventType  } event - The event which will be sent to the targetNode.
     * @returns { boolean } - Returns true if the eventhas been successfully posted to the targetNode,
     *    false otherwise.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    postInputEvent(event: InputEventType): boolean;
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
