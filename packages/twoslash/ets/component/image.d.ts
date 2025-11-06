/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Use the DrawableDescriptor class to get drawable image.
 *
 * @typedef { import ('../api/@ohos.arkui.drawableDescriptor').DrawableDescriptor } DrawableDescriptor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type DrawableDescriptor = import('../api/@ohos.arkui.drawableDescriptor').DrawableDescriptor;
/**
 * Import the DrawingColorFilter type object for image color filter setting.
 *
 * @typedef { import('../api/@ohos.graphics.drawing').default.ColorFilter } DrawingColorFilter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type DrawingColorFilter = import('../api/@ohos.graphics.drawing').default.ColorFilter;
/**
 * Lattice for dividing an image into grids.
 *
 * @typedef { import('../api/@ohos.graphics.drawing').default.Lattice } Lattice
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type DrawingLattice = import('../api/@ohos.graphics.drawing').default.Lattice;
/**
 * Object matrix used for setting image transformations.
 *
 * @typedef { import('../api/@ohos.matrix4').default.Matrix4Transit } Matrix4Transit
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type ImageMatrix = import('../api/@ohos.matrix4').default.Matrix4Transit;
/**
  * Business error in onError callback.
  *
  * @typedef { import('../api/@ohos.base').BusinessError<T> } BusinessError<T>
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 20
  */
