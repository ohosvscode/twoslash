/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @file Helper functions to access image and video assets
 * @kit MediaLibraryKit
 */
import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @since 10
 */
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 11
 */
/**
 * Helper functions to access image and video assets
 *
 * @namespace photoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare namespace photoAccessHelper {
    /**
     * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @StageModelOnly
     * @since 10
     */
    /**
     * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @StageModelOnly
     * @atomicservice
     * @since 11
     */
    /**
     * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @StageModelOnly
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    function getPhotoAccessHelper(context: Context): PhotoAccessHelper;
    /**
     * Enumerates media file types.
     *
     * @enum { number } PhotoType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Enumerates media file types.
     *
     * @enum { number } PhotoType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Enumerates media file types.
     *
     * @enum { number } PhotoType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    enum PhotoType {
        /**
         * Image asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Image asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Image asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        IMAGE = 1,
        /**
         * Video asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Video asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Video asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        VIDEO
    }
    
    /**
     * Enumerates the PhotoAsset types.
     *
     * @enum { number } PhotoSubtype
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    enum PhotoSubtype {
        
        /**
         * Default Photo Type
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        DEFAULT = 0,
        /**
         * Moving Photo Type
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        MOVING_PHOTO = 3,
        /**
         * Burst Photo Type
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        BURST = 4
    }
    /**
     * Enumerates the formats for displaying media assets.
     *
     * @enum { number } DynamicRangeType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    enum DynamicRangeType {
        /**
         * Standard dynamic range (SDR).
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        SDR = 0,
        /**
         * High dynamic range (HDR).
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        HDR = 1
    }
    
    /**
     * Enumerates the file locations.
     *
     * @enum { number } Photo asset position, such as local device or cloud
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16
     */
    enum PositionType {
        
        /**
         * Asset exists only in local device
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 16
         */
        LOCAL = 1,
        
        /**
         * Stored only on the cloud.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 16
         */
        CLOUD = 2,
        /**
         * Stored both on a local device and cloud.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 16
         */
        LOCAL_AND_CLOUD = 3
    }
    /**
     * Enumerates the types of recommended images.
     *
     * @enum { number } RecommendationType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    enum RecommendationType {
        /**
         * QR_OR_BAR_CODE indicates that QR code or barcode photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        QR_OR_BAR_CODE = 1,
        /**
         * QR_CODE indicates that QR code photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        QR_CODE = 2,
        /**
         * BAR_CODE indicates that barcode photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        BAR_CODE = 3,
        /**
         * ID_CARD indicates that QR code or barcode photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        ID_CARD = 4,
        /**
         * PROFILE_PICTURE indicates that profile picture photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        PROFILE_PICTURE = 5,
        /**
         * PASSPORT indicates that passport photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        PASSPORT = 6,
        /**
         * BANK_CARD indicates that bank card photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        BANK_CARD = 7,
        /**
         * DRIVER_LICENSE indicates that driver license photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        DRIVER_LICENSE = 8,
        /**
         * DRIVING_LICENSE indicates that driving license photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        DRIVING_LICENSE = 9,
        /**
         * FEATURED_SINGLE_PORTRAIT indicates that featured single portrait photos can be recommended
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        FEATURED_SINGLE_PORTRAIT = 10
    }
    /**
     * Enumerates the asset delivery modes.
     *
     * @enum { number } DeliveryMode
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    enum DeliveryMode {
        /**
         * Fast mode.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        FAST_MODE = 0,
        /**
         * High-quality mode.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        HIGH_QUALITY_MODE = 1,
        /**
         * Balance mode.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        BALANCE_MODE = 2
    }
    /**
     * Enumerates the video transcoding mode.
     *
     * @enum { number } CompatibleMode
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15
     */
    enum CompatibleMode {
        /**
         * Maintains the original video format.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 15
         */
        ORIGINAL_FORMAT_MODE = 0,
        /**
         * Converts the HDR content to SDR format.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 15
         */
        COMPATIBLE_FORMAT_MODE = 1
    }
    /**
     * Data handler used to notify the progress of required media asset data
     *
     * @interface MediaAssetProgressHandler
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15
     */
    interface MediaAssetProgressHandler {
        /**
         * Indicates the progress of required media asset data
         *
         * @param { number } progress - Progress in percentage. Value range: 0 to 100
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 15
         */
        onProgress(progress: number): void;
    }
    /**
     * Enum: complete button text
     *
     * @enum { number } CompleteButtonText
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14
     */
    enum CompleteButtonText {
        /**
         * Complete button text: done
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        TEXT_DONE = 0,
        /**
         * Complete button text: send
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        TEXT_SEND = 1,
        /**
         * Complete button text: add
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        TEXT_ADD = 2
    }
    /**
     * Options to request media asset
     *
     * @interface RequestOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    interface RequestOptions {
        /**
         * Indicates the delivery mode
         *
         * @type { DeliveryMode }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        deliveryMode: DeliveryMode;
        /**
         * Indicates the compatible mode
         *
         * @type { ?CompatibleMode }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 15
         */
        compatibleMode?: CompatibleMode;
        /**
         * data handler used to notify the progress of required media asset data
         *
         * @type { ?MediaAssetProgressHandler }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 15
         */
        mediaAssetProgressHandler?: MediaAssetProgressHandler;
    }
    /**
     * Media asset handler, which can be used to customize the media asset processing logic in onDataPrepared.
     *
     * @interface MediaAssetDataHandler
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    interface MediaAssetDataHandler<T> {
        /**
         * Indicates required media asset data is prepared
         *
         * @param { T } data - the returned data of media asset
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        /**
         * Indicates required media asset data is prepared
         *
         * @param { T } data - the returned data of media asset
         * @param { Map<string, string> } [map] - additional information for the data
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        onDataPrepared(data: T, map?: Map<string, string>): void;
    }
    /**
     * Data handler when quick request image is finished
     *
     * @typedef QuickImageDataHandler
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13
     */
    interface QuickImageDataHandler<T> {
        /**
         * Indicates required media asset data quickly is prepared
         *
         * @param { T } data - the returned data of picture
         * @param { image.ImageSource } imageSource - the returned data of imageSource
         * @param { Map<string, string> } map - additional information for the data
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 13
         */
        onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void;
    }
    /**
     * A media asset manager class, used for manipulating the read and write operations of media assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    /**
     * A media asset manager class, used for manipulating the read and write operations of media assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14
     */
    class MediaAssetManager {
        /**
         * Request image
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoAsset } asset - Image to request.
         * @param { RequestOptions } requestOptions - Options for requesting the image.
         * @param { MediaAssetDataHandler<image.ImageSource> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
         * @returns { Promise<string> } Returns request id
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        static requestImage(context: Context, asset: PhotoAsset, requestOptions: RequestOptions, dataHandler: MediaAssetDataHandler<image.ImageSource>): Promise<string>;
        /**
         * Requests an image quickly.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoAsset } asset - Image to request.
         * @param { RequestOptions } requestOptions - Options for requesting the image.
         * @param { QuickImageDataHandler<image.Picture> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
         * @returns { Promise<string> } Returns request id
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 13
         */
        static quickRequestImage(context: Context, asset: PhotoAsset, requestOptions: RequestOptions, dataHandler: QuickImageDataHandler<image.Picture>): Promise<string>;
        /**
         * Requests image data.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoAsset } asset - Image to request.
         * @param { RequestOptions } requestOptions - Options for requesting the image.
         * @param { MediaAssetDataHandler<ArrayBuffer> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
         * @returns { Promise<string> } Returns request id
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        static requestImageData(context: Context, asset: PhotoAsset, requestOptions: RequestOptions, dataHandler: MediaAssetDataHandler<ArrayBuffer>): Promise<string>;
        /**
         * Requests a moving photo object, which can be used to request the asset data of the moving photo.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoAsset } asset - Image to request.
         * @param { RequestOptions } requestOptions - Options for requesting the image.
         * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
         * @returns { Promise<string> } Returns request id
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Requests a moving photo object, which can be used to request the asset data of the moving photo.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoAsset } asset - Image to request.
         * @param { RequestOptions } requestOptions - Options for requesting the image.
         * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - Media asset handler, which invokes a callback to return the image when the requested image is ready.
         * @returns { Promise<string> } Returns request id
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 18
         */
        static requestMovingPhoto(context: Context, asset: PhotoAsset, requestOptions: RequestOptions, dataHandler: MediaAssetDataHandler<MovingPhoto>): Promise<string>;
        /**
         * Cancels a request for the asset, the callback of which has not been triggered yet.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { string } requestId - ID of the request to cancel. It is a valid request ID returned by requestImage.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        static cancelRequest(context: Context, requestId: string): Promise<void>;
        /**
         * Request video file
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoAsset } asset - Image to request.
         * @param { RequestOptions } requestOptions - Options for requesting the video asset.
         * @param { string } fileUri - the destination file uri to save the video data
         * @param { MediaAssetDataHandler<boolean> } dataHandler - Media asset handler. When the requested video is written to the specified directory, a callback is triggered.
         * @returns { Promise<string> } Returns request id
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Request video file
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoAsset } asset - Image to request.
         * @param { RequestOptions } requestOptions - Options for requesting the video asset.
         * @param { string } fileUri - the destination file uri to save the video data
         * @param { MediaAssetDataHandler<boolean> } dataHandler - Media asset handler. When the requested video is written to the specified directory, a callback is triggered.
         * @returns { Promise<string> } Returns request id
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 801 - Capability not supported.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 15
         */
        static requestVideoFile(context: Context, asset: PhotoAsset, requestOptions: RequestOptions, fileUri: string, dataHandler: MediaAssetDataHandler<boolean>): Promise<string>;
        /**
         * Load moving photo
         *
         * @param { Context } context - AbilityContext or UIExtensionContext instance.
         * @param { string } imageFileUri - image file uri of the moving photo to be loaded
         * @param { string } videoFileUri - video file uri of the moving photo to be loaded
         * @returns { Promise<MovingPhoto> } Returns moving photo
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Load moving photo
         *
         * @param { Context } context - AbilityContext or UIExtensionContext instance.
         * @param { string } imageFileUri - image file uri of the moving photo to be loaded
         * @param { string } videoFileUri - video file uri of the moving photo to be loaded
         * @returns { Promise<MovingPhoto> } Returns moving photo
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        static loadMovingPhoto(context: Context, imageFileUri: string, videoFileUri: string): Promise<MovingPhoto>;
    }
    /**
     * Indicates the type of photo asset member.
     *
     * @typedef { number | string | boolean } MemberType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Indicates the type of photo asset member.
     *
     * @typedef { number | string | boolean } MemberType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    type MemberType = number | string | boolean;
    /**
     * Provides APIs for encapsulating file asset attributes.
     *
     * @interface PhotoAsset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Provides APIs for encapsulating file asset attributes.
     *
     * @interface PhotoAsset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Provides APIs for encapsulating file asset attributes.
     *
     * @interface PhotoAsset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    interface PhotoAsset {
        /**
         * uri of the asset.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * uri of the asset.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        readonly uri: string;
        /**
         * Photo type, image or video
         *
         * @type { PhotoType }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Photo type, image or video
         *
         * @type { PhotoType }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Photo type, image or video
         *
         * @type { PhotoType }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        readonly photoType: PhotoType;
        /**
         * Display name (with a file name extension) of the asset.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Display name (with a file name extension) of the asset.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Display name (with a file name extension) of the asset.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        readonly displayName: string;
        /**
         * Obtains a PhotoAsset member parameter.
         *
         * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
         * @returns { MemberType } Returns the value of the specified photo asset member
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains a PhotoAsset member parameter.
         *
         * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
         * @returns { MemberType } Returns the value of the specified photo asset member
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains a PhotoAsset member parameter.
         *
         * @param { string } member - Photo asset member. for example : get(PhotoKeys.SIZE)
         * @returns { MemberType } Returns the value of the specified photo asset member
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        get(member: string): MemberType;
        /**
         * Sets a PhotoAsset member parameter.
         *
         * @param { string } member - Photo asset member
         * @param { string } value - The new value of the member.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
         */
        set(member: string, value: string): void;
        /**
         * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { AsyncCallback<void> } callback - Callback that returns no value.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000001 - Invalid display name
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { AsyncCallback<void> } callback - Callback that returns no value.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000001 - Invalid display name
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        commitModify(callback: AsyncCallback<void>): void;
        /**
         * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000001 - Invalid display name
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000001 - Invalid display name
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        commitModify(): Promise<void>;
        /**
         * Opens this file in read-only mode. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AsyncCallback<number> } callback - Callback used to return the file descriptor (FD) of the file opened.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         */
        getReadOnlyFd(callback: AsyncCallback<number>): void;
        /**
         * Opens this file in read-only mode. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @returns { Promise<number> } Returns the read only fd
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         */
        getReadOnlyFd(): Promise<number>;
        /**
         * Closes a file. This API uses an asynchronous callback to return the result.
         *
         * @param { number } fd - FD of the file to close.
         * @param { AsyncCallback<void> } callback - Callback that returns no value.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         */
        close(fd: number, callback: AsyncCallback<void>): void;
        /**
         * Closes a file. This API uses a promise to return the result.
         *
         * @param { number } fd - FD of the file to close.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         */
        close(fd: number): Promise<void>;
        /**
         * Obtains the thumbnail of this file. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
        /**
         * Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { image.Size } size - Size of the thumbnail.
         * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the PixelMap of the thumbnail.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
        /**
         * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { image.Size } [size] - Size of the thumbnail.
         * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        getThumbnail(size?: image.Size): Promise<image.PixelMap>;
        /**
         * Clone asset.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { string } title - The title of asset.
         * @returns { Promise<PhotoAsset> } Returns asset
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
         * <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 14
         */
        clone(title: string): Promise<PhotoAsset>;
    }
    /**
     * Enumeration of photo asset members
     *
     * @enum { string } PhotoKeys
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Enumeration of photo asset members
     *
     * @enum { string } PhotoKeys
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Enumeration of photo asset members
     *
     * @enum { string } PhotoKeys
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20
     */
    enum PhotoKeys {
        /**
         * Asset uri, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Asset uri, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        URI = 'uri',
        /**
         * Photo type of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Photo type of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Photo type of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        PHOTO_TYPE = 'media_type',
        /**
         * Asset name, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Asset name, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Asset name, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        DISPLAY_NAME = 'display_name',
        /**
         * Size of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Size of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Size of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        SIZE = 'size',
        /**
         * Creation date of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Creation date of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Creation date of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        DATE_ADDED = 'date_added',
        /**
         * Modified date of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Modified date of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        DATE_MODIFIED = 'date_modified',
        /**
         * Duration of video files, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Duration of video files, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Duration of video files, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        DURATION = 'duration',
        /**
         * Width of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Width of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Width of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        WIDTH = 'width',
        /**
         * Height of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Height of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Height of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        HEIGHT = 'height',
        /**
         * Date taken of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Date taken of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Date taken of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
    
         */
        DATE_TAKEN = 'date_taken',
        /**
         * Orientation of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Orientation of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Orientation of the image asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        ORIENTATION = 'orientation',
        /**
         * Favorite state of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Favorite state of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Favorite state of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        FAVORITE = 'is_favorite',
        /**
         * Title of the asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Title of the asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Title of the asset
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        TITLE = 'title',
        
        /**
         * Asset position, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 16
         */
        /**
         * Asset position, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        POSITION = 'position',
        /**
         * Creation time of the asset in milliseconds, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Creation time of the asset in milliseconds, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        DATE_ADDED_MS = 'date_added_ms',
        /**
         * Modified time of the asset in milliseconds, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Modified time of the asset in milliseconds, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        DATE_MODIFIED_MS = 'date_modified_ms',
        /**
         * Photo subtype of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Photo subtype of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        PHOTO_SUBTYPE = 'subtype',
        /**
         * Dynamic range type of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Dynamic range type of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        DYNAMIC_RANGE_TYPE = 'dynamic_range_type',
        /**
         * Cover position of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Cover position of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        COVER_POSITION = 'cover_position',
        /**
         * Unique uuid of the burst photos, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Unique uuid of the burst photos, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        BURST_KEY = 'burst_key',
        /**
         * Width and height information of lcd picture, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Width and height information of lcd picture, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        LCD_SIZE = 'lcd_size',
        /**
         * Width and height information of thumbnail picture, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Width and height information of thumbnail picture, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        THM_SIZE = 'thm_size',
        /**
         * Detail time of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 13
         */
        /**
         * Detail time of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        DETAIL_TIME = 'detail_time',
        /**
         * Date taken of the asset in milliseconds, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 13
         */
        /**
         * Date taken of the asset in milliseconds, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        DATE_TAKEN_MS = 'date_taken_ms',
        /**
         * Suffix of the asset, read only
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 18
         */
        MEDIA_SUFFIX = 'media_suffix'
    }
    /**
     * Enumerates the key album attributes.
     *
     * @enum { string } AlbumKeys
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Enumerates the key album attributes.
     *
     * @enum { string } AlbumKeys
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    enum AlbumKeys {
        /**
         * URI of the album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * URI of the album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * URI of the album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        URI = 'uri',
        /**
         * Name of the album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Name of the album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        ALBUM_NAME = 'album_name'
    }
    /**
     * Defines the options for fetching media files.
     *
     * @interface FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Defines the options for fetching media files.
     *
     * @interface FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Defines the options for fetching media files.
     *
     * @interface FetchOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    interface FetchOptions {
        /**
         * Indicates the members to query.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Indicates the members to query.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Indicates the members to query.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        fetchColumns: Array<string>;
        /**
         * Predicates that specify the fetch criteria.
         *
         * @type { dataSharePredicates.DataSharePredicates }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Predicates that specify the fetch criteria.
         *
         * @type { dataSharePredicates.DataSharePredicates }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Predicates that specify the fetch criteria.
         *
         * @type { dataSharePredicates.DataSharePredicates }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        predicates: dataSharePredicates.DataSharePredicates;
    }
    /**
     * Config to create photo asset
     *
     * @interface PhotoCreationConfig
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    interface PhotoCreationConfig {
        /**
         * Title of the asset
         *
         * @type { ?string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        title?: string;
        /**
         * Extension of the asset
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        fileNameExtension: string;
        /**
         * Specify photo type of the asset to create, include image or video
         *
         * @type { PhotoType }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        photoType: PhotoType;
        /**
         * Specify photo subtype of the asset to create, include default or moving_photo
         *
         * @type { ?PhotoSubtype }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        subtype?: PhotoSubtype;
    }
    /**
     * Options for creating an image or video asset.
     *
     * @interface CreateOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Options for creating an image or video asset.
     *
     * @interface CreateOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    interface CreateOptions {
        /**
         * Title of the asset
         *
         * @type { ?string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Title of the asset
         *
         * @type { ?string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        title?: string;
        /**
         * Specify subtype of the asset to create
         *
         * @type { ?PhotoSubtype }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        subtype?: PhotoSubtype;
    }
    /**
     * Provides APIs to manage the file retrieval result.
     *
     * @interface FetchResult
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Provides APIs to manage the file retrieval result.
     *
     * @interface FetchResult
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    /**
     * Provides APIs to manage the file retrieval result.
     *
     * @interface FetchResult
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 20
     */
    interface FetchResult<T> {
        /**
         * Obtains the total number of files in the result set.
         *
         * @returns { number } Total number of objects.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains the total number of files in the result set.
         *
         * @returns { number } Total number of objects.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains the total number of files in the result set.
         *
         * @returns { number } Total number of objects.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getCount(): number;
        /**
         * Checks whether the cursor is in the last row of the result set.
         * You need to check whether the object is the last one before calling getNextObject.
         *
         * @returns { boolean } Whether the object is the last one in the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Checks whether the cursor is in the last row of the result set.
         * You need to check whether the object is the last one before calling getNextObject.
         *
         * @returns { boolean } Whether the object is the last one in the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Checks whether the cursor is in the last row of the result set.
         * You need to check whether the object is the last one before calling getNextObject.
         *
         * @returns { boolean } Whether the object is the last one in the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        isAfterLast(): boolean;
        /**
         * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the first file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getFirstObject(callback: AsyncCallback<T>): void;
        /**
         * Obtains the first file asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the first object in the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains the first file asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the first object in the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains the first file asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the first object in the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getFirstObject(): Promise<T>;
        /**
         * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
         * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
         * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
         * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the next file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getNextObject(callback: AsyncCallback<T>): void;
        /**
         * Obtains the next file asset in the result set. This API uses a promise to return the result.
         * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
         *
         * @returns { Promise<T> } Returns the next object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains the next file asset in the result set. This API uses a promise to return the result.
         * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
         *
         * @returns { Promise<T> } Returns the next object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains the next file asset in the result set. This API uses a promise to return the result.
         * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
         *
         * @returns { Promise<T> } Returns the next object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getNextObject(): Promise<T>;
        /**
         * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<T> } callback - Callback used to return the last file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getLastObject(callback: AsyncCallback<T>): void;
        /**
         * Obtains the last file asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the last object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains the last file asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the last object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains the last file asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the last object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getLastObject(): Promise<T>;
        /**
         * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { number } index - Index of the file asset to obtain. The value starts from 0.
         * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { number } index - Index of the file asset to obtain. The value starts from 0.
         * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { number } index - Index of the file asset to obtain. The value starts from 0.
         * @param { AsyncCallback<T> } callback - Callback used to return the file asset obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getObjectByPosition(index: number, callback: AsyncCallback<T>): void;
        /**
         * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
         *
         * @param { number } index - Index of the file asset to obtain. The value starts from 0.
         * @returns { Promise<T> } Returns the object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
         *
         * @param { number } index - Index of the file asset to obtain. The value starts from 0.
         * @returns { Promise<T> } Returns the object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
         *
         * @param { number } index - Index of the file asset to obtain. The value starts from 0.
         * @returns { Promise<T> } Returns the object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getObjectByPosition(index: number): Promise<T>;
        /**
         * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
         *
         * @param { AsyncCallback<Array<T>> } callback - Callback used to return an array of all file assets in the result set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getAllObjects(callback: AsyncCallback<Array<T>>): void;
        /**
         * Obtains all the file assets in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<Array<T>> } Returns all the objects
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains all the file assets in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<Array<T>> } Returns all the objects
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Obtains all the file assets in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<Array<T>> } Returns all the objects
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getAllObjects(): Promise<Array<T>>;
        /**
         * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance cannot be invoked.
         *
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        close(): void;
    }
    /**
     * Enumerates the album types.
     *
     * @enum { number } AlbumType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Enumerates the album types.
     *
     * @enum { number } AlbumType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    enum AlbumType {
        /**
         * User album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * User album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        USER = 0,
        /**
         * System album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * System album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        SYSTEM = 1024
    }
    /**
     * Enumerate the album subtypes.
     *
     * @enum { number } AlbumSubtype
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Enumerate the album subtypes.
     *
     * @enum { number } AlbumSubtype
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    enum AlbumSubtype {
        /**
         * Generic user-created albums.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Generic user-created albums.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        USER_GENERIC = 1,
        /**
         * Favorite album, which assets are marked as favorite.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Favorite album, which assets are marked as favorite.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        FAVORITE = 1025,
        /**
         * Video album, which contains all video assets.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Video album, which contains all video assets.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        VIDEO,
        
        /**
         * Image album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        IMAGE = 1031,
        /**
         * Any album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Any album
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        ANY = 2147483647
    }
    /**
     * Defines the abstract interface of albums.
     *
     * @interface AbsAlbum
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Defines the abstract interface of albums.
     *
     * @interface AbsAlbum
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    interface AbsAlbum {
        /**
         * Album type
         *
         * @type { AlbumType }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Album type
         *
         * @type { AlbumType }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        readonly albumType: AlbumType;
        /**
         * Album subtype
         *
         * @type { AlbumSubtype }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Album subtype
         *
         * @type { AlbumSubtype }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        readonly albumSubtype: AlbumSubtype;
        /**
         * Album name.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Album name.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        albumName: string;
        /**
         * Album uri.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Album uri.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        readonly albumUri: string;
        /**
         * Number of assets in the album
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Number of assets in the album
         *
         * @type { number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        readonly count: number;
        /**
         * Cover uri for the album
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        readonly coverUri: string;
        /**
         * Obtains image and video assets. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the image and video assets.
         * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains image and video assets. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the image and video assets.
         * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
        /**
         * Fetch assets in an album.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Fetch options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Fetch assets in an album.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Fetch options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        /**
         * Fetch assets in an album.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Fetch options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 20
         */
        getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    }
    /**
     * Defines the album.
     *
     * @extends AbsAlbum
     * @interface Album
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Defines the album.
     *
     * @extends AbsAlbum
     * @interface Album
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @since 12
     */
    interface Album extends AbsAlbum {
        /**
         * Number of image assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        /**
         * Number of image assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        readonly imageCount?: number;
        /**
         * Number of video assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        /**
         * Number of video assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        readonly videoCount?: number;
        /**
         * Modify metadata for the album
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { AsyncCallback<void> } callback - Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        commitModify(callback: AsyncCallback<void>): void;
        /**
         * Modify metadata for the album
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        commitModify(): Promise<void>;
        /**
         * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist.
         * This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
         * @param { AsyncCallback<void> } callback - Callback that returns no value.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
         */
        addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
        /**
         * Adds image and video assets to an album. Before the operation, ensure that the image and video assets to add and the album exist.
         * This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
         */
        addAssets(assets: Array<PhotoAsset>): Promise<void>;
        /**
         * Removes image and video assets from an album. The album and file resources must exist.
         * This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
         * @param { AsyncCallback<void> } callback - Callback that returns no value.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
         */
        removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
        /**
         * Removes image and video assets from an album. The album and file resources must exist.
         * This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
         */
        removeAssets(assets: Array<PhotoAsset>): Promise<void>;
    }
    /**
     * Helper functions to access photos and albums.
     *
     * @interface PhotoAccessHelper
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Helper functions to access photos and albums.
     *
     * @interface PhotoAccessHelper
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Helper functions to access photos and albums.
     *
     * @interface PhotoAccessHelper
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    interface PhotoAccessHelper {
        /**
         * Obtains image and video assets. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the image and video assets.
         * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains image and video assets. This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the image and video assets.
         * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback used to return the image and video assets obtained.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
        /**
         * Obtains image and video assets. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the image and video assets.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains image and video assets. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the image and video assets.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
        /**
         * Obtains burst assets. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { string } burstKey - UUID of a set of burst photos (BURST_KEY of PhotoKeys). The value is a string of 36 characters.
         * @param { FetchOptions } options - Options for fetching the burst photos.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        /**
         * Obtains burst assets. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { string } burstKey - UUID of a set of burst photos (BURST_KEY of PhotoKeys). The value is a string of 36 characters.
         * @param { FetchOptions } options - Options for fetching the burst photos.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 20
         */
        getBurstAssets(burstKey: string, options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
        /**
         * Creates an image or video asset with the specified file type, file name extension, and options.
         * This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'.
         * @param { CreateOptions } options - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
         * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Creates an image or video asset with the specified file type, file name extension, and options.
         * This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'.
         * @param { CreateOptions } options - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
         * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        createAsset(photoType: PhotoType, extension: string, options: CreateOptions, callback: AsyncCallback<string>): void;
        /**
         * Creates an image or video asset with the specified file type and file name extension.
         * This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'.
         * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Creates an image or video asset with the specified file type and file name extension.
         * This API uses an asynchronous callback to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'.
         * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        createAsset(photoType: PhotoType, extension: string, callback: AsyncCallback<string>): void;
        /**
         * Creates an image or video asset with the specified file type, file name extension, and options.
         * This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'.
         * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
         * @returns { Promise<string> } Returns the uri of the newly created asset
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Creates an image or video asset with the specified file type, file name extension, and options.
         * This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'.
         * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
         * @returns { Promise<string> } Returns the uri of the newly created asset
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        createAsset(photoType: PhotoType, extension: string, options?: CreateOptions): Promise<string>;
        /**
         * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return the result.
         * Before the operation, ensure that the albums to obtain exist.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Type of the album.
         * @param { AlbumSubtype } subtype - Subtype of the album.
         * @param { FetchOptions } options - Options for fetching the albums.
         * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return the result.
         * Before the operation, ensure that the albums to obtain exist.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Type of the album.
         * @param { AlbumSubtype } subtype - Subtype of the album.
         * @param { FetchOptions } options - Options for fetching the albums.
         * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
        /**
         * Obtains albums by type. This API uses an asynchronous callback to return the result.
         * Before the operation, ensure that the albums to obtain exist.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Type of the album.
         * @param { AlbumSubtype } subtype - Subtype of the album.
         * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains albums by type. This API uses an asynchronous callback to return the result.
         * Before the operation, ensure that the albums to obtain exist.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Type of the album.
         * @param { AlbumSubtype } subtype - Subtype of the album.
         * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, callback: AsyncCallback<FetchResult<Album>>): void;
        /**
         * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
         * Before the operation, ensure that the albums to obtain exist.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Type of the album.
         * @param { AlbumSubtype } subtype - Subtype of the album.
         * @param { FetchOptions } [options] - Options for fetching the albums.
         * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
         * Before the operation, ensure that the albums to obtain exist.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Type of the album.
         * @param { AlbumSubtype } subtype - Album subtype.
         * @param { FetchOptions } [options] - Options for fetching the albums.
         * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @since 12
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: FetchOptions): Promise<FetchResult<Album>>;
        /**
         * Registers listening for the specified URI. This API uses a callback to return the result.
         *
         * @param { string } uri - URI of the photo asset, URI of the album, or DefaultChangeUri.
         * @param { boolean } forChildUris - Whether to perform fuzzy listening.
         * If uri is the URI of an album, the value true means to listen for the changes of the files in the album;
         * the value false means to listen for the changes of the album only.
         * If uri is the URI of a photoAsset, there is no difference between true and false for forChildUris.
         * If uri is DefaultChangeUri, forChildUris must be set to true. If forChildUris is false,
         * the URI cannot be found and no message can be received.
         * @param { Callback<ChangeData> } callback - Callback used to return the ChangeData.
         * Multiple callback listeners can be registered for a URI.
         * You can use unRegisterChange to unregister all listeners for the URI or a specified callback listener.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        registerChange(uri: string, forChildUris: boolean, callback: Callback<ChangeData>): void;
        /**
         * Unregisters listening for the specified URI. Multiple callbacks can be registered for a URI for listening.
         * You can use this API to unregister the listening of the specified callbacks or all callbacks.
         *
         * @param { string } uri - URI of the photo asset, URI of the album, or DefaultChangeUri.
         * @param { Callback<ChangeData> } [callback] - The callback function to unregister.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        unRegisterChange(uri: string, callback?: Callback<ChangeData>): void;
        /**
         * Creates a dialog box for deleting media files. This API uses an asynchronous callback to return the result.
         * The deleted media files are moved to the trash.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be deleted.
         * @param { AsyncCallback<void> } callback - Callback that returns no value.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
         */
        createDeleteRequest(uriList: Array<string>, callback: AsyncCallback<void>): void;
        /**
         * Creates a dialog box for deleting media files. This API uses a promise to return the result.
         * The deleted media files are moved to the trash.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be deleted.
         * @returns { Promise<void> } - Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900012 - Permission denied
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         * @deprecated since 11
         * @useinstead photoAccessHelper.MediaAssetChangeRequest#deleteAssets
         */
        createDeleteRequest(uriList: Array<string>): Promise<void>;
        /**
         * Create a save dialog to save photos
         *
         * @param { Array<string> } srcFileUris - List of the file uris to be saved
         * @param { Array<PhotoCreationConfig> } photoCreationConfigs - List of the photo asset creation configs
         * @returns { Promise<Array<string>> } - Returns the media library file uri list to application which has been authorized
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        showAssetsCreationDialog(srcFileUris: Array<string>, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;
        /**
         * Create asset and grant short term permission to the application.
         *
         * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
         * @param { PhotoCreationConfig } photoCreationConfig - photo asset creation configs
         * @returns { Promise<string> } - Returns the media library file uri to application which has been authorized
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        createAssetWithShortTermPermission(photoCreationConfig: PhotoCreationConfig): Promise<string>;
        /**
         * Grants the save permission for URIs. This API uses a promise to return the result.
         *
         * @param { Array<string> } srcFileUris - URIs of the images or videos to be granted with the permission.
         * @returns { Promise<Array<string>> } - Returns the authorized uri list
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        requestPhotoUrisReadPermission(srcFileUris: Array<string>): Promise<Array<string>>;
        /**
         * Releases this PhotoAccessHelper instance. This API uses an asynchronous callback to return the result.
         * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
         *
         * @param { AsyncCallback<void> } callback - Callback used to return the result.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        release(callback: AsyncCallback<void>): void;
        /**
         * Releases this PhotoAccessHelper instance. This API uses a promise to return the result.
         * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
         *
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900020 - Invalid argument
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        release(): Promise<void>;
        /**
         * Applies media changes. This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { MediaChangeRequest } mediaChangeRequest - Request for asset changes or album changes.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        applyChanges(mediaChangeRequest: MediaChangeRequest): Promise<void>;
        /**
         * Obtains the list of image or video file name extensions supported by the media library.
         *
         * @param { PhotoType } photoType - Type of the file.
         * @returns { Promise<Array<string>> } - Return the list of image or video suffixes supported by the media library
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 18
         */
        getSupportedPhotoFormats(photoType: PhotoType): Promise<Array<string>>;
    }
    /**
     * Enumeration types of data change.
     *
     * @enum { number } NotifyType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum NotifyType {
        /**
         * Data(assets or albums) have been newly created
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_ADD,
        /**
         * Data(assets or albums) have been modified
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_UPDATE,
        /**
         * Data(assets or albums) have been removed
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_REMOVE,
        /**
         * Assets have been added to an album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_ALBUM_ADD_ASSET,
        /**
         * Assets have been removed from an album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        NOTIFY_ALBUM_REMOVE_ASSET
    }
    /**
     * Enumeration uris for registerChange.
     *
     * @enum { string } DefaultChangeUri
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    enum DefaultChangeUri {
        /**
         * Uri for default PhotoAsset, use with forDescendant{true}, will receive all PhotoAsset's change notifications
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DEFAULT_PHOTO_URI = 'file://media/Photo',
        /**
         * Uri for default Album, use with forDescendant{true}, will receive all Album's change notifications
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        DEFAULT_ALBUM_URI = 'file://media/PhotoAlbum'
    }
    /**
     * Defines the change data
     *
     * @interface ChangeData
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    interface ChangeData {
        /**
         * The NotifyType of ChangeData
         *
         * @type { NotifyType }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        type: NotifyType;
        /**
         * The changed uris
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        uris: Array<string>;
        /**
         * Change details of the asset uris to an album.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        extraUris: Array<string>;
    }
    /**
     * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
     *
     * @enum { string } PhotoViewMIMETypes
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
     *
     * @enum { string } PhotoViewMIMETypes
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * PhotoViewMIMETypes represents the type of media resource that photo picker selects.
     *
     * @enum { string } PhotoViewMIMETypes
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    export enum PhotoViewMIMETypes {
        /**
         * IMAGE_TYPE indicates that the selected media resources are images.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * IMAGE_TYPE indicates that the selected media resources are images.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * IMAGE_TYPE indicates that the selected media resources are images.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        IMAGE_TYPE = 'image/*',
        /**
         * VIDEO_TYPE indicates that the selected media resources are videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * VIDEO_TYPE indicates that the selected media resources are videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * VIDEO_TYPE indicates that the selected media resources are videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        VIDEO_TYPE = 'video/*',
        /**
         * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * IMAGE_VIDEO_TYPE indicates that the selected media resources are images and videos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        IMAGE_VIDEO_TYPE = '*/*',
        /**
         * MOVING_PHOTO_IMAGE_TYPE indicates that the selected media resources are moving photos.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        MOVING_PHOTO_IMAGE_TYPE = 'image/movingPhoto'
    }
    /**
     * Enumeration type of filter operator.
     *
     * @enum { number } FilterOperator
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    export enum FilterOperator {
        /**
         * Filter operator: equal to
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        EQUAL_TO = 0,
        /**
         * Filter operator: not equal to
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        NOT_EQUAL_TO = 1,
        /**
         * Filter operator: more than
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        MORE_THAN = 2,
        /**
         * Filter operator: less than
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        LESS_THAN = 3,
        /**
         * Filter operator: more than or equal to
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        MORE_THAN_OR_EQUAL_TO = 4,
        /**
         * Filter operator: less than or equal to
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        LESS_THAN_OR_EQUAL_TO = 5,
        /**
         * Filter operator: between
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        BETWEEN = 6
    }
    /**
     * Enumeration type of single selection mode
     *
     * @enum { number } SingleSelectionMode
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18
     */
    export enum SingleSelectionMode {
        /**
         * browser mode
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 18
         */
        BROWSER_MODE = 0,
        /**
         * select directly mode
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 18
         */
        SELECT_MODE = 1,
        /**
         * browser and select mode
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 18
         */
        BROWSER_AND_SELECT_MODE = 2
    }
    /**
     * Class BaseSelectOptions, which is extracted from class PhotoSelectOptions
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    class BaseSelectOptions {
        /**
         * The Type of the file in the picker window.
         *
         * @type { ?PhotoViewMIMETypes }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * The Type of the file in the picker window.
         *
         * @type { ?PhotoViewMIMETypes }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * The Type of the file in the picker window.
         * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
         *
         * @type { ?PhotoViewMIMETypes }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        MIMEType?: PhotoViewMIMETypes;
        /**
         * Maximum number of images for a single selection.
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Maximum number of images for a single selection.
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Maximum number of images for a single selection.
         * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        maxSelectNumber?: number;
        /**
         * Support search.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Support search.
         * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
         *
         * @type { ?boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        isSearchSupported?: boolean;
        /**
         * Support taking photos.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Support taking photos.
         * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
         *
         * @type { ?boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        isPhotoTakingSupported?: boolean;
        /**
        * The recommendation options when use recommendation photo function.
        *
        * @type { ?RecommendationOptions }
        * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
        * @atomicservice
        * @since 11
        */
        /**
         * The recommendation options when use recommendation photo function.
         * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
         *
         * @type { ?RecommendationOptions }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        recommendationOptions?: RecommendationOptions;
        /**
         * The uri for the preselected files.
         *
         * @type { ?Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * The uri for the preselected files.
         * Move from class PhotoSelectOptions to it's base class BaseSelectOptions
         *
         * @type { ?Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        preselectedUris?: Array<string>;
        /**
         * Support preview in single selection mode or not
         *
         * @type { ?boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        isPreviewForSingleSelectionSupported?: boolean;
        /**
         * The mode of single selection
         *
         * @type { ?SingleSelectionMode }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 18
         */
        singleSelectionMode?: SingleSelectionMode;
        /**
         * Media file filtering configuration.
         *
         * @type { ?MimeTypeFilter }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        mimeTypeFilter?: MimeTypeFilter;
        /**
         * Media file size filtering configuration.
         *
         * @type { ?FileSizeFilter }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        fileSizeFilter?: FileSizeFilter;
        /**
         * Media file video duration filtering configuration.
         *
         * @type { ?VideoDurationFilter }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        videoDurationFilter?: VideoDurationFilter;
    }
    /**
     * Media file filtering configuration.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    class MimeTypeFilter {
        /**
         * Indicates the media file type to be filtered.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        mimeTypeArray: Array<string>;
    }
    /**
     * Media file size filtering configuration.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    class FileSizeFilter {
        /**
         * Specifing filter operator.
         *
         * @type { FilterOperator }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        filterOperator: FilterOperator;
        /**
         * Specifing the size of files to be filtered.
         *
         * @type { number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        fileSize: number;
        /**
         * Specifing the upper limit of file size to be filtered.
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        extraFileSize?: number;
    }
    /**
     * Media file video duration filtering configuration.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19
     */
    class VideoDurationFilter {
        /**
         * Specifing filter operator.
         *
         * @type { FilterOperator }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        filterOperator: FilterOperator;
        /**
         * Specifing the video duration of files to be filtered.
         *
         * @type { number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        videoDuration: number;
        /**
         * Specifing the upper limit of video duration to be filtered.
         *
         * @type { ?number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 19
         */
        extraVideoDuration?: number;
    }
    /**
     * PhotoSelectOptions Object
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * PhotoSelectOptions Object
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * PhotoSelectOptions extends base class BaseSelectOptions
     *
     * @extends BaseSelectOptions
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    class PhotoSelectOptions extends BaseSelectOptions {
        /**
         * Support editing photos.
         *
         * @type { ?boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        isEditSupported?: boolean;
        /**
         * Support select original photo or not
         *
         * @type { ?boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        isOriginalSupported?: boolean;
        /**
         * SubWindow name
         *
         * @type { ?string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        subWindowName?: string;
        /**
         * Complete button text
         *
         * @type { ?CompleteButtonText }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        completeButtonText?: CompleteButtonText;
    }
    /**
     * Defines the image recommendation options.
     * The image recommendation feature depends on the image data analysis capability, which varies with devices.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    class RecommendationOptions {
        /**
         * Type of the recommended image.
         *
         * @type { ?RecommendationType }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        recommendationType?: RecommendationType;
        /**
         * Text based on which images are recommended.
         * If both recommendationType and textContextInfo are set, textContextInfo takes precedence over recommendationType.
         *
         * @type { ?TextContextInfo }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        textContextInfo?: TextContextInfo;
    }
    /**
     * Represents the text information about the recommended images.
     *
     * @interface TextContextInfo
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    interface TextContextInfo {
        /**
         * Text based on which images are recommended.
         * The text cannot exceed 250 characters. The default value is an empty string.
         *
         * @type { ?string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        text?: string;
    }
    /**
     * Defines information about the images or videos selected.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Defines information about the images or videos selected.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Defines information about the images or videos selected.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    class PhotoSelectResult {
        /**
         * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
         * For details about how to use the media file URI, see Using a Media File URI.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
         * For details about how to use the media file URI, see Using a Media File URI.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets with temporary authorization.
         * For details about how to use the media file URI, see Using a Media File URI.
         *
         * @type { Array<string> }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        photoUris: Array<string>;
        /**
         * Whether the selected media asset is the original image.
         * The value true means that the selected media asset is the original image, and false means the opposite.
         * The default value is false.
         *
         * @type { boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Whether the selected media asset is the original image.
         * The value true means that the selected media asset is the original image, and false means the opposite.
         * The default value is false.
         *
         * @type { boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Whether the selected media asset is the original image.
         * The value true means that the selected media asset is the original image, and false means the opposite.
         * The default value is false.
         *
         * @type { boolean }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        isOriginalPhoto: boolean;
    }
    /**
     * Provides APIs for the user to select images and videos.
     * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10
     */
    /**
     * Provides APIs for the user to select images and videos.
     * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Provides APIs for the user to select images and videos.
     * Before using the APIs of PhotoViewPicker, you need to create a PhotoViewPicker instance.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    class PhotoViewPicker {
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
         * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
         * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } [option] - represents the options provided in select mode.
         * @returns { Promise<PhotoSelectResult> } Returns the uris for the selected files.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } option - represents the options provided in select mode.
         * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } option - represents the options provided in select mode.
         * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { PhotoSelectOptions } option - represents the options provided in select mode.
         * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 10
         */
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        /**
         * Pull up the photo picker based on the selection mode.
         *
         * @param { AsyncCallback<PhotoSelectResult> } callback - Returns the PhotoSelectResult by photo picker
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 13900042 - Unknown error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @crossplatform
         * @atomicservice
         * @since 12
         */
        select(callback: AsyncCallback<PhotoSelectResult>): void;
    }
    /**
     * Enumerates the types of the resources to write.
     *
     * @enum { number } ResourceType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    enum ResourceType {
        /**
         * Image resource
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        IMAGE_RESOURCE = 1,
        /**
         * Video resource
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        VIDEO_RESOURCE = 2
    }
    /**
     * Enumerates the types of image files to save.
     *
     * @enum { number } ImageFileType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13
     */
    enum ImageFileType {
        /**
         * JPEG
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 13
         */
        JPEG = 1,
        /**
         * HEIF
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 13
         */
        HEIF = 2
    }
    /**
     * Defines the interface of media change request.
     *
     * @interface MediaChangeRequest
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    interface MediaChangeRequest {
    }
    /**
     * Defines the class of media asset change request.
     *
     * @implements MediaChangeRequest
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11
     */
    class MediaAssetChangeRequest implements MediaChangeRequest {
        /**
         * Constructor used to initialize an asset change request.
         *
         * @param { PhotoAsset } asset - Assets to change.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        /**
         * Constructor used to initialize an asset change request.
         *
         * @param { PhotoAsset } asset - Assets to change.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        constructor(asset: PhotoAsset);
        /**
         * Creates an image asset change request.
         *
         * @param { Context } context - Context of the ability instance.
         * @param { string } fileUri - Data source of the image asset, which is specified by a URI in the application sandbox directory.
         * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        /**
         * Creates an image asset change request.
         *
         * @param { Context } context - Context of the ability instance.
         * @param { string } fileUri - Data source of the image asset, which is specified by a URI in the application sandbox directory.
         * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;
        /**
         * Creates a video asset change request.
         *
         * @param { Context } context - Context of the ability instance.
         * @param { string } fileUri - Data source of the video asset, which is specified by a URI in the application sandbox directory.
         * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;
        /**
         * Create an asset change request based on the file type and filename extension.
         *
         * @param { Context } context - Context of the ability instance.
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'.
         * @param { CreateOptions } [options] - Options for creating the image or video asset, for example, {title: 'testPhoto'}.
         * @returns { MediaAssetChangeRequest } - Returns a MediaAssetChangeRequest instance
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest;
        /**
         * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { Array<PhotoAsset> } assets - Array of assets to delete.
         * @returns { Promise<void> } - Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        static deleteAssets(context: Context, assets: Array<PhotoAsset>): Promise<void>;
        /**
         * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { Context } context - Context of the ability instance.
         * @param { Array<string> } uriList - URIs of the media files to delete.
         * @returns { Promise<void> } - Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
         * @throws { BusinessError } 14000011 - System inner fail
         * @static
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        static deleteAssets(context: Context, uriList: Array<string>): Promise<void>;
        /**
         * Get the asset.
         *
         * @returns { PhotoAsset } - Returns the asset
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        /**
         * Obtains the asset in this asset change request.
         *
         * @returns { PhotoAsset } - Returns the asset
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        getAsset(): PhotoAsset;
        /**
         * Sets the media asset title.
         *
         * @param { string } title - Title to set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        /**
         * Sets the media asset title.
         *
         * @param { string } title - Title to set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        setTitle(title: string): void;
        /**
         * Obtains the handler used for writing a file to cache.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<number> } Returns the write cache handler
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 14000011 - System inner fail
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        getWriteCacheHandler(): Promise<number>;
        /**
         * Adds a resource using fileUri.
         *
         * @param { ResourceType } type - Type of the resource to add.
         * @param { string } fileUri - Data source of the resource to be added, which is specified by a URI in the application sandbox directory.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
         * @throws { BusinessError } 14000011 - System inner fail
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        addResource(type: ResourceType, fileUri: string): void;
        /**
         * Adds a resource using ArrayBuffer data.
         *
         * @param { ResourceType } type - Type of the resource to add.
         * @param { ArrayBuffer } data - Data of the resource to add.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 11
         */
        addResource(type: ResourceType, data: ArrayBuffer): void;
        /**
         * Saves the photo taken by the camera.
         *
         * @throws { BusinessError } 14000011 - System inner fail
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        saveCameraPhoto(): void;
        /**
         * Saves the photo taken by the camera.
         *
         * @param { ImageFileType } imageFileType - File type of the photo to save.
         * @throws { BusinessError } 14000011 - System inner fail
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 13
         */
        saveCameraPhoto(imageFileType: ImageFileType): void;
        /**
         * Discards the photo taken by the camera.
         *
         * @throws { BusinessError } 14000011 - Internal system error
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        discardCameraPhoto(): void;
        /**
         * Sets the orientation of this image.
         *
         * @param { number } orientation - Rotation angle of the image to set. The value can only be 0, 90, 180, or 270.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 15
         */
        setOrientation(orientation: number): void;
    }
    /**
     * Defines the class of media album change request.
     *
     * @implements MediaChangeRequest
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11
     */
    class MediaAlbumChangeRequest implements MediaChangeRequest {
        /**
         * The constructor to create a MediaAlbumChangeRequest instance.
         *
         * @param { Album } album - Specify which album to change
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        constructor(album: Album);
        /**
         * Obtains the album in the current album change request.
         *
         * @returns { Album } - Returns the album
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        getAlbum(): Album;
        /**
         * Sets the album name.
         *
         * @param { string } name - Album name to set.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        setAlbumName(name: string): void;
        /**
         * Add assets to the album.
         *
         * @param { Array<PhotoAsset> } assets - Array of assets to add.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        addAssets(assets: Array<PhotoAsset>): void;
        /**
         * Removes assets from the album.
         *
         * @param { Array<PhotoAsset> } assets - Array of assets to remove.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @throws { BusinessError } 14000016 - Operation Not Support
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 11
         */
        removeAssets(assets: Array<PhotoAsset>): void;
    }
    /**
     * Provides APIs for managing a moving photo instance.
     *
     * @interface MovingPhoto
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    interface MovingPhoto {
        /**
         * Requests the image data and video data of this moving photo and writes them to the specified URIs, respectively.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { string } imageFileUri - URI to which the image data of the moving photo is to be written.
         * @param { string } videoFileUri - URI to which the video data of the moving photo is to be written.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        requestContent(imageFileUri: string, videoFileUri: string): Promise<void>;
        /**
         * Requests the moving photo content of the specified resource type and writes it to the specified URI.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
         * @param { string } fileUri - URI to which the moving photo content is to be written.
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        requestContent(resourceType: ResourceType, fileUri: string): Promise<void>;
        /**
         * Requests the moving photo content of the specified resource type and returns it in ArrayBuffer format.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
         * @returns { Promise<ArrayBuffer> } Returns array buffer of the content
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        requestContent(resourceType: ResourceType): Promise<ArrayBuffer>;
        /**
         * Obtains the URI of this moving photo.
         *
         * @returns { string } Returns uri of the moving photo
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types.
         * @throws { BusinessError } 14000011 - System inner fail
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        getUri(): string;
    }
}
export default photoAccessHelper;
