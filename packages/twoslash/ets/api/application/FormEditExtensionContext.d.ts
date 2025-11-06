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
 * @kit FormKit
 */
import UIExtensionContext from './UIExtensionContext';
import type Want from '../@ohos.app.ability.Want';
import type { AbilityResult } from '../ability/abilityResult';
/**
 * The context of form edit extension. It allows access to
 * formEditExtension-specific resources.
 *
 * @extends UIExtensionContext
 * @syscap SystemCapability.Ability.Form
 * @stagemodelonly
 * @since 18
 */
export default class FormEditExtensionContext extends UIExtensionContext {
    /**
     * Start second editor extension ability.
     *
     * @param { Want } want - Including second extension ability name.
     * @returns { Promise<AbilityResult> } Returns the result of start second form editor extension ability.
     * @throws { BusinessError } 202 - The application is not a system application.
     * @throws { BusinessError } 16500050 - An IPC connection error happened.
     * @throws { BusinessError } 16500100 - Failed to obtain the configuration information.
     * @throws { BusinessError } 16501000 - An internal functional error occurred.
     * @syscap SystemCapability.Ability.Form
     * @stagemodelonly
     * @since 18
     */
    startSecondPage(want: Want): Promise<AbilityResult>;
}
