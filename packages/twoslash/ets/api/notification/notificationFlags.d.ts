/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file The NotificationFlags module implements a NotificationFlags instance.
 * @kit NotificationKit
 */

/**
 * Enumerates the notification flag statuses.
 *
 * @enum { number }
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export enum NotificationFlagStatus {
    
    /**
     * The default flag is used. The effect is the same as that of TYPE_OPEN.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    TYPE_NONE = 0,
    
    /**
     * The notification flag is enabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    TYPE_OPEN = 1,
    
    /**
     * The notification flag is disabled.
     *
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    TYPE_CLOSE = 2
}
/**
 * Describes a NotificationFlags instance.
 *
 * @typedef NotificationFlags
 * @syscap SystemCapability.Notification.Notification
 * @since 8
 */
export interface NotificationFlags {
    /**
     * Whether to enable sound reminder.
     *
     * @type { ?NotificationFlagStatus }
     * @readonly
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    readonly soundEnabled?: NotificationFlagStatus;
    /**
     * Whether to enable vibration reminder.
     *
     * @type { ?NotificationFlagStatus }
     * @readonly
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    readonly vibrationEnabled?: NotificationFlagStatus;
}
