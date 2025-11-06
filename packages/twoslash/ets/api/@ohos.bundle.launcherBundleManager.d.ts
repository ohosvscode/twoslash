/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

import { LauncherAbilityInfo as _LauncherAbilityInfo } from './bundleManager/LauncherAbilityInfo';
/**
 * Launcher bundle manager.
 *
 * @namespace launcherBundleManager
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 18
 */
declare namespace launcherBundleManager {
    /**
     * Obtains launcher abilities info based on a given bundleName and userId.
     *
     * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
     * @param { string } bundleName - Indicates the application bundle name to be queried.
     * @param { number } userId - Indicates the id for the user.
     * @returns { Array<LauncherAbilityInfo> } the LauncherAbilityInfo object.
     * @throws { BusinessError } 201 - Verify permission denied.
     * @throws { BusinessError } 801 - Capability not support.
     * @throws { BusinessError } 17700001 - The specified bundle name is not found.
     * @throws { BusinessError } 17700004 - The specified user ID is not found.
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    function getLauncherAbilityInfoSync(bundleName: string, userId: number): Array<LauncherAbilityInfo>;
    /**
     * Contains basic launcher Ability information, which uniquely identifies an LauncherAbilityInfo.
     *
     * @typedef { _LauncherAbilityInfo }
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    export type LauncherAbilityInfo = _LauncherAbilityInfo;
}
export default launcherBundleManager;
