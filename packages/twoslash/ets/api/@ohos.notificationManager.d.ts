/*
 * Copyright (c) 2022-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file
 * @kit NotificationKit
 */
import { AsyncCallback } from './@ohos.base';
import { BundleOption as _BundleOption } from './notification/NotificationCommonDef';
import { NotificationActionButton as _NotificationActionButton } from './notification/notificationActionButton';
import { NotificationBasicContent as _NotificationBasicContent } from './notification/notificationContent';
import { NotificationContent as _NotificationContent } from './notification/notificationContent';
import { NotificationLongTextContent as _NotificationLongTextContent } from './notification/notificationContent';
import { NotificationMultiLineContent as _NotificationMultiLineContent } from './notification/notificationContent';
import { NotificationPictureContent as _NotificationPictureContent } from './notification/notificationContent';
import { NotificationSystemLiveViewContent as _NotificationSystemLiveViewContent } from './notification/notificationContent';
import { NotificationCapsule as _NotificationCapsule } from './notification/notificationContent';
import { NotificationButton as _NotificationButton } from './notification/notificationContent';
import { NotificationTime as _NotificationTime } from './notification/notificationContent';
import { NotificationProgress as _NotificationProgress } from './notification/notificationContent';
import { NotificationRequest as _NotificationRequest } from './notification/notificationRequest';
import { DistributedOptions as _DistributedOptions } from './notification/notificationRequest';
import { NotificationSlot as _NotificationSlot } from './notification/notificationSlot';
import { NotificationTemplate as _NotificationTemplate } from './notification/notificationTemplate';
import { NotificationUserInput as _NotificationUserInput } from './notification/notificationUserInput';
import type UIAbilityContext from './application/UIAbilityContext';
/**
 * The NotificationManager module provides notification management capabilities, covering notifications,
 * notification slots, notification enabled status, and notification badge status.
 *
 * @namespace notificationManager
 * @syscap SystemCapability.Notification.Notification
 * @since 9
 */
