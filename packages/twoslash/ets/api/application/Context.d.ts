/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
import { ApplicationInfo } from '../bundleManager/ApplicationInfo';
import type { AsyncCallback } from '../@ohos.base';
import resmgr from '../@ohos.resourceManager';
import BaseContext from './BaseContext';
import EventHub from './EventHub';
import ApplicationContext from './ApplicationContext';
import contextConstant from '../@ohos.app.ability.contextConstant';
/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @extends BaseContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 9
 */
/**
 * The base context of an ability or an application. It allows access to
 * application-specific resources.
 *
 * @extends BaseContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * The Context module, inherited frome {@link BaseContext}, provides context for abilities or applications, including
 * access to application-specific resources.
 *
 * @extends BaseContext
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export default class Context extends BaseContext {
    /**
     * Indicates the capability of accessing application resources.
     *
     * @type { resmgr.ResourceManager }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates the capability of accessing application resources.
     *
     * @type { resmgr.ResourceManager }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Object for resource management.
     *
     * @type { resmgr.ResourceManager }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    resourceManager: resmgr.ResourceManager;
    /**
     * Indicates configuration information about an application.
     *
     * @type { ApplicationInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates configuration information about an application.
     *
     * @type { ApplicationInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Application information.
     *
     * @type { ApplicationInfo }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    applicationInfo: ApplicationInfo;
    /**
     * Indicates app cache dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates app cache dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Cache directory.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    cacheDir: string;
    /**
     * Indicates app temp dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates app temp dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Temporary directory.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    tempDir: string;
    /**
     * Indicates app files dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates app files dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * File directory.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    filesDir: string;
    /**
     * Indicates app database dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates app database dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Database directory.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    databaseDir: string;
    /**
     * Indicates app preferences dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates app preferences dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Preferences directory.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    preferencesDir: string;
    /**
     * Indicates app bundle code dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates app bundle code dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Bundle code directory.
     *
     * <p>**NOTE**:
     * <br>Do not access resource files using concatenated paths. Use @ohos.resourceManager instead.
     * </p>
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    bundleCodeDir: string;
    /**
     * Indicates app distributed files dir.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Distributed file directory.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    distributedFilesDir: string;
    /**
     * Resource directory.
     *
     * <p>**NOTE**:
     * <br>You are required to manually create the resfile directory in <code><module-name>\resource</code>. The resfile
     * directory can be accessed only in read-only mode.
     * </p>
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    resourceDir: string;
    /**
     * Cloud file directory.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 12
     */
    cloudFileDir: string;
    /**
     * Indicates event hub.
     *
     * @type { EventHub }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Indicates event hub.
     *
     * @type { EventHub }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    /**
     * Event hub that implements event subscription, unsubscription, and triggering.
     *
     * @type { EventHub }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    eventHub: EventHub;
    /**
     * Indicates file area.
     *
     * @type { contextConstant.AreaMode }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Encryption level of the directory.
     *
     * @type { contextConstant.AreaMode }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    area: contextConstant.AreaMode;
    /**
     * Process name of the current application.
     *
     * @type { string }
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    processName: string;
    /**
     * Create a module context
     *
     * @param { string } moduleName - Indicates the module name.
     * @returns { Context } Returns the application context.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Create a module context
     *
     * @param { string } moduleName - Indicates the module name.
     * @returns { Context } Returns the application context.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Creates the context based on the module name.
     *
     * <p>**NOTE**:
     * <br>This API is deprecated since API version 12. You are advised to use application.createModuleContext instead.
     * </p>
     *
     * @param { string } moduleName - Module name.
     * @returns { Context } Context created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     * @deprecated since 12
     * @useinstead ohos.app.ability.application/application#createModuleContext
     */
    createModuleContext(moduleName: string): Context;
    /**
     * Get application context
     *
     * @returns { ApplicationContext } Returns the application context.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 9
     */
    /**
     * Get application context
     *
     * @returns { ApplicationContext } Returns the application context.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the context of this application.
     *
     * @returns { ApplicationContext } Application context obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getApplicationContext(): ApplicationContext;
    /**
     * Get group dir by the groupId.
     *
     * @param { string } dataGroupID - Indicates the groupId.
     * @param { AsyncCallback<string> } callback - The callback of getGroupDir.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Obtains the shared directory based on a group ID.
     * This API uses an asynchronous callback to return the result.
     *
     * @param { string } dataGroupID - Group ID, which is assigned by the system when an atomic service project
     * is created.
     * @param { AsyncCallback<string> } callback - Group ID, which is assigned by the system when an atomic service
     * project is created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    getGroupDir(dataGroupID: string, callback: AsyncCallback<string>): void;
    /**
     * Get group dir by the groupId.
     *
     * @param { string } dataGroupID - Indicates the groupId.
     * @returns { Promise<string> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 10
     */
    /**
     * Obtains the shared directory based on a group ID.
     * This API uses a promise to return the result.
     *
     * @param { string } dataGroupID - Group ID, which is assigned by the system when an atomic service project
     * is created.
     * @returns { Promise<string> } Promise used to return the result. If no shared directory exists, null is returned.
     * Only the encryption level EL2 is supported.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified. 2.Incorrect parameter types.
     * @throws { BusinessError } 16000011 - The context does not exist.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 11
     */
    getGroupDir(dataGroupID: string): Promise<string>;
    /**
     * Creates the context for this application based on a data encryption level.
     * This is required when an application needs to store different types of information in different directories.
     * The application can obtain the corresponding directory.
     *
     * @param { contextConstant.AreaMode } areaMode - Data encryption level.
     * @returns { Context } Context created based on the data encryption level.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 18
     */
    createAreaModeContext(areaMode: contextConstant.AreaMode): Context;
    /**
     * Creates the context based on the specified display ID, so as to obtain and use other application contexts with
     * screen information (including ScreenDensity and Direction).
     *
     * @param { number } displayId - Display ID.
     * @returns { Context } 	Context with the specified screen information.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified.
     * 2.Incorrect parameter types.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @atomicservice
     * @since 15
     */
    createDisplayContext(displayId: number): Context;
}
