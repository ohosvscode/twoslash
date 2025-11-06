/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit AbilityKit
 */
import { AsyncCallback } from '../@ohos.base';
import Context from './Context';
import AbilityLifecycleCallback from '../@ohos.app.ability.AbilityLifecycleCallback';
import EnvironmentCallback from '../@ohos.app.ability.EnvironmentCallback';
import type ApplicationStateChangeCallback from '../@ohos.app.ability.ApplicationStateChangeCallback';
import { ProcessInformation } from './ProcessInformation';
import type ConfigurationConstant from '../@ohos.app.ability.ConfigurationConstant';
import Want from '../@ohos.app.ability.Want';
/**
 * The context of an application. It allows access to application-specific resources.
 *
 * @extends Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 9
 */
/**
 * The context of an application. It allows access to application-specific resources.
 *
 * @extends Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * The ApplicationContext module, inherited from Context, provides application-level context capabilities, including
 * APIs for registering and unregistering the lifecycle of application components.
 *
 * @extends Context
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export default class ApplicationContext extends Context {
    /**
     * Register ability lifecycle callback.
     *
     * @param { 'abilityLifecycle' } type - abilityLifecycle.
     * @param { AbilityLifecycleCallback } callback - The ability lifecycle callback.
     * @returns { number } Returns the number code of the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Register ability lifecycle callback.
     *
     * @param { 'abilityLifecycle' } type - abilityLifecycle.
     * @param { AbilityLifecycleCallback } callback - The ability lifecycle callback.
     * @returns { number } Returns the number code of the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Registers a listener to monitor the ability lifecycle of the application.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { 'abilityLifecycle' } type - Event type.
     * @param { AbilityLifecycleCallback } callback - Callback used to return the ID of the registered listener.
     * @returns { number } Returns the number code of the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    on(type: 'abilityLifecycle', callback: AbilityLifecycleCallback): number;
    /**
     * Unregister ability lifecycle callback.
     *
     * @param { 'abilityLifecycle' } type - abilityLifecycle.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @param { AsyncCallback<void> } callback - The callback of off.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Unregister ability lifecycle callback.
     *
     * @param { 'abilityLifecycle' } type - abilityLifecycle.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @param { AsyncCallback<void> } callback - The callback of off.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Unregisters the listener that monitors the ability lifecycle of the application.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { 'abilityLifecycle' } type - Event type.
     * @param { number } callbackId - ID of the listener to unregister.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the deregistration is successful,
     * err is undefined. Otherwise, err is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    off(type: 'abilityLifecycle', callbackId: number, callback: AsyncCallback<void>): void;
    /**
     * Unregister ability lifecycle callback.
     *
     * @param { 'abilityLifecycle' } type - abilityLifecycle.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Unregister ability lifecycle callback.
     *
     * @param { 'abilityLifecycle' } type - abilityLifecycle.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    /**
     * Unregisters the listener that monitors the ability lifecycle of the application.
     * This API uses a promise to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { 'abilityLifecycle' } type - Event type.
     * @param { number } callbackId - ID of the listener to unregister.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    off(type: 'abilityLifecycle', callbackId: number): Promise<void>;
    /**
     * Register environment callback.
     *
     * @param { 'environment' } type - environment.
     * @param { EnvironmentCallback } callback - The environment callback.
     * @returns { number } Returns the number code of the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Registers a listener for system environment changes.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { 'environment' } type - Event type.
     * @param { EnvironmentCallback } callback - Callback used to return the system environment changes.
     * @returns { number } ID of the registered listener. The ID is incremented by 1 each time the listener is
     * registered. When the ID exceeds 2^63-1, -1 is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    on(type: 'environment', callback: EnvironmentCallback): number;
    /**
     * Unregister environment callback.
     *
     * @param { 'environment' } type - environment.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @param { AsyncCallback<void> } callback - The callback of unregisterEnvironmentCallback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Unregisters the listener for system environment changes.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { 'environment' } type - Event type.
     * @param { number } callbackId - ID of the listener to unregister.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the deregistration is successful,
     * err is undefined. Otherwise, err is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    off(type: 'environment', callbackId: number, callback: AsyncCallback<void>): void;
    /**
     * Unregister environment callback.
     *
     * @param { 'environment' } type - environment.
     * @param { number } callbackId - Indicates the number code of the callback.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Unregisters the listener for system environment changes.
     * This API uses a promise to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { 'environment' } type - Event type.
     * @param { number } callbackId - ID of the listener to unregister.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    off(type: 'environment', callbackId: number): Promise<void>;
    /**
     * Register applicationStateChange callback.
     *
     * @param { 'applicationStateChange' } type - applicationStateChange.
     * @param { ApplicationStateChangeCallback } callback - The applicationStateChange callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Register applicationStateChange callback.
     *
     * @param { 'applicationStateChange' } type - applicationStateChange.
     * @param { ApplicationStateChangeCallback } callback - The applicationStateChange callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    /**
     * Registers a listener for application foreground/background state changes.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { 'applicationStateChange' } type - Event type.
     * @param { ApplicationStateChangeCallback } callback - Callback used to return the result. You can define a callback
     * for switching from the background to the foreground and a callback for switching from the foreground to the
     * background.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    on(type: 'applicationStateChange', callback: ApplicationStateChangeCallback): void;
    /**
     * Unregister applicationStateChange callback.
     *
     * @param { 'applicationStateChange' } type - applicationStateChange.
     * @param { ApplicationStateChangeCallback } [callback] - The applicationStateChange callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Unregister applicationStateChange callback.
     *
     * @param { 'applicationStateChange' } type - applicationStateChange.
     * @param { ApplicationStateChangeCallback } [callback] - The applicationStateChange callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    /**
     * Unregisters the listener for application foreground/background state changes.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>A listener must have been registered by calling <code>ApplicationContext.on('applicationStateChange')</code>.
     * </p>
     *
     * @param { 'applicationStateChange' } type - Event type.
     * @param { ApplicationStateChangeCallback } [callback] - Callback used to return the result.The value can be a
     * callback defined by <code>ApplicationContext.on('applicationStateChange')</code> or empty.
     * - If a defined callback is passed in, the listener for that callback is unregistered.
     * - If no value is passed in, all the listeners for the corresponding event are unregistered.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    off(type: 'applicationStateChange', callback?: ApplicationStateChangeCallback): void;
    /**
     * Get information about running processes
     *
     * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Get information about running processes
     *
     * @returns { Promise<Array<ProcessInformation>> } Returns the array of {@link ProcessInformation}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains information about the running processes.
     * This API uses a promise to return the result.
     *
     * @returns { Promise<Array<ProcessInformation>> } Promise used to return the API call result and the process running
     * information. You can perform error handling or custom processing in this callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getRunningProcessInformation(): Promise<Array<ProcessInformation>>;
    /**
     * Get information about running processes
     *
     * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Get information about running processes
     *
     * @param { AsyncCallback<Array<ProcessInformation>> } callback - The callback is used to return the array of {@link ProcessInformation}.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains information about the running processes.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<ProcessInformation>> } callback - Callback used to return the information about the
     * running processes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getRunningProcessInformation(callback: AsyncCallback<Array<ProcessInformation>>): void;
    /**
     * Kill all processes of the application
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Kills all processes of this application.
     * The application will not go through the normal lifecycle when exiting.
     * This API uses a promise to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly,
     * call terminateSelf().
     * </p>
     *
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    killAllProcesses(): Promise<void>;
    /**
     * Kills all processes of this application.
     * The application will not go through the normal lifecycle when exiting.
     * This API uses a promise to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly,
     * call terminateSelf().
     * </p>
     *
     * @param { boolean } clearPageStack - Whether to clear the page stack. The value <code>true</code> means to clear
     * the page stack, and <code>false</code> means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 14
     */
    killAllProcesses(clearPageStack: boolean): Promise<void>;
    /**
     * Kill all processes of the application
     *
     * @param { AsyncCallback<void> } callback - The callback of killAllProcesses.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Kills all processes of this application.
     * The application will not go through the normal lifecycle when exiting.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API is used to forcibly exit an application in abnormal scenarios. To exit an application properly,
     * call terminateSelf().
     * </p>
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If all the processes are killed,
     * <code>err</code> is <code>undefined</code>. Otherwise, <code>err</code> is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    killAllProcesses(callback: AsyncCallback<void>);
    /**
     * Set colorMode of the application
     *
     * @param { ConfigurationConstant.ColorMode } colorMode - Color mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the color mode for the application.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { ConfigurationConstant.ColorMode } colorMode - Target color mode, including dark mode, light mode, and
     * system theme mode (no setting).
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    setColorMode(colorMode: ConfigurationConstant.ColorMode): void;
    /**
     * Sets the language for the application.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param { string } language - Target language. The list of supported languages can be obtained by
     * calling getSystemLanguages().
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    setLanguage(language: string): void;
    /**
     * Clears up the application data and revokes the permissions that the application has requested from users.
     * This API uses a promise to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API stops the application process. After the application process is stopped, all subsequent callbacks
     * will not be triggered.
     * </p>
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11
     */
    clearUpApplicationData(): Promise<void>;
    /**
     * Clears up the application data and revokes the permissions that the application has requested from users.
     * This API uses an asynchronous callback to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API stops the application process. After the application process is stopped, all subsequent callbacks
     * will not be triggered.
     * </p>
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the application data is cleared
     * up, <code>error</code> is <code>undefined</code>; otherwise, <code>error</code> is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 11
     */
    clearUpApplicationData(callback: AsyncCallback<void>): void;
    /**
     * Restarts the application and starts the specified UIAbility.
     * The onDestroy callback is not triggered during the restart.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread, and the application to restart must be active.
     * </p>
     *
     * @param { Want } want - Want information about the UIAbility to start. No verification is performed on the bundle
     * name passed in.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000050 - Internal error.
     * @throws { BusinessError } 16000053 - The ability is not on the top of the UI.
     * @throws { BusinessError } 16000063 - The target to restart does not belong to the current application or is not a UIAbility.
     * @throws { BusinessError } 16000064 - Restart too frequently. Try again at least 3s later.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    restartApp(want: Want): void;
    /**
     * Sets whether the application itself supports process cache, which enables quick startup after caching.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API only sets the application to be ready for quick startup after caching. It does not mean that quick
     * startup will be triggered. Other conditions must be considered to determine whether to trigger quick startup.
     * <br>The process cache support status takes effect for a single application process instance. The setting does not
     * affect other process instances. After a process instance is destroyed, the status is not retained and can be
     * reset.
     * <br>To support process cache, you must call this API, with <code>true</code> passed in, in the <code>onCreate()</code>
     * lifecycle of all AbilityStages in the same process.
     * </p>
     *
     * @param { boolean } isSupported - Whether process cache is supported. The value <code>true</code> means that
     * process cache is supported, and <code>false</code> means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12
     */
    setSupportedProcessCache(isSupported: boolean): void;
    /**
     * Sets the font for this application.
     *
     * <p>**NOTE**:
     * <br>This API can be called only by the main thread.
     * </P>
     *
     * @param { string } font - Font, which can be registered by calling UIContext.registerFont.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 12
     */
    setFont(font: string): void;
    /**
     * Obtains the index of the current application clone.
     *
     * @returns { number } Index of the current application clone.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000071 - App clone is not supported.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    getCurrentAppCloneIndex(): number;
    /**
     * Sets the scale ratio for the font size of this application.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * </p>
     *
     * @param {number} fontSizeScale - Font scale ratio. The value is a non-negative number. When the application's
     * {@link fontSizeScale} is set to <code>followSystem</code> and the value set here exceeds the value of
     * fontSizeMaxScale, the value of fontSizeMaxScale takes effect.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 13
     */
    setFontSizeScale(fontSizeScale: number): void;
    /**
     * Obtains the unique instance ID of this application.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API is valid only for 2-in-1 devices.
     * </p>
     *
     * @returns { string } Unique instance ID of the application.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000078 - The multi-instance is not supported.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 14
     */
    getCurrentInstanceKey(): string;
    /**
     * Obtains the unique instance IDs of all multi-instances of this application.
     * This API uses a promise to return the result.
     *
     * <p>**NOTE**:
     * <br>It can be called only by the main thread.
     * <br>This API is valid only for 2-in-1 devices.
     * </p>
     *
     * @returns { Promise<Array<string>> } Promise used to return the unique instance IDs of all multi-instances of the
     * application.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @throws { BusinessError } 16000050 - Internal error.
     * @throws { BusinessError } 16000078 - The multi-instance is not supported.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 14
     */
    getAllRunningInstanceKeys(): Promise<Array<string>>;
}
