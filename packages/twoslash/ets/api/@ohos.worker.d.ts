/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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
 * @kit ArkTS
 */
/**
 * @typedef WorkerOptions
 * Provides options that can be set for the worker to create.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef WorkerOptions
 * Provides options that can be set for the worker to create.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * @typedef WorkerOptions
 * Provides options that can be set for the Worker instance to create.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface WorkerOptions {
    /**
     * Mode in which the worker executes the script.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Mode in which the worker executes the script.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Mode in which the Worker instance executes the script. The module type is not supported yet. The default value is classic.
     *
     * @type { ?('classic' | 'module') }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    type?: 'classic' | 'module';
    /**
     * Name of the worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Name of the worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Name of the Worker thread. The default value is undefined.
     *
     * @type { ?string }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    name?: string;
    /**
     * Whether the worker is shared.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Whether the worker is shared.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Whether sharing of the Worker instance is enabled. Currently, sharing is not supported.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    shared?: boolean;
    /**
     * Priority of the Worker thread.
     *
     * @type { ?ThreadWorkerPriority }
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice
     * @since 18
     */
    priority?: ThreadWorkerPriority;
}
/**
 * Enumerates the priorities available for Worker threads. For details about the mappings between priorities and QoS levels, see QoS Level.
 *
 * @enum { number } ThreadWorkerPriority
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 18
 */
export enum ThreadWorkerPriority {
    /**
     * High priority, corresponding to QOS_USER_INITIATED.
     *
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice
     * @since 18
     */
    HIGH = 0,
    /**
     * Medium priority, corresponding to QOS_DEFAULT.
     *
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice
     * @since 18
     */
    MEDIUM = 1,
    /**
     * Low priority, corresponding to QOS_UTILITY.
     *
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice
     * @since 18
     */
    LOW = 2,
    /**
     * Background priority, corresponding to QOS_BACKGROUND.
     *
     * @syscap SystemCapability.Utils.Lang
     * @atomicservice
     * @since 18
     */
    IDLE = 3
}
/**
 * @typedef Event
 * Defines the event.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef Event
 * Defines the event.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * @typedef Event
 * Defines the event.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface Event {
    /**
     * Type of the Event.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Type of the Event.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Type of the Event.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly type: string;
    /**
     * Timestamp(accurate to millisecond) when the event is created.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Timestamp(accurate to millisecond) when the event is created.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Timestamp (accurate to millisecond) when the event is created. This parameter is not supported yet.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly timeStamp: number;
}
/**
 * Provides detailed information about the exception occurred during worker execution.
 * @typedef ErrorEvent
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * Provides detailed information about the exception occurred during worker execution.
 * @typedef ErrorEvent
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Provides detailed information about the exception that occurs during worker execution. The ErrorEvent class inherits from Event.
 * @typedef ErrorEvent
 * @extends Event
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface ErrorEvent extends Event {
    /**
     * Information about the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Information about the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Information about the exception.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly message: string;
    /**
     * File where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * File where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * File where the exception is located.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly filename: string;
    /**
     * Number of the line where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Number of the line where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Serial number of the line where the exception is located.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly lineno: number;
    /**
     * Number of the column where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Number of the column where the exception is located.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Serial number of the column where the exception is located.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly colno: number;
    /**
     * Type of the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Type of the exception.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Type of the exception.
     *
     * @type { Object }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly error: Object;
}
/**
 * Holds the data transferred between worker threads.
 * @typedef MessageEvent<T>
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * Holds the data transferred between worker threads.
 * @typedef MessageEvent<T>
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Holds the data transferred between worker threads.
 * @typedef MessageEvent<T>
 * @extends Event
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface MessageEvent<T> extends Event {
    /**
     * Data transferred when an exception occurs.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * Data transferred when an exception occurs.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Data transferred when an exception occurs.
     *
     * @type { T }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    readonly data: T;
}
/**
 * Saves the data transferred between worker thread and host thread.
 * @typedef MessageEvents
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * Saves the data transferred between worker thread and host thread.
 * @typedef MessageEvents
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Holds the data transferred between Worker threads.
 * @typedef MessageEvents
 * @extends Event
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface MessageEvents extends Event {
    /**
     * Data transferred when an exception occurs.
     *
     * @type { any }
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Data transferred when an exception occurs.
     *
     * @type { any }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Data transferred when an exception occurs.
     *
     * @type { any }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly data: any;
}
/**
 * @typedef PostMessageOptions
 * Specifies the object whose ownership need to be transferred during data transfer.
 * The object must be ArrayBuffer.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * @typedef PostMessageOptions
 * Specifies the object whose ownership need to be transferred during data transfer.
 * The object must be ArrayBuffer.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * @typedef PostMessageOptions
 * Defines the object for which the ownership is to be transferred during data transfer. The object must be an ArrayBuffer instance.
 * After the ownership is transferred, the object becomes unavailable in the sender and can be used only in the receiver.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface PostMessageOptions {
    /**
     * ArrayBuffer array used to transfer the ownership.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     */
    /**
     * ArrayBuffer array used to transfer the ownership.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * ArrayBuffer array used to transfer the ownership. The array cannot be null.
     *
     * @type { ?Object[] }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    transfer?: Object[];
}
/**
 * @typedef EventListener
 * Implements event listening.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventListener
 */
