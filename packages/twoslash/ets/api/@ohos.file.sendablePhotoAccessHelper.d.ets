/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import lang from '../arkts/@arkts.lang';
import photoAccessHelper from './@ohos.file.photoAccessHelper';
/**
 * Helper functions to access image and video assets
 *
 * @namespace sendablePhotoAccessHelper
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12
 */
declare namespace sendablePhotoAccessHelper {
    /**
     * Returns an instance of PhotoAccessHelper
     *
     * @param { Context } context - Hap context information
     * @returns { PhotoAccessHelper } Instance of PhotoAccessHelper
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @StageModelOnly
     * @atomicservice
     * @since 12
     */
    function getPhotoAccessHelper(context: Context): PhotoAccessHelper;
    /**
     * Enumerates media file types.
     *
     * @enum { number } PhotoType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    const enum PhotoType {
        /**
         * Image.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        IMAGE = 1,
        /**
         * Video.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
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
     * @since 14
     */
    enum PhotoSubtype {
        /**
         * Photo, which is the default type.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        DEFAULT = 0,
        /**
         * Moving photo.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        MOVING_PHOTO = 3,
        /**
         * Burst photo.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 14
         */
        BURST = 4
    }
    /**
     * Enumerates the dynamic range types of media assets.
     *
     * @enum { number } DynamicRangeType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14
     */
    enum DynamicRangeType {
        /**
         * Standard dynamic range (SDR).
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 14
         */
        SDR = 0,
        /**
         * High dynamic range (HDR).
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 14
         */
        HDR = 1
    }
    /**
     * Defines the photo asset
     *
     * @interface PhotoAsset
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    interface PhotoAsset extends lang.ISendable {
        /**
         * uri of the asset.
         *
         * @type { string }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        readonly uri: string;
        /**
         * Photo type, image or video
         *
         * @type { PhotoType }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly photoType: PhotoType;
        /**
         * Display name (with a file name extension) of the asset.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly displayName: string;
        /**
         * Obtains a PhotoAsset member parameter.
         *
         * @param { string } member - Name of the member parameter to obtain.
         * Except 'uri', 'media_type', 'subtype', and 'display_name', you must pass in PhotoKeys in fetchColumns.
         * For example, to obtain the title, pass in fetchColumns: ['title'].
         * @returns { MemberType } Returns the value of the specified photo asset member
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        get(member: string): photoAccessHelper.MemberType;
        /**
         * Sets a PhotoAsset member parameter.
         *
         * @param { string } member - Name of the parameter to set, for example, PhotoKeys.TITLE. The value contains 1 to 255 characters.
         * @param { string } value - Value to set. Only the value of PhotoKeys. TITLE can be changed.
         * The title must meet the following requirements:
         * - It does not contain a file name extension.
         * - The file name, which is in the format of title+file name extension, does not exceed 255 characters.
         * - The title does not contain any of the following characters:\ / : * ? " ' ` < > | { } [ ]
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
         */
        set(member: string, value: string): void;
        /**
         * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        commitModify(): Promise<void>;
        /**
         * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { image.Size } [size] - Size of the thumbnail.
         * @returns { Promise<image.PixelMap> } Returns the thumbnail's pixelMap.
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getThumbnail(size?: image.Size): Promise<image.PixelMap>;
        /**
         * Converts a Sendable PhotoAsset object to a non-Sendable PhotoAsset object.
         *
         * @returns { photoAccessHelper.PhotoAsset } Returns the instance if the operation is successful.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        convertToPhotoAsset(): photoAccessHelper.PhotoAsset;
    }
    /**
     * Provides APIs to manage the file retrieval result.
     *
     * @interface FetchResult
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    interface FetchResult<T> extends lang.ISendable {
        /**
         * Obtains the total number of files in the result set.
         *
         * @returns { number } Total number of objects.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getCount(): number;
        /**
         * Checks whether the cursor is in the last row of the result set.
         *
         * @returns { boolean } Whether the object is the last one in the fetch result.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        isAfterLast(): boolean;
        /**
         * Obtains the first asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the first object in the fetch result.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getFirstObject(): Promise<T>;
        /**
         * Obtains the next asset in the result set. This API uses a promise to return the result.
         * Before using this API, you must use isAfterLast() to check whether the current position is the end of the result set.
         *
         * @returns { Promise<T> } Returns the next object
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getNextObject(): Promise<T>;
        /**
         * Obtains the last asset in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<T> } Returns the last object
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getLastObject(): Promise<T>;
        /**
         * Obtains the asset with the given index in the result set. This API uses a promise to return the result.
         *
         * @param { number } index - Index of the asset to obtain. The value starts from 0.
         * @returns { Promise<T> } Returns the object
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getObjectByPosition(index: number): Promise<T>;
        /**
         * Obtains all the file assets in the result set. This API uses a promise to return the result.
         *
         * @returns { Promise<Array<T>> } Returns all the objects
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAllObjects(): Promise<Array<T>>;
        /**
         * Closes this FetchFileResult instance to invalidate it.
         * After this instance is closed, the APIs in this instance cannot be invoked.
         *
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        close(): void;
    }
    /**
     * Enumerates the album types.
     *
     * @enum { number } AlbumType
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    const enum AlbumType {
        /**
         * User album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        USER = 0,
        /**
         * System album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        SYSTEM = 1024
    }
    /**
     * Album subtype
     *
     * @enum { number } AlbumSubtype
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    const enum AlbumSubtype {
        /**
         * User album.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        USER_GENERIC = 1,
        /**
         * Favorites.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        FAVORITE = 1025,
        /**
         * Video album, which contains all video assets.
         *
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
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
         * @since 12
         */
        ANY = 2147483647
    }
    /**
     * Defines the abstract interface of albums.
     *
     * @interface AbsAlbum
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    interface AbsAlbum extends lang.ISendable {
        /**
         * Album type
         *
         * @type { AlbumType }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly albumType: AlbumType;
        /**
         * Album subtype
         *
         * @type { AlbumSubtype }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly albumSubtype: AlbumSubtype;
        /**
         * Album name.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        albumName: string;
        /**
         * Album uri.
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly albumUri: string;
        /**
         * Number of assets in the album
         *
         * @type { number }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly count: number;
        /**
         * Cover uri for the album
         *
         * @type { string }
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly coverUri: string;
        /**
         * Obtains media assets. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the media assets.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    }
    /**
     * Defines the album.
     *
     * @interface Album
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12
     */
    interface Album extends AbsAlbum {
        /**
         * Number of image assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly imageCount?: number;
        /**
         * Number of video assets in the album
         *
         * @type { ?number }
         * @readonly
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        readonly videoCount?: number;
        /**
         * Commits the modification on the album attributes to the database. This API uses a promise to return the result.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        commitModify(): Promise<void>;
        /**
         * Converts this Sendable album to a non-Sendable album.
         *
         * @returns { photoAccessHelper.Album } Returns the instance if the operation is successful.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        convertToPhotoAlbum(): photoAccessHelper.Album;
    }
    /**
     * Helper functions to access photos and albums.
     *
     * @interface PhotoAccessHelper
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12
     */
    interface PhotoAccessHelper extends lang.ISendable {
        /**
         * Obtains media assets. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } options - Options for fetching the media assets.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 201 - Permission denied.
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
        /**
         * Obtains burst assets. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { string } burstKey - Burst asset options.
         * @returns { Promise<FetchResult<PhotoAsset>> } Returns the fetch result.
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
        /**
         * Creates an image or video asset with the specified file type, file name extension, and options.
         * This API uses a promise to return the result. If the caller does not have the ohos.permission.WRITE_IMAGEVIDEO permission,
         * you can create a media asset by using a security component. For details, see Creating a Media Asset Using a Security Component.
         *
         * @permission ohos.permission.WRITE_IMAGEVIDEO
         * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
         * @param { string } extension - File name extension, for example, 'jpg'. The value contains 1 to 255 characters.
         * @param { CreateOptions } [options] - Options for creating the media asset, for example, {title: 'testPhoto'}.
         * @returns { Promise<string> } Returns the uri of the newly created asset
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @atomicservice
         * @since 12
         */
        createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>;
        /**
         * Obtains albums. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { FetchOptions } [options] - Options for fetching the albums.
         * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
        /**
         * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
         *
         * @permission ohos.permission.READ_IMAGEVIDEO
         * @param { AlbumType } type - Type of the albums to obtain.
         * @param { AlbumSubtype } subtype - Subtype of the album.
         * @param { FetchOptions } [options] - Options for fetching the albums.
         * If this parameter is not specified, the albums are obtained based on the album type by default.
         * @returns { Promise<FetchResult<Album>> } - Returns the fetch result
         * @throws { BusinessError } 201 - Permission denied
         * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
         * <br>2. Incorrect parameter types; 3. Parameter verification failed.
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
        /**
         * Releases this PhotoAccessHelper instance. This API uses a promise to return the result.
         * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
         *
         * @returns { Promise<void> } Returns void
         * @throws { BusinessError } 14000011 - Internal system error
         * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
         * @since 12
         */
        release(): Promise<void>;
    }
}
export default sendablePhotoAccessHelper;
