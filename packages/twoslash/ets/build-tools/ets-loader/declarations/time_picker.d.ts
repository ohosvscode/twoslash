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
 * Defines the struct of TimePickerResult.
 *
 * @interface TimePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the struct of TimePickerResult.
 *
 * @interface TimePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the struct of TimePickerResult.
 *
 * @interface TimePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TimePickerResult {
    /**
     * Application hour
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Application hour
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Hour portion of the selected time.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hour: number;
    /**
     * Application minute
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Application minute
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Minute portion of the selected time.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    minute: number;
    /**
     * Second portion of the selected time.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    second: number;
}
/**
 * Type of the TimePicker that need to be displayed.
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Type of the TimePicker that need to be displayed.
 * @enum {number}
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum TimePickerFormat {
    /**
     * Hour and minute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Hour and minute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    HOUR_MINUTE,
    /**
     * Hour and minute and second
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Hour and minute and second
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    HOUR_MINUTE_SECOND
}
/**
 * Defines the options of TimePicker.
 *
 * @interface TimePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of TimePicker.
 *
 * @interface TimePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of TimePicker.
 *
 * @interface TimePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TimePickerOptions {
    /**
     * Specifies the time selector check time.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Specifies the time selector check time.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Specifies the time selector check time.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selected?: Date;
    /**
     * Specifies the format of the TimePicker that need to be displayed.
     *
     * @type { ?TimePickerFormat }
     * @default HOUR_MINUTE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Specifies the format of the TimePicker that need to be displayed.
     *
     * @type { ?TimePickerFormat }
     * @default HOUR_MINUTE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    format?: TimePickerFormat;
    /**
     * Defines the start time of the time picker.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    start?: Date;
    /**
     * Defines the end time of the time picker.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    end?: Date;
}
/**
 * Defines the TimePicker Component.
 *
 * @interface TimePickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the TimePicker Component.
 *
 * @interface TimePickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the TimePicker Component.
 *
 * @interface TimePickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface TimePickerInterface {
    /**
     * Defines the TimePicker constructor.
     *
     * @param { TimePickerOptions } options
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines the TimePicker constructor.
     *
     * @param { TimePickerOptions } options
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the TimePicker constructor.
     *
     * @param { TimePickerOptions } options
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (options?: TimePickerOptions): TimePickerAttribute;
}
/**
 * Define the internationalization parameter format.
 *
 * @typedef { import('../../../api/@ohos.intl').default.DateTimeOptions } DateTimeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type DateTimeOptions = import('../../../api/@ohos.intl').default.DateTimeOptions;
/**
 * Callback of the timePicker time is selected event.
 *
 * @typedef {function} OnTimePickerChangeCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type OnTimePickerChangeCallback = (result: TimePickerResult) => void;
/**
 * Defines the TimePicker attribute functions.
 *
 * @extends CommonMethod<TimePickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the TimePicker attribute functions.
 *
 * @extends CommonMethod<TimePickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the TimePicker attribute functions.
 *
 * @extends CommonMethod<TimePickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class TimePickerAttribute extends CommonMethod<TimePickerAttribute> {
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @param { boolean } value
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @param { boolean } value
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @param { boolean } value
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    useMilitaryTime(value: boolean): TimePickerAttribute;
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @param { Optional<boolean> } isMilitaryTime
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    useMilitaryTime(isMilitaryTime: Optional<boolean>): TimePickerAttribute;
    /**
     * Sets whether to enable the wheel mode.
     * @param { boolean } value - indicates whether to enable the wheel mode.
     * @returns { TimePickerAttribute } the attribute of the time picker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Sets whether to enable the wheel mode.
     * @param { boolean } value - indicates whether to enable the wheel mode.
     * @returns { TimePickerAttribute } the attribute of the time picker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    loop(value: boolean): TimePickerAttribute;
    /**
     * Sets whether to enable the wheel mode.
     * @param { Optional<boolean> } isLoop - indicates whether to enable the wheel mode.
     * @returns { TimePickerAttribute } the attribute of the time picker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    loop(isLoop: Optional<boolean>): TimePickerAttribute;
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle } value - indicates the text style of disappearing items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle } value - indicates the text style of disappearing items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    disappearTextStyle(value: PickerTextStyle): TimePickerAttribute;
    /**
     * Sets the text style of disappearing items
     *
     * @param { Optional<PickerTextStyle> } style - indicates the text style of disappearing items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    disappearTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textStyle(value: PickerTextStyle): TimePickerAttribute;
    /**
     * Sets the text style of normal items
     *
     * @param { Optional<PickerTextStyle> } style - indicates the text style of normal items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    textStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle } value - indicates the text style of selected items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle } value - indicates the text style of selected items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedTextStyle(value: PickerTextStyle): TimePickerAttribute;
    /**
     * Sets the text style of selected items
     *
     * @param { Optional<PickerTextStyle> } style - indicates the text style of selected items.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    selectedTextStyle(style: Optional<PickerTextStyle>): TimePickerAttribute;
    /**
     * Set time format
     *
     * @param { DateTimeOptions } value - indicates the format of the time display.
     * @returns { TimePickerAttribute } the attribute of the time picker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
    */
    dateTimeOptions(value: DateTimeOptions): TimePickerAttribute;
    /**
     * Set time format
     *
     * @param { Optional<DateTimeOptions> } timeFormat - indicates the format of the time display.
     * @returns { TimePickerAttribute } the attribute of the time picker
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
    */
    dateTimeOptions(timeFormat: Optional<DateTimeOptions>): TimePickerAttribute;
    /**
     * This event is triggered when a TimePicker time is selected.
     *
     * @param { function } callback
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * This event is triggered when a TimePicker time is selected.
     *
     * @param { function } callback
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * This event is triggered when a TimePicker time is selected.
     *
     * @param { function } callback
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onChange(callback: (value: TimePickerResult) => void): TimePickerAttribute;
    /**
     * This event is triggered when a TimePicker time is selected.
     *
     * @param { Optional<OnTimePickerChangeCallback> } callback
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onChange(callback: Optional<OnTimePickerChangeCallback>): TimePickerAttribute;
    /**
     * This event is triggered when an item enters the selected area.
     *
     * @param { Callback<TimePickerResult> } callback
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onEnterSelectedArea(callback: Callback<TimePickerResult>): TimePickerAttribute;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } enable - Default value is true, set false to disable haptic feedback.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    enableHapticFeedback(enable: boolean): TimePickerAttribute;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { Optional<boolean> } enable - Default value is true, set false to disable haptic feedback.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    enableHapticFeedback(enable: Optional<boolean>): TimePickerAttribute;
    /**
     * If the attribute is set, the crown rotation sensitivity can be changed.
     *
     * @param { Optional<CrownSensitivity> } sensitivity
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): TimePickerAttribute;
    /**
     * Defines whether the AM/PM option is cascaded with the time in 12-hour mode.
     *
     * @param { boolean } enabled - Default value is false, set true to enable.
     * @returns { TimePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    enableCascade(enabled: boolean): TimePickerAttribute;
}
/**
 * Defines the TimePickerDialogOptions for Data Picker Dialog.
 *
 * @extends TimePickerOptions
 * @interface TimePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the TimePickerDialogOptions for Data Picker Dialog.
 *
 * @extends TimePickerOptions
 * @interface TimePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the TimePickerDialogOptions for Data Picker Dialog.
 *
 * @extends TimePickerOptions
 * @interface TimePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TimePickerDialogOptions extends TimePickerOptions {
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Time Selector: indicates whether to display the 24-hour clock.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    useMilitaryTime?: boolean;
    /**
     * Text style of disappearing items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text style of disappearing items
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
     * Text style of normal items
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
     * Text style of selected items
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedTextStyle?: PickerTextStyle;
    /**
     * Mask Region of dialog. The size cannot exceed the main window.
     *
     * @type { ?Rectangle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Mask Region of dialog. The size cannot exceed the main window.
     *
     * @type { ?Rectangle }
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
     * Defines the dialog alignment of the screen.
     *
     * @type { ?DialogAlignment }
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
     * Defines the dialog offset.
     *
     * @type { ?Offset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offset?: Offset;
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
     * Called when the OK button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onAccept?: (value: TimePickerResult) => void;
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
     * Called when the Cancel button in the dialog is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onCancel?: () => void;
    /**
     * This event is triggered when a TimePicker Time or time is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * This event is triggered when a TimePicker Time or time is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * This event is triggered when a TimePicker Time or time is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onChange?: (value: TimePickerResult) => void;
    /**
     * This event is triggered when an item enters the selected area in dialog.
     *
     * @type { ?Callback<TimePickerResult> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onEnterSelectedArea?: Callback<TimePickerResult>;
    /**
     * Defines the timePickerDialog's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the timePickerDialog's background color
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
     * Defines the timePickerDialog's background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the timePickerDialog's background blur Style
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
     * Defines the timePickerDialog's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the timePickerDialog's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Defines whether the AM/PM option is cascaded with the time in 12-hour mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    enableCascade?: boolean;
    /**
     * Callback function when the dialog appears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidAppear?: () => void;
    /**
     * Callback function when the dialog disappears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDidDisappear?: () => void;
    /**
     * Callback function before the dialog openAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillAppear?: () => void;
    /**
     * Callback function before the dialog closeAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDisappear?: () => void;
    /**
     * Defines the dialog's shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Set time format
     *
     * @type { ?DateTimeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dateTimeOptions?: DateTimeOptions;
    /**
     * Defines whether to respond to the hover mode.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    enableHoverMode?: boolean;
    /**
     * Defines the dialog's display area in hover mode.
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
     * Enable or disable haptic feedback.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    enableHapticFeedback?: boolean;
}
/**
 * Defines TimePickerDialog which uses show method to show TimePicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TimePickerDialog which uses show method to show TimePicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TimePickerDialog which uses show method to show TimePicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class TimePickerDialog {
    /**
     * Invoking method display.
     *
     * @param { TimePickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoking method display.
     *
     * @param { TimePickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoking method display.
     *
     * @param { TimePickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.UIContext#showTimePickerDialog
     */
    static show(options?: TimePickerDialogOptions);
}
/**
 * Defines TimePicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TimePicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TimePicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TimePicker: TimePickerInterface;
/**
 * Defines TimePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines TimePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines TimePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const TimePickerInstance: TimePickerAttribute;