export interface EventListener {
    /**
     * Specifies the callback to invoke.
     *
     * @param { Event } evt - evt evt Event class for the callback to invoke.
     * @returns { void | Promise<void> }
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventListener.(event: Event)
     */
    (evt: Event): void | Promise<void>;
}
/**
 * @typedef WorkerEventListener
 * Implements event listening.
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * @typedef WorkerEventListener
 * Implements event listening.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * @typedef WorkerEventListener
 * Implements event listening.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface WorkerEventListener {
    /**
     * Specifies the callback function to be invoked.
     *
     * @param { Event } event - event Event class for the callback to invoke.
     * @returns { void | Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Specifies the callback function to be invoked.
     *
     * @param { Event } event - event Event class for the callback to invoke.
     * @returns { void | Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Specifies the callback function to be invoked.
     *
     * @param { Event } event - Event class for the callback to invoke.
     * @returns { void | Promise<void> }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    (event: Event): void | Promise<void>;
}
/**
 * Type of message, only "message" and "messageerror".
 *
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * Type of message, only "message" and "messageerror".
 *
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Type of message, only "message" and "messageerror".
 *
 * @typedef { 'message' | 'messageerror' }
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 12
 */
type MessageType = 'message' | 'messageerror';
/**
 * @typedef EventTarget
 * Specific event features.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.WorkerEventTarget
 */
export interface EventTarget {
    /**
     * Adds an event listener to the worker.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { EventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.addEventListener
     */
    addEventListener(type: string, listener: EventListener): void;
    /**
     * Dispatches the event defined for the worker.
     *
     * @param { Event } event - event Event to dispatch.
     * @returns { boolean }
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.dispatchEvent
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Removes an event defined for the worker.
     *
     * @param { string } type - type Type of the event for which the event listener is removed.
     * @param { EventListener } callback - callback Callback of the event listener to remove.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.removeEventListener
     */
    removeEventListener(type: string, callback?: EventListener): void;
    /**
     * Removes all event listeners for the worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.WorkerEventTarget.removeAllListener
     */
    removeAllListener(): void;
}
/**
 * @typedef WorkerEventTarget
 * Specific worker event features.
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * @typedef WorkerEventTarget
 * Specific worker event features.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * @typedef WorkerEventTarget
 * Processes worker listening events.
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface WorkerEventTarget {
    /**
     * Adds an event listener to the worker.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Adds an event listener to the worker.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @since 10
     */
    /**
     * Adds an event listener to the worker.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 11
     */
    /**
     * Adds an event listener for the Worker thread. This API provides the same functionality as on9+.
     *
     * @param { string } type - type Type of the event to listen for.
     * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    addEventListener(type: string, listener: WorkerEventListener): void;
    /**
     * Handle the event defined for the worker.
     *
     * @param { Event } event - event Event to dispatch.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Handle the event defined for the worker.
     *
     * @param { Event } event - event Event to dispatch.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Dispatches the event defined for the Worker thread.
     *
     * @param { Event } event - event Event to dispatch.
     * @returns { boolean }
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    dispatchEvent(event: Event): boolean;
    /**
     * Remove an event defined for the worker.
     *
     * @param { string } type - type Type of the event for which the event listener is cancelled.
     * @param { WorkerEventListener } [callback] - callback Callback of the event listener to remove.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Remove an event defined for the worker.
     *
     * @param { string } type - type Type of the event for which the event listener is cancelled.
     * @param { WorkerEventListener } [callback] - callback Callback of the event listener to remove.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Removes an event listener for the Worker thread. This API provides the same functionality as off9+.
     *
     * @param { string } type - type Type of the event for which the event listener is to be removed.
     * @param { WorkerEventListener } [callback] - callback Callback to invoke when the listener is removed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeEventListener(type: string, callback?: WorkerEventListener): void;
    /**
     * Remove all event listeners for the worker.
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Remove all event listeners for the worker.
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Removes all event listeners for the Worker thread.
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    removeAllListener(): void;
}
/**
 * @typedef WorkerGlobalScope
 * Specifies the worker thread running environment, which is isolated from the host thread environment.
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.GlobalScope
 */
