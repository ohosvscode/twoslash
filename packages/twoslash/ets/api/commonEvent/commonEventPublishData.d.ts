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
 * @file The CommonEventPublishData module provides APIs for defining common event content and attributes.
 * @kit BasicServicesKit
 */
/**
 * The CommonEventPublishData module provides APIs for defining common event content and attributes.
 *
 * @typedef CommonEventPublishData
 * @syscap SystemCapability.Notification.CommonEvent
 * @since 7
 */
/**
 * The CommonEventPublishData module provides APIs for defining common event content and attributes.
 *
 * @typedef CommonEventPublishData
 * @syscap SystemCapability.Notification.CommonEvent
 * @atomicservice
 * @since 11
 */
/**
 * The CommonEventPublishData module provides APIs for defining common event content and attributes.
 *
 * @typedef CommonEventPublishData
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform
 * @atomicservice
 * @since 12
 */
export interface CommonEventPublishData {
    /**
     * Bundle name of the subscriber that can receive the common event.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Bundle name of the subscriber that can receive the common event.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    bundleName?: string;
    /**
     * Common event data transferred by the publisher. The default value is 0.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Common event data transferred by the publisher. The default value is 0.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    code?: number;
    /**
     * Common event data transferred by the publisher. The data size cannot exceed 64 KB.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Common event data transferred by the publisher. The data size cannot exceed 64 KB.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    /**
     * Common event data transferred by the publisher. The data size cannot exceed 64 KB.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    data?: string;
    /**
     * Permissions required for subscribers to receive the common event.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Permissions required for subscribers to receive the common event.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    subscriberPermissions?: Array<string>;
    /**
     * Whether the common event is an ordered one.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    isOrdered?: boolean;
    /**
     * Whether the common event is a sticky one. Only system applications and system services are allowed to send sticky events.
     *
     * @permission ohos.permission.COMMONEVENT_STICKY
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    isSticky?: boolean;
    /**
     * Additional information about the common event transferred by the publisher.
     *
     * @type { ?object }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Additional information about the common event transferred by the publisher.
     *
     * @type { ?object }
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    parameters?: {
        [key: string]: any;
    };
}
