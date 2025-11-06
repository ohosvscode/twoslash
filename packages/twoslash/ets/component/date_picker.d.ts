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
 * Defines the struct of DatePickerResult.
 *
 * @interface DatePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the struct of DatePickerResult.
 *
 * @interface DatePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the struct of DatePickerResult.
 *
 * @interface DatePickerResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface DatePickerResult {
    /**
     * Application year
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Application year
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Year of the selected date.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: depends on start and end.
     * If start and end are not set, the default range is [1970, 2100].
     * </p>
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    year?: number;
    /**
     * Application month
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Application month
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Month index of the selected date.
     * The index is zero-based. 0 indicates January, and 11 indicates December.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: depends on start and end. If start and end are not set, the default range is [0, 11].
     * </p>
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    month?: number;
    /**
     * Application day
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Application day
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Day of the selected date.
     *
     * <p><strong>NOTE</strong>:
     * <br>Value range: depends on start and end. If start and end are not set, the default range is [1, 31].
     * </p>
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    day?: number;
}
/**
 * Defines the mode of the date picker.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum DatePickerMode {
    /**
     * The date displays three columns: year, month, and day.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    DATE = 0,
    /**
     * The date displays two columns: year and month.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    YEAR_AND_MONTH = 1,
    /**
     * Defines a mode that displays the date in months and days of the month.
     * In this mode, if the month changes from December to January,
     * the year does not increment by one; if the month changes from January to December,
     * the year does not decrement by one. The year remains fixed at the currently set value.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    MONTH_AND_DAY = 2
}
/**
 * Defines the options of DatePicker.
 *
 * @interface DatePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the options of DatePicker.
 *
 * @interface DatePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Parameters of the date picker.
 *
 * @interface DatePickerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface DatePickerOptions {
    /**
     * Specifies the start date of the date selector.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Specifies the start date of the date selector.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Start date of the picker.
     *
     * @type { ?Date }
     * @default Date('1970-1-1')
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    start?: Date;
    /**
     * Specifies the end date for the date selector.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Specifies the end date for the date selector.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * End date of the picker.
     *
     * @type { ?Date }
     * @default Date('2100-12-31')
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    end?: Date;
    /**
     * Specifies the date selector check date or time selector check time.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Specifies the date selector check date or time selector check time.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Date of the selected item.
     *
     * @type { ?Date }
     * @default current system date
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selected?: Date;
    /**
     * Date columns to be displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>In DatePickerDialog, with showTime=true, this parameter has no effect and the default three columns for year,
     * <br>month, and day are displayed.
     * </p>
     *
     * @type { ?DatePickerMode }
     * @default DatePickerMode.DATE - which means to display three columns: year, month, and day.
     * <br>Decimal values are rounded off.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    mode?: DatePickerMode;
}
/**
 * Defines the DatePicker Component.
 *
 * @interface DatePickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the DatePicker Component.
 *
 * @interface DatePickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Creates a date picker in the given date range.
 *
 * @interface DatePickerInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
interface DatePickerInterface {
    /**
     * Defines the DatePicker constructor.
     *
     * @param { DatePickerOptions } options
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines the DatePicker constructor.
     *
     * @param { DatePickerOptions } options
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Parameters of the date picker.
     *
     * @param { DatePickerOptions } options - Parameters of the date picker.
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (options?: DatePickerOptions): DatePickerAttribute;
}
/**
 * Defines the DatePicker attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the DatePicker attribute functions.
 *
 * @extends CommonMethod
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the DatePicker attribute functions.
 *
 * @extends CommonMethod<DatePickerAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class DatePickerAttribute extends CommonMethod<DatePickerAttribute> {
    /**
     * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
     *
     * @param { boolean } value
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
     *
     * @param { boolean } value
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Specifies whether to display the lunar calendar.
     *
     * @param { boolean } value - Whether to display the lunar calendar.
     * <br>- <em>true</em>: Display the lunar calendar.
     * <br>- <em>false</em>: Do not display the lunar.
     * @default false
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    lunar(value: boolean): DatePickerAttribute;
    /**
     * Specifies whether to display the lunar calendar.
     * This API supports the undefined type for the isLunar parameter.
     *
     * @param { Optional<boolean> } isLunar - Whether to display the lunar calendar.
     * <br>- <em>true</em>: Display the lunar calendar.
     * <br>- <em>false</em>: Do not display the lunar.
     * @default false
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    lunar(isLunar: Optional<boolean>): DatePickerAttribute;
    /**
     * Sets the text style of disappearing items
     *
     * @param { PickerTextStyle } value - indicates the text style of disappearing items.
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style for the top and bottom items.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of the top and bottom items.
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    disappearTextStyle(value: PickerTextStyle): DatePickerAttribute;
    /**
     * Sets the text style for the top and bottom items.
     * This API supports the undefined type for the style parameter.
     *
     * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of the top and bottom items.
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    disappearTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;
    /**
     * Sets the text style of normal items
     *
     * @param { PickerTextStyle } value - indicates the text style of normal items.
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style for all items except the top, bottom, and selected items.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of all items except the top,
     * <br>bottom, and selected items.
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textStyle(value: PickerTextStyle): DatePickerAttribute;
    /**
     * Sets the text style for all items except the top, bottom, and selected items.
     * This API supports the undefined type for the style parameter.
     *
     * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of all items except the top,
     * <br>bottom, and selected items.
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    textStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;
    /**
     * Sets the text style of selected items
     *
     * @param { PickerTextStyle } value - indicates the text style of selected items.
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the text style for the selected item.
     *
     * @param { PickerTextStyle } value - Font color, font size, and font weight of the selected item.
     * @default {<br>color: '#ff007dff',<br>font: {<br>size: '20vp', <br>weight: FontWeight.Medium<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    selectedTextStyle(value: PickerTextStyle): DatePickerAttribute;
    /**
     * Sets the text style for the selected item.
     * this API supports the undefined type for the style parameter.
     *
     * @param { Optional<PickerTextStyle> } style - Font color, font size, and font weight of the selected item.
     * @default {<br>color: '#ff007dff',<br>font: {<br>size: '20vp', <br>weight: FontWeight.Medium<br>}<br>}
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    selectedTextStyle(style: Optional<PickerTextStyle>): DatePickerAttribute;
    /**
     * Triggered when a date is selected.
     *
     * @param { function } callback
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     * @useinstead datePicker/DatePickerAttribute#onDateChange
     */
    onChange(callback: (value: DatePickerResult) => void): DatePickerAttribute;
    /**
     * This event is triggered when a DatePicker date or time is selected.
     *
     * @param { function } callback
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * This event is triggered when a DatePicker date or time is selected.
     *
     * @param { function } callback
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when a date is selected.
     * Anonymous Object Rectification.
     *
     * @param { Callback<Date> } callback
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDateChange(callback: Callback<Date>): DatePickerAttribute;
    /**
     * Triggered when a date is selected.
     *
     * @param { Optional<Callback<Date>> } callback
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDateChange(callback: Optional<Callback<Date>>): DatePickerAttribute;
    /**
     * Sets the sensitivity to the digital crown rotation.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - Sensitivity to the digital crown rotation.
     * @default CrownSensitivity.MEDIUM
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): DatePickerAttribute;
    /**
     * Sets whether to enable haptic feedback.
     *
     * @param { Optional<boolean> } enable - Whether to enable haptic feedback.
     * <br>true (default): Haptic feedback is enabled.
     * <br>false: Haptic feedback is disabled.
     * @default true
     * @returns { DatePickerAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    enableHapticFeedback(enable: Optional<boolean>): DatePickerAttribute;
}
/**
 * Defines the style of the lunar calendar switch in the DatePickerDialog component.
 *
 * @interface LunarSwitchStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface LunarSwitchStyle {
    /**
     * Background color of the switch when it is on.
     *
     * @type { ?ResourceColor }
     * @default $r('sys.color.ohos_id_color_text_primary_actived')
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    selectedColor?: ResourceColor;
    /**
     * Border color of the switch when it is off.
     *
     * @type { ?ResourceColor }
     * @default $r('sys.color.ohos_id_color_switch_outline_off')
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    unselectedColor?: ResourceColor;
    /**
     * Color of the icon inside the switch.
     *
     * @type { ?ResourceColor }
     * @default Color.White
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    strokeColor?: ResourceColor;
}
/**
 * Defines the DatePickerDialogOptions for Data Picker Dialog.
 *
 * @extends DatePickerOptions
 * @interface DatePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the DatePickerDialogOptions for Data Picker Dialog.
 *
 * @extends DatePickerOptions
 * @interface DatePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Parameters of the date picker dialog box.
 *
 * @extends DatePickerOptions
 * @interface DatePickerDialogOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface DatePickerDialogOptions extends DatePickerOptions {
    /**
     * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Date selector: true: displays the lunar calendar. false: The lunar calendar is not displayed.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to display the lunar calendar.
     * The value true means to display the lunar calendar, and false means the opposite.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    lunar?: boolean;
    /**
     * Whether to show the switch to display the lunar.
     *
     * @type { ?boolean } value - indicates whether to show the switch to display the lunar.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to display the lunar calendar switch.
     * The value true means to display the lunar calendar switch, and false means the opposite.
     *
     * @type { ?boolean } value - indicates whether to show the switch to display the lunar.
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    lunarSwitch?: boolean;
    /**
     * Style of the lunar calendar switch.
     *
     * @type { ?LunarSwitchStyle }
     * @default { selectedColor: $r('sys.color.ohos_id_color_text_primary_actived'),
     * <br>unselectedColor: $r('sys.color.ohos_id_color_switch_outline_off'), strokeColor: Color.White }.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    lunarSwitchStyle?: LunarSwitchStyle;
    /**
     * Indicates whether to show the time selector.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to display the time item.
     * The value true means to display the time item, and false means the opposite.
     *
     * <p><strong>NOTE</strong>:
     * <br>With showTime=true, the mode parameter has no effect and the default three columns for year,
     * <br>month, and day are displayed.
     * </p>
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    showTime?: boolean;
    /**
     * Indicates whether to display the 24-hour clock.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to display time in 24-hour format.
     * The value true means to display time in 24-hour format, and false means the opposite.
     *
     * <p><strong>NOTE</strong>:
     * <br>When the display time is in 12-hour format, the AM/PM zone does not change depending on the hour portion.
     * </p>
     *
     * @type { ?boolean }
     * @default false
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
     * Font color, font size, and font width for the top and bottom items.
     *
     * @type { ?PickerTextStyle }
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '14fp', <br>weight: FontWeight.Regular<br>}<br>}
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
     * Font color, font size, and font width of all items except the top, bottom, and selected items.
     *
     * @type { ?PickerTextStyle }
     * @default {<br>color: '#ff182431',<br>font: {<br>size: '16fp', <br>weight: FontWeight.Regular<br>}<br>}
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
     * Font color, font size, and font width of the selected item.
     *
     * @type { ?PickerTextStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Font color, font size, and font width of the selected item.
     *
     * @type { ?PickerTextStyle }
     * @default {<br>color: '#ff007dff',<br>font: {<br>size: '20vp', <br>weight: FontWeight.Medium<br>}
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
     * Callback invoked when the OK button in the dialog box is clicked.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     * @useinstead datePicker/DatePickerDialogOptions#onDateAccept
     */
    onAccept?: (value: DatePickerResult) => void;
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
    /**
     * Callback invoked when the Cancel button in the dialog box is clicked.
     * Anonymous Object Rectification.
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onCancel?: VoidCallback;
    /**
     * Callback invoked when the selected item in the picker changes.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     * @useinstead datePicker/DatePickerDialogOptions#onDateChange
     */
    onChange?: (value: DatePickerResult) => void;
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
    /**
     * Callback invoked when the OK button in the dialog box is clicked.
     *
     * <p><strong>NOTE</strong>:
     * <br>When showTime is set to true, the hour and minute in the value returned by
     * <br>the callback are the hour and minute selected in the picker. Otherwise,
     * <br>the hour and minute are the hour and minute of the system time.
     * </p>
     *
     * @type { ?Callback<Date> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDateAccept?: Callback<Date>;
    /**
     * This event is triggered when a DatePicker date or time is selected in dialog.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback invoked when the selected item in the picker changes.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Callback invoked when the selected item in the picker changes.
     * Anonymous Object Rectification.
     *
     * <p><strong>NOTE</strong>:
     * <br>When showTime is set to true, the hour and minute in the value returned by
     * <br>the callback are the hour and minute selected in the picker. Otherwise,
     * <br>the hour and minute are the hour and minute of the system time.
     * </p>
     *
     * @type { ?Callback<Date> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDateChange?: Callback<Date>;
    /**
     * Defines the datePickerDialog's background color
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
     * Defines the datePickerDialog's background blur Style
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
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Event callback when the dialog box appears.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * (onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onDidAppear.
     * The settings take effect next time the dialog box appears.
     * <br>3. If the user closes the dialog box immediately after it appears,
     * onWillDisappear is invoked before onDidAppear.
     * <br>4. If the dialog box is closed before its entrance animation is finished,
     * this callback is not invoked.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDidAppear?: VoidCallback;
    /**
     * Callback function when the dialog disappears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Event callback when the dialog box disappears.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * <br>(onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDidDisappear?: VoidCallback;
    /**
     * Callback function before the dialog openAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Event callback when the dialog box is about to appear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * (onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * <br>2. You can set the callback event for changing the dialog box display effect in onWillAppear.
     * The settings take effect next time the dialog box appears.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onWillAppear?: VoidCallback;
    /**
     * Callback function before the dialog closeAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Event callback when the dialog box is about to disappear.
     *
     * <p><strong>NOTE</strong>:
     * <br>1. The normal timing sequence is as follows: onWillAppear > onDidAppear >
     * (onDateAccept/onCancel/onDateChange) > onWillDisappear > onDidDisappear.
     * <br>2. If the user closes the dialog box immediately after it appears,
     * onWillDisappear is invoked before onDidAppear.
     * </p>
     *
     * @type { ?VoidCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onWillDisappear?: VoidCallback;
    /**
     * Shadow of the dialog box.
     * Default value on 2-in-1 devices: ShadowStyle.OUTER_FLOATING_MD
     * when the dialog box is focused and ShadowStyle.OUTER_FLOATING_SM
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Whether to display a leading zero for the hours and minutes.
     *
     * <p><strong>NOTE</strong>:
     * <br>Currently only the configuration of the hour and minute parameters is supported.
     * </p>
     *
     * @type { ?DateTimeOptions }
     * @default hour: In the 24-hour format, it defaults to 2-digit, which means a leading zero is used;
     * <br>In the 12-hour format, it defaults to numeric, which means no leading zero is used.
     * <br>minute: defaults to 2-digit, which means a leading zero is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dateTimeOptions?: DateTimeOptions;
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
     * The value true means to enable haptic feedback, and false means the opposite
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
 * Defines DatePickerDialog which uses show method to show DatePicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines DatePickerDialog which uses show method to show DatePicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines DatePickerDialog which uses show method to show DatePicker dialog.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class DatePickerDialog {
    /**
     * Invoking method display.
     *
     * @param { DatePickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Invoking method display.
     *
     * @param { DatePickerDialogOptions } options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Shows a date picker dialog box.
     *
     * @param { DatePickerDialogOptions } options - Parameters of the date picker dialog box.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     * @deprecated since 18
     * @useinstead ohos.arkui.UIContext.UIContext#showDatePickerDialog
     */
    static show(options?: DatePickerDialogOptions);
}
/**
 * Defines DatePicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines DatePicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines DatePicker Component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const DatePicker: DatePickerInterface;
/**
 * Defines DatePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines DatePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines DatePicker Component instance.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const DatePickerInstance: DatePickerAttribute;