declare interface WorkerGlobalScope extends EventTarget {
    /**
     * Worker name specified when there is a new worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.GlobalScope.name
     */
    readonly name: string;
    /**
     * The onerror attribute of parentPort specifies
     * the event handler to be called when an exception occurs during worker execution.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.GlobalScope.onerror
     */
    onerror?: (ev: ErrorEvent) => void;
    /**
     * Specify the type attribute for self.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.GlobalScope.self
     */
    readonly self: WorkerGlobalScope & typeof globalThis;
}
/**
 * The environment Specified in which worker threads run, which is isolated from the host thread environment.
 * @typedef GlobalScope
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * The environment Specified in which worker threads run, which is isolated from the host thread environment.
 * @typedef GlobalScope
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Implements the running environment of the Worker thread. The GlobalScope class inherits from WorkerEventTarget.
 * @typedef GlobalScope
 * @extends WorkerEventTarget
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare interface GlobalScope extends WorkerEventTarget {
    /**
     * Name of Worker specified when there is a new worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Name of Worker specified when there is a new worker.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Worker instance specified when there is a new Worker instance.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly name: string;
    /**
     * The onerror attribute of parentPort specified.
     * the event handler to be called when an exception occurs during worker execution.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The onerror attribute of parentPort specified.
     * the event handler to be called when an exception occurs during worker execution.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Called when an exception occurs during worker execution. The event handler is executed in the Worker thread.
     * In the callback function, the ev type is ErrorEvent, indicating the received abnormal data.
     *
     * @type { ?function }
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onerror?: (ev: ErrorEvent) => void;
    /**
     * Specify the type attribute for self.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Specify the type attribute for self.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * GlobalScope itself.
     *
     * @type { GlobalScope & typeof globalThis }
     * @readonly
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    readonly self: GlobalScope & typeof globalThis;
}
/**
 * @typedef DedicatedWorkerGlobalScope
 * Specifies the worker thread running environment, which is isolated from the host thread environment
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.worker.ThreadWorkerGlobalScope
 */
export interface DedicatedWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker thread receives a message sent by
     * the host thread through worker postMessage.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessage
     */
    onmessage?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker receives a message that cannot be deserialized.
     * The event handler is executed in the worker thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.onmessageerror
     */
    onmessageerror?: (this: DedicatedWorkerGlobalScope, ev: MessageEvent) => void;
    /**
     * Close the worker thread to stop the worker from receiving messages
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.close
     */
    close(): void;
    /**
     * Send a message to be host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { Transferable[] } transfer - transfer array cannot contain null.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.postMessage
     */
    postMessage(messageObject: Object, transfer: Transferable[]): void;
    /**
     * Send a message to be host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { PostMessageOptions } [options] - options Option can be set for postmessage.
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorkerGlobalScope.postMessage
     */
    postMessage(messageObject: Object, options?: PostMessageOptions): void;
    /**
     * Send a message to host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { ArrayBuffer[] } transfer - transfer array cannot contain null.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     * @deprecated since 9
     */
    postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;
}
/**
 * Specifies the thread-worker running environment, which is isolated from the host-thread environment
 * @typedef ThreadWorkerGlobalScope
 * @syscap SystemCapability.Utils.Lang
 * @since 9
 */
