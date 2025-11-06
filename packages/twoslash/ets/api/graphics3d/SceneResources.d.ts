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
 * @file Defines 3D resource related interfaces
 * @kit ArkGraphics3D
 */
import { Vec2, Vec3, Vec4, Aabb } from './SceneTypes';
import { Callback } from '../@ohos.base';
/**
 * The enum of SceneResource type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export enum SceneResourceType {
    /**
     * The resource is an Unknown.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    UNKNOWN = 0,
    /**
     * The resource is a Node.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    NODE = 1,
    /**
     * The resource is an Environment.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    ENVIRONMENT = 2,
    /**
     * The resource is a Material.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    MATERIAL = 3,
    /**
     * The resource is a Mesh.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    MESH = 4,
    /**
     * The resource is an Animation.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    ANIMATION = 5,
    /**
     * The resource is a Shader.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    SHADER = 6,
    /**
     * The resource is an Image.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    IMAGE = 7,
    /**
     * The resource is a mesh resource
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 18
     */
    MESH_RESOURCE = 8
}
/**
 * Define scene resource extended by other 3d resource.
 *
 * @interface SceneResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface SceneResource {
    /**
     * Scene resource name.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    name: string;
    /**
     * Scene resource type.
     *
     * @type { SceneResourceType }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly resourceType: SceneResourceType;
    /**
     * Scene resource uri.
     *
     * @type { ?ResourceStr }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly uri?: ResourceStr;
    /**
     * Release scene resource.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    destroy(): void;
}
/**
 * Shader resource.
 *
 * @extends SceneResource
 * @interface Shader
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface Shader extends SceneResource {
    /**
     * Shader inputs.
     *
     * @type { Record<string, number | Vec2 | Vec3 | Vec4 | Image> }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly inputs: Record<string, number | Vec2 | Vec3 | Vec4 | Image>;
}
/**
 * The enum of material type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export enum MaterialType {
    /**
     * The material type is a Shader.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    SHADER = 1,
    /**
     * The material is a physically-based metallic roughness material.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    METALLIC_ROUGHNESS = 2
}
/**
 * The enum of pbr material cull mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export enum CullMode {
    /**
     * Disable culling.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    NONE = 0,
    /**
     * Front face culling.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    FRONT = 1,
    /**
     * Back face culling.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    BACK = 2
}
/**
 * Blend interface.
 *
 * @interface Blend
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface Blend {
    /**
     * Enable/disable blending.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    enabled: boolean;
}
/**
 * Render sort Layer. Within a render slot a layer can define a sort layer order.
 * There are 0-63 values available (0 first, 63 last). Default id value is 32.
 * 1. Typical use case is to set render sort layer to objects which render with depth test without depth write.
 * 2. Typical use case is to always render character and/or camera object first to cull large parts of the view.
 * 3. Sort e.g. plane layers.
 *
 * @interface RenderSort
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface RenderSort {
    /**
     * Sort layer used sorting submeshes in rendering in render slots.
     * Valid values are 0 - 63.
     *
     * @type { ?number }
     * @default 32 Default render sort layer id.
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    renderSortLayer?: number;
    /**
     * Sort layer order to describe fine order within sort layer.
     * Valid values are 0 - 255.
     *
     * @type { ?number }
     * @default 0 Default render sort layer order.
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    renderSortLayerOrder?: number;
}
/**
 * Material resource.
 *
 * @extends SceneResource
 * @interface Material
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface Material extends SceneResource {
    /**
     * Material resource type.
     *
     * @type { MaterialType }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly materialType: MaterialType;
    /**
     * Defines if the material can receive shadows.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    shadowReceiver?: boolean;
    /**
     * Culling mode.
     *
     * @type { ?CullMode }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    cullMode?: CullMode;
    /**
     * Enable/disable blending.
     *
     * @type { ?Blend }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    blend?: Blend;
    /**
     * Alpha cutoff value [0,1]. Enabled if < 1.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    alphaCutoff?: number;
    /**
     * Render sorting priority for layers.
     *
     * @type { ?RenderSort }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    renderSort?: RenderSort;
}
/**
 * Material property interface.
 *
 * @interface MaterialProperty
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface MaterialProperty {
    /**
     * Texture to use. If undefined, factor defines the diffuse color.
     *
     * @type { Image | null }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    image: Image | null;
    /**
     * Texture coefficient. Default is {1,1,1,1}, meaning no effect.
     *
     * @type { Vec4 }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    factor: Vec4;
    /**
     * Texture Sampler.
     *
     * @type { ?Sampler }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    sampler?: Sampler;
}
/**
 * Physically-based metallic roughness material resource.
 *
 * @extends Material
 * @interface MetallicRoughnessMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface MetallicRoughnessMaterial extends Material {
    /**
     * Base color factor of pbr material.
     * Value of factor.xyzw defines rgba color.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    baseColor: MaterialProperty;
    /**
     * Normal factor of pbr material.
     * Value of factor.x defines normal scale.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    normal: MaterialProperty;
    /**
     * Metallic roughness material parameters.
     * Value of factor.y defines roughness, factor.z defines metallic and factor.a defines reflectance.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    material: MaterialProperty;
    /**
     * Ambient occlusion of pbr material.
     * Value of factor.x defines ambient occlusion factor.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    ambientOcclusion: MaterialProperty;
    /**
     * Emissive property of pbr material.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    emissive: MaterialProperty;
    /**
     * Clearcoat intensity.
     * Value of factor.x defines clearcoat layer intensity.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    clearCoat: MaterialProperty;
    /**
     * Clearcoat roughness.
     * Value of factor.y defines clearcoat layer roughness.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    clearCoatRoughness: MaterialProperty;
    /**
     * Clearcoat normal.
     * Value of factor.xyz defines RGB clearcoat normal scale.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    clearCoatNormal: MaterialProperty;
    /**
     * Sheen color of pbr material.
     * Value of factor.xyz defines RGB sheen color,
     * Value of factor.w defines sheen roughness.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    sheen: MaterialProperty;
    /**
     * Specular color of pbr material.
     * Value of factor.xyz defines RGB specular color,
     * Value of factor.w defines specular intensity.
     *
     * @type { MaterialProperty }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    specular: MaterialProperty;
}
/**
 * Shader material resource.
 *
 * @extends Material
 * @interface ShaderMaterial
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface ShaderMaterial extends Material {
    /**
     * Color shader of material.
     *
     * @type { ?Shader }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    colorShader?: Shader;
}
/**
 * Sampler filter Mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export enum SamplerFilter {
    /**
     * Use nearest filtering
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    NEAREST = 0,
    /**
     * Use linear filtering
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    LINEAR = 1
}
/**
 * Addressing mode for Sampler
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export enum SamplerAddressMode {
    /**
     * Repeat
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    REPEAT = 0,
    /**
     * Mirrored repeat
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    MIRRORED_REPEAT = 1,
    /**
     * clamp to edge
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    CLAMP_TO_EDGE = 2
}
/**
 * Sampler interface
 *
 * @interface { Sampler }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface Sampler {
    /**
     * Mag filiter
     *
     * @type { ?SamplerFilter }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    magFilter?: SamplerFilter;
    /**
     * Min filiter
     *
     * @type { ?SamplerFilter }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    minFilter?: SamplerFilter;
    /**
     * Mip-map mode
     *
     * @type { ?SamplerFilter }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    mipMapMode?: SamplerFilter;
    /**
     * U addressing mode
     *
     * @type { ?SamplerAddressMode }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    addressModeU?: SamplerAddressMode;
    /**
     * V addressing mode
     *
     * @type { ?SamplerAddressMode }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    addressModeV?: SamplerAddressMode;
}
/**
 * Sub mesh resource.
 *
 * @interface SubMesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface SubMesh {
    /**
     * The name of the sub mesh.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    name: string;
    /**
     * The material of the sub mesh.
     *
     * @type { Material }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    material: Material;
    /**
     * The axis aligned bounding box of the sub mesh.
     *
     * @type { Aabb }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly aabb: Aabb;
}
/**
 * Defines Morpher interface for specifying morph targets for Node's geometry.
 *
 * @interface Morpher
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 20
 */
