/*
 * Copyright (c) 2024-2024 Huawei Device Co., Ltd.
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
 * @file Defines 3D scene related interfaces
 * @kit ArkGraphics3D
 */
import { Shader, MaterialType, Material, Animation, Environment, Image, MeshResource, Sampler, SceneResource } from './SceneResources';
import { Camera, LightType, Light, Node, NodeType, Geometry } from './SceneNodes';
import { Position3, GeometryDefinition, Vec2, Vec3, Vec4 } from './SceneTypes';
/**
 * The scene resource parameters type.
 *
 * @typedef SceneResourceParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface SceneResourceParameters {
    /**
     * The name of the scene resource parameters.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    name: string;
    /**
     * The resource uri of the scene resource parameters.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    uri?: ResourceStr;
}
/**
 * The scene node parameters type.
 *
 * @typedef SceneNodeParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface SceneNodeParameters {
    /**
     * The name of the scene node parameters.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    name: string;
    /**
     * The path of the scene node parameters.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    path?: string;
}
/**
 * The result of a ray cast hit.
 *
 * @typedef RaycastResult
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface RaycastResult {
    /**
     * The node that was hit.
     *
     * @type { Node }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    node: Node;
    /**
     * The distance to the center of the axis-aligned bounding box.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    centerDistance: number;
    /**
     * The position of the hit in world coordinates.
     *
     * @type { Position3 }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    hitPosition: Position3;
}
/**
 * How a raycast should be performed.
 *
 * @interface RaycastParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface RaycastParameters {
    /**
     * If defined, search only the nodes in the hierarchy under this node.
     *
     * @type { ?Node }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    rootNode?: Node;
}
/**
 * The render resource factory. RenderResourceFactory is used to create resources that can be shared
 * across Scences that share a RenderContext
 *
 * @interface RenderResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface RenderResourceFactory {
    /**
     * Create a shader.
     *
     * @param { SceneResourceParameters } params - the param of creating a shader
     * @returns { Promise<Shader> } promise a shader
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    createShader(params: SceneResourceParameters): Promise<Shader>;
    /**
      * Create a image.
      *
      * @param { SceneResourceParameters } params - the param of creating a image
      * @returns { Promise<Image> } promise a image
      * @syscap SystemCapability.ArkUi.Graphics3D
      * @since 20
      */
    createImage(params: SceneResourceParameters): Promise<Image>;
    /**
     * Create a Mesh from an array of vertices.
     *
     * @param { SceneResourceParameters } params - the param of creating a Mesh object
     * @param { GeometryDefinition } geometry - what sort of a geometric shape to create
     * @returns { Promise<MeshResource> } promise a Mesh
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    createMesh(params: SceneResourceParameters, geometry: GeometryDefinition): Promise<MeshResource>;
    /**
     * create a Sampler
     *
     * @param { SceneResourceParameters } params - the param of create a sampler
     * @returns { Promise<Sampler> } - promise a scene
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    createSampler(params: SceneResourceParameters): Promise<Sampler>;
    /**
     * Create a new scene from a Resource.
     *
     * @param { ResourceStr } uri - the resource of creating a scene
     * @returns { Promise<Scene> } promise a scene
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    createScene(uri?: ResourceStr): Promise<Scene>;
}
/**
 * The scene resource factory.
 *
 * @extends RenderResourceFactory
 * @interface SceneResourceFactory
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface SceneResourceFactory extends RenderResourceFactory {
    /**
     * Create a camera.
     *
     * @param { SceneNodeParameters } params - the param of creating a camera
     * @returns { Promise<Camera> } promise a camera
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    createCamera(params: SceneNodeParameters): Promise<Camera>;
    /**
     * Create a light.
     *
     * @param { SceneNodeParameters } params - the param of creating a light
     * @param { LightType } lightType - the type of the light
     * @returns { Promise<Light> } promise a light
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    createLight(params: SceneNodeParameters, lightType: LightType): Promise<Light>;
    /**
     * Create a node.
     *
     * @param { SceneNodeParameters } params - the param of creating a node
     * @returns { Promise<Node> } promise a node
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    createNode(params: SceneNodeParameters): Promise<Node>;
    /**
     * Create a material.
     *
     * @param { SceneResourceParameters } params - the param of creating a material
     * @param { MaterialType } materialType - the type of the material
     * @returns { Promise<Material> } promise a material
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    createMaterial(params: SceneResourceParameters, materialType: MaterialType): Promise<Material>;
    /**
     * Create a environment.
     *
     * @param { SceneResourceParameters } params - the param of creating a Environment object
     * @returns { Promise<Environment> } promise a Environment
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    createEnvironment(params: SceneResourceParameters): Promise<Environment>;
    /**
     * Create a geometry node.
     *
     * @param { SceneNodeParameters } params - the param of creating a geometry
     * @param { MeshResource } mesh resource - The mesh data for the geometry
     * @returns { Promise<Geometry> } promise a geometry
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 18
     */
    createGeometry(params: SceneNodeParameters, mesh: MeshResource): Promise<Geometry>;
}
/**
 * Define underlying scene component
 *
 * @interface SceneComponent
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface SceneComponent {
    /**
     * Scene component name
     *
     * @type { string }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    name: string;
    /**
     * Component properties
     *
     * @type { Record<string, string | number | Vec2 | Vec3 | Vec4 | SceneResource | boolean | number[] | string[] | SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined> }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    readonly property: Record<string, string | number | Vec2 | Vec3 | Vec4 | SceneResource | boolean | number[] | string[] | SceneResource[] | Vec2[] | Vec3[] | Vec4[] | null | undefined>;
}
/**
 * Render context defines the context for all rendering resources. Resources within the same render context
 * may be shared between scenes created within the same render context.
 *
 * @interface RenderContext
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface RenderContext {
    /**
     * Get resource factory.
     *
     * @returns { RenderResourceFactory } -- RenderResourceFactory instance
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    getRenderResourceFactory(): RenderResourceFactory;
    /**
     * Load external plugin
     *
     * @param {string} name - Name of the plugin
     * @returns { Promise<boolean> } - Promise a boolean to show if the plugin load is successful
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    loadPlugin(name: string): Promise<boolean>;
}
/**
 * Defines parameters for manual rendering.
 *
 * @interface RenderParameters
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 15
 */