declare type BusinessError<T> = import('../api/@ohos.base').BusinessError<T>;
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum ImageRenderMode {
    /**
     * Render according to the original image, including colors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Render according to the original image, including colors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Render according to the original image, including colors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Render according to the original image, including colors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Original,
    /**
     * Render the image as a template image, ignoring the color information of the image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Render the image as a template image, ignoring the color information of the image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Render the image as a template image, ignoring the color information of the image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Render the image as a template image, ignoring the color information of the image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Template
}
/**
 * Specify image's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum ImageContent {
    /**
     * Make image empty.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    EMPTY = 0
}
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare enum DynamicRangeMode {
    /**
     * Allow image content to use an unrestricted extended range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    HIGH = 0,
    /**
     * Allow image content to use some extended range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    CONSTRAINT = 1,
    /**
     * Restrict the image content dynamic range to the standard range.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    STANDARD = 2
}
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum ImageInterpolation {
    /**
     * Do not use interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Do not use interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Do not use interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Do not use interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    None,
    /**
     * Low usage of interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Low usage of interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Low usage of interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Low usage of interpolated image data.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Low,
    /**
     * Interpolated image data is used moderately.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Interpolated image data is used moderately.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Interpolated image data is used moderately.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Interpolated image data is used moderately.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Medium,
    /**
     * High usage of interpolated image data may affect the speed of image rendering.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * High usage of interpolated image data may affect the speed of image rendering.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * High usage of interpolated image data may affect the speed of image rendering.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * High usage of interpolated image data may affect the speed of image rendering.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    High
}
/**
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum ImageRotateOrientation {
    /**
     * Rotate according to the image rotation
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    AUTO = 0,
    /**
     * Ignore the rotation of the image
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    UP = 1,
    /**
     * Based on image rotation, rotate clockwise 90 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    RIGHT = 2,
    /**
     * Based on image rotation, rotate clockwise 180 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    DOWN = 3,
    /**
     * Based on image rotation, rotate clockwise 270 degrees
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    LEFT = 4
}
/**
 * @interface ImageInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @interface ImageInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @interface ImageInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @interface ImageInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface ImageInterface {
    /**
     * Set src to obtain images.
     *
     * @param { PixelMap | ResourceStr | DrawableDescriptor } src
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set src to obtain images
     *
     * @param { PixelMap | ResourceStr | DrawableDescriptor } src
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set src to obtain images
     *
     * @param { PixelMap | ResourceStr | DrawableDescriptor } src
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set src to obtain images
     *
     * @param { PixelMap | ResourceStr | DrawableDescriptor } src
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (src: PixelMap | ResourceStr | DrawableDescriptor): ImageAttribute;
    /**
     * Set src to obtain images
     *
     * @param { PixelMap | ResourceStr | DrawableDescriptor | ImageContent } src
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    (src: PixelMap | ResourceStr | DrawableDescriptor | ImageContent): ImageAttribute;
    /**
     * Set src and ai options to obtain images
     *
     * @param { PixelMap | ResourceStr | DrawableDescriptor } src
     * @param { ImageAIOptions } imageAIOptions
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    (src: PixelMap | ResourceStr | DrawableDescriptor, imageAIOptions: ImageAIOptions): ImageAttribute;
}
/**
 * Defines source size of image.
 *
 * @interface ImageSourceSize
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
interface ImageSourceSize {
    /**
     * Set width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Set width.
     * Anonymous Object Rectification.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    width: number;
    /**
     * Set height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Set height.
     * Anonymous Object Rectification.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    height: number;
}
/**
 * Defines the ColorContent.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare class ColorContent {
    /**
     * Indicates the ColorContent to original value.
     *
     * @type { ColorContent }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    static readonly ORIGIN: ColorContent;
}
/**
 * @extends CommonMethod<ImageAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * @extends CommonMethod<ImageAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @extends CommonMethod<ImageAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @extends CommonMethod<ImageAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class ImageAttribute extends CommonMethod<ImageAttribute> {
    /**
     * Placeholder displayed on load
     *
     * @param { string | Resource } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Placeholder displayed on load
     *
     * @param { string | Resource } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Placeholder displayed on load
     *
     * @param { string | Resource } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Placeholder displayed on load
     *
     * @param { string | Resource } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the placeholder image displayed during loading.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { string | Resource | PixelMap } value - Placeholder image displayed during loading, Default value is null.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    alt(value: string | Resource | PixelMap): ImageAttribute;
    /**
     * match Text Direction
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * match Text Direction
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * match Text Direction
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Specifies whether to display the image in the system language direction.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { boolean } value - Whether to display the image in the system language direction, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    matchTextDirection(value: boolean): ImageAttribute;
    /**
     * Sets whether the display size of the image follows the source size.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets whether the display size of the image follows the source size.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets whether the display size of the image follows the source size.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets whether the display size of the image follows the source size.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { boolean } value - Whether to fit the image to the size of the image source, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fitOriginalSize(value: boolean): ImageAttribute;
    /**
     * fill Color
     *
     * @param { ResourceColor } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * fill Color
     *
     * @param { ResourceColor } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * fill Color
     *
     * @param { ResourceColor } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the fill color to be superimposed on the image.
     * By default, no fill color is applied. If an invalid value is passed, the system uses the default theme color:
     * black in light mode and white in dark mode.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute applies only to SVG images.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ResourceColor } value - Fill color to be superimposed on the image.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fillColor(value: ResourceColor): ImageAttribute;
    /**
     * Sets the fill color to be superimposed on the image.
     * By default, no fill color is applied. If an invalid value is passed, the system uses the default theme color:
     * black in light mode and white in dark mode.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute applies only to SVG images.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ResourceColor | ColorContent } color - Fill color to be superimposed on the image.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    fillColor(color: ResourceColor | ColorContent): ImageAttribute;
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the zoom type of an image.
     *
     * @param { ImageFit } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets how the image is resized to fit its container.
     *
     * @param { ImageFit } value - How the image is resized to fit its container, Default value is ImageFit.Cover.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    objectFit(value: ImageFit): ImageAttribute;
    /**
     * Sets the transformation matrix of the image.
     *
     * @param { ImageMatrix } matrix - Transformation matrix of the image.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    imageMatrix(matrix: ImageMatrix): ImageAttribute;
    /**
     * Set the repeat style of the picture
     *
     * @param { ImageRepeat } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set the repeat style of the picture
     *
     * @param { ImageRepeat } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set the repeat style of the picture
     *
     * @param { ImageRepeat } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the repeat style of the picture
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageRepeat } value - How the image is repeated, Default value is ImageRepeat.NoRepeat.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    objectRepeat(value: ImageRepeat): ImageAttribute;
    /**
     * Set the auto style of the picture
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set the auto style of the picture
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set the auto style of the picture
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Specifies whether to resize the image source based on the size of the display area during image decoding.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor
     * or SVG.
     * </p>
     *
     * @param { boolean } value - Whether to resize the image source based on the size of the display area
     * during image decoding, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    autoResize(value: boolean): ImageAttribute;
    /**
     * Sets the image rendering mode.
     *
     * @param { ImageRenderMode } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the image rendering mode.
     *
     * @param { ImageRenderMode } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the image rendering mode.
     *
     * @param { ImageRenderMode } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the rendering mode of the image.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * <br>When ColorFilter is set, this attribute is not effective.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageRenderMode } value - Rendering mode of the image, Default value is ImageRenderMode.Original.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    renderMode(value: ImageRenderMode): ImageAttribute;
    /**
     * Sets the dynamic range of the image to be displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * </p>
     *
     * @param { DynamicRangeMode } value - Dynamic range of the image.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute, Default value is
     * dynamicRangeMode.Standard.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    dynamicRangeMode(value: DynamicRangeMode): ImageAttribute;
    /**
     * Set hdrBrightness for Image.
    *
    * @param { number } brightness - Control the brightness of HDR Image, Default value is 1.0.
    * @returns { ImageAttribute }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 19
    */
    hdrBrightness(brightness: number): ImageAttribute;
    /**
     * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
     *
     * @param { ImageInterpolation } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
     *
     * @param { ImageInterpolation } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the interpolation effect of an image. The interpolation effect is only magnified for the image.
     *
     * @param { ImageInterpolation } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the interpolation effect of the image, which can alleviate aliasing that occurs when the image is zoomed.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute is not applicable to SVG images.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageInterpolation } value - Interpolation effect of the image, Default value is ImageInterpolation.Low.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    interpolation(value: ImageInterpolation): ImageAttribute;
    /**
     * Specifies the picture decoding size.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     *
     * @param { object } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Specifies the picture decoding size.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     *
     * @param { object } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Specifies the picture decoding size.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     *
     * @param { object } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Specifies the picture decoding size.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     *
     * @param { object } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the decoding size of the image.
     * The original picture is decoded into a picture of a specified size. The unit of the number type is px.
     * Anonymous Object Rectification.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute works only when the target size is smaller than the source size.
     * <br>This attribute is not applicable to SVG images or PixelMap objects.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageSourceSize } value - Decoding size of the image.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    sourceSize(value: ImageSourceSize): ImageAttribute;
    /**
     * Sets the synchronous or asynchronous mode for image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the synchronous or asynchronous mode for image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the synchronous or asynchronous mode for image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @param { boolean } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Specifies whether to load the image synchronously.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { boolean } value - Whether to load the image synchronously, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    syncLoad(value: boolean): ImageAttribute;
    /**
     * Sets the color filter effect on the image.
     *
     * @param { ColorFilter } value ColorFilter object.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the color filter effect on the image.
     *
     * @param { ColorFilter } value ColorFilter object.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the color filter effect on the image.
     *
     * @param { ColorFilter } value ColorFilter object.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the color filter for the image.
     *
     * <p><strong>NOTE</strong>:
     * <br>When this attribute is set, renderMode is not effective.
     * </p>
     *
     * @param { ColorFilter | DrawingColorFilter } value -  Color filter of the image.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    colorFilter(value: ColorFilter | DrawingColorFilter): ImageAttribute;
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Allow replication.
     *
     * @param { CopyOptions } value
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Whether the image can be copied.
     *
     * <strong>NOTE</strong>:
     * <br>SVG images cannot be copied.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { CopyOptions } value - Specifies whether the image can be copied, Default value is CopyOptions.None.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    copyOption(value: CopyOptions): ImageAttribute;
    /**
     * Enable image dragging.
     * Default value is false.
     *
     * @param { boolean } value - Whether the image is draggable, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Enable image dragging.
     * Default value is true.
     *
     * @param { boolean } value - Whether the image is draggable, Default value is true.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Specifies whether the image is draggable.
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute cannot be used together with the onDragStart event.
     * </p>
     *
     * @param { boolean } value - Whether the image is draggable, Default value is true.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    draggable(value: boolean): ImageAttribute;
    /**
     * This callback is triggered when an image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { function } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * This callback is triggered when an image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { function } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * This callback is triggered when an image is successfully loaded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * @param { function } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Triggered when an image is successfully loaded or decoded.
     * The size of the image source that is successfully loaded is returned, in pixels.
     *
     * <p><strong>NOTE</strong>:
     * <br>This event is not triggered if the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { function } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onComplete(callback: (event?: {
        /**
         * The width of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * The width of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         * @form
         */
        /**
         * The width of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The width of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        width: number;
        /**
         * The height of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * The height of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         * @form
         */
        /**
         * The height of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The height of the image source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        height: number;
        /**
         * The width of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * The width of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         * @form
         */
        /**
         * The width of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The width of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        componentWidth: number;
        /**
         * The height of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * The height of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         * @form
         */
        /**
         * The height of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The height of the component source.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        componentHeight: number;
        /**
         * The value of the status of the image being loaded successfully.
         * If the returned status value is 0, the image data is successfully loaded.
         * If the returned status value is 1, the image is successfully decoded.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * The value of the status of the image being loaded successfully.
         * If the returned status value is 0, the image data is successfully loaded.
         * If the returned status value is 1, the image is successfully decoded.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 9
         * @form
         */
        /**
         * The value of the status of the image being loaded successfully.
         * If the returned status value is 0, the image data is successfully loaded.
         * If the returned status value is 1, the image is successfully decoded.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The value of the status of the image being loaded successfully.
         * If the returned status value is 0, the image data is successfully loaded.
         * If the returned status value is 1, the image is successfully decoded.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        loadingStatus: number;
        /**
         * The width of the picture that is actually drawn.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The width of the picture that is actually drawn.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        contentWidth: number;
        /**
         * The height of the picture that is actually drawn.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The height of the picture that is actually drawn.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        contentHeight: number;
        /**
         * The actual draw is offset from the x-axis of the component itself.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The actual draw is offset from the x-axis of the component itself.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        contentOffsetX: number;
        /**
         * The actual draw is offset from the y-axis of the component itself.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         * @form
         */
        /**
         * The actual draw is offset from the y-axis of the component itself.
         *
         * @type { number }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         * @form
         */
        contentOffsetY: number;
    }) => void): ImageAttribute;
    /**
     * This callback is triggered when an exception occurs during image loading.
     * The field of "message" carries the detailed information of failed image loading.
     *
     * @param { function } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * This callback is triggered when an exception occurs during image loading.
     * The field of "message" carries the detailed information of failed image loading.
     *
     * @param { function } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Triggered when an error occurs during image loading.
     * The field of "message" carries the detailed information of failed image loading.
     *
     * <p><strong>NOTE</strong>:
     * <br>This event is not triggered if the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { ImageErrorCallback } callback
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onError(callback: ImageErrorCallback): ImageAttribute;
    /**
     * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
     * If the svg image is a wireless loop image, this callback is not triggered.
     *
     * @param { function } event
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
     * If the svg image is a wireless loop image, this callback is not triggered.
     *
     * @param { function } event
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
     * If the svg image is a wireless loop image, this callback is not triggered.
     *
     * @param { function } event
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * When the loaded source file is a svg image, this callback is triggered when the playback of the svg image is complete.
     * If the svg image is a wireless loop image, this callback is not triggered.
     *
     * <p><strong>NOTE</strong>:
     * <br>Only SVG images are supported.
     * <br>This event is not triggered if the parameter type of the component is AnimatedDrawableDescriptor.
     * </p>
     *
     * @param { function } event
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onFinish(event: () => void): ImageAttribute;
    /**
     * Enable image analyzer.
     *
     * @param { boolean} enable
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Sets whether to enable the AI analyzer
     *
     * <p><strong>NOTE</strong>:
     * <br>This attribute cannot be used together with the overlay attribute. If they are set at the same time,
     * the CustomBuilder attribute in overlay has no effect. This attribute depends on device capabilities.
     * <br>Images to be analyzed must be static, non-vector images. That is, SVG and GIF images cannot be analyzed.
     * Pixel maps in RGBA_8888 format can be passed in for analysis.
     * <br>The placeholder images (specified by alt) cannot be analyzed. An image can be analyzed only when
     * objectRepeat is set to ImageRepeat.NoRepeat and obscured is disabled.
     * <br>Analysis is performed based on the complete original image. If the clip, margin, borderRadius,
     * position, or objectFit attribute is set, the image is not displayed completely.
     * If renderMode is used to apply a mask, analysis is still performed based on the complete original image.
     * The copyOption attribute does not affect the AI analyzer.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor.
     * <br>The ohos.permission.INTERNET permission must be declared.
     * </p>
     *
     * @param { boolean} enable - Whether to enable the AI analyzer, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    enableAnalyzer(enable: boolean): ImageAttribute;
    /**
     * Set image resizable options.
     *
     * @param { ResizableOptions } value - Indicates the resizable options.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the resizable image options.
     *
     * <p><strong>NOTE</strong>:
     * <br>Resizing is effective for drag previews and placeholder images.
     * <br>When ResizableOptions is set to a valid value, the objectRepeat attribute does not take effect.
     * <br>When the sum of the values of top and bottom is greater than the source image height,
     * or the sum of the values of left and right is greater than the source image width,
     * the ResizableOptions attribute does not take effect.
     * <br>This attribute does not take effect when the parameter type of the component is AnimatedDrawableDescriptor
     * or SVG.
     * </p>
     *
     * @param { ResizableOptions } value - 	Resizable image options.
     * @returns { ImageAttribute } Returns the instance of the ImageAttribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    resizable(value: ResizableOptions): ImageAttribute;
    /**
     * Sets whether to secure sensitive information on widgets.
     *
     * <p><strong>NOTE</strong>:
     * <br>Obscuring requires widget framework support.
     * </p>
     *
     * @param { boolean } supported - Whether to secure sensitive information on widgets, Default value is false.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 12
     */
    privacySensitive(supported: boolean): ImageAttribute;
    /**
     * Sets the display orientation of the image content.
     *
     * @param { ImageRotateOrientation } orientation - Display orientation of the image content, Default value
     * is ImageRotateOrientation.UP.
     * @returns { ImageAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    orientation(orientation: ImageRotateOrientation): ImageAttribute;
}
/**
 * Defines Image Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Image Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Image Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Image Component.
 *
 * <p>If flickering occurs during image loading, set <b>syncLoad</b> to <b>true</b>.
 * For details, see [Concurrency Optimization]{@link
 * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-click-to-click-response-optimization}</p>
 *
 * <p>If white blocks persist during image loading, follow the steps in [Solution to White Image Blocks]{@link
 * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-image-white-lump-solution}</p>
 *
 * <p>If image loading takes a long time, follow the steps in [Reducing the Loading Time of Preset Images]{@link
 * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-texture-compression-improve-performance}</p>
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Image: ImageInterface;
/**
 * Defines Image Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Image Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Image Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Image Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ImageInstance: ImageAttribute;
/**
 * @type ImageErrorCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @type ImageErrorCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @typedef { function } ImageErrorCallback
 * @param { ImageError } error
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
type ImageErrorCallback = (error: ImageError) => void;
/**
 * @interface ImageError
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * @interface ImageError
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * @interface ImageError
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ImageError {
    /**
     * Component width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Component width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Component width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    componentWidth: number;
    /**
     * Component height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Component height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Component height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    componentHeight: number;
    /**
     * Message.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Message.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    message: string;
    /**
     * Business Error.
     *
     * @type { ?BusinessError<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    error?: BusinessError<void>;
}
/**
 * Image resizable options
 *
 * @interface ResizableOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Image resizable options
 *
 * @interface ResizableOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ResizableOptions {
    /**
     * Image slice widths.
     *
     * @type { ?EdgeWidths }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Image slice widths.
     *
     * @type { ?EdgeWidths }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    slice?: EdgeWidths;
    /**
     * Image lattice.
     *
     * @type { ?DrawingLattice }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lattice?: DrawingLattice;
}
