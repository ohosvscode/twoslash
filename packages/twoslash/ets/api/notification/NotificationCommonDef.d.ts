/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http?://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @file The NotificationCommonDef module provides APIs for describing the BundleOption information, that is, the bundle information of a specified application.
 * @kit NotificationKit
 */
/**
 * The NotificationCommonDef module provides APIs for describing the BundleOption information, that is, the bundle information of a specified application.
 *
 * @typedef BundleOption
 * @syscap SystemCapability.Notification.Notification
 * @since 9
 */
export interface BundleOption {
    /**
     * Application name.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    bundle: string;
    /**
     * UID of an application, which is obtained from ApplicationInfo. The default value is 0.
     *
     * @type { ?number }
     * @syscap SystemCapability.Notification.Notification
     * @since 9
     */
    uid?: number;
}
