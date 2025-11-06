/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @file
 * @kit CameraKit
 */
import { ErrorCallback, AsyncCallback } from './@ohos.base';
import type Context from './application/BaseContext';
import image from './@ohos.multimedia.image';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import photoAccessHelper from './@ohos.file.photoAccessHelper';
/**
 * @namespace camera
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @since 10
 */
/**
 * @namespace camera
 * @syscap SystemCapability.Multimedia.Camera.Core
 * @atomicservice
 * @since 12
 */
declare namespace camera {
    /**
     * Creates a CameraManager instance.
     *
     * @param { Context } context - Current application context.
     * @returns { CameraManager } CameraManager instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Creates a CameraManager instance.
     *
     * @param { Context } context - Current application context.
     * @returns { CameraManager } CameraManager instance.
     * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
     * @throws { BusinessError } 7400201 - Camera service fatal error.
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    function getCameraManager(context: Context): CameraManager;
    /**
     * Enum for camera status.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for camera status.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum CameraStatus {
        /**
         * Appear status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Appear status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_STATUS_APPEAR = 0,
        /**
         * Disappear status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Disappear status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_STATUS_DISAPPEAR = 1,
        /**
         * Available status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Available status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_STATUS_AVAILABLE = 2,
        /**
         * Unavailable status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unavailable status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_STATUS_UNAVAILABLE = 3
    }
    /**
     * Enum for fold status.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Enum for fold status.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum FoldStatus {
        /**
         * Non-foldable status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Non-foldable status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        NON_FOLDABLE = 0,
        /**
         * Expanded status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Expanded status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        EXPANDED = 1,
        /**
         * Folded status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Folded status.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOLDED = 2
    }
    /**
     * Profile for camera streams.
     *
     * @typedef Profile
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Profile for camera streams.
     *
     * @typedef Profile
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Profile {
        /**
         * Camera format.
         *
         * @type { CameraFormat }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera format.
         *
         * @type { CameraFormat }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly format: CameraFormat;
        /**
         * Picture size.
         *
         * @type { Size }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Picture size.
         *
         * @type { Size }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly size: Size;
    }
    /**
     * Frame rate range.
     *
     * @typedef FrameRateRange
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Frame rate range.
     *
     * @typedef FrameRateRange
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface FrameRateRange {
        /**
         * Min frame rate.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Min frame rate.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly min: number;
        /**
         * Max frame rate.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Max frame rate.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly max: number;
    }
    /**
     * Video profile.
     *
     * @extends Profile
     * @typedef VideoProfile
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Video profile.
     *
     * @extends Profile
     * @typedef VideoProfile
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface VideoProfile extends Profile {
        /**
         * Frame rate in unit fps (frames per second).
         *
         * @type { FrameRateRange }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Frame rate in unit fps (frames per second).
         *
         * @type { FrameRateRange }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly frameRateRange: FrameRateRange;
    }
    /**
     * Camera output capability.
     *
     * @typedef CameraOutputCapability
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera output capability.
     *
     * @typedef CameraOutputCapability
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CameraOutputCapability {
        /**
         * Preview profiles.
         *
         * @type { Array<Profile> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Preview profiles.
         *
         * @type { Array<Profile> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly previewProfiles: Array<Profile>;
        /**
         * Photo profiles.
         *
         * @type { Array<Profile> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Photo profiles.
         *
         * @type { Array<Profile> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly photoProfiles: Array<Profile>;
        /**
         * Video profiles.
         *
         * @type { Array<VideoProfile> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Video profiles.
         *
         * @type { Array<VideoProfile> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly videoProfiles: Array<VideoProfile>;
        /**
         * All the supported metadata Object Types.
         *
         * @type { Array<MetadataObjectType> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * All the supported metadata Object Types.
         *
         * @type { Array<MetadataObjectType> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly supportedMetadataObjectTypes: Array<MetadataObjectType>;
    }
    /**
     * Enum for camera error code.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for camera error code.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum CameraErrorCode {
        /**
         * Parameter missing or parameter type incorrect.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Parameter missing or parameter type incorrect.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        INVALID_ARGUMENT = 7400101,
        /**
         * Operation not allowed.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Operation not allowed.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        OPERATION_NOT_ALLOWED = 7400102,
        /**
         * Session not config.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Session not config.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        SESSION_NOT_CONFIG = 7400103,
        /**
         * Session not running.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Session not running.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        SESSION_NOT_RUNNING = 7400104,
        /**
         * Session config locked.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Session config locked.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        SESSION_CONFIG_LOCKED = 7400105,
        /**
         * Device setting locked.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Device setting locked.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        DEVICE_SETTING_LOCKED = 7400106,
        /**
         * Can not use camera cause of conflict.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Can not use camera cause of conflict.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CONFLICT_CAMERA = 7400107,
        /**
         * Camera disabled cause of security reason.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera disabled cause of security reason.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        DEVICE_DISABLED = 7400108,
        /**
         * Can not use camera cause of preempted.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Can not use camera cause of preempted.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        DEVICE_PREEMPTED = 7400109,
        /**
         * Unresolved conflicts with current configurations.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unresolved conflicts with current configurations.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        UNRESOLVED_CONFLICTS_WITH_CURRENT_CONFIGURATIONS = 7400110,
        /**
         * Camera service fatal error.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera service fatal error.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        SERVICE_FATAL_ERROR = 7400201
    }
    /**
     * Camera manager object.
     *
     * @interface CameraManager
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera manager object.
     *
     * @interface CameraManager
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CameraManager {
        /**
         * Gets supported camera descriptions.
         *
         * @returns { Array<CameraDevice> } An array of supported cameras.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Gets supported camera descriptions.
         *
         * @returns { Array<CameraDevice> } An array of supported cameras.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getSupportedCameras(): Array<CameraDevice>;
        /**
         * Gets supported output capability for specific camera.
         *
         * @param { CameraDevice } camera - Camera device.
         * @returns { CameraOutputCapability } The camera output capability.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.CameraManager#getSupportedOutputCapability
         */
        getSupportedOutputCapability(camera: CameraDevice): CameraOutputCapability;
        /**
         * Gets supported scene mode for specific camera.
         *
         * @param { CameraDevice } camera - Camera device.
         * @returns { Array<SceneMode> } An array of supported scene mode of camera.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets supported scene mode for specific camera.
         *
         * @param { CameraDevice } camera - Camera device.
         * @returns { Array<SceneMode> } An array of supported scene mode of camera.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getSupportedSceneModes(camera: CameraDevice): Array<SceneMode>;
        /**
         * Gets supported output capability for specific camera.
         *
         * @param { CameraDevice } camera - Camera device.
         * @param { SceneMode } mode - Scene mode.
         * @returns { CameraOutputCapability } The camera output capability.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets supported output capability for specific camera.
         *
         * @param { CameraDevice } camera - Camera device.
         * @param { SceneMode } mode - Scene mode.
         * @returns { CameraOutputCapability } The camera output capability.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getSupportedOutputCapability(camera: CameraDevice, mode: SceneMode): CameraOutputCapability;
        /**
         * Determine whether camera is muted.
         *
         * @returns { boolean } Is camera muted.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Determine whether camera is muted.
         *
         * @returns { boolean } Is camera muted.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isCameraMuted(): boolean;
        /**
         * Creates a CameraInput instance by camera.
         *
         * @permission ohos.permission.CAMERA
         * @param { CameraDevice } camera - Camera device used to create the instance.
         * @returns { CameraInput } The CameraInput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Creates a CameraInput instance by camera.
         *
         * @permission ohos.permission.CAMERA
         * @param { CameraDevice } camera - Camera device used to create the instance.
         * @returns { CameraInput } The CameraInput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a CameraInput instance by camera.
         *
         * @permission ohos.permission.CAMERA
         * @param { CameraDevice } camera - Camera device used to create the instance.
         * @returns { CameraInput } The CameraInput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createCameraInput(camera: CameraDevice): CameraInput;
        /**
         * Creates a CameraInput instance by camera position and type.
         *
         * @permission ohos.permission.CAMERA
         * @param { CameraPosition } position - Target camera position.
         * @param { CameraType } type - Target camera type.
         * @returns { CameraInput } The CameraInput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Creates a CameraInput instance by camera position and type.
         *
         * @permission ohos.permission.CAMERA
         * @param { CameraPosition } position - Target camera position.
         * @param { CameraType } type - Target camera type.
         * @returns { CameraInput } The CameraInput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a CameraInput instance by camera position and type.
         *
         * @permission ohos.permission.CAMERA
         * @param { CameraPosition } position - Target camera position.
         * @param { CameraType } type - Target camera type.
         * @returns { CameraInput } The CameraInput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createCameraInput(position: CameraPosition, type: CameraType): CameraInput;
        /**
         * Creates a PreviewOutput instance.
         *
         * @param { Profile } profile - Preview output profile.
         * @param { string } surfaceId - Surface object id used in camera photo output.
         * @returns { PreviewOutput } The PreviewOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Creates a PreviewOutput instance.
         *
         * @param { Profile } profile - Preview output profile.
         * @param { string } surfaceId - Surface object id used in camera photo output.
         * @returns { PreviewOutput } The PreviewOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a PreviewOutput instance.
         *
         * @param { Profile } profile - Preview output profile.
         * @param { string } surfaceId - Surface object id used in camera photo output.
         * @returns { PreviewOutput } The PreviewOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createPreviewOutput(profile: Profile, surfaceId: string): PreviewOutput;
        /**
         * Creates a PreviewOutput instance without profile.
         * You can use this method to create a preview output instance without a profile, This instance can
         * only be used in a preconfiged session.
         *
         * @param { string } surfaceId - Surface object id used in camera preview output.
         * @returns { PreviewOutput } The PreviewOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a PreviewOutput instance without profile.
         * You can use this method to create a preview output instance without a profile, This instance can
         * only be used in a preconfiged session.
         *
         * @param { string } surfaceId - Surface object id used in camera preview output.
         * @returns { PreviewOutput } The PreviewOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createPreviewOutput(surfaceId: string): PreviewOutput;
        /**
         * Creates a PhotoOutput instance.
         *
         * @param { Profile } profile - Photo output profile.
         * @param { string } surfaceId - Surface object id used in camera photo output.
         * @returns { PhotoOutput } The PhotoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.CameraManager#createPhotoOutput
         */
        createPhotoOutput(profile: Profile, surfaceId: string): PhotoOutput;
        /**
         * Creates a PhotoOutput instance without surfaceId.
         * Call PhotoOutput capture interface will give a callback,
         * {@link on(type: 'photoAvailable', callback: AsyncCallback<Photo>)}
         *
         * @param { Profile } profile - Photo output profile.
         * @returns { PhotoOutput } The PhotoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Creates a PhotoOutput instance without surfaceId.
         * Call PhotoOutput capture interface will give a callback,
         * {@link on(type: 'photoAvailable', callback: AsyncCallback<Photo>)}
         * You can use this method to create a photo output instance without a profile, This instance can
         * only be used in a preconfiged session.
         *
         * @param { Profile } profile - Photo output profile.
         * @returns { PhotoOutput } The PhotoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a PhotoOutput instance without surfaceId.
         * Call PhotoOutput capture interface will give a callback,
         * {@link on(type: 'photoAvailable', callback: AsyncCallback<Photo>)}
         * You can use this method to create a photo output instance without a profile, This instance can
         * only be used in a preconfiged session.
         *
         * @param { Profile } profile - Photo output profile.
         * @returns { PhotoOutput } The PhotoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createPhotoOutput(profile?: Profile): PhotoOutput;
        /**
         * Creates a VideoOutput instance.
         *
         * @param { VideoProfile } profile - Video profile.
         * @param { string } surfaceId - Surface object id used in camera video output.
         * @returns { VideoOutput } The VideoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Creates a VideoOutput instance.
         *
         * @param { VideoProfile } profile - Video profile.
         * @param { string } surfaceId - Surface object id used in camera video output.
         * @returns { VideoOutput } The VideoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a VideoOutput instance.
         *
         * @param { VideoProfile } profile - Video profile.
         * @param { string } surfaceId - Surface object id used in camera video output.
         * @returns { VideoOutput } The VideoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createVideoOutput(profile: VideoProfile, surfaceId: string): VideoOutput;
        /**
         * Creates a VideoOutput instance without profile.
         * You can use this method to create a video output instance without a profile, This instance can
         * only be used in a preconfiged session.
         *
         * @param { string } surfaceId - Surface object id used in camera video output.
         * @returns { VideoOutput } The VideoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a VideoOutput instance without profile.
         * You can use this method to create a video output instance without a profile, This instance can
         * only be used in a preconfiged session.
         *
         * @param { string } surfaceId - Surface object id used in camera video output.
         * @returns { VideoOutput } The VideoOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createVideoOutput(surfaceId: string): VideoOutput;
        /**
         * Creates a MetadataOutput instance.
         *
         * @param { Array<MetadataObjectType> } metadataObjectTypes - Array of MetadataObjectType.
         * @returns { MetadataOutput } The MetadataOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Creates a MetadataOutput instance.
         *
         * @param { Array<MetadataObjectType> } metadataObjectTypes - Array of MetadataObjectType.
         * @returns { MetadataOutput } The MetadataOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Creates a MetadataOutput instance.
         *
         * @param { Array<MetadataObjectType> } metadataObjectTypes - Array of MetadataObjectType.
         * @returns { MetadataOutput } The MetadataOutput instance.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createMetadataOutput(metadataObjectTypes: Array<MetadataObjectType>): MetadataOutput;
        /**
         * Gets a CaptureSession instance.
         *
         * @returns { CaptureSession } The CaptureSession instance.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.CameraManager#createSession
         */
        createCaptureSession(): CaptureSession;
        /**
         * Gets a Session instance by specific scene mode.
         *
         * @param { SceneMode } mode - Scene mode.
         * @returns { T } The specific Session instance by specific scene mode.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
         * 3. Parameter verification failed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets a Session instance by specific scene mode.
         *
         * @param { SceneMode } mode - Scene mode.
         * @returns { T } The specific Session instance by specific scene mode.
         * @throws { BusinessError } 7400101 - Parameter error. Possible causes:
         * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
         * 3. Parameter verification failed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        createSession<T extends Session>(mode: SceneMode): T;
        /**
         * Queries a specified device based on position and type.
         *
         * @param { CameraPosition } position - Camera position.
         * @param { CameraType } type - Camera type.
         * @returns { CameraDevice } A device queried base on position and type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Queries a specified device based on position and type.
         *
         * @param { CameraPosition } position - Camera position.
         * @param { CameraType } type - Camera type.
         * @returns { CameraDevice } A device queried base on position and type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getCameraDevice(position: CameraPosition, type: CameraType): CameraDevice;
        /**
         * Obtains the concurrent information of specified cameras,
         * the empty return means concurrency is not supported.
         *
         * @param { Array<CameraDevice> } cameras - Set of camera devices to be queried.
         * @returns { Array<CameraConcurrentInfo> } Set of queried concurrent information.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Obtains the concurrent information of specified cameras,
         * the empty return means concurrency is not supported.
         *
         * @param { Array<CameraDevice> } cameras - Set of camera devices to be queried.
         * @returns { Array<CameraConcurrentInfo> } Set of queried concurrent information.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getCameraConcurrentInfos(cameras: Array<CameraDevice>): Array<CameraConcurrentInfo>;
        /**
         * Subscribes camera status change event callback.
         *
         * @param { 'cameraStatus' } type - Event type.
         * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes camera status change event callback.
         *
         * @param { 'cameraStatus' } type - Event type.
         * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'cameraStatus', callback: AsyncCallback<CameraStatusInfo>): void;
        /**
         * Unsubscribes from camera status change event callback.
         *
         * @param { 'cameraStatus' } type - Event type.
         * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from camera status change event callback.
         *
         * @param { 'cameraStatus' } type - Event type.
         * @param { AsyncCallback<CameraStatusInfo> } callback - Callback used to get the camera status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'cameraStatus', callback?: AsyncCallback<CameraStatusInfo>): void;
        /**
         * Subscribes fold status change event callback.
         *
         * @param { 'foldStatusChanged' } type - Event type.
         * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Subscribes fold status change event callback.
         *
         * @param { 'foldStatusChanged' } type - Event type.
         * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'foldStatusChange', callback: AsyncCallback<FoldStatusInfo>): void;
        /**
         * Unsubscribes from fold status change event callback.
         *
         * @param { 'foldStatusChanged' } type - Event type.
         * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unsubscribes from fold status change event callback.
         *
         * @param { 'foldStatusChanged' } type - Event type.
         * @param { AsyncCallback<FoldStatusInfo> } callback - Callback used to get the fold status change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'foldStatusChange', callback?: AsyncCallback<FoldStatusInfo>): void;
        /**
         * Check if the device has a torch.
         *
         * @returns { boolean } this value that specifies whether the device has a torch.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Check if the device has a torch.
         *
         * @returns { boolean } this value that specifies whether the device has a torch.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isTorchSupported(): boolean;
        /**
         * Check if a specifies torch mode is supported.
         * @param { TorchMode } mode - torch mode.
         * @returns { boolean } is torch mode supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Check if a specifies torch mode is supported.
         * @param { TorchMode } mode - torch mode.
         * @returns { boolean } is torch mode supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isTorchModeSupported(mode: TorchMode): boolean;
        /**
         * Get current torch mode.
         *
         * @returns { TorchMode } torch mode.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Get current torch mode.
         *
         * @returns { TorchMode } torch mode.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getTorchMode(): TorchMode;
        /**
         * Set torch mode to the device.
         *
         * @param { TorchMode } mode - torch mode.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Set torch mode to the device.
         *
         * @param { TorchMode } mode - torch mode.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Set torch mode to the device.
         *
         * @param { TorchMode } mode - torch mode.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Set torch mode to the device.
         *
         * @param { TorchMode } mode - torch mode.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setTorchMode(mode: TorchMode): void;
        /**
         * Subscribes torch status change event callback.
         *
         * @param { 'torchStatusChange' } type - Event type
         * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes torch status change event callback.
         *
         * @param { 'torchStatusChange' } type - Event type
         * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'torchStatusChange', callback: AsyncCallback<TorchStatusInfo>): void;
        /**
         * Unsubscribes torch status change event callback.
         *
         * @param { 'torchStatusChange' } type - Event type
         * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes torch status change event callback.
         *
         * @param { 'torchStatusChange' } type - Event type
         * @param { AsyncCallback<TorchStatusInfo> } callback - Callback used to return the torch status change
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'torchStatusChange', callback?: AsyncCallback<TorchStatusInfo>): void;
    }
    /**
     * Torch status info.
     *
     * @typedef TorchStatusInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Torch status info.
     *
     * @typedef TorchStatusInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface TorchStatusInfo {
        /**
         * is torch available
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * is torch available
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly isTorchAvailable: boolean;
        /**
         * is torch active
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * is torch active
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly isTorchActive: boolean;
        /**
         * the current torch brightness level.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * the current torch brightness level.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly torchLevel: number;
    }
    /**
     * Enum for torch mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Enum for torch mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum TorchMode {
        /**
         * The device torch is always off.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * The device torch is always off.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        OFF = 0,
        /**
         * The device torch is always on.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * The device torch is always on.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        ON = 1,
        /**
         * The device continuously monitors light levels and uses the torch when necessary.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * The device continuously monitors light levels and uses the torch when necessary.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        AUTO = 2
    }
    /**
     * Camera status info.
     *
     * @typedef CameraStatusInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera status info.
     *
     * @typedef CameraStatusInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CameraStatusInfo {
        /**
         * Camera instance.
         *
         * @type { CameraDevice }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera instance.
         *
         * @type { CameraDevice }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        camera: CameraDevice;
        /**
         * Current camera status.
         *
         * @type { CameraStatus }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Current camera status.
         *
         * @type { CameraStatus }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        status: CameraStatus;
    }
    /**
     * Fold status info.
     *
     * @typedef FoldStatusInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Fold status info.
     *
     * @typedef FoldStatusInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface FoldStatusInfo {
        /**
         * Gets supported camera devices under the current fold status.
         *
         * @type { Array<CameraDevice> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets supported camera devices under the current fold status.
         *
         * @type { Array<CameraDevice> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly supportedCameras: Array<CameraDevice>;
        /**
         * Current fold status.
         *
         * @type { FoldStatus }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Current fold status.
         *
         * @type { FoldStatus }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly foldStatus: FoldStatus;
    }
    /**
     * Enum for camera position.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for camera position.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 12
     */
    enum CameraPosition {
        /**
         * Unspecified position.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unspecified position.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 12
         */
        CAMERA_POSITION_UNSPECIFIED = 0,
        /**
         * Back position.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Back position.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 12
         */
        CAMERA_POSITION_BACK = 1,
        /**
         * Front position.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Front position.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 12
         */
        CAMERA_POSITION_FRONT = 2,
        /**
         * Camera that is inner position when the device is folded.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Camera that is inner position when the device is folded.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 12
         * @deprecated since 12
         */
        CAMERA_POSITION_FOLD_INNER = 3
    }
    /**
     * Enum for camera type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for camera type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum CameraType {
        /**
         * Default camera type
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Default camera type
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_TYPE_DEFAULT = 0,
        /**
         * Wide camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Wide camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_TYPE_WIDE_ANGLE = 1,
        /**
         * Ultra wide camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Ultra wide camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_TYPE_ULTRA_WIDE = 2,
        /**
         * Telephoto camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Telephoto camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_TYPE_TELEPHOTO = 3,
        /**
         * True depth camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * True depth camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_TYPE_TRUE_DEPTH = 4
    }
    /**
     * Enum for camera connection type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for camera connection type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum ConnectionType {
        /**
         * Built-in camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Built-in camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_CONNECTION_BUILT_IN = 0,
        /**
         * Camera connected using USB
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera connected using USB
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_CONNECTION_USB_PLUGIN = 1,
        /**
         * Remote camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Remote camera
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_CONNECTION_REMOTE = 2
    }
    
    /**
     * Enum for remote camera device type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 15
     */
    /**
     * Enum for remote camera device type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum HostDeviceType {
        
        /**
         * Indicates an unknown device camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 15
         */
        /**
         * Indicates an unknown device camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        UNKNOWN_TYPE = 0,
        
        /**
         * Indicates a smartphone camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 15
         */
        /**
         * Indicates a smartphone camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PHONE = 0x0E,
        
        /**
         * Indicates a tablet camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 15
         */
        /**
         * Indicates a tablet camera.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        TABLET = 0x11
    }
    /**
     * Camera device object.
     *
     * @typedef CameraDevice
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera device object.
     *
     * @typedef CameraDevice
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CameraDevice {
        /**
         * Camera id attribute.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera id attribute.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly cameraId: string;
        /**
         * Camera position attribute.
         *
         * @type { CameraPosition }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera position attribute.
         *
         * @type { CameraPosition }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly cameraPosition: CameraPosition;
        /**
         * Camera type attribute.
         *
         * @type { CameraType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera type attribute.
         *
         * @type { CameraType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly cameraType: CameraType;
        /**
         * Camera connection type attribute.
         *
         * @type { ConnectionType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera connection type attribute.
         *
         * @type { ConnectionType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly connectionType: ConnectionType;
        
        /**
         * Camera remote camera device name attribute.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 15
         */
        /**
         * Camera remote camera device name attribute.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly hostDeviceName: string;
        
        /**
         * Camera remote camera device type attribute.
         *
         * @type { HostDeviceType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 15
         */
        /**
         * Camera remote camera device type attribute.
         *
         * @type { HostDeviceType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly hostDeviceType: HostDeviceType;
        /**
         * Camera sensor orientation attribute.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Camera sensor orientation attribute.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly cameraOrientation: number;
    }
    /**
     * Size parameter.
     *
     * @typedef Size
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Size parameter.
     *
     * @typedef Size
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Size {
        /**
         * Height.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Height.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        height: number;
        /**
         * Width.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Width.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        width: number;
    }
    /**
     * Point parameter.
     *
     * @typedef Point
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Point parameter.
     *
     * @typedef Point
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Point {
        /**
         * x co-ordinate
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * x co-ordinate
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        x: number;
        /**
         * y co-ordinate
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * y co-ordinate
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        y: number;
    }
    /**
     * Camera input object.
     *
     * @interface CameraInput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera input object.
     *
     * @interface CameraInput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CameraInput {
        /**
         * Open camera.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Open camera.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        open(callback: AsyncCallback<void>): void;
        /**
         * Open camera.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Open camera.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        open(): Promise<void>;
        /**
         * Open camera.
         *
         * @param { boolean } isSecureEnabled - Enable secure camera.
         * @returns { Promise<bigint> } Promise used to return the result.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Open camera.
         *
         * @param { boolean } isSecureEnabled - Enable secure camera.
         * @returns { Promise<bigint> } Promise used to return the result.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        open(isSecureEnabled: boolean): Promise<bigint>;
        /**
         * Open camera with specified concurrent type.
         *
         * @param { CameraConcurrentType } type - Camera concurrent type.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Open camera with specified concurrent type.
         *
         * @param { CameraConcurrentType } type - Camera concurrent type.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400107 - Can not use camera cause of conflict.
         * @throws { BusinessError } 7400108 - Camera disabled cause of security reason.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        open(type: CameraConcurrentType): Promise<void>;
        /**
         * Close camera.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Close camera.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        close(callback: AsyncCallback<void>): void;
        /**
         * Close camera.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Close camera.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        close(): Promise<void>;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { CameraDevice } camera - Camera device.
         * @param { ErrorCallback } callback - Callback used to get the camera input errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { CameraDevice } camera - Camera device.
         * @param { ErrorCallback } callback - Callback used to get the camera input errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', camera: CameraDevice, callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { CameraDevice } camera - Camera device.
         * @param { ErrorCallback } callback - Callback used to get the camera input errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { CameraDevice } camera - Camera device.
         * @param { ErrorCallback } callback - Callback used to get the camera input errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', camera: CameraDevice, callback?: ErrorCallback): void;
    }
    /**
     * Enumerates the camera scene modes.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Enumerates the camera scene modes.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum SceneMode {
        /**
         * Normal photo mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Normal photo mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        NORMAL_PHOTO = 1,
        /**
         * Normal video mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Normal video mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        NORMAL_VIDEO = 2,
        /**
         * Secure camera mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Secure camera mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        SECURE_PHOTO = 12
    }
    /**
     * Enum for camera format type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for camera format type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum CameraFormat {
        /**
         * RGBA 8888 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * RGBA 8888 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_FORMAT_RGBA_8888 = 3,
        /**
         * YUV 420 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * YUV 420 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_FORMAT_YUV_420_SP = 1003,
        /**
         * JPEG Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * JPEG Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_FORMAT_JPEG = 2000,
        /**
         * YCBCR P010 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * YCBCR P010 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_FORMAT_YCBCR_P010,
        /**
         * YCRCB P010 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * YCRCB P010 Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_FORMAT_YCRCB_P010,
        /**
         * HEIC Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * HEIC Format.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_FORMAT_HEIC = 2003
    }
    /**
     * Enum for flash mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for flash mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum FlashMode {
        /**
         * Close mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Close mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FLASH_MODE_CLOSE = 0,
        /**
         * Open mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Open mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FLASH_MODE_OPEN = 1,
        /**
         * Auto mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Auto mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FLASH_MODE_AUTO = 2,
        /**
         * Always open mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Always open mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FLASH_MODE_ALWAYS_OPEN = 3
    }
    /**
     * Flash Query object.
     *
     * @interface FlashQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Flash Query object.
     *
     * @interface FlashQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface FlashQuery {
        /**
         * Check if device has flash light.
         *
         * @returns { boolean } The flash light support status.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Check if device has flash light.
         * Move to FlashQuery interface from Flash since 12.
         *
         * @returns { boolean } The flash light support status.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Check if device has flash light.
         * Move to FlashQuery interface from Flash since 12.
         *
         * @returns { boolean } The flash light support status.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        hasFlash(): boolean;
        /**
         * Checks whether a specified flash mode is supported.
         *
         * @param { FlashMode } flashMode - Flash mode
         * @returns { boolean } Is the flash mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Checks whether a specified flash mode is supported.
         * Move to FlashQuery interface from Flash since 12.
         *
         * @param { FlashMode } flashMode - Flash mode
         * @returns { boolean } Is the flash mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Checks whether a specified flash mode is supported.
         * Move to FlashQuery interface from Flash since 12.
         *
         * @param { FlashMode } flashMode - Flash mode
         * @returns { boolean } Is the flash mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isFlashModeSupported(flashMode: FlashMode): boolean;
    }
    /**
     * Flash object.
     *
     * @extends FlashQuery
     * @interface Flash
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Flash object.
     *
     * @extends FlashQuery
     * @interface Flash
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Flash extends FlashQuery {
        /**
         * Gets current flash mode.
         *
         * @returns { FlashMode } The current flash mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets current flash mode.
         *
         * @returns { FlashMode } The current flash mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getFlashMode(): FlashMode;
        /**
         * Sets flash mode.
         *
         * @param { FlashMode } flashMode - Target flash mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Sets flash mode.
         *
         * @param { FlashMode } flashMode - Target flash mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setFlashMode(flashMode: FlashMode): void;
    }
    /**
     * Enum for exposure mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for exposure mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum ExposureMode {
        /**
         * Lock exposure mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Lock exposure mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        EXPOSURE_MODE_LOCKED = 0,
        /**
         * Auto exposure mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Auto exposure mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        EXPOSURE_MODE_AUTO = 1,
        /**
         * Continuous automatic exposure.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Continuous automatic exposure.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        EXPOSURE_MODE_CONTINUOUS_AUTO = 2
    }
    /**
     * AutoExposureQuery object.
     *
     * @interface AutoExposureQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * AutoExposureQuery object.
     *
     * @interface AutoExposureQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface AutoExposureQuery {
        /**
         * Checks whether a specified exposure mode is supported.
         *
         * @param { ExposureMode } aeMode - Exposure mode
         * @returns { boolean } Is the exposure mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Checks whether a specified exposure mode is supported.
         * Move to AutoExposureQuery interface from AutoExposure interface since 12.
         *
         * @param { ExposureMode } aeMode - Exposure mode
         * @returns { boolean } Is the exposure mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Checks whether a specified exposure mode is supported.
         * Move to AutoExposureQuery interface from AutoExposure interface since 12.
         *
         * @param { ExposureMode } aeMode - Exposure mode
         * @returns { boolean } Is the exposure mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isExposureModeSupported(aeMode: ExposureMode): boolean;
        /**
         * Query the exposure compensation range.
         *
         * @returns { Array<number> } The array of compensation range.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Query the exposure compensation range.
         * Move to AutoExposureQuery interface from AutoExposure interface since 12.
         *
         * @returns { Array<number> } The array of compensation range.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Query the exposure compensation range.
         * Move to AutoExposureQuery interface from AutoExposure interface since 12.
         *
         * @returns { Array<number> } The array of compensation range.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getExposureBiasRange(): Array<number>;
    }
    /**
     * AutoExposure object.
     *
     * @extends AutoExposureQuery
     * @interface AutoExposure
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * AutoExposure object.
     *
     * @extends AutoExposureQuery
     * @interface AutoExposure
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface AutoExposure extends AutoExposureQuery {
        /**
         * Gets current exposure mode.
         *
         * @returns { ExposureMode } The current exposure mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets current exposure mode.
         *
         * @returns { ExposureMode } The current exposure mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getExposureMode(): ExposureMode;
        /**
         * Sets Exposure mode.
         *
         * @param { ExposureMode } aeMode - Exposure mode
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Sets Exposure mode.
         *
         * @param { ExposureMode } aeMode - Exposure mode
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setExposureMode(aeMode: ExposureMode): void;
        /**
         * Gets current metering point.
         *
         * @returns { Point } The current metering point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets current metering point.
         *
         * @returns { Point } The current metering point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getMeteringPoint(): Point;
        /**
         * Set the center point of the metering area.
         *
         * @param { Point } point - metering point
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Set the center point of the metering area.
         *
         * @param { Point } point - metering point
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setMeteringPoint(point: Point): void;
        /**
         * Set exposure compensation.
         *
         * @param { number } exposureBias - Exposure compensation
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Set exposure compensation.
         *
         * @param { number } exposureBias - Exposure compensation
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Set exposure compensation.
         *
         * @param { number } exposureBias - Exposure compensation
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setExposureBias(exposureBias: number): void;
        /**
         * Query the exposure value.
         *
         * @returns { number } The exposure value.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Query the exposure value.
         *
         * @returns { number } The exposure value.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getExposureValue(): number;
    }
    /**
     * Enum for focus mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for focus mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum FocusMode {
        /**
         * Manual mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Manual mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOCUS_MODE_MANUAL = 0,
        /**
         * Continuous auto mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Continuous auto mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOCUS_MODE_CONTINUOUS_AUTO = 1,
        /**
         * Auto mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Auto mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOCUS_MODE_AUTO = 2,
        /**
         * Locked mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Locked mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOCUS_MODE_LOCKED = 3
    }
    /**
     * Enum for focus state.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for focus state.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum FocusState {
        /**
         * Scan state.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Scan state.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOCUS_STATE_SCAN = 0,
        /**
         * Focused state.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Focused state.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOCUS_STATE_FOCUSED = 1,
        /**
         * Unfocused state.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unfocused state.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FOCUS_STATE_UNFOCUSED = 2
    }
    /**
     * Focus Query object.
     *
     * @interface FocusQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Focus Query object.
     *
     * @interface FocusQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface FocusQuery {
        /**
         * Checks whether a specified focus mode is supported.
         *
         * @param { FocusMode } afMode - Focus mode.
         * @returns { boolean } Is the focus mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Checks whether a specified focus mode is supported.
         * Move to FocusQuery interface from Focus interface since 12.
         *
         * @param { FocusMode } afMode - Focus mode.
         * @returns { boolean } Is the focus mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Checks whether a specified focus mode is supported.
         * Move to FocusQuery interface from Focus interface since 12.
         *
         * @param { FocusMode } afMode - Focus mode.
         * @returns { boolean } Is the focus mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isFocusModeSupported(afMode: FocusMode): boolean;
    }
    /**
     * Focus object.
     *
     * @extends FocusQuery
     * @interface Focus
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Focus object.
     *
     * @extends FocusQuery
     * @interface Focus
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Focus extends FocusQuery {
        /**
         * Gets current focus mode.
         *
         * @returns { FocusMode } The current focus mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets current focus mode.
         *
         * @returns { FocusMode } The current focus mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getFocusMode(): FocusMode;
        /**
         * Sets focus mode.
         *
         * @param { FocusMode } afMode - Target focus mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Sets focus mode.
         *
         * @param { FocusMode } afMode - Target focus mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setFocusMode(afMode: FocusMode): void;
        /**
         * Sets focus point.
         *
         * @param { Point } point - Target focus point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Sets focus point.
         *
         * @param { Point } point - Target focus point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setFocusPoint(point: Point): void;
        /**
         * Gets current focus point.
         *
         * @returns { Point } The current focus point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets current focus point.
         *
         * @returns { Point } The current focus point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getFocusPoint(): Point;
        /**
         * Gets current focal length.
         *
         * @returns { number } The current focal point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets current focal length.
         *
         * @returns { number } The current focal point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getFocalLength(): number;
    }
    
    /**
     * Enumerates the camera white balance modes.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20
     */
    enum WhiteBalanceMode {
        
