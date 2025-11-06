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
import drawing from '../@ohos.graphics.drawing';
import type common2D from '../@ohos.graphics.common2D';
import { Resource } from '../global/resource';
/**
 * Size info.
 * Returns the width and height of the component. The default unit is vp, but APIs that use the Size type may specify a
 * different unit, in which case the unit specified by the API takes precedence.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Size info.
 * Returns the width and height of the component. The default unit is vp, but APIs that use the Size type may specify a
 * different unit, in which case the unit specified by the API takes precedence.
 *
 * @interface Size
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface Size {
    /**
     * Get the width of the Size.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the width of the Size.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width: number;
    /**
     * Get the height of the Size.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the height of the Size.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    height: number;
}
/**
 * Defines DrawContext.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines DrawContext.
 * Graphics drawing context, which provides the canvas width and height required for drawing.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export class DrawContext {
    /**
     * Get size of the DrawContext.
     *
     * @returns { Size } The size of the DrawContext.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get size of the DrawContext.
     *
     * @returns { Size } The size of the DrawContext.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get size(): Size;
    /**
     * Get size of the DrawContext with pixel unit.
     *
     * @returns { Size } The size of the DrawContext with pixel unit.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get sizeInPixel(): Size;
    /**
     * Get canvas of the DrawContext.
     *
     * @returns { drawing.Canvas } The canvas of the DrawContext.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get canvas of the DrawContext.
     *
     * @returns { drawing.Canvas } The canvas of the DrawContext.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get canvas(): drawing.Canvas;
}
/**
  * Defined a vector with two values.
  *
  * @interface Vector2
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @since 11
  */
/**
 * Defined a vector with two values.
 *
 * @interface Vector2
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface Vector2 {
    /**
     * Value for x-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Value for x-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    x: number;
    /**
     * Value for y-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Value for y-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    y: number;
}
/**
  * Defined a vector with two T type values.
  *
  * @interface Vector2T
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 12
  */
