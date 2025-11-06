/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @file The NotificationSlot module provides APIs for defining the notification slot.
 * @kit NotificationKit
 */
import notification from '../@ohos.notification';
import type notificationManager from '../@ohos.notificationManager';
/**
 * The NotificationSlot module provides APIs for defining the notification slot.
 *
 * @typedef NotificationSlot
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationSlot {
    /**
     * Notification slot type.
     *
     * @type { ?notification.SlotType }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 11
     * @useinstead NotificationSlot#notificationType
     */
    type?: notification.SlotType;
    /**
     * Notification slot type.
     *
     * @type { ?notificationManager.SlotType }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    notificationType?: notificationManager.SlotType;
    /**
     * Notification level.
     *
     * @type { ?notification.SlotLevel }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    level?: notification.SlotLevel;
    /**
     * Notification slot description.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    desc?: string;
    /**
     * Whether to display the badge.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    badgeFlag?: boolean;
    /**
     * Whether to bypass DND mode in the system.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    bypassDnd?: boolean;
    /**
     * Mode for displaying the notification on the lock screen.
     *
     * @type { ?number }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    lockscreenVisibility?: number;
    /**
     * Whether to enable vibration for the notification.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    vibrationEnabled?: boolean;
    /**
     * Notification alert tone.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    sound?: string;
    /**
     * Whether the indicator blinks for the notification.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    lightEnabled?: boolean;
    /**
     * Indicator color of the notification.
     *
     * @type { ?number }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    lightColor?: number;
    /**
     * Vibration mode of the notification.
     *
     * @type { ?Array<number> }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    vibrationValues?: Array<number>;
    /**
     * Whether the notification slot is enabled. The value true means to enable the notification slot, and false means the opposite.
     *
     * @type { ?boolean }
     * @readonly
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    readonly enabled?: boolean;
}
