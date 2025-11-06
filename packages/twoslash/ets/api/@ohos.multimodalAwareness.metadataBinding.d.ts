/*
  * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @kit MultimodalAwarenessKit
 */

import type { Callback } from './@ohos.base';
/**
 * the moudle for metadataBinding
 * @namespace metadataBinding
 * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
 * @atomicservice
 * @since 18
 */
declare namespace metadataBinding {
    /**
     * set the Metadata to the screenshot app
     * @param { string } metadata - the Metadata of a Third-Party App
     * @throws { BusinessError } 32100001 - Internal handling failed. Set Meta data to screenshot app fail.
     * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
     * @atomicservice
     * @since 18
     */
    function submitMetadata(metadata: string): void;
    /**
     * Third-party app registration screenshot event
     * @param { 'operationSubmitMetadata' } type - Event Type
     * @param { string } bundleName - Bundle name of a third-party application
     * @param { Callback<number> } callback - Call back the screenshot event
     * @throws { BusinessError } 32100001 - Internal handling failed. Service exception.
     * @throws { BusinessError } 32100004 - Subscribe Failed. Possible causes: 1. Abnormal system capability; 2. IPC communication abnormality;
     * <br>3. Algorithm loading exception.
     * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
     * @atomicservice
     * @since 18
     */
    function on(type: 'operationSubmitMetadata', bundleName: string, callback: Callback<number>): void;
    /**
     * Third-party app unregistration screenshot event
     * @param { 'operationSubmitMetadata' } type - Event Type
     * @param { string } bundleName - Bundle name of a third-party application
     * @param { Callback<number> } callback - Call back the screenshot event
     * @throws { BusinessError } 32100001 - Internal handling failed. Service exception.
     * @throws { BusinessError } 32100005 - Unsubscribe Failed. Possible causes: 1. Abnormal system capability; 2. IPC communication abnormality
     * @syscap SystemCapability.MultimodalAwareness.MetadataBinding
     * @atomicservice
     * @since 18
     */
    function off(type: 'operationSubmitMetadata', bundleName: string, callback?: Callback<number>): void;
}
export default metadataBinding;