export interface Morpher {
    /**
     * Morph target names and weights
     *
     * @type { Record<string, number> }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    readonly targets: Record<string, number>;
}
/**
 * Mesh resource.
 *
 * @extends SceneResource
 * @interface Mesh
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface Mesh extends SceneResource {
    /**
     * The sub meshes of the mesh.
     *
     * @type { SubMesh[] }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly subMeshes: SubMesh[];
    /**
     * The axis aligned bounding box of the mesh.
     *
     * @type { Aabb }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly aabb: Aabb;
    /**
     * The material override sub mesh's material.
     *
     * @type { ?Material }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    materialOverride?: Material;
}
/**
 * Mesh resource.
 *
 *
 * @extends SceneResource
 * @interface MeshResource
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 18
 */
export interface MeshResource extends SceneResource {
}
/**
 * Animation resource.
 *
 * @extends SceneResource
 * @interface Animation
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface Animation extends SceneResource {
    /**
     * The animation is enabled.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    enabled: boolean;
    /**
     * Animation speed factor
     * A negative value runs the animation in reverse using the given speed factor
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 20
     */
    speed?: number;
    /**
     * The duration of the animation.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly duration: number;
    /**
     * Whether the animation is running.
     *
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly running: boolean;
    /**
     * The progress of the animation between 0~1.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly progress: number;
    /**
     * Register a callback when animation finished.
     *
     * @param { Callback<void> } callback - the callback invoked when animation finished
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    onFinished(callback: Callback<void>): void;
    /**
     * Register a callback when animation started.
     *
     * @param { Callback<void> } callback - the callback invoked when animation started
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    onStarted(callback: Callback<void>): void;
    /**
     * Pause the animation.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    pause(): void;
    /**
     * Restart the animation.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    restart(): void;
    /**
     * Seek the animation to the position.
     *
     * @param { number } position - the position seek between 0~1
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    seek(position: number): void;
    /**
     * Start the animation.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    start(): void;
    /**
     * Stop the animation and seek the position to the beginning.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    stop(): void;
    /**
     * Finish the animation and seek the position to the end.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    finish(): void;
}
/**
 * The enum of environment background type.
 * @enum { number }
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export enum EnvironmentBackgroundType {
    /**
     * The background is none.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    BACKGROUND_NONE = 0,
    /**
     * The background is image.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    BACKGROUND_IMAGE = 1,
    /**
     * The background is cubemap.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    BACKGROUND_CUBEMAP = 2,
    /**
     * The background is equirectangular.
     *
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    BACKGROUND_EQUIRECTANGULAR = 3
}
/**
 * Environment resource.
 *
 * @extends SceneResource
 * @interface Environment
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface Environment extends SceneResource {
    /**
     * The background type of the environment.
     *
     * @type { EnvironmentBackgroundType }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    backgroundType: EnvironmentBackgroundType;
    /**
     * The indirect diffuse factor of the environment.
     *
     * @type { Vec4 }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    indirectDiffuseFactor: Vec4;
    /**
     * The indirect specular factor of the environment.
     *
     * @type { Vec4 }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    indirectSpecularFactor: Vec4;
    /**
     * The environment map factor of the environment.
     *
     * @type { Vec4 }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    environmentMapFactor: Vec4;
    /**
     * The environment image of the environment.
     *
     * @type { ?(Image | null) }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    environmentImage?: Image | null;
    /**
     * The radiance image of the environment.
     *
     * @type { ?(Image | null) }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    radianceImage?: Image | null;
    /**
     * The irradiance coefficients (array of nine Vec3).
     *
     * @type { ?Vec3[] }
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    irradianceCoefficients?: Vec3[];
}
/**
 * Image resource.
 *
 * @extends SceneResource
 * @interface Image
 * @syscap SystemCapability.ArkUi.Graphics3D
 * @since 12
 */
export interface Image extends SceneResource {
    /**
     * The width of the image.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly width: number;
    /**
     * The height of the image.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUi.Graphics3D
     * @since 12
     */
    readonly height: number;
}