interface Vector2T<T> {
    /**
     * Value for x-axis of the vector.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    x: T;
    /**
     * Value for y-axis of the vector.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    y: T;
}
/**
 * Defined a vector with three values.
 *
 * @interface Vector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defined a vector with three values.
 *
 * @interface Vector3
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface Vector3 {
    /**
     * Value for x-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Value for x-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    x: number;
    /**
     * Value for y-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Value for y-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    y: number;
    /**
     * Value for z-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Value for z-axis of the vector.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    z: number;
}
/**
 * It's a 4x4 matrix, represent by number[].
 * Value range of each number: (-∞, +∞)
 *
 * @typedef { number[] } Matrix4
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * It's a 4x4 matrix, represent by number[].
 * Value range of each number: (-∞, +∞)
 *
 * @typedef { number[] } Matrix4
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Matrix4 = [
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
];
/**
 * Offset info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Offset info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Offset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Offset = Vector2;
/**
 * Position info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Position info.
 * Unit: vp.
 *
 * @typedef { Vector2 } Position
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Position = Vector2;
/**
 * PositionT info.
 * Unit: vp.
 * @typedef {Vector2T<T> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type PositionT<T> = Vector2T<T>;
/**
 * Pivot info.
 * As the rotation or scaling center of the component, the pivot affects the rotation and scaling effects.
 * The value is a floating point number in the range [0.0, 1.0], and the default value is 0.5.
 *
 * @typedef { Vector2 } Pivot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Pivot info.
 * As the rotation or scaling center of the component, the pivot affects the rotation and scaling effects.
 * The value is a floating point number in the range [0.0, 1.0], and the default value is 0.5.
 *
 * @typedef { Vector2 } Pivot
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Pivot = Vector2;
/**
 * Scale info.
 * The value is a floating point number, and the default value is 1.0.
 *
 * @typedef { Vector2 } Scale
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Scale info.
 * The value is a floating point number, and the default value is 1.0.
 *
 * @typedef { Vector2 } Scale
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Scale = Vector2;
/**
 * Translation info.
 * Unit: px
 *
 * @typedef { Vector2 } Translation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Translation info.
 * Unit: px
 *
 * @typedef { Vector2 } Translation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Translation = Vector2;
/**
 * Rotation info.
 * Unit: degree
 *
 * @typedef { Vector3 } Rotation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Rotation info.
 * Unit: degree
 *
 * @typedef { Vector3 } Rotation
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Rotation = Vector3;
/**
 * Frame info, include the position info and size info.
 *
 * @interface Frame
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Frame info, include the position info and size info.
 *
 * @interface Frame
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare interface Frame {
    /**
     * Position value for x-axis of the frame info.
     * Unit: vp.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Position value for x-axis of the frame info.
     * Unit: vp.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    x: number;
    /**
     * Position value for y-axis of the frame info.
     * Unit: vp.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Position value for y-axis of the frame info.
     * Unit: vp.
     * Value range: (-∞, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    y: number;
    /**
     * Size value for width of the frame info.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Size value for width of the frame info.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width: number;
    /**
     * Size value for height of the frame info.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Size value for height of the frame info.
     * Unit: vp.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    height: number;
}
/**
 * Defines the Edge property.
 *
 * @interface Edges
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface Edges<T> {
    /**
     * Left property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    left: T;
    /**
     * Right property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    right: T;
    /**
     * Top property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    top: T;
    /**
     * Bottom property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bottom: T;
}
/**
 * Defines the Length Unit.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum LengthUnit {
    /**
     * Logical pixel used in Ace1.0. It's based on frontend design width.
     * For example, when a frontend with 750px design width running on a
     * device with 1080 pixels width, 1px represents 1.44 pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    PX = 0,
    /**
     * Density independent pixels, one vp is one pixel on a 160 dpi screen.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    VP = 1,
    /**
     * Scale independent pixels. This is like VP but will be scaled by
     * user's font size preference.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    FP = 2,
    /**
     * The percentage of either a value from the element's parent or from
     * another property of the element itself.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    PERCENT = 3,
    /**
     * Logic pixels used in ACE2.0 instead of PX, and PX is the physical pixels in ACE2.0.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    LPX = 4
}
/**
 * Defines the Size property.
 *
 * @interface SizeT
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface SizeT<T> {
    /**
     * Width property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width: T;
    /**
     * Height property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    height: T;
}
/**
 * Enumerates the length metrics unit.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export enum LengthMetricsUnit {
    /**
     * The default length metrics unit, in vp.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DEFAULT = 0,
    /**
     * The pixel length metrics unit.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    PX = 1
}
/**
 * Defines the Length Metrics.
 * When the length unit is PERCENT, the value 1 indicates 100%.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class LengthMetrics {
    /**
     * Constructor.
     * If the unit parameter is omitted or explicitly set to undefined, the default unit VP is used.
     * If it is set to a value that is not of the LengthUnit type, the default value 0 VP is used.
     *
     * @param { number } value - The value of length.
     * @param { LengthUnit } [unit] - The length unit.
     * The default value is VP.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(value: number, unit?: LengthUnit);
    /**
     * Init a lengthMetrics with px unit.
     *
     * @param { number } value - The value of the length metrics.
     * Value range: (-∞, +∞).
     * @returns { LengthMetrics } Returns the lengthMetrics object with unit px.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static px(value: number): LengthMetrics;
    /**
     * Init a lengthMetrics with vp unit.
     *
     * @param { number } value - The value of the length metrics.
     * Value range: (-∞, +∞).
     * @returns { LengthMetrics } - Returns the lengthMetrics object with unit vp.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static vp(value: number): LengthMetrics;
    /**
     * Init a lengthMetrics with fp unit.
     *
     * @param { number } value - The value of the length metrics.
     * Value range: (-∞, +∞).
     * @returns { LengthMetrics } Returns the lengthMetrics object with unit fp.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static fp(value: number): LengthMetrics;
    /**
     * Init a lengthMetrics with percent unit.
     * The value 1 indicates 100%.
     *
     * @param { number } value - The value of the length metrics.
     * Value range: [0, 1].
     * @returns { LengthMetrics } Returns the lengthMetrics object with unit percent.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static percent(value: number): LengthMetrics;
    /**
     * Init a lengthMetrics with lpx unit.
     *
     * @param { number } value - The value of the length metrics.
     * Value range: (-∞, +∞).
     * @returns { LengthMetrics } Returns the lengthMetrics object with unit lpx.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static lpx(value: number): LengthMetrics;
    /**
     * Init a lengthMetrics with Resource unit.
     *
     * @param { Resource } value - The value of the length metrics.
     * @returns { LengthMetrics } Returns the lengthMetrics object with unit Resource.
     * @throws { BusinessError } 180001 - System resources does not exist.
     * @throws { BusinessError } 180002 - The type of system resources is incorrect.
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static resource(value: Resource): LengthMetrics;
    /**
     * The unit of the LengthMetrics. The default value is VP.
     *
     * @type { LengthUnit }
     * @default VP
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    public unit: LengthUnit;
    /**
     * The value of the LengthMetrics.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    public value: number;
}
/**
 * Defines the ColorMetrics class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ColorMetrics {
    /**
     * Instantiate the ColorMetrics class using color number
     *
     * @param { number } value - color number, in HEX format
     * RGB and ARGB color values are supported.
     * @returns { ColorMetrics } ColorMetrics class
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static numeric(value: number): ColorMetrics;
    /**
     * Instantiate the ColorMetrics class using color rgb
     *
     * @param { number } red - red value of rgba
     * The value is an integer ranging from 0 to 255.
     * @param { number } green - green value of rgba
     * The value is an integer ranging from 0 to 255.
     * @param { number } blue - blue value of rgba
     * The value is an integer ranging from 0 to 255.
     * @param { number } alpha - opacity value of rgba
     * The value is a floating point number ranging from 0.0 to 1.0. The default value is 1.0 (fully opaque).
     * @returns { ColorMetrics } ColorMetrics class
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static rgba(red: number, green: number, blue: number, alpha?: number): ColorMetrics;
    /**
     * Instantiate the ColorMetrics class using ResourceColor
     *
     * @param { ResourceColor } color - resource color
     * @returns { ColorMetrics } ColorMetrics class
     * @throws { BusinessError } 180003 - Failed to obtain the color resource.
     * @throws { BusinessError } 401 - Parameter error. Possible cause:
     * 1. The type of the input color parameter is not ResourceColor.
     * 2. The format of the input color string is not RGB or RGBA.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static resourceColor(color: ResourceColor): ColorMetrics;
    /**
     * blend color
     *
     * @param { ColorMetrics } overlayColor - overlay color
     * @returns { ColorMetrics } ColorMetrics class
     * @throws { BusinessError } 401 - Parameter error. The type of the input parameter is not ColorMetrics.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    blendColor(overlayColor: ColorMetrics): ColorMetrics;
    /**
     * Get color of the ColorMetrics.
     * The return value is a string indicating an RGBA color value.
     *
     * @returns { string } The color of the ColorMetrics.
     * String indicating an RGBA color value. Example: 'rgba(255, 100, 255, 0.5)'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get color(): string;
    /**
     * Get red value of the ColorMetrics.
     *
     * @returns { number } The red value of the ColorMetrics.
     * The value is an integer ranging from 0 to 255.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get red(): number;
    /**
     * Get green value of the ColorMetrics.
     *
     * @returns { number } The green value of the ColorMetrics.
     * The value is an integer ranging from 0 to 255.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get green(): number;
    /**
     * Get blue value of the ColorMetrics.
     *
     * @returns { number } The blue value of the ColorMetrics.
     * The value is an integer ranging from 0 to 255.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get blue(): number;
    /**
     * Get opacity value of the ColorMetrics.
     *
     * @returns { number } The opacity value of the ColorMetrics.
     * The value is an integer ranging from 0 to 1.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get alpha(): number;
}
/**
 * Defines the Corner property.
 *
 * @interface Corners
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface Corners<T> {
    /**
     * TopLeft property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    topLeft: T;
    /**
     * TopRight property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    topRight: T;
    /**
     * BottomLeft property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bottomLeft: T;
    /**
     * BottomRight property.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bottomRight: T;
}
/**
 * Defines the Corner radius.
 *
 * @typedef { Corners<Vector2> } CornerRadius
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type CornerRadius = Corners<Vector2>;
/**
 * BorderRadiuses info.
 *
 * @typedef { Corners<number> } BorderRadiuses
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type BorderRadiuses = Corners<number>;
/**
 * Rect info.
 *
 * @typedef { common2D.Rect } Rect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export type Rect = common2D.Rect;
/**
 * Defines the RoundRect.
 *
 * @interface RoundRect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface RoundRect {
    /**
     * Rect property.
     *
     * @type { Rect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    rect: Rect;
    /**
     * Corners property.
     *
     * @type { CornerRadius }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    corners: CornerRadius;
}
/**
 * Defines the Circle.
 *
 * @interface Circle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface Circle {
    /**
     * The x-coordinate of the center of the Circle, in px.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    centerX: number;
    /**
     * The y-coordinate of the center of the Circle, in px.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    centerY: number;
    /**
     * The radius of the Circle, in px.
     * Value range: [0, +∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    radius: number;
}
/**
 * Defines the CommandPath.
 *
 * @interface CommandPath
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface CommandPath {
    /**
     * The commands of CommandPath.
     * For details about how to convert the pixel unit, see Pixel Unit Conversion.
     * Unit: px
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    commands: string;
}
/**
 * Defines ShapeMask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare class ShapeMask {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor();
    /**
     * Set the rect shape of the ShapeMask.
     *
     * @param { Rect } rect - The rect shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setRectShape(rect: Rect): void;
    /**
     * Set the round rect shape of the ShapeMask.
     *
     * @param { RoundRect } roundRect - The round rect shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setRoundRectShape(roundRect: RoundRect): void;
    /**
     * Set the circle shape of the ShapeMask.
     *
     * @param { Circle } circle - The circle shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setCircleShape(circle: Circle): void;
    /**
     * Set the oval shape of the ShapeMask.
     *
     * @param { Rect } oval - The oval shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOvalShape(oval: Rect): void;
    /**
     * Set the command path of the ShapeMask.
     *
     * @param { CommandPath } path - The command path will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setCommandPath(path: CommandPath): void;
    /**
     * The fill color of the ShapeMask, in ARGB format.
     * The default value is 0XFF000000.
     *
     * @type { number }
     * @default 0XFF000000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fillColor: number;
    /**
     * The stroke color of the ShapeMask, in ARGB format.
     * The default value is 0XFF000000.
     *
     * @type { number }
     * @default 0XFF000000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    strokeColor: number;
    /**
     * The stroke width of the ShapeMask, in px.
     * The default value is 0.
     *
     * @type { number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    strokeWidth: number;
}
/**
 * Define ShapeClip. Record the type and parameters of the shape used for clipping.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export declare class ShapeClip {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor();
    /**
     * Set the rect shape of the ShapeClip.
     *
     * @param { Rect } rect - The rect shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setRectShape(rect: Rect): void;
    /**
     * Set the round rect shape of the ShapeClip.
     *
     * @param { RoundRect } roundRect - The round rect shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setRoundRectShape(roundRect: RoundRect): void;
    /**
     * Set the circle shape of the ShapeClip.
     *
     * @param { Circle } circle - The circle shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setCircleShape(circle: Circle): void;
    /**
     * Set the oval shape of the ShapeClip.
     *
     * @param { Rect } oval - The oval shape will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOvalShape(oval: Rect): void;
    /**
     * Set the command path of the ShapeClip.
     *
     * @param { CommandPath } path - The command path will be set.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setCommandPath(path: CommandPath): void;
}
/**
 * Obtain a object with all edges are set to the same color.
 *
 * @param { number } all - The edge color will be set, in ARGB format, for example, 0xffff00ff.
 * Value range: [0, 0xffffffff]
 * @returns { Edges<number> } - The object with all edges are set to the same color.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export function edgeColors(all: number): Edges<number>;
/**
 * Obtain a object with all edges are set to the same width.
 *
 * @param { number } all - The edge width will be set, in vp.
 * Value range: [0, +∞).
 * @returns { Edges<number> } - The object with all edges are set to the same width.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export function edgeWidths(all: number): Edges<number>;
/**
 * Obtain a object with all edges are set to the same style.
 *
 * @param { BorderStyle } all - The edge style will be set.
 * @returns { Edges<BorderStyle> } - The object with all edges are set to the same style.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export function borderStyles(all: BorderStyle): Edges<BorderStyle>;
/**
 * Obtain a BorderRadiuses object with all edges are set to the same radius.
 *
 * @param { number } all - The edge radius will be set.
 * Unit: vp.
 * Value range: [0, +∞).
 * @returns { BorderRadiuses } - The BorderRadiuses object.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export function borderRadiuses(all: number): BorderRadiuses;