export interface RenderParameters {
    /**
     * If true, the renderer should always render even if there have been no changes in the scene
     * since the previous frame. If false, renderer may omit rendering if no changes have been made.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 15
     */
    alwaysRender?: boolean;
}
/**
 * Defines the 3d scene.
 *
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export class Scene {
    /**
     * Get default render context
     *
     * @returns { RenderContext | null } -- The default RenderContext instance
     * @static
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    static getDefaultRenderContext(): RenderContext | null;
    /**
     * Create a new scene from a ResourceStr.
     *
     * @param { ResourceStr } uri - the resource of creating a scene
     * @returns { Promise<Scene> } promise a scene
     * @static
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    static load(uri?: ResourceStr): Promise<Scene>;
    /**
     * The environment of the scene.
     *
     * @type { Environment }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    environment: Environment;
    /**
     * The animations of the scene.
     *
     * @type { Animation[] }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly animations: Animation[];
    /**
     * The root node of the scene.
     *
     * @type { Node | null }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly root: Node | null;
    /**
     * Get a node by path.
     *
     * @param { string } path - the path of the node
     * @param { NodeType } type - verify the type of node, if it does not match, return null
     * @returns { Node | null } if the node is found by it's path
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    getNodeByPath(path: string, type?: NodeType): Node | null;
    /**
     * Get resource factory.
     *
     * @returns { SceneResourceFactory } if the node is found by it's path
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    getResourceFactory(): SceneResourceFactory;
    /**
     * Release all native scene resources. All TS references will be undefined.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    destroy(): void;
    /**
     * Import node into the scene. The original node may come from separate Scene.
     * The node will be cloned and any modifications to the old node will not be visible after the import.
     *
     * @param { string } name - The name of the newly created node.
     * @param { Node } node - The node to be imported.
     * @param { Node | null} parent - The parent node or null for root
     * @returns { Node } The newly created node.
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 18
     */
    importNode(name: string, node: Node, parent: Node | null): Node;
    /**
     * Import scene into the scene as a node. The node hierarchy will appear under the parent node.
     * All animations from the scene will be duplicated in the scene.
     *
     * @param { string } name - The name of the newly created node
     * @param { Scene } scene - The scene to be imported.
     * @param { Node | null } parent - The parent node or null for root
     * @returns { Node } The newly created node.
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 18
     */
    importScene(name: string, scene: Scene, parent: Node | null): Node;
    /**
    * A new frame is rendered for all active camera.
    *
    * @param { RenderParameters } params - Rendering parameters
    * @returns { boolean } True if rendering was scheduled, false otherwise
    * @syscap SystemCapability.ArkUi.Graphics3D
    * @since 15
    */
    renderFrame(params?: RenderParameters): boolean;
    /**
     * Create a new component.
     *
     * @param { Node } node - The node the component is attached to
     * @param { string } name - The name of the component to load. Valid names are defined by each plugin.
     * @returns { Promise<SceneComponent> } - The newly added component.
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    createComponent(node: Node, name: string): Promise<SceneComponent>;
    /**
      * Get component by name.
      *
      * @param { Node } node - The node component is attached to.
      * @param { string } name - name of the component
      * @returns { SceneComponent | null }
      * @syscap SystemCapability.ArkUi.Graphics3D
      * @since 20
      */
    getComponent(node: Node, name: string): SceneComponent | null;
}
