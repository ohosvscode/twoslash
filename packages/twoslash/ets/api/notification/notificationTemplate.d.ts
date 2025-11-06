/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @file The NotificationTemplate module describes the notification template.
 * @kit NotificationKit
 */
/**
 * The NotificationTemplate module describes the notification template.
 *
 * @typedef NotificationTemplate
 * @syscap SystemCapability.Notification.Notification
 * @since 8
 */
export interface NotificationTemplate {
    /**
     * Template name. Currently, only downloadTemplate is supported.
     *
     * @type { string }
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    name: string;
    /**
     * Template data.
     * - title: title of the file. This parameter is mandatory, and the value is of the string type.
     * - fileName: name of the file to be downloaded. This parameter is mandatory, and the value is of the string type.
     * - progressValue: download progress. The value is a number.
     *
     * @type { Record<string, Object> }
     * @syscap SystemCapability.Notification.Notification
     * @since 8
     */
    data: Record<string, Object>;
}
