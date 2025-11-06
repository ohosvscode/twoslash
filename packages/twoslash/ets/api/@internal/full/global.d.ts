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
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @form
 * @since 9
 */
/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @since 10
 */
/**
 * Defines the console info.
 *
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @form
 * @atomicservice
 * @since 11
 */
export declare class console {
    /**
     * Prints "debug" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Prints "debug" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Prints "debug" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Prints debugging information in formatted output mode.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments - Arguments in the message or other information to be printed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static debug(message: string, ...arguments: any[]): void;
    /**
     * Prints "log" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Prints "log" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Prints "log" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Prints log information in formatted output mode.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments - Arguments in the message or other information to be printed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static log(message: string, ...arguments: any[]): void;
    /**
     * Prints "info" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Prints "info" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Prints "info" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Prints log information in formatted output mode. This API is the alias of console.log ().
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments - Arguments in the message or other information to be printed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static info(message: string, ...arguments: any[]): void;
    /**
     * Prints "warn" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Prints "warn" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Prints "warn" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Prints warning information in formatted output mode.
     *
     * @param { string } message - Warning information to be printed.
     * @param { any[] } arguments - Arguments in the message or other information to be printed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static warn(message: string, ...arguments: any[]): void;
    /**
     * Prints "error" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @since 7
     */
    /**
     * Prints "error" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @form
     * @since 9
     */
    /**
     * Prints "error" logs.
     *
     * @param { string } message - Text to print.
     * @param { any[] } arguments
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @since 10
     */
    /**
     * Prints error information in formatted output mode.
     *
     * @param { string } message - Error information to be printed.
     * @param { any[] } arguments - Arguments in the message or other information to be printed.
     * @syscap SystemCapability.ArkUI.ArkUI.Full
     * @crossplatform
     * @form
     * @atomicservice
     * @since 11
     */
    static error(message: string, ...arguments: any[]): void;
    /**
     * Prints a message if value is false or omitted.
     *
     * @param { Object } [value] - The value tested for being truthy.
     * @param { Object[] } arguments - Used as error message to print.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Prints assertion information.
     *
     * @param { Object } [value] - Result value. If value is false or left blank, the output starting with "Assertion failed" is printed. If value is true, no information is printed.
     * @param { Object[] } arguments - Other information to be printed when value is false. If this parameter is left blank, other information is not printed.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static assert(value?: Object, ...arguments: Object[]): void;
    /**
     * Maintains an internal counter specific to label and print the number of times
     * console.count() has been called with the given label.
     *
     * @param { string } [label] - Counter name. Default: "default".
     * @throws { BusinessError } 401 - The parameter check failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Maintains an internal counter. When this counter is invoked,
     * its label name and the corresponding call count are printed.
     *
     * @param { string } [label] - Counter label name. The default value is default.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static count(label?: string): void;
    /**
     * Reset the internal counter specific to label.
     *
     * @param { string } [label] - Counter name. Default: "default".
     * @throws { BusinessError } 401 - The parameter check failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Resets a counter based on the specified label name.
     *
     * @param { string } [label] - Counter label name. The default value is default.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static countReset(label?: string): void;
    /**
     * Prints properties of the specified JavaScript object.
     *
     * @param { Object } [dir] - A JavaScript object whose properties should be output.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Prints content of the specified object.
     *
     * @param { Object } [dir] - Object whose content needs to be printed.
     * If this parameter is left blank, no information is printed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static dir(dir?: Object): void;
    /**
     * This method calls console.log() passing it the arguments received.
     * This method does not produce any XML formatting.
     *
     * @param { Object[] } arguments - Text to print.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Displays an interactive tree of the descendant elements of the specified XML element.
     * This API is implemented by calling console.log() internally.
     * It does not produce any XML elements. The usage method is the same as that of console.log().
     *
     * @param { Object[] } arguments - Information to be printed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static dirxml(...arguments: Object[]): void;
    /**
     * Creates a new inline group, causing any subsequent console messages to be indented by an additional level.
     *
     * @param { Object[] } arguments - messages to print first.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Increases the indentation of subsequent lines by two spaces.
     * If the information to be printed is provided, the information is printed without extra indentation.
     *
     * @param { Object[] } arguments - Information to be printed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static group(...arguments: Object[]): void;
    /**
     * Same as console.group()
     *
     * @param { Object[] } arguments - messages to print first.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a new inline group in collapsed mode.
     * The usage and function of this API are the same as those of console.group().
     *
     * @param { Object[] } arguments - Information to be printed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static groupCollapsed(...arguments: Object[]): void;
    /**
     * Exit current inline group.
     *
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Reduces the indentation of subsequent lines by two spaces.
     *
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static groupEnd(): void;
    /**
     * Prints tabular data as a table.
     *
     * @param { Object } [tableData] - tabular data.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Prints data in a table.
     *
     * @param { Object } [tableData] - Data to be printed in a table.
     * If this parameter is left blank, no information is printed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static table(tableData?: Object): void;
    /**
     * Start a timer.
     *
     * @param { string } [label] - Timer name. Default: "default".
     * @throws { BusinessError } 401 - The parameter check failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Starts a timer to track the duration of an operation.
     * You can use console.timeEnd() to close the timer and print the elapsed time (in ms).
     *
     * @param { string } [label] - Timer label. The default value is default.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static time(label?: string): void;
    /**
     * End a timer and print time duration.
     *
     * @param { string } [label] - Timer name. Default: "default".
     * @throws { BusinessError } 401 - The parameter check failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Stops the timer started by calling console.time() and prints the elapsed time (in ms).
     *
     * @param { string } [label] - Timer label. The default value is default.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static timeEnd(label?: string): void;
    /**
     * Print the elapsed time and other data arguments.
     *
     * @param { string } [label] - Timer name. Default: "default".
     * @param { Object[] } arguments - Text to print.
     * @throws { BusinessError } 401 - The parameter check failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Prints the elapsed time and other data parameters for the timer started by console.time().
     *
     * @param { string } [label] - Timer label. The default value is default.
     * @param { Object[] } arguments - Logs to be printed.
     * @throws { BusinessError } 401 - The parameter check failed. Possible causes:
     * <br> 1. Mandatory parameters are left unspecified.
     * <br> 2. Incorrect parameters types.
     * <br> 3. Parameter verification failed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static timeLog(label?: string, ...arguments: Object[]): void;
    /**
     * Prints stack information for the current code location.
     *
     * @param { Object[] } arguments - message to print.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Creates a stack trace.
     *
     * @param { Object[] } arguments - Logs to be printed. If this parameter is left blank,
     * only stack information is printed.
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static trace(...arguments: Object[]): void;
    /**
     * Prints information about the current hybrid stack of the calling thread in the main thread or worker thread.
     *
     * @static
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    static traceHybridStack(): void;
}
/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets the interval for repeatedly calling a function.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Indicates the interval between each two calls, in milliseconds. The function will be called after this delay.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sets a repeating timer for the system to repeatedly call a function at a fixed interval.
 * The timer can only be manually deleted by calling the clearInterval API.
 *
 * @param { Function | string } handler - Function to be called repeatedly. If the type is string, error information is printed and no other processing is performed.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } delay - Number of milliseconds delayed before the execution.
 * @param { any[] } arguments - Additional parameters to pass to the handler after the timer goes off.
 * @returns { number } ID of the timer. The timer ID is shared by processes and is an integer starting from 0 in ascending order.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function setInterval(handler: Function | string, delay: number, ...arguments: any[]): number;
/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } arguments - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Sets a timer after which a function will be executed.
 *
 * @param { Function | string } handler - Indicates the function to be called after the timer goes off.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Indicates the delay (in milliseconds) after which the function will be called.
 * If this parameter is left empty, default value "0" will be used, which means that the function will be called immediately or as soon as possible.
 * @param { any[] } [arguments] - Indicates additional arguments to pass to "handler" when the timer goes off.
 * @returns { number } Returns the timer ID.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Sets a timer for the system to call a function after the timer goes off.
 * The timer is automatically deleted after the callback is executed, and can be manually deleted by calling the clearTimeout API.
 *
 * @param { Function | string } handler - Function to be called after the timer goes off. If the type is string, error information is printed and no other processing is performed.
 * For devices of "tv", "phone, tablet", and "wearable" types, this parameter can be a function or string.
 * For devices of "lite wearable" and "smartVision" types, this parameter must be a function.
 * @param { number } [delay] - Number of milliseconds delayed before the execution. It is recommended that an integer be passed in. A decimal will be rounded down.
 * If this parameter is not specified, the default value 0 is used, indicating that the function is executed immediately (in the next event loop).
 * NOTE
 * 1. In either case, the actual delay may be longer than expected.
 * 2. If a value less than 1 is passed, the default value 0 is used.
 * @param { any[] } [arguments] - Additional parameters to pass to the handler after the timer goes off.
 * @returns { number } ID of the timer. The timer ID is shared by processes and is an integer starting from 0 in ascending order.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function setTimeout(handler: Function | string, delay?: number, ...arguments: any[]): number;
/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Cancel the interval set by " setInterval()".
 *
 * @param { number } [intervalID] - Indicates the timer ID returned by "setInterval()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Cancels the repeating timer set via setInterval().
 * The timer object is stored in the thread that creates the timer and must be deleted in that thread.
 *
 * @param { number } [intervalID] - ID of the repeating timer to cancel, which is returned by setInterval(). If this parameter is omitted, no timer is canceled.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function clearInterval(intervalID?: number): void;
/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 7
 */
/**
 * Cancel the timer set by "setTimeout()".
 *
 * @param { number } [timeoutID] - Indicates the timer ID returned by "setTimeout()".
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Cancels a timer set via setTimeout().
 * The timer object is stored in the thread that creates the timer and must be deleted in that thread.
 *
 * @param { number } [timeoutID] - ID of the timer to cancel, which is returned by setTimeout() If this parameter is omitted, no timer is canceled.
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function clearTimeout(timeoutID?: number): void;
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 8
 */
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 */
/**
 * Defining syscap function.
 *
 * @param { string } syscap
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export declare function canIUse(syscap: string): boolean;
/**
 * determine whether the current operating system version is greater than or equal to the given value.
 *
 * @param { string } apiVersion - Only major version can be passed in, such as "20";
 *   major and minor version can be passed in, such as "20.1"; major minor and patch
 *   version can be passed in, such as "20.1.2"
 * @returns { boolean } true - operating system version is greater than or equal to the given value
 *                      false - operating system version is less than the given value or invalid api version
 * @syscap SystemCapability.Startup.SystemInfo
 * @crossplatform
 * @atomicservice
 * @since 20
 * @example
 * if (isApiVersionGreaterOrEqual("20.1")) {
 *    // Use 20.1 APIs.
 * } else {
 *    // Alternative code for earlier versions.
 * }
 *
 */
export declare function isApiVersionGreaterOrEqual(apiVersion: string): boolean;
/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Obtains all attributes of the component with the specified ID.
 *
 * @param { string } id - ID of the component whose attributes are to be obtained.
 * @returns { string }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function getInspectorByKey(id: string): string;
/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Get components tree.
 *
 * @returns { Object }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function getInspectorTree(): Object;
/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Sends an event to the component with the specified ID.
 *
 * @param { string } id - ID of the component for which the event is to be sent.
 * @param { number } action - Type of the event to be sent. The options are as follows: Click event: 10 LongClick: 11.
 * @param { string } params - Event parameters. If there is no parameter, pass an empty string "".
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendEventByKey(id: string, action: number, params: string): boolean;
/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send touch event.
 *
 * @param { TouchObject } event - TouchObject to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendTouchEvent(event: TouchObject): boolean;
/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send key event.
 *
 * @param { KeyEvent } event - KeyEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendKeyEvent(event: KeyEvent): boolean;
/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @since 9
 * @test
 */
/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @since 10
 * @test
 */
/**
 * Send mouse event.
 *
 * @param { MouseEvent } event - MouseEvent to be sent.
 * @returns { boolean }
 * @syscap SystemCapability.ArkUI.ArkUI.Full
 * @crossplatform
 * @atomicservice
 * @since 11
 * @test
 */
export declare function sendMouseEvent(event: MouseEvent): boolean;
/**
 * Support loading native module during the runtime phase.
 *
 * @param { string } moduleName - Indicates the native module name.
 * @returns { Object } Returns the default export from the native module.
 * @throws { BusinessError } 401 - The parameter check failed.
 * @throws { BusinessError } 10200301 - Loading native module failed.
 * @syscap SystemCapability.Utils.Lang
 * @stagemodelonly
 * @atomicservice
 * @since 12
 */
export declare function loadNativeModule(moduleName: string): Object;
