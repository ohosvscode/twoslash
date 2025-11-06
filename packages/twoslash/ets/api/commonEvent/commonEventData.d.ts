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
 * @file Common event data.
 * @kit BasicServicesKit
 */
/**
 * Common event data.
 *
 * @typedef CommonEventData
 * @syscap SystemCapability.Notification.CommonEvent
 * @since 7
 */
/**
 * Common event data.
 *
 * @typedef CommonEventData
 * @syscap SystemCapability.Notification.CommonEvent
 * @crossplatform
 * @atomicservice
 * @since 11
 */
export interface CommonEventData {
    /**
     * Name of the common event that is being received.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Name of the common event that is being received.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    event: string;
    /**
     * Bundle name. This parameter is left empty by default.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Bundle name. This parameter is left empty by default.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    bundleName?: string;
    /**
     * Common event data received by the subscriber. The value of this field is the same as that of the code field in
     * CommonEventPublishData when the publisher uses commonEventManager.publish to publish a common event. The default value is 0.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Common event data received by the subscriber. The value of this field is the same as that of the code field in
     * CommonEventPublishData when the publisher uses commonEventManager.publish to publish a common event. The default value is 0.
     *
     * @type { ?number }
     * @default 0
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    code?: number;
    /**
     * Common event data received by the subscriber. The value of this field is the same as that of the data field in
     * CommonEventPublishData when the publisher uses commonEventManager.publish to publish a common event.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Common event data received by the subscriber. The value of this field is the same as that of the data field in
     * CommonEventPublishData when the publisher uses commonEventManager.publish to publish a common event.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @atomicservice
     * @since 11
     */
    /**
     * Common event data received by the subscriber. The value of this field is the same as that of the data field in
     * CommonEventPublishData when the publisher uses commonEventManager.publish to publish a common event.
     *
     * @type { ?string }
     * @syscap SystemCapability.Notification.CommonEvent
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    data?: string;
    /**
     * Additional information about the common event received by the subscriber. The value of this field is the same as
     * that of the parameters field in CommonEventPublishData when the publisher uses commonEventManager.publish to publish a common event.
     *
     * @type { ?object }
     * @syscap SystemCapability.Notification.CommonEvent
     * @since 7
     */
    /**
     * Additional information about the common event received by the subscriber. The value of this field is the same as
     * that of the parameters field in CommonEventPublishData when the publisher uses commonEventManager.publish to publish a common event.
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
