/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */
import { AsyncCallback, Callback } from './@ohos.base';
import { Permissions } from './permissions';
import type _Context from './application/Context';
import type _PermissionRequestResult from './security/PermissionRequestResult';
/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @since 8
 */
/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @atomicservice
 * @since 11
 */
/**
 * @namespace abilityAccessCtrl
 * @syscap SystemCapability.Security.AccessToken
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare namespace abilityAccessCtrl {
    /**
     * Obtains the AtManager instance.
     *
     * @returns { AtManager } Returns the instance of the AtManager.
     * @syscap SystemCapability.Security.AccessToken
     * @since 8
     */
    /**
     * Obtains the AtManager instance.
     *
     * @returns { AtManager } returns the instance of the AtManager.
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @since 10
     */
    /**
     * Obtains the AtManager instance.
     *
     * @returns { AtManager } returns the instance of the AtManager.
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    function createAtManager(): AtManager;
    /**
     * Provides methods for managing access_token.
     *
     * @interface AtManager
     * @syscap SystemCapability.Security.AccessToken
     * @since 8
     */
    /**
     * Provides methods for managing access_token.
     *
     * @interface AtManager
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 11
     */
    interface AtManager {
        /**
         * Checks whether a specified application has been granted the given permission.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified. The Permissions type supports only valid permission names.
         * @returns { Promise<GrantStatus> } Returns permission verify result.
         * @syscap SystemCapability.Security.AccessToken
         * @since 9
         */
        verifyAccessToken(tokenID: number, permissionName: Permissions): Promise<GrantStatus>;
        /**
         * Checks whether a specified application has been granted the given permission.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { string } permissionName - Name of the permission to be verified.
         * @returns { Promise<GrantStatus> } Returns permission verify result.
         * @syscap SystemCapability.Security.AccessToken
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.abilityAccessCtrl.AtManager#checkAccessToken
         */
        verifyAccessToken(tokenID: number, permissionName: string): Promise<GrantStatus>;
        /**
         * Checks whether a specified application has been granted the given permission synchronously.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { GrantStatus } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @since 9
         */
        verifyAccessTokenSync(tokenID: number, permissionName: Permissions): GrantStatus;
        /**
         * Checks whether a specified application has been granted the given permission.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { Promise<GrantStatus> } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @since 9
         */
        /**
         * Checks whether a specified application has been granted the given permission.
         * On the cross-platform, this function can be used to check the permission grant status for the current application only.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { Promise<GrantStatus> } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @since 10
         */
        /**
         * Checks whether a specified application has been granted the given permission.
         * On the cross-platform, this function can be used to check the permission grant status for the current application only.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { Promise<GrantStatus> } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        checkAccessToken(tokenID: number, permissionName: Permissions): Promise<GrantStatus>;
        /**
         * Checks whether a specified application has been granted the given permission.
         * On the cross-platform, this function can be used to check the permission grant status for the current application only.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { GrantStatus } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @since 10
         */
        /**
         * Checks whether a specified application has been granted the given permission.
         * On the cross-platform, this function can be used to check the permission grant status for the current application only.
         *
         * @param { number } tokenID - Token ID of the application.
         * @param { Permissions } permissionName - Name of the permission to be verified.
         * @returns { GrantStatus } Returns permission verify result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The tokenID is 0, or the permissionName exceeds 256 characters.
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        checkAccessTokenSync(tokenID: number, permissionName: Permissions): GrantStatus;
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @param { AsyncCallback<PermissionRequestResult> } requestCallback Callback for the result from requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @since 9
         */
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @param { AsyncCallback<PermissionRequestResult> } requestCallback Callback for the result from requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @crossplatform
         * @since 10
         */
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @param { AsyncCallback<PermissionRequestResult> } requestCallback Callback for the result from requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>, requestCallback: AsyncCallback<PermissionRequestResult>): void;
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @returns { Promise<PermissionRequestResult> } Returns result of requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @since 9
         */
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @returns { Promise<PermissionRequestResult> } Returns result of requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @crossplatform
         * @since 10
         */
        /**
         * Requests certain permissions from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permissions to be requested. This parameter cannot be null or empty.
         * @returns { Promise<PermissionRequestResult> } Returns result of requesting permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The context is invalid when it does not belong to the application itself.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        requestPermissionsFromUser(context: Context, permissionList: Array<Permissions>): Promise<PermissionRequestResult>;
        /**
         * Subscribes to the permission changes of this application.
         *
         * @param { 'selfPermissionStateChange' } type - Event type.
         * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be
         * listened on. The value in the list can be:
         * <br> {@code empty} - Indicates that the application can be notified if any permission state changes.
         * <br> {@code non-empty} - Indicates that the application can only be notified if the specified permission
         * state changes.
         * @param { Callback<PermissionStateChangeInfo> } callback - Callback for the result from registering
         * permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left
         * unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The permissionList exceeds
         * the size limit; 2. The permissionNames in the list are all invalid.
         * @throws { BusinessError } 12100004 - The API is used repeatedly with the same input.
         * @throws { BusinessError } 12100005 - The registration time has exceeded the limit.
         * @throws { BusinessError } 12100007 - The service is abnormal.
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 18
         */
        on(type: 'selfPermissionStateChange', permissionList: Array<Permissions>, callback: Callback<PermissionStateChangeInfo>): void;
        /**
         * Unregisters a permission state callback so that the application cannot be notified upon specified permissions state changes anymore.
         *
         * @param { 'selfPermissionStateChange' } type - Event type.
         * @param { Array<Permissions> } permissionList - A list of permissions that specify the permissions to be listened on.
         *  It should correspond to the value registered by function of "on", whose type is "selfPermissionStateChange".
         * @param { Callback<PermissionStateChangeInfo> } callback - Callback for the result from unregistering permissions.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. The permissionNames in the list are all invalid.
         * @throws { BusinessError } 12100004 - The API is not used in pair with 'on'.
         * @throws { BusinessError } 12100007 - The service is abnormal.
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 18
         */
        off(type: 'selfPermissionStateChange', permissionList: Array<Permissions>, callback?: Callback<PermissionStateChangeInfo>): void;
        /**
         * Requests certain permissions on setting from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { Array<Permissions> } permissionList - Indicates the list of permission to be requested. This parameter cannot be null or empty.
         * @returns { Promise<Array<GrantStatus>> } Returns the list of status of the specified permission.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid because it does not belong to the application itself;
         *  2. The permission list contains the permission that is not declared in the module.json file; 3. The permission list is invalid because the permissions in it do not belong to the same permission group.
         * @throws { BusinessError } 12100010 - The request already exists.
         * @throws { BusinessError } 12100011 - All permissions in the permission list have been granted.
         * @throws { BusinessError } 12100012 - The permission list contains the permission that has not been revoked by the user.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @atomicservice
         * @since 12
         */
        requestPermissionOnSetting(context: Context, permissionList: Array<Permissions>): Promise<Array<GrantStatus>>;
        /**
         * Requests certain global switch status on setting from the user.
         *
         * @param { Context } context - The context that initiates the permission request.
         * <br> The context must belong to the Stage model and only supports UIAbilityContext and UIExtensionContext.
         * @param { SwitchType } type - Indicates the type of global switch to be requested. This parameter cannot be null or empty.
         * @returns { Promise<boolean> } Returns the status of the specified global switch.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types.
         * @throws { BusinessError } 12100001 - Invalid parameter. Possible causes: 1. The context is invalid because it does not belong to the application itself; 2. The type of global switch is not support.
         * @throws { BusinessError } 12100010 - The request already exists.
         * @throws { BusinessError } 12100013 - The specific global switch is already open.
         * @syscap SystemCapability.Security.AccessToken
         * @stagemodelonly
         * @atomicservice
         * @since 12
         */
        requestGlobalSwitch(context: Context, type: SwitchType): Promise<boolean>;
        /**
         * Queries permission status of the application synchronously.
         *
         * @param { Permissions } permissionName - Indicates the permission to be queried. This parameter cannot be null or empty.
         * @returns { PermissionStatus } Return permission status.
         * @throws { BusinessError } 12100001 - Invalid parameter. The permissionName is empty or exceeds 256 characters.
         * @throws { BusinessError } 12100007 - The service is abnormal.
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 20
         */
        getSelfPermissionStatus(permissionName: Permissions): PermissionStatus;
    }
    /**
     * GrantStatus.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.AccessToken
     * @since 8
     */
    /**
     * GrantStatus.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @since 10
     */
    /**
     * GrantStatus.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.AccessToken
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    export enum GrantStatus {
        /**
         * access_token permission check fail
         *
         * @syscap SystemCapability.Security.AccessToken
         * @since 8
         */
        /**
         * access_token permission check fail
         *
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @since 10
         */
        /**
         * access_token permission check fail
         *
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        PERMISSION_DENIED = -1,
        /**
         * access_token permission check success
         *
         * @syscap SystemCapability.Security.AccessToken
         * @since 8
         */
        /**
         * access_token permission check success
         *
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @since 10
         */
        /**
         * access_token permission check success
         *
         * @syscap SystemCapability.Security.AccessToken
         * @crossplatform
         * @atomicservice
         * @since 11
         */
        PERMISSION_GRANTED = 0
    }
    /**
     * Enum for permission state change type.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18
     */
    export enum PermissionStateChangeType {
        /**
         * A granted user_grant permission is revoked.
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 18
         */
        PERMISSION_REVOKED_OPER = 0,
        /**
         * A user_grant permission is granted.
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 18
         */
        PERMISSION_GRANTED_OPER = 1
    }
    /**
     * Indicates the information of permission state change.
     *
     * @interface PermissionStateChangeInfo
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 18
     * @name PermissionStateChangeInfo
     */
    interface PermissionStateChangeInfo {
        /**
         * Indicates the permission state change type.
         *
         * @type { PermissionStateChangeType }
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 18
         */
        change: PermissionStateChangeType;
        /**
         * Indicates the application whose permission state has been changed.
         *
         * @type { number }
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 18
         */
        tokenID: number;
        /**
         * Indicates the permission whose state has been changed.
         *
         * @type { Permissions }
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 18
         */
        permissionName: Permissions;
    }
    /**
     * PermissionStatus.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 20
     */
    export enum PermissionStatus {
        /**
         * permission has been denied, only can change it in settings
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 20
         */
        DENIED = -1,
        /**
         * permission has been granted
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 20
         */
        GRANTED = 0,
        /**
         * permission is not determined
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 20
         */
        NOT_DETERMINED = 1,
        /**
         * permission is invalid
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 20
         */
        INVALID = 2,
        /**
         * permission has been restricted
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 20
         */
        RESTRICTED = 3
    }
    /**
     * SwitchType.
     *
     * @enum { number }
     * @syscap SystemCapability.Security.AccessToken
     * @atomicservice
     * @since 12
     */
    export enum SwitchType {
        /**
         * switch of camera
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 12
         */
        CAMERA = 0,
        /**
         * switch of microphone
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 12
         */
        MICROPHONE = 1,
        /**
         * switch of location
         *
         * @syscap SystemCapability.Security.AccessToken
         * @atomicservice
         * @since 12
         */
        LOCATION = 2
    }
}
export default abilityAccessCtrl;
export { Permissions };
/**
 * PermissionRequestResult interface.
 *
 * @typedef { _PermissionRequestResult }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * PermissionRequestResult interface.
 *
 * @typedef { _PermissionRequestResult }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export type PermissionRequestResult = _PermissionRequestResult;
/**
 * Context interface.
 *
 * @typedef { _Context }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @since 10
 */
/**
 * Context interface.
 *
 * @typedef { _Context }
 * @syscap SystemCapability.Security.AccessToken
 * @stagemodelonly
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export type Context = _Context;