/**
 * Specifies the thread-worker running environment, which is isolated from the host-thread environment
 * @typedef ThreadWorkerGlobalScope
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * Implements communication between the Worker thread and the host thread. The postMessage API is used to send messages
 * to the host thread, and the close API is used to terminate the Worker thread. The ThreadWorkerGlobalScope class inherits from GlobalScope9+.
 * @typedef ThreadWorkerGlobalScope
 * @extends GlobalScope
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface ThreadWorkerGlobalScope extends GlobalScope {
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker thread receives a message sent by
     * the host thread through worker postMessage.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker thread receives a message sent by
     * the host thread through worker postMessage.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the Worker thread receives a message sent by the host thread through postMessage.
     * The event handler is executed in the Worker thread. In the callback function, this indicates the caller's
     * ThreadWorkerGlobalScope, and the ev type is MessageEvents, indicating the received message data.
     *
     * @type { ?function }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onmessage?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker receives a message that cannot be deserialized.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The onmessage attribute of parentPort specifies the event handler
     * to be called then the worker receives a message that cannot be deserialized.
     * The event handler is executed in the worker thread.
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Called when the Worker thread receives a message that cannot be deserialized. The event handler is executed
     * in the Worker thread. In the callback function, this indicates the caller's ThreadWorkerGlobalScope,
     * and the ev type is MessageEvents, indicating the received message data.
     *
     * @type { ?function }
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onmessageerror?: (this: ThreadWorkerGlobalScope, ev: MessageEvents) => void;
    /**
     * Close the worker thread to stop the worker from receiving messages
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Close the worker thread to stop the worker from receiving messages
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Terminates the Worker thread to stop it from receiving messages.
     *
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    close(): void;
    /**
     * Send a message to host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { ArrayBuffer[] } transfer - transfer array cannot contain null.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Send a message to host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { ArrayBuffer[] } transfer - transfer array cannot contain null.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sends a message from the Worker thread to the host thread by transferring object ownership.
     *
     * @param { Object } messageObject - Data to be sent to the host thread. The data object must be sequenceable.
     *     For details about the supported parameter types, see Sequenceable Data Types.
     * @param { ArrayBuffer[] } transfer - ArrayBuffer instance holding an array of objects for which the ownership
     *     is transferred to the host thread. After the transfer, the objects are available only in the host thread. The array cannot be null.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    postMessage(messageObject: Object, transfer: ArrayBuffer[]): void;
    /**
     * Send a message to be host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { PostMessageOptions } [options] - options Option can be set for postmessage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * Send a message to be host thread from the worker
     *
     * @param { Object } messageObject - messageObject Data to be sent to the worker
     * @param { PostMessageOptions } [options] - options Option can be set for postmessage.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Sends a message from the Worker thread to the host thread by transferring object ownership or copying data.
     *
     * @param { Object } messageObject - Data to be sent to the host thread. The data object must be sequenceable.
     *     For details about the supported parameter types, see Sequenceable Data Types.
     * @param { PostMessageOptions } [options] - If this parameter is specified, it functions the same as ArrayBuffer[].
     *     Specifically, the ownership of the objects in the array is transferred to the host thread and becomes unavailable in the Worker thread.
     *     The objects are available only in the host thread. If this parameter is not specified, the default value undefined is used,
     *     and information is transferred to the host thread by copying data.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    postMessage(messageObject: Object, options?: PostMessageOptions): void;
    /**
     * Sends a message from the Worker thread to the host thread. In the message, a sendable object is passed by reference,
     * and a non-sendable object is passed by serialization.
     *
     * @param { Object } message - Data to be sent to the host thread. The data object must be sequenceable or sendable.
     *     For details about the supported sequenceable types, see Sequenceable Data Types.
     *     For details about the supported sendable types, see Sendable Data Types.
     * @param { ArrayBuffer[] } [transfer] - ArrayBuffer instance holding an array of objects for which the ownership is
     *     transferred to the host thread. After the transfer, the objects are available only in the host thread.
     *     The array cannot be null. The default value is an empty array.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    postMessageWithSharedSendable(message: Object, transfer?: ArrayBuffer[]): void;
    /**
     * Send a global call on registered globalCallObject on host side and return the result synchronously
     *
     * @param { string } instanceName - the exact key used in registration
     * @param { string } methodName - a string which is same to the method called on globalCallObject.
     * @param { number } timeout - the specific milliseconds that will wait for result to return, between 0 and 5000.
     * @param { Object[] } args - the method argument called on registered globalCallObject.
     * @returns { Object } Return the result of method if it has a return value, otherwise return void.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - The Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200019 - The globalCallObject is not registered.
     * @throws { BusinessError } 10200020 - The method to be called is not callable or is an async method or a generator.
     * @throws { BusinessError } 10200021 - Waiting for a global call timed out.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 11
     */
    /**
     * Calls a method of an object registered with the host thread. This API is called by the Worker thread.
     * The invoking is synchronous for the Worker thread and asynchronous for the host thread. The return value is transferred through serialization.
     *
     * @param { string } instanceName - Key used for registration. It is used to search for the object in the host thread.
     * @param { string } methodName - Name of the method to call. Note that the method cannot be modified by async or generator,
     *     or return results asynchronously by using the asynchronous mechanism at the bottom layer. Otherwise, an exception is thrown.
     * @param { number } timeout - Maximum duration that the current synchronous invoking waits, in ms.
     *     The value is an integer ranging from 1 to 5000. The value 0 means that the 5000 ms duration is used.
     * @param { Object[] } args - the method argument called on registered globalCallObject.
     * @returns { Object } Return the result of method if it has a return value, otherwise return void.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     * 1.Mandatory parameters are left unspecified;
     * 2.Incorrect parameter types;
     * 3.Parameter verification failed.
     * @throws { BusinessError } 10200004 - Worker instance is not running.
     * @throws { BusinessError } 10200006 - An exception occurred during serialization.
     * @throws { BusinessError } 10200019 - The globalCallObject is not registered.
     * @throws { BusinessError } 10200020 - The method to be called is not callable or is an async method or a generator.
     * @throws { BusinessError } 10200021 - The global call exceeds the timeout.
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    callGlobalCallObjectMethod(instanceName: string, methodName: string, timeout: number, ...args: Object[]): Object;
}
/**
 * The event handler to be called when an exception occurs during worker execution.
 *
 * @typedef { function } ErrorCallback
 * @param { ErrorEvent } err - Error event class, which provides detailed information about the exception occurred during Worker execution.
 * @returns { void }
 * @syscap SystemCapability.Utils.Lang
 * @atomicservice
 * @since 18
 */
