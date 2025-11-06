/*
 * Copyright (c) 2024-2025 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */
import { Callback } from './@ohos.base';
import Context from './application/Context';
/**
 * Providers interfaces to create a {@link abilityConnectionManager} instances.
 *
 * @namespace abilityConnectionManager
 * @syscap SystemCapability.DistributedSched.AppCollaboration
 * @since 18
 */
declare namespace abilityConnectionManager {
    /**
     * Collaborative application information.
     * @interface PeerInfo
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    interface PeerInfo {
        /**
         * Device identifier. The actual value is udid-hash confused with appid and salt value based on sha256.
         * This id remains unchanged after application installation. If the application is uninstalled and reinstalled,
         * the obtained ID will change.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        deviceId: string;
        /**
         * bundle name.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        bundleName: string;
        /**
         * module name.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        moduleName: string;
        /**
         * ability name.
         * @type { string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        abilityName: string;
        /**
         * Service name.
         * @type { ?string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        serviceName?: string;
    }
    /**
     * Connection options for ability connection sessions.
     * @interface ConnectOptions
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    interface ConnectOptions {
        /**
         * Send Data Configuration Options. WiFi needs to be turned on.
         * @type { ?boolean }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        needSendData?: boolean;
        /**
         * Startup option.
         * @type { ?StartOptionParams }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        startOptions?: StartOptionParams;
        /**
         * Additional information about the ability connection request.
         * @type { ?Record<string, string> }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        parameters?: Record<string, string>;
    }
    /**
     * Connection result.
     * @interface ConnectResult
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    interface ConnectResult {
        /**
         * Connection is accepted or rejected.
         * @type { boolean }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        isConnected: boolean;
        /**
         * Connection failure error code.
         * @type { ?ConnectErrorCode }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        errorCode?: ConnectErrorCode;
        /**
         * Indicates the reason for reject.
         * @type { ?string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        reason?: string;
    }
    /**
     * Connection failure error code.
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    export enum ConnectErrorCode {
        /**
         * A connected session exists between the two application.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        CONNECTED_SESSION_EXISTS = 0,
        /**
         * The peer application rejects the collaboration request.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        PEER_APP_REJECTED = 1,
        /**
         * Connection failed due to the device's WiFi being off.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        LOCAL_WIFI_NOT_OPEN = 2,
        /**
         * Connection failed due to the peer's WiFi being off.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        PEER_WIFI_NOT_OPEN = 3,
        /**
         * Connection failed due to the peer ability has not implemented the onCollaborate method.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        PEER_ABILITY_NO_ONCOLLABORATE = 4,
        /**
         * The connection failed due to an internal system error.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        SYSTEM_INTERNAL_ERROR = 5
    }
    /**
     * The constant for params of the start option.
     *
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    export enum StartOptionParams {
        /**
         * Launching the peer application to the foreground.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        START_IN_FOREGROUND = 0
    }
    /**
     * Connection event callback information.
     * @interface EventCallbackInfo
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    interface EventCallbackInfo {
        /**
         * Ability connection Session id.
         * @type { number }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        sessionId: number;
        /**
         * Indicates the reason of ability disconnection.
         * @type { ?DisconnectReason }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        reason?: DisconnectReason;
        /**
         * Received message data.
         * @type { ?string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        msg?: string;
        /**
         * Received data.
         * @type { ?ArrayBuffer }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        data?: ArrayBuffer;
    }
    /**
     * Collaborate event information.
     * @interface CollaborateEventInfo
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    interface CollaborateEventInfo {
        /**
         * Indicates the type of collaborate event.
         * @type { CollaborateEventType }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        eventType: CollaborateEventType;
        /**
         * Indicates the collaborate message of collaborate event.
         * @type { ?string }
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        eventMsg?: string;
    }
    /**
     * CollaborateEventType.
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    enum CollaborateEventType {
        /**
         * Indicates send task failure.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        SEND_FAILURE = 0,
        /**
         * Indicates color space conversion failure.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        COLOR_SPACE_CONVERSION_FAILURE = 1
    }
    /**
     * DisconnectReason.
     * @enum { number }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    enum DisconnectReason {
        /**
         * Indicates that the reason is the peer application actively closes the collaboration.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        PEER_APP_CLOSE_COLLABORATION = 0,
        /**
         * Indicates that the reason is the peer application exit.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        PEER_APP_EXIT = 1,
        /**
         * Indicates that the reason is a network disconnection.
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        NETWORK_DISCONNECTED = 2
    }
    /**
     * Registers connect event.
     *
     * @param { 'connect' } type - Registration Type, 'connect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function on(type: 'connect', sessionId: number, callback: Callback<EventCallbackInfo>): void;
    /**
     * Unregisters connect event.
     *
     * @param { 'connect' } type - Registration Type, 'connect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('connect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function off(type: 'connect', sessionId: number, callback?: Callback<EventCallbackInfo>): void;
    /**
     * Registers disconnect event.
     *
     * @param { 'disconnect' } type - Registration Type, 'disconnect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function on(type: 'disconnect', sessionId: number, callback: Callback<EventCallbackInfo>): void;
    /**
     * Unregisters disconnect event.
     *
     * @param { 'disconnect' } type - Registration Type, 'connect'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('disconnect') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function off(type: 'disconnect', sessionId: number, callback?: Callback<EventCallbackInfo>): void;
    /**
     * Registers receiveMessage event.
     *
     * @param { 'receiveMessage' } type - Registration Type, 'receiveMessage'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function on(type: 'receiveMessage', sessionId: number, callback: Callback<EventCallbackInfo>): void;
    /**
     * Unregisters receiveMessage event.
     *
     * @param { 'receiveMessage' } type - Registration Type, 'receiveMessage'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveMessage') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function off(type: 'receiveMessage', sessionId: number, callback?: Callback<EventCallbackInfo>): void;
    /**
     * Registers receiveData event.
     *
     * @param { 'receiveData' } type - Registration Type, 'receiveData'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function on(type: 'receiveData', sessionId: number, callback: Callback<EventCallbackInfo>): void;
    /**
     * Unregisters receiveData event.
     *
     * @param { 'receiveData' } type - Registration Type, 'receiveData'.
     * @param { number } sessionId - Ability connection Session id.
     * @param { Callback<EventCallbackInfo> } callback - Used to handle ('receiveData') command.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function off(type: 'receiveData', sessionId: number, callback?: Callback<EventCallbackInfo>): void;
    /**
     * Create the Ability connection Session.
     *
     * @permission ohos.permission.INTERNET and ohos.permission.GET_NETWORK_INFO and ohos.permission.SET_NETWORK_INFO and ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } serviceName - Service name, which must be consistent at both ends.
     * @param { Context } context - The context of an ability.
     * @param { PeerInfo } peerInfo - Collaborative application information at the sink end.
     * @param { ConnectOptions } connectOptions - Connection options for Ability connection sessions.
     * @returns { number}  Returns the Ability connection Session id.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function createAbilityConnectionSession(serviceName: string, context: Context, peerInfo: PeerInfo, connectOptions: ConnectOptions): number;
    /**
     * Destroy the ability connection session
     *
     * @param { number } sessionId - Ability connection Session id.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function destroyAbilityConnectionSession(sessionId: number): void;
    /**
     * Get the application information in the ability connection session
     *
     * @param { number } sessionId - Ability connection Session id.
     * @returns { PeerInfo | undefined } Returns the collaborative application information at the sink end.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function getPeerInfoById(sessionId: number): PeerInfo | undefined;
    /**
     * Initiate an ability session connection.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @returns { Promise<ConnectResult> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function connect(sessionId: number): Promise<ConnectResult>;
    /**
     * Disconnect a Ability connection Session.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function disconnect(sessionId: number): void;
    /**
     * Accept connection request and prepare the connection environment.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { string } token - Token for collaborative service management
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function acceptConnect(sessionId: number, token: string): Promise<void>;
    /**
     * Notify the peer end of the reason why the connection is rejected.
     *
     * @param { string } token - Token for collaborative service management.
     * @param { string } reason - Reason for connection rejection.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function reject(token: string, reason: string): void;
    /**
     * Send message data.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { string } msg - Message data to be sent.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function sendMessage(sessionId: number, msg: string): Promise<void>;
    /**
     * Send data.
     *
     * @param { number } sessionId - Ability connection Session id.
     * @param { ArrayBuffer } data - Data to be sent.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    function sendData(sessionId: number, data: ArrayBuffer): Promise<void>;
    /**
     * The keys for ability onCollaborate parameters.
     * @enum { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    export enum CollaborationKeys {
        /**
         * The key of peerinfo
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        PEER_INFO = 'ohos.collaboration.key.peerInfo',
        /**
         * The key of connect options
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        CONNECT_OPTIONS = 'ohos.collaboration.key.connectOptions',
        /**
         * The key of collaboration type
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        COLLABORATE_TYPE = 'ohos.collaboration.key.abilityCollaborateType'
    }
    /**
     * Ability collaboration values.
     * @enum { string }
     * @syscap SystemCapability.DistributedSched.AppCollaboration
     * @since 18
     */
    export enum CollaborationValues {
        /**
         * Default collaboration type
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        ABILITY_COLLABORATION_TYPE_DEFAULT = 'ohos.collaboration.value.abilityCollab',
        /**
         * Collaboration type of connect proxy
         * @syscap SystemCapability.DistributedSched.AppCollaboration
         * @since 18
         */
        ABILITY_COLLABORATION_TYPE_CONNECT_PROXY = 'ohos.collaboration.value.connectProxy'
    }
}
export default abilityConnectionManager;