/**
 * The NotificationManager module provides notification management capabilities, covering notifications,
 * notification slots, notification enabled status, and notification badge status.
 *
 * @namespace notificationManager
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare namespace notificationManager {
    /**
     * Publish a notification. This API uses an asynchronous callback to return the result.
     * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
     *
     * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600005 - Notification slot disabled.
     * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Publish a notification. This API uses an asynchronous callback to return the result.
     * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
     *
     * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600005 - Notification slot disabled.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
     * @throws { BusinessError } 1600012 - No memory space.
     * @throws { BusinessError } 1600014 - No permission.
     * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
     * @throws { BusinessError } 1600016 - The notification version for this update is too low.
     * @throws { BusinessError } 2300007 - Network unreachable.
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Publish a notification. This API uses an asynchronous callback to return the result.
     * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
     *
     * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600005 - Notification slot disabled.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
     * @throws { BusinessError } 1600012 - No memory space.
     * @throws { BusinessError } 1600014 - No permission.
     * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
     * @throws { BusinessError } 1600016 - The notification version for this update is too low.
     * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
     * @throws { BusinessError } 2300007 - Network unreachable.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    function publish(request: NotificationRequest, callback: AsyncCallback<void>): void;
    /**
     * Publish a notification. This API uses a promise to return the URI of the file in the destination directory.
     * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
     *
     * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600005 - Notification slot disabled.
     * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Publish a notification. This API uses a promise to return the URI of the file in the destination directory.
     * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
     *
     * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600005 - Notification slot disabled.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
     * @throws { BusinessError } 1600012 - No memory space.
     * @throws { BusinessError } 1600014 - No permission.
     * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
     * @throws { BusinessError } 1600016 - The notification version for this update is too low.
     * @throws { BusinessError } 2300007 - Network unreachable.
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Publish a notification. This API uses a promise to return the URI of the file in the destination directory.
     * If the ID and label of the new notification are the same as that of the previous notification, the new one replaces the previous one.
     *
     * @param { NotificationRequest } request - Content and related configuration of the notification to publish.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600005 - Notification slot disabled.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @throws { BusinessError } 1600009 - The notification sending frequency reaches the upper limit.
     * @throws { BusinessError } 1600012 - No memory space.
     * @throws { BusinessError } 1600014 - No permission.
     * @throws { BusinessError } 1600015 - The current notification status does not support duplicate configurations.
     * @throws { BusinessError } 1600016 - The notification version for this update is too low.
     * @throws { BusinessError } 1600020 - The application is not allowed to send notifications due to permission settings.
     * @throws { BusinessError } 2300007 - Network unreachable.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    function publish(request: NotificationRequest): Promise<void>;
    /**
     * Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.
     *
     * @param { number } id - Notification ID.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Cancels a notification with the specified ID. This API uses an asynchronous callback to return the result.
     *
     * @param { number } id - Notification ID.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    function cancel(id: number, callback: AsyncCallback<void>): void;
    /**
     * Cancels a notification with the specified ID and label. This API uses an asynchronous callback to return the result.
     *
     * @param { number } id - Notification ID.
     * @param { string } label - Notification label.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function cancel(id: number, label: string, callback: AsyncCallback<void>): void;
    /**
     * Cancels a notification with the specified ID and optional label. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { number } id - Notification ID.
     * @param { string } [label] - Notification label. This parameter is left empty by default.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600007 - The notification does not exist.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function cancel(id: number, label?: string): Promise<void>;
    /**
     * Cancels all notifications of this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Cancels all notifications of this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    function cancelAll(callback: AsyncCallback<void>): void;
    /**
     * Cancels all notifications of this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Cancels all notifications of this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    function cancelAll(): Promise<void>;
    /**
     * Adds a notification slot of a specified type. This API uses an asynchronous callback to return the result.
     *
     * @param { SlotType } type - Type of the notification slot to add.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function addSlot(type: SlotType, callback: AsyncCallback<void>): void;
    /**
     * Adds a notification slot of a specified type. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { SlotType } type - Type of the notification slot to add.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function addSlot(type: SlotType): Promise<void>;
    /**
     * Obtains a notification slot of a specified type. This API uses an asynchronous callback to return the result.
     *
     * @param { SlotType } slotType - Type of a notification slot, including social communication, service notification, and content consultation.
     * @param { AsyncCallback<NotificationSlot> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getSlot(slotType: SlotType, callback: AsyncCallback<NotificationSlot>): void;
    /**
     * Obtains a notification slot of a specified type. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { SlotType } slotType - Type of a notification slot, including social communication, service notification, and content consultation.
     * @returns { Promise<NotificationSlot> } Promise used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getSlot(slotType: SlotType): Promise<NotificationSlot>;
    /**
     * Obtains all notification slots of this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<NotificationSlot>> } callback - Callback used to return all notification slots of the current application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getSlots(callback: AsyncCallback<Array<NotificationSlot>>): void;
    /**
     * Obtains all notification slots of this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<Array<NotificationSlot>> } Promise used to return all notification slots of the current application.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getSlots(): Promise<Array<NotificationSlot>>;
    /**
     * Removes a notification slot of a specified type for this application. This API uses an asynchronous callback to return the result.
     *
     * @param { SlotType } slotType - Type of a notification slot, including social communication, service notification, and content consultation.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function removeSlot(slotType: SlotType, callback: AsyncCallback<void>): void;
    /**
     * Removes a notification slot of a specified type for this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { SlotType } slotType - Type of a notification slot, including social communication, service notification, and content consultation.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function removeSlot(slotType: SlotType): Promise<void>;
    /**
     * Removes all notification slots for this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function removeAllSlots(callback: AsyncCallback<void>): void;
    /**
     * Removes all notification slots for this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function removeAllSlots(): Promise<void>;
    
    /**
     * Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the
     *                                              notification is enabled, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600008 - The user does not exist.
     * @throws { BusinessError } 17700001 - The specified bundle name was not found.
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Checks whether notification is enabled for the specified application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the
     *                                              notification is enabled, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600008 - The user does not exist.
     * @throws { BusinessError } 17700001 - The specified bundle name was not found.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    function isNotificationEnabled(callback: AsyncCallback<boolean>): void;
    
    /**
     * Checks whether notification is enabled for the specified application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value true means that the notification is enabled, and false means the opposite.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600008 - The user does not exist.
     * @throws { BusinessError } 17700001 - The specified bundle name was not found.
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Checks whether notification is enabled for the specified application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value true means that the notification is enabled, and false means the opposite.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600008 - The user does not exist.
     * @throws { BusinessError } 17700001 - The specified bundle name was not found.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    function isNotificationEnabled(): Promise<boolean>;
    /**
     * Synchronously checks whether notification is enabled for the specified application.
     *
     * @returns { boolean } Returned result. true: enabled; false: returned.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 12
     */
    function isNotificationEnabledSync(): boolean;
    /**
     * Obtains the number of active notifications of this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<number> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getActiveNotificationCount(callback: AsyncCallback<number>): void;
    /**
     * Obtains the number of active notifications of this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<number> } Promise used to return the result.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getActiveNotificationCount(): Promise<number>;
    /**
     * Obtains the active notifications of this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<NotificationRequest>> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getActiveNotifications(callback: AsyncCallback<Array<NotificationRequest>>): void;
    /**
     * Obtains the active notifications of this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<Array<NotificationRequest>> } Promise used to return the result.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function getActiveNotifications(): Promise<Array<NotificationRequest>>;
    /**
     * Cancels notifications under a notification group of this application. This API uses an asynchronous callback to return the result.
     *
     * @param { string } groupName - Name of the notification group, which is specified through NotificationRequest when the notification is published.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function cancelGroup(groupName: string, callback: AsyncCallback<void>): void;
    /**
     * Cancels notifications under a notification group of this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { string } groupName - Name of the notification group, which is specified through NotificationRequest when the notification is published.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function cancelGroup(groupName: string): Promise<void>;
    /**
     * Checks whether a specified template is supported. This API uses an asynchronous callback to return the result.
     *
     * @param { string } templateName - Template name. Currently, only downloadTemplate is supported.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that the
     *                                              specified template is supported, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function isSupportTemplate(templateName: string, callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether a specified template is supported. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { string } templateName - Template name. Currently, only downloadTemplate is supported.
     * @returns { Promise<boolean> } Promise used to return the result. The value true means that the specified template
     *                               is supported, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function isSupportTemplate(templateName: string): Promise<boolean>;
    /**
     * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Requests notification to be enabled for this application. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     * @deprecated since 12
     * @useinstead requestEnableNotification
     */
    function requestEnableNotification(callback: AsyncCallback<void>): void;
    /**
     * Requests notification to be enabled for this application in a modal. This API uses an asynchronous callback to return the result.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @StageModelOnly
     * @since 10
     */
    /**
     * Requests notification to be enabled for this application in a modal. This API uses an asynchronous callback to return the result.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @StageModelOnly
     * @since 11
     */
    /**
     * Requests notification to be enabled for this application in a modal. This API uses an asynchronous callback to return the result.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @StageModelOnly
     * @crossplatform
     * @since 12
     */
    function requestEnableNotification(context: UIAbilityContext, callback: AsyncCallback<void>): void;
    /**
     * Requests notification to be enabled for this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Requests notification to be enabled for this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Requests notification to be enabled for this application. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     * @deprecated since 12
     * @useinstead requestEnableNotification
     */
    function requestEnableNotification(): Promise<void>;
    /**
     * Requests notification to be enabled for this application in a modal. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @StageModelOnly
     * @since 10
     */
    /**
     * Requests notification to be enabled for this application in a modal. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @StageModelOnly
     * @since 11
     */
    /**
     * Requests notification to be enabled for this application in a modal. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification dialog box.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600004 - Notification disabled.
     * @throws { BusinessError } 1600013 - A notification dialog box is already displayed.
     * @syscap SystemCapability.Notification.Notification
     * @StageModelOnly
     * @crossplatform
     * @since 12
     */
    function requestEnableNotification(context: UIAbilityContext): Promise<void>;
    /**
     * Checks whether distributed notification is enabled on this device. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value true means that
     *                                              distributed notification is enabled, and false means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600010 - Distributed operation failed.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function isDistributedEnabled(callback: AsyncCallback<boolean>): void;
    /**
     * Checks whether distributed notification is enabled on this device. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value true means that distributed notification
     *                               is enabled, and false means the opposite.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600010 - Distributed operation failed.
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    function isDistributedEnabled(): Promise<boolean>;
    /**
     * Sets the notification badge number. This API uses an asynchronous callback to return the result.
     * If the badgeNumber is set to 0, badges are cleared; if the value is greater than 99, 99+ is displayed on the badge.
     *
     * @param { number } badgeNumber - Notification badge number to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @since 10
     */
    /**
     * Sets the notification badge number. This API uses an asynchronous callback to return the result.
     * If the badgeNumber is set to 0, badges are cleared; if the value is greater than 99, 99+ is displayed on the badge.
     *
     * @param { number } badgeNumber - Notification badge number to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    /**
     * Sets the notification badge number. This API uses an asynchronous callback to return the result.
     * If the badgeNumber is set to 0, badges are cleared; if the value is greater than 99, 99+ is displayed on the badge.
     *
     * @param { number } badgeNumber - Notification badge number to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 18
     */
    function setBadgeNumber(badgeNumber: number, callback: AsyncCallback<void>): void;
    /**
     * Sets the notification badge number. This API uses a promise to return the URI of the file in the destination directory.
     * If the badgeNumber is set to 0, badges are cleared; if the value is greater than 99, 99+ is displayed on the badge.
     *
     * @param { number } badgeNumber - Notification badge number to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @since 10
     */
    /**
     * Sets the notification badge number. This API uses a promise to return the URI of the file in the destination directory.
     * If the badgeNumber is set to 0, badges are cleared; if the value is greater than 99, 99+ is displayed on the badge.
     *
     * @param { number } badgeNumber - Notification badge number to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    /**
     * Sets the notification badge number. This API uses a promise to return the URI of the file in the destination directory.
     * If the badgeNumber is set to 0, badges are cleared; if the value is greater than 99, 99+ is displayed on the badge.
     *
     * @param { number } badgeNumber - Notification badge number to set.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     * <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600012 - No memory space.
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 18
     */
    function setBadgeNumber(badgeNumber: number): Promise<void>;
    /**
     * Obtains a notification setting of the calling application.
     *
     * @returns { Promise<NotificationSetting> } Returns notificationsetting of this application.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600002 - Marshalling or unmarshalling error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @syscap SystemCapability.Notification.Notification
     * @since 20
     */
    function getNotificationSetting(): Promise<NotificationSetting>;
    /**
     * Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set
     * the notification enabling and notification mode. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600018 - the notification settings window is already displayed.
     * @syscap SystemCapability.Notification.NotificationSettings
     * @stagemodelonly
     * @since 13
     */
    /**
     * Opens the notification settings page of the application, which is displayed in semi-modal mode and can be used to set
     * the notification enabling and notification mode. This API uses a promise to return the URI of the file in the destination directory.
     *
     * @param { UIAbilityContext } context - Ability context bound to the notification settings page.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1600001 - Internal error.
     * @throws { BusinessError } 1600003 - Failed to connect to the service.
     * @throws { BusinessError } 1600018 - the notification settings window is already displayed.
     * @syscap SystemCapability.Notification.NotificationSettings
     * @stagemodelonly
     * @since 18
     */
    function openNotificationSettings(context: UIAbilityContext): Promise<void>;
    /**
     * Describes a NotificationSetting instance.
     *
     * @typedef NotificationSetting
     * @syscap SystemCapability.Notification.Notification
     * @since 20
     */
    export interface NotificationSetting {
        /**
         * Indicates whether vibration is enabled.
         *
         * @type { boolean }
         * @syscap SystemCapability.Notification.Notification
         * @since 20
         */
        vibrationEnabled: boolean;
        /**
         * Indicates whether sound is enabled.
         *
         * @type { boolean }
         * @syscap SystemCapability.Notification.Notification
         * @since 20
         */
        soundEnabled: boolean;
    }
    /**
     * Enumerates the notification slot types.
     *
     * @enum { number }
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Enumerates the notification slot types.
     *
     * @enum { number }
     * @syscap SystemCapability.Notification.Notification
     * @atomicservice
     * @since 12
     */
    export enum SlotType {
        /**
         * Unknown type. This type corresponds to SlotLevel being LEVEL_MIN.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Unknown type. This type corresponds to SlotLevel being LEVEL_MIN.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        UNKNOWN_TYPE = 0,
        /**
         * Notification slot for social communication. This type corresponds to SlotLevel being LEVEL_HIGH.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Notification slot for social communication. This type corresponds to SlotLevel being LEVEL_HIGH.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        SOCIAL_COMMUNICATION = 1,
        /**
         * Notification slot for service information. This type corresponds to SlotLevel being LEVEL_HIGH.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Notification slot for service information. This type corresponds to SlotLevel being LEVEL_HIGH.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        SERVICE_INFORMATION = 2,
        /**
         * Notification slot for content consultation. This type corresponds to SlotLevel being LEVEL_MIN.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Notification slot for content consultation. This type corresponds to SlotLevel being LEVEL_MIN.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        CONTENT_INFORMATION = 3,
        /**
         * Live view. A third-party application cannot directly create a notification of this slot type. After the system proxy creates a system live view,
         * the third-party application releases a notification with the same ID to update the specified content.
         * This type corresponds to SlotLevel being LEVEL_DEFAULT.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 11
         */
        /**
         * Live view. A third-party application cannot directly create a notification of this slot type. After the system proxy creates a system live view,
         * the third-party application releases a notification with the same ID to update the specified content.
         * This type corresponds to SlotLevel being LEVEL_DEFAULT.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        LIVE_VIEW = 4,
        /**
         * Customer service message. This type is used for messages between users and customer service providers. The messages must be initiated by users.
         * This type corresponds to SlotLevel being LEVEL_DEFAULT.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 11
         */
        /**
         * Customer service message. This type is used for messages between users and customer service providers. The messages must be initiated by users.
         * This type corresponds to SlotLevel being LEVEL_DEFAULT.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        CUSTOMER_SERVICE = 5,
        /**
         * Notification slot for other purposes. This type corresponds to SlotLevel being LEVEL_MIN.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Notification slot for other purposes. This type corresponds to SlotLevel being LEVEL_MIN.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        OTHER_TYPES = 0xFFFF
    }
    /**
     * Enumerates the notification content types.
     *
     * @enum { number }
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Enumerates the notification content types.
     *
     * @enum { number }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    export enum ContentType {
        /**
         * Normal text notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Normal text notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        NOTIFICATION_CONTENT_BASIC_TEXT,
        /**
         * Long text notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Long text notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        NOTIFICATION_CONTENT_LONG_TEXT,
        /**
         * Picture-attached notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Picture-attached notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        NOTIFICATION_CONTENT_PICTURE,
        /**
         * Conversation notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Conversation notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        NOTIFICATION_CONTENT_CONVERSATION,
        /**
         * Multi-line text notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        /**
         * Multi-line text notification.
         *
         * @syscap SystemCapability.Notification.Notification
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        NOTIFICATION_CONTENT_MULTILINE,
        /**
         * Live view notification. A third-party application cannot directly create a notification of this type.
         * After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 11
         */
        /**
         * Live view notification. A third-party application cannot directly create a notification of this type.
         * After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        NOTIFICATION_CONTENT_SYSTEM_LIVE_VIEW,
        /**
         * Common live view notification. Only system applications are supported.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 11
         */
        /**
         * Common live view notification. Only system applications are supported.
         *
         * @syscap SystemCapability.Notification.Notification
         * @atomicservice
         * @since 12
         */
        NOTIFICATION_CONTENT_LIVE_VIEW
    }
    /**
     * Enumerates the notification level.
     *
     * @enum { number }
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export enum SlotLevel {
        /**
         * Notification is disabled.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        LEVEL_NONE = 0,
        /**
         * Notification is enabled, but the notification icon is not displayed in the status bar, with no banner and alert tone.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        LEVEL_MIN = 1,
        /**
         * Notification is enabled, and the notification icon is displayed in the status bar, with no banner and alert tone.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        LEVEL_LOW = 2,
        /**
         * Notification is enabled, and the notification icon is displayed in the status bar, with an alert tone but no banner.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        LEVEL_DEFAULT = 3,
        /**
         * Notification is enabled, and the notification icon is displayed in the status bar, with an alert tone and banner.
         *
         * @syscap SystemCapability.Notification.Notification
         * @since 9
         */
        LEVEL_HIGH = 4
    }
    /**
     * Describes a bundleOption in a notification.
     *
     * @typedef { _BundleOption } BundleOption
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export type BundleOption = _BundleOption;
    /**
     * Describes an action button displayed in a notification.
     *
     * @typedef { _NotificationActionButton } NotificationActionButton
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export type NotificationActionButton = _NotificationActionButton;
    /**
     * Describes a normal text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Describes a normal text notification.
     *
     * @typedef { _NotificationBasicContent } NotificationBasicContent
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    export type NotificationBasicContent = _NotificationBasicContent;
    /**
     * Describes notification types.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Describes notification types.
     *
     * @typedef { _NotificationContent } NotificationContent
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    export type NotificationContent = _NotificationContent;
    /**
     * Describes a long text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Describes a long text notification.
     *
     * @typedef { _NotificationLongTextContent } NotificationLongTextContent
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    export type NotificationLongTextContent = _NotificationLongTextContent;
    /**
     * Describes a multi-line text notification.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Describes a multi-line text notification.
     *
     * @typedef { _NotificationMultiLineContent } NotificationMultiLineContent
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    export type NotificationMultiLineContent = _NotificationMultiLineContent;
    /**
     * Describes a picture-attached notification.
     *
     * @typedef { _NotificationPictureContent } NotificationPictureContent
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export type NotificationPictureContent = _NotificationPictureContent;
    /**
     * Describes a system live view notification.
     *
     * @typedef { _NotificationSystemLiveViewContent } NotificationSystemLiveViewContent
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    export type NotificationSystemLiveViewContent = _NotificationSystemLiveViewContent;
    /**
     * Defines a NotificationRequest instance.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    /**
     * Defines a NotificationRequest instance.
     *
     * @typedef { _NotificationRequest } NotificationRequest
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    export type NotificationRequest = _NotificationRequest;
    /**
     * Describes distributed options.
     *
     * @typedef { _DistributedOptions } DistributedOptions
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export type DistributedOptions = _DistributedOptions;
    /**
     * Describes a NotificationSlot instance.
     *
     * @typedef { _NotificationSlot } NotificationSlot
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export type NotificationSlot = _NotificationSlot;
    /**
     * Describes a NotificationTemplate instance.
     *
     * @typedef { _NotificationTemplate } NotificationTemplate
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export type NotificationTemplate = _NotificationTemplate;
    /**
     * Describes a NotificationUserInput instance.
     *
     * @typedef { _NotificationUserInput } NotificationUserInput
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    export type NotificationUserInput = _NotificationUserInput;
    /**
     * Describes a system live view capsule type.
     *
     * @typedef { _NotificationCapsule } NotificationCapsule
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    export type NotificationCapsule = _NotificationCapsule;
    /**
     * Describes a system live view button type.
     *
     * @typedef { _NotificationButton } NotificationButton
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    export type NotificationButton = _NotificationButton;
    /**
     * Describes a system live view time type.
     *
     * @typedef { _NotificationTime } NotificationTime
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    export type NotificationTime = _NotificationTime;
    /**
     * Describes a system live view progress type.
     *
     * @typedef { _NotificationProgress } NotificationProgress
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    export type NotificationProgress = _NotificationProgress;
}
export default notificationManager;
