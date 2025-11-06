/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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
 * @file The NotificationContent module provides APIs for defining the notification content.
 * @kit NotificationKit
 */
import notification from '../@ohos.notification';
import image from '../@ohos.multimedia.image';
import { Resource } from '../global/resource';
import type notificationManager from '../@ohos.notificationManager';
/**
 * Describes a normal text notification.
 *
 * @typedef NotificationBasicContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes a normal text notification.
 *
 * @typedef NotificationBasicContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationBasicContent {
    /**
     * Notification title. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Notification title. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    title: string;
    /**
     * Notification content. It cannot be empty or exceed 3072 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Notification content. It cannot be empty or exceed 3072 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    text: string;
    /**
     * Additional information of the notification. It cannot exceed 3072 bytes. Excess content will be truncated.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    additionalText?: string;
    /**
     * Picture of a notification displayed on the lock screen. Currently, only the live view notification is supported.
     * The total number of the icon pixel bytes cannot exceed 192 KB (which is obtained through getPixelBytesNumber.
     * The recommended icon size is 128 × 128 pixels.
     * The display effect depends on the device capability and notification center UI style.
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Notification.Notification
     * @since 12
     */
    lockscreenPicture?: image.PixelMap;
}
/**
 * Describes the long text notification. This API is inherited from NotificationBasicContent.
 *
 * @typedef NotificationLongTextContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes the long text notification. This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationLongTextContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationLongTextContent extends NotificationBasicContent {
    /**
     * Long text of the notification. It cannot be an empty string and exceed 3072 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Long text of the notification. It cannot be an empty string and exceed 3072 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    longText: string;
    /**
     * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    briefText: string;
    /**
     * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    expandedTitle: string;
}
/**
 * Describes the multi-line text notification. This API is inherited from NotificationBasicContent.
 *
 * @typedef NotificationMultiLineContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes the multi-line text notification. This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationMultiLineContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationMultiLineContent extends NotificationBasicContent {
    /**
     * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    briefText: string;
    /**
     * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    longTitle: string;
    /**
     * Multi-line text of the notification. It cannot exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Multi-line text of the notification. It cannot exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    lines: Array<string>;
}
/**
 * Describes the picture-attached notification. This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationPictureContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
export interface NotificationPictureContent extends NotificationBasicContent {
    /**
     * Brief text of the notification. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    briefText: string;
    /**
     * Title of the notification in the expanded state. It cannot be empty or exceed 1024 bytes. Excess content will be truncated.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    expandedTitle: string;
    /**
     * Picture content of the notification. (The total number of bytes of image pixels cannot exceed 2 MB.)
     *
     * @type { image.PixelMap }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    picture: image.PixelMap;
}
/**
 * Describes the system live view notification. A third-party application cannot directly create a notification of this type.
 * After the system proxy creates a system live view, the third-party application releases a notification with the same ID to update the specified content.
 * This API is inherited from NotificationBasicContent.
 *
 * @extends NotificationBasicContent
 * @typedef NotificationSystemLiveViewContent
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationSystemLiveViewContent extends NotificationBasicContent {
    /**
     * Type code, which identifies the type of the service that invokes the API.
     *
     * @type { number }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    typeCode: number;
    /**
     * Capsule of the notification.
     *
     * @type { ?NotificationCapsule }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    capsule?: NotificationCapsule;
    /**
     * Button in the notification.
     *
     * @type { ?NotificationButton }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    button?: NotificationButton;
    /**
     * Time of the notification.
     *
     * @type { ?NotificationTime }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    time?: NotificationTime;
    /**
     * Progress of the notification.
     *
     * @type { ?NotificationProgress }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    progress?: NotificationProgress;
}
/**
 * Describe the notification capsule.
 *
 * @typedef NotificationCapsule
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationCapsule {
    /**
     * Title of the capsule.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    title?: string;
    /**
     * Icon of the capsule.
     *
     * @type { ?image.PixelMap }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    icon?: image.PixelMap;
    /**
     * Background color of the capsule.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    backgroundColor?: string;
}
/**
 * Describes a system live view button with icon.
 *
 * @typedef NotificationIconButton
 * @syscap SystemCapability.Notification.Notification
 * @since 18
 */
