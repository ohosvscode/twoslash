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
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the options of Component ClassDecorator.
 *
 * @interface ComponentOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare interface ComponentOptions {
    /**
     * freeze UI state.
     *
     * @type { boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * freeze UI state.
     *
     * @type { boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    freezeWhenInactive: boolean;
}
/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define the ratio of characters entered by the the percentage of InputCounterOptions.
 *
 * @interface InputCounterOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface InputCounterOptions {
    /**
     * It is the numerator bit of the percentage and used as a threshold. If the number of characters input
     * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * It is the numerator bit of the percentage and used as a threshold. If the number of characters input
     * reaches the maximum number of characters multiplied by this threshold, the counter is displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Threshold percentage for displaying the character counter.
     * <br>The character counter is displayed when the number of characters that have been entered is greater than
     * the maximum number of characters multiplied by the threshold percentage value.
     * <br>When displayed, the character counter is in the following format:
     * <br>Number of characters that have been entered/Maximum number of characters allowed.
     * <br>It is visible when the number of characters entered is greater than
     * the character limit multiplied by the threshold percentage value.
     * <br>Value range: [1, 100]
     * <br>If the value is not an integer, it is rounded down to the nearest integer.
     * <br>If the value exceeds the valid value range, the character counter is not displayed.
     * <br>If the value is <em>undefined</em>, the character counter is displayed, but this parameter has no effect.
     * </p>
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    thresholdPercentage?: number;
    /**
     * If the current input character count reaches the maximum character count and users want to exceed the
     * normal input, the border will turn red. If this parameter is true, the red border displayed.
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * If the current input character count reaches the maximum character count and users want to exceed the
     * normal input, the border will turn red. If this parameter is true, the red border displayed.
     *
     * <p><strong>NOTE</strong>:
     * <br>Whether to highlight the text box border and character counter subscript in red.
     * <br>If options is not set, the text box border and character counter subscript turn red
     * <br>when the number of characters entered reaches the limit.
     * <br>If the character counter is displayed and thresholdPercentage is set to a valid value,
     * the text box border and character counter subscript turn red when the number of entered characters exceeds the limit.
     * <br>The value true (default) means to highlight the text box border and character counter subscript in red.
     * </p>
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    highlightBorder?: boolean;
}
/**
 * Defines the options of decoration.
 *
 * @interface TextDecorationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface TextDecorationOptions {
    /**
     * The decoration type.
     *
     * @type { TextDecorationType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type: TextDecorationType;
    /**
     * Sets the color of decoration.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    color?: ResourceColor;
    /**
     * The style value of decoration.
     *
     * @type { ?TextDecorationStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    style?: TextDecorationStyle;
}
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Component ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Component ClassDecorator
 *
 * Component is a ClassDecorator and it supports ComponentOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Component: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);
/**
 * Defining ComponentV2 ClassDecorator
 *
 * ComponentV2 is a ClassDecorator and it supports ComponentOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const ComponentV2: ClassDecorator & ((options: ComponentOptions) => ClassDecorator);
/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 10
 */
/**
 * Defines the options of Entry ClassDecorator.
 *
 * @interface EntryOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @atomicservice
 * @since 11
 */
declare interface EntryOptions {
    /**
     * Named route name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 10
     */
    /**
     * Named route name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    routeName?: string;
    /**
     * LocalStorage to be passed.
     *
     * @type { ?LocalStorage }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 10
     */
    /**
     * LocalStorage to be passed.
     *
     * @type { ?LocalStorage }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    storage?: LocalStorage;
    /**
     * Determines whether to use the LocalStorage instance object returned by the LocalStorage.getShared() interface.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    useSharedStorage?: boolean;
}
/**
 * Defines Entry ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines Entry ClassDecorator.
 *
 * Entry is a ClassDecorator and it supports LocalStorage or EntryOptions as parameters.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Entry: ClassDecorator & ((options?: LocalStorage | EntryOptions) => ClassDecorator);
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Observed ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Observed: ClassDecorator;
/**
 * Defining ObservedV2 ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const ObservedV2: ClassDecorator;
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Preview ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Preview: ClassDecorator & ((value: PreviewParams) => ClassDecorator);
/**
 * Defining Require PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Require: PropertyDecorator;
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining BuilderParam PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const BuilderParam: PropertyDecorator;
/**
 * Defining Local PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Local: PropertyDecorator;
/**
 * Defining Param PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Param: PropertyDecorator;
/**
 * Defining Once PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Once: PropertyDecorator;
/**
 * Defining Event PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Event: PropertyDecorator;
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining State PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const State: PropertyDecorator;
/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defining Track PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const Track: PropertyDecorator;
/**
 * Defining Trace PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const Trace: PropertyDecorator;
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Prop PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Prop: PropertyDecorator;
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Link PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Link: PropertyDecorator;
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining ObjectLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const ObjectLink: PropertyDecorator;
/**
 * Defines the options of Provide PropertyDecorator.
 *
 * @interface ProvideOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ProvideOptions {
    /**
     * Override the @Provide of any parent or parent of parent @Component.@Provide({allowOverride: "name"}) is
     * also allowed to be used even when there is no ancestor @Component whose @Provide would be overridden.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    allowOverride?: string;
}
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Provide PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Provide: PropertyDecorator & ((value: string | ProvideOptions) => PropertyDecorator);
/**
 * Defining Provider PropertyDecorator, aliasName is the only matching key and if aliasName is the default, the default attribute name is regarded as aliasName.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Provider: (aliasName?: string) => PropertyDecorator;
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Consume PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Consume: PropertyDecorator & ((value: string) => PropertyDecorator);
/**
* Defining Consumer PropertyDecorator, aliasName is the only matching key and if aliasName is the default, the default attribute name is regarded as aliasName.
* And @Consumer will find the nearest @Provider.
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 12
*/
declare const Consumer: (aliasName?: string) => PropertyDecorator;
/**
* Defining Computed MethodDecorator.
*
* @syscap SystemCapability.ArkUI.ArkUI.Full
* @crossplatform
* @atomicservice
* @since 12
*/
declare const Computed: MethodDecorator;
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageProp PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const StorageProp: (value: string) => PropertyDecorator;
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining StorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const StorageLink: (value: string) => PropertyDecorator;
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Watch PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Watch: (value: string) => PropertyDecorator;
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Builder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Builder: MethodDecorator;
/**
 * Defining LocalBuilder MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare const LocalBuilder: MethodDecorator;
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Styles MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Styles: MethodDecorator;
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining Extend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Extend: MethodDecorator & ((value: any) => MethodDecorator);
/**
 * Define AnimatableExtend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define AnimatableExtend MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const AnimatableExtend: MethodDecorator & ((value: Object) => MethodDecorator);
/**
 * Define Monitor MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare const Monitor: MonitorDecorator;
/**
 * Define Monitor Decorator type
 *
 * @typedef { function } MonitorDecorator
 * @param { string } value - Monitored path input by the user
 * @param { string[] } args - Monitored path(s) input by the user
 * @returns { MethodDecorator } Monitor decorator
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type MonitorDecorator = (value: string, ...args: string[]) => MethodDecorator;
/**
 * Define IMonitor interface
 *
 * @interface IMonitor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface IMonitor {
    /**
     * Array of changed paths(keys)
     *
     * @type { Array<string> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dirty: Array<string>;
    /**
     * Return the pair of the value before the most recent change and current value for given path.
     * If path does not exist, return undefined; If path is not specified, return the value pair corresponding to the first path in dirty.
     *
     * @param { string } [path]
     * @returns { IMonitorValue<T> | undefined }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    value<T>(path?: string): IMonitorValue<T> | undefined;
}
/**
 * Define IMonitorValue interface
 *
 * @interface IMonitorValue<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface IMonitorValue<T> {
    /**
     * Get the previous value.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    before: T;
    /**
     * Get current value.
     *
     * @type { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    now: T;
    /**
     * Monitored path input by the user.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    path: string;
}
/**
 * The **AnimatableArithmetic** API defines the animation operation rules for
 * non-number data types. To animate non-number data (such as arrays, structs,
 * and colors), implement the addition, subtraction, multiplication, and
 * equality judgment functions in the **AnimatableArithmetic\<T\>** API.
 * In this way, the data can be involved in an interpolation operation of the
 * animation and identify whether the data changes, that is, the non-number data
 * is defined as the types that implement the **AnimatableArithmetic\<T\>** API.
 *
 * @interface AnimatableArithmetic
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * The **AnimatableArithmetic** API defines the animation operation rules for
 * non-number data types. To animate non-number data (such as arrays, structs,
 * and colors), implement the addition, subtraction, multiplication, and
 * equality judgment functions in the **AnimatableArithmetic\<T\>** API.
 * In this way, the data can be involved in an interpolation operation of the
 * animation and identify whether the data changes, that is, the non-number data
 * is defined as the types that implement the **AnimatableArithmetic\<T\>** API.
 *
 * @interface AnimatableArithmetic
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface AnimatableArithmetic<T> {
    /**
     * Defines the addition rule of the data type.
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the addition rule of the data type.
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    plus(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * Defines the subtraction rule of the data type.
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the subtraction rule of the data type.
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    subtract(rhs: AnimatableArithmetic<T>): AnimatableArithmetic<T>;
    /**
     * Defines the multiplication rule of the data type.
     *
     * @param { number } scale - scale value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the multiplication rule of the data type.
     *
     * @param { number } scale - scale value
     * @returns { AnimatableArithmetic<T> } new value which implements AnimatableArithmetic<T> interface
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    multiply(scale: number): AnimatableArithmetic<T>;
    /**
     * Defines the equality judgment rule of the data type.
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { boolean } is equals
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the equality judgment rule of the data type.
     *
     * @param { AnimatableArithmetic<T> } rhs - another value
     * @returns { boolean } is equals
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    equals(rhs: AnimatableArithmetic<T>): boolean;
}
/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining Concurrent MethodDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Concurrent: MethodDecorator;
/**
 * Defining Sendable ClassDecorator
 * The Sendable decorator can be used only for classes. A class with this decorator is marked as sendable, and the class object can be shared globally.
 * Since 12, the Sendable decorator can be used for function and typeAlias also.
 * A function with this decorator is marked as sendable, and the function can be an shareable property of sendable-class object.
 * A typeAlias with this decorator is marked as sendable, and the typeAlias can be used to declare properties, variables,
 * and arguments that need to be assigned with sendable-function.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Sendable: ClassDecorator;
/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining  CustomDialog ClassDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const CustomDialog: ClassDecorator;
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining LocalStorageLink PropertyDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const LocalStorageLink: (value: string) => PropertyDecorator;
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining LocalStorageProp PropertyDecorator
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const LocalStorageProp: (value: string) => PropertyDecorator;
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * If no component is passed in or the passed-in parameter type is invalid, the default context is returned.
 * The default context is the context obtained by tracing the call chain of the API.
 * If this API is used in an asynchronous callback or not initially called on the current page, the context of the
 * instance may fail to be traced. In this case, undefined is returned.
 * @returns { Context }
 * The context type depends on the ability type.
 * For example, if this API is called on a page of the UIAbility, the return value type is UIAbilityContext;
 * if this API is called on a page of the ExtensionAbility, the return value type is ExtensionContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @since 9
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * If no component is passed in or the passed-in parameter type is invalid, the default context is returned.
 * The default context is the context obtained by tracing the call chain of the API.
 * If this API is used in an asynchronous callback or not initially called on the current page, the context of the
 * instance may fail to be traced. In this case, undefined is returned.
 * @returns { Context }
 * The context type depends on the ability type.
 * For example, if this API is called on a page of the UIAbility, the return value type is UIAbilityContext;
 * if this API is called on a page of the ExtensionAbility, the return value type is ExtensionContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Obtains the Context object associated with a component on the page.
 *
 * @param { Object } component - indicate the component on the page.
 * If no component is passed in or the passed-in parameter type is invalid, the default context is returned.
 * The default context is the context obtained by tracing the call chain of the API.
 * If this API is used in an asynchronous callback or not initially called on the current page, the context of the
 * instance may fail to be traced. In this case, undefined is returned.
 * @returns { Context }
 * The context type depends on the ability type.
 * For example, if this API is called on a page of the UIAbility, the return value type is UIAbilityContext;
 * if this API is called on a page of the ExtensionAbility, the return value type is ExtensionContext.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#getHostContext
 */
declare function getContext(component?: Object): Context;
/**
 * Defining Reusable ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining Reusable ClassDecorator.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Reusable: ClassDecorator;
/**
 * Defining ReusableV2 ClassDecorator that is used to decorate @ComponentV2.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare const ReusableV2: ClassDecorator;
/**
  * ReuseId callback type. It is used to compute reuseId.
  *
  * @typedef { function } ReuseIdCallback
  * @returns { string }
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @atomicservice
  * @since 18
  */
declare type ReuseIdCallback = () => string;
/**
 * Defining the reusable configuration parameters.
 *
 * @interface ReuseOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface ReuseOptions {
    /**
     * Defining reuseId function. The default reuseId is the custom component name.
     *
     * @type { ?ReuseIdCallback }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    reuseId?: ReuseIdCallback;
}
/**
 * Get context.
 *
 * @typedef { import('../../../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @since 9
 */
/**
 * Get context.
 *
 * @typedef { import('../../../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @since 10
 */
/**
 * Get context.
 *
 * @typedef { import('../../../api/application/Context').default } Context
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type Context = import('../../../api/application/Context').default;
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @form
 * @since 9
 */
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Post Card Action.
 *
 * @param { Object } component - indicate the card entry component.
 * @param { Object } action - indicate the router, message or call event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @StageModelOnly
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare function postCardAction(component: Object, action: Object): void;
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Configuration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface Configuration {
    /**
     * Set colorMode.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set colorMode.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set colorMode.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set colorMode.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly colorMode: string;
    /**
     * Set fontScale.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set fontScale.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Set fontScale.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set fontScale.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    readonly fontScale: number;
}
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the data type of the interface restriction.
 *
 * @interface Rectangle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface Rectangle {
    /**
     * x:Horizontal coordinate
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * x:Horizontal coordinate
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * x:Horizontal coordinate
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * x:Horizontal coordinate
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    x?: Length;
    /**
     * y:Vertical axis coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * y:Vertical axis coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * y:Vertical axis coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * y:Vertical axis coordinate.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    y?: Length;
    /**
     * Sets the width of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the width of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the width of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the width of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    width?: Length;
    /**
     * Sets the height of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the height of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the height of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the height of the current touchRect.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    height?: Length;
}
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Interface for ExpectedFrameRateRange.
 *
 * @interface ExpectedFrameRateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare interface ExpectedFrameRateRange {
    /**
     * The minimum animation drawing FPS.
     * The minimum value should be less than or equal to the maximum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * The minimum animation drawing FPS.
     * The minimum value should be less than or equal to the maximum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * The minimum animation drawing FPS.
     * The minimum value should be less than or equal to the maximum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    min: number;
    /**
     * The maximum animation drawing FPS.
     * The maximum value should be greater than or equal to the minimum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
    */
    /**
     * The maximum animation drawing FPS.
     * The maximum value should be greater than or equal to the minimum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
    */
    /**
     * The maximum animation drawing FPS.
     * The maximum value should be greater than or equal to the minimum value.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    max: number;
    /**
     * The expected frame rate of dynamical callback rate range.
     * The value should be between the minimum and maximum value.
     * Otherwise, the actual callback rate will be dynamically
     * adjusted to better align with other animation sources.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
    */
    /**
     * The expected frame rate of dynamical callback rate range.
     * The value should be between the minimum and maximum value.
     * Otherwise, the actual callback rate will be dynamically
     * adjusted to better align with other animation sources.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
    */
    /**
     * The expected frame rate of dynamical callback rate range.
     * The value should be between the minimum and maximum value.
     * Otherwise, the actual callback rate will be dynamically
     * adjusted to better align with other animation sources.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    expected: number;
}
/**
 * global $r function
 *
 * @param { string } value
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $r function
 *
 * @param { string } value
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $r function
 *
 * @param { string } value
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * global $r function
 *
 * @param { string } value
 * The value format is 'belonging.type.name'.
 * belonging: group to which the resource belongs, which can be 'sys' or 'app'.
 * type: resource type, which can be 'boolean', 'color', 'float', 'intarray', 'integer', 'pattern', 'plural',
 * 'strarray', 'string', or 'media'.
 * name: resource name, which is determined during resource definition.
 * @param { any[] } params
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare function $r(value: string, ...params: any[]): Resource;
/**
 * global $rawfile function
 *
 * @param { string } value
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * global $rawfile function
 *
 * @param { string } value
 * name of the file in the resources/rawfile directory of the project.
 * When referencing resources of the Resource type, make sure the data type is the same as that of the attribute method.
 * For example, if an attribute method supports the string | Resource types, the data type of the Resource type must be
 * string.
 * @returns { Resource }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare function $rawfile(value: string): Resource;
/**
 * Defines the same page mode
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare enum AccessibilitySamePageMode {
    /**
    * the first page and root page event is not send.but if application load new page whith navigation,the page event will be sent.
    * this mode is to solve skipping focus
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SEMI_SILENT = 0,
    /**
     * the all page event is not send
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    FULL_SILENT = 1
}
/**
 * Enum for accessibility component type
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare enum AccessibilityRoleType {
    /**
    * ActionSheet component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    ACTION_SHEET = 0,
    /**
    * AlertDialog component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    ALERT_DIALOG = 1,
    /**
    * AlphabetIndexer component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    INDEXER_COMPONENT = 2,
    /**
    * badge component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    BADGE_COMPONENT = 3,
    /**
    * blank component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    BLANK = 4,
    /**
    * button component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    BUTTON = 5,
    /**
    * button component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    BACK_BUTTON = 6,
    /**
    * sheet drag bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SHEET_DRAG_BAR = 7,
    /**
    * calendar picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CALENDAR_PICKER = 8,
    /**
    * calendar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CALENDAR = 9,
    /**
    * canvas component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CANVAS = 10,
    /**
    * canvas gradient component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CANVAS_GRADIENT = 11,
    /**
    * canvas pattern component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CANVAS_PATTERN = 12,
    /**
    * checkbox component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CHECKBOX = 13,
    /**
    * checkbox group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CHECKBOX_GROUP = 14,
    /**
    * circle component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CIRCLE = 15,
    /**
    * column split component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    COLUMN_SPLIT = 16,
    /**
    * column component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    COLUMN = 17,
    /**
    * canvas rendering context 2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CANVAS_RENDERING_CONTEXT_2D = 18,
    /**
    * chart component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CHART = 19,
    /**
    * counter component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    COUNTER = 20,
    /**
    * counter modal component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    CONTAINER_MODAL = 21,
    /**
    * data panel component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    DATA_PANEL = 22,
    /**
    * data picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    DATE_PICKER = 23,
    /**
    * dialog component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    DIALOG = 24,
    /**
    * divider component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    DIVIDER = 25,
    /**
    * drag bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    DRAG_BAR = 26,
    /**
    * effect component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    EFFECT_COMPONENT = 27,
    /**
    * ellipse component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    ELLIPSE = 28,
    /**
    * flex component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    FLEX = 29,
    /**
    * flow item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    FLOW_ITEM = 30,
    /**
    * form component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    FORM_COMPONENT = 31,
    /**
    * form link component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    FORM_LINK = 32,
    /**
    * gauge component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    GAUGE = 33,
    /**
    * grid component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    GRID = 34,
    /**
    * grid col component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    GRID_COL = 35,
    /**
    * grid container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    GRID_CONTAINER = 36,
    /**
    * grid item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    GRID_ITEM = 37,
    /**
    * grid row component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    GRID_ROW = 38,
    /**
    * hyperlink component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    HYPERLINK = 39,
    /**
    * image component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    IMAGE = 40,
    /**
    * image animator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    IMAGE_ANIMATOR = 41,
    /**
    * image bitmap component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    IMAGE_BITMAP = 42,
    /**
    * image data component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    IMAGE_DATA = 43,
    /**
    * image span component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    IMAGE_SPAN = 44,
    /**
    * label component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    LABEL = 45,
    /**
    * line component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    LINE = 46,
    /**
    * list component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    LIST = 47,
    /**
    * list item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    LIST_ITEM = 48,
    /**
    * list item group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    LIST_ITEM_GROUP = 49,
    /**
    * loading progress component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    LOADING_PROGRESS = 50,
    /**
    * marquee component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    MARQUEE = 51,
    /**
    * matrix2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    MATRIX2D = 52,
    /**
    * menu component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    MENU = 53,
    /**
    * menu item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    MENU_ITEM = 54,
    /**
    * menu item group component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    MENU_ITEM_GROUP = 55,
    /**
    * navdestination component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    NAV_DESTINATION = 56,
    /**
    * navrouter component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    NAV_ROUTER = 57,
    /**
    * navigation component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    NAVIGATION = 58,
    /**
    * navigation bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    NAVIGATION_BAR = 59,
    /**
    * navigation menu component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    NAVIGATION_MENU = 60,
    /**
    * navigator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    NAVIGATOR = 61,
    /**
    * offscreen canvas component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    OFFSCREEN_CANVAS = 62,
    /**
    * offscreen canvas rendering context2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    OFFSCREEN_CANVAS_RENDERING_CONTEXT2D = 63,
    /**
    * option component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    OPTION = 64,
    /**
    * panel component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PANEL = 65,
    /**
    * paper page component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PAPER_PAGE = 66,
    /**
    * path component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PATH = 67,
    /**
    * path 2d component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PATH2D = 68,
    /**
    * pattern lock component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PATTERN_LOCK = 69,
    /**
    * picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PICKER = 70,
    /**
    * picker view component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PICKER_VIEW = 71,
    /**
    * plugin component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PLUGIN_COMPONENT = 72,
    /**
    * polygon component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    POLYGON = 73,
    /**
    * polyline component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    POLYLINE = 74,
    /**
    * pop up component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    POPUP = 75,
    /**
    * progress component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    PROGRESS = 76,
    /**
    * qr code component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    QRCODE = 77,
    /**
    * radio component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    RADIO = 78,
    /**
    * rating component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    RATING = 79,
    /**
    * rect component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    RECT = 80,
    /**
    * refresh component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    REFRESH = 81,
    /**
    * relative container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    RELATIVE_CONTAINER = 82,
    /**
    * remote window component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    REMOTE_WINDOW = 83,
    /**
    * rich editor component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    RICH_EDITOR = 84,
    /**
    * rich text component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    RICH_TEXT = 85,
    /**
    * rolepager component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    ROLE_PAGER = 86,
    /**
    * row component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    ROW = 87,
    /**
    * row split component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    ROW_SPLIT = 88,
    /**
    * scroll component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SCROLL = 89,
    /**
    * scroll bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SCROLL_BAR = 90,
    /**
    * search component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SEARCH = 91,
    /**
    * search field component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SEARCH_FIELD = 92,
    /**
    * select component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SELECT = 93,
    /**
    * shape component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SHAPE = 94,
    /**
    * sidebar container component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SIDEBAR_CONTAINER = 95,
    /**
    * slider component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SLIDER = 96,
    /**
    * span component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SPAN = 97,
    /**
    * stack component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    STACK = 98,
    /**
    * stepper component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    STEPPER = 99,
    /**
    * stepper item component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    STEPPER_ITEM = 100,
    /**
    * swiper component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SWIPER = 101,
    /**
    * swiper indicator component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SWIPER_INDICATOR = 102,
    /**
    * switch component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SWITCH = 103,
    /**
    * symbol glyph component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    SYMBOL_GLYPH = 104,
    /**
    * tab content component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TAB_CONTENT = 105,
    /**
    * tab bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TAB_BAR = 106,
    /**
    * tabs component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TABS = 107,
    /**
    * text component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT = 108,
    /**
    * text clock component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT_CLOCK = 109,
    /**
    * text entry component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT_ENTRY = 110,
    /**
    * text input component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT_INPUT = 111,
    /**
    * text picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT_PICKER = 112,
    /**
    * text timer component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT_TIMER = 113,
    /**
    * text area component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT_AREA = 114,
    /**
    * text field component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TEXT_FIELD = 115,
    /**
    * time picker component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TIME_PICKER = 116,
    /**
    * title bar component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TITLE_BAR = 117,
    /**
    * toggler component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    TOGGLER = 118,
    /**
    * uiextensioncomponent component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    UI_EXTENSION_COMPONENT = 119,
    /**
    * video component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    VIDEO = 120,
    /**
    * water flow component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    WATER_FLOW = 121,
    /**
    * web component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    WEB = 122,
    /**
    * xcomponent component type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    XCOMPONENT = 123,
    /**
    * none component type: screen reader will not broadcast the component type.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    ROLE_NONE = 124
}
/**
 * Defines the callback type used in accessibility focus. The value of isFocus indicates whether the current component is focused
 * @typedef {function} AccessibilityFocusCallback
 * @param {boolean} isFocus - if component is focused,isFocus will be true. else isFocus is false.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare type AccessibilityFocusCallback = (isFocus: boolean) => void;
/**
 * Enum for accessibility action type
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare enum AccessibilityAction {
    /**
    * undefined action type
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    UNDEFINED_ACTION = 0,
    /**
    * accessibility click action
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ACCESSIBILITY_CLICK = 1
}
/**
 * Enum for the result of accessibility action intercept function
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare enum AccessibilityActionInterceptResult {
    /**
    * intercept the accessibility action
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ACTION_INTERCEPT = 0,
    /**
    * the accessibility action can be continued
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ACTION_CONTINUE = 1,
    /**
    * the accessibility action need to bubble up for execution
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 20
    */
    ACTION_RISE = 2
}
/**
 * Defines the callback type used in accessibility action intercept.
 * The value of action indicates the accessibility action type.
 * @typedef { function } AccessibilityActionInterceptCallback
 * @param { AccessibilityAction } action - the enum of accessibility action type.
 * @returns { AccessibilityActionInterceptResult } the result of continuing to execute the action or interrupting it or bubbling up
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare type AccessibilityActionInterceptCallback = (action: AccessibilityAction) => AccessibilityActionInterceptResult;
/**
 * Enum for FinishCallbackType.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for FinishCallbackType.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum FinishCallbackType {
    /**
     * The callback is invoked when the entire animation is removed once it has finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * The callback is invoked when the entire animation is removed once it has finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    REMOVED = 0,
    /**
     * When the animation is logically down but may still be in its long tail, the callback is triggered.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
      * The callback is invoked when the animation logically enters the falling state,
      * though it may still be in its long tail state.
      *
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @form
      * @atomicservice
      * @since 12
     */
    LOGICALLY = 1
}
/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Defines the touch test strategy object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum TouchTestStrategy {
    /**
    * Do framework touch test.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @since 11
    */
    /**
     * Custom dispatch has no effect; the system distributes events based on the hit status of the current node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    DEFAULT = 0,
    /**
    * Specify the component to do touch test and follow the framework touch test
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @since 11
    */
    /**
     * The specified event is forwarded to a particular child node, and the system determines whether to
     * distribute the event to other sibling nodes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    FORWARD_COMPETITION = 1,
    /**
    * Specify the component to do touch test and not follow the framework touch test
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @since 11
    */
    /**
     * The specified event is forwarded to a particular child node, and the system no longer distributes
     * the event to other sibling nodes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    FORWARD = 2
}
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the animate function params.
 *
 * @interface AnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface AnimateParam {
    /**
     * Animation duration, in ms.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Animation duration, in ms.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Animation duration, in ms.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Animation duration, in ms.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    duration?: number;
    /**
     * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
     * animation playback. The value 0 means that there is no animation.
     * <br>Default value: **1.0**.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
     * animation playback. The value 0 means that there is no animation.
     * <br>Default value: **1.0**.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Animation playback speed. A larger value indicates faster animation playback, and a smaller value indicates slower
     * animation playback. The value 0 means that there is no animation.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    tempo?: number;
    /**
     * Animation curve.
     *
     * @type { ?(Curve | string) }
     * @default Curve.EaseInOut
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Animation curve.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default Curve.EaseInOut
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Animation curve.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default Curve.EaseInOut
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Animation curve.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default Curve.EaseInOut
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    curve?: Curve | string | ICurve;
    /**
     * Animation delay time, in ms. By default, the animation has no delay.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Animation delay time, in ms. By default, the animation has no delay.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Animation delay time, in ms. By default, the animation has no delay.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    delay?: number;
    /**
     * Number of times that the animation is played. By default, the animation is played once.
     * The value **-1** indicates that the animation is played for an unlimited number of times.
     * The value **0** indicates that there is no animation.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Number of times that the animation is played. By default, the animation is played once.
     * The value **-1** indicates that the animation is played for an unlimited number of times.
     * The value **0** indicates that there is no animation.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Number of times that the animation is played. By default, the animation is played once.
     * The value **-1** indicates that the animation is played for an unlimited number of times.
     * The value **0** indicates that there is no animation.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    iterations?: number;
    /**
     * Playback mode. By default, the animation is played from the beginning after the playback is complete.
     *
     * @type { ?PlayMode }
     * @default PlayMode.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Playback mode. By default, the animation is played from the beginning after the playback is complete.
     *
     * @type { ?PlayMode }
     * @default PlayMode.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Playback mode. By default, the animation is played from the beginning after the playback is complete.
     *
     * @type { ?PlayMode }
     * @default PlayMode.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Playback mode. By default, the animation is played from the beginning after the playback is complete.
     *
     * @type { ?PlayMode }
     * @default PlayMode.Normal
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    playMode?: PlayMode;
    /**
     * Callback invoked when the animation playback is complete.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Callback invoked when the animation playback is complete.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Callback invoked when the animation playback is complete.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Callback invoked when the animation playback is complete.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onFinish?: () => void;
    /**
     * Type of the **onFinish** callback.
     *
     * @type { ?FinishCallbackType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Type of the **onFinish** callback.
     * Default value: FinishCallbackType.REMOVED.
     *
     * @type { ?FinishCallbackType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    finishCallbackType?: FinishCallbackType;
    /**
     * Expected frame rate range of the animation.
     *
     * @type { ?ExpectedFrameRateRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Expected frame rate range of the animation.
     *
     * @type { ?ExpectedFrameRateRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Interface for curve object.
 *
 * @interface ICurve
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface ICurve {
    /**
     * Implements calculation.
     *
     * @param { number } fraction - Current normalized time. Value range: [0, 1].
     * <p>**NOTE**:
     * <br>A value less than 0 is handed as **0**. A value greater than 1 is handed as **1**.
     * </p>
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Implements calculation.
     *
     * @param { number } fraction - Current normalized time. Value range: [0, 1].
     * <p>**NOTE**:
     * <br>A value less than 0 is handed as **0**. A value greater than 1 is handed as **1**.
     * </p>
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Implements calculation.
     *
     * @param { number } fraction - Current normalized time. Value range: [0, 1].
     * <p>**NOTE**:
     * <br>A value less than 0 is handed as **0**. A value greater than 1 is handed as **1**.
     * </p>
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    interpolate(fraction: number): number;
}
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the motion path options.
 *
 * @interface MotionPathOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MotionPathOptions {
    /**
     * Motion path of the translation animation.
     * The **svg** path string is used.
     * In the value, **start** and **end** can be used in place of the start point and end point,
     * for example, **'Mstart.x start.y L50 50 Lend.x end.y Z'**.
     * If this parameter is set to an empty string, the path animation is not set.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Motion path of the translation animation.
     * The **svg** path string is used.
     * In the value, **start** and **end** can be used in place of the start point and end point,
     * for example, **'Mstart.x start.y L50 50 Lend.x end.y Z'**.
     * If this parameter is set to an empty string, the path animation is not set.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Motion path of the translation animation.
     * The **svg** path string is used.
     * In the value, **start** and **end** can be used in place of the start point and end point,
     * for example, **'Mstart.x start.y L50 50 Lend.x end.y Z'**.
     * If this parameter is set to an empty string, the path animation is not set.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    path: string;
    /**
     * Start point of the motion path.
     * Value range: [0, 1].
     * A value less than 0 or greater than 1 evaluates to the default value **0**.
     *
     * @type { ?number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Start point of the motion path.
     * Value range: [0, 1].
     * A value less than 0 or greater than 1 evaluates to the default value **0**.
     *
     * @type { ?number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Start point of the motion path.
     * Value range: [0, 1].
     * A value less than 0 or greater than 1 evaluates to the default value **0**.
     *
     * @type { ?number }
     * @default 0.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    from?: number;
    /**
     * End point of the motion path.
     * Value range: [0, 1].
     * A value less than 0 or greater than 1 evaluates to the default value **1**,
     * provided that the value of **to** is greater than or equal to the value of **from**.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * End point of the motion path.
     * Value range: [0, 1].
     * A value less than 0 or greater than 1 evaluates to the default value **1**,
     * provided that the value of **to** is greater than or equal to the value of **from**.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * End point of the motion path.
     * Value range: [0, 1].
     * A value less than 0 or greater than 1 evaluates to the default value **1**,
     * provided that the value of **to** is greater than or equal to the value of **from**.
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    to?: number;
    /**
     * Whether to rotate along the path.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Whether to rotate along the path.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to rotate along the path.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    rotatable?: boolean;
}
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the shard transition function params.
 *
 * @interface sharedTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface sharedTransitionOptions {
    /**
     * Animation duration, in ms.
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Animation duration.
     * <br>Default value: **1000**.
     * <br>Unit: ms.
     * <br>Value range: [0, +∞).
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Animation duration.
     * <br>Default value: **1000**.
     * <br>Unit: ms.
     * <br>Value range: [0, +∞).
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    duration?: number;
    /**
     * Animation curve.<br>You are advised to specify the curve using the Curve or ICurve type.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Animation curve.<br>You are advised to specify the curve using the **Curve** or
     * ** ICurve** type.<br>For the string type, this parameter indicates an animation
     * interpolation curve. For available values, see the **curve** parameter in
     * AnimateParam.
     * <br>Default value: **Curve.Linear**.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Animation curve.<br>You are advised to specify the curve using the **Curve** or
     * ** ICurve** type.<br>For the string type, this parameter indicates an animation
     * interpolation curve. For available values, see the **curve** parameter in
     * AnimateParam.
     * <br>Default value: **Curve.Linear**.
     *
     * @type { ?(Curve | string | ICurve) }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    curve?: Curve | string | ICurve;
    /**
     * Animation playback mode. By default, the animation is played from the beginning after the playback is complete.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Animation delay time, in ms.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Animation delay time, in ms.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    delay?: number;
    /**
     * The motion path info.
     *
     * @type { ?MotionPathOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The motion path info.
     *
     * @type { ?MotionPathOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The motion path info.
     *
     * @type { ?MotionPathOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    motionPath?: MotionPathOptions;
    /**
     * Z index info.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Z index info.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Z index info.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    zIndex?: number;
    /**
     * the animate type.
     *
     * @type { ?SharedTransitionEffectType }
     * @default SharedTransitionEffectType.Exchange
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * the animate type.
     *
     * @type { ?SharedTransitionEffectType }
     * @default SharedTransitionEffectType.Exchange
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * the animate type.
     *
     * @type { ?SharedTransitionEffectType }
     * @default SharedTransitionEffectType.Exchange
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    type?: SharedTransitionEffectType;
}
/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of geometry transition.
 *
 * @interface GeometryTransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface GeometryTransitionOptions {
    /**
     * whether follow target for the component still in the hierarchy, default: false, stay current.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * whether follow target for the component still in the hierarchy, default: false, stay current.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    follow?: boolean;
}
/**
 * Defines the options of linear gradient.
 *
 * @interface LinearGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface LinearGradientOptions {
    /**
     * angle: Angle of Linear Gradient. The default value is 180;
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * angle: Angle of Linear Gradient. The default value is 180;
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * angle: Angle of Linear Gradient. The default value is 180;
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * angle: Angle of Linear Gradient. The default value is 180;
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * angle: Angle of Linear Gradient. The default value is 180;
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines starting angle of linear gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 180
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    angle?: number | string;
    /**
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines the direction of linear gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?GradientDirection }
     * @default GradientDirection.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    direction?: GradientDirection;
    /**
     * colors: Color description for gradients.
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * colors: Color description for gradients.
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * colors: Color description for gradients.
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * colors: Color description for gradients.
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * colors: Color description for gradients.
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * repeating: repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * repeating: repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * repeating: repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * repeating: repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * repeating: repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    repeating?: boolean;
}
/**
 * Defines the options of radial gradient.
 *
 * @interface SweepGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface SweepGradientOptions {
    /**
     * center:is the center point of the angle gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * center:is the center point of the angle gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * center:is the center point of the angle gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * center:is the center point of the angle gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * center:is the center point of the angle gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines center point for angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    center: [
        Length,
        Length
    ];
    /**
     * start:Start point of angle gradient. The default value is 0
     *
     * @param { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * start:Start point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Angle Gradient
     * start:Start point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * start:Start point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * start:Start point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines the starting point of angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    start?: number | string;
    /**
     * end:End point of angle gradient. The default value is 0
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * end:End point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * end:End point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * end:End point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * end:End point of angle gradient. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines end point of angle gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    end?: number | string;
    /**
     * rotating:rotating. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * rotating:rotating. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * rotating:rotating. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * rotating:rotating. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * rotating:rotating. The default value is 0
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines the rotation angle of the gradient.
     *
     * Anonymous Object Rectification.
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    rotation?: number | string;
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * repeating:repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * repeating:repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * repeating:repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * repeating:repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * repeating:repeating. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    repeating?: boolean;
}
/**
 * Defines the options of radial gradient.
 *
 * @interface RadialGradientOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare interface RadialGradientOptions {
    /**
     * center:Center point of radial gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * center:Center point of radial gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * center:Center point of radial gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * center:Center point of radial gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * center:Center point of radial gradient
     *
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines center point for radial gradient.
     *
     * Anonymous Object Rectification.
     * @type { [Length, Length] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    center: [
        Length,
        Length
    ];
    /**
     * radius:Radius of Radial Gradient. value range [0, +∞)
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * radius:Radius of Radial Gradient. value range [0, +∞)
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * radius:Radius of Radial Gradient. value range [0, +∞)
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * radius:Radius of Radial Gradient. value range [0, +∞)
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * radius:Radius of Radial Gradient. value range [0, +∞)
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines radius of the radial gradient.
     *
     * Anonymous Object Rectification.
     * @type { Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    radius: Length;
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * colors:Color description for gradients
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines color description for gradients.
     *
     * Anonymous Object Rectification.
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * repeating: Refill. The default value is false
     *
     * @type { ?boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * repeating: Refill. The default value is false
     *
     * @type { ?boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * repeating: Refill. The default value is false
     *
     * @type { ?boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * repeating: Refill. The default value is false
     *
     * @type { ?boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * repeating: Refill. The default value is false
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Defines gradient colors with repeated coloring.
     *
     * Anonymous Object Rectification.
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    repeating?: boolean;
}
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of translate.
 *
 * @interface TranslateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface TranslateOptions {
    /**
     * Translation distance along the x-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of Length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Translation distance along the x-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of Length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Translation distance along the x-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of Length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Translation distance along the x-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    x?: number | string;
    /**
     * Translation distance along the y-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Translation distance along the y-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Translation distance along the y-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Translation distance along the y-axis.
     * For the number type, the unit is VP, and the value range is (-∞, +∞).
     * For the string type, the value follows the format of length string type.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    y?: number | string;
    /**
     * Distance to translate along the z-axis. The value is a floating
     * point number, the default value is 0.0, and the unit is px.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Distance to translate along the z-axis. The value is a floating
     * point number, the default value is 0.0, and the unit is px.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Distance to translate along the z-axis. The value is a floating
     * point number, the default value is 0.0, and the unit is px.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Distance to translate along the z-axis. The value is a floating
     * point number, the default value is 0.0, and the unit is px.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    z?: number | string;
}
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the options of scale.
 *
 * @interface ScaleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ScaleOptions {
    /**
     * Scale ratio along the x-axis.
     * x > 1: The component is scaled up along the x-axis.
     * 0 < x < 1: The component is scaled down along the x-axis.
     * x < 0: The component is scaled in the reverse direction of the x-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Scale ratio along the x-axis.
     * x > 1: The component is scaled up along the x-axis.
     * 0 < x < 1: The component is scaled down along the x-axis.
     * x < 0: The component is scaled in the reverse direction of the x-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Scale ratio along the x-axis.
     * x > 1: The component is scaled up along the x-axis.
     * 0 < x < 1: The component is scaled down along the x-axis.
     * x < 0: The component is scaled in the reverse direction of the x-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Scale ratio along the x-axis.
     * x > 1: The component is scaled up along the x-axis.
     * 0 < x < 1: The component is scaled down along the x-axis.
     * x < 0: The component is scaled in the reverse direction of the x-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    x?: number;
    /**
     * Scale ratio along the y-axis.
     * y > 1: The component is scaled up along the y-axis.
     * 0 < y < 1: The component is scaled down along the y-axis.
     * y < 0: The component is scaled in the reverse direction of the y-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Scale ratio along the y-axis.
     * y > 1: The component is scaled up along the y-axis.
     * 0 < y < 1: The component is scaled down along the y-axis.
     * y < 0: The component is scaled in the reverse direction of the y-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Scale ratio along the y-axis.
     * y > 1: The component is scaled up along the y-axis.
     * 0 < y < 1: The component is scaled down along the y-axis.
     * y < 0: The component is scaled in the reverse direction of the y-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Scale ratio along the y-axis.
     * y > 1: The component is scaled up along the y-axis.
     * 0 < y < 1: The component is scaled down along the y-axis.
     * y < 0: The component is scaled in the reverse direction of the y-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    y?: number;
    /**
     * Scale ratio along the z-axis. z > 1: The component is scaled up along the z-axis.
     * <br>0 < z < 1: The component is scaled down along the z-axis.
     * <br>z < 0: The component is scaled in the reverse direction of the z-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Scale ratio along the z-axis. z > 1: The component is scaled up along the z-axis.
     * <br>0 < z < 1: The component is scaled down along the z-axis.
     * <br>z < 0: The component is scaled in the reverse direction of the z-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Scale ratio along the z-axis. z > 1: The component is scaled up along the z-axis.
     * <br>0 < z < 1: The component is scaled down along the z-axis.
     * <br>z < 0: The component is scaled in the reverse direction of the z-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Scale ratio along the z-axis. z > 1: The component is scaled up along the z-axis.
     * <br>0 < z < 1: The component is scaled down along the z-axis.
     * <br>z < 0: The component is scaled in the reverse direction of the z-axis.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    z?: number;
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    centerX?: number | string;
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    centerY?: number | string;
}
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the align rule options of relative container.
 *
 * @interface AlignRuleOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface AlignRuleOption {
    /**
     * The param of left align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The param of left align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Left alignment.
     * <br>anchor: ID of the component that functions as the anchor point.
     * <br>align: alignment mode relative to the anchor component.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    left?: {
        anchor: string;
        align: HorizontalAlign;
    };
    /**
     * The param of right align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The param of right align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Right alignment.
     * <br>anchor: ID of the component that functions as the anchor point.
     * <br>align: alignment mode relative to the anchor component.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    right?: {
        anchor: string;
        align: HorizontalAlign;
    };
    /**
     * The param of middle align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The param of middle align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Horizontal center alignment.
     * <br>anchor: ID of the component that functions as the anchor point.
     * <br>align: alignment mode relative to the anchor component.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    middle?: {
        anchor: string;
        align: HorizontalAlign;
    };
    /**
     * The param of top align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The param of top align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Top alignment.
     * <br>anchor: ID of the component that functions as the anchor point.
     * <br>align: alignment mode relative to the anchor component.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    top?: {
        anchor: string;
        align: VerticalAlign;
    };
    /**
     * The param of bottom align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The param of bottom align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 10
     */
    /**
     * Bottom alignment.
     * <br>anchor: ID of the component that functions as the anchor point.
     * <br>align: alignment mode relative to the anchor component.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    bottom?: {
        anchor: string;
        align: VerticalAlign;
    };
    /**
     * The param of center align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The param of center align.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Vertical center alignment.
     * <br>anchor: ID of the component that functions as the anchor point.
     * <br>align: alignment mode relative to the anchor component.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    center?: {
        anchor: string;
        align: VerticalAlign;
    };
    /**
     * Defines the bias ratio in horizontal and vertical direction.
     *
     * @type { ?Bias }
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Offset of the component under the anchor constraints.
     * <br>The value is the ratio of the distance to the left/upper anchor to the total distance between anchors.
     *
     * @type { ?Bias }
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    bias?: Bias;
}
/**
 * Defines the localized horizontal align param of relative container.
 *
 * @interface LocalizedHorizontalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LocalizedHorizontalAlignParam {
    /**
     * ID of the component that serves as the anchor.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    anchor: string;
    /**
     * Horizontal alignment mode relative to the anchor component.
     *
     * @type { HorizontalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    align: HorizontalAlign;
}
/**
 * Defines the localized vertical align param of relative container.
 *
 * @interface LocalizedVerticalAlignParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LocalizedVerticalAlignParam {
    /**
     * ID of the component that serves as the anchor.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    anchor: string;
    /**
     * Vertical alignment mode relative to the anchor component.
     *
     * @type { VerticalAlign }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    align: VerticalAlign;
}
/**
 * Defines the Localized align rule options of relative container.
 *
 * @interface LocalizedAlignRuleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface LocalizedAlignRuleOptions {
    /**
     * Left alignment with left-to-right scripts and right alignment with right-to-left scripts in the horizontal direction.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    start?: LocalizedHorizontalAlignParam;
    /**
     * Right alignment with left-to-right scripts and left alignment with right-to-left scripts in the horizontal direction.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    end?: LocalizedHorizontalAlignParam;
    /**
     * Center alignment in the horizontal direction.
     *
     * @type { ?LocalizedHorizontalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    middle?: LocalizedHorizontalAlignParam;
    /**
     * Top alignment in the vertical direction.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    top?: LocalizedVerticalAlignParam;
    /**
     * Bottom alignment in the vertical direction.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bottom?: LocalizedVerticalAlignParam;
    /**
     * Center alignment in the vertical direction.
     *
     * @type { ?LocalizedVerticalAlignParam }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    center?: LocalizedVerticalAlignParam;
    /**
     * Offset of the component under the anchor constraints.
     * <br>The value is the ratio of the distance to the left/upper anchor to the total distance between anchors.
     *
     * @type { ?Bias }
     * @default {horizontal:0.5,vertical:0.5}
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bias?: Bias;
}
/**
 * Enumerates the chain styles in relative container.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum ChainStyle {
    /**
     * Child components are evenly distributed among constraint anchors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SPREAD,
    /**
     * All child components except the first and last ones are evenly distributed among constraint anchors.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SPREAD_INSIDE,
    /**
     * There is no gap between child components in the chain.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    PACKED
}
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * The param of rotate.
 *
 * @interface RotateOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface RotateOptions {
    /**
     * X coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * X coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * X coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * X coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    x?: number;
    /**
     * Y coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Y coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Y coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Y coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    y?: number;
    /**
     * Z coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Z coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Z coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Z coordinate of the rotation axis vector.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    z?: number;
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * X coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    centerX?: number | string;
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Y coordinate of the transformation center point (anchor). Unit is vp.
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    centerY?: number | string;
    /**
     * Z-axis anchor, that is, the z-component of the 3D rotation center point.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Z-axis anchor, that is, the z-component of the 3D rotation center point.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    centerZ?: number;
    /**
     * Distance from the user to the z=0 plane.
     * The axis and center of rotation are set based on the coordinate system,
     * which remains where it is when the component is moved.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Distance from the user to the z=0 plane.
     * The axis and center of rotation are set based on the coordinate system,
     * which remains where it is when the component is moved.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    perspective?: number;
    /**
     * The param of angle.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The param of angle.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The param of angle.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The param of angle.
     *
     * @type { number | string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    angle: number | string;
}
/**
 * The rotation parameters containing multi-axis angle information.
 *
 * @interface RotateAngleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 20
 */
declare interface RotateAngleOptions {
    /**
     * the angle of the x-axis direction.
     *
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    angleX?: number | string;
    /**
     * the angle of the y-axis direction.
     *
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    angleY?: number | string;
    /**
     * the angle of the z-axis direction.
     *
     * @type { ?(number | string) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    angleZ?: number | string;
    /**
     * The param of center point of x.
     *
     * @type { ?(number | string) }
     * @default '50%'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerX?: number | string;
    /**
     * The param of center point of y.
     *
     * @type { ?(number | string) }
     * @default '50%'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerY?: number | string;
    /**
     * The param of center point of z.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    centerZ?: number;
    /**
     * The param of camera distance, value range (-∞, ∞).
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    perspective?: number;
}
/**
 * Defines the param of transition.
 *
 * @interface TransitionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 * @deprecated since 10
 * @useinstead TransitionEffect
 */
declare interface TransitionOptions {
    /**
     * Transition type.<br>
     * Default value: **TransitionType.All**.
     * <br>**NOTE**<br>If **type** is not specified, the default value **TransitionType.All**
     * is used, which means that the transition effect works for both component addition and deletion.
     *
     * @type { ?TransitionType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     */
    type?: TransitionType;
    /**
     * Opacity of the component during transition, which is the value of the
     * start point of insertion and the end point of deletion.
     * <br>Value range: [0, 1].
     * <br>**NOTE**<br>If the value specified is less than 0, the value **0** is used.
     * If the value specified is greater than 1, the value **1** is used.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     */
    opacity?: number;
    /**
     * Translation of the component during transition,
     * which is the value of the start point of insertion and the end point of deletion.
     * **x**: distance to translate along the x-axis.
     * **y**: distance to translate along the y-axis.
     * **z**: distance to translate along the z-axis.
     *
     * @type { ?TranslateOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     */
    translate?: TranslateOptions;
    /**
     * Scaling of the component during transition, which is the value of the start point of insertion and the end point
     * of deletion. **x**: scale factor along the x-axis. **y**: scale factor along the y-axis. **z**: scale factor along
     * the z-axis (not effective for the current 2D graphics). **centerX** and **centerY**: scale center point. The
     * default values are both **"50%"**, indicating the center point of the page. If the center point is (0, 0), it
     * refers to the upper left corner of the component.
     * <p>**NOTE**:
     * <br>If **centerX** or **centerY** is set to an invalid string (for example, **"illegalString"**),
     * the default value **"0"** is used.
     * </p>
     *
     * @type { ?ScaleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     */
    scale?: ScaleOptions;
    /**
     * Rotation of the component during transition, which is the value of the start point of insertion and the end point
     * of deletion. **x**: X-component of the rotation vector. **y**: Y-component of the rotation vector. **z**:
     * Z-component of the rotation vector. **centerX** and **centerY**: rotation center point. The default values are
     * both **"50%"**, indicating the center point of the page.If the center point is (0, 0), it refers to the upper left
     * corner of the component.
     *
     * @type { ?RotateOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     */
    rotate?: RotateOptions;
}
/**
 * Defines the Edge object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Edge object.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum TransitionEdge {
    /**
     * Top edge
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Top edge
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    TOP,
    /**
     * Bottom edge of the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Bottom edge of the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    BOTTOM,
    /**
     * Start edge of the window, which is the left edge for left-to-right
     * scripts and the right edge for right-to-left scripts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Start edge of the window, which is the left edge for left-to-right
     * scripts and the right edge for right-to-left scripts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    START,
    /**
     * End edge of the window, which is the right edge for left-to-right scripts
     * and the left edge for right-to-left scripts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * End edge of the window, which is the right edge for left-to-right scripts
     * and the left edge for right-to-left scripts.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    END
}
/**
 * Defines all transition effects.
 *
 * @typedef { object } TransitionEffects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines all transition effects.
 *
 * @typedef { object } TransitionEffects
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type TransitionEffects = {
    identity: undefined;
    opacity: number;
    slideSwitch: undefined;
    move: TransitionEdge;
    translate: TranslateOptions;
    rotate: RotateOptions;
    scale: ScaleOptions;
    asymmetric: {
        appear: TransitionEffect;
        disappear: TransitionEffect;
    };
};
/**
 * Defined the draw modifier of node. Provides draw callbacks for the associated Node.
 * Each DrawModifier instance can be set for only one component. Repeated setting is not allowed.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class DrawModifier {
    /**
     * drawBehind Method. Executed before drawing associated Node.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    drawBehind?(drawContext: DrawContext): void;
    /**
     * drawContent Method. Executed when associated Node is drawing, the default drawContent method will be replaced
     * if this method is set.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    drawContent?(drawContext: DrawContext): void;
    /**
     * drawFront Method. Executed after drawing associated Node.
     *
     * @param { DrawContext } drawContext - The drawContext used to draw.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    drawFront?(drawContext: DrawContext): void;
    /**
     * Invalidate the component, which will cause a re-render of the component.
     * No overloading is allowed or needed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    invalidate(): void;
}
/**
 * Defines the transition effect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the transition effect
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class TransitionEffect<Type extends keyof TransitionEffects = keyof TransitionEffects, Effect extends TransitionEffects[Type] = TransitionEffects[Type]> {
    /**
     * Disables the transition effect
     *
     * @type { TransitionEffect<"identity"> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Disables the transition effect
     *
     * @type { TransitionEffect<"identity"> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static readonly IDENTITY: TransitionEffect<"identity">;
    /**
     * Applies a transition effect with the opacity changing from 0 to 1 when the component appears
     * And from 1 to 0 when the component disappears. This is equivalent to **TransitionEffect.opacity(0)**
     *
     * @type { TransitionEffect<"opacity"> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a transition effect with the opacity changing from 0 to 1 when the component appears
     * And from 1 to 0 when the component disappears. This is equivalent to **TransitionEffect.opacity(0)**
     *
     * @type { TransitionEffect<"opacity"> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static readonly OPACITY: TransitionEffect<"opacity">;
    /**
     * Applies a transition effect of sliding in from the start edge when the component
     * appears and sliding out from the end edge when the component disappears.
     * This means sliding in from the left edge and sliding out from the right edge for
     * left-to-right scripts, and sliding in from the right edge and sliding out from
     * the left edge for right-to-left scripts. This is equivalent to
     * TransitionEffect.asymmetric(TransitionEffect.move(TransitionEdge.START),
     * TransitionEffect.move(TransitionEdge.END)).
     *
     * @type { TransitionEffect<
     * "asymmetric",
     * {appear: TransitionEffect<"move", TransitionEdge>;
     * disappear: TransitionEffect<"move", TransitionEdge>;
     * }> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a transition effect of sliding in from the start edge when the component
     * appears and sliding out from the end edge when the component disappears.
     * This means sliding in from the left edge and sliding out from the right edge for
     * left-to-right scripts, and sliding in from the right edge and sliding out from
     * the left edge for right-to-left scripts. This is equivalent to
     * TransitionEffect.asymmetric(TransitionEffect.move(TransitionEdge.START),
     * TransitionEffect.move(TransitionEdge.END)).
     *
     * @type { TransitionEffect<
     * "asymmetric",
     * {appear: TransitionEffect<"move", TransitionEdge>;
     * disappear: TransitionEffect<"move", TransitionEdge>;
     * }> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static readonly SLIDE: TransitionEffect<"asymmetric", {
        appear: TransitionEffect<"move", TransitionEdge>;
        disappear: TransitionEffect<"move", TransitionEdge>;
    }>;
    /**
     * Applies a transition effect of sliding in from the right with first scaling down and then scaling up
     * when the component appears and sliding out from the right
     * with first scaling down and then scaling up when the component disappears.
     * This transition effect comes with its own animation parameters, which can also be overridden.
     * The default animation duration is 600 milliseconds,
     * with a specified animation curve of cubicBezierCurve(0.24, 0.0, 0.50, 1.0) and a minimum scale factor of 0.8.
     *
     * @type { TransitionEffect<"slideSwitch"> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a transition effect of sliding in from the right with first scaling down and then scaling up
     * when the component appears and sliding out from the right
     * with first scaling down and then scaling up when the component disappears.
     * This transition effect comes with its own animation parameters, which can also be overridden.
     * The default animation duration is 600 milliseconds,
     * with a specified animation curve of cubicBezierCurve(0.24, 0.0, 0.50, 1.0) and a minimum scale factor of 0.8.
     *
     * @type { TransitionEffect<"slideSwitch"> }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static readonly SLIDE_SWITCH: TransitionEffect<"slideSwitch">;
    /**
     * Translation of the component during transition, which is the value of the start point
     * of insertion and the end point of deletion.
     *
     * @param { TranslateOptions } options - translate options.
     * <br>-**x**: distance to translate along the x-axis. Unit is vp.
     * <br>-**y**: distance to translate along the y-axis. Unit is vp.
     * <br>-**z**: distance to translate along the z-axis. Unit is vp.
     * @returns { TransitionEffect<"translate"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Translation of the component during transition, which is the value of the start point
     * of insertion and the end point of deletion.
     *
     * @param { TranslateOptions } options - translate options.
     * <br>-**x**: distance to translate along the x-axis. Unit is vp.
     * <br>-**y**: distance to translate along the y-axis. Unit is vp.
     * <br>-**z**: distance to translate along the z-axis. Unit is vp.
     * @returns { TransitionEffect<"translate"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static translate(options: TranslateOptions): TransitionEffect<"translate">;
    /**
     * Rotation of the component during transition, which is the value of the start
     * point of insertion and the end point of deletion.
     * <br>- **x**: X-component of the rotation vector.
     * <br>- **y**: Y-component of the rotation vector.
     * <br>- **z**: Z-component of the rotation vector.
     * <br>- **centerX** and **centerY**: rotation center point. The default values
     * are both **"50%"**, indicating the center point of the page.
     * <br>- If the center point is (0, 0), it refers to the upper left corner of the component.
     * <br>- **centerZ**: z-axis anchor point, that is, the z-component of the 3D rotation
     * center point. The default value is **0**.
     * <br>- **perspective**: viewing distance. It is not supported for use in transition animations.
     * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 10.
     *
     * @param { RotateOptions } options - Rotate options.
     * @returns { TransitionEffect<"rotate"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Rotation of the component during transition, which is the value of the start
     * point of insertion and the end point of deletion.
     * <br>- **x**: X-component of the rotation vector.
     * <br>- **y**: Y-component of the rotation vector.
     * <br>- **z**: Z-component of the rotation vector.
     * <br>- **centerX** and **centerY**: rotation center point. The default values
     * are both **"50%"**, indicating the center point of the page.
     * <br>- If the center point is (0, 0), it refers to the upper left corner of the component.
     * <br>- **centerZ**: z-axis anchor point, that is, the z-component of the 3D rotation
     * center point. The default value is **0**.
     * <br>- **perspective**: viewing distance. It is not supported for use in transition animations.
     * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 10.
     *
     * @param { RotateOptions } options - Rotate options.
     * @returns { TransitionEffect<"rotate"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static rotate(options: RotateOptions): TransitionEffect<"rotate">;
    /**
     * Scaling of the component during transition, which is the value of the start point of insertion and
     * the end point of deletion.
     *
     * @param { ScaleOptions } options - scale options
     * @returns { TransitionEffect<"scale"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Scaling of the component during transition, which is the value of the start point of insertion and
     * the end point of deletion.
     *
     * @param { ScaleOptions } options - scale options
     * @returns { TransitionEffect<"scale"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static scale(options: ScaleOptions): TransitionEffect<"scale">;
    /**
     * Creates an opacity transition effect with alpha value
     *
     * @param { number } alpha - opacity alpha value, value range [0, 1].
     * @returns { TransitionEffect<"opacity"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates an opacity transition effect with alpha value
     *
     * @param { number } alpha - opacity alpha value, value range [0, 1].
     * @returns { TransitionEffect<"opacity"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Creates an opacity transition effect with alpha value
     *
     * @param { number } alpha - opacity alpha value, value range [0, 1].
     * Illegal values less than 0 are treated as 0, and illegal values greater than 1 are treated as 1.
     * @returns { TransitionEffect<"opacity"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    static opacity(alpha: number): TransitionEffect<"opacity">;
    /**
     * Slide-in and slide-out of the component from the screen edge during transition.
     * It is essentially a translation effect, which is the value of the start point of insertion
     * and the end point of deletion.
     *
     * @param { TransitionEdge } edge - the edge that component will move to
     * @returns { TransitionEffect<"move"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Slide-in and slide-out of the component from the screen edge during transition.
     * It is essentially a translation effect, which is the value of the start point of insertion
     * and the end point of deletion.
     *
     * @param { TransitionEdge } edge - the edge that component will move to
     * @returns { TransitionEffect<"move"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static move(edge: TransitionEdge): TransitionEffect<"move">;
    /**
     * Creates an asymmetric transition effect
     *
     * @param { TransitionEffect } appear - the transition which will be attached when the component is appear
     * @param { TransitionEffect } disappear - the transition which will be attached when the component is disappear
     * @returns { TransitionEffect<"asymmetric"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates an asymmetric transition effect
     *
     * @param { TransitionEffect } appear - the transition which will be attached when the component is appear
     * @param { TransitionEffect } disappear - the transition which will be attached when the component is disappear
     * @returns { TransitionEffect<"asymmetric"> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static asymmetric(appear: TransitionEffect, disappear: TransitionEffect): TransitionEffect<"asymmetric">;
    /**
     * TransitionEffect constructor
     *
     * @param { Type } type - transition type
     * @param { Effect } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * TransitionEffect constructor
     *
     * @param { Type } type - transition type
     * @param { Effect } effect - transition options
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constructor(type: Type, effect: Effect);
    /**
     * Set the animation of current transition effect
     *
     * @param { AnimateParam } value - animation parameters
     * @returns { TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set the animation of current transition effect
     *
     * @param { AnimateParam } value - animation parameters
     * @returns { TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    animation(value: AnimateParam): TransitionEffect;
    /**
     * Combination of transition effects.
     *
     * @param { TransitionEffect } transitionEffect - transition effect which is be combined
     * @returns { TransitionEffect } combined transition effect
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Combination of transition effects.
     *
     * @param { TransitionEffect } transitionEffect - transition effect which is be combined
     * @returns { TransitionEffect } combined transition effect
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    combine(transitionEffect: TransitionEffect): TransitionEffect;
}
/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Define Preview property
 *
 * @interface PreviewParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface PreviewParams {
    /**
     * Define Preview title
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview title
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    title?: string;
    /**
     * Define Preview width
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview width
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    width?: number;
    /**
     * Define Preview height
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview height
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    height?: number;
    /**
     * Define Preview locale
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview locale
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    locale?: string;
    /**
     * Define Preview colorMode
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview colorMode
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    colorMode?: string;
    /**
     * Define Preview deviceType
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview deviceType
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    deviceType?: string;
    /**
     * Define Preview dpi
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview dpi
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    dpi?: number;
    /**
     * Define Preview orientation
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview orientation
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    orientation?: string;
    /**
     * Define Preview roundScreen
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Define Preview roundScreen
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @atomicservice
     * @since 11
     */
    roundScreen?: boolean;
}
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * ItemDragInfo object description
 *
 * @interface ItemDragInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ItemDragInfo {
    /**
     * Obtains the X coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Obtains the X coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the X coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    x: number;
    /**
     * Obtains the Y coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Obtains the Y coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the Y coordinate of the drag window, in vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    y: number;
}
/**
 * Enum of using the effects template mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 14
 */
declare enum EffectType {
    /**
     * Define use the effects template defined by the parent effectComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    DEFAULT = 0,
    /**
     * Define use the effects template defined by the window.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    WINDOW_EFFECT = 1
}
/**
 * Defines the drag status before drag action.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare enum PreDragStatus {
    /**
     * Define the status for user prepare to start long press gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    ACTION_DETECTING_STATUS = 0,
    /**
     * Define the status for user can start drag action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    READY_TO_TRIGGER_DRAG_ACTION = 1,
    /**
     * Define the status for dragItem lift animation started.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    PREVIEW_LIFT_STARTED = 2,
    /**
     * Define the status for dragItem lift animation finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    PREVIEW_LIFT_FINISHED = 3,
    /**
     * Define the status for dragItem landing animation started.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    PREVIEW_LANDING_STARTED = 4,
    /**
     * Define the status for dragItem landing animation finished.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    PREVIEW_LANDING_FINISHED = 5,
    /**
     * Define the status for user cancel drag action.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    ACTION_CANCELED_BEFORE_DRAG = 6,
    /**
     * Define the status for user to sense the availability of drag in advance.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    PREPARING_FOR_DRAG_DETECTION = 7
}
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * DragItemInfo object description
 *
 * @interface DragItemInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface DragItemInfo {
    /**
     * Uses the pixelMap object for drawing.
     *
     * @type { ?PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Uses the pixelMap object for drawing.
     *
     * @type { ?PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Uses the pixelMap object for drawing.
     *
     * @type { ?PixelMap }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    pixelMap?: PixelMap;
    /**
     * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Uses the custom builder for drawing, if pixelMap is set, this value is ignored.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    builder?: CustomBuilder;
    /**
     * Sets the extra info for drag event.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the extra info for drag event.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the extra info for drag event.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    extraInfo?: string;
}
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defining animation function.
 *
 * @param { AnimateParam } value
 * @param { function } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#animateTo
 */
declare function animateTo(value: AnimateParam, event: () => void): void;
/**
 * Implements immediate delivery of an explicit animation through a **UIContext** object.
 * When multiple property animations are loaded at once, you can call this API to immediately
 * execute the transition animation for state changes caused by the specified closure function.
 *
 * @param { AnimateParam } value - Set animation effect parameters.
 * @param { function } event - Specify the closure function that displays dynamic effects,
 * and the system will automatically insert transition animations for state changes caused by the closure function.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare function animateToImmediately(value: AnimateParam, event: () => void): void;
/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a value in vp units to a value in px.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#vp2px
 */
declare function vp2px(value: number): number;
/**
 * Converts a number in units of px to a number in units of vp.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of vp.
 * By default, the virtual pixel ratio of the screen where the current UI instance is located is used for conversion.
 * If no UI instance is available, the virtual pixel ratio of the default screen is used instead.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2vp
 */
declare function px2vp(value: number): number;
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in fp units to a number in px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#fp2px
 */
declare function fp2px(value: number): number;
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of fp.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2fp
 */
declare function px2fp(value: number): number;
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of lpx to a number in units of px.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#lpx2px
 */
declare function lpx2px(value: number): number;
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Converts a number in units of px to a number in units of lpx.
 *
 * @param { number } value
 * Value range of value: (-∞, +∞).
 * @returns { number }
 * Value range of the return value: (-∞, +∞).
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 * @deprecated since 18
 * @useinstead ohos.arkui.UIContext.UIContext#px2lpx
 */
declare function px2lpx(value: number): number;
/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 9
 */
/**
 * Defines the namespace of focus controller.
 *
 * @namespace focusControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare namespace focusControl {
    /**
     * Request focus to the specific component by param: 'id/key'.
     *
     * @param { string } value
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Request focus to the specific component by param: 'id/key'.
     *
     * @param { string } value
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Request focus to the specific component by param: 'id/key'.
     *
     * @param { string } value
     * @returns { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    function requestFocus(value: string): boolean;
}
/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { import('../../../api/@ohos.multimodalInput.pointer').default.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Import the PointerStyle type object for setCursor.
 *
 * @typedef { import('../../../api/@ohos.multimodalInput.pointer').default.PointerStyle } PointerStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare type PointerStyle = import('../../../api/@ohos.multimodalInput.pointer').default.PointerStyle;
/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * CursorControl
 *
 * @namespace cursorControl
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare namespace cursorControl {
    /**
     * Change the mouse cursor style by param: 'PointerStyle'.
     *
     * @param { PointerStyle } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Change the mouse cursor style by param: 'PointerStyle'.
     *
     * @param { PointerStyle } value - Cursor style.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    function setCursor(value: PointerStyle): void;
    /**
     * Restore the default mouse cursor style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Restore the default mouse cursor style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    function restoreDefault(): void;
}
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the event target.
 *
 * @interface EventTarget
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface EventTarget {
    /**
     * Area of current target.
     *
     * @type { Area }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Area of current target.
     *
     * @type { Area }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Area of current target.
     *
     * @type { Area }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Area information of the target element.
     *
     * @type { Area }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    area: Area;
    /**
     * Node id of current target.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 15
     */
    id?: string;
}
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the event source type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SourceType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Unknown device type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Unknown,
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Mouse,
    /**
     * The touch screen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The touch screen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The touch screen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    TouchScreen
}
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the event tool type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SourceTool {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Unknown input source.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Unknown,
    /**
     * The finger type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The finger type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The finger type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Finger,
    /**
     * The pen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The pen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The pen type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Pen,
    /**
     * The mouse type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    MOUSE,
    /**
     * The touchpad type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TOUCHPAD,
    /**
     * The joystick type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    JOYSTICK
}
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the Border Image Repeat Mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum RepeatMode {
    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Repeat mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The source image's slices are tiled. Tiles beyond the border box will be clipped.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Repeat,
    /**
     * Stretch mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Stretch mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The source image's slices are stretched to fill the border box.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Stretch,
    /**
     * Round mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Round mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The source image's slices are tiled to fill the border box. Tiles may be compressed when needed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Round,
    /**
     * Space mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Space mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The source image's slices are tiled to fill the border box. Extra space will be distributed in between tiles.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Space
}
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * enum Blur style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare enum BlurStyle {
    /**
     * Thin material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Thin material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Thin material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Thin,
    /**
     * Regular material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Regular material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Regular material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Regular,
    /**
     * Thick material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Thick material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Thick material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    Thick,
    /**
     * Material that creates the minimum depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Material that creates the minimum depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    BACKGROUND_THIN,
    /**
     * Material that creates a medium shallow depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Material that creates a medium shallow depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    BACKGROUND_REGULAR,
    /**
     * Material that creates a high shallow depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Material that creates a high shallow depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    BACKGROUND_THICK,
    /**
     * Material that creates the maximum depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Material that creates the maximum depth of field effect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    BACKGROUND_ULTRA_THICK,
    /**
     * No blur.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * No blur.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    NONE,
    /**
     * Component ultra-thin material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Component ultra-thin material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    COMPONENT_ULTRA_THIN = 8,
    /**
     * Defines the thin component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Component thin material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    COMPONENT_THIN = 9,
    /**
     * Defines the regular component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Component regular material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    COMPONENT_REGULAR = 10,
    /**
     * Defines the thick component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Defines the thick component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    COMPONENT_THICK = 11,
    /**
     * Defines the ultra thick component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Defines the ultra thick component material.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    COMPONENT_ULTRA_THICK = 12
}
/**
 * Enumerates the policies for activating the blur style.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum BlurStyleActivePolicy {
    /**
     * The component has the blur effect only when the window is focused.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    FOLLOWS_WINDOW_ACTIVE_STATE = 0,
    /**
     * The component always has the blur effect, regardless of whether the window is focused.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    ALWAYS_ACTIVE = 1,
    /**
     * The component does not have the blur effect, regardless of whether the window is focused.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    ALWAYS_INACTIVE = 2
}
/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * enum color mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ThemeColorMode {
    /**
     * Defines the mode which is follow up with system.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the mode which is follow up with system.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    SYSTEM,
    /**
     * Defines the light mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the light mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    LIGHT,
    /**
     * Defines the dark mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the dark mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    DARK
}
/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines adaptive color
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum AdaptiveColor {
    /**
     * Adaptive color mode is not used.
     * The default color is used as the mask color. Using a mode other than **DEFAULT** can be more time-consuming.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Adaptive color mode is not used.
     * The default color is used as the mask color. Using a mode other than **DEFAULT** can be more time-consuming.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    DEFAULT,
    /**
     * Adaptive color mode is used. The average color value of the color picking area is used as the mask color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Adaptive color mode is used. The average color value of the color picking area is used as the mask color.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    AVERAGE
}
/**
 * Defines modal transition type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines modal transition type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ModalTransition {
    /**
     * Slide-up and slide-down animation for the modal.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Slide-up and slide-down animation for the modal.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    DEFAULT,
    /**
     * No transition animation for the modal.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * No transition animation for the modal.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    NONE,
    /**
     * Opacity gradient animation for the modal.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Opacity gradient animation for the modal.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    ALPHA
}
/**
 * Defines the options of backgroundBlurStyle
 *
 * @extends BlurStyleOption
 * @interface BackgroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of backgroundBlurStyle
 *
 * @extends BlurStyleOption
 * @interface BackgroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface BackgroundBlurStyleOptions extends BlurStyleOptions {
    /**
     * Defines the policy for activating the blur style.
     *
     * @type { ?BlurStyleActivePolicy }
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    policy?: BlurStyleActivePolicy;
    /**
     * Color of the background effect when the window is not focused.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    inactiveColor?: ResourceColor;
}
/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of ForegroundBlurStyle
 *
 * @extends BlurStyleOptions
 * @interface ForegroundBlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ForegroundBlurStyleOptions extends BlurStyleOptions {
}
/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of blur
 *
 * @interface BlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface BlurOptions {
    /**
     * Fuzzy gray scale parameter.
     * @type { [number, number] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Fuzzy gray scale parameter.
     * @type { [number, number] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    grayscale: [
        number,
        number
    ];
}
/**
 * Defines the SystemAdaptiveOptions interface
 *
 * @interface SystemAdaptiveOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 19
 */
declare interface SystemAdaptiveOptions {
    /**
     * Whether to disable system adaptive.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 19
     */
    disableSystemAdaptation?: boolean;
}
/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of blurStyle
 *
 * @interface BlurStyleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface BlurStyleOptions {
    /**
     * Color mode used for the foreground blur.
     * <br>Default value: **ThemeColorMode.SYSTEM**.
     *
     * @type { ?ThemeColorMode }
     * @default ThemeColorMode.SYSTEM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Color mode used for the foreground blur.
     * <br>Default value: **ThemeColorMode.SYSTEM**.
     *
     * @type { ?ThemeColorMode }
     * @default ThemeColorMode.SYSTEM
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    colorMode?: ThemeColorMode;
    /**
     * Adaptive color mode.
     * <br>Default value: **AdaptiveColor.DEFAULT**.
     *
     * @type { ?AdaptiveColor }
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Adaptive color mode.
     * <br>Default value: **AdaptiveColor.DEFAULT**.
     *
     * @type { ?AdaptiveColor }
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    adaptiveColor?: AdaptiveColor;
    /**
     * Foreground blur scale.
     * <br>Default value: **1.0**.
     * <br>Value range: [0.0, 1.0].
     *
     * @type { ?number }
     * @default 1.0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    scale?: number;
    /**
     * Defines the options of blur
     *
     * @type { ?BlurOptions }
     * @default { grayScale: [0,0] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the options of blur
     *
     * @type { ?BlurOptions }
     * @default { grayScale: [0,0] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    blurOptions?: BlurOptions;
}
/**
 * Defines the options of BackgroundEffect
 *
 * @interface BackgroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the options of BackgroundEffect
 *
 * @interface BackgroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface BackgroundEffectOptions {
    /**
     * Blur radius.
     * Value range: [0, +∞).
     * Default value: **0**.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Blur radius.
     * Value range: [0, +∞).
     * Default value: **0**.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    radius: number;
    /**
     * Saturation.
     * Value range: [0, +∞).
     * Recommended value range: [0, 50].
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Saturation.
     * Value range: [0, +∞).
     * Recommended value range: [0, 50].
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    saturation?: number;
    /**
     * Brightness.
     * <br>Value range: [0, +∞).
     * <br>Default value: **1** Recommended value range: [0, 2].
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Brightness.
     * <br>Value range: [0, +∞).
     * <br>Default value: **1** Recommended value range: [0, 2].
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    brightness?: number;
    /**
     * Color.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Color.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    color?: ResourceColor;
    /**
     * Define the adaptiveColor of BackgroundEffect.
     *
     * @type { ?AdaptiveColor }
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Define the adaptiveColor of BackgroundEffect.
     *
     * @type { ?AdaptiveColor }
     * @default AdaptiveColor.DEFAULT
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    adaptiveColor?: AdaptiveColor;
    /**
     * Define the blurOptions of BackgroundEffect.
     *
     * @type { ?BlurOptions }
     * @default { grayScale: [0,1] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
    * Define the blurOptions of BackgroundEffect.
    *
    * @type { ?BlurOptions }
    * @default { grayScale: [0,0] }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    blurOptions?: BlurOptions;
    /**
     * Defines the policy for activating the blur style.
     *
     * @type { ?BlurStyleActivePolicy }
     * @default BlurStyleActivePolicy.ALWAYS_ACTIVE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    policy?: BlurStyleActivePolicy;
    /**
     * Color of the background effect when the window is not focused.
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    inactiveColor?: ResourceColor;
}
/**
 * Defines the options of ForegroundEffect
 *
 * @interface ForegroundEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ForegroundEffectOptions {
    /**
     * Define the radius size of ForegroundEffect.The range of this value is [0, ∞)
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
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provide an interface for the text style of picker
 *
 * @interface PickerTextStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PickerTextStyle {
    /**
     * Define the text color of picker.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Font color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    color?: ResourceColor;
    /**
     * Define the text font of picker.
     * Only support size and weight.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Text style.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    font?: Font;
}
/**
 * Provide an interface for the button style of picker
 *
 * @interface PickerDialogButtonStyle
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface PickerDialogButtonStyle {
    /**
     * Describes the button style.
     *
     * @type { ?ButtonType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    type?: ButtonType;
    /**
     * Describes the button style.
     *
     * @type { ?ButtonStyleMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    style?: ButtonStyleMode;
    /**
     * Describes the button role.
     *
     * @type { ?ButtonRole }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    role?: ButtonRole;
    /**
     * Describes the button text size.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fontSize?: Length;
    /**
     * Describes the button text color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fontColor?: ResourceColor;
    /**
     * Describes the button font weight.
     *
     * @type { ?(FontWeight | number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fontWeight?: FontWeight | number | string;
    /**
     * Describes the button font style.
     *
     * @type { ?FontStyle }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fontStyle?: FontStyle;
    /**
     * Describes the button font family.
     *
     * @type { ?(Resource | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fontFamily?: Resource | string;
    /**
     * Describes the button background color.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundColor?: ResourceColor;
    /**
     * Describes the button border radius.
     *
     * @type { ?(Length | BorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderRadius?: Length | BorderRadiuses;
    /**
     * Define whether the button default to responding to the Enter key
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    primary?: boolean;
}
/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Define the type of shadow
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ShadowType {
    /**
     * Define a color type of shadow
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Define a color type of shadow
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    COLOR,
    /**
     * Blur.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Blur.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    BLUR
}
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Define the options of shadow
 *
 * @interface ShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ShadowOptions {
    /**
     * Blur radius of the shadow.
     *
     * @type { number | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Blur radius of the shadow.
     *
     * @type { number | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Blur radius of the shadow.
     *
     * @type { number | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Blur radius of the shadow.
     *
     * @type { number | Resource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    radius: number | Resource;
    /**
     * Shadow type.
     * <br>Default value: **COLOR**.
     *
     * @type { ?ShadowType }
     * @default ShadowType.COLOR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Shadow type.
     * <br>Default value: **COLOR**.
     *
     * @type { ?ShadowType }
     * @default ShadowType.COLOR
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    type?: ShadowType;
    /**
     * Color of the shadow. Default value: **Black**
     *
     * @type { ?(Color | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Color of the shadow. Default value: **Black**
     *
     * @type { ?(Color | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Color of the shadow. Default value: **Black**
     *
     * @type { ?(Color | string | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Color of the shadow. Default value: **Black**
     *
     * @type { ?(Color | string | Resource| ColoringStrategy) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    color?: Color | string | Resource | ColoringStrategy;
    /**
     * Offset of the shadow along the x-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Offset of the shadow along the x-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Offset of the shadow along the x-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Offset of the shadow along the x-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    offsetX?: number | Resource;
    /**
     * Offset of the shadow along the y-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Offset of the shadow along the y-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Offset of the shadow along the y-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Offset of the shadow along the y-axis. Unit is px. Default value is 0.
     *
     * @type { ?(number | Resource) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    offsetY?: number | Resource;
    /**
     * Whether to fill the inside of the component with shadow. **true**: Fill
     * the inside of the component with shadow.
     * <br>**false**: Do not fill the inside of the component with shadow.
     * <br>The default value is **false**.
     * <br>**NOTE**<br>This attribute does not take effect in textShadow.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Whether to fill the inside of the component with shadow. **true**: Fill
     * the inside of the component with shadow.
     * <br>**false**: Do not fill the inside of the component with shadow.
     * <br>The default value is **false**.
     * <br>**NOTE**<br>This attribute does not take effect in textShadow.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fill?: boolean;
}
/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * enum Shadow style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ShadowStyle {
    /**
     * Defines the super small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the super small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    OUTER_DEFAULT_XS,
    /**
     * Defines the small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines the small default shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    OUTER_DEFAULT_SM,
    /**
     * Medium shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Medium shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    OUTER_DEFAULT_MD,
    /**
     * Large shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Large shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    OUTER_DEFAULT_LG,
    /**
     * Floating medium shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Floating medium shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    OUTER_FLOATING_SM,
    /**
     * Defines the medium floating shadow style.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Floating medium shadow.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    OUTER_FLOATING_MD
}
/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of Shadow.
 *
 * @interface MultiShadowOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MultiShadowOptions {
    /**
     * Shadow blur radius.
     * Unit: vp.
     * <p>**NOTE**:
     * <br>A value less than or equal to 0 is handled as the default value.
     * </p>
     *
     * @type { ?(number | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Shadow blur radius.
     * Unit: vp.
     * <p>**NOTE**:
     * <br>A value less than or equal to 0 is handled as the default value.
     * </p>
     *
     * @type { ?(number | Resource) }
     * @default 20
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    radius?: number | Resource;
    /**
     * Offset on the x-axis.
     * Unit: vp.
     *
     * @type { ?(number | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Offset on the x-axis.
     * Unit: vp.
     *
     * @type { ?(number | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offsetX?: number | Resource;
    /**
     * Offset on the y-axis.
     * Unit: vp.
     *
     * @type { ?(number | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Offset on the y-axis.
     * Unit: vp.
     *
     * @type { ?(number | Resource) }
     * @default 5
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offsetY?: number | Resource;
}
/**
 * Enumerates the safe area types.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * The types of expanded safe areas.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SafeAreaType {
    /**
     * Default area of the system, including the status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Default non-safe area of the system, including the status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    SYSTEM,
    /**
     * Notch or punch hole.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Non-safe area of the device like Notch or punch hole.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    CUTOUT,
    /**
     * Soft keyboard area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Soft keyboard area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    KEYBOARD
}
/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enumerates the safe area edges.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SafeAreaEdge {
    /**
     * Top edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Top edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    TOP,
    /**
     * Bottom edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Bottom edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    BOTTOM,
    /**
     * Start edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Start edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    START,
    /**
     * End edge of the safe area.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * End edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    END
}
/**
 * Describe the types for expanding the safe area in layout.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum LayoutSafeAreaType {
    /**
     * Default non-safe area of the system, including the status bar and navigation bar.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SYSTEM = 0
}
/**
 *  Define the edges for expanding the safe area in layout.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum LayoutSafeAreaEdge {
    /**
     * Top edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    TOP = 0,
    /**
     * Bottom edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    BOTTOM = 1
}
/**
 * Defines sheet size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines sheet size type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum SheetSize {
    /**
     * The sheet height is half of the screen height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The sheet height is half of the screen height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    MEDIUM,
    /**
     * The sheet height is almost the screen height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The sheet height is almost the screen height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    LARGE,
    /**
     * The sheet height automatically adapts to the content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The sheet height automatically adapts to the content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    FIT_CONTENT = 2
}
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the base event.
 *
 * @interface BaseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface BaseEvent {
    /**
     * Defines the current target which fires this event.
     *
     * @type { EventTarget }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines the current target which fires this event.
     *
     * @type { EventTarget }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines the current target which fires this event.
     *
     * @type { EventTarget }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Display area of the element that triggers the gesture event.
     *
     * @type { EventTarget }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    target: EventTarget;
    /**
     * Event timestamp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Event timestamp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Event timestamp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Timestamp of the event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    timestamp: number;
    /**
     * the event source info.
     *
     * @type { SourceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * the event source info.
     *
     * @type { SourceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * the event source info.
     *
     * @type { SourceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Event input device.
     *
     * @type { SourceType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    source: SourceType;
    /**
     * the Horizontal axis coordinate.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    axisHorizontal?: number;
    /**
     * the Vertical axis coordinate.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    axisVertical?: number;
    /**
     * Touch pressure.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Touch pressure.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Press pressure.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    pressure: number;
    /**
     * The angle between pencil projection on plane-X-Y and axis-Z.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The angle between pencil projection on plane-X-Y and axis-Z.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Angle between the projection of the stylus on the device plane and the x-axis.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    tiltX: number;
    /**
     * The angle between pencil projection on plane-Y-Z and axis-Z.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The angle between pencil projection on plane-Y-Z and axis-Z.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Angle between the projection of the stylus on the device plane and the y-axis.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    tiltY: number;
    /**
     * Indicates the angle at which the stylus rotates around the Z-axis.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 17
     */
    rollAngle?: number;
    /**
     * The event tool type info.
     *
     * @type { SourceTool }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The event tool type info.
     *
     * @type { SourceTool }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Event input source.
     *
     * @type { SourceTool }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    sourceTool: SourceTool;
    /**
     * Obtains the pressed status of modifier keys. The following modifier keys are supported: 'Ctrl'|'Alt'|'Shift'.
     *
     * @param { Array<string> } keys - indicate the keys of the ModifierKey.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getModifierKeyState?(keys: Array<string>): boolean;
    /**
     * Indicates the ID of the input device that triggers the current event.
     *
     * @type { ?number } [deviceId] The ID of the input device that triggers the current event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    deviceId?: number;
    /**
     * Indicates the screen ID on which the event occurred.
     *
     * @type { ?number } [targetDisplayId] The screen ID on which the event occurred.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    targetDisplayId?: number;
}
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Border image option
 *
 * @interface BorderImageOption
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface BorderImageOption {
    /**
     * Border image slice
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border image slice
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Border image slice
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Slice width of the upper left corner, upper right corner, lower left corner,
     * and lower right corner of the border image.
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    slice?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Border image repeat
     *
     * @type { ?RepeatMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border image repeat
     *
     * @type { ?RepeatMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Repeat mode of the source image's slices on the border.
     *
     * @type { ?RepeatMode }
     * @default RepeatMode.Stretch
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    repeat?: RepeatMode;
    /**
     * Border image source
     *
     * @type { ?(string | Resource | LinearGradient) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border image source
     *
     * @type { ?(string | Resource | LinearGradient) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Source or gradient color of the border image.
     * When the type is string, this parameter sets the border image source.
     * For details about how to reference image resources, see Loading Image Resources.
     *
     * <p><strong>NOTE</strong>:
     * <br>The border image source applies only to container components, such as Row, Column, and Flex.
     * </p>
     *
     * @type { ?(string | Resource | LinearGradient) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    source?: string | Resource | LinearGradient;
    /**
     * Border image width
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border image width
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Border image width
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Width of the border image.
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    width?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Border image outset
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border image outset
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Border image outset
     *
     * @type { ?(Length | EdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Amount by which the border image is extended beyond the border box.
     *
     * @type { ?(Length | EdgeWidths | LocalizedEdgeWidths) }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    outset?: Length | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Border image center fill
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border image center fill
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Whether to fill the center of the border image.
     * true: Fill the center of the border image.
     * false: Do not fill the center of the border image.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fill?: boolean;
}
/**
 * Defines the policy of Layout
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 15
 */
declare class LayoutPolicy {
    /**
    * The component fills its parent which means its size is as large as its parent.
    *
    * @type { LayoutPolicy }
    * @readonly
    * @static
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 15
    */
    static readonly matchParent: LayoutPolicy;
    /**
     * The component fills its content which means its size is as large as its children but it is constained by its parent.
     *
     * @type { LayoutPolicy }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static readonly wrapContent: LayoutPolicy;
    /**
     * The component fills its content which means its size is as large as its children.
     *
     * @type { LayoutPolicy }
     * @readonly
     * @static
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    static readonly fixAtIdealSize: LayoutPolicy;
}
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * The tap action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface ClickEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface ClickEvent extends BaseEvent {
    /**
     * X coordinate of the click point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * X coordinate of the click relative to the upper left corner of the application screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    displayX: number;
    /**
     * Y coordinate of the click point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Y coordinate of the click relative to the upper left corner of the application screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    displayY: number;
    /**
     * X coordinate of the click point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * X coordinate of the click relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    windowX: number;
    /**
     * Y coordinate of the click point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Y coordinate of the click relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    windowY: number;
    /**
     * X coordinate of the click relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     * @useinstead ClickEvent#windowX
     */
    screenX: number;
    /**
     * Y coordinate of the click relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     * @useinstead ClickEvent#windowY
     */
    screenY: number;
    /**
     * X coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * X coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * X coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * X coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    x: number;
    /**
     * Y coordinate of the click point relative to the upper edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Y coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Y coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Y coordinate of the click point relative to the left edge of the clicked element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    y: number;
    /**
     * Whether the event is triggered by a left-hand or right-hand tap.
     *
     * @type { InteractionHand }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    hand?: InteractionHand;
    /**
     * Prevent the default function.
     *
     * @type { function }
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    preventDefault: () => void;
}
/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * The hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface HoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface HoverEvent extends BaseEvent {
    /**
     * X coordinate of the hover point relative to the left edge of the hover element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    x?: number;
    /**
     * Y coordinate of the hover point relative to the upper edge of the hover element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    y?: number;
    /**
     * X coordinate of the hover point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    windowX?: number;
    /**
     * Y coordinate of the hover point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    windowY?: number;
    /**
     * X coordinate of the hover point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    displayX?: number;
    /**
     * Y coordinate of the hover point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    displayY?: number;
    /**
     * The blocking hover event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * The blocking hover event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    stopPropagation: () => void;
}
/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * The mouse click action triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface MouseEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface MouseEvent extends BaseEvent {
    /**
     * Mouse button of the click event.
     *
     * @type { MouseButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Mouse button of the click event.
     *
     * @type { MouseButton }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    button: MouseButton;
    /**
     * Mouse action of the click event.
     *
     * @type { MouseAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Mouse action of the click event.
     *
     * @type { MouseAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    action: MouseAction;
    /**
     * X coordinate of the mouse point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * X coordinate of the mouse pointer relative to the upper left corner of the application screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    displayX: number;
    /**
     * Y coordinate of the mouse point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Y coordinate of the mouse pointer relative to the upper left corner of the application screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    displayY: number;
    /**
     * X coordinate of the mouse point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * X coordinate of the mouse pointer relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    windowX: number;
    /**
     * Y coordinate of the mouse point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Y coordinate of the mouse pointer relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    windowY: number;
    /**
     * X coordinate of the mouse pointer relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     * @useinstead MouseEvent#windowX
     */
    screenX: number;
    /**
     * Y coordinate of the mouse pointer relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     * @useinstead MouseEvent#windowY
     */
    screenY: number;
    /**
     * X coordinate of the mouse point relative to the left edge of the mouse hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * X coordinate of the mouse pointer relative to the upper left corner of the component being clicked.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    x: number;
    /**
     * Y coordinate of the mouse point relative to the upper edge of the mouse hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Y coordinate of the mouse pointer relative to the upper left corner of the component being clicked.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    y: number;
    /**
     * The blocking event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Stops the event from bubbling upwards or downwards.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    stopPropagation: () => void;
    /**
     * X axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
     * the edge of the screen, the value may be less than the difference of the X coordinate reported twice.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    rawDeltaX?: number;
    /**
     * Y axis offset relative to the previous reported mouse pointer position. When the mouse pointer is at
     * the edge of the screen, the value may be less than the difference of the Y coordinate reported twice.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    rawDeltaY?: number;
    /**
     * Array of all mouse buttons that are currently pressed.
     *
     * @type { ?MouseButton[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    pressedButtons?: MouseButton[];
}
/**
 * The accessibility hover action triggers this method invocation.
 *
 * @extends BaseEvent
 * @typedef AccessibilityHoverEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface AccessibilityHoverEvent extends BaseEvent {
    /**
     * Type of the accessibility hover event.
     *
     * @type { AccessibilityHoverType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    type: AccessibilityHoverType;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    x: number;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    y: number;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    displayX: number;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    displayY: number;
    /**
     * X coordinate of the accessibility hover point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    windowX: number;
    /**
     * Y coordinate of the accessibility hover point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    windowY: number;
}
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Type of the touch event.
 *
 * @interface TouchObject
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TouchObject {
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    type: TouchType;
    /**
     * Finger unique identifier.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Finger unique identifier.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Unique identifier of a finger.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    id: number;
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * X coordinate of the touch point relative to the upper left corner of the application screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    displayX: number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Y coordinate of the touch point relative to the upper left corner of the application screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    displayY: number;
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * X coordinate of the touch point relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    windowX: number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Y coordinate of the touch point relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    windowY: number;
    /**
     * X coordinate of the touch point relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     * @useinstead TouchObject#windowX
     */
    screenX: number;
    /**
     * Y coordinate of the touch point relative to the upper left corner of the application window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     * @useinstead TouchObject#windowY
     */
    screenY: number;
    /**
     * X coordinate of the touch point relative to the left edge of the touched element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * X coordinate of the touch point relative to the left edge of the touched element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * X coordinate of the touch point relative to the upper left corner of the event responding component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    x: number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the touched element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Y coordinate of the touch point relative to the upper edge of the touched element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Y coordinate of the touch point relative to the upper left corner of the event responding component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    y: number;
    /**
     * Whether the event is triggered by a left-hand or right-hand tap.
     *
     * @type { InteractionHand }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    hand?: InteractionHand;
    /**
     * Time when the finger is pressed.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    pressedTime?: number;
    /**
   * Pressure value of the finger press.
   *
   * @type { ?number }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 15
   */
    pressure?: number;
    /**
     * Width of the area pressed by the finger.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    width?: number;
    /**
     * Height of the area pressed by the finger.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    height?: number;
}
/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TouchObject getHistoricalPoints Function Parameters
 *
 * @interface HistoricalPoint
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface HistoricalPoint {
    /**
     * The base touchObject information of historicalPoint
     *
     * @type { TouchObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The base touchObject information of historicalPoint
     *
     * @type { TouchObject }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    touchObject: TouchObject;
    /**
     * Contact area between the finger pad and the screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Contact area between the finger pad and the screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    size: number;
    /**
     * Pressure of the touch event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Pressure of the touch event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    force: number;
    /**
     * Timestamp of the touch event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Timestamp of the touch event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    timestamp: number;
}
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Touch Action Function Parameters
 *
 * @extends BaseEvent
 * @interface TouchEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface TouchEvent extends BaseEvent {
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Type of the touch event.
     *
     * @type { TouchType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    type: TouchType;
    /**
     * All finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * All finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * All finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    touches: TouchObject[];
    /**
     * Indicates the current changed finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Indicates the current changed finger information.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Finger information changed.
     *
     * @type { TouchObject[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    changedTouches: TouchObject[];
    /**
     * The blocking event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The blocking event pops up.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Stops the event from bubbling upwards or downwards.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    stopPropagation: () => void;
    /**
     * Get the historical points.
     *
     * @returns { Array<HistoricalPoint> } - return all historical points.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains all historical points of the current frame.
     *
     * @returns { Array<HistoricalPoint> } - return all historical points.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getHistoricalPoints(): Array<HistoricalPoint>;
    /**
     * Blocks the default event.
     *
     * @type { function }
     * @throws { BusinessError } 100017 - Component does not support prevent function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    preventDefault: () => void;
}
/**
 * The axis event triggers this method invocation.
 *
 * @extends BaseEvent
 * @interface AxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 17
 */
declare interface AxisEvent extends BaseEvent {
    /**
     * Axis action of the axis event.
     *
     * @type { AxisAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    action: AxisAction;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    displayX: number;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the device screen.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    displayY: number;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    windowX: number;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the current window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    windowY: number;
    /**
     * X coordinate of the mouse cursor relative to the left edge of the axis event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    x: number;
    /**
     * Y coordinate of the mouse cursor relative to the upper edge of the axis event hit element.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    y: number;
    /**
     * Scroll step configuration which is only mouse wheel has.
     *  *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    scrollStep?: number;
    /**
     * Active event bubbling.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    propagation: Callback<void>;
    /**
     * Obtains the value of the horizontal scroll axis for this axis event.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    getHorizontalAxisValue(): number;
    /**
     * Obtains the value of the vertical scroll axis for this axis event.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    getVerticalAxisValue(): number;
}
/**
 * Defines the callback type used in onSizeChange.
 * <br>oldValue - the width and height of the component before the change.
 * <br>newValue - the width and height of the component after the change.
 *
 * @typedef { function } SizeChangeCallback
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type SizeChangeCallback = (oldValue: SizeOptions, newValue: SizeOptions) => void;
/**
 * Defines the callback type used in onGestureRecognizerJudgeBegin.
 *
 * @typedef { function } GestureRecognizerJudgeBeginCallback
 * @param { BaseGestureEvent } event - the event information
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } recognizers - the gesture recognizers of the component on the response chain
 * @returns { GestureJudgeResult } the gesture judge result
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type GestureRecognizerJudgeBeginCallback = (event: BaseGestureEvent, current: GestureRecognizer, recognizers: Array<GestureRecognizer>) => GestureJudgeResult;
/**
 * Defines the callback type used in shouldBuiltInRecognizerParallelWith.
 *
 * @typedef { function } ShouldBuiltInRecognizerParallelWithCallback
 * @param { GestureRecognizer } current - the current gesture recognizer of the component
 * @param { Array<GestureRecognizer> } others - the gesture recognizers of the component on the response chain
 * @returns { GestureRecognizer } gesture recognizer of the component
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ShouldBuiltInRecognizerParallelWithCallback = (current: GestureRecognizer, others: Array<GestureRecognizer>) => GestureRecognizer;
/**
 * Defines the finish callback type used in transition.
 *
 * @typedef { function } TransitionFinishCallback
 * @param { boolean } transitionIn - a boolean value indicates whether it is the callback of transitionIn or transitionOut.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type TransitionFinishCallback = (transitionIn: boolean) => void;
/**
 * Defines the PixelMap type object for ui component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the PixelMap type object for ui component.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the PixelMap type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.multimedia.image').default.PixelMap } PixelMap
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type PixelMap = import('../../../api/@ohos.multimedia.image').default.PixelMap;
/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enum for Drag Behavior.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Enum for Drag Behavior.
 *
 * <strong>NOTE</strong>:<br>
 * DragBehavior serves to inform you about the intended method of data handling,
 * whether it's a copy or a move, but it does not actually dictate the real processing of the data.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum DragBehavior {
    /**
     * If drag use copy event, then set DragBehavior.COPY.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If drag use copy event, then set DragBehavior.COPY.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * If drag use copy event, then set DragBehavior.COPY.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    COPY,
    /**
     * If drag use move event, then set DragBehavior.MOVE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If drag use move event, then set DragBehavior.MOVE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * If drag use move event, then set DragBehavior.MOVE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    MOVE
}
/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.data.unifiedDataChannel').default.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Import the UnifiedData type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.data.unifiedDataChannel').default.UnifiedData } UnifiedData
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type UnifiedData = import('../../../api/@ohos.data.unifiedDataChannel').default.UnifiedData;
/**
 * Import the Summary type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.data.unifiedDataChannel').default.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the Summary type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.data.unifiedDataChannel').default.Summary } Summary
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type Summary = import('../../../api/@ohos.data.unifiedDataChannel').default.Summary;
/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the UniformDataType type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType } UniformDataType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type UniformDataType = import('../../../api/@ohos.data.uniformTypeDescriptor').default.UniformDataType;
/**
 * Import the GetDataParams type object for ui component.
 *
 * @typedef { import('../../../api/@ohos.data.unifiedDataChannel').default.GetDataParams } GetDataParams
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type DataSyncOptions = import('../../../api/@ohos.data.unifiedDataChannel').default.GetDataParams;
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * Enum for Drag Result.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum DragResult {
    /**
     * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * If the drag is successful, return DragResult.DRAG_SUCCESSFUL.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    DRAG_SUCCESSFUL = 0,
    /**
     * If drag fail, return DragResult.DRAG_FAILED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If drag fail, return DragResult.DRAG_FAILED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * If drag fail, return DragResult.DRAG_FAILED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    DRAG_FAILED = 1,
    /**
     * If drag action cancel, return DragResult.DRAG_CANCELED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If drag action cancel, return DragResult.DRAG_CANCELED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    DRAG_CANCELED = 2,
    /**
     * If node allow drop in, return DragResult.DROP_ENABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If node allow drop in, return DragResult.DROP_ENABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    DROP_ENABLED = 3,
    /**
     * If node don't allow drop in, return DragResult.DROP_DISABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If node don't allow drop in, return DragResult.DROP_DISABLED.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    DROP_DISABLED = 4
}
/**
 * Enum for BlendMode.
 * Blend modes for compositing current component
 * with overlapping content. Use overlapping content
 * as dst, current component as src.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for BlendMode.
 * Blend modes for compositing current component
 * with overlapping content. Use overlapping content
 * as dst, current component as src.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum BlendMode {
    /**
     * The top image is superimposed on the bottom image without any blending.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * The top image is superimposed on the bottom image without any blending.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    NONE = 0,
    /**
     * The target pixels covered by the source pixels are erased by being turned to completely transparent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * The target pixels covered by the source pixels are erased by being turned to completely transparent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    CLEAR = 1,
    /**
     * r = s: Only the source pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = s: Only the source pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    SRC = 2,
    /**
     * r = d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    DST = 3,
    /**
     * r = s + (1 - sa) * d: The source pixels are blended based on opacity and cover the target pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * r = s + (1 - sa) * d: The source pixels are blended based on opacity and cover the target pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    SRC_OVER = 4,
    /**
     * r = d + (1 - da) * s: The target pixels are blended based on opacity and cover on the source pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = d + (1 - da) * s: The target pixels are blended based on opacity and cover on the source pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    DST_OVER = 5,
    /**
     * r = s * da: Only the part of the source pixels that overlap with the target pixels is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * r = s * da: Only the part of the source pixels that overlap with the target pixels is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    SRC_IN = 6,
    /**
     * r = d * sa: Only the part of the target pixels that overlap with the source pixels is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = d * sa: Only the part of the target pixels that overlap with the source pixels is displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    DST_IN = 7,
    /**
     * r = s * (1 - da)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = s * (1 - da)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    SRC_OUT = 8,
    /**
     * r = d * (1 - sa)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = d * (1 - sa), retains the parts of the destination pixels that do not overlap with the source.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    DST_OUT = 9,
    /**
     * r = s * da + d * (1 - sa): The part of the source pixels that overlap with the target pixels is displayed
     * and the part of the target pixels that do not overlap with the source pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = s * da + d * (1 - sa): The part of the source pixels that overlap with the target pixels is displayed
     * and the part of the target pixels that do not overlap with the source pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    SRC_ATOP = 10,
    /**
     * r = d * sa + s * (1 - da)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = d * sa + s * (1 - da): The part of the target pixels that overlap with the source pixels
     * and the part of the source pixels that do not overlap with the target pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    DST_ATOP = 11,
    /**
     * r = s * (1 - da) + d * (1 - sa)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = s * (1 - da) + d * (1 - sa)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    XOR = 12,
    /**
     * r = min(s + d, 1)
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = min(s + d, 1):
     * New pixels resulting from adding the source pixels to the target pixels are displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    PLUS = 13,
    /**
     * r = s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    MODULATE = 14,
    /**
     * r = s + d - s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = s + d - s * d
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    SCREEN = 15,
    /**
     * multiply or screen, depending on destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * multiply or screen, depending on destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    OVERLAY = 16,
    /**
     * rc = s + d - max(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * rc = s + d - max(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    DARKEN = 17,
    /**
     * rc = s + d - min(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * rc = s + d - min(s * da, d * sa), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    LIGHTEN = 18,
    /**
     * brighten destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * brighten destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    COLOR_DODGE = 19,
    /**
     * darken destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * darken destination to reflect source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    COLOR_BURN = 20,
    /**
     * multiply or screen, depending on source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * multiply or screen, depending on source
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    HARD_LIGHT = 21,
    /**
     * The LIGHTEN or DARKEN mode is used, depending on the source pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * The LIGHTEN or DARKEN mode is used, depending on the source pixels.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    SOFT_LIGHT = 22,
    /**
     * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * rc = s + d - 2 * (min(s * da, d * sa)), ra = kSrcOver: The final pixel is the result of subtracting
     * the darker of the two pixels (source and target) from the lighter one.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    DIFFERENCE = 23,
    /**
     * rc = s + d - two(s * d), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * rc = s + d - two(s * d), ra = kSrcOver
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    EXCLUSION = 24,
    /**
     * r = s * (1 - da) + d * (1 - sa) + s * d:
     * The final pixel is the result of multiplying the source pixel by the target pixel.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * r = s * (1 - da) + d * (1 - sa) + s * d:
     * The final pixel is the result of multiplying the source pixel by the target pixel.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    MULTIPLY = 25,
    /**
     * hue of source with saturation and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * hue of source with saturation and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    HUE = 26,
    /**
     * saturation of source with hue and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * saturation of source with hue and luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    SATURATION = 27,
    /**
     * hue and saturation of source with luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * hue and saturation of source with luminosity of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    COLOR = 28,
    /**
     * luminosity of source with hue and saturation of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
    */
    /**
     * luminosity of source with hue and saturation of destination
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
    */
    LUMINOSITY = 29
}
/**
 * Enum for BlendApplyType.
 * Indicate how to apply specified blend mode to
 * the view's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Enum for BlendApplyType.
 * Indicate how to apply specified blend mode to
 * the view's content.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum BlendApplyType {
    /**
     * The content of the view is blended in sequence on the target image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * The content of the view is blended in sequence on the target image.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    FAST = 0,
    /**
     * The content of the component and its child components are drawn on the
     * offscreen canvas, and then blended with the existing content on the canvas.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * The content of the component and its child components are drawn on the
     * offscreen canvas, and then blended with the existing content on the canvas.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    OFFSCREEN = 1
}
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
/**
 * DragEvent object description
 *
 * @interface DragEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface DragEvent {
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * X coordinate of the touch point relative to the left edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getDisplayX(): number;
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Y coordinate of the touch point relative to the upper edge of the device screen.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getDisplayY(): number;
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * X coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getWindowX(): number;
    /**
     * Y coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Y coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Y coordinate of the touch point relative to the left edge of the current window.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getWindowY(): number;
    /**
     * X coordinate of the touch point relative to the left edge of the current window. in vp.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     * @useinstead DragEvent#getWindowX
     */
    getX(): number;
    /**
     * Y coordinate of the touch point relative to the left edge of the current window. in vp.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     * @useinstead DragEvent#getWindowY
     */
    getY(): number;
    /**
    * If copy is COPY, this DragEvent is a copy event.
    * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
    * @default COPY
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 10
    */
    /**
    * If copy is COPY, this DragEvent is a copy event.
    * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
    * @default COPY
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 11
    */
    /**
    * If copy is COPY, this DragEvent is a copy event.
    * @type { DragBehavior } Operation, if use copy then set COPY, else set MOVE.
    * @default COPY
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 18
    */
    dragBehavior: DragBehavior;
    /**
     * If useCustomDropAnimation is true, System will not use drop animation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * If useCustomDropAnimation is true, System will not use drop animation.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    useCustomDropAnimation: boolean;
    /**
     * Set dragData into DragEvent.
     *
     * @param { UnifiedData } unifiedData - dragData.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set dragData into DragEvent.
     *
     * @param { UnifiedData } unifiedData - dragData.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    setData(unifiedData: UnifiedData): void;
    /**
     * Get dragData from DragEvent.
     *
     * @returns { UnifiedData } - get dragData.
     * @throws { BusinessError } 190001 - Data not found.
     * @throws { BusinessError } 190002 - Data error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Get dragData from DragEvent.
     *
     * @returns { UnifiedData } - get dragData.
     * @throws { BusinessError } 190001 - Data not found.
     * @throws { BusinessError } 190002 - Data error.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getData(): UnifiedData;
    /**
     * Get dragData summary from DragEvent.
     *
     * @returns { Summary } - get Summary Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Get dragData summary from DragEvent.
     *
     * @returns { Summary } - get Summary Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getSummary(): Summary;
    /**
     * Set dragEvent result to DragEvent.
     *
     * @param { DragResult } dragResult - the return of dragEvent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Set dragEvent result to DragEvent.
     *
     * @param { DragResult } dragResult - the return of dragEvent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Set dragEvent result to DragEvent.
     *
     * @param { DragResult } dragResult - the return of dragEvent.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    setResult(dragResult: DragResult): void;
    /**
     * Get dragEvent result from DragEvent.
     *
     * @returns { DragResult } - dragResult Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Get dragEvent result from DragEvent.
     *
     * @returns { DragResult } - dragResult Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Get dragEvent result from DragEvent.
     *
     * @returns { DragResult } - dragResult Data.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getResult(): DragResult;
    /**
     * Get the rectangle of drag window.
     *
     * @returns { Rectangle } - getPreview rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Get the rectangle of drag window.
     *
     * @returns { Rectangle } - getPreview rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * Get the rectangle of drag window.
     *
     * @returns { Rectangle } - getPreview rectangle.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    getPreviewRect(): Rectangle;
    /**
     * Get the x axis velocity of drag gesture.
     *
     * @returns { number } - get x axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Get the x axis velocity of drag gesture.
     *
     * @returns { number } - get x axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getVelocityX(): number;
    /**
     * Get the y axis velocity of drag gesture.
     *
     * @returns { number } - get y axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Get the y axis velocity of drag gesture.
     *
     * @returns { number } - get y axis velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getVelocityY(): number;
    /**
     * Get the velocity of drag gesture.
     *
     * @returns { number } - get velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Get the velocity of drag gesture.
     *
     * @returns { number } - get velocity.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getVelocity(): number;
    /**
     * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'
     *
     * @param { Array<string> } keys - indicate the keys of the ModifierKey.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    /**
     * Query the ModifierKey press state, support 'ctrl'|'alt'|'shift'
     *
     * @param { Array<string> } keys - indicate the keys of the ModifierKey.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    getModifierKeyState?(keys: Array<string>): boolean;
    /**
     * Setup one drop animation execution callback, which will be triggered by system when user drops.
     * Use this way to implement the custom drop animation instead of doing it in onDrop, as the system
     * will decide when to trigger the callback during the drop handling.
     * [Note]:
     *   1. Please set useCustomDropAnimation to true as well when using this method.
     *   2. Do not implement the animation no-related logics in the callback.
     *
     * @param { Callback<void> } customDropAnimation - the custom drop animation function.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    executeDropAnimation(customDropAnimation: Callback<void>): void;
    /**
     * Request the drag data to be synchronized to caller, can be notified with the synchronization progress.
     * Only can be used in onDrop event processing.
     *
     * @param { DataSyncOptions } options - the data sync options.
     * @returns { string } The data key returned by system, which can be used as the identify of the request.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 190003 - Operation not allowed for current pharse.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    startDataLoading(options: DataSyncOptions): string;
    /**
     * Get the id of display which the drag event is occuring on.
     *
     * @returns { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    getDisplayId(): number;
}
/**
 * The event callback function for drag and drop common interfaces.
 * @typedef { function } OnDragEventCallback
 * @param { DragEvent } event - the event object indicating current drag status.
 * @param { string } [extraParams] - extra information set by user or system.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare type OnDragEventCallback = (event: DragEvent, extraParams?: string) => void;
/**
 * Defines the options for the drop handling.
 *
 * @interface DropOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare interface DropOptions {
    /**
     * Indicating to disable the UDMF data prefetch action by system or not.
     * The system will try to fetch data before calling user's onDrop for some situation,
     * it will retry to get data until the max time limit (2.4s for now) reaches,
     * this's useful for the cross device draging operation, as the system helps to eliminate
     * the communication instability, but it's redundant for startDataLoading method, as this
     * method will take care the data fetching with asynchronous mechanism, so must set this
     * field to true if using startDataLoading in onDrop to avoid the data is fetched before
     * onDrop executing unexpectedly.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    disableDataPrefetch?: boolean;
}
/**
 * Import the IntentionCode type object for IntentionCode.
 *
 * @typedef { import('../../../api/@ohos.multimodalInput.intentionCode').IntentionCode } IntentionCode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Import the IntentionCode type object for IntentionCode.
 *
 * @typedef { import('../../../api/@ohos.multimodalInput.intentionCode').IntentionCode } IntentionCode
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare type IntentionCode = import('../../../api/@ohos.multimodalInput.intentionCode').IntentionCode;
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * KeyEvent object description:
 *
 * @interface KeyEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface KeyEvent {
    /**
     * Type of a key.
     *
     * @type { KeyType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Type of a key.
     *
     * @type { KeyType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Type of a key.
     *
     * @type { KeyType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    type: KeyType;
    /**
     * Key code of a key
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Key code of a key
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Key code of a key
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    keyCode: number;
    /**
     * Key value of a key.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Key value of a key.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Key value of a key.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    keyText: string;
    /**
     * Type of the input device that triggers the current key, such as the keyboard or handle.
     *
     * @type { KeySource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Type of the input device that triggers the current key, such as the keyboard or handle.
     *
     * @type { KeySource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Type of the input device that triggers the current key, such as the keyboard or handle.
     *
     * @type { KeySource }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    keySource: KeySource;
    /**
     * Indicates the ID of the input device that triggers the current key.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Indicates the ID of the input device that triggers the current key.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the ID of the input device that triggers the current key.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    deviceId: number;
    /**
     * Indicates the status of the key when the key is pressed.
     * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Indicates the status of the key when the key is pressed.
     * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Indicates the status of the key when the key is pressed.
     * The value 1 indicates the pressed state, and the value 0 indicates the unpressed state.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    metaKey: number;
    /**
     * Timestamp when the key was pressed.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Timestamp when the key was pressed.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Timestamp when the key was pressed.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    timestamp: number;
    /**
     * Block event bubbling.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Block event bubbling.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Block event bubbling.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    stopPropagation: () => void;
    /**
     * Intention code of a key or modifier keys.
     *
     * @type { IntentionCode }
     * @default IntentionCode.INTENTION_UNKNOWN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Intention code of a key or modifier keys.
     *
     * @type { IntentionCode }
     * @default IntentionCode.INTENTION_UNKNOWN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    intentionCode: IntentionCode;
    /**
     * Get the modifier keys press state, support 'ctrl'|'alt'|'shift'
     *
     * @param { Array<string> } keys - indicate the modifier keys.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 12
     */
    /**
     * Get the modifier keys press state, support 'ctrl'|'alt'|'shift'
     *
     * @param { Array<string> } keys - indicate the modifier keys.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types. 2. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    getModifierKeyState?(keys: Array<string>): boolean;
    /**
     * Unicode of a key
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 14
     */
    unicode?: number;
    /**
     * Whether Num Lock is on
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    isNumLockOn?: boolean;
    /**
     * Whether Caps Lock is on
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    isCapsLockOn?: boolean;
    /**
     * Whether Scroll Lock is on
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    isScrollLockOn?: boolean;
}
/**
 * Focus axis event object description.
 *
 * @extends BaseEvent
 * @interface FocusAxisEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 15
 */
declare interface FocusAxisEvent extends BaseEvent {
    /**
     * The axis values of axis event.
     *
     * @type { Map<AxisModel, number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    axisMap: Map<AxisModel, number>;
    /**
     * The blocking event pops up.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    stopPropagation: Callback<void>;
}
/**
 * CrownEvent object description
 *
 * @interface CrownEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18
 */
declare interface CrownEvent {
    /**
     *The timestamp of the rotating crown event.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    timestamp: number;
    /**
     * The angular velocity of a rotating crown.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    angularVelocity: number;
    /**
     * The rotation angle of the rotating crown.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    degree: number;
    /**
     * The behavior of rotating crown.
     *
     * @type { CrownAction }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    action: CrownAction;
    /**
     * The blocking event pops up.
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    stopPropagation: Callback<void>;
}
/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Overlay module options
 *
 * @interface BindOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface BindOptions {
    /**
     * Background color of the sheet.
     * <br>Default value: **Color.White**.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Background color of the sheet.
     * <br>Default value: **Color.White**.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    backgroundColor?: ResourceColor;
    /**
     * Callback for when the sheet is displayed (after the animation ends).
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback for when the sheet is displayed (after the animation ends).
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onAppear?: () => void;
    /**
     * Callback for when the sheet disappears (after the animation ends).
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback for when the sheet disappears (after the animation ends).
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onDisappear?: () => void;
    /**
     * Callback for when the sheet is about to be displayed (before the animation starts).
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillAppear?: () => void;
    /**
     * Callback function before overlay popAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDisappear?: () => void;
}
/**
 * Component content cover dismiss
 *
 * @interface DismissContentCoverAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DismissContentCoverAction {
    /**
     * Defines content cover dismiss function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dismiss: Callback<void>;
    /**
     * Defines content cover dismiss reason
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reason: DismissReason;
}
/**
 * Component content cover options
 *
 * @extends BindOptions
 * @interface ContentCoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Component content cover options
 *
 * @extends BindOptions
 * @interface ContentCoverOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ContentCoverOptions extends BindOptions {
    /**
     * Defines transition type
     *
     * @type { ?ModalTransition }
     * @default ModalTransition.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines transition type
     *
     * @type { ?ModalTransition }
     * @default ModalTransition.Default
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    modalTransition?: ModalTransition;
    /**
     * Callback function when the content cover interactive dismiss
     *
     * @type { ?Callback<DismissContentCoverAction> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDismiss?: Callback<DismissContentCoverAction>;
    /**
     * Defines transition effect param
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition?: TransitionEffect;
}
/**
 * Component sheet title options
 *
 * @interface SheetTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Component sheet title options
 *
 * @interface SheetTitleOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SheetTitleOptions {
    /**
     * Defines title text
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines title text
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    title: ResourceStr;
    /**
     * Defines subtitle text
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines subtitle text
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    subtitle?: ResourceStr;
}
/**
 * Defines the sheet type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the sheet type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum SheetType {
    /**
     * Bottom sheet.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Bottom sheet.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    BOTTOM = 0,
    /**
     * Center sheet.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Center sheet.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    CENTER = 1,
    /**
     * Popup sheet. The popup sheet cannot be dismissed with a pull-down gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Popup sheet. The popup sheet cannot be dismissed with a pull-down gesture.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    POPUP = 2,
    /**
     * Defines side sheet type.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    SIDE = 3
}
/**
 * Define the display mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum SheetMode {
    /**
     * The sheet is displayed at the top of the window corresponding to the current **UIContext** instance,
     * above all pages. It is displayed at the same level as dialog boxes.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    OVERLAY = 0,
    /**
     * The sheet is displayed at the top of the current page.
     * <br>**NOTE**<br>Currently, the sheet can only be mounted on a **Page**
     * or **NavDestination** node, with priority given to the **NavDestination**
     * node if it is present. This means that, the sheet can only be displayed at
     * the top of these two types of pages.<br> In this mode, new pages can overlay
     * the sheet, and when the user returns to the previous page, the sheet remains
     * present without losing its content.<br> In this mode, you must ensure that
     * the target page node, such as the **Page** node, has been attached to the tree
     * before bringing up the sheet; otherwise, the sheet will not be able to be
     * attached to the corresponding page node.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    EMBEDDED = 1
}
/**
 * Define the scroll size mode of the sheet.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum ScrollSizeMode {
    /**
     * Sheet change scroll size after the slide ends.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    FOLLOW_DETENT = 0,
    /**
     * Sheet change scroll size during the sliding process.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    CONTINUOUS = 1
}
/**
 * Define the mode of sheet how to avoid keyboard.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13
 */
declare enum SheetKeyboardAvoidMode {
    /**
     * Sheet will not aovid keyboard.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    NONE = 0,
    /**
     * Firstly sheet will avoid keyboard by changing its height.
     * And then sheet will avoid by resizing after reaching its maximum height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    TRANSLATE_AND_RESIZE = 1,
    /**
     * Sheet will only avoid keyboard by resizing the content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    RESIZE_ONLY = 2,
    /**
     * Firstly sheet will avoid keyboard by changing its height.
     * And then sheet will avoid keyboard by scrolling after reaching its maximum height.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    TRANSLATE_AND_SCROLL = 3
}
/**
 * Component sheet dismiss
 *
 * @interface SheetDismiss
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Component sheet dismiss
 *
 * @interface SheetDismiss
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SheetDismiss {
    /**
     * Defines sheet dismiss function
     *
     * @type { function  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines sheet dismiss function
     *
     * @type { function  }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dismiss: () => void;
}
/**
 * Component sheet dismiss
 *
 * @interface DismissSheetAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DismissSheetAction {
    /**
     * Defines sheet dismiss function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dismiss: Callback<void>;
    /**
     * Dismiss reason type.
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reason: DismissReason;
}
/**
 * Defines sheet spring back action
 *
 * @interface SpringBackAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SpringBackAction {
    /**
     * Defines spring back function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    springBack: Callback<void>;
}
/**
 * Component sheet options
 *
 * @extends BindOptions
 * @interface SheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Component sheet options
 *
 * @extends BindOptions
 * @interface SheetOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface SheetOptions extends BindOptions {
    /**
     * Defines sheet height
     *
     * @type { ?(SheetSize | Length) }
     * @default Sheet.LARGE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Defines sheet height
     *
     * @type { ?(SheetSize | Length) }
     * @default Sheet.LARGE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    height?: SheetSize | Length;
    /**
     * Whether to display the drag bar.
     * <br>**NOTE**<br>By default, the drag bar is displayed only when the sheet's
     * **detents** attribute is set to multiple heights and the settings take effect.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to display the drag bar.
     * <br>**NOTE**<br>By default, the drag bar is displayed only when the sheet's
     * **detents** attribute is set to multiple heights and the settings take effect.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    dragBar?: boolean;
    /**
     * Mask color of the sheet.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Mask color of the sheet.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    maskColor?: ResourceColor;
    /**
     * Defines sheet detents
     * @type { ?[(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Array of heights where the sheet can rest.
     * <p>**NOTE**:
     * <br>Since API version 12, this attribute takes effect for a bottom sheet in landscape mode.
     * <br>In earlier versions, this attribute takes effect only for the bottom sheet in portrait mode.
     * <br>The first height in the tuple is the initial height.
     * <br>The sheet can switch between heights by dragging.
     * <br>After the sheet is dragged and released, it switches to the target height or remains at the current height,
     * depending on the velocity and distance.
     * <br>If the velocity exceeds the threshold, the sheet switches to the target height in the same direction as the
     * velocity.
     * <br>If the velocity is less than the threshold, the displacement distance is used for judgement.
     * <br>If the displacement distance is greater than 1/2 of the distance between the current and target positions,
     * the sheet switches to the target height in the same direction as the velocity; otherwise, the sheet remains at the
     * current height.
     * <br>Velocity threshold: 1000; Distance threshold: 50%.
     * </p>
     *
     * @type { ?[(SheetSize | Length), (SheetSize | Length)?, (SheetSize | Length)?] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    detents?: [
        (SheetSize | Length),
        (SheetSize | Length)?,
        (SheetSize | Length)?
    ];
    /**
     * Background blur of the sheet. By default, there is no background blur.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Background blur of the sheet. By default, there is no background blur.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    blurStyle?: BlurStyle;
    /**
     * Defines whether the close icon is displayed
     *
     * @type { ?(boolean | Resource) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines whether the close icon is displayed
     *
     * @type { ?(boolean | Resource) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    showClose?: boolean | Resource;
    /**
     * Type of the sheet.
     * <br>**NOTE**<br>The types supported by the sheet vary by window.
     * <br>1. Width < 600 vp: bottom.
     * <br>2. 600 vp <= Width: bottom, center, and popup (default).
     * <br>3. Width >= 840 vp: bottom, center, and popup (default).
     *
     * @type { ?(SheetType.CENTER | SheetType.POPUP) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
    * Type of the sheet.
    * <br>**NOTE**<br>The types supported by the sheet vary by window.
    * <br>1. Width < 600 vp: bottom.
    * <br>2. 600 vp <= Width: bottom, center, and popup (default).
    * <br>3. Width >= 840 vp: bottom, center, and popup (default).
    *
    * @type { ?SheetType }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    preferType?: SheetType;
    /**
     * Title of the sheet.
     *
     * @type { ?(SheetTitleOptions | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Title of the sheet.
     *
     * @type { ?(SheetTitleOptions | CustomBuilder) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    title?: SheetTitleOptions | CustomBuilder;
    /**
     * Callback invoked when the user performs an interactive dismiss operation: pulling down or clicking
     * the back button, the mask, or the close icon.<br>**NOTE**<br>If this callback is registered, the
     * sheet is not dismissed immediately when the user performs the above operations. To dismiss the sheet,
     * you must call **shouldDismiss.dismiss()** in the callback.<br>If this callback is not registered, the
     * sheet is dismissed immediately when the user performs the above operations, without any additional
     * behavior.<br>It is recommended that this API be used in scenarios where a secondary confirmation is required.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Callback invoked when the user performs an interactive dismiss operation: pulling down or clicking
     * the back button, the mask, or the close icon.<br>**NOTE**<br>If this callback is registered, the
     * sheet is not dismissed immediately when the user performs the above operations. To dismiss the sheet,
     * you must call **shouldDismiss.dismiss()** in the callback.<br>If this callback is not registered, the
     * sheet is dismissed immediately when the user performs the above operations, without any additional
     * behavior.<br>It is recommended that this API be used in scenarios where a secondary confirmation is required.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shouldDismiss?: (sheetDismiss: SheetDismiss) => void;
    /**
     * Callback invoked when the user performs an interactive dismiss operation:
     * pulling down or clicking the back button, the mask, or the close icon,
     * to obtain the type of dismiss operation and decide whether to dismiss the sheet.
     * <p>**NOTE**:
     * <br>If this callback is registered, the sheet is not dismissed immediately when the user performs the above
     * operations.
     * <br>Instead, you can use the DismissSheetAction parameter in the callback to determine the type of
     * dismiss operation and decide whether to dismiss the sheet.
     * <br>If this callback is not registered, the sheet is dismissed immediately when the user performs the above
     * operations, without any additional behavior.
     * <br>No further interception with onWillDismiss is allowed in an onWillDismiss callback.
     * </p>
     *
     * @type { ?Callback<DismissSheetAction> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDismiss?: Callback<DismissSheetAction>;
    /**
    * Callback invoked when the user performs a pull-down-to-dismiss gesture, to control the bounce effect.
    * <p>**NOTE**:
    * <br>If this callback is registered along with **shouldDismiss** or **onWillDismiss** you can control whether the
    * sheet bounces back during the pull-down-to-dismiss operation by calling **springBack** in the callback.
    * <br>If this callback is not registered but **shouldDismiss** or **onWillDismiss** is registered, the sheet will
    * bounce back before remaining open or being dismissed based on the callback behavior.
    * <br>If neither this callback nor **shouldDismiss** or **onWillDismiss** is registered, the sheet is dismissed by
    * default during the pull-down-to-dismiss operation.
    * </p>
    *
    * @type { ?Callback<SpringBackAction> }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    onWillSpringBackWhenDismiss?: Callback<SpringBackAction>;
    /**
     * Whether to allow users to interact with the page pertaining to the sheet.
     * <br>**NOTE**<br>The value **true** means that interactions are allowed, in which
     * case no mask is not displayed. The value **false** means that interactions are not
     * allowed, in which case a mask is displayed. If this parameter is not set, interactions
     * are allowed for the popup sheet, but not for bottom and center sheets. If this parameter
     * is set to **true**, the setting of **maskColor** does not take effect.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Whether to allow users to interact with the page pertaining to the sheet.
     * <br>**NOTE**<br>The value **true** means that interactions are allowed, in which
     * case no mask is not displayed. The value **false** means that interactions are not
     * allowed, in which case a mask is displayed. If this parameter is not set, interactions
     * are allowed for the popup sheet, but not for bottom and center sheets. If this parameter
     * is set to **true**, the setting of **maskColor** does not take effect.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    enableOutsideInteractive?: boolean;
    /**
     * Width of the sheet.
     * Percentage parameter method: Set the width of the sheet as a percentage of the width of the parent element.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width?: Dimension;
    /**
     * Border width of the sheet.
     * You can set the width for all four sides or set separate widths for individual sides.
     * Default value: **0**.
     * Percentage parameter method:
     * Set the border width of the sheet as a percentage of the width of the parent element.
     * If the left and right border widths of the sheet are greater than the width of the sheet, and the top
     * and bottom border widths are greater than the height of the sheet, the display may not appear as expected.
     * <p>**Note**:
     * <br>For bottom sheets, the bottom border width setting is ineffective.
     * </p>
     *
     * @type { ?(Dimension | EdgeWidths | LocalizedEdgeWidths) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderWidth?: Dimension | EdgeWidths | LocalizedEdgeWidths;
    /**
     * Border color of the sheet.
     * **borderColor** must be used with **borderWidth** in pairs.
     * <p>**NOTE**:
     * <br>For bottom sheets, the bottom border color setting is ineffective.
     * </p>
     *
     * @type { ?(ResourceColor | EdgeColors | LocalizedEdgeColors) }
     * @default Color.Black
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderColor?: ResourceColor | EdgeColors | LocalizedEdgeColors;
    /**
     * Defines the sheet's border style.
     *
     * @type { ?(BorderStyle | EdgeStyles) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderStyle?: BorderStyle | EdgeStyles;
    /**
     * Shadow of the sheet.
     * Default value for 2-in-1 devices: **ShadowStyle.OUTER_FLOATING_SM**.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Callback for changes in the height of the sheet.
     * <p>**Note**:
     * <br>For a bottom sheet, the height of each frame is only returned when there are changes in detents or during drag
     * actions.
     * <br>When the sheet is pulled up or making space for the soft keyboard, only the final height is returned.
     * <br>For other types of sheets, the final height is only returned when the sheet is pulled up.
     * <br>The return value is in px.
     * <p>
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onHeightDidChange?: Callback<number>;
    /**
     * Determine the level sheet shows, whether sheet should be displayed within the page.
     *
     * @type { ?SheetMode }
     * @default SheetMode.OVERLAY
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mode?: SheetMode;
    /**
     * Content update mode of the sheet when it is scrolled.
     *
     * @type { ?ScrollSizeMode }
     * @default ScrollSizeMode.FELLOW_DETEND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    scrollSizeMode?: ScrollSizeMode;
    /**
     * Callback for changes in the detents of the sheet.
     * <p>**NOTE**:
     * <br>For a bottom sheet, the final height is returned when there are changes in detents.
     * <br>The return value is in px.
     * </p>
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDetentsDidChange?: Callback<number>;
    /**
     * Called when width of the sheet changed
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWidthDidChange?: Callback<number>;
    /**
     * Called when the sheet type changed
     *
     * @type { ?Callback<SheetType> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onTypeDidChange?: Callback<SheetType>;
    /**
     * The UIContext that the sheet belongs to
     *
     * @type { ?UIContext }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    uiContext?: UIContext;
    /**
     * Determine the mode of sheet how to avoid keyboard.
     *
     * @type { ?SheetKeyboardAvoidMode }
     * @default SheetKeyboardAvoidMode.TRANSLATE_AND_SCROLL
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    keyboardAvoidMode?: SheetKeyboardAvoidMode;
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
     * Defines the sheet's display area in hover mode.
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
     * Sets whether the sheet edge has spring effect.
     *
     * @type { ?number }
     * @default 3
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    effectEdge?: number;
    /**
     * Defines sheet radius
     *
     * @type { ?(LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    radius?: LengthMetrics | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * Select a detent from detents property
     *
     * @type { ?(SheetSize | Length) }
     * @default detents[0]
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    detentSelection?: SheetSize | Length;
    /**
     * Whether to display in the sub window
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    showInSubWindow?: boolean;
    /**
     * The placement of popup sheet type.
     * Supports all positions defined in Placement.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    placement?: Placement;
    /**
     * placement On target node
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    placementOnTarget?: boolean;
}
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Component State Styles.
 *
 * @interface StateStyles
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface StateStyles {
    /**
     * Defines normal state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines normal state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines normal state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines normal state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    normal?: any;
    /**
     * Defines pressed state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines pressed state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines pressed state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines pressed state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    pressed?: any;
    /**
     * Defines disabled state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines disabled state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines disabled state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines disabled state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    disabled?: any;
    /**
     * Defines focused state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines focused state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines focused state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines focused state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    focused?: any;
    /**
     * Defines clicked state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Defines clicked state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines clicked state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines clicked state styles.
     *
     * @type { ?any }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    clicked?: any;
    /**
     * Defines selected state styles.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines selected state styles.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    selected?: object;
}
/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the options of popup message.
 *
 * @interface PopupMessageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PopupMessageOptions {
    /**
     * Sets the color of popup text.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the color of popup text.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    textColor?: ResourceColor;
    /**
     * Sets the font of popup text.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the font of popup text.
     *
     * @type { ?Font }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    font?: Font;
}
/**
 * Dismiss reason type.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum DismissReason {
    /**
    * Touching the Back button, swiping left or right on the screen, or pressing the Esc key.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    PRESS_BACK = 0,
    /**
    * Touching the mask.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    TOUCH_OUTSIDE = 1,
    /**
    * Touching the Close button.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    CLOSE_BUTTON = 2,
    /**
    * Slide down
    * <p><strong>NOTE</strong>:
    * <br>This API is effective only in sheet transition.
    * </p>
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    SLIDE_DOWN = 3,
    /**
    * Slide, not slide down.
    * Default means slide right, after mirroring it means slide left.
    * Choosing to slide left or slide right is not supported.
    *
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 20
    */
    SLIDE = 4
}
/**
 * Component popup dismiss
 *
 * @interface DismissPopupAction
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface DismissPopupAction {
    /**
     * Defines popup dismiss function
     *
     * @type { Callback<void> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dismiss: Callback<void>;
    /**
     * Defines popup dismiss reason
     *
     * @type { DismissReason }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    reason: DismissReason;
}
/**
 * Popup state change param
 *
 * @interface PopupStateChangeParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface PopupStateChangeParam {
    /**
     * is Visible.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    isVisible: boolean;
}
/**
 * Popup state change callback
 *
 * @typedef { function } PopupStateChangeCallback
 * @param { PopupStateChangeParam } event - The parameter of state change callback.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare type PopupStateChangeCallback = (event: PopupStateChangeParam) => void;
/**
 * Popup mask type
 *
 * @interface PopupMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface PopupMaskType {
    /**
     * Color.
     *
     * @type { ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    color: ResourceColor;
}
/**
 * Popup border LinearGradient
 *
 * @interface PopupBorderLinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface PopupBorderLinearGradient {
    /**
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    direction?: GradientDirection;
    /**
     * Defines color description for gradients.
     * number: The position of the color stop. The value range is 0 to 1.
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
}
/**
 * Popup common options
 *
 * @interface PopupCommonOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface PopupCommonOptions {
    /**
     * placement of popup.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    placement?: Placement;
    /**
     * Set the background color of the popup.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    popupColor?: ResourceColor;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    enableArrow?: boolean;
    /**
     * Whether hide popup when click mask
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onStateChange?: PopupStateChangeCallback;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | PopupMaskType) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    mask?: boolean | PopupMaskType;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    targetSpace?: Length;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    offset?: Position;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    backgroundBlurStyle?: BlurStyle;
    /**
     * Set popup focusable
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    focusable?: boolean;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    transition?: TransitionEffect;
    /**
     * Callback function when the popup interactive dismiss.
     * Use boolean to respond all interactive dismiss event. Use Callback to customize which event should be responded.
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
    */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Determine if it is compatible popup's half folded.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    followTransformOfTarget?: boolean;
    /**
     * The width of popup's outline.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    outlineWidth?: Dimension;
    /**
     * The width of popup's border.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderWidth?: Dimension;
    /**
     * The LinearGradient of popup's outline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * The LinearGradient of popup's innerline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderLinearGradient?: PopupBorderLinearGradient;
}
/**
 * Defines the Tips options.
 *
 * @interface TipsOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare interface TipsOptions {
    /**
     * Defines the delay time for appearing.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    appearingTime?: number;
    /**
     * Defines the delay time for disappearing.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    disappearingTime?: number;
    /**
     * Define the delay time for the appearance of continuous operations.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    appearingTimeWithContinuousOperation?: number;
    /**
     * Define the delay time for the disappearance of continuous operations.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    disappearingTimeWithContinuousOperation?: number;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    enableArrow?: boolean;
    /**
     * The position of the sharp corner of Tips.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    arrowHeight?: Dimension;
}
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the popup options.
 *
 * @interface PopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PopupOptions {
    /**
     * Information in the pop-up window.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Information in the pop-up window.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Content of the popup message.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    message: string;
    /**
     * placement On Top
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 10
     * @useinstead PopupOptions#placement
     */
    placementOnTop?: boolean;
    /**
     * The placement of popup.
     * Supports all positions defined in Placement.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The placement of popup.
     * Supports all positions defined in Placement.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    placement?: Placement;
    /**
     * The first button.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The first button.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The first button.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    primaryButton?: {
        /**
         * Button text value
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * Button text value
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        /**
         * Button text value
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        value: string;
        /**
         * action
         *
         * @type { function }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * action
         *
         * @type { function }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        /**
         * action
         *
         * @type { function }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        action: () => void;
    };
    /**
     * The second button.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The second button.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The second button.
     *
     * @type { ?object }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    secondaryButton?: {
        /**
         * Button text value
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * Button text value
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        /**
         * Button text value
         *
         * @type { string }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        value: string;
        /**
         * action
         *
         * @type { function }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @since 7
         */
        /**
         * action
         *
         * @type { function }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        /**
         * action
         *
         * @type { function }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        action: () => void;
    };
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onStateChange?: (event: {
        /**
         * is Visible.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        /**
         * is Visible.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        isVisible: boolean;
    }) => void;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | { color: ResourceColor }) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | { color: ResourceColor }) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    mask?: boolean | {
        color: ResourceColor;
    };
    /**
     * Sets the options of popup message.
     *
     * @type { ?PopupMessageOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Parameters of the popup message.
     *
     * @type { ?PopupMessageOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    messageOptions?: PopupMessageOptions;
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    targetSpace?: Length;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enableArrow?: boolean;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offset?: Position;
    /**
     * Set the background color of the popup.
     *
     * @type { ?(Color | string | Resource | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Set the background color of the popup.
     *
     * @type { ?(Color | string | Resource | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    popupColor?: Color | string | Resource | number;
    /**
     * Whether hide popup when click mask
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Whether hide popup when click mask
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    autoCancel?: boolean;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
      * The width of the arrow.
      *
      * @type { ?Dimension }
      * @default 16.0_vp.
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @since 11
      */
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines popup background blur Style
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
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition?: TransitionEffect;
    /**
     * Callback function when the popup interactive dismiss
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
     * Determine if it is compatible popup's half folded.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    followTransformOfTarget?: boolean;
    /**
     * Define the popup avoid keyboard mode.
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * The width of popup's outline.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    outlineWidth?: Dimension;
    /**
     * The width of popup's border.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderWidth?: Dimension;
    /**
     * The LinearGradient of popup's outline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * The LinearGradient of popup's innerline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderLinearGradient?: PopupBorderLinearGradient;
}
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the custom popup options.
 *
 * @interface CustomPopupOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface CustomPopupOptions {
    /**
     * builder of popup
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * builder of popup
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Popup builder.
     * <p><strong>NOTE</strong>:
     * <br>The popup attribute is a universal attribute. A custom popup does not support display of another popup.
     * <br>The position attribute cannot be used for the first-layer container in the builder.
     * <br>If the position attribute is used, the popup will not be displayed.
     * <br>If a custom component is used in the builder, the aboutToAppear and aboutToDisappear lifecycle callbacks
     * of the custom component are irrelevant to the visibility of the popup. As such, the lifecycle of the
     * custom component cannot be used to determine whether the popup is displayed or not.
     * </p>
     *
     * @type { CustomBuilder }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    builder: CustomBuilder;
    /**
     * placement of popup
     *
     * @type { ?Placement }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * placement of popup
     *
     * @type { ?Placement }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Preferred position of the popup. If the set position is insufficient for holding the popup,
     * it will be automatically adjusted.
     *
     * @type { ?Placement }
     * @default Placement.Bottom
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    placement?: Placement;
    /**
     * mask color of popup
     *
     * @type { ?(Color | string | Resource | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     * @deprecated since 10
     * @useinstead CustomPopupOptions#mask
     */
    maskColor?: Color | string | Resource | number;
    /**
     * background color of popup
     *
     * @type { ?(Color | string | Resource | number) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * background color of popup
     *
     * @type { ?(Color | string | Resource | number) }
     * @default '#4d4d4d'
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Color of the popup. To remove the background blur, set backgroundBlurStyle to BlurStyle.NONE.
     *
     * @type { ?(Color | string | Resource | number) }
     * @default TRANSPARENT plus COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    popupColor?: Color | string | Resource | number;
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * whether show arrow
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enableArrow?: boolean;
    /**
     * whether hide popup when click mask
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * whether hide popup when click mask
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to automatically dismiss the popup when an operation is performed on the page.
     * <p><strong>NOTE</strong>:
     * <br>To enable the popup to disappear upon a click on it, place a layout component in the builder place the
     * <Popup> component in the layout component, and modify the value of the bindPopup variable (show: boolean)
     * in the onClick event of the layout component.
     * </p>
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    autoCancel?: boolean;
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * on State Change
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback for the popup status change event.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onStateChange?: (event: {
        /**
         * is Visible.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @since 10
         */
        /**
         * is Visible.
         *
         * @type { boolean }
         * @syscap SystemCapability.ArkUI.ArkUI.Full
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        isVisible: boolean;
    }) => void;
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * The offset of the sharp corner of popup.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The offset of the sharp corner of popup.
     *
     * Offset of the popup arrow relative to the popup. When the arrow is at the top or bottom of the popup:
     * <br>The value 0 indicates that the arrow is located on the leftmost, and any other value indicates the distance
     * from the arrow to the leftmost; the arrow is centered by default. When the arrow is on the left or right
     * side of the popup: The value indicates the distance from the arrow to the top; the arrow is centered by
     * default. When the popup is displayed on either edge of the screen, it will automatically deviate leftward
     * or rightward to stay within the safe area. When the value is 0, the arrow always points to the bound component.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    arrowOffset?: Length;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    showInSubWindow?: boolean;
    /**
     * The mask to block gesture events of popup.
     * When mask is set false, gesture events are not blocked.
     * When mask is set true, gesture events are blocked and mask color is transparent.
     *
     * @type { ?(boolean | { color: ResourceColor }) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Whether to apply a mask to the popup.
     * <br>The value true means to apply a transparent mask to the popup, false means not to apply a mask to the popup,
     * and a color value means to apply a mask in the corresponding color to the popup.
     *
     * @type { ?(boolean | { color: ResourceColor }) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    mask?: boolean | {
        color: ResourceColor;
    };
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the space of between the popup and target.
     *
     * @type { ?Length }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    targetSpace?: Length;
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the position offset of the popup.
     *
     * @type { ?Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offset?: Position;
    /**
     * Set the width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Width of the popup.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    width?: Dimension;
    /**
     * The position of the sharp corner of popup.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Position of the popup arrow relative to its parent component. Available positions are Start, Center, and End,
     * in both vertical and horizontal directions. All these positions are within the parent component area.
     *
     * @type { ?ArrowPointPosition }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    arrowPointPosition?: ArrowPointPosition;
    /**
     * The width of the arrow.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Arrow thickness. If the arrow thickness exceeds the length of the edge minus twice the size of the popup
     * rounded corner, the arrow is not drawn.
     *
     * @type { ?Dimension }
     * @default 16.0_vp.
     * <p><strong>NOTE</strong>:
     * <br>This parameter cannot be set in percentage.
     * </p>
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    arrowWidth?: Dimension;
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The height of the arrow.
     *
     * @type { ?Dimension }
     * @default 8.0_vp.
     * <p><strong>NOTE</strong>:
     * <br>This parameter cannot be set in percentage.
     * </p>
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    arrowHeight?: Dimension;
    /**
     * The round corners of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Rounded corner radius of the popup.
     *
     * @type { ?Dimension }
     * @default 20.0_vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    radius?: Dimension;
    /**
     * The style of popup Shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Popup shadow.
     *
     * @type { ?(ShadowOptions | ShadowStyle) }
     * @default ShadowStyle.OUTER_DEFAULT_MD.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shadow?: ShadowOptions | ShadowStyle;
    /**
     * Defines popup background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Background blur style of the popup.
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
     * Set popup focusable
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Set popup focusable
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    focusable?: boolean;
    /**
     * Defines the transition effect of popup opening and closing
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition?: TransitionEffect;
    /**
     * Whether to perform dismissal event interception and interception callback.
     * 1. If this parameter is set to false, the system does not respond to the dismissal event initiated by
     * touching the Back button, swiping left or right on the screen, or pressing the Esc key; and the system
     * dismisses the popup only when show is set to false. If this parameter is set to true, the system responds
     * to the dismissal event as expected.
     * 2. If this parameter is set to a function, the dismissal event is intercepted and the callback function
     * is executed.
     * <p><strong>NOTE</strong>:
     * <br>No more onWillDismiss callback is allowed in an onWillDismiss callback.
     * </p>
     *
     * @type { ?(boolean | Callback<DismissPopupAction>) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
    */
    onWillDismiss?: boolean | Callback<DismissPopupAction>;
    /**
      * Determine if it is compatible popup's half folded.
      *
      * @type { ?boolean }
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 18
      */
    enableHoverMode?: boolean;
    /**
     * Determine if popup can follow the target node when it has rotation or scale.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    followTransformOfTarget?: boolean;
    /**
     * Define the popup avoid keyboard mode.
     *
     * @type { ?KeyboardAvoidMode }
     * @default KeyboardAvoidMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    keyboardAvoidMode?: KeyboardAvoidMode;
    /**
     * The width of popup's outline.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    outlineWidth?: Dimension;
    /**
     * The width of popup's border.
     *
     * @type { ?Dimension }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderWidth?: Dimension;
    /**
     * The LinearGradient of popup's outline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    outlineLinearGradient?: PopupBorderLinearGradient;
    /**
     * The LinearGradient of popup's innerline.
     *
     * @type { ?PopupBorderLinearGradient }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    borderLinearGradient?: PopupBorderLinearGradient;
}
/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the menu preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum MenuPreviewMode {
    /**
     * No preview content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * No preview content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NONE = 0,
    /**
     * Defines image type preview content.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The preview is a screenshot of the component on which a long-press triggers the context menu.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    IMAGE = 1
}
/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [from: T, to: T] } AnimationRange<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the animator range of start and end property.
 *
 * @typedef { [from: T, to: T] } AnimationRange<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type AnimationRange<T> = [
    from: T,
    to: T
];
/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the ContextMenu's preview animator options.
 *
 * @interface ContextMenuAnimationOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface ContextMenuAnimationOptions {
    /**
     * Sets the start animator scale and end animator scale.
     *
     * @type { ?AnimationRange<number> }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the start animator scale and end animator scale.
     *
     * @type { ?AnimationRange<number> }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    scale?: AnimationRange<number>;
    /**
     * Defines the transition effect of menu preview opening and closing.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition?: TransitionEffect;
    /**
     * Sets the scale start and end animator of the image displayed before the custom builder preview is displayed.
     *
     * @type { ?AnimationRange<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    hoverScale?: AnimationRange<number>;
}
/**
   * Defines the type of border radius.
   *
   * @typedef { Length | BorderRadiuses | LocalizedBorderRadiuses }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @atomicservice
   * @since 19
   */
type BorderRadiusType = Length | BorderRadiuses | LocalizedBorderRadiuses;
/**
 * Defines the menu haptic feedback mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum HapticFeedbackMode {
    /**
     * No haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    DISABLED = 0,
    /**
     * Defines menu always haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    ENABLED = 1,
    /**
     * Defines menu automatically haptic feedback.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    AUTO = 2
}
/**
 * Menu mask type
 *
 * @interface MenuMaskType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface MenuMaskType {
    /**
     * Mask color of menu.
     *
     * @type { ?ResourceColor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    color?: ResourceColor;
    /**
     * Set menu mask background blur Style.
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.BACKGROUND_THIN
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    backgroundBlurStyle?: BlurStyle;
}
/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the context menu options.
 *
 * @interface ContextMenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ContextMenuOptions {
    /**
     * Sets the position offset of the context menu window.
     *
     * @type { ?Position }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Offset for showing the context menu, which should not cause the menu to extend beyond the screen.
     * <p><strong>NOTE</strong>:
     * <br>When the menu is displayed relative to the parent component area, the width or height of the area is
     * automatically counted into the offset based on the placement attribute of the menu. When the menu is
     * displayed above the parent component (that is, placement is set to Placement.TopLeft, Placement.Top, or
     * Placement.TopRight), a positive value of x indicates rightward movement relative to the parent component,
     * and a positive value of y indicates upward movement. When the menu is displayed below the parent component
     * (that is, placement is set to Placement.BottomLeft, Placement.Bottom, or Placement.BottomRight), a positive
     * value of x indicates rightward movement relative to the parent component, and a positive value of y indicates
     * downward movement. When the menu is displayed on the left of the parent component (that is, placement is set
     * to Placement.LeftTop, Placement.Left, or Placement.LeftBottom), a positive value of x indicates leftward
     * movement relative to the parent component, and a positive value of y indicates downward movement. When the
     * menu is displayed on the right of the parent component (that is, placement is set to Placement.RightTop,
     * Placement.Right, or Placement.RightBottom), a positive value of x indicates rightward movement relative to
     * the parent component, and a positive value of y indicates downward movement. If the display position of the
     * menu is adjusted (different from the main direction of the initial placement value), the offset value is invalid.
     * </p>
     *
     * @type { ?Position }
     * @default {x:0,y:0} - Percentage values are not supported.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    offset?: Position;
    /**
     * Sets the placement of the context menu window.
     *
     * @type { ?Placement }
     * @default -
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Preferred position of the context menu. If the set position is insufficient for holding the component, it will be
     * automatically adjusted.
     * <p><strong>NOTE</strong>:
     * <br>If a menu is displayed by pressing and holding or right-clicking, the menu is displayed at the clicked
     * position.
     * </p>
     *
     * @type { ?Placement }
     * @default Placement.BottomLeft
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    placement?: Placement;
    /**
     * whether show arrow belong to the menu.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * whether show arrow belong to the menu.
     * <p><strong>NOTE</strong>:
     * <br>When enableArrow is true, an arrow is displayed in the position specified by placement.
     * <br>If placement is not set or its value is invalid, the arrow is displayed above the target.
     * <br>If the position is insufficient for holding the arrow, it is automatically adjusted.
     * <br>When enableArrow is undefined, no arrow is displayed.
     * <br>This API is supported in bindContextMenu since API version 10 and bindMenu since API version 12.
     * </p>
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enableArrow?: boolean;
    /**
     * The horizontal offset to the left of menu or vertical offset to the top of menu
     *
     * @type { ?Length }
     * @default 0vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Offset of the arrow relative to the context menu. The offset settings take effect only when the value is valid,
     * can be converted to a number greater than 0, and does not cause the arrow to extend beyond the safe area of
     * the context menu.
     * <p><strong>NOTE</strong>:
     * <br>The safe distance of the arrow from the four sides of the menu is the sum of the menu's corner radius and
     * half the width of the arrow. The value of placement determines whether the offset is horizontal or vertical.
     * When the arrow is in the horizontal direction of the menu, the offset is the distance from the arrow to the
     * leftmost arrow's safe distance. When the arrow is in the vertical direction of the menu, the offset is the
     * distance from the arrow to the topmost arrow's safe distance. The default position where the arrow is
     * displayed varies with the value of placement: Without any avoidance by the menu, when placement is set to
     * Placement.Top or Placement.Bottom, the arrow is displayed horizontally and is centered by default; when
     * placement is set to Placement.Left or Placement.Right, the arrow is displayed vertically and is centered by
     * default; when placement is set to Placement.TopLeft or Placement.BottomLeft, the arrow is displayed
     * horizontally by default, and the distance from the arrow to the left edge of the menu is the arrow's safe
     * distance; when placement is set to Placement.TopRight or Placement.BottomRight, the arrow is displayed
     * horizontally by default, and the distance from the arrow to the right edge of the menu is the arrow's safe
     * distance; when placement is set to Placement.LeftTop or Placement.RightTop, the arrow is displayed vertically
     * by default, and the distance from the arrow to the top edge of the menu is the arrow's safe distance; when
     * placement is set to Placement.LeftBottom or Placement.RightBottom, the arrow is displayed vertically by
     * default, and the distance from the arrow to the bottom edge of the menu is the arrow's safe distance.
     * <br>This API is supported in bindContextMenu since API version 10 and bindMenu since API version 12.
     * </p>
     *
     * @type { ?Length }
     * @default 0vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    arrowOffset?: Length;
    /**
     * The preview content of context menu.
     *
     * @type { ?(MenuPreviewMode | CustomBuilder) }
     * @default MenuPreviewMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Preview displayed when the context menu is triggered by a long-press or use the isShown variable of
     * bindContextMenu to display the preview content style of the menu.
     * <p><strong>NOTE</strong>:
     * <br>This parameter has no effect when responseType is set to ResponseType.RightClick.
     * <br>If preview is set to MenuPreviewMode.NONE or is not set, the enableArrow parameter is effective.
     * <br>If preview is set to MenuPreviewMode.IMAGE or CustomBuilder, no arrow will be displayed even when
     * enableArrow is true.
     * </p>
     *
     * @type { ?(MenuPreviewMode | CustomBuilder) }
     * @default MenuPreviewMode.NONE
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    preview?: MenuPreviewMode | CustomBuilder;
    /**
     * Defines the border radius for preview of menu.
     *
     * @type { BorderRadiusType }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    previewBorderRadius?: BorderRadiusType;
    /**
     * Border radius of the menu.
     * <p><strong>NOTE</strong>:
     * <br>The value can be in percentage.
     * <br>If the sum of the two maximum corner radii in the horizontal direction exceeds the menu's width, or if the sum
     * of the two maximum corner radii in the vertical direction exceeds the menu's height, the default corner radius of
     * the menu will be used.
     * </p>
     *
     * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
     * @default 8vp for 2-in-1 devices and 20vp for other devices
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    borderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;
    /**
     * Callback function when the context menu appears.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback triggered when the menu is displayed.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onAppear?: () => void;
    /**
     * Callback triggered when the menu is hidden.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Callback function when the context menu disappear.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onDisappear?: () => void;
    /**
     * Callback function before the context menu animation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Callback triggered when the menu is about to appear.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    aboutToAppear?: () => void;
    /**
     * Callback function before the context menu popAnimation starts.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Callback triggered when the menu is about to disappear.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    aboutToDisappear?: () => void;
    /**
     * The margin of menu's layoutRegion.
     *
     * @type { ?Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    layoutRegionMargin?: Margin;
    /**
     * The preview animator options.
     *
     * @type { ?ContextMenuAnimationOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The preview animator options.
     *
     * @type { ?ContextMenuAnimationOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    previewAnimationOptions?: ContextMenuAnimationOptions;
    /**
     * Defines the menu's background color
     *
     * @type { ?ResourceColor }
     * @default Color.Transparent
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Background color of the menu.
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
     * Defines menu background blur Style
     *
     * @type { ?BlurStyle }
     * @default BlurStyle.COMPONENT_ULTRA_THICK
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Background blur style of the menu.
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
     * Defines the menu's background blur style with options
     *
     * @type { ?BackgroundBlurStyleOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    backgroundBlurStyleOptions?: BackgroundBlurStyleOptions;
    /**
     * Defines the menu's background effect with options
     *
     * @type { ?BackgroundEffectOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    backgroundEffect?: BackgroundEffectOptions;
    /**
     * Defines the transition effect of menu opening and closing.
     *
     * @type { ?TransitionEffect }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    transition?: TransitionEffect;
    /**
      * Determine if it is compatible menu's half folded.
      *
      * @type { ?boolean }
      * @default false
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 18
      */
    enableHoverMode?: boolean;
    /**
      * The color of menu's outer border.
      *
      * @type { ?(ResourceColor | EdgeColors) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    outlineColor?: ResourceColor | EdgeColors;
    /**
      * The width of menu's outer border.
      *
      * @type { ?(Dimension | EdgeOutlineWidths) }
      * @syscap SystemCapability.ArkUI.ArkUI.Full
      * @crossplatform
      * @atomicservice
      * @since 20
      */
    outlineWidth?: Dimension | EdgeOutlineWidths;
    /**
     * Defines the haptic feedback mode of menu.
     *
     * @type { ?HapticFeedbackMode }
     * @default HapticFeedbackMode.DISABLED
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    hapticFeedbackMode?: HapticFeedbackMode;
    /**
     * Whether it is a menu without mask.
     *
     * @type { ?(boolean | MenuMaskType) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    mask?: boolean | MenuMaskType;
}
/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the menu options.
 *
 * @extends ContextMenuOptions
 * @interface MenuOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MenuOptions extends ContextMenuOptions {
    /**
     * Sets the title of the menu window.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the title of the menu window.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    title?: ResourceStr;
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Whether to display in the sub window.
     *
     * @type { ?boolean }
     * @default true for 2-in-1 devices and false for other devices
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    showInSubWindow?: boolean;
}
/**
 * Defines the ProgressMask class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Implements a ProgressMask object to set the progress, maximum value, and color of the mask.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class ProgressMask {
    /**
     * constructor.
     *
     * @param { number } value - indicates the current value of the progress.
     * @param { number } total - indicates the total value of the progress.
     * @param { ResourceColor } color - indicates the color of the mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * constructor.
     *
     * @param { number } value - Current value of the progress mask. Value range: [0.0, +∞).
     * @param { number } total - Maximum value of the progress mask. Value range: [0.0, +∞).
     * @param { ResourceColor } color - Color of the progress mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor(value: number, total: number, color: ResourceColor);
    /**
     * Update the current value of the progress.
     *
     * @param { number } value - indicates the current value of the progress.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Updates the progress value of the progress mask.
     *
     * @param { number } value - Current value of the progress mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    updateProgress(value: number): void;
    /**
     * Update the color of the mask.
     *
     * @param { ResourceColor } value - indicates the color of the mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Update the color of the mask.
     *
     * @param { ResourceColor } value - Color of the progress mask.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    updateColor(value: ResourceColor): void;
    /**
     * Enable the breathe animation of mask.
     *
     * @param { boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    enableBreathingAnimation(value: boolean): void;
}
/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines TouchTestInfo class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class TouchTestInfo {
    /**
     * Get the X-coordinate relative to the window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the X-coordinate relative to the window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    windowX: number;
    /**
     * Get the Y-coordinate relative to the window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the Y-coordinate relative to the window.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    windowY: number;
    /**
     * Get the X-coordinate relative to the current component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the X-coordinate relative to the current component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    parentX: number;
    /**
     * Get the Y-coordinate relative to the current component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the Y-coordinate relative to the current component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    parentY: number;
    /**
     * Get the X-coordinate relative to the sub component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the X-coordinate relative to the sub component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    x: number;
    /**
     * Get the Y-coordinate relative to the sub component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the Y-coordinate relative to the sub component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    y: number;
    /**
     * Get the rectangle of sub component.
     *
     * @type { RectResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the rectangle of sub component.
     *
     * @type { RectResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    rect: RectResult;
    /**
     * Get the name of sub component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the name of sub component.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    id: string;
}
/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines TouchResult class.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class TouchResult {
    /**
     * Defines the touch test strategy.
     *
     * @type { TouchTestStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the touch test strategy.
     *
     * @type { TouchTestStrategy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    strategy: TouchTestStrategy;
    /**
     * Defines the component's name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the component's name.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    id?: string;
}
/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Set the edge blur effect distance of the corresponding defense line of the component
 * When the component expand out, no re-layout is triggered
 *
 * @interface PixelStretchEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface PixelStretchEffectOptions {
    /**
     * top property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * top property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    top?: Length;
    /**
     * bottom property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * bottom property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bottom?: Length;
    /**
     * left property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * left property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    left?: Length;
    /**
     * right property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * right property. value range (-∞, ∞)
     * If value > 0, expand outward elements. Else first shrink by value and then expand outward pixels.
     *
     * @type { ?Length }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    right?: Length;
}
/**
 * Defines the click effect.
 *
 * @interface ClickEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the click effect.
 *
 * @interface ClickEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface ClickEffect {
    /**
     * Set the click effect level.
     *
     * @type { ClickEffectLevel }
     * @default ClickEffectLevel.Light
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Set the click effect level.
     *
     * @type { ClickEffectLevel }
     * @default ClickEffectLevel.Light
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    level: ClickEffectLevel;
    /**
     * Set scale number.
     * This default scale is same as the scale of click effect level.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Set scale number.
     * This default scale is same as the scale of click effect level.
     *
     * <p><strong>NOTE</strong>:
     * <br> This parameter works based on the setting of ClickEffectLevel.
     * <br> If level is set to ClickEffectLevel.LIGHT, the default value is 0.90.
     * <br> If level is set to ClickEffectLevel.MIDDLE or ClickEffectLevel.HEAVY, the default value is 0.95.
     * <br> If level is set to undefined or null (both of which evaluate to ClickEffectLevel.LIGHT), the default value is 0.90.
     * <br> If scale is set to undefined or null, the default zoom ratio for the set level will be used.
     * </p>
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    scale?: number;
}
/**
 * Defines the fadingEdge options.
 *
 * @typedef FadingEdgeOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare interface FadingEdgeOptions {
    /**
     * The length of FadingEdge.
     *
     * @type { LengthMetrics }
     * @default 32vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    fadingEdgeLength?: LengthMetrics;
}
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 10
 */
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 11
 */
declare interface NestedScrollOptions {
    /**
     * Set NestedScrollMode when the scrollable component scrolls forward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Set NestedScrollMode when the scrollable component scrolls forward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    scrollForward: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls backward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Set NestedScrollMode when the scrollable component scrolls backward
     *
     * @type { NestedScrollMode }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    scrollBackward: NestedScrollMode;
}
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defines the menu element.
 *
 * @interface MenuElement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MenuElement {
    /**
     * Sets the value of the menu element.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the value of the menu element.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the value of the menu element.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    value: ResourceStr;
    /**
     * Sets the icon of the menu element.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the icon of the menu element.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    icon?: ResourceStr;
    /**
     * Sets the symbol of the menu element.
     *
     * @type { ?SymbolGlyphModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    symbolIcon?: SymbolGlyphModifier;
    /**
     * If the value is true, the menu element is available and can respond to operations such as clicking.
     * If the value is false, the menu element is not available and click operations are not responded.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * If the value is true, the menu element is available and can respond to operations such as clicking.
     * If the value is false, the menu element is not available and click operations are not responded.
     *
     * @type { ?boolean }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    enabled?: boolean;
    /**
     * Method executed by the callback.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Method executed by the callback.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Method executed by the callback.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    action: () => void;
}
/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the attribute modifier.
 *
 * @interface AttributeModifier<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface AttributeModifier<T> {
    /**
     * Defines the normal update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the normal update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applyNormalAttribute?(instance: T): void;
    /**
     * Defines the pressed update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the pressed update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applyPressedAttribute?(instance: T): void;
    /**
     * Defines the focused update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the focused update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applyFocusedAttribute?(instance: T): void;
    /**
     * Defines the disabled update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the disabled update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applyDisabledAttribute?(instance: T): void;
    /**
     * Defines the selected update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the selected update attribute function.
     *
     * @param { T } instance
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applySelectedAttribute?(instance: T): void;
}
/**
 * Defines the content modifier.
 *
 * @interface ContentModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface ContentModifier<T> {
    /**
     * Defining applyContent function.
     *
     * @returns { WrappedBuilder<[T]> }
     * Component attribute class, which is used to distinguish different information required by different components
     * after content areas are customized, for example, ButtonConfiguration for the Button component and
     * CheckBoxConfiguration of the Checkbox component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applyContent(): WrappedBuilder<[
        T
    ]>;
}
/**
 * Defines the common configuration.
 *
 * @interface CommonConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface CommonConfiguration<T> {
    /**
     * If the value is true, the contentModifier is available and can respond to operations such as triggerChange.
     *  If it is set to false, triggerChange operations are not responded.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    enabled: boolean;
    /**
     * Obtains the contentModifier instance object
     *
     * @type { ContentModifier<T> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    contentModifier: ContentModifier<T>;
}
/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 11
 */
/**
 * Outline Style
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare enum OutlineStyle {
    /**
     * Solid border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Solid border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    SOLID = 0,
    /**
     * Dashed border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Dashed border.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    DASHED = 1,
    /**
     * Displays as a series of dots with a radius of half the borderWidth.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Dotted border. The radius of a dot is half of **outlineWidth**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    DOTTED = 2
}
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Defines the drag preview mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum DragPreviewMode {
    /**
     * Default preview mode, let system process preview scale.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Default preview mode, let system process preview scale.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * Default preview mode, let system process preview scale.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    AUTO = 1,
    /**
     * Disable system scale to preview panel
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Disable system scale to preview panel
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * Disable system scale to preview panel
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    DISABLE_SCALE = 2,
    /**
     * Enable the default shadow effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * Enable the default shadow effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    ENABLE_DEFAULT_SHADOW = 3,
    /**
     * Enable the default radius effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * Enable the default radius effect of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    ENABLE_DEFAULT_RADIUS = 4,
    /**
     * Enable the default gray effect on the dragging item.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    ENABLE_DRAG_ITEM_GRAY_EFFECT = 5,
    /**
     * Enable the tile effect for multi drag, each dragged graph is display in the original relative position.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    ENABLE_MULTI_TILE_EFFECT = 6,
    /**
     * Enable the touch point calculation position based on final preview rect.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    ENABLE_TOUCH_POINT_CALCULATION_BASED_ON_FINAL_PREVIEW = 7
}
/**
 * Define drag start animation effect from drag preview to the handle drag image
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 19
 */
declare enum DraggingSizeChangeEffect {
    /**
     * Default effect, no transition.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    DEFAULT = 0,
    /**
     * Only scaled transition, this parameter take effect when PREVIEW_MODE is not DISABLE_SCALE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    SIZE_TRANSITION = 1,
    /**
     * Scaled and content transition together, this size transition take effect when PREVIEW_MODE is not DISABLE_SCALE.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 19
     */
    SIZE_CONTENT_TRANSITION = 2
}
/**
 * Define the menu pop-up policy
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum MenuPolicy {
    /**
     * Default value. The default logic of whether to pop up a menu depends on the scene.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DEFAULT = 0,
    /**
     * The menu is always hidden.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    HIDE = 1,
    /**
     * The menu is always displayed.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    SHOW = 2
}
/**
 * ImageModifier
 *
 * @typedef { import('../../../api/arkui/ImageModifier').ImageModifier } ImageModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ImageModifier = import('../../../api/arkui/ImageModifier').ImageModifier;
/**
 * SymbolGlyphModifier
 *
 * @typedef {import('../../../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier} SymbolGlyphModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare type SymbolGlyphModifier = import('../../../api/arkui/SymbolGlyphModifier').SymbolGlyphModifier;
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
/**
 * Defines the preview options.
 *
 * @interface DragPreviewOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface DragPreviewOptions {
    /**
    * Drag preview mode.
    *
    * @type { ?DragPreviewMode }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @since 11
    */
    /**
     * Drag preview mode.
     *
     * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    /**
     * Drag preview mode.
     *
     * @type { ?(DragPreviewMode | Array<DragPreviewMode>) }
     * @default DragPreviewMode.AUTO
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    mode?: DragPreviewMode | Array<DragPreviewMode>;
    /**
    * Drag preview modifier.
    *
    * @type { ?ImageModifier }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 12
    */
    /**
     * Drag preview modifier.
     *
     * @type { ?ImageModifier }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    modifier?: ImageModifier;
    /**
    * The flag for number showing.
    *
    * @type { ?(boolean | number) }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 12
    */
    /**
     * The flag for number showing.
     *
     * @type { ?(boolean | number) }
     * @default true
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    numberBadge?: boolean | number;
    /**
    * Drag start animation effect from drag preview to the handle drag image.
    *
    * @type { ?DraggingSizeChangeEffect }
    * @default DraggingSizeChangeEffect.DEFAULT
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 19
    */
    sizeChangeEffect?: DraggingSizeChangeEffect;
}
/**
 * Defines the drag options.
 *
 * @interface DragInteractionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface DragInteractionOptions {
    /**
    * Define whether to gather selected nodes in grid or list.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 12
    */
    isMultiSelectionEnabled?: boolean;
    /**
    * Define whether to execute animation before preview floating.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 12
    */
    defaultAnimationBeforeLifting?: boolean;
    /**
    * Define whether to enable the haptic feedback when dragging, the default value is false.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 18
    */
    enableHapticFeedback?: boolean;
    /**
    * Config if auto scrolling should be triggered when the drag hovered on a scrollable controller's edge.
    *
    * @type { ?boolean }
    * @default true
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 18
    */
    enableEdgeAutoScroll?: boolean;
    /**
    * Define whether to lifting trigger drag by finger.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 15
    */
    isLiftingDisabled?: boolean;
}
/**
 * Defines the drag preview configuration.
 *
 * @interface PreviewConfiguration
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 15
 */
declare interface PreviewConfiguration {
    /**
    * Define whether to only use for lifting.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 15
    */
    onlyForLifting?: boolean;
    /**
    * Define whether to delay create builder.
    *
    * @type { ?boolean }
    * @default false
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 15
    */
    delayCreating?: boolean;
}
/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 11
 */
/**
 * Define the options of invert
 *
 * @interface InvertOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface InvertOptions {
    /**
     * Defines the low value of threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the low value of threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    low: number;
    /**
    * Defines the high value of threshold
    *
    * @type { number }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 11
    */
    /**
     * Defines the high value of threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    high: number;
    /**
     * Defines the threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Defines the threshold
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    threshold: number;
    /**
     *Defines the threshold range
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     *Defines the threshold range
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    thresholdRange: number;
}
/**
 * Import the CircleShape type object for common method.
 *
 * @typedef { import('../../../api/@ohos.arkui.shape').CircleShape } CircleShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type CircleShape = import('../../../api/@ohos.arkui.shape').CircleShape;
/**
 * Import the EllipseShape type object for common method.
 *
 * @typedef { import('../../../api/@ohos.arkui.shape').EllipseShape } EllipseShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type EllipseShape = import('../../../api/@ohos.arkui.shape').EllipseShape;
/**
 * Import the PathShape type object for common method.
 *
 * @typedef { import('../../../api/@ohos.arkui.shape').PathShape } PathShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type PathShape = import('../../../api/@ohos.arkui.shape').PathShape;
/**
 * Import the RectShape type object for common method.
 *
 * @typedef { import('../../../api/@ohos.arkui.shape').RectShape } RectShape
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type RectShape = import('../../../api/@ohos.arkui.shape').RectShape;
/**
 * Defines the type that can be undefined.
 *
 * @typedef { T | undefined } Optional<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare type Optional<T> = T | undefined;
/**
 * Defines the TipsMessageType property with ResourceStr and StyledString.
 *
 * @typedef { ResourceStr | StyledString } TipsMessageType
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare type TipsMessageType = ResourceStr | StyledString;
/**
 * Define the options for background image.
 *
 * @interface BackgroundImageOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
interface BackgroundImageOptions {
    /**
     * Sets the synchronous or asynchronous mode for background image loading.
     * The default parameter type is bool, and the default value is false.
     *
     * @type { ?boolean }
     * @param { boolean } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    syncLoad?: boolean;
    /**
     * Set the repeat style of the background image.
     *
     * @type { ?ImageRepeat }
     * @param { ImageRepeat } value
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    repeat?: ImageRepeat;
}
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonMethod.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CommonMethod<T> {
    /**
     * Sets the width of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the width of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the width of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the width of the component. By default, the width required to fully hold the
     * component content is used.If the width of the component is greater than that of
     * the parent container, the component will be drawn beyond the parent container scope.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    width(value: Length): T;
    /**
     * Sets the width of the component or its horizontal layout policy. By default, the
     * component uses the width required for its content. If the width of the component is
     * greater than that of the parent container, the component will be drawn beyond the
     * parent container scope.
     *
     * @param { Length | LayoutPolicy } widthValue
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 15
     */
    width(widthValue: Length | LayoutPolicy): T;
    /**
     * Sets the height of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the height of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the height of the current component.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the height of the component. By default, the height required to fully hold the
     * component content is used. If the height of the component is greater than that of
     * the parent container, the component will be drawn beyond the parent container scope.
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    height(value: Length): T;
    /**
     * Sets the height of the component or its vertical layout policy. By default, the
     * component uses the height required for its content. If the height of the component
     * is greater than that of the parent container, the component will be drawn beyond
     * the parent container scope.
     *
     * @param { Length | LayoutPolicy } heightValue
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 15
     */
    height(heightValue: Length | LayoutPolicy): T;
    /**
     * Sets the drawModifier of the current component.
     *
     * @param { DrawModifier | undefined } modifier - drawModifier used to draw, or undefined if it is not available.
     * Default value: undefined
     * A custom modifier applies only to the FrameNode of the currently bound component, not to its subnodes.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    drawModifier(modifier: DrawModifier | undefined): T;
    /**
     * Sets the custom property of the current component.
     * This API does not work for custom components.
     *
     * @param { string } name - the name of the custom property.
     * @param { Optional<Object> } value - the value of the custom property.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    customProperty(name: string, value: Optional<Object>): T;
    /**
     * Expands the safe area.
     *
     * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
     * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
     * @returns { T } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the safe area to be expanded to.
     * <br>default:{types: [SafeAreaType.SYSTEM, SafeAreaType.CUTOUT, SafeAreaType.KEYBOARD],
     * edges: [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM, SafeAreaEdge.START, SafeAreaEdge.END]}.
     *
     * @param { Array<SafeAreaType> } types - Indicates the types of the safe area.
     * @param { Array<SafeAreaEdge> } edges - Indicates the edges of the safe area.
     * @returns { T } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    expandSafeArea(types?: Array<SafeAreaType>, edges?: Array<SafeAreaEdge>): T;
    /**
     * Sets the response region of the current component.
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets the response region of the current component.
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the response region of the current component.
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the response region of the current component.
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    responseRegion(value: Array<Rectangle> | Rectangle): T;
    /**
     * Sets the mouse response region of current component
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T } return the component attribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the mouse response region of current component
     *
     * @param { Array<Rectangle> | Rectangle } value
     * @returns { T } return the component attribute
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    mouseResponseRegion(value: Array<Rectangle> | Rectangle): T;
    /**
     * The size of the current component.
     *
     * @param { SizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The size of the current component.
     *
     * @param { SizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The size of the current component.
     *
     * @param { SizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the size of the component.
     *
     * @param { SizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    size(value: SizeOptions): T;
    /**
     * constraint Size:
     * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * constraint Size:
     * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * constraint Size:
     * minWidth: minimum Width, maxWidth: maximum Width, minHeight: minimum Height, maxHeight: maximum Height.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the constraint size of the component, which is used to limit the size range during component layout.
     * Default value: **{minWidth: 0, maxWidth: Infinity, minHeight: 0, maxHeight: Infinity}**.
     *
     * @param { ConstraintSizeOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    constraintSize(value: ConstraintSizeOptions): T;
    /**
     * Sets the touchable of the current component
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead hitTestBehavior
     */
    touchable(value: boolean): T;
    /**
     * Defines the component's hit test behavior in touch events.
     *
     * @param { HitTestMode } value - the hit test mode.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Defines the component's hit test behavior in touch events.
     *
     * @param { HitTestMode } value - the hit test mode.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets how the component behaves during hit testing.
     *
     * @param { HitTestMode } value - the hit test mode.
     * @default HitTestMode.default - Both the node and its child nodes respond to the hit test of a touch event,
     * but its sibling nodes are blocked from the hit test. The hit test for ancestor nodes is not affected.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hitTestBehavior(value: HitTestMode): T;
    /**
     * Defines the pre-touch test of sub component in touch events.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Called to specify how to perform the touch test on the children of this component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onChildTouchTest(event: (value: Array<TouchTestInfo>) => TouchResult): T;
    /**
     * layout Weight
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * layout Weight
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * layout Weight
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the weight of the component during layout. A component with this attribute is allocated space
     * along the main axis of its parent container (Row, Column, or Flex) based on its specified weight.
     * Default value: **0**.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    layoutWeight(value: number | string): T;
    /**
     * Sets the weight of the component in a chain, which is used to re-lay out components that form the chain.
     * <br>This API has effect only when the parent container is RelativeContainer.
     *
     * @param { ChainWeightOptions } chainWeight
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    chainWeight(chainWeight: ChainWeightOptions): T;
    /**
     * Inner margin.
     *
     * @param { Padding | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Inner margin.
     *
     * @param { Padding | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Inner margin.
     *
     * @param { Padding | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Inner margin.
     *
     * @param { Padding | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the padding of the component.
     * Default value: **0**.
     *
     * @param { Padding | Length | LocalizedPadding } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    padding(value: Padding | Length | LocalizedPadding): T;
    /**
     * Sets the safe area padding. It enables a container to add a component-level
     * safe area for child components to expand into.
     * Default value: **LengthMetrics.vp(0)**.
     *
     * @param { Padding | LengthMetrics | LocalizedPadding } paddingValue - Indicates safeArea padding values
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    safeAreaPadding(paddingValue: Padding | LengthMetrics | LocalizedPadding): T;
    /**
     * Outer Margin.
     *
     * @param { Margin | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Outer Margin.
     *
     * @param { Margin | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Outer Margin.
     *
     * @param { Margin | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Outer Margin.
     *
     * @param { Margin | Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the margin of the component.
     * Default value: **0**.
     *
     * @param { Margin | Length | LocalizedMargin } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    margin(value: Margin | Length | LocalizedMargin): T;
    /**
     * Sets the background color of the component.
     *
     * @param { CustomBuilder } builder - Custom background.
     * @param { object } options - Alignment mode between the custom background and the component.
     * <br>If **background**, **backgroundColor**, and **backgroundImage** are set at the same time
     * <br>They will all take effect, with **background** at the top layer.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the background color of the component.
     *
     * @param { CustomBuilder } builder - Custom background.
     * @param { object } options - Alignment mode between the custom background and the component.
     * <br>If **background**, **backgroundColor**, and **backgroundImage** are set at the same time
     * <br>They will all take effect, with **background** at the top layer.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    background(builder: CustomBuilder, options?: {
        align?: Alignment;
    }): T;
    /**
     * Background color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Background color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Background color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Background color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    backgroundColor(value: ResourceColor): T;
    /**
     * Background color
     *
     * @param { Optional<ResourceColor> } color
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    backgroundColor(color: Optional<ResourceColor>): T;
    /**
     * Sets the pixel rounding policy for the current component in the specified direction.
     * <br>If a direction is not set, the pixels are rounded to the nearest whole number in that direction.
     *
     * @param { PixelRoundPolicy } value - indicates the rounding policy for the bounds of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    pixelRound(value: PixelRoundPolicy): T;
    /**
     * Background image
     * src: Image address url
     *
     * @param { ResourceStr } src
     * @param { ImageRepeat } repeat
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Background image
     * src: Image address url
     *
     * @param { ResourceStr } src
     * @param { ImageRepeat } repeat
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Background image
     * src: Image address url
     *
     * @param { ResourceStr } src
     * @param { ImageRepeat } repeat
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Background image
     * src: Image address url
     *
     * @param { ResourceStr } src
     * @param { ImageRepeat } repeat
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Background image
     * src: Image address url
     *
     * @param { ResourceStr | PixelMap } src
     * @param { ImageRepeat } repeat
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    backgroundImage(src: ResourceStr | PixelMap, repeat?: ImageRepeat): T;
    /**
     * Background image
     *
     * @param { ResourceStr | PixelMap } src - the background image source
     * @param { BackgroundImageOptions } options - config the options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    backgroundImage(src: ResourceStr | PixelMap, options?: BackgroundImageOptions): T;
    /**
     * Background image size
     *
     * @param { SizeOptions | ImageSize } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Background image size
     *
     * @param { SizeOptions | ImageSize } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Background image size
     *
     * @param { SizeOptions | ImageSize } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Background image size
     *
     * @param { SizeOptions | ImageSize } value - The width and height of the background image.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    backgroundImageSize(value: SizeOptions | ImageSize): T;
    /**
     * Background image position
     * x:Horizontal coordinate;y:Vertical axis coordinate.
     *
     * @param { Position | Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Background image position
     * x:Horizontal coordinate;y:Vertical axis coordinate.
     *
     * @param { Position | Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Background image position
     * x:Horizontal coordinate;y:Vertical axis coordinate.
     *
     * @param { Position | Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Background image position
     * x:Horizontal coordinate;y:Vertical axis coordinate.
     *
     * @param { Position | Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    backgroundImagePosition(value: Position | Alignment): T;
    /**
     * Defines the blur style to apply between the background and content of a component.
     * It encapsulates various blur radius, mask color, mask opacity, saturation.
     * And brightness values through enum values.
     *
     * @param { BlurStyle } value - Settings of the background blur style
     * <br>including the blur radius, mask color, mask opacity, saturation, and brightness.
     * @param { BackgroundBlurStyleOptions } options - Background blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines the blur style to apply between the background and content of a component.
     * It encapsulates various blur radius, mask color, mask opacity, saturation.
     * And brightness values through enum values.
     *
     * @param { BlurStyle } value - Settings of the background blur style
     * <br>including the blur radius, mask color, mask opacity, saturation, and brightness.
     * @param { BackgroundBlurStyleOptions } options - Background blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines the blur style to apply between the background and content of a component.
     * It encapsulates various blur radius, mask color, mask opacity, saturation.
     * And brightness values through enum values.
     *
     * @param { BlurStyle } value - Settings of the background blur style
     * <br>including the blur radius, mask color, mask opacity, saturation, and brightness.
     * @param { BackgroundBlurStyleOptions } options - Background blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    backgroundBlurStyle(value: BlurStyle, options?: BackgroundBlurStyleOptions): T;
    /**
     * Background blur style.
     * blurStyle:Blur style type.
     *
     * @param { Optional<BlurStyle> } style
     * @param { BackgroundBlurStyleOptions } [options]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions): T;
    /**
     * Background blur style.
     * blurStyle:Blur style type.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BlurStyle> } style
     * @param { BackgroundBlurStyleOptions } [options]
     * @param { SystemAdaptiveOptions } [sysOptions]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 19
     */
    backgroundBlurStyle(style: Optional<BlurStyle>, options?: BackgroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;
    /**
    * Sets the background effect of the component, including the blur radius, brightness, saturation, and color.
    *
    * @param { BackgroundEffectOptions } options - Background effect, including saturation, brightness, and color.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @since 11
    */
    /**
     * Sets the background effect of the component, including the blur radius, brightness, saturation, and color.
     *
     * @param { BackgroundEffectOptions } options - Background effect, including saturation, brightness, and color.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundEffect(options: BackgroundEffectOptions): T;
    /**
     * Sets the background effect of the component, including the blur radius, brightness,
     * saturation, and color. Compared to backgroundEffect<sup>11+</sup>,
     * this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<BackgroundEffectOptions> } options - Background effect, including saturation,
     * brightness, and color.
     * <br>If **options** is **undefined**, the background reverts to its default state with no effect.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    backgroundEffect(options: Optional<BackgroundEffectOptions>): T;
    /**
     * options:background effect options.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BackgroundEffectOptions> } options - options indicates the effect options.
     * @param { SystemAdaptiveOptions } [ sysOptions ] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    backgroundEffect(options: Optional<BackgroundEffectOptions>, sysOptions?: SystemAdaptiveOptions): T;
    /**
     * Background image resizable.
     * value:resizable options
     *
     * @param { ResizableOptions } value - Indicates the resizable options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundImageResizable(value: ResizableOptions): T;
    /**
     * Foreground effect.
     *
     * @param { ForegroundEffectOptions } options - options indicates the effect options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    foregroundEffect(options: ForegroundEffectOptions): T;
    /**
     * Sets a visual effect that is not a filter effect.
     *
     * @param { VisualEffect } effect - Visual effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    visualEffect(effect: VisualEffect): T;
    /**
     * Sets the visual effect of the background filter.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    backgroundFilter(filter: Filter): T;
    /**
     * Sets the visual effect of the foreground (content) filter.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    foregroundFilter(filter: Filter): T;
    /**
     * Sets the visual effect of the compositing filter.
     *
     * @param { Filter } filter - Filter effect parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    compositingFilter(filter: Filter): T;
    /**
     * Applies a foreground blur style to the component.
     *
     * @param { BlurStyle } value - Settings of the foreground blur style.
     * @param { ForegroundBlurStyleOptions } options - Foreground blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Applies a foreground blur style to the component.
     *
     * @param { BlurStyle } value - Settings of the foreground blur style.
     * @param { ForegroundBlurStyleOptions } options - Foreground blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    foregroundBlurStyle(value: BlurStyle, options?: ForegroundBlurStyleOptions): T;
    /**
     * Foreground blur style.
     * blurStyle:Blur style type.
     *
     * @param { Optional<BlurStyle> } style
     * @param { ForegroundBlurStyleOptions } [options]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions): T;
    /**
     * Foreground blur style.
     * blurStyle:Blur style type.
     * sysOptions: system adaptive options.
     *
     * @param { Optional<BlurStyle> } style
     * @param { ForegroundBlurStyleOptions } [options]
     * @param { SystemAdaptiveOptions } [sysOptions]
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    foregroundBlurStyle(style: Optional<BlurStyle>, options?: ForegroundBlurStyleOptions, sysOptions?: SystemAdaptiveOptions): T;
    /**
     * Sets the opacity of the component.
     *
     * @param { number | Resource } value - Opacity of the component. The value ranges from 0 to 1.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the opacity of the component.
     *
     * @param { number | Resource } value - Opacity of the component. The value ranges from 0 to 1.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the opacity of the component.
     *
     * @param { number | Resource } value - Opacity of the component. The value ranges from 0 to 1.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the opacity of the component.
     *
     * @param { number | Resource } value - Opacity of the component. The value ranges from 0 to 1.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    opacity(value: number | Resource): T;
    /**
     * Sets the opacity of the component.
     *
     * @param { Optional<number | Resource> } opacity - Opacity of the component. The value ranges from 0 to 1.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    opacity(opacity: Optional<number | Resource>): T;
    /**
     * Border
     * width:Border width;color:Border color;radius:Border radius;
     *
     * @param { BorderOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Border
     * width:Border width;color:Border color;radius:Border radius;
     *
     * @param { BorderOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border
     * width:Border width;color:Border color;radius:Border radius;
     *
     * @param { BorderOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the border.
     *
     * @param { BorderOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    border(value: BorderOptions): T;
    /**
     * Border style
     *
     * @param { BorderStyle } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Border style
     *
     * @param { BorderStyle | EdgeStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border style
     *
     * @param { BorderStyle | EdgeStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the border style.
     * Default value: **BorderStyle.Solid**.
     *
     * @param { BorderStyle | EdgeStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    borderStyle(value: BorderStyle | EdgeStyles): T;
    /**
     * Border width
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Border width
     *
     * @param { Length | EdgeWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border width
     *
     * @param { Length | EdgeWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Border width
     *
     * @param { Length | EdgeWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the border width.
     * Percentage values are not supported.
     *
     * @param { Length | EdgeWidths | LocalizedEdgeWidths } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    borderWidth(value: Length | EdgeWidths | LocalizedEdgeWidths): T;
    /**
     * Border color
     *
     * @param { ResourceColor } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Border color
     *
     * @param { ResourceColor | EdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border color
     *
     * @param { ResourceColor | EdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Border color
     *
     * @param { ResourceColor | EdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the border color.
     * Default value: **Color.Black**.
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    borderColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;
    /**
     * Border radius
     *
     * @param { Length } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Border radius
     *
     * @param { Length | BorderRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border radius
     *
     * @param { Length | BorderRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Border radius
     *
     * @param { Length | BorderRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the radius of the border rounded corners.
     * <br>The radius is restricted by the component size. The maximum value is half of the component width or height.
     *
     * @param { Length | BorderRadiuses | LocalizedBorderRadiuses } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    borderRadius(value: Length | BorderRadiuses | LocalizedBorderRadiuses): T;
    /**
     * Border image
     *
     * @param { BorderImageOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Border image
     *
     * @param { BorderImageOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the border image of the component.
     *
     * @param { BorderImageOption } value - Border image or border gradient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    borderImage(value: BorderImageOption): T;
    /**
     * Sets the outline attributes in one declaration.
     *
     * @param { OutlineOptions } value - Outline attributes.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Sets the outline attributes in one declaration.
     *
     * @param { OutlineOptions } value - Outline attributes.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    outline(value: OutlineOptions): T;
    /**
     * Sets the outline attributes in one declaration. Compared to outline,
     * this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<OutlineOptions> } options - Outline attributes.<br>If **options** is **undefined**,
     * the component reverts to its original style with no outline.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    outline(options: Optional<OutlineOptions>): T;
    /**
     * Sets the style of the outline.
     *
     * @param { OutlineStyle | EdgeOutlineStyles } value - Outline style.
     * <br>Default value: **OutlineStyle.SOLID**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Sets the style of the outline.
     *
     * @param { OutlineStyle | EdgeOutlineStyles } value - Outline style.
     * <br>Default value: **OutlineStyle.SOLID**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    outlineStyle(value: OutlineStyle | EdgeOutlineStyles): T;
    /**
     * Sets the style of the outline. Compared to outlineStyle,
     * this API supports the **undefined** type for the **style** parameter.
     *
     * @param { Optional<OutlineStyle | EdgeOutlineStyles> } style - Outline style.
     * <br>Default value: **OutlineStyle.SOLID**.
     * <br>If **style** is **undefined**, the component reverts to its original
     * style with no outline.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    outlineStyle(style: Optional<OutlineStyle | EdgeOutlineStyles>): T;
    /**
     * Sets the thickness of the outline.
     *
     * @param { Dimension | EdgeOutlineWidths } value - Outline thickness. Percentage values are not supported.
     * <br>Default value: **0**Outline thickness. Percentage values are not supported.
     * <br>Default value: **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Sets the thickness of the outline.
     *
     * @param { Dimension | EdgeOutlineWidths } value - Outline thickness. Percentage values are not supported.
     * <br>Default value: **0**Outline thickness. Percentage values are not supported.
     * <br>Default value: **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    outlineWidth(value: Dimension | EdgeOutlineWidths): T;
    /**
     * Sets the thickness of the outline. Compared to outlineWidth,
     * this API supports the **undefined** type for the **width** parameter.
     *
     * @param { Optional<Dimension | EdgeOutlineWidths> } width - Outline thickness. Percentage values are not supported.
     * <br>Default value: **0**.
     * <br>If **width** is **undefined**, the component reverts to its original style with no outline width.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    outlineWidth(width: Optional<Dimension | EdgeOutlineWidths>): T;
    /**
     * Sets the color of the outline.
     *
     * @param { ResourceColor | EdgeColors } value - Outline color.
     * <br>Default value: **Color.Black**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Sets the color of the outline.
     *
     * @param { ResourceColor | EdgeColors | LocalizedEdgeColors } value - Outline color.
     * <br>Default value: **Color.Black**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    outlineColor(value: ResourceColor | EdgeColors | LocalizedEdgeColors): T;
    /**
     * Sets the color of the outline. Compared to outlineColor,
     * this API supports the **undefined** type for the **color** parameter.
     *
     * @param { Optional<ResourceColor | EdgeColors | LocalizedEdgeColors> } color - Outline color.
     * <br>Default value: **Color.Black**.
     * <br>If **color** is **undefined**, the component reverts to its original style with the
     * outline color of **Color.Black**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    outlineColor(color: Optional<ResourceColor | EdgeColors | LocalizedEdgeColors>): T;
    /**
     * Sets the radius of the outline corners.
     *
     * @param { Dimension | OutlineRadiuses } value - adius of the outline corners. Percentage
     * values are not supported.
     * <br>Default value: **0**.
     * <br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Sets the radius of the outline corners.
     *
     * @param { Dimension | OutlineRadiuses } value - adius of the outline corners. Percentage
     * values are not supported.
     * <br>Default value: **0**.
     * <br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    outlineRadius(value: Dimension | OutlineRadiuses): T;
    /**
     * Sets the radius of the outline corners. Compared to outlineRadius, this API
     * supports the **undefined** type for the **radius** parameter.
     *
     * @param { Optional<Dimension | OutlineRadiuses> } radius - Radius of the outline corners. Percentage
     * values are not supported.
     * <br>Default value: **0**.
     * <br>Maximum effective value: Component width/2 + outlineWidth or component height/2 + outlineWidth.
     * <br>If **radius** is **undefined**, the component reverts to its original style with the
     * outline corner radius of 0.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    outlineRadius(radius: Optional<Dimension | OutlineRadiuses>): T;
    /**
     * Sets the foreground color of the component.
     * If the component does not have a foreground color set, it inherits the color from its parent component by default.
     *
     * @param { ResourceColor | ColoringStrategy } value - Foreground color.
     * <br>The value can be a specific color or a coloring strategy. Property animations are supported.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the foreground color of the component.
     * If the component does not have a foreground color set, it inherits the color from its parent component by default.
     *
     * @param { ResourceColor | ColoringStrategy } value - Foreground color.
     * <br>The value can be a specific color or a coloring strategy. Property animations are supported.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    foregroundColor(value: ResourceColor | ColoringStrategy): T;
    /**
     * Sets the foreground color of the component.
     * If the component does not have a foreground color set, it inherits the color from its parent component by default.
     * Compared to {@link foregroundColor}, this API supports the **undefined** type for the **color** parameter.
     *
     * @param { Optional<ResourceColor | ColoringStrategy> } color -Foreground color.
     * <br>The value can be a specific color or a coloring strategy. Property animations are supported.
     * <br>If **color** is set to **undefined**, the previous value is retained.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T;
    /**
     * Trigger a click event when a click is clicked.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Trigger a click event when a click is clicked.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Trigger a click event when a click is clicked.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Called when a click event occurs.
     *
     * <p><strong>NOTE</strong>:
     * <br> Since API version 9, the following constraints apply when this API is used in service widgets:
     * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
     * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
     * </p>
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onClick(event: (event: ClickEvent) => void): T;
    /**
     * Trigger a click event when a click is clicked, move distance should smaller than distanceThreshold.
     *
     * <p><strong>NOTE</strong>:
     * <br> If the distanceThreshold value specified is less than or equal to 0 vp, it will be converted to the default value.
     * <br> Since API version 9, the following constraints apply when this API is used in service widgets:
     * <br> Click events cannot be triggered if the finger is pressed for more than 800 ms.
     * <br> Click events cannot be triggered if the finger moves more than 20 px after pressing down.
     * </p>
     * @param { function } event - this function callback executed when the click action is recognized
     * @param { number } distanceThreshold - the distance threshold of finger's movement when detecting a click action
     * @default (2^31-1)vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    onClick(event: Callback<ClickEvent>, distanceThreshold: number): T;
    /**
     * Trigger a hover event.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Trigger a hover event.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onHover(event: (isHover: boolean, event: HoverEvent) => void): T;
    /**
     * Trigger a hover move event.
     *
     * @param { Callback<HoverEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    onHoverMove(event: Callback<HoverEvent>): T;
    /**
     * Trigger a accessibility hover event.
     *
     * @param { AccessibilityCallback } callback - A callback instance used when the component is touched after accessibility mode is enabled.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onAccessibilityHover(callback: AccessibilityCallback): T;
    /**
     * prompt for current component and descendants unable to handle accessibility hover event
     *
     * @param { AccessibilityTransparentCallback } callback - A callback instance used when current component and
     * descendants not handled accessibility hover event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onAccessibilityHoverTransparent(callback: AccessibilityTransparentCallback): T;
    /**
     * Set hover effect.
     *
     * @param { HoverEffect } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set hover effect.
     *
     * @param { HoverEffect } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set hover effect.
     *
     * @param { HoverEffect } value - Hover effect of the component in hover state.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    hoverEffect(value: HoverEffect): T;
    /**
     * Trigger a mouse event.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Triggered when the component is clicked by a mouse button or the mouse pointer moves on the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    onMouse(event: (event: MouseEvent) => void): T;
    /**
     * Trigger a touch event when touched.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Trigger a touch event when touched.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when a touch event is triggered.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onTouch(event: (event: TouchEvent) => void): T;
    /**
     * Keyboard input
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Keyboard input
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Keyboard input
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onKeyEvent(event: (event: KeyEvent) => void): T;
    /**
     * Keyboard input
     *
     * @param { Callback<KeyEvent, boolean> } event - Callback for handling the key event.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    onKeyEvent(event: Callback<KeyEvent, boolean>): T;
    /**
     * Digital crown input.
     *
     * @param { Callback<CrownEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    onDigitalCrown(handler: Optional<Callback<CrownEvent>>): T;
    /**
     * Handle keyboard events before input method events.
     *
     * @param { Callback<KeyEvent, boolean> } event - Callback for handling the key event.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onKeyPreIme(event: Callback<KeyEvent, boolean>): T;
    /**
     * Customize the handling and distribution of key events.
     *
     * @param { Callback<KeyEvent, boolean> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    onKeyEventDispatch(event: Callback<KeyEvent, boolean>): T;
    /**
     * Trigger a FocusAxisEvent.
     *
     * @param { Callback<FocusAxisEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    onFocusAxisEvent(event: Callback<FocusAxisEvent>): T;
    /**
     * Handle axis events.
     *
     * @param { Callback<AxisEvent> } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    onAxisEvent(event: Callback<AxisEvent>): T;
    /**
     * Set focusable.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Set focusable.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set focusable.
     * Components that have default interaction logic, such as Button and TextInput, are focusable by default. Other
     * components, such as Text and Image, are not focusable by default. Only focusable components can trigger a focus
     * event.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    focusable(value: boolean): T;
    /**
     * Set nextFocus.
     *
     * @param { FocusMovement } nextStep
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    nextFocus(nextStep: Optional<FocusMovement>): T;
    /**
     * Set TabStop on component focus
     *
     * @param { boolean } isTabStop
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    tabStop(isTabStop: boolean): T;
    /**
     * Trigger a event when got focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Trigger a event when got focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Trigger a event when got focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onFocus(event: () => void): T;
    /**
     * Triggered when the current component loses focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Triggered when the current component loses focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Triggered when the current component loses focus.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onBlur(event: () => void): T;
    /**
     * Set focus index by key tab.
     *
     * @param { number } index
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Set focus index by key tab.
     *
     * @param { number } index
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set focus index by key tab.
     * The tabIndex and focusScopeId cannot be used together.
     * @param { number } index
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    tabIndex(index: number): T;
    /**
     * Set default focused component when a page create.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Set default focused component when a page create.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set default focused component when a page create.
     *
     * @param { boolean } value - True means to set the component as the default focus, and the value false has no effect.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    defaultFocus(value: boolean): T;
    /**
     * Set default focused component when focus on a focus group.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Set default focused component when focus on a focus group.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set default focused component when focus on a focus group.
     *
     * @param { boolean } value - True means the component is the default focus of the parent container, and
     * false means the component is not the default focus of the parent container.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    groupDefaultFocus(value: boolean): T;
    /**
     * Set a component focused when the component be touched.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Set a component focused when the component be touched.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set a component focused when the component be touched.
     *
     * @param { boolean } value - True means the component is focusable on touch, false means the component is not focusable on touch.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    focusOnTouch(value: boolean): T;
    /**
     * Set the component's focusBox style.
     *
     * @param { FocusBoxStyle } style - Component's focusBox style.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    focusBox(style: FocusBoxStyle): T;
    /**
    * Set container as a focus group with a specific identifier.
    *
    * @param { string } id - focus scope identifier.
    * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    focusScopeId(id: string, isGroup?: boolean): T;
    /**
    * Set container as a focus group with a specific identifier.
    *
    * @param { string } id - focus scope identifier.
    * @param { boolean } [isGroup] - whether this scope is a focus group, the default value is false.
    * @param { boolean } [arrowStepOut] - whether the arrow keys can move focus from inside the focus group to outside,
    * only effective when isGroup is true, the default value is true.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 14
    */
    focusScopeId(id: string, isGroup?: boolean, arrowStepOut?: boolean): T;
    /**
    * Set the focus priority of component in a specific focus scope.
    *
    * @param { string } scopeId
    * @param { FocusPriority } [priority] - the default value is AUTO
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    focusScopePriority(scopeId: string, priority?: FocusPriority): T;
    /**
     * animation
     *
     * @param { AnimateParam } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * animation
     *
     * @param { AnimateParam } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * animation
     *
     * @param { AnimateParam } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * animation
     *
     * @param { AnimateParam } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    animation(value: AnimateParam): T;
    /**
     * Transition effects for when the component is inserted to show and removed to hide
     * as well as the callback for the end of the transition animation.
     *
     * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Transition effects for when the component is inserted to show and removed to hide
     * as well as the callback for the end of the transition animation.
     *
     * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Transition effects for when the component is inserted to show and removed to hide
     * as well as the callback for the end of the transition animation.
     *
     * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Transition effects for when the component is inserted to show and removed to hide
     * as well as the callback for the end of the transition animation.
     *
     * @param { TransitionOptions | TransitionEffect } value - transition options or transition effect
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    transition(value: TransitionOptions | TransitionEffect): T;
    /**
     * Set the transition effect of component when it appears and disappears.
     *
     * @param { TransitionEffect } effect - transition effect
     * @param { Optional<TransitionFinishCallback> } onFinish - transition finish callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    transition(effect: TransitionEffect, onFinish: Optional<TransitionFinishCallback>): T;
    /**
     * Bind gesture recognition.
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Bind gesture recognition.
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Bind gesture recognition.
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    gesture(gesture: GestureType, mask?: GestureMask): T;
    /**
     * Binding Preferential Recognition Gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Binding Preferential Recognition Gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Binding Preferential Recognition Gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    priorityGesture(gesture: GestureType, mask?: GestureMask): T;
    /**
     * Binding gestures that can be triggered simultaneously with internal component gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Binding gestures that can be triggered simultaneously with internal component gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Binding gestures that can be triggered simultaneously with internal component gestures
     * gesture:Bound Gesture Type,mask:GestureMask;
     *
     * @param { GestureType } gesture
     * @param { GestureMask } mask
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    parallelGesture(gesture: GestureType, mask?: GestureMask): T;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { number } value - value indicates radius of backdrop blur.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { number } value - value indicates radius of backdrop blur.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { number } value - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    blur(value: number, options?: BlurOptions): T;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    blur(blurRadius: Optional<number>, options?: BlurOptions): T;
    /**
     * Adds the content blurring effect for the current component. The input parameter is the blurring radius.
     * The larger the blurring radius, the more blurring the content.
     * If the value is 0, the content blurring effect is not blurring.
     *
     * @param { Optional<number> } blurRadius - value indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates blur options.
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 19
     */
    blur(blurRadius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;
    /**
     * Applies a linear gradient foreground blur effect to the component.
     *
     * @param { number } value - the blurring radius.
     * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
     * @param { LinearGradientBlurOptions } options - the linear gradient blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    linearGradientBlur(value: number, options: LinearGradientBlurOptions): T;
    /**
     * Applies a linear gradient foreground blur effect to the component.
     *
     * @param { Optional<number> } blurRadius - the blurring radius.
     * The larger the blurring radius, the more blurring the content, and if the value is 0, the content blurring effect is not blurring.
     * @param { Optional<LinearGradientBlurOptions> } options - the linear gradient blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    linearGradientBlur(blurRadius: Optional<number>, options: Optional<LinearGradientBlurOptions>): T;
    /**
     * Apply a motion blur effect to the component being scaled or moved.
     * 1.Do not use this API in intra-component transitions, shared element transitions,
     * implicit element transitions, or particle animations. Doing so may cause unexpected results.
     * 2.The **radius** parameter of **motionBlur** must be set to **0** for the initial state.
     * Otherwise, there may be unexpected results during a cold start.
     * 3.This API must be used together with the **onFinish** parameter of **AnimateParam**.
     * Its **radius** parameter must be set to **0** when the animation ends; otherwise, there may be unexpected results.
     * 4.When using this API, do not frequently change the blur radius of the same component;
     * otherwise, there may be unexpected results.
     * For example, if you frequently click the image in the example, the blur effect may not work sometimes.
     * 5.To avoid unexpected results, make sure the coordinates of
     * the motion blur anchor point are the same as those of the animation scaling anchor point.
     * 6.To avoid unexpected results, set the blur radius to a value less than 1.
     *
     * @param { MotionBlurOptions } value - Motion blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    motionBlur(value: MotionBlurOptions): T;
    /**
     * Component motion blur interface.
     *
     * @param { Optional<MotionBlurOptions> } motionBlur - the attributes of motion blur.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    motionBlur(motionBlur: Optional<MotionBlurOptions>): T;
    /**
     * Applies a brightness effect to the component.
     *
     * @param { number } value - Brightness of the component. The value **1** indicates no effects.
     * The value **0** indicates the complete darkness. If the value is less than **1**, the brightness
     * decreases. If the value is greater than **1**, the brightness increases. A larger value indicates
     * a higher brightness. A brightness of 2 turns the component completely white.
     * <br>Default value: **1.0**<br>Recommended value range: [0, 2].
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 9.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a brightness effect to the component.
     *
     * @param { number } value - Brightness of the component. The value **1** indicates no effects.
     * The value **0** indicates the complete darkness. If the value is less than **1**, the brightness
     * decreases. If the value is greater than **1**, the brightness increases. A larger value indicates
     * a higher brightness. A brightness of 2 turns the component completely white.
     * <br>Default value: **1.0**<br>Recommended value range: [0, 2].
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 9.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a brightness effect to the component.
     *
     * @param { number } value - Brightness of the component. The value **1** indicates no effects.
     * The value **0** indicates the complete darkness. If the value is less than **1**, the brightness
     * decreases. If the value is greater than **1**, the brightness increases. A larger value indicates
     * a higher brightness. A brightness of 2 turns the component completely white.
     * <br>Default value: **1.0**<br>Recommended value range: [0, 2].
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 9.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a brightness effect to the component.
     *
     * @param { number } value - Brightness of the component. The value **1** indicates no effects.
     * The value **0** indicates the complete darkness. If the value is less than **1**, the brightness
     * decreases. If the value is greater than **1**, the brightness increases. A larger value indicates
     * a higher brightness. A brightness of 2 turns the component completely white.
     * <br>Default value: **1.0**<br>Recommended value range: [0, 2].
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 9.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    brightness(value: number): T;
    /**
     * Applies a brightness effect to the component. Compared to brightness, this
     * API supports the **undefined** type for the **brightness** parameter.
     *
     * @param { Optional<number> } brightness - Brightness of the component. The value **1** indicates
     * no effects. The value **0** indicates the complete darkness. If the value is less than **1**,
     * the brightness decreases. If the value is greater than **1**, the brightness increases. A larger
     * value indicates a higher brightness. A brightness of 2 turns the component completely white.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 2].
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * <br>**Widget capability**: This API can be used in ArkTS widgets since API version 16.
     * <br>If **brightness** is **undefined**, the brightness level is reset to **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    brightness(brightness: Optional<number>): T;
    /**
     * Applies a contrast effect to the component.
     *
     * @param { number } value - Contrast of the component. The input parameter is a
     * contrast value. If the value is **1**, the source image is displayed. If the
     * value is greater than 1, a larger value indicates a higher contrast and a clearer
     * image. If the value is less than 1, a smaller value indicates a lower contrast is.
     * If the value is **0**, the image becomes all gray. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 10).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a contrast effect to the component.
     *
     * @param { number } value - Contrast of the component. The input parameter is a
     * contrast value. If the value is **1**, the source image is displayed. If the
     * value is greater than 1, a larger value indicates a higher contrast and a clearer
     * image. If the value is less than 1, a smaller value indicates a lower contrast is.
     * If the value is **0**, the image becomes all gray. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 10).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a contrast effect to the component.
     *
     * @param { number } value - Contrast of the component. The input parameter is a
     * contrast value. If the value is **1**, the source image is displayed. If the
     * value is greater than 1, a larger value indicates a higher contrast and a clearer
     * image. If the value is less than 1, a smaller value indicates a lower contrast is.
     * If the value is **0**, the image becomes all gray. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 10).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a contrast effect to the component.
     *
     * @param { number } value - Contrast of the component. The input parameter is a
     * contrast value. If the value is **1**, the source image is displayed. If the
     * value is greater than 1, a larger value indicates a higher contrast and a clearer
     * image. If the value is less than 1, a smaller value indicates a lower contrast is.
     * If the value is **0**, the image becomes all gray. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 10).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    contrast(value: number): T;
    /**
     * Applies a contrast effect to the component. Compared to contrast,
     * this API supports the **undefined** type for the **contrast** parameter.
     *
     * @param { Optional<number> } contrast - Contrast of the component. The input parameter
     * is a contrast value. If the value is **1**, the source image is displayed. If the value
     * is greater than 1, a larger value indicates a higher contrast and a clearer image. If the
     * value is less than 1, a smaller value indicates a lower contrast is. If the value is **0**,
     * the image becomes all gray. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 10).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * <br>If **contrast** is **undefined**, the contrast effect is reset to **1.0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    contrast(contrast: Optional<number>): T;
    /**
     * Applies a grayscale effect to the component.
     *
     * @param { number } value - Grayscale conversion ratio of the component.
     * <br>If the value is **1.0**, the component is completely converted to grayscale.
     * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
     * the value applies a linear multiplier on the grayscale effect. The unit is percentage.
     * <br>Default value: **0.0**.
     * <br>Value range: [0.0, 1.0].
     * <p>**NOTE**:
     * <br>A value less than **0.0** evaluates to the value **0.0**.
     * <br>A value greater than **1.0** evaluates to the value **1.0**.
     * </p>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a grayscale effect to the component.
     *
     * @param { number } value - Grayscale conversion ratio of the component.
     * <br>If the value is **1.0**, the component is completely converted to grayscale.
     * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
     * the value applies a linear multiplier on the grayscale effect. The unit is percentage.
     * <br>Default value: **0.0**.
     * <br>Value range: [0.0, 1.0].
     * <p>**NOTE**:
     * <br>A value less than **0.0** evaluates to the value **0.0**.
     * <br>A value greater than **1.0** evaluates to the value **1.0**.
     * </p>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a grayscale effect to the component.
     *
     * @param { number } value - Grayscale conversion ratio of the component.
     * <br>If the value is **1.0**, the component is completely converted to grayscale.
     * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
     * the value applies a linear multiplier on the grayscale effect. The unit is percentage.
     * <br>Default value: **0.0**.
     * <br>Value range: [0.0, 1.0].
     * <p>**NOTE**:
     * <br>A value less than **0.0** evaluates to the value **0.0**.
     * <br>A value greater than **1.0** evaluates to the value **1.0**.
     * </p>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a grayscale effect to the component.
     *
     * @param { number } value - Grayscale conversion ratio of the component.
     * <br>If the value is **1.0**, the component is completely converted to grayscale.
     * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
     * <br>the value applies a linear multiplier on the grayscale effect. The unit is percentage.
     * <br>Default value: **0.0**.
     * <br>Value range: [0.0, 1.0].
     * <p>**NOTE**:
     * <br>A value less than **0.0** evaluates to the value **0.0**.
     * <br>A value greater than **1.0** evaluates to the value **1.0**.
     * </p>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    grayscale(value: number): T;
    /**
     * Applies a grayscale effect to the component.
     * Compared to grayscale, this API supports the **undefined** type for the **grayscale** parameter.
     *
     * @param { Optional<number> } grayscale - Grayscale conversion ratio of the component.
     * <br>If the value is **1.0**, the component is completely converted to grayscale.
     * <br>If the value is **0.0**, the component remains unchanged. Between **0** and **1**,
     * <br>the value applies a linear multiplier on the grayscale effect. The unit is percentage.
     * <br>Default value: **0.0**.
     * <br>Value range: [0.0, 1.0].
     * <p>**NOTE**
     * <br>A value less than **0.0** evaluates to the value **0.0**.
     * <br>A value greater than **1.0** evaluates to the value **1.0**.
     * </p>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    grayscale(grayscale: Optional<number>): T;
    /**
     * Applies a color blend effect to the component.
     *
     * @param { Color | string | Resource } value - Color to blend with the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a color blend effect to the component.
     *
     * @param { Color | string | Resource } value - Color to blend with the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a color blend effect to the component.
     *
     * @param { Color | string | Resource } value - Color to blend with the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a color blend effect to the component.
     *
     * @param { Color | string | Resource } value - Color to blend with the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    colorBlend(value: Color | string | Resource): T;
    /**
     * Applies a color blend effect to the component.
     * Compared to {@link colorBlend}, this API supports the **undefined** type for the **color** parameter.
     *
     * @param { Optional<Color | string | Resource> } color - Color to blend with the component.
     * <br>If **color** is **undefined**, the component reverts to its original effect with no color blending.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    colorBlend(color: Optional<Color | string | Resource>): T;
    /**
     * Applies a saturation effect to the component.
     *
     * @param { number } value - Saturation of the component. The saturation is the ratio of the
     * chromatic component to the achromatic component (gray) in a color. If the value is **1**,
     * the original image is displayed. If the value is greater than **1**, a higher percentage of
     * the chromatic component indicates a higher saturation. If the value is less than **1**, a higher
     * percentage of the achromatic component indicates a lower saturation. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 50).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a saturation effect to the component.
     *
     * @param { number } value - Saturation of the component. The saturation is the ratio of the
     * chromatic component to the achromatic component (gray) in a color. If the value is **1**,
     * the original image is displayed. If the value is greater than **1**, a higher percentage of
     * the chromatic component indicates a higher saturation. If the value is less than **1**, a higher
     * percentage of the achromatic component indicates a lower saturation. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 50).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a saturation effect to the component.
     *
     * @param { number } value - Saturation of the component. The saturation is the ratio of the
     * chromatic component to the achromatic component (gray) in a color. If the value is **1**,
     * the original image is displayed. If the value is greater than **1**, a higher percentage of
     * the chromatic component indicates a higher saturation. If the value is less than **1**, a higher
     * percentage of the achromatic component indicates a lower saturation. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 50).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a saturation effect to the component.
     *
     * @param { number } value - Saturation of the component. The saturation is the ratio of the
     * chromatic component to the achromatic component (gray) in a color. If the value is **1**,
     * the original image is displayed. If the value is greater than **1**, a higher percentage of
     * the chromatic component indicates a higher saturation. If the value is less than **1**, a higher
     * percentage of the achromatic component indicates a lower saturation. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 50).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    saturate(value: number): T;
    /**
     * Applies a saturation effect to the component. Compared to saturate, this API supports
     * the **undefined** type for the **saturate** parameter.
     *
     * @param { Optional<number> } saturate - Saturation of the component. The saturation is the ratio of
     * the chromatic component to the achromatic component (gray) in a color. If the value is **1**, the
     * original image is displayed. If the value is greater than **1**, a higher percentage of the chromatic
     * component indicates a higher saturation. If the value is less than **1**, a higher percentage of the
     * achromatic component indicates a lower saturation. The unit is percentage.
     * <br>Default value: **1.0**.
     * <br>Recommended value range: [0, 50).
     * <br>**NOTE**
     * <br>A value less than 0 evaluates to the value **0**.
     * <br>If **saturate** is **undefined**, the saturation effect is reset to **1.0**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    saturate(saturate: Optional<number>): T;
    /**
     * Sepia conversion ratio of the component.
     *
     * @param { number } value - Sepia conversion ratio of the component. If the value is **1**, the image
     * is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
     * <br> Value range: [0, +∞).
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sepia conversion ratio of the component.
     *
     * @param { number } value - Sepia conversion ratio of the component. If the value is **1**, the image
     * is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
     * <br> Value range: [0, +∞).
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sepia conversion ratio of the component.
     *
     * @param { number } value - Sepia conversion ratio of the component. If the value is **1**, the image
     * is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
     * <br> Value range: [0, +∞).
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sepia conversion ratio of the component.
     *
     * @param { number } value - Sepia conversion ratio of the component. If the value is **1**, the image
     * is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
     * <br> Value range: [0, +∞).
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    sepia(value: number): T;
    /**
     * Sepia conversion ratio of the component. Compared to sepia,
     * this API supports the **undefined** type for the **sepia** parameter.
     *
     * @param { Optional<number> } sepia - Sepia conversion ratio of the component. If the value is **1**, the
     * image is completely sepia. If the value is **0**, the component remains unchanged. The unit is percentage.
     * <br>If **sepia** is **undefined**, the component reverts to its original effect.
     * <br> Value range: [0, +∞).
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    sepia(sepia: Optional<number>): T;
    /**
     * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
     * A value of 0% does not change the image. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
     * A value of 0% does not change the image. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
     * A value of 0% does not change the image. (Percentage)
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Invert the input image. Value defines the scale of the conversion. 100% of the value is a complete reversal.
     * A value of 0% does not change the image. (Percentage)
     *
     * @param { number | InvertOptions } value - value indicates the scale of the conversion or the options of invert.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    invert(value: number | InvertOptions): T;
    /**
     * Inverts the image. Compared to invert,
     * this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<number | InvertOptions> } options - How the image is inverted.
     * <br>If the value is of the number type,
     * <br>it indicates the inversion ratio. If the value is **1**,
     * <br>the image is completely inverted. If the value is **0**, the image remains unchanged.
     * <br>The unit is percentage.<br>Value range: [0, 1]<br>A value less than 0 evaluates to the value **0**.
     * <br>If the value is of the InvertOptions type, the grayscale value of the background color is compared
     * <br>with the threshold range. If the grayscale value is greater than the upper bound of the threshold range,
     * <br>the **high** value is used. If the grayscale value is less than the lower bound of the threshold range,
     * <br>the **low** value is used. If the grayscale value is within the threshold range,
     * <br>the background color changes linearly from high to low.<br>If **options** is **undefined**,
     * <br>the component reverts to its original effect.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    invert(options: Optional<number | InvertOptions>): T;
    /**
     * Applies a system bar effect to the component, which means to invert colors based on the background and add a blur.
     *
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    systemBarEffect(): T;
    /**
     * Rotates the hue of the component.
     *
     * @param { number | string } value - Hue rotation angle of the component.
     * <br>A rotation of 360 degrees leaves the color unchanged.
     * <br>A rotation of 180 degrees and then -180 degrees also leaves the color unchanged.
     * <br>When the data type is number, the value **90** is equivalent to **'90deg'**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Rotates the hue of the component.
     *
     * @param { number | string } value - Hue rotation angle of the component.
     * <br>A rotation of 360 degrees leaves the color unchanged.
     * <br>A rotation of 180 degrees and then -180 degrees also leaves the color unchanged.
     * <br>When the data type is number, the value **90** is equivalent to **'90deg'**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Rotates the hue of the component.
     *
     * @param { number | string } value - Hue rotation angle of the component.
     * <br>A rotation of 360 degrees leaves the color unchanged.
     * <br>A rotation of 180 degrees and then -180 degrees also leaves the color unchanged.
     * <br>When the data type is number, the value **90** is equivalent to **'90deg'**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Rotates the hue of the component.
     *
     * @param { number | string } value - Hue rotation angle of the component.
     * <br>A rotation of 360 degrees leaves the color unchanged.
     * <br>A rotation of 180 degrees and then -180 degrees also leaves the color unchanged.
     * <br>When the data type is number, the value **90** is equivalent to **'90deg'**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    hueRotate(value: number | string): T;
    /**
     * Rotates the hue of the component. Compared to hueRotate,
     * this API supports the **undefined** type for the **rotation** parameter.
     *
     * @param { Optional<number | string> } rotation
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    hueRotate(rotation: Optional<number | string>): T;
    /**
     * Sets whether to draw shadows of child nodes in the component at the same layer,
     * so that the shadows of elements at the same layer overlap.
     *
     * @param { boolean } value - Whether to draw shadows of child nodes in the component
     * at the same layer, so that the shadows of elements at the same layer overlap.
     * <br>Default value: **false**.
     * <br>**NOTE**
     * <br>1. When this feature is disabled (default), if the shadow radius of a child node
     * is large, the shadows of the child nodes may overlap. This overlap issue does not occur
     * when the feature is enabled.
     * <br>2. Avoid nesting **useShadowBatching**. When used in nested mode, **useShadowBatching**
     * takes effect for the current child node only and cannot be recursively used.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Sets whether to draw shadows of child nodes in the component at the same layer,
     * so that the shadows of elements at the same layer overlap.
     *
     * @param { boolean } value - Whether to draw shadows of child nodes in the component
     * at the same layer, so that the shadows of elements at the same layer overlap.
     * <br>Default value: **false**.
     * <br>**NOTE**
     * <br>1. When this feature is disabled (default), if the shadow radius of a child node
     * is large, the shadows of the child nodes may overlap. This overlap issue does not occur
     * when the feature is enabled.
     * <br>2. Avoid nesting **useShadowBatching**. When used in nested mode, **useShadowBatching**
     * takes effect for the current child node only and cannot be recursively used.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    useShadowBatching(value: boolean): T;
    /**
     * Sets whether to draw shadows of child nodes in the component at the same layer,
     * so that the shadows of elements at the same layer overlap. Compared to
     * useShadowBatching<sup>11+</sup>, this API supports the
     * **undefined** type for the **use** parameter.
     *
     * @param { Optional<boolean> } use - Whether to draw shadows of child nodes in the
     * component at the same layer, so that the shadows of elements at the same layer overlap.
     * <br>Default value: **false**.
     * <br>**NOTE**
     * <br>1. When this feature is disabled (default), if the shadow radius of a child node is large,
     * the shadows of the child nodes may overlap. This overlap issue does not occur when the feature
     * is enabled.<br>2. Avoid nesting **useShadowBatching**. When used in nested mode,
     * **useShadowBatching** takes effect for the current child node only and cannot be recursively used.
     * <br>If **use** is **undefined**, the component reverts to its original effect of not using
     * shadow overlapping.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    useShadowBatching(use: Optional<boolean>): T;
    /**
    * Specifies whether to apply the effect defined by <!--Del-->the parent
    * [EffectComponent](ts-container-effectcomponent-sys.md) or <!--DelEnd-->the window.
    *
    * @param { Optional<boolean> } useEffect - Whether to apply the effect defined by <!--Del-->the parent
    * **EffectComponent** or <!--DelEnd-->the window.
    * <br>The value **true** means to apply the effect defined by <!--Del-->the parent **EffectComponent**
    * or <!--DelEnd-->the window.
    * <br>Default value: **false**.
    * @param { EffectType } [effectType] - Type of effect to apply to the component, which is defined by
    * <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
    * <br>Default value: **EffectType.DEFAULT**.
    * @returns { T } return the component attribute.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @atomicservice
    * @since 14
    */
    useEffect(useEffect: boolean, effectType: EffectType): T;
    /**
     * Specifies whether to apply the effect defined by <!--Del-->the parent
     * EffectComponent or
     * <!--DelEnd-->the window. Compared to useEffect<sup>14+</sup>,
     * this API supports the **undefined** type for the **useEffect** parameter.
     *
     * @param { Optional<boolean> } useEffect - Whether to apply the effect defined by
     * <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
     * <br>The value **true** means to apply the effect defined by <!--Del-->the parent
     * **EffectComponent** or <!--DelEnd-->the window.
     * <br>Default value: **false**.
     * <br>If **useEffect** is set to **undefined**, the previous value is retained.
     * @param { EffectType } [effectType] - Type of effect to apply to the component, which
     * is defined by <!--Del-->the parent **EffectComponent** or <!--DelEnd-->the window.
     * <br>Default value: **EffectType.DEFAULT**.
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    useEffect(useEffect: Optional<boolean>, effectType?: EffectType): T;
    /**
     * Specifies whether to combine the drawing of special effects, such as background blur.
     *
     * @param { boolean } value - Whether the component inherits the special effect settings of the
     * **EffectComponent** component.<br>The value **true** means that the component inherits the
     * special effect settings of the **EffectComponent** component, and **false** means the opposite.
     * <br>Default value: **false**.
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    useEffect(value: boolean): T;
    /**
     * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.
     *
     * @param { number } value - Background blur effect to apply to the component.
     * <br>The input parameter is the blur radius. The larger the radius is, the more blurred the background is.
     * <br>If the value is **0**, the background is not blurred.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.
     *
     * @param { number } value - Background blur effect to apply to the component.
     * <br>The input parameter is the blur radius. The larger the radius is, the more blurred the background is.
     * <br>If the value is **0**, the background is not blurred.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.
     *
     * @param { number } value - Background blur effect to apply to the component.
     * <br>The input parameter is the blur radius. The larger the radius is, the more blurred the background is.
     * <br>If the value is **0**, the background is not blurred.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a background blur effect to the component. You can customize the blur radius and grayscale parameters.
     *
     * @param { number } value - Background blur effect to apply to the component.
     * <br>The input parameter is the blur radius. The larger the radius is, the more blurred the background is.
     * <br>If the value is **0**, the background is not blurred.
     * @param { BlurOptions } [options] - Grayscale parameters.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    backdropBlur(value: number, options?: BlurOptions): T;
    /**
     * Adds the background blur effect for the current component. The input parameter is the blur radius.
     * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
     *
     * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates the backdrop blur options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    backdropBlur(radius: Optional<number>, options?: BlurOptions): T;
    /**
     * Adds the background blur effect for the current component. The input parameter is the blur radius.
     * The larger the blur radius, the more blurred the background. If the value is 0, the background blur is not blurred.
     *
     * @param { Optional<number> } radius - radius indicates radius of backdrop blur.
     * @param { BlurOptions } [options] - options indicates the backdrop blur options.
     * @param { SystemAdaptiveOptions } [sysOptions] - system adaptive options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 19
     */
    backdropBlur(radius: Optional<number>, options?: BlurOptions, sysOptions?: SystemAdaptiveOptions): T;
    /**
     * Sets whether the component and its child components are rendered off
     * the screen as a whole before being blended with its parent.
     *
     * @param { boolean } value - Whether the component and its child components are rendered
     * off the screen as a whole before being blended with its parent. If the opacity of the
     * component is not 1, the drawing effect may vary depending on the value.
     * <br>Default value: **false**.
     * <br> The value **true** means the component and its child components are rendered off
     * the screen as a whole, and **false** means the opposite.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether the component and its child components are rendered off
     * the screen as a whole before being blended with its parent.
     *
     * @param { boolean } value - Whether the component and its child components are rendered
     * off the screen as a whole before being blended with its parent. If the opacity of the
     * component is not 1, the drawing effect may vary depending on the value.
     * <br>Default value: **false**.
     * <br> The value **true** means the component and its child components are rendered off
     * the screen as a whole, and **false** means the opposite.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether the component and its child components are rendered off
     * the screen as a whole before being blended with its parent.
     *
     * @param { boolean } value - Whether the component and its child components are rendered
     * off the screen as a whole before being blended with its parent. If the opacity of the
     * component is not 1, the drawing effect may vary depending on the value.
     * <br>Default value: **false**.
     * <br> The value **true** means the component and its child components are rendered off
     * the screen as a whole, and **false** means the opposite.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    renderGroup(value: boolean): T;
    /**
     * Sets whether the component and its child components are rendered off the screen as a whole
     * before being blended with its parent. Compared to renderGroup<sup>10+</sup>,
     * this API supports the **undefined** type for the **isGroup** parameter.
     *
     * @param { Optional<boolean> } isGroup - Whether the component and its child components are rendered
     * off the screen as a whole before being blended with its parent. If the opacity of the component is
     * not 1, the drawing effect may vary depending on the value.
     * <br>Default value: **false**.
     * <br>If **isGroup** is **undefined**, the component reverts to its original effect of not enabling
     * offscreen rendering as a whole before blending with the parent component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    renderGroup(isGroup: Optional<boolean>): T;
    /**
     * Sets whether to freeze the component. When frozen, the component and its children are cached for
     * repeated drawing after offscreen rendering, without updating internal attributes.
     *
     * @param { boolean } value - Whether to freeze the component. When frozen, the component and its children
     * are cached for repeated drawing after offscreen rendering, without updating internal attributes. If the
     * opacity of the component is not 1, the drawing effect may vary depending on the value.
     * <br>Default value: **false**.
     * <br> **true**: Freeze the component.
     * <br>**false**: Do not freeze the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    freeze(value: boolean): T;
    /**
     * Sets whether to freeze the component. When frozen, the component and its children are cached for repeated
     * drawing after offscreen rendering, without updating internal attributes. Compared to freeze,
     * this API supports the **undefined** type for the **freeze** parameter.
     *
     * @param { Optional<boolean> } freeze - Whether to freeze the component. When frozen, the component and its
     * children are cached for repeated drawing after offscreen rendering, without updating internal attributes.
     * If the opacity of the component is not 1, the drawing effect may vary depending on the value.
     * <br>Default value: **false**.
     * <br> **true**: Freeze the component.
     * <br>**false**: Do not freeze the component.
     * <br>If **freeze** is set to **undefined**, the previous value is retained.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    freeze(freeze: Optional<boolean>): T;
    /**
     * Sets the translation effect for page transitions.
     *
     * @param { TranslateOptions } value - Translation effect for page transitions
     * <br>specifying the start value for entrance and the end value for exit. default:{x:0,y:0,z:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the translation effect for page transitions.
     *
     * @param { TranslateOptions } value - Translation effect for page transitions
     * <br>specifying the start value for entrance and the end value for exit. default:{x:0,y:0,z:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the translation effect for page transitions.
     *
     * @param { TranslateOptions } value - Translation effect for page transitions
     * <br>specifying the start value for entrance and the end value for exit. default:{x:0,y:0,z:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the translation effect for page transitions.
     *
     * @param { TranslateOptions } value - Translation effect for page transitions
     * <br>specifying the start value for entrance and the end value for exit. default:{x:0,y:0,z:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    translate(value: TranslateOptions): T;
    /**
     * Translates the component.
     * Compared to {@link translate}, this API supports the **undefined** type for the **translate** parameter.
  
     *
     * @param { Optional<TranslateOptions> } translate - How the component is translated in the coordinate
     * <br>system (as shown below) with the upper left corner of the component as the coordinate origin.
     * <br>Values of **x**, **y**, and **z** indicate the translation distance along the respective axis.
     * <br>default:{x:0,y:0,z:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    translate(translate: Optional<TranslateOptions>): T;
    /**
     * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
     *
     * @param { ScaleOptions } value - Scale ratio along the x-, y-, and z-axis. The default value is **1**.
     * <br>**centerX** and **centerY** are used to set the scale center point.
     * <br>default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
     *
     * @param { ScaleOptions } value - Scale ratio along the x-, y-, and z-axis. The default value is **1**.
     * <br>**centerX** and **centerY** are used to set the scale center point.
     * <br>default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the zoom effect during page transition. The value is the start point of entry and end point of exit.
     *
     * @param { ScaleOptions } value - Scale ratio along the x-, y-, and z-axis. The default value is **1**.
     * <br>**centerX** and **centerY** are used to set the scale center point.
     * <br>default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Scales the component.
     *
     * @param { ScaleOptions } value - Scale ratio along the x-, y-, and z-axis. The default value is **1**.
     * <br>**centerX** and **centerY** are used to set the scale center point.
     * <br>default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    scale(value: ScaleOptions): T;
    /**
     * Scales the component.
     * Compared to {@link scale} , this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<ScaleOptions> } options - Scale ratio along the x-, y-, and z-axis.
     * <br>The default value is **1**. **centerX** and **centerY** are used to set the scale center point.
     * <br>default:{x:1,y:1,z:1,centerX:'50%',centerY:'50%'}
     * <br>If **options** is **undefined**, the component reverts to its original state with no scaling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    scale(options: Optional<ScaleOptions>): T;
    /**
     * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Default number of occupied columns, indicating the number of occupied grid columns when the number of columns (span) of the corresponding size is not set in the useSizeType attribute.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     * @deprecated since 14
     * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
     */
    gridSpan(value: number): T;
    /**
     * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
     * the current component is located in the nth column.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
     * the current component is located in the nth column.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The default offset column number indicates the number of offset columns of the current component in the start direction of the parent component when the useSizeType attribute does not set the offset of the corresponding dimension. That is,
     * the current component is located in the nth column.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     * @deprecated since 14
     * @useinstead grid_col/GridColInterface and grid_row/GridRowInterface
     */
    gridOffset(value: number): T;
    /**
     * Sets the rotation effect during assembly transition.
     * The values are the start point during insertion and the end point during deletion.
     *
     * @param { RotateOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the rotation effect during assembly transition.
     * The values are the start point during insertion and the end point during deletion.
     *
     * @param { RotateOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the rotation effect during assembly transition.
     * The values are the start point during insertion and the end point during deletion.
     *
     * @param { RotateOptions } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Set component rotation.
     *
     * @param { RotateOptions } value default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    rotate(value: RotateOptions): T;
    /**
     * Rotates the component. This API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<RotateOptions> } options default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    rotate(options: Optional<RotateOptions>): T;
    /**
     * Set component rotation.
     *
     * @param { Optional<RotateOptions | RotateAngleOptions> } options default:{x:0,y:0,z:0,centerX:'50%',centerY:'50%',centerZ:0,perspective:0,angle:0}
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    rotate(options: Optional<RotateOptions | RotateAngleOptions>): T;
    /**
     * Sets the transformation matrix of the component.
     *
     * @param { object } value - Transformation matrix of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the transformation matrix of the component.
     *
     * @param { object } value - Transformation matrix of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the transformation matrix of the component.
     *
     * @param { object } value - Transformation matrix of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    transform(value: object): T;
    /**
     * Sets the transformation matrix of the component.
     * Compared to {@link transform}, this API supports the **undefined** type for the **transform** parameter.
     *
     * @param { Optional<object> } transform - How the component is translated in the coordinate
     * <br>system (as shown below) with the upper left corner of the component as the coordinate origin.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    transform(transform: Optional<object>): T;
    /**
     * This callback is triggered when a component mounts a display.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * This callback is triggered when a component mounts a display.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * This callback is triggered when a component mounts a display.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * This callback is triggered when a component mounts a display.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onAppear(event: () => void): T;
    /**
     * This callback is triggered when component uninstallation disappears.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * This callback is triggered when component uninstallation disappears.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * This callback is triggered when component uninstallation disappears.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * This callback is triggered when component uninstallation disappears.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    onDisAppear(event: () => void): T;
    /**
     * This callback is triggered when a component mounts to view tree.
     *
     * @param { Callback<void> } callback
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onAttach(callback: Callback<void>): T;
    /**
     * This callback is triggered when a component is detached from view tree.
     *
     * @param { Callback<void> } callback
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDetach(callback: Callback<void>): T;
    /**
     * This callback is triggered when the size or position of this component change finished.
     *
     * @param { function } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * This callback is triggered when the size or position of this component change finished.
     *
     * @param { function } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * This callback is triggered when the size or position of this component change finished.
     *
     * @param { function } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onAreaChange(event: (oldValue: Area, newValue: Area) => void): T;
    /**
     * Controls the display or hide of the current component.
     *
     * @param { Visibility } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Controls the display or hide of the current component.
     *
     * @param { Visibility } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Controls the display or hide of the current component.
     *
     * @param { Visibility } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Controls the display or hide of the current component.
     *
     * @param { Visibility } value - Whether the component is visible.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    visibility(value: Visibility): T;
    /**
     * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The percentage of the remaining space of the Flex container allocated to the component on which this property resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the percentage of the parent container's remaining space that is allocated to the component.
     * Default value: **0**.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    flexGrow(value: number): T;
    /**
     * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The proportion of the Flex container compression size assigned to the component on which this attribute resides.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the percentage of the parent container's shrink size that is allocated to the component.
     * Default value: 0 when the parent container is Column or Row, 1 when the parent container is Flex..
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    flexShrink(value: number): T;
    /**
     * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The base dimension of the assembly on which this attribute is located in the direction of the principal axis in the Flex container.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the base size of the component in the main axis of the parent container.
     * Default value: **'auto'**.
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    flexBasis(value: number | string): T;
    /**
     * Overrides the default configuration of alignItems in the Flex Layout container.
     *
     * @param { ItemAlign } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Overrides the default configuration of alignItems in the Flex Layout container.
     *
     * @param { ItemAlign } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Overrides the default configuration of alignItems in the Flex Layout container.
     *
     * @param { ItemAlign } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the alignment mode of the child components along the cross axis of the parent container.
     * Default value: **ItemAlign.Auto**.
     *
     * @param { ItemAlign } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    alignSelf(value: ItemAlign): T;
    /**
     * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the current component and displays the priority in the layout container. This parameter is valid only in Row, Column, and Flex single-row layouts.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the display priority for the component in the layout container.
     * <br>This parameter is only effective in Row, Column, and Flex (single-line) container components.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    displayPriority(value: number): T;
    /**
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * The sibling components in the same container are hierarchically displayed. A larger value of z indicates a higher display level.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    zIndex(value: number): T;
    /**
     * If the components of the two pages are configured with the same ID.
     * The shared element transition is performed during transition.
     * If the parameter is set to an empty string, the shared element transition does not occur.
     * For details about the options parameter, see the options parameter description.
     *
     * @param { string } id - Transition of the shared element.
     * <br>If the same **id** value is configured for a component on the two pages,
     * <br>this component is considered as a shared element of the pages.
     * <br>If the **id** value is an empty string, no transition will be applied to the component.
     * @param { sharedTransitionOptions } options - Parameters of the shared element transition animation.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * If the components of the two pages are configured with the same ID.
     * The shared element transition is performed during transition.
     * If the parameter is set to an empty string, the shared element transition does not occur.
     * For details about the options parameter, see the options parameter description.
     *
     * @param { string } id - Transition of the shared element.
     * <br>If the same **id** value is configured for a component on the two pages,
     * <br>this component is considered as a shared element of the pages.
     * <br>If the **id** value is an empty string, no transition will be applied to the component.
     * @param { sharedTransitionOptions } options - Parameters of the shared element transition animation.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * If the components of the two pages are configured with the same ID.
     * The shared element transition is performed during transition.
     * If the parameter is set to an empty string, the shared element transition does not occur.
     * For details about the options parameter, see the options parameter description.
     *
     * @param { string } id - Transition of the shared element.
     * <br>If the same **id** value is configured for a component on the two pages,
     * <br>this component is considered as a shared element of the pages.
     * <br>If the **id** value is an empty string, no transition will be applied to the component.
     * @param { sharedTransitionOptions } options - Parameters of the shared element transition animation.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    sharedTransition(id: string, options?: sharedTransitionOptions): T;
    /**
     * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
     *
     * @param { Direction } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
     *
     * @param { Direction } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the sliding direction. The enumerated value supports logical AND (&) and logical OR (|).
     *
     * @param { Direction } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets how elements are laid out along the main axis of the container.
     * Default value: **Direction.Auto**.
     *
     * @param { Direction } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    direction(value: Direction): T;
    /**
     * align
     *
     * @param { Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * align
     *
     * @param { Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * align
     *
     * @param { Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the alignment mode of the component content in the drawing area.
     * Default value: **Alignment.Center**.
     *
     * @param { Alignment } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    align(value: Alignment): T;
    /**
     * align
     *
     * @param { Alignment | LocalizedAlignment } alignment
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    align(alignment: Alignment | LocalizedAlignment): T;
    /**
     * Defines the align rules of child component in Stack container.
     *
     * @param { LocalizedAlignment } alignment
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    layoutGravity(alignment: LocalizedAlignment): T;
    /**
     * position
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * position
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * position
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * position
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the absolute position of the component relative to the position of the parent component.
     * <br>The attribute is not available for a layout container whose width and height are zero.
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    position(value: Position | Edges | LocalizedEdges): T;
    /**
     * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the anchor point of the element when it is positioned. The base point is offset from the top start point of the element.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the anchor for locating the component, which is used to move the component
     * further away from the position specified by position or offset.
     *
     * @param { Position | LocalizedPosition} value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    markAnchor(value: Position | LocalizedPosition): T;
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Coordinate offset relative to the layout completion position.
     * Setting this attribute does not affect the layout of the parent container. The position is adjusted only during drawing.
     *
     * @param { Position } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the offset of the component relative to its original position.
     * <br>The offset attribute does not affect the layout of the parent container.
     * It adjusts the component position only during drawing.
     *
     * @param { Position | Edges | LocalizedEdges } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    offset(value: Position | Edges | LocalizedEdges): T;
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     * If it is set to false, click operations are not responded.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     * If it is set to false, click operations are not responded.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     * If it is set to false, click operations are not responded.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * If the value is true, the component is available and can respond to operations such as clicking.
     * If it is set to false, click operations are not responded.
     *
     * @param { boolean } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    enabled(value: boolean): T;
    /**
     * Sets the number of occupied columns and offset columns for a specific device width type.
     *
     * @param { object } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     * @deprecated since 9
     * @useinstead grid_col/GridColColumnOption and grid_row/GridRowColumnOption
     */
    useSizeType(value: {
        xs?: number | {
            span: number;
            offset: number;
        };
        sm?: number | {
            span: number;
            offset: number;
        };
        md?: number | {
            span: number;
            offset: number;
        };
        lg?: number | {
            span: number;
            offset: number;
        };
    }): T;
    /**
     * Specifies the alignRules of relative container
     *
     * @param { AlignRuleOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Specifies the alignRules of relative container
     *
     * @param { AlignRuleOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the alignment rules in the relative container.
     * This API is valid only when the container is RelativeContainer.
     *
     * @param { AlignRuleOption } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    alignRules(value: AlignRuleOption): T;
    /**
     * Sets the alignment rules in the relative container.
     * <br>This API is valid only when the container is RelativeContainer.
     * <br>This API takes the right-to-left scripts into account, using start and end instead of
     * left and right for alignment in the horizontal direction. Prioritize this API in aligning
     * child components in the relative container.
     *
     * @param { LocalizedAlignRuleOptions } alignRule
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    alignRules(alignRule: LocalizedAlignRuleOptions): T;
    /**
     * Sets the parameters of the chain in which the component is the head.
     * <br>This parameter has effect only when the parent container is RelativeContainer.
     * <br>The chain head is the first component in the chain that satisfies the chain formation rules.
     * In a horizontal layout, it starts from the left (or from the right in a mirrored language
     * layout). In a vertical layout, it starts from the top.
     *
     * @param { Axis } direction - indicates direction of the chain
     * @param { ChainStyle } style - indicates style of the chain
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    chainMode(direction: Axis, style: ChainStyle): T;
    /**
     * Specifies the aspect ratio of the current component.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Specifies the aspect ratio of the current component.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Specifies the aspect ratio of the current component.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the aspect ratio of the component, which can be obtained using the following formula: width/height.
     * <br>If only width and aspectRatio are set, the height is calculated using the following formula: width/aspectRatio.
     * <br>If only height and aspectRatio are set, the width is calculated using the following formula: height x aspectRatio.
     * <br>If width, height, and aspectRatio are all set, the explicitly set height is ignored, and the effective height is
     * calculated using the following formula: width/aspectRatio.
     * <br>This parameter takes effect only when a valid value greater than 0 is specified.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    aspectRatio(value: number): T;
    /**
     * The click effect level and scale number.
     *
     * @param { ClickEffect | null } value
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * The click effect level and scale number.
     *
     * @param { ClickEffect | null } value
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    clickEffect(value: ClickEffect | null): T;
    /**
     * The click effect level and scale number.
     *
     * @param { Optional<ClickEffect | null> } effect
     * @returns { T } return the component attribute.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    clickEffect(effect: Optional<ClickEffect | null>): T;
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * After a listener is bound, the component can be dragged. After the drag occurs, a callback is triggered.
     * (To be triggered, press and hold for 170 milliseconds (ms))
     *
     * <strong>NOTE</strong>:<br>
     * The global builder is not supported.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onDragStart(event: (event: DragEvent, extraParams?: string) => CustomBuilder | DragItemInfo): T;
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * After binding, a callback is triggered when the component is dragged to the range of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onDragEnter(event: (event: DragEvent, extraParams?: string) => void): T;
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * After binding, a callback is triggered when the drag moves within the range of a placeable component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onDragMove(event: (event: DragEvent, extraParams?: string) => void): T;
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * After binding, a callback is triggered when the component is dragged out of the component range.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onDragLeave(event: (event: DragEvent, extraParams?: string) => void): T;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onDrop(event: (event: DragEvent, extraParams?: string) => void): T;
    /**
     * The component bound to this event can be used as the drag release target.
     * This callback is triggered when the drag behavior is stopped within the scope of the component.
     *
     * @param { OnDragEventCallback } eventCallback - event callback.
     * @param { DropOptions } [dropOptions] - the drop handling options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    onDrop(eventCallback: OnDragEventCallback, dropOptions?: DropOptions): T;
    /**
     * This function is called when the drag event is end.
     *
     * @param { function } event - indicates the function to be called.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * This function is called when the drag event is end.
     *
     * @param { function } event - indicates the function to be called.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 11
     */
    /**
     * This function is called when the drag event is end.
     *
     * @param { function } event - indicates the function to be called.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    onDragEnd(event: (event: DragEvent, extraParams?: string) => void): T;
    /**
     * Allowed drop uniformData type for this node.
     *
     * @param { Array<UniformDataType> } value - the uniformData type for this node.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Allowed drop uniformData type for this node.
     *
     * @param { Array<UniformDataType> } value - the uniformData type for this node.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Allowed drop uniformData type for this node.
     *
     * @param { Array<UniformDataType> | null } value - the uniformData type for this node.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    allowDrop(value: Array<UniformDataType> | null): T;
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Enable the selectable area can be dragged.
     *
     * @param { boolean } value - true means the area can be dragged, false means the area can't be dragged.
     * The default value is false.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    draggable(value: boolean): T;
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo } value - preview of the component for dragging process
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo | string } value - preview of the component for dragging process
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    dragPreview(value: CustomBuilder | DragItemInfo | string): T;
    /**
     * Set preview of the component for dragging process
     *
     * @param { CustomBuilder | DragItemInfo | string } preview - preview of the component for dragging process
     * @param { PreviewConfiguration } config - drag preview configuration.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 15
     */
    dragPreview(preview: CustomBuilder | DragItemInfo | string, config?: PreviewConfiguration): T;
    /**
     * Set the selectable area drag preview options.
     *
     * @param { DragPreviewOptions } value - preview options value.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Set the selectable area drag preview options.
     *
     * @param { DragPreviewOptions } value - preview options value.
     * @param { DragInteractionOptions } options - drag interaction options value.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    dragPreviewOptions(value: DragPreviewOptions, options?: DragInteractionOptions): T;
    /**
     * After binding, a callback is triggered when the preDrag status change finished.
     *
     * @param { Callback<PreDragStatus> } callback callback - The callback will be triggered when the preDrag status change.
     * @returns { T } property value of type T.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    onPreDrag(callback: Callback<PreDragStatus>): T;
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string } value
     * @param { object } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string } value
     * @param { object } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder } value
     * @param { object } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder } value
     * @param { object } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Add mask text to the current component. The layout is the same as that of the current component.
     *
     * @param { string | CustomBuilder | ComponentContent } value
     * @param { OverlayOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    overlay(value: string | CustomBuilder | ComponentContent, options?: OverlayOptions): T;
    /**
   * Config toolbar for current component.
   *
   * @param { CustomBuilder } value
   * @returns { T }
   * @syscap SystemCapability.ArkUI.ArkUI.Full
   * @crossplatform
   * @since 20
   */
    toolbar(value: CustomBuilder): T;
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * @param { object } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * @param { object } value - Linear gradient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * @param { object } value - Linear gradient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * @param { object } value - Linear gradient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient; direction:Direction of Linear Gradient;  colors:Color description for gradients,repeating:repeating.
     *
     * @param { object } value - Linear gradient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * @param { object } value - Linear gradient.
     * <br>If **options** is **undefined**, the linear gradient is disabled.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    linearGradient(value: LinearGradientOptions): T;
    /**
     * Linear Gradient
     * angle: Angle of Linear Gradient. The default value is 180;
     * direction: Direction of Linear Gradient. The default value is GradientDirection.Bottom;
     * colors: Color description for gradients.
     * repeating: repeating. The default value is false
     *
     * @param { Optional<LinearGradientOptions> } options - Linear gradient.
     * <br>If **options** is **undefined**, the linear gradient is disabled.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    linearGradient(options: Optional<LinearGradientOptions>): T;
    /**
     * Creates a sweep gradient.
     *
     * @param { SweepGradientOptions } value - Sweep gradient, which can sweep around the specified
     * center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
     * color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
     * is, the coordinates relative to the upper left corner of the current component.
     * <br>- **start**: start angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **end**: end angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- colors: array of color stops,
     * each of which consists of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
     * <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
     * or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
     * are "90", "90deg", and "1.57rad".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Creates a sweep gradient.
     *
     * @param { SweepGradientOptions } value - Sweep gradient, which can sweep around the specified
     * center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
     * color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
     * is, the coordinates relative to the upper left corner of the current component.
     * <br>- **start**: start angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **end**: end angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- colors: array of color stops,
     * each of which consists of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
     * <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
     * or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
     * are "90", "90deg", and "1.57rad".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Creates a sweep gradient.
     *
     * @param { SweepGradientOptions } value - Sweep gradient, which can sweep around the specified
     * center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
     * color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
     * is, the coordinates relative to the upper left corner of the current component.
     * <br>- **start**: start angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **end**: end angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- colors: array of color stops,
     * each of which consists of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
     * <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
     * or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
     * are "90", "90deg", and "1.57rad".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates a sweep gradient.
     *
     * @param { SweepGradientOptions } value - Sweep gradient, which can sweep around the specified
     * center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
     * color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
     * is, the coordinates relative to the upper left corner of the current component.
     * <br>- **start**: start angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **end**: end angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- colors: array of color stops,
     * each of which consists of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
     * <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
     * or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
     * are "90", "90deg", and "1.57rad".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Creates a sweep gradient.
     *
     * @param { SweepGradientOptions } value - Sweep gradient, which can sweep around the specified
     * center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
     * color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
     * is, the coordinates relative to the upper left corner of the current component.
     * <br>- **start**: start angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **end**: end angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- colors: array of color stops,
     * each of which consists of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
     * <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
     * or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
     * are "90", "90deg", and "1.57rad".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Creates a sweep gradient.
     *
     * @param { SweepGradientOptions } value - Sweep gradient, which can sweep around the specified
     * center point in the 0–360 degree range. If the rotation angle exceeds the range, a monochrome
     * color instead of a gradient will be drawn.<br>- **center**: center of the sweep gradient, that
     * is, the coordinates relative to the upper left corner of the current component.
     * <br>- **start**: start angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **end**: end angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- **rotation**: rotation angle of the sweep gradient.
     * <br> Default value: **0**<br>If the angle is specified with a string, only the deg, grad, rad,
     * and turn types are supported.<br>- colors: array of color stops,
     * each of which consists of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**. A value greater than 360 is treated as **360**.
     * <br>When **start**, **end**, or **rotation** is specified with a string, the string must be a number
     * or a number followed by one of the following units: deg, rad, grad, and turn. Valid value examples
     * are "90", "90deg", and "1.57rad".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    sweepGradient(value: SweepGradientOptions): T;
    /**
     * Creates a sweep gradient. Compared to sweepGradient,
     * this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<SweepGradientOptions> } options - Sweep gradient.
     * <br>If **options** is **undefined**, the sweep gradient is disabled.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    sweepGradient(options: Optional<SweepGradientOptions>): T;
    /**
     * Creates a radial gradient.
     *
     * @param { object } value - Radial gradient.
     * <br>- **center**: center of the radial gradient, that is, the coordinates relative
     * to the upper left corner of the current component.
     * <br>- **radius**: radius of the radial gradient.
     * <br> Value range: [0, +∞).
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**.
     * <br>- colors: array of color stops, each of which consists
     * of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Creates a radial gradient.
     *
     * @param { object } value - Radial gradient.
     * <br>- **center**: center of the radial gradient, that is, the coordinates relative
     * to the upper left corner of the current component.
     * <br>- **radius**: radius of the radial gradient.
     * <br> Value range: [0, +∞).
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**.
     * <br>- colors: array of color stops, each of which consists
     * of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Creates a radial gradient.
     *
     * @param { object } value - Radial gradient.
     * <br>- **center**: center of the radial gradient, that is, the coordinates relative
     * to the upper left corner of the current component.
     * <br>- **radius**: radius of the radial gradient.
     * <br> Value range: [0, +∞).
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**.
     * <br>- colors: array of color stops, each of which consists
     * of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Creates a radial gradient.
     *
     * @param { object } value - Radial gradient.
     * <br>- **center**: center of the radial gradient, that is, the coordinates relative
     * to the upper left corner of the current component.
     * <br>- **radius**: radius of the radial gradient.
     * <br> Value range: [0, +∞).
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**.
     * <br>- colors: array of color stops, each of which consists
     * of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Creates a radial gradient.
     *
     * @param { object } value - Radial gradient.
     * <br>- **center**: center of the radial gradient, that is, the coordinates relative
     * to the upper left corner of the current component.
     * <br>- **radius**: radius of the radial gradient.
     * <br> Value range: [0, +∞).
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**.
     * <br>- colors: array of color stops, each of which consists
     * of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * Creates a radial gradient.
     *
     * Anonymous Object Rectification.
     * @param { RadialGradientOptions } value - Radial gradient.
     * <br>- **center**: center of the radial gradient, that is, the coordinates relative
     * to the upper left corner of the current component.
     * <br>- **radius**: radius of the radial gradient.
     * <br> Value range: [0, +∞).
     * <br>**NOTE**
     * <br>A value less than 0 is treated as **0**.
     * <br>- colors: array of color stops, each of which consists
     * of a color and its stop position. Invalid colors are automatically skipped.
     * <br>- **repeating**: whether the colors are repeated.
     * <br>  Default value: **false**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    radialGradient(value: RadialGradientOptions): T;
    /**
     * Creates a radial gradient. Compared to radialGradient,
     * this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<RadialGradientOptions> } options - Radial gradient.
     * <br>If **options** is **undefined**, the radial gradient is disabled.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    radialGradient(options: Optional<RadialGradientOptions>): T;
    /**
     * Set the motion path of the component.
     *
     * @param { MotionPathOptions } value - Motion path of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Set the motion path of the component.
     *
     * @param { MotionPathOptions } value - Motion path of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Set the motion path of the component.
     *
     * @param { MotionPathOptions } value - Motion path of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    motionPath(value: MotionPathOptions): T;
    /**
     * Applies a shadow effect to the component.
     *
     * @param { ShadowOptions } value - Shadow of the component.
     * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
     * and offset along the x-axis and y-axis can be specified.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a shadow effect to the component.
     *
     * @param { ShadowOptions } value - Shadow of the component.
     * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
     * and offset along the x-axis and y-axis can be specified.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a shadow effect to the component.
     *
     * @param { ShadowOptions | ShadowStyle } value - Shadow of the component.
     * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
     * and offset along the x-axis and y-axis can be specified.
     * <br>When the value type is **ShadowStyle**, the shadow style can be specified.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a shadow effect to the component.
     *
     * @param { ShadowOptions | ShadowStyle } value - Shadow of the component.
     * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
     * and offset along the x-axis and y-axis can be specified.
     * <br>When the value type is **ShadowStyle**, the shadow style can be specified.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    shadow(value: ShadowOptions | ShadowStyle): T;
    /**
     * Applies a shadow effect to the component.
     * Compared to {@link shadow}, this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<ShadowOptions | ShadowStyle> } options - Shadow of the component.
     * <br>When the value type is **ShadowOptions**, the blur radius, shadow color,
     * and offset along the x-axis and y-axis can be specified.
     * <br>When the value type is **ShadowStyle**, the shadow style can be specified.
     * <br>If **options** is **undefined**, the component reverts to its original effect with no shadow.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    shadow(options: Optional<ShadowOptions | ShadowStyle>): T;
    /**
     * Defines how the component's content (including the content of it child components)
     * is blended with the existing content on the canvas (possibly offscreen canvas) below.
     *
     * @param { BlendMode } value - Blend mode.
     * <br>Default value: **BlendMode.NONE**.
     * <br>**NOTE**
     * <br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER**
     * by default, and **BlendApplyType** does not take effect.
     * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.
     * <br>Default value: **BlendApplyType.FAST**.
     * <br>**NOTE**
     * <br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
     * <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component
     * is created. The content of the current component (including child components) is then drawn
     * onto the offscreen canvas, and blended with the existing content on the canvas below using
     * the specified blend mode. This approach may cause issues with screen capture for APIs such
     * as linearGradientBlur<sup>12+</sup>, backgroundEffect, and brightness.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * Defines how the component's content (including the content of it child components)
     * is blended with the existing content on the canvas (possibly offscreen canvas) below.
     *
     * @param { BlendMode } value - Blend mode.
     * <br>Default value: **BlendMode.NONE**.
     * <br>**NOTE**
     * <br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER**
     * by default, and **BlendApplyType** does not take effect.
     * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.
     * <br>Default value: **BlendApplyType.FAST**.
     * <br>**NOTE**
     * <br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
     * <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component
     * is created. The content of the current component (including child components) is then drawn
     * onto the offscreen canvas, and blended with the existing content on the canvas below using
     * the specified blend mode. This approach may cause issues with screen capture for APIs such
     * as linearGradientBlur<sup>12+</sup>, backgroundEffect, and brightness.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    blendMode(value: BlendMode, type?: BlendApplyType): T;
    /**
     * Defines how the component's content (including the content of it child components) is
     * blended with the existing content on the canvas (possibly offscreen canvas) below.
     * Compared to blendMode<sup>11+</sup>, this API supports the **undefined**
     * type for the **mode** parameter.
     *
     * @param { Optional<BlendMode> } mode - Blend mode.
     * <br>Default value: **BlendMode.NONE**.
     * <br>If **mode** is **undefined**, the component reverts to its original effect of not
     * enabling offscreen rendering as a whole before blending with the parent component.
     * <br>**NOTE**
     * <br>When **BlendMode.NONE** is used, the blend effect is **BlendMode.SRC_OVER**
     * by default, and **BlendApplyType** does not take effect.
     * @param { BlendApplyType } [type] - Whether the blend mode is implemented offscreen.
     * <br>Default value: **BlendApplyType.FAST**.
     * <br>**NOTE**
     * <br>1. **BlendApplyType.FAST**: The blend mode is not implemented offscreen.
     * <br>2. **BlendApplyType.OFFSCREEN**: An offscreen canvas of the size of the current component
     * is created. The content of the current component (including child components) is then drawn
     * onto the offscreen canvas, and blended with the existing content on the canvas below using
     * the specified blend mode. This approach may cause issues with screen capture for APIs such
     * as linearGradientBlur<sup>12+</sup>, backgroundEffect, and brightness.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    blendMode(mode: Optional<BlendMode>, type?: BlendApplyType): T;
    /**
     * Sets whether to clip the areas of child components that extend beyond this component's boundaries,
     * That is, whether to perform clipping based on the edge contour of the parent container.
     *
     * @param { boolean } value - Whether to perform clipping based on the edge contour of the parent container.
     * <br>Default value: **false**.
     * <br>**true**: Perform clipping. **false**: Do not perform clipping.
     * <br>If this parameter is set to **true**.
     * <br>child components exceeding the current component's bounds will not respond to bound gesture events.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    clip(value: boolean): T;
    /**
     * Sets whether to clip the areas of child components that extend beyond this component's boundaries,
     * That is, whether to perform clipping based on the edge contour of the parent container.
     * This API supports the **undefined** type for the **clip** parameter.
     *
     * @param { Optional<boolean> } clip - Whether to perform clipping based on the edge contour of the parent container.
     * <br>Default value: **false**.
     * <br>If this parameter is set to **true**,
     * child components exceeding the current component's bounds will not respond to bound gesture events.
     * <br>If **clip** is set to **undefined**, clipping is disabled, and child components are not clipped.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    clip(clip: Optional<boolean>): T;
    /**
     * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
     * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
     *
     * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - Clip mode.
     * <br>If the value is a shape attribute, the component is clipped based on the specified shape.
     * <br>If the value is of the Boolean type,
     * it specifies whether to clip the component based on the boundaries of the parent container.
     * <br>Default value: **false**.
     * <br>If the value is a shape attribute, the clipped area can still respond to bound gesture events.
     * <br>If the value is of the Boolean type, the clipped area will not respond to bound gesture events.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
     * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
     *
     * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - Clip mode.
     * <br>If the value is a shape attribute, the component is clipped based on the specified shape.
     * <br>If the value is of the Boolean type,
     * it specifies whether to clip the component based on the boundaries of the parent container.
     * <br>Default value: **false**.
     * <br>If the value is a shape attribute, the clipped area can still respond to bound gesture events.
     * <br>If the value is of the Boolean type, the clipped area will not respond to bound gesture events.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
     * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
     *
     * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - Clip mode.
     * <br>If the value is a shape attribute, the component is clipped based on the specified shape.
     * <br>If the value is of the Boolean type,
     * it specifies whether to clip the component based on the boundaries of the parent container.
     * <br>Default value: **false**.
     * <br>If the value is a shape attribute, the clipped area can still respond to bound gesture events.
     * <br>If the value is of the Boolean type, the clipped area will not respond to bound gesture events.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * When the parameter is of the Shape type, the current component is cropped according to the specified shape.
     * When the parameter is of the boolean type, this parameter specifies whether to crop based on the edge contour.
     *
     * @param { boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute } value - Clip mode.
     * <br>If the value is a shape attribute, the component is clipped based on the specified shape.
     * <br>If the value is of the Boolean type,
     * it specifies whether to clip the component based on the boundaries of the parent container.
     * <br>Default value: **false**.
     * <br>If the value is a shape attribute, the clipped area can still respond to bound gesture events.
     * <br>If the value is of the Boolean type, the clipped area will not respond to bound gesture events.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     * @deprecated since 12
     * @useinstead CommonMethod#clipShape
     */
    clip(value: boolean | CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute): T;
    /**
    * Clips this component based on the given shape.
    *
    * @param { CircleShape | EllipseShape | PathShape | RectShape } value - Shape that the component to be clipped into.
    * <br>The clipped area remains responsive to bound gesture events.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 12
    */
    clipShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;
    /**
    * Sets whether to clip this component based on the given shape.
    * Compared to {@link clipShape}, this API supports the **undefined** type for the **shape** parameter.
    *
    * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - Shape that the component to
    * <br>be clipped into.
    * <br>The clipped area remains responsive to bound gesture events.
    * <br>If **shape** is set to **undefined**, the previous value is retained.
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @form
    * @atomicservice
    * @since 18
    */
    clipShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;
    /**
     * Adds a mask to the component to indicate the progress.
     *
     * @param { ProgressMask } value - Mask to add to the component, which allows for dynamic
     * adjustment of progress, maximum value, and color settings.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mask(value: ProgressMask): T;
    /**
     * Adds a mask to the component to indicate the progress. Compared to mask<sup>12+</sup>,
     * this API supports the **undefined** type for the **mask** parameter.
     *
     * @param { Optional<ProgressMask> } mask - Mask to add to the component, which allows for dynamic
     * adjustment of progress, maximum value, and color settings.<br>If **mask** is set to **undefined**,
     * the component to revert to its original effect without the mask to indicate the progress.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    mask(mask: Optional<ProgressMask>): T;
    /**
     * Applies a mask of the specified shape to the current assembly.
     *
     * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Applies a mask of the specified shape to the current assembly.
     *
     * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Applies a mask of the specified shape to the current assembly.
     *
     * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Applies a mask of the specified shape to the current assembly.
     *
     * @param { CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask } value - indicates the shape of the mask.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     * @deprecated since 12
     * @useinstead CommonMethod#maskShape
     */
    mask(value: CircleAttribute | EllipseAttribute | PathAttribute | RectAttribute | ProgressMask): T;
    /**
     * Adds a mask of the specified shape to the component.
     *
     * @param { CircleShape | EllipseShape | PathShape | RectShape } value - Mask of the specified
     * shape to add to the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    maskShape(value: CircleShape | EllipseShape | PathShape | RectShape): T;
    /**
     * Adds a mask of the specified shape to the component. Compared to maskShape<sup>12+</sup>,
     * this API supports the **undefined** type for the **shape** parameter.
     *
     * @param { Optional<CircleShape | EllipseShape | PathShape | RectShape> } shape - Mask of the specified shape to
     * add to the component.<br>If **shape** is set to **undefined**, the previous value is retained.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    maskShape(shape: Optional<CircleShape | EllipseShape | PathShape | RectShape>): T;
    /**
     * Key. User can set an key to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     * @test
     */
    key(value: string): T;
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Id. User can set an id to the component to identify it.
     *
     * @param { string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    id(value: string): T;
    /**
     * geometryTransition
     *
     * @param { string } id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * geometryTransition
     *
     * @param { string } id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * geometryTransition
     *
     * @param { string } id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    geometryTransition(id: string): T;
    /**
     * Shared geometry transition
     *
     * @param { string } id - geometry transition id
     * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Shared geometry transition
     *
     * @param { string } id - geometry transition id
     * @param { GeometryTransitionOptions } options - Indicates the options of geometry transition.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    geometryTransition(id: string, options?: GeometryTransitionOptions): T;
    /**
    * Tips control
    *
    * @param { TipsMessageType } message
    * @param { TipsOptions } [options]
    * @returns { T }
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 19
    */
    bindTips(message: TipsMessageType, options?: TipsOptions): T;
    /**
     * Popup control
     *
     * @param { boolean } show
     * @param { PopupOptions } popup
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Popup control
     *
     * @param { boolean } show
     * @param { PopupOptions | CustomPopupOptions } popup
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Popup control
     * <p><strong>NOTE</strong>:
     * <br>The popup can be displayed only after the entire page is fully constructed. Therefore, to avoid incorrect
     * display positions and shapes, do not set this parameter to true while the page is still being constructed.
     * </p>
     *
     * @param { boolean } show - Whether to show the popup, default is false.
     * @param { PopupOptions | CustomPopupOptions } popup
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bindPopup(show: boolean, popup: PopupOptions | CustomPopupOptions): T;
    /**
     * Menu control
     *
     * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
     * action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Menu control
     *
     * @param { { value: ResourceStr; icon?: ResourceStr; action: () => void }[] | CustomBuilder } content
     * action: () => void }[] | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Menu control
     *
     * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;
    /**
     * Menu control
     *
     * @param { boolean } isShow true means display menu, false means hide menu.
     * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Menu control
     *
     * @param { boolean } isShow true means display menu, false means hide menu, default is false.
     * @param { Array<MenuElement> | CustomBuilder } content - Indicates the content of menu.
     * @param { MenuOptions } options - Indicates the options of menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bindMenu(isShow: boolean, content: Array<MenuElement> | CustomBuilder, options?: MenuOptions): T;
    /**
     * ContextMenu control
     *
     * @param { CustomBuilder } content
     * @param { ResponseType } responseType
     * @param { ContextMenuOptions } options
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * ContextMenu control
     *
     * @param { CustomBuilder } content - Indicates the content of context menu.
     * @param { ResponseType } responseType - Indicates response type of context menu.
     * @param { ContextMenuOptions } options - Indicates the options of context menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Binds a context menu to this component, which is displayed when the user long-presses or right-clicks the
     * component. Only custom menu items are supported.
     *
     * @param { CustomBuilder } content - Indicates the content of context menu.
     * @param { ResponseType } responseType - Indicates response type of context menu, Long pressing with a mouse device
     * is not supported.
     * @param { ContextMenuOptions } options - Indicates the options of context menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions): T;
    /**
     * Binds a context menu to the component, whose visibility is subject to the isShown settings.
     *
     * @param { boolean } isShown - true means display content, false means hide content, default is false.
     * <p><strong>NOTE</strong>:
     * <br>The menu can be displayed properly only when the related page has been constructed. If this parameter is set
     * to true before the construction is complete, display issues, such as misplacement, distortion, or failure to pop
     * up, may occur. To trigger dragging by long presses is not supported.
     * </p>
     *
     * @param { CustomBuilder } content - Indicates the content of context menu.
     * @param { ContextMenuOptions } [options] - Indicates the options of context menu.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    bindContextMenu(isShown: boolean, content: CustomBuilder, options?: ContextMenuOptions): T;
    /**
     * Binds a modal page to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ModalTransition } type - transition type.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Binds a modal page to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ModalTransition } type - transition type.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bindContentCover(isShow: boolean, builder: CustomBuilder, type?: ModalTransition): T;
    /**
     * Binds a modal page to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ContentCoverOptions } options - options of content cover.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Binds a modal page to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean } isShow - true means display content, false means hide content.
     * @param { CustomBuilder } builder - the content to be displayed.
     * @param { ContentCoverOptions } options - options of content cover.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bindContentCover(isShow: boolean, builder: CustomBuilder, options?: ContentCoverOptions): T;
    /**
     * Binds a sheet page to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean } isShow - true means display sheet, false means hide sheet.
     * @param { CustomBuilder } builder - the sheet to be displayed.
     * @param { SheetOptions } options - options of sheet.
     * @returns { T } - template type
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Binds a sheet page to the component, whose visibility is subject to the isShow settings.
     *
     * @param { boolean } isShow - true means display sheet, false means hide sheet.
     * @param { CustomBuilder } builder - the sheet to be displayed.
     * @param { SheetOptions } options - options of sheet.
     * @returns { T } - template type
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bindSheet(isShow: boolean, builder: CustomBuilder, options?: SheetOptions): T;
    /**
     * Sets styles for component state.
     *
     * @param { StateStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * Sets styles for component state.
     *
     * @param { StateStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets styles for component state.
     *
     * @param { StateStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets styles for component state.
     *
     * @param { StateStyles } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    stateStyles(value: StateStyles): T;
    /**
     * id for distribute identification.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 8
     */
    /**
     * id for distribute identification.
     *
     * @param { number } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    restoreId(value: number): T;
    /**
     * Trigger a visible area change event.
     *
     * @param { Array<number> } ratios
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Trigger a visible area change event.
     *
     * @param { Array<number> } ratios
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Trigger a visible area change event.
     *
     * @param { Array<number> } ratios
     * @param { function } event
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Trigger a visible area change event.
     *
     * @param { Array<number> } ratios - Threshold array. Each threshold represents a ratio of the component's visible area to the component's total area.
     * The value range of the threshold is [0.0, 1.0].
     * @param { VisibleAreaChangeCallback } event - Callback for visible area changes of the component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 13
     */
    onVisibleAreaChange(ratios: Array<number>, event: VisibleAreaChangeCallback): T;
    /**
     * Set or reset the callback which is triggered when the visibleArea of component changed.
     * The interval between two visible area change callbacks will not be less than the expected update interval.
     *
     * @param { VisibleAreaEventOptions } options - The options for the visibility event.
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
     * If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 17
     */
    onVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
    /**
     * Applies a spherical effect to the component.
     *
     * @param { number } value - Spherical degree of the component.
     * <br>The value ranges from 0 to 1.
     * <p>**NOTE**:
     * <br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is completely
     * spherical. Between **0** and **1**, a larger value indicates a higher spherical degree. A value less than 0 is
     * handled as the value **0**. A value greater than 1 is handled as the value **1**.
     * <br>2. The component's shadow and outer stroke do not support spherical effects.
     * <br>3. If the value is greater than 0, the component is frozen and not updated, and its content is drawn to the
     * transparent offscreen buffer. To update the component attributes, set the value to **0**.
     * </p>
     *
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    sphericalEffect(value: number): T;
    /**
     * Set the spherical effect of the component.
     *
     * @param { Optional<number> } effect - The value ranges from 0 to 1.
     * <p>**NOTE**:
     * <br>1. If the value is **0**, the component remains unchanged. If the value is 1, the component is completely
     * spherical. Between **0** and **1**, a larger value indicates a higher spherical degree.A value less than 0 is
     * handled as the value **0**. A value greater than 1 is handled as the value **1**.
     * <br>2. The component's shadow and outer stroke do not support spherical effects.
     * <br>3. If the value is greater than 0, the component is frozen and not updated, and its content is drawn to the
     * transparent offscreen buffer. To update the component attributes, set the value to **0**. If **effect** is
     * **undefined**, the spherical degree reverts to **0**.
     * </p>
     *
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    sphericalEffect(effect: Optional<number>): T;
    /**
     * Applies a light up effect to the component.
     *
     * @param { number } value - Light up degree of the component.
     * <br>The value ranges from 0 to 1.
     * <br>If the value is **0**, the component is dark. If the value is **1**, the component is fully illuminated.
     * <br>Between **0** and **1**, a larger value indicates higher luminance.
     * <br>A value less than 0 is handled as the value **0**.
     * <br>A value greater than 1 is handled as the value **1**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    lightUpEffect(value: number): T;
    /**
     * Applies a light up effect to the component. Compared to lightUpEffect,
     * this API supports the **undefined** type for the **degree** parameter.
     *
     * @param { Optional<number> } degree - Light up degree of the component.
     * <br>The value ranges from 0 to 1.
     * <br>If the value is **0**, the component is dark. If the value is **1**, the component is fully illuminated.
     * <br>Between **0** and **1**, a larger value indicates higher luminance.
     * <br>A value less than 0 is handled as the value **0**.
     * <br>A value greater than 1 is handled as the value **1**.
     * <br>If **degree** is **undefined**, the light up degree reverts to **1**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    lightUpEffect(degree: Optional<number>): T;
    /**
     * Applies a pixel stretch effect to the component.
     *
     * @param { PixelStretchEffectOptions } options - Pixel stretch effect options.
     * <br>The value includes the length by which a pixel is stretched toward the four edges.
     * <p>**NOTE**:
     * <br>1. If the length is a positive value, the original image is stretched, and the image size increases. The edge
     * pixels grow by the set length toward the top, bottom, left, and right edges.
     * <br>2. If the length is a negative value, the original image shrinks as follows, but the image size remains
     * unchanged:
     * <br>Shrinking mode:
     * <br>(1) The image shrinks from the four edges by the absolute value of length set through **options**.
     * <br>(2) The image is stretched back to the original size with edge pixels.
     * <br>3. Constraints on **options**:
     * <br>(1) The length values for the four edges must be all positive or all negative. That is, the four edges are
     * stretched or shrink at the same time in the same direction.
     * <br>(2) The length values must all be a percentage or a specific value. Combined use of the percentage and
     * specific value is not allowed.
     * <br>(3) If the input value is invalid, the image is displayed as {0, 0, 0, 0}, that is, the image is the same as
     * the original image.
     * </p>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    pixelStretchEffect(options: PixelStretchEffectOptions): T;
    /**
     * Applies a pixel stretch effect to the component. Compared to pixelStretchEffect,
     * this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<PixelStretchEffectOptions> } options - Pixel stretch effect options.
     * <br>The value includes the length by which a pixel is stretched toward the four edges.
     * <p>**NOTE**:
     * <br>1. If the length is a positive value, the original image is stretched, and the image size increases. The edge
     * pixels grow by the set length toward the top, bottom, left, and right edges.
     * <br>2. If the length is a negative value, the original image shrinks as follows, but the image size remains
     * unchanged:
     * <br>Shrinking mode:
     * <br>(1) The image shrinks from the four edges by the absolute value of length set through **options**.
     * <br>(2) The image is stretched back to the original size with edge pixels.
     * <br>3. Constraints on **options**:
     * <br>(1) The length values for the four edges must be all positive or all negative. That is, the four edges are
     * stretched or shrink at the same time in the same direction.
     * <br>(2) The length values must all be a percentage or a specific value. Combined use of the percentage and
     * specific value is not allowed.
     * <br>(3) If the input value is invalid, the image is displayed as {0, 0, 0, 0}, that is, the image is the same as
     * the original image.
     * </p>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    pixelStretchEffect(options: Optional<PixelStretchEffectOptions>): T;
    /**
     * Sets hot keys
     *
     * @param { string | FunctionKey } value - Character of the combination key.
     * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
     * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets hot keys
     *
     * @param { string | FunctionKey } value - Character of the combination key.
     * @param { Array<ModifierKey> } keys - The modifier keys modify the action of key when the key are pressed at the same time.
     * @param { function } [action] - Callback function, triggered when the shortcut keyboard is pressed.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    keyboardShortcut(value: string | FunctionKey, keys: Array<ModifierKey>, action?: () => void): T;
    /**
     * Sets whether to enable accessibility grouping.
     *
     * @param { boolean } value - set group with accessibility, default value is false.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether to enable accessibility grouping.
     *
     * @param { boolean } value - set group with accessibility, default value is false.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether to enable accessibility grouping.
     *
     * <p><strong>NOTE</strong>
     * <br>Whether to enable accessibility grouping. When accessibility grouping is enabled,
     * <br>the component and all its children are treated as a single selectable unit, and the accessibility
     * <br>service will no longer focus on the individual child components.</p>
     *
     * @param { boolean } value - set group with accessibility, default value is false.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityGroup(value: boolean): T;
    /**
     * Sets whether to enable accessibility grouping.
     *
     * <p><strong>NOTE</strong>
     * <br>If accessibility grouping is enabled and the component does not contain a universal text attribute
     * <br>or an accessibility text attribute, the system will concatenate the universal text attributes of
     * <br>its child components to form a merged text for the component. If a child component lacks a universal
     * <br>text attribute, it will be ignored in the concatenation process.
     *
     * <br>When accessibilityPreferred is set to true, the system will prioritize concatenating the accessibility
     * <br>text attributes of the child components to form the merged text. If a child component lacks an
     * <br>accessibility text attribute, the system will continue to concatenate its universal text attribute.
     * <br>If a child component lacks both, it will be ignored.</p>
     *
     * @param { boolean } isGroup - set group with accessibility, default value is false.
     * @param { AccessibilityOptions } accessibilityOptions - accessibilityOptions for accessibility, default value is false.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 14
     */
    accessibilityGroup(isGroup: boolean, accessibilityOptions: AccessibilityOptions): T;
    /**
     * Sets the accessibility text.
     *
     * @param { string } value - set accessibility text, default value is "".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the accessibility text.
     *
     * @param { string } value - set accessibility text, default value is "".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the accessibility text.
     * When a component does not contain a text attribute, you can use this API to set an accessibility
     * text attribute, so that accessibility services can announce the specified content for the component.
     *
     * @param { string } value - set accessibility text, default value is "".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityText(value: string): T;
    /**
     * Sets accessibility next focus id
     * @param { string } nextId - set component next accessibility focus id
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    accessibilityNextFocusId(nextId: string): T;
    /**
     * Sets the accessibility default foucs flag
     * @param { boolean } focus - if the component is accessibility default focus,focus set true
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    accessibilityDefaultFocus(focus: boolean): T;
    /**
     * Sets accessibility same page mode
     * @param { AccessibilitySamePageMode } pageMode - accessibility same page mode
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    accessibilityUseSamePage(pageMode: AccessibilitySamePageMode): T;
    /**
     * Sets accessibilityScrollTriggerable
     * @param { boolean } isTriggerable - set property of supporting scroll in accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    accessibilityScrollTriggerable(isTriggerable: boolean): T;
    /**
     * Sets the accessibility text.
     * <p><strong>NOTE</strong>
     * If a component has both text content and accessibility text, only the accessibility text is announced.
     * <br>If a component is grouped for accessibility purposes but lacks both text content and accessibility
     * <br>text, the screen reader will concatenate text from its child components (depth-first traversal).
     * <br>To prioritize accessibility text concatenation, set accessibilityPreferred in accessibilityGroup.
     * </p>
     * @param { Resource } text - set accessibility text
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityText(text: Resource): T;
    /**
     * Sets accessibility role,role indicates the custom type of the component
     * @param { AccessibilityRoleType } role - set accessibility component type
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    accessibilityRole(role: AccessibilityRoleType): T;
    /**
     * Register accessibility focus callback,when the component is focused or out of focus,the callback will be executed
     * @param { AccessibilityFocusCallback } callback - accessibility focus callback function
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    onAccessibilityFocus(callback: AccessibilityFocusCallback): T;
    /**
     * Register accessibility action intercept callback,
     * when accessibility action is to be executed,the callback will be executed
     * @param { AccessibilityActionInterceptCallback } callback - accessibility action intercept callback function
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 20
     */
    onAccessibilityActionIntercept(callback: AccessibilityActionInterceptCallback): T;
    /**
     * Sets accessibilityTextHint
     *
     * @param { string } value - set accessibility text hint
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityTextHint(value: string): T;
    /**
     * Sets accessibilityDescription
     *
     * @param { string } value - set description of accessibility, default value is "".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets accessibilityDescription
     *
     * @param { string } value - set description of accessibility, default value is "".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets accessibilityDescription
     *
     * @param { string } value - set description of accessibility, default value is "".
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityDescription(value: string): T;
    /**
     * Sets accessibilityDescription
     *
     * with support for resource references using Resource.
     * This property provides additional context or explanation for the component,
     * helping users understand the action or function it performs.
     * <p><strong>NOTE</strong>:
     * <br>Reference resource of the accessibility description. You can specify further explanation
     * <br>of the current component, for example, possible operation consequences, especially those that
     * <br>cannot be learned from component attributes and accessibility text. If a component contains
     * <br>both text information and the accessibility description, the text is read first and then the
     * <br>accessibility description, when the component is selected.</p>
     * @param { Resource } description - set description of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityDescription(description: Resource): T;
    /**
     * Sets the accessibility level.
     * This property determines whether the component can be recognized by accessibility services.
     *
     * @param { string } value - set accessibility level, default value is auto.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets the accessibility level.
     * This property determines whether the component can be recognized by accessibility services.
     *
     * @param { string } value - set accessibility level, default value is auto.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the accessibility level.
     * This property determines whether the component can be recognized by accessibility services.
     * <p>
     * Accessibility level, which is used to decide whether a component can be identified by the accessibility service.
     * <br>The options are as follows:
     * <br>"auto": The component's recognizability is determined by the accessibility grouping service and ArkUI.
     * <br>"yes": The component can be recognized by accessibility services.
     * <br>"no": The component cannot be recognized by accessibility services.
     * <br>"no-hide-descendants": Neither the component nor its child components can be recognized by accessibility services.
     * <strong>NOTE</strong>
     * <br>When accessibilityLevel is set to "auto", the component's recognizability depends on the following factors:
     * <br>1. The accessibility service internally determines whether the component can be recognized.
     * <br>2. If the parent component's accessibilityGroup property has isGroup set to true, the accessibility service will
     * <br>not focus on its child components, making them unrecognizable.
     * <br>3. If the parent component's accessibilityLevel is set to "no-hide-descendants", the component will not be
     * <br>recognized by accessibility services.</p>
     * @param { string } value - set accessibility level, default value is auto.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityLevel(value: string): T;
    /**
     * Sets accessibilityVirtualNode
     *
     * @param { CustomBuilder } builder - set virtual node of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Sets accessibilityVirtualNode
     *
     * @param { CustomBuilder } builder - set virtual node of accessibility
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    accessibilityVirtualNode(builder: CustomBuilder): T;
    /**
     * Sets accessibilityChecked
     *
     * @param { boolean } isCheck - set accessibility checked status
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 13
     */
    accessibilityChecked(isCheck: boolean): T;
    /**
     * Sets accessibilitySelected
     *
     * @param { boolean } isSelect - set accessibility selected status
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 13
     */
    accessibilitySelected(isSelect: boolean): T;
    /**
     * Sets obscured
     *
     * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sets obscured
     *
     * @param { Array<ObscuredReasons> } reasons - reasons of obscuration
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    obscured(reasons: Array<ObscuredReasons>): T;
    /**
     * Reuse id is used for identify the reuse type for each custom node.
     *
     * @param { string } id - The id for reusable custom node.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Reuse id is used for identify the reuse type for each custom node.
     *
     * @param { string } id - The id for reusable custom node.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    reuseId(id: string): T;
    /**
     * Reuse id is used for identify the reuse type of each @ComponentV2 custom component, which can give user control of sub-component recycle and reuse.
     *
     * @param { ReuseOptions } options - The configuration parameter for reusable custom component.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    reuse(options: ReuseOptions): T;
    /**
     * How the final state of the component's content is rendered during its width and height animation process.
     *
     * @param { RenderFit } fitMode - How the final state of the component's content is rendered during.
     * <br>its width and height animation process.
     * <br>If **renderFit** is not set, the default value **RenderFit.TOP_LEFT** is used.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * How the final state of the component's content is rendered during its width and height animation process.
     *
     * @param { RenderFit } fitMode - How the final state of the component's content is rendered during.
     * <br>its width and height animation process.
     * <br>If **renderFit** is not set, the default value **RenderFit.TOP_LEFT** is used.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * How the final state of the component's content is rendered during its width and height animation process.
     *
     * @param { RenderFit } fitMode - How the final state of the component's content is rendered during.
     * <br>its width and height animation process.
     * <br>If **renderFit** is not set, the default value **RenderFit.TOP_LEFT** is used.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    renderFit(fitMode: RenderFit): T;
    /**
     * How the final state of the component's content is rendered during its width and height animation process.
     * Compared to {@link renderFit}, this API supports the **undefined** type for the **fitMode** parameter.
     *
     * @param { Optional<RenderFit> } fitMode - How the final state of the component's content is rendered during.
     * <br>its width and height animation process.
     * <br>If **fitMode** is set to **undefined**, the default value is used,
     * which is equivalent to **RenderFit.TOP_LEFT**.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    renderFit(fitMode: Optional<RenderFit>): T;
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<T> } modifier
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Sets the attribute modifier.
     *
     * @param { AttributeModifier<T> } modifier
     * The if/else syntax is supported.
     * You need a custom class to implement the AttributeModifier API.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    attributeModifier(modifier: AttributeModifier<T>): T;
    /**
     * Sets the gesture modifier.
     *
     * @param { GestureModifier } modifier
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    gestureModifier(modifier: GestureModifier): T;
    /**
     * Sets the background brightness of the component.
     *
     * @param { BackgroundBrightnessOptions } params - Parameters for setting the background brightness.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    backgroundBrightness(params: BackgroundBrightnessOptions): T;
    /**
     * Sets the background brightness of the component. Compared to backgroundBrightness<sup>12+</sup>,
     * this API supports the **undefined** type for the **options** parameter.
     *
     * @param { Optional<BackgroundBrightnessOptions> } options - Parameters for setting the background brightness.
     * <br>If **options** is **undefined**, the background reverts to its default state with no brightness effect.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 18
     */
    backgroundBrightness(options: Optional<BackgroundBrightnessOptions>): T;
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * When a gesture bound to this component will be accepted, a user-defined callback is triggered to get the result
     *
     * @param { function } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onGestureJudgeBegin(callback: (gestureInfo: GestureInfo, event: BaseGestureEvent) => GestureJudgeResult): T;
    /**
     * Binds a custom gesture recognizer judgment callback to the component.
     *
     * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback): T;
    /**
     * Binds a custom gesture recognizer judgment callback to the component.
     *
     * <p><strong>NOTE</strong>:
     * <br> For a composite component, setting exposeInnerGesture to true exposes the internal gesture recognizer of the
     * <br> composite component in the current parameter callback. Currently, only the Tabs component is supported.
     *
     * <br> Do not set exposeInnerGesture for other components. When exposeInnerGesture is set to false, this API provides the same functionality
     * <br> as the onGestureRecognizerJudgeBegin API.
     * </p>
     * @param { GestureRecognizerJudgeBeginCallback } callback - A callback instance used when a gesture bound to this component will be accepted.
     * @param { boolean } exposeInnerGesture - This parameter is a flag. This flag determines whether to expose internal gestures.
     * @default false
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     *
     * @since 13
     */
    onGestureRecognizerJudgeBegin(callback: GestureRecognizerJudgeBeginCallback, exposeInnerGesture: boolean): T;
    /**
     * Provides a callback to set the parallel relationship between built-in gestures and gestures of other components in the response chain.
     *
     * @param { ShouldBuiltInRecognizerParallelWithCallback } callback - A callback instance used when a component is doing touch test.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shouldBuiltInRecognizerParallelWith(callback: ShouldBuiltInRecognizerParallelWithCallback): T;
    /**
     * Events are monopolized by components.
     *
     * @param { boolean } monopolize - indicate the monopoly of events
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Sets whether the component exclusively handles events.
     * true: The component exclusively handles events. false: The component does not exclusively handle events.
     *
     * @param { boolean } monopolize - indicate the monopoly of events
     * @default false
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    monopolizeEvents(monopolize: boolean): T;
    /**
     * When the component does a touch test, a user-defined callback is triggered.
     *
     * @param { Callback<TouchEvent, HitTestMode> } callback - A callback instance used when the component does a touch test.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onTouchIntercept(callback: Callback<TouchEvent, HitTestMode>): T;
    /**
     * This callback is triggered when the component size changes due to layout updates.
     * This event is not triggered for render attribute changes caused by re-rendering.
     *
     * @param { SizeChangeCallback } event - event callback.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    onSizeChange(event: SizeChangeCallback): T;
    /**
     * Accessibility focus draw level, and the default value is FocusDrawLevel.SELF.
     *
     * @param { FocusDrawLevel } drawLevel - indicates accessibility focus draw level.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 19
     */
    accessibilityFocusDrawLevel(drawLevel: FocusDrawLevel): T;
}
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonAttribute for ide.
 *
 * @extends CommonMethod<CommonAttribute>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CommonAttribute extends CommonMethod<CommonAttribute> {
}
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonInterface for ide.
 *
 * @interface CommonInterface
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
interface CommonInterface {
    /**
     * Constructor.
     *
     * @returns { CommonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Constructor
     *
     * @returns { CommonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Constructor
     *
     * @returns { CommonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Constructor
     *
     * @returns { CommonAttribute }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    (): CommonAttribute;
}
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonInstance for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const CommonInstance: CommonAttribute;
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Common for ide.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare const Common: CommonInterface;
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the CustomBuilder Type.
 *
 * @typedef { (() => any) | void } CustomBuilder
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare type CustomBuilder = (() => any) | void;
/**
 * Defines the OverlayOptions interface.
 *
 * <strong>NOTE</strong>:<br>
 * When both align and offset are set, the effects are combined.
 * The overlay is first aligned relative to the component and then offset from its current upper left corner.
 *
 * @typedef OverlayOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare interface OverlayOptions {
    /**
     * Defines align type.
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Defines align type.
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines align type.
     *
     * @type { ?Alignment }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines align type.
     *
     * @type { ?Alignment }
     * @default TopStart
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    align?: Alignment;
    /**
     * Defines offset type.
     *
     * @type { ?OverlayOffset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Defines offset type.
     *
     * @type { ?OverlayOffset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines offset type.
     *
     * @type { ?OverlayOffset }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines offset type.
     *
     * @type { ?OverlayOffset }
     * @default - the overlay is in the upper left corner of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    offset?: OverlayOffset;
}
/**
 * Defines the OverlayOffset.
 *
 * @typedef OverlayOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare interface OverlayOffset {
    /**
     * Defines x.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Defines x.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines x.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines x.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    x?: number;
    /**
     * Defines y.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Defines y.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Defines y.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Defines y.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    y?: number;
}
/**
 * Defines the segment of blur.
 * The first element in the tuple means fraction.
 * The range of this value is [0,1]. A value of 1 means opaque and 0 means completely transparent.
 * The second element means the stop position.
 * The range of this value is [0,1]. A value of 1 means region ending position and 0 means region starting position.
 *
 * @typedef { [ number, number ] } FractionStop
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare type FractionStop = [
    number,
    number
];
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * CommonShapeMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare class CommonShapeMethod<T> extends CommonMethod<T> {
    /**
     * Sets the stroke color.
     * If this attribute is not set, the component does not have any stroke.
     * If the value is invalid, no stroke will be drawn.
     *
     * @param { ResourceColor } value - Stroke color.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the stroke color.
     * If this attribute is not set, the component does not have any stroke.
     * If the value is invalid, no stroke will be drawn.
     *
     * @param { ResourceColor } value - Stroke color.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the stroke color.
     * If this attribute is not set, the component does not have any stroke.
     * If the value is invalid, no stroke will be drawn.
     *
     * @param { ResourceColor } value - Stroke color.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the stroke color.
     * If this attribute is not set, the component does not have any stroke.
     * If the value is invalid, no stroke will be drawn.
     *
     * @param { ResourceColor } value - Stroke color.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    stroke(value: ResourceColor): T;
    /**
     * Sets the color of the fill area.
     * An invalid value is handled as the default value.
     * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
     *
     * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the color of the fill area.
     * An invalid value is handled as the default value.
     * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
     *
     * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the color of the fill area.
     * An invalid value is handled as the default value.
     * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
     *
     * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the color of the fill area.
     * An invalid value is handled as the default value.
     * If this attribute and the universal attribute foregroundColor are both set, whichever is set later takes effect.
     *
     * @param { ResourceColor } value - Color of the fill area. Default value: Color.Black.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fill(value: ResourceColor): T;
    /**
     * Sets the offset of the start point for drawing the stroke.
     * An invalid value is handled as the default value.
     *
     * @param { number | string } value - Offset of the start point for drawing the stroke.
     * Default value: 0
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the offset of the start point for drawing the stroke.
     * An invalid value is handled as the default value.
     *
     * @param { number | string } value - Offset of the start point for drawing the stroke.
     * Default value: 0
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the offset of the start point for drawing the stroke.
     * An invalid value is handled as the default value.
     *
     * @param { number | string } value - Offset of the start point for drawing the stroke.
     * Default value: 0
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the offset of the start point for drawing the stroke.
     * An invalid value is handled as the default value.
     *
     * @param { number | string } value - Offset of the start point for drawing the stroke.
     * Default value: 0
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeDashOffset(value: number | string): T;
    /**
     * Sets the cap style of the stroke.
     *
     * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the cap style of the stroke.
     *
     * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the cap style of the stroke.
     *
     * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the cap style of the stroke.
     *
     * @param { LineCapStyle } value - Cap style of the stroke. Default value: LineCapStyle.Butt
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeLineCap(value: LineCapStyle): T;
    /**
     * Sets the join style of the stroke.
     * This attribute does not work for the Circle component, which does not have corners.
     *
     * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the join style of the stroke.
     * This attribute does not work for the Circle component, which does not have corners.
     *
     * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the join style of the stroke.
     * This attribute does not work for the Circle component, which does not have corners.
     *
     * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the join style of the stroke.
     * This attribute does not work for the Circle component, which does not have corners.
     *
     * @param { LineJoinStyle } value - Join style of the stroke. Default value: LineJoinStyle.Miter
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeLineJoin(value: LineJoinStyle): T;
    /**
     * Limits for drawing acute angles as bevels
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Limits for drawing acute angles as bevels
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Limits for drawing acute angles as bevels
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Limits for drawing acute angles as bevels
     *
     * @param { number | string } value
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeMiterLimit(value: number | string): T;
    /**
     * Sets the stroke opacity.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Stroke opacity. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the stroke opacity.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Stroke opacity. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the stroke opacity.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Stroke opacity. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the stroke opacity.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Stroke opacity. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeOpacity(value: number | string | Resource): T;
    /**
     * Sets the opacity of the fill area.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the opacity of the fill area.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the opacity of the fill area.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the opacity of the fill area.
     * The value range is [0.0, 1.0].
     * A value less than 0.0 evaluates to the value 0.0. A value greater than 1.0 evaluates to the value 1.0.
     * Any other value evaluates to the value 1.0.
     *
     * @param { number | string | Resource } value - Opacity of the fill area. Default value: 1
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    fillOpacity(value: number | string | Resource): T;
    /**
     * Sets the stroke width.
     * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
     *
     * @param { Length } value - Stroke width.
     * The value must be greater than or equal to 0.
     * Default value: 1.
     * Default unit: vp.
     * An invalid value is handled as the default value.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets the stroke width.
     * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
     *
     * @param { Length } value - Stroke width.
     * The value must be greater than or equal to 0.
     * Default value: 1.
     * Default unit: vp.
     * An invalid value is handled as the default value.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets the stroke width.
     * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
     *
     * @param { Length } value - Stroke width.
     * The value must be greater than or equal to 0.
     * Default value: 1.
     * Default unit: vp.
     * An invalid value is handled as the default value.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets the stroke width.
     * If this attribute is of the string type, percentage values are not supported and will be treated as 1 px.
     *
     * @param { Length } value - Stroke width.
     * The value must be greater than or equal to 0.
     * Default value: 1.
     * Default unit: vp.
     * An invalid value is handled as the default value.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeWidth(value: Length): T;
    /**
     * Specifies whether anti-aliasing is enabled.
     *
     * @param { boolean } value - Whether anti-aliasing is enabled.
     * true: Anti-aliasing is enabled.
     * false: Anti-aliasing is disabled.
     * Default value: true
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Specifies whether anti-aliasing is enabled.
     *
     * @param { boolean } value - Whether anti-aliasing is enabled.
     * true: Anti-aliasing is enabled.
     * false: Anti-aliasing is disabled.
     * Default value: true
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Specifies whether anti-aliasing is enabled.
     *
     * @param { boolean } value - Whether anti-aliasing is enabled.
     * true: Anti-aliasing is enabled.
     * false: Anti-aliasing is disabled.
     * Default value: true
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Specifies whether anti-aliasing is enabled.
     *
     * @param { boolean } value - Whether anti-aliasing is enabled.
     * true: Anti-aliasing is enabled.
     * false: Anti-aliasing is disabled.
     * Default value: true
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    antiAlias(value: boolean): T;
    /**
     * Sets stroke dashes.
     * The value must be greater than or equal to 0. Invalid values are treated as the default value.
     *
     * @param { Array<any> } value - Stroke dashes.
     * Default value: []
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Sets stroke dashes.
     * The value must be greater than or equal to 0. Invalid values are treated as the default value.
     *
     * @param { Array<any> } value - Stroke dashes.
     * Default value: []
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Sets stroke dashes.
     * The value must be greater than or equal to 0. Invalid values are treated as the default value.
     *
     * @param { Array<any> } value - Stroke dashes.
     * Default value: []
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Sets stroke dashes.
     * The value must be greater than or equal to 0. Invalid values are treated as the default value.
     *
     * @param { Array<any> } value - Stroke dashes.
     * Default value: []
     * Default unit: vp
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    strokeDashArray(value: Array<any>): T;
}
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Linear Gradient Interface
 *
 * @interface LinearGradient
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface LinearGradient {
    /**
     * Linear Gradient Angle
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Linear Gradient Angle
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Linear Gradient Angle
     *
     * @type { ?(number | string) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    angle?: number | string;
    /**
     * Linear Gradient Direction
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Linear Gradient Direction
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Linear Gradient Direction
     *
     * @type { ?GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    direction?: GradientDirection;
    /**
     * Linear Gradient Colors
     *
     * @type { Array<any> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Linear Gradient Colors
     *
     * @type { Array<any> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Linear Gradient Colors
     *
     * @type { Array<any> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Linear Gradient Colors
     *
     * @type { Array<[ResourceColor, number]> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    colors: Array<[
        ResourceColor,
        number
    ]>;
    /**
     * Linear Gradient Repeating
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * Linear Gradient Repeating
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Linear Gradient Repeating
     *
     * @type { ?boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    repeating?: boolean;
}
/**
 * Defines the direction of pixel rounding at the component level.
 *
 * @interface PixelRoundPolicy
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
declare interface PixelRoundPolicy {
    /**
     * Rounding for alignment with the start edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    start?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the top edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    top?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the end edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    end?: PixelRoundCalcPolicy;
    /**
     * Rounding for alignment with the bottom edge.
     *
     * @type { ?PixelRoundCalcPolicy }
     * @default PixelRoundCalcPolicy.NO_FORCE_ROUND
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    bottom?: PixelRoundCalcPolicy;
}
/**
 * Linear Gradient Blur Interface
 *
 * @interface LinearGradientBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface LinearGradientBlurOptions {
    /**
     * Percentage of blurring effect.
     *
     * @type { FractionStop[] }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    fractionStops: FractionStop[];
    /**
     * Direction of linear gradient blur.
     *
     * @type { GradientDirection }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    direction: GradientDirection;
}
/**
 * Define motion blur anchor coordinates.
 *
 * @interface MotionBlurAnchor
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface MotionBlurAnchor {
    /**
     * Define anchor coordinate x-value.Value range [0.0, 1.0].
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    x: number;
    /**
     * Define anchor coordinate y-value.Value range [0.0, 1.0].
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    y: number;
}
/**
 * Define motion blur options.
 *
 * @interface MotionBlurOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface MotionBlurOptions {
    /**
     * Define the size of motion blur radius.The range of this value is  [0.0, ∞).
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    radius: number;
    /**
     * Define motion blur anchor coordinates.
     *
     * @type { MotionBlurAnchor }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    anchor: MotionBlurAnchor;
}
/**
 * Sub component border info.
 *
 * @interface LayoutBorderInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 * @deprecated since 10
 */
declare interface LayoutBorderInfo {
    /**
     * Sub component borderWidth info.
     *
     * @type { EdgeWidths }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    borderWidth: EdgeWidths;
    /**
     * Sub component margin info.
     *
     * @type { Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    margin: Margin;
    /**
     * Sub component padding info.
     *
     * @type { Padding }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    padding: Padding;
}
/**
 * Sub component layout info.
 *
 * @interface LayoutInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 * @deprecated since 10
 */
declare interface LayoutInfo {
    /**
     * Sub component position info.
     *
     * @type { Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    position: Position;
    /**
     * Sub component constraint info.
     *
     * @type { ConstraintSizeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    constraint: ConstraintSizeOptions;
}
/**
 * Sub component info passed from framework when layout and measure happens.
 *
 * @interface LayoutChild
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 * @deprecated since 10
 */
declare interface LayoutChild {
    /**
     * Sub component name.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    name: string;
    /**
     * Sub component id.
     *
     * @type { string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    id: string;
    /**
     * Sub component constraint.
     *
     * @type { ConstraintSizeOptions }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    constraint: ConstraintSizeOptions;
    /**
     * Sub component border info.
     *
     * @type { LayoutBorderInfo }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    borderInfo: LayoutBorderInfo;
    /**
     * Sub component position.
     *
     * @type { Position }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    position: Position;
    /**
     * Call this measure method in onMeasure callback to supply sub component size.
     *
     * @param { ConstraintSizeOptions } childConstraint
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    measure(childConstraint: ConstraintSizeOptions);
    /**
     * Call this layout method in onLayout callback to assign layout info to sub component.
     *
     * @param { LayoutInfo } childLayoutInfo
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     */
    layout(childLayoutInfo: LayoutInfo);
}
/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component layout info.
 *
 * @extends SizeResult
 * @interface GeometryInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface GeometryInfo extends SizeResult {
    /**
     * Sub component borderWidth info.
     *
     * @type { EdgeWidth }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sub component borderWidth info.
     *
     * @type { EdgeWidth }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    borderWidth: EdgeWidth;
    /**
     * Sub component margin info.
     *
     * @type { Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sub component margin info.
     *
     * @type { Margin }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    margin: Margin;
    /**
     * Sub component padding info.
     *
     * @type { Padding }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Sub component padding info.
     *
     * @type { Padding }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    padding: Padding;
}
/**
 * Sub component info passed from framework when layout happens.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides the child component layout information.
 *
 * @interface Layoutable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface Layoutable {
    /**
     * Measurement result of the child component.
     *
     * @type { MeasureResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Measurement result of the child component.
     *
     * @type { MeasureResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    measureResult: MeasureResult;
    /**
     * Unique ID of the child component.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    uniqueId?: number;
    /**
     * Call this layout method in onLayout callback to assign layout info to sub component.
     *
     * @param { Position } position
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Applies the specified position information to the child component.
     *
     * @param { Position } position
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    layout(position: Position): void;
    /**
     * Obtains the margin of the child component.
     *
     * @returns { DirectionalEdgesT<number> } the margin of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getMargin(): DirectionalEdgesT<number>;
    /**
     * Call this method to get the padding of sub component.
     *
     * @returns { DirectionalEdgesT<number> } Padding of the child component, unit is vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPadding(): DirectionalEdgesT<number>;
    /**
     * Obtains the border width of the child component.
     *
     * @returns { DirectionalEdgesT<number> } the borderWidth of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getBorderWidth(): DirectionalEdgesT<number>;
}
/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sub component info passed from framework when measure happens.
 *
 * @interface Measurable
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface Measurable {
    /**
     * Unique ID that the system assigns to the child component.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    uniqueId?: number;
    /**
     * Call this measure method in onMeasure callback to supply sub component size.
     *
     * @param { ConstraintSizeOptions } constraint
     * @returns { MeasureResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Applies the size constraint to the child component.
     *
     * @param { ConstraintSizeOptions } constraint
     * @returns { MeasureResult } Provides the measurement result of the component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    measure(constraint: ConstraintSizeOptions): MeasureResult;
    /**
     * Obtains the margin of the child component.
     *
     * @returns { DirectionalEdgesT<number> } Margin of the child component, unit is vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getMargin(): DirectionalEdgesT<number>;
    /**
     * Obtains the padding of the child component.
     *
     * @returns { DirectionalEdgesT<number> } the padding of sub component, unit is vp
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getPadding(): DirectionalEdgesT<number>;
    /**
     * Obtains the border width of the child component.
     *
     * @returns { DirectionalEdgesT<number> } Border width of the child component, unit is vp.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getBorderWidth(): DirectionalEdgesT<number>;
}
/**
 * Sub component SizeResult info.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides the component size information.
 *
 * @interface SizeResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface SizeResult {
    /**
     * Width obtained from the measurement result.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Width obtained from the measurement result. Unit: vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    width: number;
    /**
     * Height obtained from the measurement result.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Height obtained from the measurement result. Unit: vp.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    height: number;
}
/**
 * Sub component MeasureResult info.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Provides the measurement result of the component.
 *
 * @extends SizeResult
 * @interface MeasureResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface MeasureResult extends SizeResult {
}
/**
 * The navigation destination information.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * The navigation destination information.
 *
 * @typedef {import('../../../api/@ohos.arkui.observer').default.NavDestinationInfo} NavDestinationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type NavDestinationInfo = import('../../../api/@ohos.arkui.observer').default.NavDestinationInfo;
/**
 * The navigation information.
 *
 * @typedef {import('../../../api/@ohos.arkui.observer').default.NavigationInfo} NavigationInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type NavigationInfo = import('../../../api/@ohos.arkui.observer').default.NavigationInfo;
/**
 * The router page information.
 *
 * @typedef {import('../../../api/@ohos.arkui.observer').default.RouterPageInfo} RouterPageInfo
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type RouterPageInfo = import('../../../api/@ohos.arkui.observer').default.RouterPageInfo;
/**
 * UIContext
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * UIContext
 *
 * @typedef { import('../../../api/@ohos.arkui.UIContext').UIContext } UIContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type UIContext = import('../../../api/@ohos.arkui.UIContext').UIContext;
/**
 * DrawContext
 *
 * @typedef { import('../../../api/arkui/Graphics').DrawContext } DrawContext
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type DrawContext = import('../../../api/arkui/Graphics').DrawContext;
/**
 * VisualEffect
 *
 * @typedef { import('../../../api/@ohos.graphics.uiEffect').default.VisualEffect } VisualEffect
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type VisualEffect = import('../../../api/@ohos.graphics.uiEffect').default.VisualEffect;
/**
 * Filter
 *
 * @typedef { import('../../../api/@ohos.graphics.uiEffect').default.Filter } Filter
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type Filter = import('../../../api/@ohos.graphics.uiEffect').default.Filter;
/**
 * ComponentContent.
 *
 * @typedef {import('../../../api/arkui/ComponentContent').ComponentContent<T>} ComponentContent<T = Object>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type ComponentContent<T = Object> = import('../../../api/arkui/ComponentContent').ComponentContent<T>;
/**
 * Theme.
 *
 * @typedef {import('../../../api/@ohos.arkui.theme').Theme} Theme
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type Theme = import('../../../api/@ohos.arkui.theme').Theme;
/**
 * Import the DialogController type from promptAction.
 *
 * @typedef { import('../../../api/@ohos.promptAction').promptAction.DialogController } PromptActionDialogController
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 18
 */
declare type PromptActionDialogController = import('../../../api/@ohos.promptAction').promptAction.DialogController;
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Custom Component
 *
 * @extends CommonAttribute
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
/**
 * Custom Component
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare class CustomComponent extends BaseCustomComponent {
    /**
     * Invoked when a reusable custom component is re-added to the node tree
     * from the reuse cache to receive construction parameters of the component.
     *
     * @param { object } params - Custom component init params.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked when a reusable custom component is re-added to the node tree
     * from the reuse cache to receive construction parameters of the component.
     *
     * @param { object } params - Custom component init params.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    aboutToReuse?(params: {
        [key: string]: unknown;
    }): void;
    /**
     * Custom component override this method to layout each of its sub components.
     *
     * @param { Array<LayoutChild> } children
     * @param { ConstraintSizeOptions } constraint
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     * @useinstead CustomComponent#onPlaceChildren
     */
    onLayout?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;
    /**
     * Custom component override this method to measure each of its sub components.
     *
     * @param { Array<LayoutChild> } children
     * @param { ConstraintSizeOptions } constraint
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     * @deprecated since 10
     * @useinstead CustomComponent#onMeasureSize
     */
    onMeasure?(children: Array<LayoutChild>, constraint: ConstraintSizeOptions): void;
}
/**
 * Custom ComponentV2
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare class CustomComponentV2 extends BaseCustomComponent {
    /**
     * Invoked when a reusable custom component managed by state management V2
     * is taken from the reuse pool and reinserted into the node tree.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    aboutToReuse?(): void;
}
/**
 * Custom Component base class and it is migrated from class CustomComponent.
 *
 * @extends BaseCustomComponent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 18
 */
declare class BaseCustomComponent extends CommonAttribute {
    /**
     * Customize the pop-up content constructor .
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Customize the pop-up content constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Customize the pop-up content constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Customize the pop-up content constructor.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Customize the pop-up content constructor and it is migrated from class CustomComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    build(): void;
    /**
     * Invoked after a new instance of the custom component is created
     * and before its build() function is executed. You can change state variables in aboutToAppear.
     * The change will take effect when you execute the build() function next time.
     * The aboutToAppear lifecycle callback of a custom component with a custom layout
     * is invoked during the layout process.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Invoked after a new instance of the custom component is created
     * and before its build() function is executed. You can change state variables in aboutToAppear.
     * The change will take effect when you execute the build() function next time.
     * The aboutToAppear lifecycle callback of a custom component with a custom layout
     * is invoked during the layout process.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Invoked after a new instance of the custom component is created
     * and before its build() function is executed. You can change state variables in aboutToAppear.
     * The change will take effect when you execute the build() function next time.
     * The aboutToAppear lifecycle callback of a custom component with a custom layout
     * is invoked during the layout process.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Invoked after a new instance of the custom component is created
     * and before its build() function is executed. You can change state variables in aboutToAppear.
     * The change will take effect when you execute the build() function next time.
     * The aboutToAppear lifecycle callback of a custom component with a custom layout
     * is invoked during the layout process.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Invoked after a new instance of the custom component is created
     * and before its build() function is executed. You can change state variables in aboutToAppear.
     * The change will take effect when you execute the build() function next time.
     * The aboutToAppear lifecycle callback of a custom component with a custom layout
     * is invoked during the layout process.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    aboutToAppear?(): void;
    /**
     * Invoked when this component is about to disappear.
     * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
     * For example, the modification of the @Link decorated variable may cause unstable application running.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Invoked when this component is about to disappear.
     * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
     * For example, the modification of the @Link decorated variable may cause unstable application running.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Invoked when this component is about to disappear.
     * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
     * For example, the modification of the @Link decorated variable may cause unstable application running.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Invoked when this component is about to disappear.
     * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
     * For example, the modification of the @Link decorated variable may cause unstable application running.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    /**
     * Invoked when this component is about to disappear.
     * Do not change state variables in the aboutToDisappear function as doing this can cause unexpected errors.
     * For example, the modification of the @Link decorated variable may cause unstable application running.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    aboutToDisappear?(): void;
    /**
     * aboutToRecycle Method
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * aboutToRecycle Method
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * aboutToRecycle Method and it is migrated from class CustomComponent.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    aboutToRecycle?(): void;
    /**
     * The onWillApplyTheme function is a custom hook to get active theme object from the context
     *
     * @param { Theme } theme - Custom theme init params.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * The onWillApplyTheme function is a custom hook to get active theme object from the context, it is migrated from class CustomComponent.
     *
     * @param { Theme } theme - Custom theme init params.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onWillApplyTheme?(theme: Theme): void;
    /**
     * Custom component override this method to layout each of its sub components.
     *
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Layoutable> } children
     * @param { ConstraintSizeOptions } constraint
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Custom component override this method to layout each of its sub components.
     *
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Layoutable> } children
     * @param { ConstraintSizeOptions } constraint
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Custom component override this method to layout each of its sub components, it is migrated from class CustomComponent.
     *
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Layoutable> } children
     * @param { ConstraintSizeOptions } constraint
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onPlaceChildren?(selfLayoutInfo: GeometryInfo, children: Array<Layoutable>, constraint: ConstraintSizeOptions): void;
    /**
     * Custom component override this method to measure each of its sub components.
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Measurable> } children - indicate the measure child
     * @param { ConstraintSizeOptions } constraint - indicate child constraint size
     * @returns { SizeResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Custom component override this method to measure each of its sub components.
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Measurable> } children - indicate the measure child
     * @param { ConstraintSizeOptions } constraint - indicate child constraint size
     * @returns { SizeResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Custom component override this method to measure each of its sub components, it is migrated from class CustomComponent.
     * @param { GeometryInfo } selfLayoutInfo
     * @param { Array<Measurable> } children - indicate the measure child
     * @param { ConstraintSizeOptions } constraint - indicate child constraint size
     * @returns { SizeResult }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onMeasureSize?(selfLayoutInfo: GeometryInfo, children: Array<Measurable>, constraint: ConstraintSizeOptions): SizeResult;
    /**
     * Invoked each time the page is displayed, for example, during page redirection.
     * When the application is switched to the foreground.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Invoked each time the page is displayed, for example, during page redirection.
     * When the application is switched to the foreground.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked each time the page is displayed, for example, during page redirection.
     * When the application is switched to the foreground.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Invoked each time the page is displayed, for example, during page redirection.
     * When the application is switched to the foreground.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onPageShow?(): void;
    /**
     * Invoked each time the page is hidden, for example, during page redirection.
     * When the application is switched to the background.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Invoked each time the page is hidden, for example, during page redirection.
     * When the application is switched to the background.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Invoked each time the page is hidden, for example, during page redirection.
     * When the application is switched to the background.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Invoked each time the page is hidden, for example, during page redirection.
     * When the application is switched to the background.
     * It works only for the custom components decorated by **@Entry**.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onPageHide?(): void;
    /**
     * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
     * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
     * passed back as params in onFormRecover, in which you can recover the form
     *
     * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
     * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
     * passed back as params in onFormRecover, in which you can recover the form
     *
     * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * onFormRecycle Method, this is only for ArkTS form, if form was marked recyclable by form user, when system memory is low,
     * it will be recycled after calling this method, you should return a string of params that you wish to be saved, it will be
     * passed back as params in onFormRecover, in which you can recover the form, it is migrated from class CustomComponent.
     *
     * @returns { string } status data of ArkTS form UI, this data will be passed in when recover form later
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    onFormRecycle?(): string;
    /**
     * onFormRecover Method, this is only for ArkTS form
     *
     * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 11
     */
    /**
     * onFormRecover Method, this is only for ArkTS form
     *
     * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    /**
     * onFormRecover Method, this is only for ArkTS form, it is migrated from class CustomComponent.
     *
     * @param { string } statusData - indicate status data of ArkTS form UI, which is acquired by calling onFormRecycle, it is used to recover form
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 18
     */
    onFormRecover?(statusData: string): void;
    /**
     * onBackPress Method
     *
     * Invoked when the user clicks the Back button.
     * It works only for the custom components decorated by @Entry.
     * The value **true** means that the page executes its own return logic.
     * And **false** (default) means that the default return logic is used.
     *
     * @returns { void | boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * onBackPress Method
     *
     * Invoked when the user clicks the Back button.
     * It works only for the custom components decorated by @Entry.
     * The value **true** means that the page executes its own return logic.
     * And **false** (default) means that the default return logic is used.
     *
     * @returns { void | boolean } true means that the page itself processes the return logic.
     * false means that the default return logic is used.
     * If no value is returned, the default return logic is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * onBackPress Method
     *
     * Invoked when the user clicks the Back button.
     * It works only for the custom components decorated by @Entry.
     * The value **true** means that the page executes its own return logic.
     * And **false** (default) means that the default return logic is used.
     *
     * @returns { void | boolean } true means that the page itself processes the return logic.
     * false means that the default return logic is used.
     * If no value is returned, the default return logic is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Invoked when the user clicks the Back button.
     * It works only for the custom components decorated by @Entry.
     * The value **true** means that the page executes its own return logic.
     * And **false** (default) means that the default return logic is used.
     *
     * @returns { void | boolean } true means that the page itself processes the return logic.
     * false means that the default return logic is used.
     * If no value is returned, the default return logic is used.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onBackPress?(): void | boolean;
    /**
     * PageTransition Method.
     * Implement Animation when enter this page or move to other pages.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 9
     */
    /**
     * PageTransition Method.
     * Implement Animation when enter this page or move to other pages.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * PageTransition Method.
     * Implement Animation when enter this page or move to other pages.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * PageTransition Method and it is migrated from class CustomComponent.
     * Implement Animation when enter this page or move to other pages.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    pageTransition?(): void;
    /**
     * Get current UIContext
     *
     * @returns { UIContext } The UIContext that the custom component belongs to.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get current UIContext
     *
     * @returns { UIContext } The UIContext that the custom component belongs to.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Get current UIContext and it is migrated from class CustomComponent.
     *
     * @returns { UIContext } The UIContext that the custom component belongs to.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getUIContext(): UIContext;
    /**
     * Get uniqueId of the custom component.
     * This unique ID is assigned by the system to each component.
     * If this API is called before the component's corresponding node is created or after it has been destroyed, an
     * invalid unique ID, which is -1, will be returned.
     *
     * @returns { number } - The uniqueId of the custom component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Get uniqueId of the custom component and it is migrated from class CustomComponent.
     * This unique ID is assigned by the system to each component.
     * If this API is called before the component's corresponding node is created or after it has been destroyed, an
     * invalid unique ID, which is -1, will be returned.
     *
     * @returns { number } - The uniqueId of the custom component.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getUniqueId(): number;
    /**
     * Queries the **NavDestination** information of this custom component.
     *
     * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Queries the **NavDestination** information of this custom component.
     *
     * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Queries the **NavDestination** information of this custom component.
     *
     * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    queryNavDestinationInfo(): NavDestinationInfo | undefined;
    /**
     * Queries the information about the nearest **NavDestination** component
     * in the navigation stack for a custom component.
     *
     * @param { Optional<boolean> } [isInner]
     * @returns { NavDestinationInfo | undefined } The navigation destination information, or undefined if it is not available.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    queryNavDestinationInfo(isInner: Optional<boolean>): NavDestinationInfo | undefined;
    /**
     * Queries the **Navigation** information of this custom component.
     *
     * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Queries the **Navigation** information of this custom component.
     *
     * @returns { NavigationInfo | undefined } The navigation information, or undefined if it is not available
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    queryNavigationInfo(): NavigationInfo | undefined;
    /**
     * Obtains a **RouterPageInfo** instance.
     *
     * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * Obtains a **RouterPageInfo** instance.
     *
     * @returns { RouterPageInfo | undefined } The router page information, or undefined if it is not available.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    queryRouterPageInfo(): RouterPageInfo | undefined;
    /**
     * The callback method after the custom component is built.
     *
     * Triggered when the custom component has been built.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    /**
     * The callback method after the custom component is built and it is migrated from class CustomComponent.
     *
     * Triggered when the custom component has been built.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onDidBuild?(): void;
    /**
     * The dialog controller of the custom component.
     *
     * @returns { PromptActionDialogController | undefined } The controller of dialog, or undefined if it is not available
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getDialogController(): PromptActionDialogController | undefined;
    /**
     * Triggered when the Entry custom component has been pushed with singleton mode.
     *
     * @param { ESObject } param - New parameters pushed with singleton mode.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    onNewParam?(param: ESObject): void;
}
/**
 * Rect info.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Describe the position, width, and height of a component.
 *
 * @interface RectResult
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface RectResult {
    /**
     * x:Horizontal coordinate relative to the component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Horizontal coordinate.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    x: number;
    /**
     * y:Vertical axis coordinate relative to the component.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Vertical coordinate.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    y: number;
    /**
     * Get the width of the current textRect.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Content width.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    width: number;
    /**
     * Get the height of the current textRect.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 10
     */
    /**
     * Content height.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    height: number;
}
/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * CaretOffset info.
 *
 * @interface CaretOffset
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface CaretOffset {
    /**
     * Get the index of the CaretOffset
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Get the index of the CaretOffset
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    index: number;
    /**
     * Get the x of the relative position.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Get the x of the relative position.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    x: number;
    /**
     * Get the y of the relative position.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 11
     */
    /**
     * Get the y of the relative position.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    y: number;
}
/**
 * Defines the span options of TextContentController.
 *
 * @interface TextContentControllerOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 15
 */
declare interface TextContentControllerOptions {
    /**
     * the offset that add a text at.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    offset?: number;
}
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * TextContentControllerBase
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare abstract class TextContentControllerBase {
    /**
     * Get the index and relative position of the CaretOffset.
     *
     * @returns { CaretOffset } index and relative position of the CaretOffset.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Get the index and relative position of the CaretOffset.
     *
     * <p><strong>NOTE</strong>:
     * <br>If this API is called when the caret position is updated in the current frame, it will not take effect.
     * <br>For the Search component, the returned position information is the offset of the first character
     * relative to the search icon in the component.
     * <br>If no text is entered in the Search component,
     * the return value contains the position information relative to the component.
     * <br>The location information in the return value is the location of the caret relative to the editable component.
     * </p>
     *
     * @returns { CaretOffset } index and relative position of the CaretOffset.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    getCaretOffset(): CaretOffset;
    /**
     * Get the start and end positions of the text content.
     *
     * @returns { RectResult } Text content rect.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Get the start and end positions of the text content.
     *
     * <p><strong>NOTE</strong>:
     * <br>If no text is entered, the return value contains the position information, but the size is 0.
     * <br>The position information is the offset of the first character relative to the editable area.
     * <br>For the Search component, the returned position information is the offset of the first character
     * relative to the search icon in the component.
     * <br>If there is input, the width in the return value is the fixed width of the editable area.
     * </p>
     *
     * @returns { RectResult } Text content rect.The unit of the return value is pixel.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getTextContentRect(): RectResult;
    /**
     * Get the lines number of the text content.
     *
     * @returns { number } Text content line count
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 10
     */
    /**
     * Get the lines number of the text content.
     * The getTextContentLineCount type is used to obtain the number of lines of the edited text.
     *
     * @returns { number } Text content line count
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getTextContentLineCount(): number;
    /**
     * Add a text.
     *
     * @param { string } text - text value.
     * @param { TextContentControllerOptions } [textOperationOptions] - operation info.
     * @returns { number } caret index
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    addText(text: string, textOperationOptions?: TextContentControllerOptions): number;
    /**
     * Delete text in TextRange.
     *
     * @param { TextRange } [range] - range for deleting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    deleteText(range?: TextRange): void;
    /**
     * Gets the selected range of text content.
     *
     * @returns { TextRange } range for selecting.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    getSelection(): TextRange;
    /**
     * Clear the content of preview.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 17
     */
    clearPreviewText(): void;
}
/**
 * Enum of scrollable containers' content clip mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum ContentClipMode {
    /**
     * Clip to content rect inside margin & padding.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    CONTENT_ONLY = 0,
    /**
     * Clip to scrollable's outer rect, including padding but inside margin.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    BOUNDARY = 1,
    /**
     * Clip to the safeArea of scrollable container.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    SAFE_AREA = 2
}
/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * CommonScrollableMethod
 *
 * @extends CommonMethod<T>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 12
 */
declare class ScrollableCommonMethod<T> extends CommonMethod<T> {
    /**
     * Sets the scrollbar state.
     *
     * @param { BarState } barState - Scrollbar state.<br>Default value: <em>BarState.Auto</em> for the <em>List</em>, <em>Grid</em>,
     * and <em>Scroll</em> components and <em>BarState.Off</em> for the <em>WaterFlow</em> component
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    scrollBar(barState: BarState): T;
    /**
     * Sets the scrollbar color.
     *
     * @param { Color | number | string } color - Scrollbar color.<br>Default value: <em>'\#182431'</em> (40% opacity)
     * <br>A number value indicates a HEX color in RGB or ARGB format,
     * for example, <em>0xffffff</em>. A string value indicates a color in RGB or ARGB format, for example, <em>'#ffffff'</em>.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    scrollBarColor(color: Color | number | string): T;
    /**
     * Sets the scrollbar width.
     *
     * @param { number | string } value  - Scrollbar width.<br>Default value: <em>4</em>
     * <br>Unit: vp
     * <br>If this parameter is set to a value less than or equal to 0, the default value is used.
     * The value <em>0</em> means not to show the scrollbar.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    scrollBarWidth(value: number | string): T;
    /**
     * Margin of the scrollbar.
     *
     * @param { ScrollBarMargin } margin - Margin of the scrollbar.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    scrollBarMargin(margin: ScrollBarMargin): T;
    /**
     * Sets the effect used when the scroll boundary is reached.
     *
     * @param { EdgeEffect } edgeEffect - Effect used when the scroll boundary is reached. The spring and shadow effects are supported.
     * <br>Default value: <em>EdgeEffect.None</em> for the <em>Grid</em>, <em>Scroll</em>,
     * and <em>WaterFlow</em> components and <em>EdgeEffect.Spring</em> for the <em>List</em> component
     * @param { EdgeEffectOptions } options - Whether to enable the scroll effect when the component content is smaller than the component itself.
     * The value <em>{ alwaysEnabled: true }</em> means to enable the scroll effect, and <em>{ alwaysEnabled: false }</em> means the opposite.
     * <br>Default value:<br><em>{ alwaysEnabled: false }</em> for the <em>List</em>, <em>Grid</em>, and <em>WaterFlow</em> components,
     * and <em>{ alwaysEnabled: true }</em> for the <em>Scroll</em> component
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    edgeEffect(edgeEffect: EdgeEffect, options?: EdgeEffectOptions): T;
    /**
     * Called when setting whether to enable fading Edge effect.
     *
     * @param { Optional<boolean> } enabled - Whether to turn on the edge fade effect
     * @param { FadingEdgeOptions } [options] - The options of fadingEdge.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    fadingEdge(enabled: Optional<boolean>, options?: FadingEdgeOptions): T;
    /**
     * Sets the nested scrolling options.
     *
     * @param { NestedScrollOptions } value - Nested scrolling options.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    nestedScroll(value: NestedScrollOptions): T;
    /**
     * Sets whether to support scroll gestures.
     *
     * @param { boolean } value - Whether to support scroll gestures.<br>Default value: <em>true</em>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    enableScrollInteraction(value: boolean): T;
    /**
     * Sets the friction coefficient.
     *
     * @param { number | Resource } value - Friction coefficient.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    friction(value: number | Resource): T;
    /**
     * Triggered when the scrollable component scrolls.
     *
     * @param { function } event - callback of scrollable,
     * scrollOffset is offset per frame scrolling, ScrollState is current scroll state.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     * @deprecated since 12
     * @useinstead ScrollableCommonMethod#onDidScroll
     */
    onScroll(event: (scrollOffset: number, scrollState: ScrollState) => void): T;
    /**
     * Called when the scrollable will scroll.
     *
     * @param { Optional<OnWillScrollCallback> } handler - callback of scrollable.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onWillScroll(handler: Optional<OnWillScrollCallback>): T;
    /**
     * Triggered when the scrollable component scrolls.
     *
     * @param { OnScrollCallback } handler - Callback triggered when the scrollable component scrolls.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 12
     */
    onDidScroll(handler: OnScrollCallback): T;
    /**
     * Triggered when the scrollable component reaches the start position.
     *
     * @param { function } event - Callback function, triggered when the scrollable reaches the start position.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onReachStart(event: () => void): T;
    /**
     * Triggered when the scrollable component reaches the end position.
     *
     * @param { function } event - Callback function, triggered when the scrollable reaches the end position.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onReachEnd(event: () => void): T;
    /**
     * Triggered when the scrollable component starts scrolling initiated by the user's finger dragging the component or its scrollbar.
     *
     * @param { function } event - Callback function, triggered when the scrollable starts scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onScrollStart(event: () => void): T;
    /**
     * Triggered when scrolling stops after the user's finger leaves the screen.
     *
     * @param { function } event - Callback function, triggered when the scrollable stops scrolling.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onScrollStop(event: () => void): T;
    /**
     * Sets the maximum initial velocity at the start of the fling animation that occurs after gesture-driven scrolling ends.
     *
     * @param { number } speedLimit - Maximum initial velocity at the start of the fling animation.
     * <br>Default value: <em>9000</em>
     * <br>Unit: vp/s
     * <br>Value range: (0, +∞). If this parameter is set to a value less than or equal to 0, the default value is used.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    flingSpeedLimit(speedLimit: number): T;
    /**
     * Sets the content clipping area for this scrollable component.
     *
     * @param { ContentClipMode | RectShape } clip - A value from enum ContentClipMode or a customized clip rect.
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    clipContent(clip: ContentClipMode | RectShape): T;
    /**
     * Set the sensitivity of rotating crown.
     *
     * @param { Optional<CrownSensitivity> } sensitivity - The sensitivity of rotating crown, default value is { MEDIUM }.
     * @returns { T } The component instance.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    digitalCrownSensitivity(sensitivity: Optional<CrownSensitivity>): T;
    /**
     * Sets whether to enable the back-to-top feature for a scrollable component when the status bar is touched.
     *
     * @param { boolean } backToTop - Whether to enable the back-to-top feature for a scrollable component when the status bar is touched.
     * <br>Default value: <em>false</em>
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 15
     */
    backToTop(backToTop: boolean): T;
}
/**
 * The actual offset by which the scrollable scrolls.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ScrollResult {
    /**
     * Actual offset by which the scrollable scrolls in vp.
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    offsetRemain: number;
}
/**
 * Called before scroll to allow developer to control real offset the Scrollable can scroll.
 *
 * @typedef { function } OnWillScrollCallback
 * @param { number } scrollOffset - offset this frame will scroll, which may or may not be reached.
 * @param { ScrollState } scrollState - current scroll state.
 * @param { ScrollSource } scrollSource - source of current scroll.
 * @returns { void | ScrollResult } the remain offset for the scrollable,
 *     same as scrollOffset when no ScrollResult is returned.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnWillScrollCallback = (scrollOffset: number, scrollState: ScrollState, scrollSource: ScrollSource) => void | ScrollResult;
/**
  * On scroll callback using in scrollable onDidScroll.
  *
  * @typedef { function } OnScrollCallback
  * @param { number } scrollOffset - offset this frame did scroll.
  * @param { ScrollState } scrollState - current scroll state.
  * @syscap SystemCapability.ArkUI.ArkUI.Full
  * @crossplatform
  * @form
  * @atomicservice
  * @since 12
  */
declare type OnScrollCallback = (scrollOffset: number, scrollState: ScrollState) => void;
/**
 * Defines the onMove callback.
 *
 * @typedef { function } OnMoveHandler
 * @param { number } from - Index number for moving elements.
 * @param { number } to - Target index number for moving elements.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type OnMoveHandler = (from: number, to: number) => void;
/**
 * Define item drag event handler.
 *
 * @interface ItemDragEventHandler
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare interface ItemDragEventHandler {
    /**
     * This callback is triggered when the item is long pressed.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onLongPress?: Callback<number>;
    /**
     * This callback is triggered when the item is dragged.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDragStart?: Callback<number>;
    /**
     * This callback is triggered when an item is moved through other items.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onMoveThrough?: OnMoveHandler;
    /**
     * This callback is triggered when the item is dropped.
     *
     * @type { ?Callback<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onDrop?: Callback<number>;
}
/**
 * Define DynamicNode.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class DynamicNode<T> {
    /**
     * Invoked when data is moved during drag and drop sorting.
     * This callback is only applicable in a List component.
     * where each ForEach iteration generates a ListItem component.
     * It allows you to define custom drag actions and handle various drag events.
     *
     * @param { Optional<OnMoveHandler> } handler
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onMove(handler: Optional<OnMoveHandler>): T;
    /**
     * Set the move action.
     *
     * @param { Optional<OnMoveHandler> } handler
     * @param { ItemDragEventHandler } eventHandler
     * @returns { T }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    onMove(handler: Optional<OnMoveHandler>, eventHandler: ItemDragEventHandler): T;
}
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Define EdgeEffect Options.
 *
 * @interface EdgeEffectOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface EdgeEffectOptions {
    /**
     * Enable Sliding effect when component does not full screen.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Enable Sliding effect when component does not full screen.
     *
     * @type { boolean }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    alwaysEnabled: boolean;
    /**
     * Set the effective edge of the edge effect.
     *
     * @type { ?number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    effectEdge?: number;
}
/**
 * Enumerates the effective edge of the edge effect.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum EffectEdge {
    /**
     * Effective only for the starting edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    START = 1,
    /**
     * Effective only for the end edge.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    END = 2
}
/**
 * Indicates children main size.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class ChildrenMainSize {
    /**
     * Creates an instance of ChildrenMainSize.
     *
     * @param { number } childDefaultSize - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(childDefaultSize: number);
    /**
     * Set default size.
     *
     * @param { number } value - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    set childDefaultSize(value: number);
    /**
     * Get default size
     *
     * @returns { number } - default main size, in vp. If the main axis is vertical, it indicates height.
     * If the main axis is horizontal, it indicates width.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    get childDefaultSize(): number;
    /**
     * Changes children main size by removing or replacing existing elements and/or adding new elements in place.
     *
     * @param { number } start - Zero-based index at which to start changing the children main size.
     * @param { number } [deleteCount] - Indicating the number of children main size to remove from start.
     * @param { Array<number> } [childrenSize] - Add the new children main size, beginning from start.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     * @example splice(1, 0, [100]), Insert a child after first child, the child's main size is 100vp.
     * splice(1, 1), Delete the second child.
     * splice(1, 2, [100, 100]), Change the main size of the second and third children to 100vp.
     */
    splice(start: number, deleteCount?: number, childrenSize?: Array<number>): void;
    /**
     * Updates main size for specified child.
     *
     * @param { number } index - index of child to be updated.
     * @param { number } childSize - new section options.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    update(index: number, childSize: number): void;
}
/**
 * Define BackgroundBrightness Options.
 *
 * @interface BackgroundBrightnessOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @atomicservice
 * @since 12
 */
declare interface BackgroundBrightnessOptions {
    /**
     * Brightness change rate. A higher rate means that brightness decreases more quickly.
     * If **rate** is set to **0**, **lightUpDegree** will not take effect, meaning no brightening effect will occur.
     *
     * @type { number } - The default value is 0.0, value range: (0.0, +∞).
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    rate: number;
    /**
     * Light up degree. A greater degree indicates a greater increase in brightness.
     *
     * @type { number } - The default value is 0.0, value range: [-1.0, 1.0].
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @atomicservice
     * @since 12
     */
    lightUpDegree: number;
}
/**
 * wrapBuilder is a template function that returns a WrappedBuilder object.
 * wrapBuilder only accepts a global @Builder decorated function as its argument.
 * Of the WrappedBuilder object it returns, the builder attribute method can be used only inside the struct.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * wrapBuilder is a template function that returns a WrappedBuilder object.
 * wrapBuilder only accepts a global @Builder decorated function as its argument.
 * Of the WrappedBuilder object it returns, the builder attribute method can be used only inside the struct.
 * @param { function } builder
 * @returns { WrappedBuilder<Args> }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare function wrapBuilder<Args extends Object[]>(builder: (...args: Args) => void): WrappedBuilder<Args>;
/**
 * The WrappedBuilder object is also a template class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * The WrappedBuilder object is also a template class.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare class WrappedBuilder<Args extends Object[]> {
    /**
     * global @Builder decorated function.
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * global @Builder decorated function.
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    builder: (...args: Args) => void;
    /**
     * @param { function } builder
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * @param { function } builder
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    constructor(builder: (...args: Args) => void);
}
/**
 * Defines the overall animation parameters of the keyframe animation.
 *
 * @interface KeyframeAnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines the overall animation parameters of the keyframe animation.
 *
 * @interface KeyframeAnimateParam
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface KeyframeAnimateParam {
    /**
     * Animation delay time, in ms.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Animation delay time, in ms.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    delay?: number;
    /**
     * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Animation iterations. When set to -1, the animation playing it repeatedly. The value range is greater than or equal to -1.
     *
     * @type { ?number }
     * @default 1
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    iterations?: number;
    /**
     * Callback invoked when the whole keyframe animation is complete or the ability is about to enter the background.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Callback invoked when the whole keyframe animation is complete or the ability is about to enter the background.
     *
     * @type { ?function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onFinish?: () => void;
    /**
     * Indicates expectedFrameRateRange of keyframe animation.
     *
     * @type { ?ExpectedFrameRateRange }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    expectedFrameRateRange?: ExpectedFrameRateRange;
}
/**
 * Defines a keyframe state.
 *
 * @interface KeyframeState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 11
 */
/**
 * Defines a keyframe state.
 *
 * @interface KeyframeState
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface KeyframeState {
    /**
     * Animation duration of this keyframe, in ms.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Animation duration of this keyframe, in ms.
     *
     * @type { number }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    duration: number;
    /**
     * Animation curve of this keyframe.
     *
     * @type { ?(Curve | string | ICurve) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * Animation curve of this keyframe.
     *
     * @type { ?(Curve | string | ICurve) }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    curve?: Curve | string | ICurve;
    /**
     * The closure function to specify the terminating state of this keyframe.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @since 11
     */
    /**
     * The closure function to specify the terminating state of this keyframe.
     *
     * @type { function }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    event: () => void;
}
/**
 * Defines the basic callback.
 *
 * @typedef Callback<T, V = void>
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface Callback<T, V = void> {
    /**
     * Defines the callback info.
     *
     * @param { T } data - the data will be used in the callback.
     * @returns { V } - Returns result of the callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    (data: T): V;
}
/**
 * Defines the callback type used in hover events.
 * The value of isHover indicates whether the mouse is hovering over the component.
 * The value of event contains information about HoverEvent.
 *
 * @typedef { function } HoverCallback
 * @param { boolean } isHover
 * @param { HoverEvent} event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type HoverCallback = (isHover: boolean, event: HoverEvent) => void;
/**
 * Defines the callback type used in accessibility hover events.
 * The value of isHover indicates whether the touch is hovering over the component.
 * The value of event contains information about AccessibilityHoverEvent.
 *
 * @typedef { function } AccessibilityCallback
 * @param { boolean } isHover
 * @param { AccessibilityHoverEvent } event
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare type AccessibilityCallback = (isHover: boolean, event: AccessibilityHoverEvent) => void;
/**
 * Defines the callback type used in accessibility hover transparent event.
 *
 * @typedef { function } AccessibilityTransparentCallback
 * @param { TouchEvent } event - The value of event contains information about original accessibility hover event.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 20
 */
declare type AccessibilityTransparentCallback = (event: TouchEvent) => void;
/**
 * Defines the options about VisibleAreaEvent.
 *
 * @interface VisibleAreaEventOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface VisibleAreaEventOptions {
    /**
     * Each number in ratios indicates the value of visibility ratio. Each number in the Array value range in [0, 1].
     *
     * @type { Array<number> }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    ratios: Array<number>;
    /**
     * The value of expectedUpdateInterval indicates desired update period(ms).
     *
     * @type { ?number }
     * @default 1000
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    expectedUpdateInterval?: number;
}
/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isVisible - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { number } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
/**
 * Defines the callback type used in VisibleAreaChange events.
 *
 * @typedef { function } VisibleAreaChangeCallback
 * @param { boolean } isExpanding - Indicates the ratio of the visible area to its own area compared to the last change.
 * It is true as the ratio increases and false as the ratio decreases.
 * @param { number } currentRatio - The value of currentRatio indicates the visibility ratio of the current component.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 13
 */
declare type VisibleAreaChangeCallback = (isExpanding: boolean, currentRatio: number) => void;
/**
 * Defines a UICommonEvent which is used to set different common event to target component.
 *
 * @interface UICommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface UICommonEvent {
    /**
     * Set or reset the callback which will be triggered a click event when clicked.
     *
     * @param { Callback<ClickEvent> | undefined } callback - The callback about the click event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnClick(callback: Callback<ClickEvent> | undefined): void;
    /**
     * Set or reset the callback which will be triggered a touch event when touched.
     *
     * @param { Callback<TouchEvent> | undefined } callback - The callback about the touch event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnTouch(callback: Callback<TouchEvent> | undefined): void;
    /**
     * Set or reset the callback is triggered when a component mounts a display.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when a component mounts a display. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnAppear(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback is triggered when component uninstallation disappears.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when component uninstallation disappears. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnDisappear(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback is triggered when component has keyboard input.
     *
     * @param { Callback<KeyEvent> | undefined } callback - The callback will be triggered when has keyboard input. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnKeyEvent(callback: Callback<KeyEvent> | undefined): void;
    /**
     * Set or reset the callback which is triggered when component get focus.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when a component get focus. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnFocus(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when lose focus.
     *
     * @param { Callback<void> | undefined } callback - The callback will be triggered when a component lose focus. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnBlur(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when has a hover event.
     *
     * @param { HoverCallback | undefined } callback - The callback will be triggered when has a hover event. If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnHover(callback: HoverCallback | undefined): void;
    /**
    * Set or reset the callback which is triggered when has a mouse event.
    *
    * @param { Callback<MouseEvent> | undefined } callback - The callback will be triggered when has mouse input. If set undefined will reset the target callback.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    setOnMouse(callback: Callback<MouseEvent> | undefined): void;
    /**
    * Sets the callback for the onSizeChange event.
    *
    * @param { SizeChangeCallback | undefined } callback - The callback will be triggered when the size of component changed. If set undefined will reset the target callback.
    * @syscap SystemCapability.ArkUI.ArkUI.Full
    * @crossplatform
    * @atomicservice
    * @since 12
    */
    setOnSizeChange(callback: SizeChangeCallback | undefined): void;
    /**
     * Sets the onVisibleAreaChange callback that limits the callback interval.
     *
     * @param { VisibleAreaEventOptions } options - The options for the visibility event.
     * @param { VisibleAreaChangeCallback | undefined } event - The callback will be triggered when the visibleArea of component changed and get close to any number in ratios defined by options.
     * If set undefined will reset the target callback.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    setOnVisibleAreaApproximateChange(options: VisibleAreaEventOptions, event: VisibleAreaChangeCallback | undefined): void;
}
/**
 * Defines a UIScrollableCommonEvent which is used to set event to target component.
 *
 * @extends UICommonEvent
 * @interface UIScrollableCommonEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare interface UIScrollableCommonEvent extends UICommonEvent {
    /**
     * Set or reset the callback which is triggered when the scrolling reaches the start position.
     *
     * @param { Callback<void> | undefined } callback - callback function, triggered when the
     *     scrolling reaches the start position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    setOnReachStart(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when the scrolling reaches the end position.
     *
     * @param { Callback<void> | undefined } callback - callback function, triggered when the
     *     scrolling reaches the end position.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    setOnReachEnd(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when the scrolling started.
     *
     * @param { Callback<void> | undefined } callback - callback function, triggered when the scrolling started.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    setOnScrollStart(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when the scrolling stoped.
     *
     * @param { Callback<void> | undefined } callback - callback function, triggered when the scrolling stoped.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    setOnScrollStop(callback: Callback<void> | undefined): void;
    /**
     * Set or reset the callback which is triggered when scrolling begin each frame.
     *
     * @param { OnScrollFrameBeginCallback | undefined } callback - callback function, triggered when the
     *     scrolling begin each frame.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    setOnScrollFrameBegin(callback: OnScrollFrameBeginCallback | undefined): void;
}
/**
 * Defines a UIGestureEvent which is used to set different gestures to target component.
 *
 * @interface UIGestureEvent
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface UIGestureEvent {
    /**
     * Add a gesture bound to the component.
     *
     * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
     * @param { GesturePriority } priority - priority indicates the gesture's priority.
     * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    addGesture<T>(gesture: GestureHandler<T>, priority?: GesturePriority, mask?: GestureMask): void;
    /**
     * Adds a gesture that can be recognized at once by the component and its child component.
     *
     * @param { GestureHandler<T> } gesture - gesture indicates the gesture bound to a component.
     * @param { GestureMask } mask - mask indicates the gesture's GestureMask value.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    addParallelGesture<T>(gesture: GestureHandler<T>, mask?: GestureMask): void;
    /**
     * Remove a gesture from a component that has been bound with a specific tag through a modifier.
     *
     * @param { string } tag - tag indicates the gesture's tag.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeGestureByTag(tag: string): void;
    /**
     * Clear gestures bound to the component.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    clearGestures(): void;
}
/**
 * Defines the gesture modifier.
 *
 * @interface GestureModifier
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface GestureModifier {
    /**
     * Defines the gesture update function.
     *
     * @param { UIGestureEvent } event
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    applyGesture(event: UIGestureEvent): void;
}
/**
 * Defines the selection options.
 *
 * @interface SelectionOptions
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface SelectionOptions {
    /**
     * Menu pop-up policy.
     *
     * @type { ?MenuPolicy }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    menuPolicy?: MenuPolicy;
}
/**
 * Defines the next focus item.
 *
 * @interface FocusMovement
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface FocusMovement {
    /**
     * Next focus item's component identifier of forward.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    forward?: string;
    /**
     * Next focus item's component identifier of backward.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    backward?: string;
    /**
     * Next focus item's component identifier of up.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    up?: string;
    /**
     * Next focus item's component identifier of down.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    down?: string;
    /**
     * Next focus item's component identifier of left.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    left?: string;
    /**
     * Next focus item's component identifier of right.
     *
     * @type { ?string }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    right?: string;
}
/**
 * enum keyboard avoid mode
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare enum KeyboardAvoidMode {
    /**
     * Automatically avoids the soft keyboard and compresses the height when reaching the maximum limit.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    DEFAULT = 0,
    /**
     * Does not avoid the soft keyboard.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    NONE = 1
}
/**
 * Enumerates the type of area in hover mode.
 *
 * @enum { number }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 14
 */
declare enum HoverModeAreaType {
    /**
     * Layout top half screen when the phone in hover mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    TOP_SCREEN = 0,
    /**
     * Layout bottom half screen when the phone in hover mode.
     *
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 14
     */
    BOTTOM_SCREEN = 1
}
/**
 * Defines a range of dates.
 *
 * @interface DateRange
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 19
 */
declare interface DateRange {
    /**
     * Defines the start date of the date range.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    start?: Date;
    /**
     * Defines the end date of the date range.
     *
     * @type { ?Date }
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @atomicservice
     * @since 19
     */
    end?: Date;
}
