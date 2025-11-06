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
import { ApplicationInfo } from './ApplicationInfo';
import { ElementName } from './ElementName';
/**
 * Contains basic launcher Ability information, which uniquely identifies an LauncherAbilityInfo
 *
 * @typedef LauncherAbilityInfo
 * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
 * @since 18
 */
export interface LauncherAbilityInfo {
    /**
     * Obtains application info information about an launcher ability.
     *
     * @type { ApplicationInfo }
     * @readonly
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    readonly applicationInfo: ApplicationInfo;
    /**
     * Obtains element name about an launcher ability.
     *
     * @type { ElementName }
     * @readonly
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    readonly elementName: ElementName;
    /**
     * Obtains labelId about an launcher ability.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    readonly labelId: number;
    /**
     * Obtains iconId about an launcher ability.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    readonly iconId: number;
    /**
     * Obtains userId about an launcher ability.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    readonly userId: number;
    /**
     * Obtains installTime about an launcher ability.
     *
     * @type { number }
     * @readonly
     * @syscap SystemCapability.BundleManager.BundleFramework.Launcher
     * @since 18
     */
    readonly installTime: number;
}