export interface NotificationIconButton {
}
/**
 * Describes the notification button.
 *
 * @typedef NotificationButton
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationButton {
    /**
     * Button names. A maximum of three names are supported.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    names?: Array<string>;
    /**
     * Button icons. A maximum of three icons are supported.
     *
     * @type { ?Array<image.PixelMap> }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    icons?: Array<image.PixelMap>;
    /**
     * Button icon resources. A maximum of three icon resources are supported.
     *
     * @type { ?Array<Resource> }
     * @syscap SystemCapability.Notification.Notification
     * @since 12
     */
    iconsResource?: Array<Resource>;
}
/**
 * Describes the notification timing information.
 *
 * @typedef NotificationTime
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationTime {
    /**
     * Start time, in milliseconds.
     *
     * @type { ?number }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    initialTime?: number;
    /**
     * Whether to count down.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    isCountDown?: boolean;
    /**
     * Whether to pause the progress.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    isPaused?: boolean;
    /**
     * Whether the time is displayed in the title.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    isInTitle?: boolean;
}
/**
 * Describes the notification progress.
 *
 * @typedef NotificationProgress
 * @syscap SystemCapability.Notification.Notification
 * @since 11
 */
export interface NotificationProgress {
    /**
     * Maximum progress value.
     *
     * @type { ?number }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    maxValue?: number;
    /**
     * Current progress value.
     *
     * @type { ?number }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    currentValue?: number;
    /**
     * Whether to show the progress in percentage.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    isPercentage?: boolean;
}
/**
 * Describes the notification contents.
 *
 * @typedef NotificationContent
 * @syscap SystemCapability.Notification.Notification
 * @since 7
 */
/**
 * Describes the notification contents.
 *
 * @typedef NotificationContent
 * @syscap SystemCapability.Notification.Notification
 * @crossplatform
 * @since 12
 */
export interface NotificationContent {
    /**
     * Notification content type.
     *
     * @type { ?notification.ContentType }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     * @deprecated since 11
     * @useinstead NotificationContent#notificationContentType
     */
    contentType?: notification.ContentType;
    /**
     * Notification content type.
     *
     * @type { ?notificationManager.ContentType }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    /**
     * Notification content type.
     *
     * @type { ?notificationManager.ContentType }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    notificationContentType?: notificationManager.ContentType;
    /**
     * Normal text.
     *
     * @type { ?NotificationBasicContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Normal text.
     *
     * @type { ?NotificationBasicContent }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    normal?: NotificationBasicContent;
    /**
     * Long text.
     *
     * @type { ?NotificationLongTextContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Long text.
     *
     * @type { ?NotificationLongTextContent }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    longText?: NotificationLongTextContent;
    /**
     * Multi-line text.
     *
     * @type { ?NotificationMultiLineContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    /**
     * Multi-line text.
     *
     * @type { ?NotificationMultiLineContent }
     * @syscap SystemCapability.Notification.Notification
     * @crossplatform
     * @since 12
     */
    multiLine?: NotificationMultiLineContent;
    /**
     * Picture-attached.
     *
     * @type { ?NotificationPictureContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 7
     */
    picture?: NotificationPictureContent;
    /**
     * System live view. A third-party application cannot directly create a notification of this type. After the system proxy creates a system live view,
     * the third-party application releases a notification with the same ID to update the specified content.
     *
     * @type { ?NotificationSystemLiveViewContent }
     * @syscap SystemCapability.Notification.Notification
     * @since 11
     */
    systemLiveView?: NotificationSystemLiveViewContent;
}