        /**
         * Automatic white balance mode.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        AUTO = 0,
        
        /**
         * Cloudy white balance mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        CLOUDY = 1,
        
        /**
         * Incandescent white balance mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        INCANDESCENT = 2,
        
        /**
         * Fluorescent white balance mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        FLUORESCENT = 3,
        
        /**
         * Daylight white balance mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        DAYLIGHT = 4,
        
        /**
         * Manual white balance mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        MANUAL = 5,
        
        /**
         * Lock white balance mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        LOCKED = 6
    }
    
    /**
     * White Balance Query object.
     * @interface WhiteBalanceQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20
     */
    interface WhiteBalanceQuery {
        
        /**
         * Checks whether the specified white balance mode is supported.
         * @param { WhiteBalanceMode } mode White balance mode.
         * @returns { boolean } Check result.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        isWhiteBalanceModeSupported(mode: WhiteBalanceMode): boolean;
        
        getWhiteBalanceRange(): Array<number>;
    }
    
    /**
     * WhiteBalance object.
     * @extends WhiteBalanceQuery
     * @interface WhiteBalance
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 20
     */
    interface WhiteBalance extends WhiteBalanceQuery {
        
        /**
         * Obtains the white balance mode in use.
         * @returns { WhiteBalanceMode } White balance mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 20
         */
        getWhiteBalanceMode(): WhiteBalanceMode;
    }
    /**
     * Enum for smooth zoom mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Enum for smooth zoom mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum SmoothZoomMode {
        /**
         * Normal zoom mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Normal zoom mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        NORMAL = 0
    }
    /**
     * SmoothZoomInfo object
     *
     * @typedef SmoothZoomInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * SmoothZoomInfo object
     *
     * @typedef SmoothZoomInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface SmoothZoomInfo {
        /**
         * The duration of smooth zoom.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * The duration of smooth zoom.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        duration: number;
    }
    /**
     * Zoom query object.
     *
     * @interface ZoomQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Zoom query object.
     *
     * @interface ZoomQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface ZoomQuery {
        /**
         * Gets all supported zoom ratio range.
         *
         * @returns { Array<number> } The zoom ratio range.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets all supported zoom ratio range.
         * Move to ZoomQuery interface from Zoom since 12.
         *
         * @returns { Array<number> } The zoom ratio range.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets all supported zoom ratio range.
         * Move to ZoomQuery interface from Zoom since 12.
         *
         * @returns { Array<number> } The zoom ratio range.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getZoomRatioRange(): Array<number>;
    }
    /**
     * Zoom object.
     *
     * @extends ZoomQuery
     * @interface Zoom
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Zoom object.
     *
     * @extends ZoomQuery
     * @interface Zoom
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Zoom extends ZoomQuery {
        /**
         * Gets zoom ratio.
         *
         * @returns { number } The zoom ratio value.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Gets zoom ratio.
         *
         * @returns { number } The zoom ratio value.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets zoom ratio.
         *
         * @returns { number } The zoom ratio value.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getZoomRatio(): number;
        /**
         * Sets zoom ratio.
         *
         * @param { number } zoomRatio - Target zoom ratio.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Sets zoom ratio.
         *
         * @param { number } zoomRatio - Target zoom ratio.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setZoomRatio(zoomRatio: number): void;
        /**
         * Sets target zoom ratio by smooth method.
         *
         * @param { number } targetRatio - Target zoom ratio.
         * @param { SmoothZoomMode } mode - Smooth zoom mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Sets target zoom ratio by smooth method.
         *
         * @param { number } targetRatio - Target zoom ratio.
         * @param { SmoothZoomMode } mode - Smooth zoom mode.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Sets target zoom ratio by smooth method.
         *
         * @param { number } targetRatio - Target zoom ratio.
         * @param { SmoothZoomMode } mode - Smooth zoom mode.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setSmoothZoom(targetRatio: number, mode?: SmoothZoomMode): void;
    }
    /**
     * Enum for video stabilization mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enum for video stabilization mode.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum VideoStabilizationMode {
        /**
         * Turn off video stablization.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Turn off video stablization.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        OFF = 0,
        /**
         * LOW mode provides basic stabilization effect.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * LOW mode provides basic stabilization effect.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        LOW = 1,
        /**
         * MIDDLE mode means algorithms can achieve better effects than LOW mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * MIDDLE mode means algorithms can achieve better effects than LOW mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        MIDDLE = 2,
        /**
         * HIGH mode means algorithms can achieve better effects than MIDDLE mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * HIGH mode means algorithms can achieve better effects than MIDDLE mode.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        HIGH = 3,
        /**
         * Camera HDF can select mode automatically.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Camera HDF can select mode automatically.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        AUTO = 4
    }
    /**
     * Stabilization Query object.
     *
     * @interface StabilizationQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Stabilization Query object.
     *
     * @interface StabilizationQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface StabilizationQuery {
        /**
         * Check whether the specified video stabilization mode is supported.
         *
         * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
         * @returns { boolean } Is video stabilization mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Check whether the specified video stabilization mode is supported.
         * Move to StabilizationQuery interface from Stabilization since 12.
         *
         * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
         * @returns { boolean } Is video stabilization mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Check whether the specified video stabilization mode is supported.
         * Move to StabilizationQuery interface from Stabilization since 12.
         *
         * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
         * @returns { boolean } Is video stabilization mode supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;
    }
    /**
     * Stabilization object.
     *
     * @extends StabilizationQuery
     * @interface Stabilization
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Stabilization object.
     *
     * @extends StabilizationQuery
     * @interface Stabilization
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Stabilization extends StabilizationQuery {
        /**
         * Query the video stabilization mode currently in use.
         *
         * @returns { VideoStabilizationMode } The current video stabilization mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Query the video stabilization mode currently in use.
         *
         * @returns { VideoStabilizationMode } The current video stabilization mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getActiveVideoStabilizationMode(): VideoStabilizationMode;
        /**
         * Set video stabilization mode.
         *
         * @param { VideoStabilizationMode } mode - video stabilization mode to set.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Set video stabilization mode.
         *
         * @param { VideoStabilizationMode } mode - video stabilization mode to set.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setVideoStabilizationMode(mode: VideoStabilizationMode): void;
    }
    /**
     * Color Management Query object.
     *
     * @interface ColorManagementQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Color Management Query object.
     *
     * @interface ColorManagementQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface ColorManagementQuery {
        /**
         * Gets the supported color space types.
         *
         * @returns { Array<colorSpaceManager.ColorSpace> } The array of the supported color space for the session.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the supported color space types.
         *
         * @returns { Array<colorSpaceManager.ColorSpace> } The array of the supported color space for the session.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Gets the supported color space types.
         *
         * @returns { Array<colorSpaceManager.ColorSpace> } The array of the supported color space for the session.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getSupportedColorSpaces(): Array<colorSpaceManager.ColorSpace>;
    }
    /**
     * Color Management object.
     *
     * @extends ColorManagementQuery
     * @interface ColorManagement
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Color Management object.
     *
     * @extends ColorManagementQuery
     * @interface ColorManagement
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface ColorManagement extends ColorManagementQuery {
        /**
         * Gets the specific color space type.
         *
         * @returns { colorSpaceManager.ColorSpace } Current color space.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the specific color space type.
         *
         * @returns { colorSpaceManager.ColorSpace } Current color space.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getActiveColorSpace(): colorSpaceManager.ColorSpace;
        /**
         * Sets a color space for the session.
         *
         * @param { colorSpaceManager.ColorSpace } colorSpace - The type of color space.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - The colorSpace does not match the format.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Sets a color space for the session.
         *
         * @param { colorSpaceManager.ColorSpace } colorSpace - The type of color space.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - The colorSpace does not match the format.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setColorSpace(colorSpace: colorSpaceManager.ColorSpace): void;
    }
    /**
     * Auto Device Switch Query object.
     *
     * @interface AutoDeviceSwitchQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Auto Device Switch Query object.
     *
     * @interface AutoDeviceSwitchQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface AutoDeviceSwitchQuery {
        /**
         * Check whether auto device switch is supported.
         *
         * @returns { boolean } Is auto device switch supported.
         * @throws { BusinessError } 7400103 - Session not config, only throw in session usage.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Check whether auto device switch is supported.
         *
         * @returns { boolean } Is auto device switch supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Check whether auto device switch is supported.
         *
         * @returns { boolean } Is auto device switch supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isAutoDeviceSwitchSupported(): boolean;
    }
    /**
     * Auto Device Switch object.
     *
     * @extends AutoDeviceSwitchQuery
     * @interface AutoDeviceSwitch
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Auto Device Switch object.
     *
     * @extends AutoDeviceSwitchQuery
     * @interface AutoDeviceSwitch
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface AutoDeviceSwitch extends AutoDeviceSwitchQuery {
        /**
         * Enable auto device switch for session.
         *
         * @param { boolean } enabled - enable auto device switch if TRUE.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
         * 3. Parameters verification failed.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Enable auto device switch for session.
         *
         * @param { boolean } enabled - enable auto device switch if TRUE.
         * @throws { BusinessError } 7400101 - Parameter error. Possible causes:
         * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
         * 3. Parameters verification failed.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        enableAutoDeviceSwitch(enabled: boolean): void;
    }
    /**
     * Auto Device Switch Status.
     *
     * @typedef AutoDeviceSwitchStatus
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Auto Device Switch Status.
     *
     * @typedef AutoDeviceSwitchStatus
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface AutoDeviceSwitchStatus {
        /**
         * Notify whether device is switched.
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Notify whether device is switched.
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly isDeviceSwitched: boolean;
        /**
         * Notify whether device capability is changed.
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Notify whether device capability is changed.
         *
         * @type { boolean }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly isDeviceCapabilityChanged: boolean;
    }
    
    /**
     * Macro Query object.
     *
     * @interface MacroQuery
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface MacroQuery {
        
        
        /**
         * Determine whether camera macro is supported.
         *
         * @returns { boolean } Is camera macro supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isMacroSupported(): boolean;
    }
    
    /**
     * Macro object.
     *
     * @extends MacroQuery
     * @interface Macro
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Macro extends MacroQuery {
        
        
        /**
         * Enable macro for camera.
         *
         * @param { boolean } enabled - enable macro for camera if TRUE.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        enableMacro(enabled: boolean): void;
    }
    /**
     * Session object.
     *
     * @interface Session
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Session object.
     *
     * @interface Session
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Session {
        /**
         * Begin capture session config.
         *
         * @throws { BusinessError } 7400105 - Session config locked.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Begin capture session config.
         *
         * @throws { BusinessError } 7400105 - Session config locked.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Begin capture session config.
         *
         * @throws { BusinessError } 7400105 - Session config locked.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        beginConfig(): void;
        /**
         * Commit capture session config.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Commit capture session config.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        commitConfig(callback: AsyncCallback<void>): void;
        /**
         * Commit capture session config.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Commit capture session config.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        commitConfig(): Promise<void>;
        /**
         * Determines whether the camera input can be added into the session.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to add.
         * @returns { boolean } You can add the input into the session.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Determines whether the camera input can be added into the session.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to add.
         * @returns { boolean } You can add the input into the session.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        canAddInput(cameraInput: CameraInput): boolean;
        /**
         * Adds a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Adds a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Adds a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Adds a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        addInput(cameraInput: CameraInput): void;
        /**
         * Removes a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Removes a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Removes a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Removes a camera input.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraInput } cameraInput - Target camera input to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        removeInput(cameraInput: CameraInput): void;
        /**
         * Determines whether the camera output can be added into the session.
         * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to add.
         * @returns { boolean } You can add the output into the session.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Determines whether the camera output can be added into the session.
         * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to add.
         * @returns { boolean } You can add the output into the session.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        canAddOutput(cameraOutput: CameraOutput): boolean;
        /**
         * Adds a camera output.
         * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Adds a camera output.
         * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Adds a camera output.
         * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Adds a camera output.
         * This method is valid after Session.addInput(cameraInput) and before Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        addOutput(cameraOutput: CameraOutput): void;
        /**
         * Removes a camera output.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Removes a camera output.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Removes a camera output.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Removes a camera output.
         * This method is valid between Session.beginConfig() and Session.commitConfig().
         *
         * @param { CameraOutput } cameraOutput - Target camera output to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        removeOutput(cameraOutput: CameraOutput): void;
        /**
         * Starts capture session.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Starts capture session.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Starts capture session.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Starts capture session.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Starts capture session.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Starts capture session.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        start(): Promise<void>;
        /**
         * Stops capture session.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Stops capture session.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stops capture session.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Stops capture session.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        stop(): Promise<void>;
        /**
         * Release capture session instance.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Release capture session instance.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Release capture session instance.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Release capture session instance.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        release(): Promise<void>;
    }
    /**
     * Capture session object.
     *
     * @interface CaptureSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     * @deprecated since 11
     * @useinstead ohos.multimedia.camera.VideoSession
     */
    interface CaptureSession {
        /**
         * Begin capture session config.
         *
         * @throws { BusinessError } 7400105 - Session config locked.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#beginConfig
         */
        beginConfig(): void;
        /**
         * Commit capture session config.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#commitConfig
         */
        commitConfig(callback: AsyncCallback<void>): void;
        /**
         * Commit capture session config.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#commitConfig
         */
        commitConfig(): Promise<void>;
        /**
         * Adds a camera input.
         *
         * @param { CameraInput } cameraInput - Target camera input to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#addInput
         */
        addInput(cameraInput: CameraInput): void;
        /**
         * Removes a camera input.
         *
         * @param { CameraInput } cameraInput - Target camera input to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#removeInput
         */
        removeInput(cameraInput: CameraInput): void;
        /**
         * Adds a camera output.
         *
         * @param { CameraOutput } cameraOutput - Target camera output to add.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#addOutput
         */
        addOutput(cameraOutput: CameraOutput): void;
        /**
         * Removes a camera output.
         *
         * @param { CameraOutput } cameraOutput - Target camera output to remove.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#removeOutput
         */
        removeOutput(cameraOutput: CameraOutput): void;
        /**
         * Starts capture session.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#start
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Starts capture session.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#start
         */
        start(): Promise<void>;
        /**
         * Stops capture session.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#stop
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stops capture session.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#stop
         */
        stop(): Promise<void>;
        /**
         * Release capture session instance.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#release
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Release capture session instance.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#release
         */
        release(): Promise<void>;
        /**
         * Check if device has flash light.
         *
         * @returns { boolean } The flash light support status.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Flash#hasFlash
         */
        hasFlash(): boolean;
        /**
         * Checks whether a specified flash mode is supported.
         *
         * @param { FlashMode } flashMode - Flash mode
         * @returns { boolean } Is the flash mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Flash#isFlashModeSupported
         */
        isFlashModeSupported(flashMode: FlashMode): boolean;
        /**
         * Gets current flash mode.
         *
         * @returns { FlashMode } The current flash mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Flash#getFlashMode
         */
        getFlashMode(): FlashMode;
        /**
         * Sets flash mode.
         *
         * @param { FlashMode } flashMode - Target flash mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Flash#setFlashMode
         */
        setFlashMode(flashMode: FlashMode): void;
        /**
         * Checks whether a specified exposure mode is supported.
         *
         * @param { ExposureMode } aeMode - Exposure mode
         * @returns { boolean } Is the exposure mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#isExposureModeSupported
         */
        isExposureModeSupported(aeMode: ExposureMode): boolean;
        /**
         * Gets current exposure mode.
         *
         * @returns { ExposureMode } The current exposure mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#getExposureMode
         */
        getExposureMode(): ExposureMode;
        /**
         * Sets Exposure mode.
         *
         * @param { ExposureMode } aeMode - Exposure mode
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#setExposureMode
         */
        setExposureMode(aeMode: ExposureMode): void;
        /**
         * Gets current metering point.
         *
         * @returns { Point } The current metering point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#getMeteringPoint
         */
        getMeteringPoint(): Point;
        /**
         * Set the center point of the metering area.
         *
         * @param { Point } point - metering point
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#setMeteringPoint
         */
        setMeteringPoint(point: Point): void;
        /**
         * Query the exposure compensation range.
         *
         * @returns { Array<number> } The array of compensation range.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#getExposureBiasRange
         */
        getExposureBiasRange(): Array<number>;
        /**
         * Set exposure compensation.
         *
         * @param { number } exposureBias - Exposure compensation
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#setExposureBias
         */
        setExposureBias(exposureBias: number): void;
        /**
         * Query the exposure value.
         *
         * @returns { number } The exposure value.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.AutoExposure#getExposureValue
         */
        getExposureValue(): number;
        /**
         * Checks whether a specified focus mode is supported.
         *
         * @param { FocusMode } afMode - Focus mode.
         * @returns { boolean } Is the focus mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Focus#isFocusModeSupported
         */
        isFocusModeSupported(afMode: FocusMode): boolean;
        /**
         * Gets current focus mode.
         *
         * @returns { FocusMode } The current focus mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Focus#getFocusMode
         */
        getFocusMode(): FocusMode;
        /**
         * Sets focus mode.
         *
         * @param { FocusMode } afMode - Target focus mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Focus#setFocusMode
         */
        setFocusMode(afMode: FocusMode): void;
        /**
         * Sets focus point.
         *
         * @param { Point } point - Target focus point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Focus#setFocusPoint
         */
        setFocusPoint(point: Point): void;
        /**
         * Gets current focus point.
         *
         * @returns { Point } The current focus point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Focus#getFocusPoint
         */
        getFocusPoint(): Point;
        /**
         * Gets current focal length.
         *
         * @returns { number } The current focal point.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Focus#getFocalLength
         */
        getFocalLength(): number;
        /**
         * Gets all supported zoom ratio range.
         *
         * @returns { Array<number> } The zoom ratio range.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Zoom#getZoomRatioRange
         */
        getZoomRatioRange(): Array<number>;
        /**
         * Gets zoom ratio.
         *
         * @returns { number } The zoom ratio value.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Zoom#getZoomRatio
         */
        getZoomRatio(): number;
        /**
         * Sets zoom ratio.
         *
         * @param { number } zoomRatio - Target zoom ratio.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Zoom#setZoomRatio
         */
        setZoomRatio(zoomRatio: number): void;
        /**
         * Check whether the specified video stabilization mode is supported.
         *
         * @param { VideoStabilizationMode } vsMode - Video Stabilization mode.
         * @returns { boolean } Is flash mode supported.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Stabilization#isVideoStabilizationModeSupported
         */
        isVideoStabilizationModeSupported(vsMode: VideoStabilizationMode): boolean;
        /**
         * Query the video stabilization mode currently in use.
         *
         * @returns { VideoStabilizationMode } The current video stabilization mode.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Stabilization#getActiveVideoStabilizationMode
         */
        getActiveVideoStabilizationMode(): VideoStabilizationMode;
        /**
         * Set video stabilization mode.
         *
         * @param { VideoStabilizationMode } mode - video stabilization mode to set.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Stabilization#setVideoStabilizationMode
         */
        setVideoStabilizationMode(mode: VideoStabilizationMode): void;
        /**
         * Subscribes focus status change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.VideoSession#on
         */
        on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;
        /**
         * Unsubscribes from focus status change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.VideoSession#off
         */
        off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.VideoSession#on
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.VideoSession#off
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
    /**
     * Types of preconfig, which used to configure session conveniently.
     * Preconfig type contains common use cases of camera output.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Types of preconfig, which used to configure session conveniently.
     * Preconfig type contains common use cases of camera output.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum PreconfigType {
        /**
         * 720P output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * 720P output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PRECONFIG_720P = 0,
        /**
         * 1080P output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * 1080P output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PRECONFIG_1080P = 1,
        /**
         * 4K output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * 4K output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PRECONFIG_4K = 2,
        /**
         * high quality output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * high quality output for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PRECONFIG_HIGH_QUALITY = 3
    }
    /**
     * The aspect ratios of preconfig, which used to configure session conveniently.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * The aspect ratios of preconfig, which used to configure session conveniently.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum PreconfigRatio {
        /**
         * Aspect ratio 1:1 for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Aspect ratio 1:1 for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PRECONFIG_RATIO_1_1 = 0,
        /**
         * Aspect ratio 4:3 for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Aspect ratio 4:3 for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PRECONFIG_RATIO_4_3 = 1,
        /**
         * Aspect ratio 16:9 for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Aspect ratio 16:9 for preconfig.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        PRECONFIG_RATIO_16_9 = 2
    }
    /**
     * Photo session object.
     *
     * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement
     * @interface PhotoSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Photo session object.
     * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement, AutoDeviceSwitch
     * @interface PhotoSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Photo session object.
     * @extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement, AutoDeviceSwitch, Macro
     * @interface PhotoSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface PhotoSession extends Session, Flash, AutoExposure, Focus, Zoom, ColorManagement, AutoDeviceSwitch, Macro {
        /**
         * Gets whether the choosed preconfig type can be used to configure photo session.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}.
         * @returns { boolean } Whether the choosed preconfig type can be used.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets whether the choosed preconfig type can be used to configure photo session.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}.
         * @returns { boolean } Whether the choosed preconfig type can be used.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;
        /**
         * Configure photo session with the preconfig type.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Configure photo session with the preconfig type.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_4_3}
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', callback?: ErrorCallback): void;
        /**
         * Subscribes focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;
        /**
         * Unsubscribes from focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes from focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;
        /**
         * Subscribes zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;
        /**
         * Unsubscribes from zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes from zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;
        /**
         * Subscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Subscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void;
        /**
         * Unsubscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Unsubscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;
    }
    /**
     * Enum for quality prioritization.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 14
     */
    /**
     * Enum for quality prioritization.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum QualityPrioritization {
        /**
         * High quality priority.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 14
         */
        /**
         * High quality priority.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        HIGH_QUALITY = 0,
        /**
         * Power balance priority.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 14
         */
        /**
         * Power balance priority.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        POWER_BALANCE = 1
    }
    /**
     * Video session object.
     *
     * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement
     * @interface VideoSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Video session object.
     *
     * @interface VideoSession
     * @extends AutoDeviceSwitch
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Video session object.
     *
     * @extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement, AutoDeviceSwitch, Macro
     * @interface VideoSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface VideoSession extends Session, Flash, AutoExposure, Focus, Zoom, Stabilization, ColorManagement, AutoDeviceSwitch, Macro {
        /**
         * Gets whether the choosed preconfig type can be used to configure video session.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
         * @returns { boolean } Whether the choosed preconfig type can be used.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets whether the choosed preconfig type can be used to configure video session.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
         * @returns { boolean } Whether the choosed preconfig type can be used.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        canPreconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): boolean;
        /**
         * Configure video session with the preconfig type.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Configure video session with the preconfig type.
         * Must choose preconfig type from {@link PreconfigType}.
         *
         * @param { PreconfigType } preconfigType - preconfig type.
         * @param { PreconfigRatio } preconfigRatio - the aspect ratio of surface for preconfig,
         *                                            default value {@link PreconfigRatio#PRECONFIG_RATIO_16_9}.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        preconfig(preconfigType: PreconfigType, preconfigRatio?: PreconfigRatio): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', callback?: ErrorCallback): void;
        /**
         * Subscribes focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;
        /**
         * Unsubscribes from focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes from focus state change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;
        /**
         * Subscribes zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'smoothZoomInfoAvailable', callback: AsyncCallback<SmoothZoomInfo>): void;
        /**
         * Unsubscribes from zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes from zoom info event callback.
         *
         * @param { 'smoothZoomInfoAvailable' } type - Event type.
         * @param { AsyncCallback<SmoothZoomInfo> } callback - Callback used to get the zoom info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'smoothZoomInfoAvailable', callback?: AsyncCallback<SmoothZoomInfo>): void;
        /**
         * Subscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Subscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'autoDeviceSwitchStatusChange', callback: AsyncCallback<AutoDeviceSwitchStatus>): void;
        /**
         * Unsubscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Unsubscribes to auto device switch status event callback.
         *
         * @param { 'autoDeviceSwitchStatusChange' } type - Event type.
         * @param { AsyncCallback<AutoDeviceSwitchStatus> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'autoDeviceSwitchStatusChange', callback?: AsyncCallback<AutoDeviceSwitchStatus>): void;
        /**
         * Sets quality prioritization.
         * Setting to power balance reduces video quality to conserve power, suitable for long-duration recordings where
         * video quality is less critical.
         *
         * @param { QualityPrioritization } quality - Target quality prioritization, with a default of HIGH_QUALITY.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
         * 3. Parameter verification failed.
         * @throws { BusinessError } 7400103 - Session not config. The session has not been committed or configured.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 14
         */
        /**
         * Sets quality prioritization.
         * Setting to power balance reduces video quality to conserve power, suitable for long-duration recordings where
         * video quality is less critical.
         *
         * @param { QualityPrioritization } quality - Target quality prioritization, with a default of HIGH_QUALITY.
         * @throws { BusinessError } 401 - Parameter error. Possible causes:
         * 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
         * 3. Parameter verification failed.
         * @throws { BusinessError } 7400103 - Session not config. The session has not been committed or configured.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setQualityPrioritization(quality: QualityPrioritization): void;
    }
    /**
     * Secure camera session object.
     *
     * @extends Session, Flash, AutoExposure, Focus, Zoom
     * @interface SecureSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Secure camera session object.
     *
     * @extends Session, Flash, AutoExposure, Focus, Zoom
     * @interface SecureSession
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface SecureSession extends Session, Flash, AutoExposure, Focus, Zoom {
        /**
         * Add Secure output for camera.
         *
         * @param { PreviewOutput } previewOutput - Specify the output as a secure flow.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Add Secure output for camera.
         *
         * @param { PreviewOutput } previewOutput - Specify the output as a secure flow.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Add Secure output for camera.
         *
         * @param { PreviewOutput } previewOutput - Specify the output as a secure flow.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400102 - Operation not allowed.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        addSecureOutput(previewOutput: PreviewOutput): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the capture session errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', callback?: ErrorCallback): void;
        /**
         * Subscribes focus status change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Subscribes focus status change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'focusStateChange', callback: AsyncCallback<FocusState>): void;
        /**
         * Unsubscribes from focus status change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unsubscribes from focus status change event callback.
         *
         * @param { 'focusStateChange' } type - Event type.
         * @param { AsyncCallback<FocusState> } callback - Callback used to get the focus state change.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'focusStateChange', callback?: AsyncCallback<FocusState>): void;
    }
    /**
     * Camera output object.
     *
     * @interface CameraOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Camera output object.
     *
     * @interface CameraOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CameraOutput {
        /**
         * Release output instance.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Release output instance.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Release output instance.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Release output instance.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        release(): Promise<void>;
    }
    /**
     * Preview output object.
     *
     * @extends CameraOutput
     * @interface PreviewOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Preview output object.
     *
     * @extends CameraOutput
     * @interface PreviewOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface PreviewOutput extends CameraOutput {
        /**
         * Start output instance.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#start
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Start output instance.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#start
         */
        start(): Promise<void>;
        /**
         * Stop output instance.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#stop
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stop output instance.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.Session#stop
         */
        stop(): Promise<void>;
        /**
         * Subscribes frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'frameStart', callback: AsyncCallback<void>): void;
        /**
         * Unsubscribes from frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'frameStart', callback?: AsyncCallback<void>): void;
        /**
         * Subscribes frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'frameEnd', callback: AsyncCallback<void>): void;
        /**
         * Unsubscribes from frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'frameEnd', callback?: AsyncCallback<void>): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the preview output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the preview output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the preview output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the preview output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', callback?: ErrorCallback): void;
        /**
         * Get supported frame rates which can be set during session running.
         *
         * @returns { Array<FrameRateRange> } The array of supported frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Get supported frame rates which can be set during session running.
         *
         * @returns { Array<FrameRateRange> } The array of supported frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getSupportedFrameRates(): Array<FrameRateRange>;
        /**
         * Set a frame rate range.
         *
         * @param { number } minFps - Minimum frame rate per second.
         * @param { number } maxFps - Maximum frame rate per second.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Set a frame rate range.
         *
         * @param { number } minFps - Minimum frame rate per second.
         * @param { number } maxFps - Maximum frame rate per second.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setFrameRate(minFps: number, maxFps: number): void;
        /**
         * Get active frame rate range which has been set before.
         *
         * @returns { FrameRateRange } The active frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Get active frame rate range which has been set before.
         *
         * @returns { FrameRateRange } The active frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getActiveFrameRate(): FrameRateRange;
        /**
         * Gets the current preconfig type if you had already call preconfig interface.
         *
         * @returns { Profile } The current preconfig type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the current preconfig type if you had already call preconfig interface.
         *
         * @returns { Profile } The current preconfig type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getActiveProfile(): Profile;
        /**
         * Gets the preview rotation angle.
         *
         * @param { number } displayRotation - The current display rotation angle.
         * @returns { ImageRotation } The preview rotation angle.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the preview rotation angle.
         *
         * @param { number } displayRotation - The current display rotation angle.
         * @returns { ImageRotation } The preview rotation angle.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getPreviewRotation(displayRotation: number): ImageRotation;
        /**
         * Sets the preview rotation angle.
         *
         * @param { ImageRotation } previewRotation - Preview display rotation angle.
         * @param { boolean } isDisplayLocked - TRUE means the display is locked, if not set, the default is FALSE.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Sets the preview rotation angle.
         *
         * @param { ImageRotation } previewRotation - Preview display rotation angle.
         * @param { boolean } isDisplayLocked - TRUE means the display is locked, if not set, the default is FALSE.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setPreviewRotation(previewRotation: ImageRotation, isDisplayLocked?: boolean): void;
    }
    /**
     * Enumerates the image rotation angles.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enumerates the image rotation angles.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum ImageRotation {
        /**
         * The capture image rotates 0 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * The capture image rotates 0 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        ROTATION_0 = 0,
        /**
         * The capture image rotates 90 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * The capture image rotates 90 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        ROTATION_90 = 90,
        /**
         * The capture image rotates 180 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * The capture image rotates 180 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        ROTATION_180 = 180,
        /**
         * The capture image rotates 270 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * The capture image rotates 270 degrees.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        ROTATION_270 = 270
    }
    /**
     * Photo capture location
     *
     * @typedef Location
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Photo capture location
     *
     * @typedef Location
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Location {
        /**
         * Latitude.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Latitude.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        latitude: number;
        /**
         * Longitude.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Longitude.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        longitude: number;
        /**
         * Altitude.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Altitude.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        altitude: number;
    }
    /**
     * Enumerates the image quality levels.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Enumerates the image quality levels.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum QualityLevel {
        /**
         * High image quality.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * High image quality.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        QUALITY_LEVEL_HIGH = 0,
        /**
         * Medium image quality.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Medium image quality.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        QUALITY_LEVEL_MEDIUM = 1,
        /**
         * Low image quality.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Low image quality.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        QUALITY_LEVEL_LOW = 2
    }
    /**
     * Photo capture options to set.
     *
     * @typedef PhotoCaptureSetting
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Photo capture options to set.
     *
     * @typedef PhotoCaptureSetting
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface PhotoCaptureSetting {
        /**
         * Photo image quality.
         *
         * @type { ?QualityLevel }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Photo image quality.
         *
         * @type { ?QualityLevel }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        quality?: QualityLevel;
        /**
         * Photo rotation.
         *
         * @type { ?ImageRotation }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Photo rotation.
         *
         * @type { ?ImageRotation }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        rotation?: ImageRotation;
        /**
         * Photo location.
         *
         * @type { ?Location }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Photo location.
         *
         * @type { ?Location }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        location?: Location;
        /**
         * Set the mirror photo function switch, default to false.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Set the mirror photo function switch, default to false.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        mirror?: boolean;
    }
    /**
     * Photo object
     *
     * @typedef Photo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Photo object
     *
     * @typedef Photo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Photo {
        /**
         * Main image.
         *
         * @type { image.Image }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Main image.
         *
         * @type { image.Image }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        main: image.Image;
        /**
         * Release Photo object.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Release Photo object.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        release(): Promise<void>;
    }
    /**
     * Enumerates the camera video codec type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 13
     */
    /**
     * Enumerates the camera video codec type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum VideoCodecType {
        /**
         * Codec type AVC.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Codec type AVC.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        AVC = 0,
        /**
         * Codec type HEVC.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Codec type HEVC.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        HEVC = 1
    }
    /**
     * Photo output object.
     *
     * @extends CameraOutput
     * @interface PhotoOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Photo output object.
     *
     * @extends CameraOutput
     * @interface PhotoOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface PhotoOutput extends CameraOutput {
        /**
         * Start capture output.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start capture output.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        capture(callback: AsyncCallback<void>): void;
        /**
         * Start capture output.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start capture output.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        capture(): Promise<void>;
        /**
         * Start capture output.
         *
         * @param { PhotoCaptureSetting } setting - Photo capture settings.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start capture output.
         *
         * @param { PhotoCaptureSetting } setting - Photo capture settings.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        capture(setting: PhotoCaptureSetting, callback: AsyncCallback<void>): void;
        /**
         * Start capture output.
         *
         * @param { PhotoCaptureSetting } setting - Photo capture settings.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start capture output.
         * Remove optional param.
         *
         * @param { PhotoCaptureSetting } setting - Photo capture settings.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Start capture output.
         * Remove optional param.
         *
         * @param { PhotoCaptureSetting } setting - Photo capture settings.
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400104 - Session not running.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        capture(setting: PhotoCaptureSetting): Promise<void>;
        /**
         * Get supported moving photo video codec types.
         *
         * @returns { Array<VideoCodecType> } An array of supported video codec types for moving photo.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Get supported moving photo video codec types.
         *
         * @returns { Array<VideoCodecType> } An array of supported video codec types for moving photo.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getSupportedMovingPhotoVideoCodecTypes(): Array<VideoCodecType>;
        /**
         * Sets codec type for moving photo, default to AVC.
         *
         * @param { VideoCodecType } codecType - Codec type for moving photo.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Sets codec type for moving photo, default to AVC.
         *
         * @param { VideoCodecType } codecType - Codec type for moving photo.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setMovingPhotoVideoCodecType(codecType: VideoCodecType): void;
        /**
         * Subscribes photo available event callback.
         *
         * @param { 'photoAvailable' } type - Event type.
         * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes photo available event callback.
         *
         * @param { 'photoAvailable' } type - Event type.
         * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'photoAvailable', callback: AsyncCallback<Photo>): void;
        /**
         * Unsubscribes photo available event callback.
         *
         * @param { 'photoAvailable' } type - Event type.
         * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes photo available event callback.
         *
         * @param { 'photoAvailable' } type - Event type.
         * @param { AsyncCallback<Photo> } callback - Callback used to get the Photo.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'photoAvailable', callback?: AsyncCallback<Photo>): void;
        /**
         * Subscribes to photo asset event callback.
         *
         * <p>This API processes deferred photo delivery data by quickly displaying low-quality images to give
         * users the impression of faster photo capture, while also generating high-quality images to maintain the
         * final output quality. For details about the design specifications, see {@link
         * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see}. </p>
         * @param { 'photoAssetAvailable' } type - Event type.
         * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Subscribes to photo asset event callback.
         *
         * <p>This API processes deferred photo delivery data by quickly displaying low-quality images to give
         * users the impression of faster photo capture, while also generating high-quality images to maintain the
         * final output quality. For details about the design specifications, see {@link
         * https://developer.huawei.com/consumer/en/doc/best-practices/bpta-camera-shot2see}. </p>
         * @param { 'photoAssetAvailable' } type - Event type.
         * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'photoAssetAvailable', callback: AsyncCallback<photoAccessHelper.PhotoAsset>): void;
        /**
         * Unsubscribes photo asset event callback.
         *
         * @param { 'photoAssetAvailable' } type - Event type.
         * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unsubscribes photo asset event callback.
         *
         * @param { 'photoAssetAvailable' } type - Event type.
         * @param { AsyncCallback<photoAccessHelper.PhotoAsset> } callback - Callback used to get the asset.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'photoAssetAvailable', callback?: AsyncCallback<photoAccessHelper.PhotoAsset>): void;
        /**
         * Check whether to support mirror photo.
         *
         * @returns { boolean } Is the mirror supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Check whether to support mirror photo.
         *
         * @returns { boolean } Is the mirror supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isMirrorSupported(): boolean;
        /**
         * Enable mirror for photo capture.
         *
         * @param { boolean } enabled - enable photo mirror if TRUE.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 13
         */
        /**
         * Enable mirror for photo capture.
         *
         * @param { boolean } enabled - enable photo mirror if TRUE.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        enableMirror(enabled: boolean): void;
        /**
         * Subscribes capture start event callback.
         *
         * @param { 'captureStart' } type - Event type.
         * @param { AsyncCallback<number> } callback - Callback used to get the capture ID.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.PhotoOutput#captureStartWithInfo
         */
        on(type: 'captureStart', callback: AsyncCallback<number>): void;
        /**
         * Unsubscribes from capture start event callback.
         *
         * @param { 'captureStart' } type - Event type.
         * @param { AsyncCallback<number> } callback - Callback used to get the capture ID.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         * @deprecated since 11
         * @useinstead ohos.multimedia.camera.PhotoOutput#captureStartWithInfo
         */
        off(type: 'captureStart', callback?: AsyncCallback<number>): void;
        /**
         * Subscribes capture start event callback.
         *
         * @param { 'captureStartWithInfo' } type - Event type.
         * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Subscribes capture start event callback.
         *
         * @param { 'captureStartWithInfo' } type - Event type.
         * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'captureStartWithInfo', callback: AsyncCallback<CaptureStartInfo>): void;
        /**
         * Unsubscribes from capture start event callback.
         *
         * @param { 'captureStartWithInfo' } type - Event type.
         * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Unsubscribes from capture start event callback.
         *
         * @param { 'captureStartWithInfo' } type - Event type.
         * @param { AsyncCallback<CaptureStartInfo> } callback - Callback used to get the capture start info.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'captureStartWithInfo', callback?: AsyncCallback<CaptureStartInfo>): void;
        /**
         * Subscribes frame shutter event callback.
         *
         * @param { 'frameShutter' } type - Event type.
         * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes frame shutter event callback.
         *
         * @param { 'frameShutter' } type - Event type.
         * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'frameShutter', callback: AsyncCallback<FrameShutterInfo>): void;
        /**
         * Unsubscribes from frame shutter event callback.
         *
         * @param { 'frameShutter' } type - Event type.
         * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from frame shutter event callback.
         *
         * @param { 'frameShutter' } type - Event type.
         * @param { AsyncCallback<FrameShutterInfo> } callback - Callback used to get the frame shutter information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'frameShutter', callback?: AsyncCallback<FrameShutterInfo>): void;
        /**
         * Subscribes frame shutter end event callback.
         *
         * @param { 'frameShutterEnd' } type - Event type.
         * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Subscribes frame shutter end event callback.
         *
         * @param { 'frameShutterEnd' } type - Event type.
         * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'frameShutterEnd', callback: AsyncCallback<FrameShutterEndInfo>): void;
        /**
         * Unsubscribes from frame shutter end event callback.
         *
         * @param { 'frameShutterEnd' } type - Event type.
         * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unsubscribes from frame shutter end event callback.
         *
         * @param { 'frameShutterEnd' } type - Event type.
         * @param { AsyncCallback<FrameShutterEndInfo> } callback - Callback used to get the frame shutter end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'frameShutterEnd', callback?: AsyncCallback<FrameShutterEndInfo>): void;
        /**
         * Subscribes capture end event callback.
         *
         * @param { 'captureEnd' } type - Event type.
         * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes capture end event callback.
         *
         * @param { 'captureEnd' } type - Event type.
         * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'captureEnd', callback: AsyncCallback<CaptureEndInfo>): void;
        /**
         * Unsubscribes from capture end event callback.
         *
         * @param { 'captureEnd' } type - Event type.
         * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from capture end event callback.
         *
         * @param { 'captureEnd' } type - Event type.
         * @param { AsyncCallback<CaptureEndInfo> } callback - Callback used to get the capture end information.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'captureEnd', callback?: AsyncCallback<CaptureEndInfo>): void;
        /**
         * Subscribes capture ready event callback. After receiving the callback, can proceed to the next capture
         *
         * @param { 'captureReady' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Subscribes capture ready event callback. After receiving the callback, can proceed to the next capture
         *
         * @param { 'captureReady' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'captureReady', callback: AsyncCallback<void>): void;
        /**
         * Unsubscribes from capture ready event callback.
         *
         * @param { 'captureReady' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unsubscribes from capture ready event callback.
         *
         * @param { 'captureReady' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to notice capture ready.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'captureReady', callback?: AsyncCallback<void>): void;
        /**
         * Subscribes estimated capture duration event callback.
         *
         * @param { 'estimatedCaptureDuration' } type - Event type.
         * @param { AsyncCallback<number> } callback - Callback used to notify the estimated capture duration (in milliseconds).
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Subscribes estimated capture duration event callback.
         *
         * @param { 'estimatedCaptureDuration' } type - Event type.
         * @param { AsyncCallback<number> } callback - Callback used to notify the estimated capture duration (in milliseconds).
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'estimatedCaptureDuration', callback: AsyncCallback<number>): void;
        /**
         * Unsubscribes from estimated capture duration event callback.
         *
         * @param { 'estimatedCaptureDuration' } type - Event type.
         * @param { AsyncCallback<number> } callback - Callback used to notify the estimated capture duration (in milliseconds).
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Unsubscribes from estimated capture duration event callback.
         *
         * @param { 'estimatedCaptureDuration' } type - Event type.
         * @param { AsyncCallback<number> } callback - Callback used to notify the estimated capture duration (in milliseconds).
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'estimatedCaptureDuration', callback?: AsyncCallback<number>): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the photo output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the photo output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the photo output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the photo output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', callback?: ErrorCallback): void;
        /**
         * Gets the current preconfig type if you had already call preconfig interface.
         *
         * @returns { Profile } The current preconfig type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the current preconfig type if you had already call preconfig interface.
         *
         * @returns { Profile } The current preconfig type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getActiveProfile(): Profile;
        /**
         * Confirm if moving photo supported.
         *
         * @returns { boolean } TRUE if the moving photo is supported.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Confirm if moving photo supported.
         *
         * @returns { boolean } TRUE if the moving photo is supported.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isMovingPhotoSupported(): boolean;
        /**
         * Enable moving photo.
         *
         * @permission ohos.permission.MICROPHONE
         * @param { boolean } enabled - Target state for moving photo.
         * @throws { BusinessError } 201 - permission denied.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Enable moving photo.
         *
         * @permission ohos.permission.MICROPHONE
         * @param { boolean } enabled - Target state for moving photo.
         * @throws { BusinessError } 201 - permission denied.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        enableMovingPhoto(enabled: boolean): void;
        /**
         * Gets the photo rotation angle.
         *
         * @param { number } deviceDegree - The current device rotation degree.
         * @returns { ImageRotation } The photo rotation angle.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the photo rotation angle.
         *
         * @param { number } deviceDegree - The current device rotation degree.
         * @returns { ImageRotation } The photo rotation angle.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getPhotoRotation(deviceDegree: number): ImageRotation;
    }
    /**
     * Frame shutter callback info.
     *
     * @typedef FrameShutterInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Frame shutter callback info.
     *
     * @typedef FrameShutterInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface FrameShutterInfo {
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        captureId: number;
        /**
         * Timestamp for frame.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Timestamp for frame.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        timestamp: number;
    }
    /**
     * Frame shutter end callback info.
     *
     * @typedef FrameShutterEndInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 12
     */
    /**
     * Frame shutter end callback info.
     *
     * @typedef FrameShutterEndInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface FrameShutterEndInfo {
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        captureId: number;
    }
    /**
     * Capture start info.
     *
     * @typedef CaptureStartInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 11
     */
    /**
     * Capture start info.
     *
     * @typedef CaptureStartInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CaptureStartInfo {
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        captureId: number;
        /**
         * Time(in milliseconds) is the shutter time for the photo.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 11
         */
        /**
         * Time(in milliseconds) is the shutter time for the photo.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        time: number;
    }
    /**
     * Capture end info.
     *
     * @typedef CaptureEndInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Capture end info.
     *
     * @typedef CaptureEndInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CaptureEndInfo {
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Capture id.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        captureId: number;
        /**
         * Frame count.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Frame count.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        frameCount: number;
    }
    /**
     * Video output object.
     *
     * @extends CameraOutput
     * @interface VideoOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Video output object.
     *
     * @extends CameraOutput
     * @interface VideoOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface VideoOutput extends CameraOutput {
        /**
         * Start video output.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start video output.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Start video output.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start video output.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        start(): Promise<void>;
        /**
         * Stop video output.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Stop video output.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stop video output.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Stop video output.
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        stop(): Promise<void>;
        
        /**
         * Determine whether video mirror is supported.
         *
         * @returns { boolean } Is video mirror supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 15
         */
        /**
         * Determine whether video mirror is supported.
         *
         * @returns { boolean } Is video mirror supported.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        isMirrorSupported(): boolean;
        
        /**
         * Enable mirror for video capture.
         *
         * @param { boolean } enabled - enable video mirror if TRUE.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 15
         */
        /**
         * Enable mirror for video capture.
         *
         * @param { boolean } enabled - enable video mirror if TRUE.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400103 - Session not config.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        enableMirror(enabled: boolean): void;
        /**
         * Get supported frame rates which can be set during session running.
         *
         * @returns { Array<FrameRateRange> } The array of supported frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Get supported frame rates which can be set during session running.
         *
         * @returns { Array<FrameRateRange> } The array of supported frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getSupportedFrameRates(): Array<FrameRateRange>;
        /**
         * Set a frame rate range.
         *
         * @param { number } minFps - Minimum frame rate per second.
         * @param { number } maxFps - Maximum frame rate per second.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Set a frame rate range.
         *
         * @param { number } minFps - Minimum frame rate per second.
         * @param { number } maxFps - Maximum frame rate per second.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400110 - Unresolved conflicts with current configurations.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        setFrameRate(minFps: number, maxFps: number): void;
        /**
         * Get active frame rate range which has been set before.
         *
         * @returns { FrameRateRange } The active frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Get active frame rate range which has been set before.
         *
         * @returns { FrameRateRange } The active frame rate range.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getActiveFrameRate(): FrameRateRange;
        /**
         * Gets the video rotation angle.
         *
         * @param { number } deviceDegree - The current device rotation degree.
         * @returns { ImageRotation } The video rotation angle.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the video rotation angle.
         *
         * @param { number } deviceDegree - The current device rotation degree.
         * @returns { ImageRotation } The video rotation angle.
         * @throws { BusinessError } 7400101 - Parameter missing or parameter type incorrect.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getVideoRotation(deviceDegree: number): ImageRotation;
        /**
         * Subscribes frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'frameStart', callback: AsyncCallback<void>): void;
        /**
         * Unsubscribes from frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from frame start event callback.
         *
         * @param { 'frameStart' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'frameStart', callback?: AsyncCallback<void>): void;
        /**
         * Subscribes frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'frameEnd', callback: AsyncCallback<void>): void;
        /**
         * Unsubscribes from frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from frame end event callback.
         *
         * @param { 'frameEnd' } type - Event type.
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'frameEnd', callback?: AsyncCallback<void>): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', callback?: ErrorCallback): void;
        /**
         * Gets the current preconfig type if you had already call preconfig interface.
         *
         * @returns { VideoProfile } The current preconfig type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 12
         */
        /**
         * Gets the current preconfig type if you had already call preconfig interface.
         *
         * @returns { VideoProfile } The current preconfig type.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        getActiveProfile(): VideoProfile;
    }
    /**
     * Metadata object type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Metadata object type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum MetadataObjectType {
        /**
         * Face detection type.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Face detection type.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        FACE_DETECTION = 0
    }
    /**
     * Rectangle definition.
     *
     * @typedef Rect
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Rectangle definition.
     *
     * @typedef Rect
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface Rect {
        /**
         * X coordinator of top left point.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * X coordinator of top left point.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        topLeftX: number;
        /**
         * Y coordinator of top left point.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Y coordinator of top left point.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        topLeftY: number;
        /**
         * Width of this rectangle.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Width of this rectangle.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        width: number;
        /**
         * Height of this rectangle.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Height of this rectangle.
         *
         * @type { number }
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        height: number;
    }
    /**
     * Metadata object basis.
     *
     * @typedef MetadataObject
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Metadata object basis.
     *
     * @typedef MetadataObject
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface MetadataObject {
        /**
         * Metadata object type.
         *
         * @type { MetadataObjectType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Metadata object type.
         *
         * @type { MetadataObjectType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly type: MetadataObjectType;
        /**
         * Metadata object timestamp in milliseconds.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Metadata object timestamp in milliseconds.
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly timestamp: number;
        /**
         * The axis-aligned bounding box of detected metadata object.
         *
         * @type { Rect }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * The axis-aligned bounding box of detected metadata object.
         *
         * @type { Rect }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly boundingBox: Rect;
    }
    /**
     * Metadata Output object
     *
     * @extends CameraOutput
     * @interface MetadataOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 10
     */
    /**
     * Metadata Output object
     *
     * @extends CameraOutput
     * @interface MetadataOutput
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface MetadataOutput extends CameraOutput {
        /**
         * Start output metadata
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start output metadata
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        start(callback: AsyncCallback<void>): void;
        /**
         * Start output metadata
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Start output metadata
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @throws { BusinessError } 7400103 - Session not config.
         * @throws { BusinessError } 7400201 - Camera service fatal error.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        start(): Promise<void>;
        /**
         * Stop output metadata
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Stop output metadata
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        stop(callback: AsyncCallback<void>): void;
        /**
         * Stop output metadata
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Stop output metadata
         *
         * @returns { Promise<void> } Promise used to return the result.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        stop(): Promise<void>;
        /**
         * Subscribes to metadata objects available event callback.
         *
         * @param { 'metadataObjectsAvailable' } type - Event type.
         * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes to metadata objects available event callback.
         *
         * @param { 'metadataObjectsAvailable' } type - Event type.
         * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'metadataObjectsAvailable', callback: AsyncCallback<Array<MetadataObject>>): void;
        /**
         * Unsubscribes from metadata objects available event callback.
         *
         * @param { 'metadataObjectsAvailable' } type - Event type.
         * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from metadata objects available event callback.
         *
         * @param { 'metadataObjectsAvailable' } type - Event type.
         * @param { AsyncCallback<Array<MetadataObject>> } callback - Callback used to get the available metadata objects.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'metadataObjectsAvailable', callback?: AsyncCallback<Array<MetadataObject>>): void;
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Subscribes to error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        on(type: 'error', callback: ErrorCallback): void;
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 10
         */
        /**
         * Unsubscribes from error events.
         *
         * @param { 'error' } type - Event type.
         * @param { ErrorCallback } callback - Callback used to get the video output errors.
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        off(type: 'error', callback?: ErrorCallback): void;
    }
    /**
     * Enum for camera concurrent type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Enum for camera concurrent type.
     *
     * @enum { number }
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    enum CameraConcurrentType {
        /**
         * Cameras concurrency with limited capabilities.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Cameras concurrency with limited capabilities.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_LIMITED_CAPABILITY = 0,
        /**
         * Cameras concurrency with full capabilities.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Cameras concurrency with full capabilities.
         *
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        CAMERA_FULL_CAPABILITY = 1
    }
    /**
     * Camera concurrent information.
     *
     * @interface CameraConcurrentInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @since 18
     */
    /**
     * Camera concurrent information.
     *
     * @interface CameraConcurrentInfo
     * @syscap SystemCapability.Multimedia.Camera.Core
     * @atomicservice
     * @since 19
     */
    interface CameraConcurrentInfo {
        /**
         * Camera instance.
         *
         * @type { CameraDevice }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Camera instance.
         *
         * @type { CameraDevice }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly device: CameraDevice;
        /**
         * Camera concurrent type.
         *
         * @type { CameraConcurrentType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Camera concurrent type.
         *
         * @type { CameraConcurrentType }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly type: CameraConcurrentType;
        /**
         * Supported scene modes.
         *
         * @type { Array<SceneMode> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Supported scene modes.
         *
         * @type { Array<SceneMode> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly modes: Array<SceneMode>;
        /**
         * Supported outputCapability.
         *
         * @type { Array<CameraOutputCapability> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @since 18
         */
        /**
         * Supported outputCapability.
         *
         * @type { Array<CameraOutputCapability> }
         * @readonly
         * @syscap SystemCapability.Multimedia.Camera.Core
         * @atomicservice
         * @since 19
         */
        readonly outputCapabilities: Array<CameraOutputCapability>;
    }
}
export default camera;
