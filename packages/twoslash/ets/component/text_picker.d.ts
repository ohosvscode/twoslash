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
 * Define the contents of each selector item.
 *
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define the contents of each selector item.
 *
 * @interface TextPickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerRangeContent {
    /**
     * Image resource.
     * If the value is a string, such as **"/common/hello.png"**, it represents the path to the image.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Image resource.
     * If the value is a string, such as **"/common/hello.png"**, it represents the path to the image.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    icon: string | Resource;
    /**
     * Text information.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { ?(string | Resource) }
     * @default ""
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text information.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { ?(string | Resource) }
     * @default ""
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    text?: string | Resource;
}
/**
 * Define the contents of text cascade picker.
 *
 * @interface TextCascadePickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Define the contents of text cascade picker.
 *
 * @interface TextCascadePickerRangeContent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextCascadePickerRangeContent {
    /**
     * Text information.
     *
     * <p><strong>NOTE</strong>:
     * If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Text information.
     *
     * <p><strong>NOTE</strong>:
     * If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { string | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    text: string | Resource;
    /**
     * Linkage data.
     *
     * @type { ?TextCascadePickerRangeContent[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Linkage data.
     *
     * @type { ?TextCascadePickerRangeContent[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    children?: TextCascadePickerRangeContent[];
}
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of TextPicker.
 *
 * @interface TextPickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerOptions {
    /**
     * Data selection range of the picker.
     *
     * @type {string[] | Resource}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Data selection range of the picker.
     * Support the display of pictures, text and pictures plus text, or multi column plain text.
     *
     * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Data selection range of the picker.
     * Support the display of pictures, text and pictures plus text, or multi column plain text.
     *
     * @type {string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[]}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    range: string[] | string[][] | Resource | TextPickerRangeContent[] | TextCascadePickerRangeContent[];
    /**
     * Value of the default item in the range.
     * The priority of this parameter is lower than that of selected.
     *
     * <p><strong>NOTE</strong>:
     * This parameter works only when the picker contains text only.
     * </p>
     *
     * @type { ?string }
     * @default value of the first item
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Value of the default item in the range.
     * The priority of this parameter is lower than that of selected.
     * For a single-column picker, use a value of the string type.
     * For a multi-column (linked) picker, use a value of the string[] type.
     *
     * <p><strong>NOTE</strong>:
     * <br>This parameter works only when the picker contains text only.
     * </p>
     *
     * @type { ?(string | string[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Value of the default item in the range.
     * The priority of this parameter is lower than that of selected.
     * For a single-column picker, use a value of the string type.
     * For a multi-column (linked) picker, use a value of the string[] type.
     *
     * <p><strong>NOTE</strong>:
     * This parameter works only when the picker contains text only.
     * </p>
     *
     * @type { ?(string | string[]) }
     * @default value of the first item
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Value of the current selection.
     * Only valid when only text is displayed.
     *
     * @type { ?(ResourceStr | ResourceStr[]) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    value?: ResourceStr | ResourceStr[];
    /**
     * Index of the default selected item in the array.
     * The index is zero-based.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Index of the default selected item in the array.
     * The index is zero-based.
     * For a single-column picker, use a value of the number type.
     * For a multi-column (linked) picker, use a value of the number[].
     *
     * @type { ?(number | number[]) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Index of the default selected item in the array.
     * The index is zero-based.
     * For a single-column picker, use a value of the number type.
     * For a multi-column (linked) picker, use a value of the number[].
     *
     * @type { ?(number | number[]) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selected?: number | number[];
    /**
     * Width of each column in the picker.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the text length exceeds the column width, the text will be truncated.
     * </p>
     *
     * @type { ?LengthMetrics[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    columnWidths?: LengthMetrics[];
}
/**
 * TextPickerInterface
 *
 * @interface TextPickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * TextPickerInterface
 *
 * @interface TextPickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TextPickerInterface
 *
 * @interface TextPickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface TextPickerInterface {
    /**
     * Defines the TextPicker constructor.
     *
     * @param { TextPickerOptions } options
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines the TextPicker constructor.
     *
     * @param { TextPickerOptions } options
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the TextPicker constructor.
     *
     * @param { TextPickerOptions } options
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (options?: TextPickerOptions): TextPickerAttribute;
}
/**
 * Defines the struct of DividerOptions.
 *
 * @interface DividerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DividerOptions {
    /**
     * Stroke width of the divider.
     * The unit is vp by default. You can also specify it as px. The percentage type is not supported.
     *
     * <p><strong>NOTE</strong>:
     * <br>If the value is less than 0, the default value is used.
     * <br>The maximum value allowed is half the height of the column.
     * </p>
     *
     * @type { ?Dimension }
     * @default 2.0px
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    strokeWidth?: Dimension;
    /**
     * Color of the divider.
     *
     * @type { ?ResourceColor }
     * @default "#33000000"
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    color?: ResourceColor;
    /**
     * Distance between the divider and the start edge of the picker.
     * The unit is vp by default. You can also specify it as px. The percentage type is not supported.
     *
     * <p><strong>NOTE</strong>:
     * Values less than 0 are invalid. The maximum value allowed is the width of the column.
     * </p>
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    startMargin?: Dimension;
    /**
     * Distance between the divider and the end edge of the picker.
     * The unit is vp by default. You can also specify it as px. The percentage type is not supported.
     *
     * <p><strong>NOTE</strong>:
     * <br>Values less than 0 are invalid. The maximum value allowed is the width of the column.
     * </p>
     *
     * @type { ?Dimension }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    endMargin?: Dimension;
}
/**
 * Defines the text style options.
 *
 * @extends PickerTextStyle
 * @interface TextPickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare interface TextPickerTextStyle extends PickerTextStyle {
    /**
     * Minimum font size, used in conjunction with maxFontSize.
     * When minFontSize and maxFontSize are set,
     * the size setting in font is ineffective.
     * The default maximum number of lines is 1,
     * and the default height adaptation mode is MIN_FONT_SIZE_FIRST.
     *
     * @type { ?(number | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    minFontSize?: number | string | Resource;
    /**
     * Maximum font size.
     *
     * @type { ?(number | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    maxFontSize?: number | string | Resource;
    /**
     * Display mode when the text is too long.
     *
     * <p><strong>NOTE</strong>:
     * Ineffective when set to MARQUEE.
     * </p>
     *
     * @type { ?TextOverflow }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    overflow?: TextOverflow;
}
/**
 * Provide an interface to set the background style of selected items.
 *
 * @interface PickerBackgroundStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface PickerBackgroundStyle {
    /**
     * Define the background color of selected item.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Defines the border radius of selected items.
     *
     * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderRadius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
}
/**
 * Callback of the listened scroll stop event.
 *
 * @typedef {function} TextPickerScrollStopCallback
 * @param { string | string[] } value - Value of the selected item.
 * @param { number | number[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare type TextPickerScrollStopCallback = (value: string | string[], index: number | number[]) => void;
/**
 * Callback of TextPicker item is selected event.
 *
 * @typedef {function} OnTextPickerChangeCallback
 * @param { string | string[] } selectItem - Value of the selected item.
 * @param { number | number[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type OnTextPickerChangeCallback = (selectItem: string | string[], index: number | number[]) => void;
/**
 * Callback of the listened onEnterSelectedArea event.
 *
 * @typedef {function} TextPickerEnterSelectedAreaCallback
 * @param { string | string[] } value - Value of the selected item.
 * @param { number | number[] } index - Index of the selected item.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type TextPickerEnterSelectedAreaCallback = (value: string | string[], index: number | number[]) => void;
/**
 * Style the text selector.
 *
 * @extends CommonMethod<TextPickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Style the text selector.
 *
 * @extends CommonMethod<TextPickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Style the text selector.
 *
 * @extends CommonMethod<TextPickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class TextPickerAttribute extends CommonMethod<TextPickerAttribute> {
    /**
     * Sets the height of each item in the picker.
     *
     * @param { number | string } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the height of each item in the picker.
     *
     * @param { number | string } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the height of each item in the picker.
     *
     * @param { number | string } value - Height of each item in the picker.
     * <br>For the number type, the value range is [0, +∞]. For the string type,
     * <br>only numeric string values, for example, "56", are supported.
     * @returns { TextPickerAttribute }
     * @default 56 vp (selected) and 36 vp (unselected).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    defaultPickerItemHeight(value: number | string): TextPickerAttribute;
    /**
     * Sets the height of each item in the picker.
     *
     * @param { Optional<number | string> } height - Height of each item in the picker.
     * <br>For the number type, the value range is [0, +∞].
     * <br>For the string type, only numeric string values, for example, "56", are supported.
     * @default 56 vp (selected) and 36 vp (unselected).
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    defaultPickerItemHeight(height: Optional<number | string>): TextPickerAttribute;
    /**
     * Sets whether scrolling is loopable.
     *
     * @param { boolean } value - Whether scrolling is loopable. true: loopable; false: not loopable.
     * @default true
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Sets whether scrolling is loopable.
     *
     * @param { boolean } value - Whether scrolling is loopable. true: loopable; false: not loopable.
     * @default true
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    canLoop(value: boolean): TextPickerAttribute;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     * this API supports the undefined type for the isLoop parameter.
     *
     * @param { Optional<boolean> } isLoop - Whether scrolling is loopable. true: loopable; false: not loopable.
     * @default true
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    canLoop(isLoop: Optional<boolean>): TextPickerAttribute;
    /**
     * Sets the font color, font size, and font weight for the top and bottom items.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of the top and bottom items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the font color, font size, and font weight for the top and bottom items.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of the top and bottom items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    disappearTextStyle(value: PickerTextStyle): TextPickerAttribute;
    /**
     * Sets the font color, font size, and font weight for the top and bottom items.
     * This API supports the undefined type for the style parameter.
     *
     * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of the top and bottom items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    disappearTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;
    /**
     * Sets the font color, font size, and font weight for all items except the top, bottom, and selected items.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of all items except the top,
     * <br>bottom, and selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the font color, font size, and font weight for all items except the top, bottom, and selected items.
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textStyle(value: PickerTextStyle): TextPickerAttribute;
    /**
     * Sets the font color, font size, and font weight for all items except the top, bottom, and selected items.
     * This API supports the undefined type for the style parameter.
     *
     * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of all
     * <br>items except the top, bottom, and selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    textStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;
    /**
     * Sets the font color, font size, and font weight for the selected item.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of the selected item..
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the font color, font size, and font weight for the selected item.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of the selected item.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedTextStyle(value: PickerTextStyle): TextPickerAttribute;
    /**
     * Sets the font color, font size, and font weight for the selected item.
     * This API supports the undefined type for the style parameter.
     *
     * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of the selected item.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    selectedTextStyle(style: Optional<PickerTextStyle>): TextPickerAttribute;
    /**
     * Sets whether to enable the text style change animation during the scrolling process.
     *
     * @param { boolean } disabled
     * @default false
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    disableTextStyleAnimation(disabled: boolean): TextPickerAttribute;
    /**
     * Sets the style of the text items when the text style change animation during the scrolling process is disabled.
     *
     * @param { TextPickerTextStyle } style
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    defaultTextStyle(style: TextPickerTextStyle): TextPickerAttribute;
    /**
     * Triggered when the OK button in the dialog box is clicked.
     *
     * @param { function } callback
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    onAccept(callback: (value: string, index: number) => void): TextPickerAttribute;
    /**
     * Triggered when the Cancel button in the dialog box is clicked.
     *
     * @param { function } callback
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     */
    onCancel(callback: () => void): TextPickerAttribute;
    /**
     * Triggered when an item in the picker is selected.
     *
     * @param { function } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Triggered when an item in the picker is selected.
     * When the picker contains text only or both text and imagery,
     * value indicates the text of the selected item.
     * When the picker contains imagery only, value is empty.
     *
     * @param { function } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Triggered when an item in the picker is selected.
     * When the picker contains text only or both text and imagery,
     * value indicates the text of the selected item.
     * When the picker contains imagery only, value is empty.
     *
     * @param { function } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onChange(callback: (value: string | string[], index: number | number[]) => void): TextPickerAttribute;
    /**
     * Triggered when the text picker snaps to the selected item.
     * Compared to onChange, this API supports the undefined type for the callback parameter.
     *
     * @param { Optional<OnTextPickerChangeCallback> } callback - the callback of onChange.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onChange(callback: Optional<OnTextPickerChangeCallback>): TextPickerAttribute;
    /**
     * Triggered when the scrolling in the text picker stops.
     * If the scrolling is initiated by a gesture,
     * this event is triggered when the finger is lifted from the screen and the scrolling stops.
     *
     * @param { TextPickerScrollStopCallback } callback - Triggered when the scrolling
     * <br>in the text picker stops.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onScrollStop(callback: TextPickerScrollStopCallback): TextPickerAttribute;
    /**
     * Triggered when the scrolling in the text picker stops.
     * If the scrolling is initiated by a gesture,
     * this event is triggered when the finger is lifted from the screen and the scrolling stops.
     *
     * @param { Optional<TextPickerScrollStopCallback> } callback - Triggered when the scrolling
     * <br>in the text picker stops.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onScrollStop(callback: Optional<TextPickerScrollStopCallback>): TextPickerAttribute;
    /**
     * Triggered during the scrolling of the text picker when an item enters the divider area.
     * When the picker contains text only or a combination of images and text,
     * value indicates the text of the selected item. When the picker contains images only, value is empty.
     *
     * @param { TextPickerEnterSelectedAreaCallback } callback - Triggered during the scrolling of
     * <br>the text picker when an item enters the divider area.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onEnterSelectedArea(callback: TextPickerEnterSelectedAreaCallback): TextPickerAttribute;
    /**
     * Sets the index of the default selected item in the array.
     * Its priority is higher than that of the selected value in options.
     * For a single-column picker, use a value of the number type.
     * For a multi-column (linked) picker, use a value of the number[] type.
     *
     * @param { number | number[] } value - Index of the default selected item in the array.
     * @default 0
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the index of the default selected item in the array.
     * Its priority is higher than that of the selected value in options.
     * For a single-column picker, use a value of the number type.
     * For a multi-column (linked) picker, use a value of the number[] type.
     *
     * @param { number | number[] } value - Index of the default selected item in the array.
     * @default 0
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedIndex(value: number | number[]): TextPickerAttribute;
    /**
     * Sets the index of the default selected item in the array.
     * Its priority is higher than that of the selected value in options.
     * For a single-column picker, use a value of the number type. For a multi-column (linked) picker,
     * use a value of the number[] type. Compared to [selectedIndex](#selectedindex10),
     * this API supports the undefined type for the index parameter.
     *
     * @param { Optional<number | number[]> } index - Index of the default selected item in the array.
     * <br>The index is zero-based.<br>If index is set to undefined, the default value 0 is used.
     * @default 0
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    selectedIndex(index: Optional<number | number[]>): TextPickerAttribute;
    /**
     * Sets the divider style.
     *
     * @param { DividerOptions | null } value
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    divider(value: DividerOptions | null): TextPickerAttribute;
    /**
     * Sets the divider style.
     *
     * @param { Optional<DividerOptions | null> } textDivider
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    divider(textDivider: Optional<DividerOptions | null>): TextPickerAttribute;
    /**
     * Sets the height for the fade effect.
     * If this attribute is not set, the default fade effect is displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Avoid changing the attribute data during the animation process of this component.
     * </p>
     *
     * @param { Dimension } value - Height of the fade effect at the top and bottom edges of the content area.
     * @default 36vp
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    gradientHeight(value: Dimension): TextPickerAttribute;
    /**
     * Specifies whether to enable haptic feedback.
     *
     * @param { Optional<boolean> } enable - Whether to enable haptic feedback.
     * @default true
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    enableHapticFeedback(enable: Optional<boolean>): TextPickerAttribute;
    /**
     * Sets the height for the fade effect.
     * If this attribute is not set, the default fade effect is displayed.
     * this API supports the undefinedtype for the height parameter.
     *
     * <p><strong>NOTE</strong>:
     * <br>Avoid changing the attribute data during the animation process of this component.
     * </p>
     *
     * @param { Optional<Dimension> } height - THeight of the fade effect at the top and bottom edges of
     * <br>the content area.
     * @default 36vp
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    gradientHeight(height: Optional<Dimension>): TextPickerAttribute;
    /**
     * Sets the sensitivity to the digital crown rotation.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity to the digital crown rotation.
     * @default CrownSensitivity.MEDIUM
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TextPickerAttribute;
    /**
     * Sets the background style of selected items.
     *
     * @param { Optional<PickerBackgroundStyle> } style - the background style of selected items.
     * @returns { TextPickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    selectedBackgroundStyle(style: Optional<PickerBackgroundStyle>): TextPickerAttribute;
}
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the struct of TextPickerResult.
 *
 * @interface TextPickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerResult {
    /**
     * The currently selected value.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The currently selected value.
     * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
     *
     * @type { string | string[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The currently selected value.
     * Only valid when only text is displayed.When picture or picture plus text is displayed, the value of value is "".
     *
     * @type { string | string[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: string | string[];
    /**
     * The subscript of the current selection.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The subscript of the current selection.
     *
     * @type { number | number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The subscript of the current selection.
     *
     * @type { number | number[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    index: number | number[];
}
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @extends TextPickerOptions
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @extends TextPickerOptions
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the TextPickerDialogOptions for Text Picker Dialog.
 *
 * @extends TextPickerOptions
 * @interface TextPickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TextPickerDialogOptions extends TextPickerOptions {
    /**
     * Called when the default height of the selected element is set.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the default height of the selected element is set.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Height of the picker item.
     *
     * @type { ?(number | string) }
     * @default 56 vp (selected) and 36 vp (unselected)
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    defaultPickerItemHeight?: number | string;
    /**
     * Can scroll loop if true is set, on the contrary it can not.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Whether to support scroll looping.
     * The value true means to support scroll looping, and false means the opposite.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    canLoop?: boolean;
    /**
     * Text style of disappearing items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Font color, font size, and font weight of the top and bottom items.
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    disappearTextStyle?: PickerTextStyle;
    /**
     * Text style of normal items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Font color, font size, and font weight of all items except the top, bottom, and selected items.
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textStyle?: PickerTextStyle;
    /**
     * Style of accept button.
     *
     * <p><strong>NOTE</strong>:
     * <br>In the acceptButtonStyle and cancelButtonStyle configurations,
     * <br>only one primary field can be set to true at most.
     * <br>If both the primary fields are set to true, neither will take effect.
     * </p>
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    acceptButtonStyle?: PickerDialogButtonStyle;
    /**
     * Style of cancel button.
     *
     * <p><strong>NOTE</strong>:
     * <br>In the acceptButtonStyle and cancelButtonStyle configurations,
     * <br>only one primary field can be set to true at most.
     * <br>If both the primary fields are set to true, neither will take effect.
     * </p>
     *
     * @type { ?PickerDialogButtonStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    cancelButtonStyle?: PickerDialogButtonStyle;
    /**
     * Text style of selected items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Font color, font size, and font weight of the selected item.
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedTextStyle?: PickerTextStyle;
    /**
     * Sets whether to enable the text style change animation during the scrolling process.
     * true: Disable the text style change animation.
     * false: Enable the text style change animation.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    disableTextStyleAnimation?: boolean;
    /**
     * Style of the text items when the text style change animation during the scrolling process is disabled.
     *
     * <p><strong>NOTE</strong>:
     * <br>It is effective only when disableTextStyleAnimation is true.
     * </p>
     *
     * @type { ?TextPickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    defaultTextStyle?: TextPickerTextStyle;
    /**
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback invoked when the OK button in the dialog box is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onAccept?: (value: TextPickerResult) => void;
    /**
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback invoked when the Cancel button in the dialog box is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onCancel?: () => void;
    /**
     * This event is triggered when a TextPicker text is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * This event is triggered when a TextPicker text is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback invoked when the text picker in the dialog box snaps to the selected item.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onChange?: (value: TextPickerResult) => void;
    /**
     * Callback invoked when the scrolling in the text picker of the dialog box stops.
     *
     * @type { ?Callback<TextPickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onScrollStop?: Callback<TextPickerResult>;
    /**
     * Represents the callback triggered during the scrolling of the text picker when an item enters the divider area.
     * Compared to the onChange event, this event is triggered earlier,
     * specifically when the scroll distance of the current column exceeds half the height of the selected item,
     * which indicates that the item has entered the divider area.
     *
     * <p><strong>NOTE</strong>:
     * <br>In scenarios where the picker contains linked columns,
     * <br>the use of this callback is not recommended.
     * <br>The reason is that it identifies nodes where items enter the divider area during scrolling.
     * <br>However, items that change in response to the scrolling do not themselves scroll. As a result,
     * <br>he callback's return values will only reflect changes for the currently scrolling column,
     * <br>while other non-scrolling columns will remain unchanged.
     * </p>
     *
     * @type { ?Callback<TextPickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onEnterSelectedArea?: Callback<TextPickerResult>;
    /**
     * Mask Region of dialog. The size cannot exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Mask area of the dialog box.
     * Events outside the mask area are transparently transmitted, and events within the mask area are not.
     *
     * @type { ?Rectangle }
     * @default { x: 0, y: 0, width: '100%', height: '100%' }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    maskRect?: Rectangle;
    /**
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Alignment mode of the dialog box in the vertical direction.
     *
     * @type { ?DialogAlignment }
     * @default DialogAlignment.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    alignment?: DialogAlignment;
    /**
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Offset of the dialog box based on the alignment settings.
     *
     * @type { ?Offset }
     * @default { dx: 0 , dy: 0 }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offset?: Offset;
    /**
     * Defines the textPickerDialog's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Backplane color of the dialog box.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;
    /**
     * Defines the textPickerDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Background blur style of the dialog box.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Options for customizing the background blur style.
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Options for customizing the background effect.
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Event callback when the dialog box appears.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows:
     * onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onDidAppear.
     * The settings take effect next time the dialog box appears.
     * <br>3. If the user closes the dialog box immediately after it appears,
     * onWillDisappearis invoked before onDidAppear.
     * <br>4. If the dialog box is closed before its entrance animation is finished, this callback is not invoked.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidAppear?: () => void;
    /**
     * Event callback when the dialog box disappears.
     *
     * <p><strong>NOTE</strong>:
     * <br>The normal timing sequence is as follows:
     * <br>onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidDisappear?: () => void;
    /**
     * Event callback when the dialog box is about to appear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows:
     * <br>onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onWillAppear.
     * <br>the settings take effect next time the dialog box appears.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     *
     * @since 12
     */
    onWillAppear?: () => void;
    /**
     * Event callback when the dialog box is about to disappear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows:
     * onWillAppear > onDidAppear > (onAccept/onCancel/onChange/onScrollStop) > onWillDisappear > onDidDisappear.
     * <br>2. If the user closes the dialog box immediately after it appears,
     * onWillDisappear is invoked before onDidAppear.
     * </p>
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDisappear?: () => void;
    /**
     * Shadow of the dialog box.
     * Default value on 2-in-1 devices: ShadowStyle.OUTER_FLOATING_MD when the dialog box is focused
     * and ShadowStyle.OUTER_FLOATING_SM otherwise.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Whether to enable the hover mode.
     *
     * @type { ?boolean }
     * @default false - meaning not to enable the hover mode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    enableHoverMode?: boolean;
    /**
     * Display area of the dialog box in hover mode.
     *
     * @type { ?HoverModeAreaType }
     * @default HoverModeAreaType.BOTTOM_SCREEN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    hoverModeArea?: HoverModeAreaType;
    /**
     * Whether to enable haptic feedback.
     * true (default): Haptic feedback is enabled.
     * false: Haptic feedback is disabled.
     *
     * <p><strong>NOTE</strong>:
     * <br>To enable haptic feedback, you must declare the ohos.permission.VIBRATE permission
     * <br>under requestPermissions in the module.json5 file of the project.
     * <br>"requestPermissions": [{"name": "ohos.permission.VIBRATE"}].
     * </p>
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    enableHapticFeedback?: boolean;
    /**
     * Background style of selected items.
     *
     * @type { ?PickerBackgroundStyle }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 20
     */
    selectedBackgroundStyle?: PickerBackgroundStyle;
}
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextPickerDialog which uses show method to show TextPicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * A text picker dialog box is a dialog box that allows users to select text from the given range.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class TextPickerDialog {
    /**
     * Invoking method display.
     *
     * @param { TextPickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoking method display.
     *
     * @param { TextPickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Shows a text picker in the given settings.
     *
     * @param { TextPickerDialogOptions } options - Parameters of the text picker dialog box.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.UIContext#showTextPickerDialog
     */
    static show(options?: TextPickerDialogOptions);
}
/**
 * Defines TextPicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextPicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Creates a text picker based on the selection range specified by range.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextPicker: TextPickerInterface;
/**
 * Defines TextPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TextPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TextPicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TextPickerInstance: TextPickerAttribute;