type ErrorCallback = (err: ErrorEvent) => void;
/**
 * JS cross-thread communication tool
 *
 * @namespace worker
 * @syscap SystemCapability.Utils.Lang
 * @since 7
 */
/**
 * JS cross-thread communication tool
 *
 * @namespace worker
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @since 10
 */
/**
 * JS cross-thread communication tool
 *
 * @namespace worker
 * @syscap SystemCapability.Utils.Lang
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare namespace worker {
    /**
     * The ThreadWorker class contains all Worker functions.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The ThreadWorker class contains all Worker functions.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * Before using the following APIs, you must create a ThreadWorker instance. The ThreadWorker class inherits from WorkerEventTarget.
     *
     * @implements WorkerEventTarget
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    class ThreadWorker implements WorkerEventTarget {
        /**
         * Creates a worker instance
         *
         * @param { string } scriptURL - scriptURL URL of the script to be executed by the worker
         * @param { WorkerOptions } [options] - options Options that can be set for the worker
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200003 - Worker initialization failed.
         * @throws { BusinessError } 10200007 - The worker file path is invalid.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Creates a worker instance
         *
         * @param { string } scriptURL - scriptURL URL of the script to be executed by the worker
         * @param { WorkerOptions } [options] - options Options that can be set for the worker
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200003 - Worker initialization failed.
         * @throws { BusinessError } 10200007 - The worker file path is invalid.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * A constructor used to create a ThreadWorker instance.
         *
         * @param { string } scriptURL - URL of the Worker thread file. For details about the rules, see Precautions for File URLs.
         * @param { WorkerOptions } [options] - Options that can be set for the Worker instance.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200003 - Worker initialization failed.
         * @throws { BusinessError } 10200007 - The worker file path is invalid.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        constructor(scriptURL: string, options?: WorkerOptions);
        /**
         * The onexit attribute of the worker specifies the event handler to be called
         * when the worker exits. The handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onexit attribute of the worker specifies the event handler to be called
         * when the worker exits. The handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Called when the Worker thread exits. The event handler is executed in the host thread. In the callback function,
         * the code value is of the number type, where the value 1 indicates abnormal exit and 0 indicates normal exit.
         *
         * @type { ?function }
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        onexit?: (code: number) => void;
        /**
         * The onerror attribute of the worker specifies the event handler to be called
         * when an exception occurs during worker execution.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onerror attribute of the worker specifies the event handler to be called
         * when an exception occurs during worker execution.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Called when an exception occurs during worker execution. The event handler is executed in the host thread.
         * In the callback function, the err type is ErrorEvent, indicating the received abnormal data.
         *
         * @type { ?function }
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        onerror?: (err: ErrorEvent) => void;
        /**
         * Called when an exception occurs within the lifecycle of the Worker thread. The event handler is executed in the host thread.
         *
         * onerror can capture only exceptions generated by synchronous methods within the onmessage callback.
         * It cannot capture exceptions from multithreaded callbacks or modularization-related exceptions.
         * Once an exception is captured, the Worker thread will proceed to the destruction process and cannot be used.
         *
         * onAllErrors can capture global exceptions generated during the onmessage callback, timer callback,
         * and file execution of the Worker thread. After an exception is captured by onAllErrors,
         * the Worker thread remains alive and can continue to be used. You are advised to use onAllErrors instead of onerror.
         *
         * @type { ?function }
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @atomicservice
         * @since 18
         */
        onAllErrors?: ErrorCallback;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * to be called then the host thread receives a message created by itself
         * and sent by the worker through the parentPort.postMessage.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onmessage attribute of the worker specifies the event handler
         * to be called then the host thread receives a message created by itself
         * and sent by the worker through the parentPort.postMessage.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Called when the host thread receives a message sent by the Worker thread through workerPort.postMessage.
         * The event handler is executed in the host thread. In the callback function, the event type is MessageEvents, indicating the received message data.
         *
         * @type { ?function }
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        onmessage?: (event: MessageEvents) => void;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * when the worker receives a message that cannot be serialized.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * The onmessage attribute of the worker specifies the event handler
         * when the worker receives a message that cannot be serialized.
         * The event handler is executed in the host thread.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Called when the Worker thread receives a message that cannot be serialized. The event handler is executed in the host thread.
         * In the callback function, the event type is MessageEvents, indicating the received message data.
         *
         * @type { ?function }
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Incorrect parameter types.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        onmessageerror?: (event: MessageEvents) => void;
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { ArrayBuffer[] } transfer - transfer ArrayBuffer instance that can be transferred.
         * The transferList array cannot contain null.
         * @throws { BusinessError } 401 - if the input parameters are invalid.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { ArrayBuffer[] } transfer - transfer ArrayBuffer instance that can be transferred.
         * The transferList array cannot contain null.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sends a message from the host thread to the Worker thread by transferring object ownership.
         *
         * @param { Object } message - Data to be sent to the Worker thread. The data object must be sequenceable.
         *     For details about the supported parameter types, see Sequenceable Data Types.
         * @param { ArrayBuffer[] } transfer - ArrayBuffer instance holding an array of objects for which the ownership
         *     is transferred to the Worker thread. After the transfer, the objects are available only in the Worker thread. The array cannot be null.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        postMessage(message: Object, transfer: ArrayBuffer[]): void;
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { PostMessageOptions } [options] - options
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message Data to be sent to the worker
         * @param { PostMessageOptions } [options] - options
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Sends a message from the host thread to the Worker thread by transferring object ownership or copying data.
         *
         * @param { Object } message - Data to be sent to the Worker thread. The data object must be sequenceable.
         *     For details about the supported parameter types, see Sequenceable Data Types.
         * @param { PostMessageOptions } [options] - If this parameter is specified, it functions the same as ArrayBuffer[].
         *     Specifically, the ownership of the objects in the array is transferred to the Worker thread and becomes unavailable in the host thread.
         *     The objects are available only in the Worker thread. If this parameter is not specified, the default value undefined is used,
         *     and information is transferred to the Worker thread by copying data.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        postMessage(message: Object, options?: PostMessageOptions): void;
        /**
         * Sends a message from the host thread to the Worker thread. In the message, a sendable object is passed by reference,
         * and a non-sendable object is passed by serialization.
         *
         * @param { Object } message - Data to be sent to the Worker thread. The data object must be sequenceable or sendable.
         *     For details about the supported sequenceable types, see Sequenceable Data Types.
         *     For details about the supported sendable types, see Sendable Data Types.
         * @param { ArrayBuffer[] } [transfer] - ArrayBuffer instance holding an array of objects for which the ownership
         *     is transferred to the Worker thread. After the transfer, the objects are available only in the Worker thread.
         *     The array cannot be null. The default value is an empty array.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200006 - An exception occurred during serialization.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        postMessageWithSharedSendable(message: Object, transfer?: ArrayBuffer[]): void;
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Adds an event listener to the worker.
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Adds an event listener to the worker.
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Adds an event listener for the Worker thread. This API provides the same functionality as addEventListener9+.
         *
         * @param { string } type - Type of the event to listen for.
         * @param { WorkerEventListener } listener - Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        on(type: string, listener: WorkerEventListener): void;
        /**
         * Adds an event listener to the worker
         * and removes the event listener automatically after it is invoked once.
         *
         * @param { string } type - type Type of the event to listen for
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Adds an event listener to the worker
         * and removes the event listener automatically after it is invoked once.
         *
         * @param { string } type - type Type of the event to listen for
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Adds an event listener for the Worker thread and removes the event listener after it is invoked once.
         *
         * @param { string } type - type Type of the event to listen for
         * @param { WorkerEventListener } listener - listener Callback to invoke when an event of the specified type occurs
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        once(type: string, listener: WorkerEventListener): void;
        /**
         * Removes an event listener to the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is removed.
         * @param { WorkerEventListener } [listener] - listener Callback of the event listener to remove.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Removes an event listener to the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is removed.
         * @param { WorkerEventListener } [listener] - listener Callback of the event listener to remove.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Removes an event listener for the Worker thread. This API provides the same functionality as removeEventListener9+.
         *
         * @param { string } type - type Type of the event for which the event listener is removed.
         * @param { WorkerEventListener } [listener] - listener Callback of the event listener to remove.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        off(type: string, listener?: WorkerEventListener): void;
        /**
         * Terminates the worker thread to stop the worker from receiving messages
         *
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Terminates the worker thread to stop the worker from receiving messages
         *
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Terminates the Worker thread to stop it from receiving messages.
         *
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        terminate(): void;
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Type of the event to listen for.
         * @param { WorkerEventListener } listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Type of the event to listen for.
         * @param { WorkerEventListener } listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @throws { BusinessError } 10200005 - The called API is not supported in the worker thread.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Adds an event listener for the Worker thread. This API provides the same functionality as on9+.
         *
         * @param { string } type - type Type of the event to listen for.
         * @param { WorkerEventListener } listener Callback to invoke when an event of the specified type occurs.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @throws { BusinessError } 10200005 - The invoked API is not supported in workers.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        addEventListener(type: string, listener: WorkerEventListener): void;
        /**
         * Handle the event defined for the worker.
         *
         * @param { Event } event - event Event to dispatch.
         * @returns { boolean }
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Handle the event defined for the worker.
         *
         * @param { Event } event - event Event to dispatch.
         * @returns { boolean }
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Dispatches the event defined for the Worker thread.
         *
         * @param { Event } event - event Event to dispatch.
         * @returns { boolean }
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        dispatchEvent(event: Event): boolean;
        /**
         * Remove an event defined for the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is cancelled.
         * @param { WorkerEventListener } [callback] - callback Callback of the event listener to remove.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Remove an event defined for the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is cancelled.
         * @param { WorkerEventListener } [callback] - callback Callback of the event listener to remove.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Removes an event listener for the Worker thread. This API provides the same functionality as off9+.
         *
         * @param { string } type - type Type of the event for which the event listener is to be removed.
         * @param { WorkerEventListener } [callback] - callback Callback to invoke when the listener is removed.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        removeEventListener(type: string, callback?: WorkerEventListener): void;
        /**
         * Remove all event listeners for the worker.
         *
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @since 9
         */
        /**
         * Remove all event listeners for the worker.
         *
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 10
         */
        /**
         * Removes all event listeners for the Worker thread.
         *
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        removeAllListener(): void;
        /**
         * Register globalCallObject for global call.
         * @param { string } instanceName - The key to register globalCallObject.
         * @param { Object } globalCallObject - The globalCallObject that will be registered.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 11
         */
        /**
         * Registers an object with the ThreadWorker instance of the host thread.
         * In this way, the methods of the object can be called in the Worker thread through callGlobalCallObjectMethod.
         *
         * @param { string } instanceName - Key used for registration, based on which the registered object is identified during method calling.
         * @param { Object } globalCallObject - Object to register. The ThreadWorker instance holds a strong reference to the object.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        registerGlobalCallObject(instanceName: string, globalCallObject: Object): void;
        /**
         * Remove registered globalCallObject and release strong reference to registered object.
         * @param { string } [instanceName] - The exact key that used in registration.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - The Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @since 11
         */
        /**
         * Unregisters an object with the ThreadWorker instance of the host thread. This API releases the strong reference
         * between the ThreadWorker instance and the target object. No error is reported if no object is matched.
         *
         * @param { string } [instanceName] - Key used for registration. If this parameter is left blank,
         *     all registered objects registered in the ThreadWorker instance are unregistered.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1.Mandatory parameters are left unspecified;
         * 2.Incorrect parameter types;
         * 3.Parameter verification failed.
         * @throws { BusinessError } 10200004 - Worker instance is not running.
         * @syscap SystemCapability.Utils.Lang
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        unregisterGlobalCallObject(instanceName?: string): void;
    }
    /**
     * The Worker class contains all Worker functions.
     *
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.ThreadWorker
     */
    class Worker implements EventTarget {
        /**
         * Creates a worker instance
         *
         * @param { string } scriptURL - scriptURL URL of the script to be executed by the worker
         * @param { WorkerOptions } options - options Options that can be set for the worker
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.constructor
         */
        constructor(scriptURL: string, options?: WorkerOptions);
        /**
         * The onexit attribute of the worker specifies the event handler to be called
         * when the worker exits. The handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onexit
         */
        onexit?: (code: number) => void;
        /**
         * The onerror attribute of the worker specifies the event handler to be called
         * when an exception occurs during worker execution.
         * The event handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onerror
         */
        onerror?: (err: ErrorEvent) => void;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * to be called then the host thread receives a message created by itself
         * and sent by the worker through the parentPort.postMessage.
         * The event handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onmessage
         */
        onmessage?: (event: MessageEvent) => void;
        /**
         * The onmessage attribute of the worker specifies the event handler
         * when the worker receives a message that cannot be serialized.
         * The event handler is executed in the host thread.
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.onmessageerror
         */
        onmessageerror?: (event: MessageEvent) => void;
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message - message Data to be sent to the worker
         * @param { ArrayBuffer[] } transfer - transfer ArrayBuffer instance that can be transferred.
         * The transferList array cannot contain null.
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.postMessage
         */
        postMessage(message: Object, transfer: ArrayBuffer[]): void;
        /**
         * Sends a message to the worker thread.
         * The data is transferred using the structured clone algorithm.
         *
         * @param { Object } message - message - message Data to be sent to the worker
         * @param { PostMessageOptions } [options] - options Option can be set for postmessage.
         * The transferList array cannot contain null.
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.postMessage
         */
        postMessage(message: Object, options?: PostMessageOptions): void;
        /**
         * Adds an event listener to the worker.
         *
         * @param { string } type - type Adds an event listener to the worker.
         * @param { EventListener } listener - listener Callback to invoke when an event of the specified type occurs.
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.on
         */
        on(type: string, listener: EventListener): void;
        /**
         * Adds an event listener to the worker
         * and removes the event listener automatically after it is invoked once.
         *
         * @param { string } type - type Type of the event to listen for
         * @param { EventListener } listener - listener Callback to invoke when an event of the specified type occurs
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.once
         */
        once(type: string, listener: EventListener): void;
        /**
         * Removes an event listener to the worker.
         *
         * @param { string } type - type Type of the event for which the event listener is removed.
         * @param { EventListener } listener - listener Callback of the event listener to remove.
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.off
         */
        off(type: string, listener?: EventListener): void;
        /**
         * Terminates the worker thread to stop the worker from receiving messages
         *
         * @syscap SystemCapability.Utils.Lang
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.worker.ThreadWorker.terminate
         */
        terminate(): void;
    }
    /**
     * The object used by the worker thread to communicate with the host thread.
     *
     * @constant
     * @syscap SystemCapability.Utils.Lang
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.worker.workerPort
     */
    const parentPort: DedicatedWorkerGlobalScope;
    /**
     * The object used by the worker thread to communicate with the host thread.
     *
     * @constant
     * @syscap SystemCapability.Utils.Lang
     * @since 9
     */
    /**
     * The object used by the worker thread to communicate with the host thread.
     *
     * @constant
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @since 10
     */
    /**
     * The object used by the worker thread to communicate with the host thread.
     *
     * @syscap SystemCapability.Utils.Lang
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    const workerPort: ThreadWorkerGlobalScope;
}
export default worker;
