/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @kit ArkWeb
 */
/**
 * Provides methods for controlling the web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Provides methods for controlling the web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Provides methods for controlling the web controller.
 *
 * @typedef { import('../api/@ohos.web.webview').default.WebviewController }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare type WebviewController = import('../api/@ohos.web.webview').default.WebviewController;
/**
 * The callback of load committed.
 *
 * @typedef { function } OnNavigationEntryCommittedCallback
 * @param { LoadCommittedDetails } loadCommittedDetails - callback information of onNavigationEntryCommitted.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
type OnNavigationEntryCommittedCallback = (loadCommittedDetails: LoadCommittedDetails) => void;
/**
 * The callback of ssl error event.
 *
 * @typedef { function } OnSslErrorEventCallback
 * @param { SslErrorEvent } sslErrorEvent - callback information of onSslErrorEvent.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type OnSslErrorEventCallback = (sslErrorEvent: SslErrorEvent) => void;
/**
 * The callback of largestContentfulPaint.
 *
 * @typedef { function } OnLargestContentfulPaintCallback
 * @param { LargestContentfulPaint } largestContentfulPaint - callback information of onLargestContentfulPaint.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type OnLargestContentfulPaintCallback = (largestContentfulPaint: LargestContentfulPaint) => void;
/**
 * The callback of firstMeaningfulPaint.
 *
 * @typedef { function } OnFirstMeaningfulPaintCallback
 * @param { FirstMeaningfulPaint } firstMeaningfulPaint - callback information of onFirstMeaningfulPaint.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type OnFirstMeaningfulPaintCallback = (firstMeaningfulPaint: FirstMeaningfulPaint) => void;
/**
 * The callback of onOverrideUrlLoading.
 * Should not call WebviewController.loadUrl with the request's URL and then return true.
 *
 * @typedef { function } OnOverrideUrlLoadingCallback
 * @param { WebResourceRequest } webResourceRequest - callback information of onOverrideUrlLoading.
 * @returns { boolean } - Returning true causes the current Web to abort loading the URL,
 *                        false causes the Web to continue loading the url as usual.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type OnOverrideUrlLoadingCallback = (webResourceRequest: WebResourceRequest) => boolean;
/**
 * The callback of Intelligent Tracking Prevention.
 *
 * @typedef { function } OnIntelligentTrackingPreventionCallback
 * @param { IntelligentTrackingPreventionDetails } details - callback information of onIntelligentTrackingPrevention.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type OnIntelligentTrackingPreventionCallback = (details: IntelligentTrackingPreventionDetails) => void;
/**
 * The callback of onNativeEmbedVisibilityChange.
 *
 * @typedef { function } OnNativeEmbedVisibilityChangeCallback
 * @param { NativeEmbedVisibilityInfo } nativeEmbedVisibilityInfo - callback information of onNativeEmbedVisibilityChange.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12
 */
type OnNativeEmbedVisibilityChangeCallback = (nativeEmbedVisibilityInfo: NativeEmbedVisibilityInfo) => void;
/**
 * The configuration of native media player.
 *
 * @typedef NativeMediaPlayerConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface NativeMediaPlayerConfig {
    /**
     * Whether to enable the application to take over the webpage media playback function.
     *
     * @type { boolean }
     *    {@code true} means to enable the application to take over the web media playback function, {@code false} otherwise.
     *    Deflault value: false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    enable: boolean;
    /**
     * Whether the video player's display overlays the web page content when the application takes over the web page's video player.
     *
     * @type { boolean }
     *    {@code true} means changing the height of the video layer to cover the content of the webpage, {@code false} otherwise.
     *    Deflault value: false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    shouldOverlay: boolean;
}
/**
 * The callback of render process not responding.
 *
 * @typedef { function } OnRenderProcessNotRespondingCallback
 * @param { RenderProcessNotRespondingData } data - details of onRenderProcessNotResponding.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12
 */
type OnRenderProcessNotRespondingCallback = (data: RenderProcessNotRespondingData) => void;
/**
 * The callback of render process responding.
 *
 * @typedef { function } OnRenderProcessRespondingCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12
 */
type OnRenderProcessRespondingCallback = () => void;
/**
 * The callback of ViewportFit Changed.
 *
 * @typedef { function } OnViewportFitChangedCallback
 * @param { ViewportFit } viewportFit - details of OnViewportFitChangedCallback.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type OnViewportFitChangedCallback = (viewportFit: ViewportFit) => void;
/**
 * The callback of ads block
 *
 * @typedef { function } OnAdsBlockedCallback
 * @param { AdsBlockedDetails } details - details of OnAdsBlockedCallback.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type OnAdsBlockedCallback = (details: AdsBlockedDetails) => void;
/**
 * Defines the ads block details.
 *
 * @interface AdsBlockedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface AdsBlockedDetails {
    /**
     * The url of main frame.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    url: string;
    /**
     * the url of ads.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    adsBlocked: Array<string>;
}
/**
 * Defines the web keyboard options when onInterceptKeyboardAttach event return.
 *
 * @interface WebKeyboardOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface WebKeyboardOptions {
    /**
     * Whether the system keyboard is used.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    useSystemKeyboard: boolean;
    /**
     * Set the enter key type when the system keyboard is used, the "enter" key related to the {@link inputMethodEngine}.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    enterKeyType?: number;
    /**
     * Set the custom keyboard builder when the custom keyboard is used.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    customKeyboard?: CustomBuilder;
}
/**
 * Define the controller to interact with a custom keyboard, related to the {@link onInterceptKeyboardAttach} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare class WebKeyboardController {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    constructor();
    /**
     * Insert characters in the Web input field.
     *
     * @param { string } text - text which will be inserted.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    insertText(text: string): void;
    /**
     * Deletes the specified length of characters from the back to the front in the Web input field.
     *
     * @param { number } length - length of text, which will be deleted from back to front.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    deleteForward(length: number): void;
    /**
     * Delete the specified length of characters in the Web input field from the beginning to the end.
     *
     * @param { number } length - length of text, which will be deleted from front to back.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    deleteBackward(length: number): void;
    /**
     * Send the function of the key.
     *
     * @param { number } key - action indicates the "enter" key related to the {@link inputMethodEngine}
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    sendFunctionKey(key: number): void;
    /**
     * Close the custom keyboard.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    close(): void;
}
/**
 * Defines the web keyboard callback info related to the {@link onInterceptKeyboardAttach} event.
 *
 * @interface WebKeyboardCallbackInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface WebKeyboardCallbackInfo {
    /**
     * The web keyboard controller.
     *
     * @type { WebKeyboardController }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    controller: WebKeyboardController;
    /**
     * The attributes of web input element.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    attributes: Record<string, string>;
}
/**
 * The callback of onInterceptKeyboardAttach event.
 *
 * @typedef { function } WebKeyboardCallback
 * @param { WebKeyboardCallbackInfo } keyboardCallbackInfo - callback information of onInterceptKeyboardAttach.
 * @returns { WebKeyboardOptions } Return the web keyboard options of this web component.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
type WebKeyboardCallback = (keyboardCallbackInfo: WebKeyboardCallbackInfo) => WebKeyboardOptions;
/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Enum type supplied to {@link getMessageLevel} for receiving the console log level of JavaScript.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum MessageLevel {
    /**
     * Debug level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Debug level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Debug,
    /**
     * Error level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Error level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Error,
    /**
     * Info level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Info level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Info,
    /**
     * Log level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Log level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Log,
    /**
     * Warn level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Warn level.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    Warn
}
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * The Web's behavior to load from HTTP or HTTPS. Defaults to MixedMode.None.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum MixedMode {
    /**
     * Allows all sources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Allows all sources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Allows all sources.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    All = 0,
    /**
     * Allows sources Compatibly.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Allows sources Compatibly.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Allows sources Compatibly.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    Compatible = 1,
    /**
     * Don't allow unsecure sources from a secure origin.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Don't allow unsecure sources from a secure origin.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Don't allow unsecure sources from a secure origin.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    None = 2
}
/**
 * The callback of safe browsing check.
 *
 * @typedef { function } OnSafeBrowsingCheckResultCallback
 * @param { ThreatType } threatType - callback information of onSafeBrowsingCheckResult.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
type OnSafeBrowsingCheckResultCallback = (threatType: ThreatType) => void;
/**
 * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Enum type supplied to {@link getHitTest} for indicating the cursor node HitTest.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum HitTestType {
    /**
     * The edit text.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * The edit text.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    EditText = 0,
    /**
     * The email address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * The email address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Email = 1,
    /**
     * The HTML::a tag with src=http.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * The HTML::a tag with src=http.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    HttpAnchor = 2,
    /**
     * The HTML::a tag with src=http + HTML::img.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * The HTML::a tag with src=http + HTML::img.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    HttpAnchorImg = 3,
    /**
     * The HTML::img tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * The HTML::img tag.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Img = 4,
    /**
     * The map address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * The map address.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Map = 5,
    /**
     * The phone number.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * The phone number.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Phone = 6,
    /**
     * Other unknown HitTest.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Other unknown HitTest.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Unknown = 7
}
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Enum type supplied to {@link cacheMode} for setting the Web cache mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare enum CacheMode {
    /**
     * load cache when they are available and not expired, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * load cache when they are available and not expired, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * load cache when they are available and not expired, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    Default = 0,
    /**
     * load cache when they are available, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * load cache when they are available, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * load cache when they are available, otherwise load online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    None = 1,
    /**
     * Load online and not cache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Load online and not cache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Load online and not cache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    Online = 2,
    /**
     * load cache and not online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * load cache and not online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * load cache and not online.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    Only = 3
}
/**
 * Enum type supplied to {@link overScrollMode} for setting the web overScroll mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum OverScrollMode {
    /**
     * Disable the web over-scroll mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NEVER = 0,
    /**
     * Enable the web over-scroll mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ALWAYS = 1
}
/**
 * Enum type supplied to {@link blurOnKeyboardHideMode} for setting the web blurOnKeyboardHide mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 14
 */
declare enum BlurOnKeyboardHideMode {
    /**
     * The focused input elements on webview will not blur when soft keyboard is hidden manually.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    SILENT = 0,
    /**
     * The focused input elements on webview will blur when soft keyboard is hidden manually.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    BLUR = 1
}
/**
 * Enum type supplied to {@link darkMode} for setting the web dark mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Enum type supplied to {@link darkMode} for setting the web dark mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum WebDarkMode {
    /**
     * Disable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Disable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Off = 0,
    /**
     * Enable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Enable the web dark mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    On = 1,
    /**
     * Make web dark mode follow the system.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Make web dark mode follow the system.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Auto = 2
}
/**
 * Enum type supplied to {@link captureMode} for setting the web capture mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Enum type supplied to {@link captureMode} for setting the web capture mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum WebCaptureMode {
    /**
     * The home screen.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Capture of the home screen.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    HOME_SCREEN = 0
}
/**
 * Enum type supplied to {@link threatType} for the website's threat type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum ThreatType {
    /**
     * Illegal websites.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    THREAT_ILLEGAL = 0,
    /**
     * Fraud websites.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    THREAT_FRAUD = 1,
    /**
     * Websites with security risks.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    THREAT_RISK = 2,
    /**
     * Websites suspected of containing unhealthy content.
     * ArkWeb will not intercept this type of website and apps could handle it themselves.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    THREAT_WARNING = 3
}
/**
 * Defines the Media Options.
 *
 * @interface WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Defines the Media Options.
 *
 * @interface WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Media Options.
 *
 * @typedef WebMediaOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface WebMediaOptions {
    /**
     * The time interval for audio playback to resume.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Validity period for automatically resuming a paused web audio, in seconds.
     * The maximum validity period is 60 seconds. Due to the approximate value,
     * the validity period may have a deviation of less than 1 second.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    resumeInterval?: number;
    /**
     * Whether the audio of each web is exclusive.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Whether the audio of multiple Web instances in an application is exclusive.
     *
     * @type { ?boolean }
     *    {@code true} means audio exclusivity for multiple web instances within the application, {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    audioExclusive?: boolean;
}
/**
 * Defines the screen capture configuration.
 *
 * @interface ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Defines the screen capture configuration.
 *
 * @interface ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the screen capture configuration.
 *
 * @typedef ScreenCaptureConfig
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface ScreenCaptureConfig {
    /**
     * The mode for selecting the recording area.
     *
     * @type { WebCaptureMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The mode for selecting the recording area.
     *
     * @type { WebCaptureMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    captureMode: WebCaptureMode;
}
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Define the handler to exit the full screen mode, related to the {@link onFullScreenEnter} event.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare class FullScreenExitHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    constructor();
    /**
     * Exit the full screen mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Exit the full screen mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Called when the Web component exits full screen mode.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    exitFullScreen(): void;
}
/**
 * Defines the event details when the web component enter full screen mode.
 *
 * @typedef FullScreenEnterEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the event details when the web component enter full screen mode.
 *
 * @typedef FullScreenEnterEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface FullScreenEnterEvent {
    /**
     * A function handle to exit full-screen mode.
     *
     * @type { FullScreenExitHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * A function handle to exit full-screen mode.
     *
     * @type { FullScreenExitHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    handler: FullScreenExitHandler;
    /**
     * The intrinsic width of the video if the fullscreen element contains video element, expressed in CSS pixels.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The intrinsic width of the video if the fullscreen element contains video element, expressed in CSS pixels.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    videoWidth?: number;
    /**
     * The intrinsic height of the video if the fullscreen element contains video element, expressed in CSS pixels.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The intrinsic height of the video if the fullscreen element contains video element, expressed in CSS pixels.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    videoHeight?: number;
}
/**
 * The callback when the web component enter full screen mode.
 *
 * @typedef { function } OnFullScreenEnterCallback
 * @param { FullScreenEnterEvent } event - callback information of onFullScreenEnter.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * The callback when the web component enter full screen mode.
 *
 * @typedef { function } OnFullScreenEnterCallback
 * @param { FullScreenEnterEvent } event - callback information of onFullScreenEnter.
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
type OnFullScreenEnterCallback = (event: FullScreenEnterEvent) => void;
/**
 * Enum type supplied to {@link renderExitReason} when onRenderExited being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Enum type supplied to {@link renderExitReason} when onRenderExited being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum RenderExitReason {
    /**
     * Render process non-zero exit status.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Render process non-zero exit status.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ProcessAbnormalTermination = 0,
    /**
     * SIGKILL or task manager kill.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * SIGKILL or task manager kill.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ProcessWasKilled = 1,
    /**
     * Segmentation fault.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The rendering process crashes and exits, such as a segment error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ProcessCrashed = 2,
    /**
     * Out of memory.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Out of memory.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ProcessOom = 3,
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Unknown reason.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ProcessExitUnknown = 4
}
/**
 * The callback of custom hide of the context menu.
 *
 * @typedef { function } OnContextMenuHideCallback
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
type OnContextMenuHideCallback = () => void;
/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Enum type supplied to {@link error} when onSslErrorEventReceive being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum SslError {
    /**
     * General error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * General error.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Invalid = 0,
    /**
     * Hostname mismatch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Hostname mismatch.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    HostMismatch = 1,
    /**
     * The certificate date is invalid.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The certificate date is invalid.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    DateInvalid = 2,
    /**
     * The certificate authority is not trusted.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The certificate authority is not trusted.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Untrusted = 3
}
/**
 * Enum type supplied to {@link FileSelectorParam} when onFileSelectorShow being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Enum type supplied to {@link FileSelectorParam} when onFileSelectorShow being called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum FileSelectorMode {
    /**
     * Allows single file to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Allows single file to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    FileOpenMode = 0,
    /**
     * Allows multiple files to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Allows multiple files to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    FileOpenMultipleMode = 1,
    /**
     * Allows file folders to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Allows file folders to be selected.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    FileOpenFolderMode = 2,
    /**
     * Allows select files to save.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Allows select files to save.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    FileSaveMode = 3
}
/**
 * Enum type supplied to {@link layoutMode} for setting the web layout mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum WebLayoutMode {
    /**
     * Web layout follows the system.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NONE = 0,
    /**
     * Adaptive web layout based on page size.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    FIT_CONTENT = 1
}
/**
 * Enum type supplied to {@link RenderProcessNotRespondingData} when onRenderProcessNotResponding is called.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12
 */
declare enum RenderProcessNotRespondingReason {
    /**
     * Timeout for input sent to render process.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    INPUT_TIMEOUT = 0,
    /**
     * The new webpage loading navigation response timed out.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    NAVIGATION_COMMIT_TIMEOUT = 1
}
/**
 * Encompassed message information as parameters to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Encompassed message information as parameters to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class FileSelectorParam {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Gets the title of this file selector.
     * @returns { string } Return the title of this file selector.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the title of this file selector.
     * @returns { string } Return the title of this file selector.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getTitle(): string;
    /**
     * Gets the FileSelectorMode of this file selector.
     * @returns { FileSelectorMode } Return the FileSelectorMode of this file selector.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the FileSelectorMode of this file selector.
     * @returns { FileSelectorMode } Return the FileSelectorMode of this file selector.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getMode(): FileSelectorMode;
    /**
     * Gets an array of acceptable MIME type.
     * @returns { Array<string> } Return an array of acceptable MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets an array of acceptable MIME type.
     * @returns { Array<string> } Return an array of acceptable MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getAcceptType(): Array<string>;
    /**
     * Gets whether this file selector use a live media captured value.
     *
     * @returns { boolean } Return {@code true} if captured media; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets whether this file selector use a live media captured value.
     *
     * @returns { boolean } Return {@code true} if captured media; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isCapture(): boolean;
    /**
     * Gets an array of raw acceptable MIME type.
     * @returns { Array<string> } Return an array of raw acceptable MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18
     */
    getMimeTypes(): Array<string>;
}
/**
 * Defines the js result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the js result.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class JsResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Handle the user's JavaScript result if cancel the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Handle the user's JavaScript result if cancel the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    handleCancel(): void;
    /**
     * Handle the user's JavaScript result if confirm the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Handle the user's JavaScript result if confirm the dialog.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    handleConfirm(): void;
    /**
     * Handle the user's JavaScript result if confirm the prompt dialog.
     *
     * @param { string } result
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Handle the user's JavaScript result if confirm the prompt dialog.
     *
     * @param { string } result - The content of the dialog box entered by the user.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    handlePromptConfirm(result: string): void;
}
/**
 * Defines the file selector result, related to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the file selector result, related to {@link onFileSelectorShow} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class FileSelectorResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * select a list of files.
     *
     * @param { Array<string> } fileList
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * select a list of files.
     *
     * @param { Array<string> } fileList - List of files that need to be operated.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    handleFileList(fileList: Array<string>): void;
}
/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the http auth request result, related to {@link onHttpAuthRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class HttpAuthHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * confirm.
     *
     * @param { string } userName
     * @param { string } password
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * confirm.
     *
     * @param { string } userName
     * @param { string } password
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    confirm(userName: string, password: string): boolean;
    /**
     * cancel.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * cancel.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    cancel(): void;
    /**
     * isHttpAuthInfoSaved.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * isHttpAuthInfoSaved.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    isHttpAuthInfoSaved(): boolean;
}
/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the ssl error request result, related to {@link onSslErrorEventReceive} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class SslErrorHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Confirm to use the SSL certificate.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Confirm to use the SSL certificate.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    handleConfirm(): void;
    /**
     * Cancel this request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Cancel this request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    handleCancel(): void;
}
/**
 * Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the client certificate request result, related to {@link onClientAuthenticationRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class ClientAuthenticationHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Confirm to use the specified private key and client certificate chain.
     *
     * @param { string } priKeyFile - The file that store private key.
     * @param { string } certChainFile - The file that store client certificate chain.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Confirm to use the specified private key and client certificate chain.
     *
     * @param { string } priKeyFile - The file that store private key.
     * @param { string } certChainFile - The file that store client certificate chain.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    confirm(priKeyFile: string, certChainFile: string): void;
    /**
     * Confirm to use the authUri.The authUri can be obtained from certificate management.
     *
     * @param { string } authUri is the key of credentials.The credentials contain sign info and client certificates info.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Confirm to use the authUri.The authUri can be obtained from certificate management.
     *
     * @param { string } authUri is the key of credentials.The credentials contain sign info and client certificates info.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    confirm(authUri: string): void;
    /**
     * Cancel this certificate request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Cancel this certificate request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    cancel(): void;
    /**
     * Ignore this certificate request temporarily.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Ignore this certificate request temporarily.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    ignore(): void;
}
/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 *
 * @enum { string }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the accessible resource type, related to {@link onPermissionRequest} method.
 *
 * @enum { string }
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare enum ProtectedResourceType {
    /**
     * The MidiSysex resource.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The MidiSysex resource. Currently, only permission events can be reported. MIDI devices are not yet supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    MidiSysex = 'TYPE_MIDI_SYSEX',
    /**
     * The video capture resource, such as camera.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The video capture resource, such as camera.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    VIDEO_CAPTURE = 'TYPE_VIDEO_CAPTURE',
    /**
     * The audio capture resource, such as microphone.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The audio capture resource, such as microphone.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    AUDIO_CAPTURE = 'TYPE_AUDIO_CAPTURE',
    /**
     * The sensor resource, such as accelerometer.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    SENSOR = 'TYPE_SENSOR'
}
/**
 * Defines the onPermissionRequest callback, related to {@link onPermissionRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Implements the PermissionRequest object, related to {@link onPermissionRequest} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class PermissionRequest {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Reject the request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Reject the request.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    deny(): void;
    /**
     * Gets the source if the webpage that attempted to access the restricted resource.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Gets the source if the webpage that attempted to access the restricted resource.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getOrigin(): string;
    /**
     * Gets the resource that the webpage is trying to access.
     *
     * @returns { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Obtains the list of accessible resources requested for the web page.
     *
     * @returns { Array<string> } List of accessible resources requested by the web page.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getAccessibleResource(): Array<string>;
    /**
     * Grant origin access to a given resource.
     *
     * @param { Array<string> } resources
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Grant origin access to a given resource.
     *
     * @param { Array<string> } resources
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    grant(resources: Array<string>): void;
}
/**
 * Defines the onScreenCapture callback, related to {@link onScreenCapture} method.
 * @syscap SystemCapability.Web.Webview.Core
 * @since 10
 */
/**
 * Defines the onScreenCapture callback, related to {@link onScreenCapture} method.
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class ScreenCaptureHandler {
    /**
     * Constructor.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Constructor.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Gets the source of the webpage that attempted to access the restricted resource.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Obtains the origin of this web page.
     *
     * @returns { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getOrigin(): string;
    /**
     * Grant origin access to a given resource.
     * @param { ScreenCaptureConfig } config The screen capture configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Grants the screen capture permission.
     * @param { ScreenCaptureConfig } config The screen capture configuration.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    grant(config: ScreenCaptureConfig): void;
    /**
     * Reject the request.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Rejects this screen capture request.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    deny(): void;
}
/**
 * Defines the onDataResubmission callback, related to {@link onDataResubmission} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the onDataResubmission callback, related to {@link onDataResubmission} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class DataResubmissionHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    resend(): void;
    /**
     * Do not resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Do not resend related form data.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    cancel(): void;
}
/**
 * Defines the onWindowNew callback, related to {@link onWindowNew} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the onWindowNew callback, related to {@link onWindowNew} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class ControllerHandler {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Set WebController object.
     *
     * @param { WebviewController } controller
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set WebController object.
     * Set to null if you don't need to open a new window.
     * @param { WebviewController } controller
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    setWebController(controller: WebviewController): void;
}
/**
 * Defines the context menu source type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the context menu source type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum ContextMenuSourceType {
    /**
     * Other source types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Other source types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    None = 0,
    /**
     * Mouse.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Mouse.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Mouse = 1,
    /**
     * Long press.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Long press.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    LongPress = 2
}
/**
 * Defines the context menu media type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the context menu media type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum ContextMenuMediaType {
    /**
     * Not a special node or other media types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Not a special node or other media types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    None = 0,
    /**
     * Image.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Image.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Image = 1
}
/**
 * Defines the context menu input field type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the context menu input field type, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum ContextMenuInputFieldType {
    /**
     * Not an input field.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Not an input field.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    None = 0,
    /**
     * The plain text type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The plain text type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    PlainText = 1,
    /**
     * The password type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The password type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Password = 2,
    /**
     * The number type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The number type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Number = 3,
    /**
     * The telephone type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * The telephone type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Telephone = 4,
    /**
     * Other types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Other types.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    Other = 5
}
/**
 * Defines the lifecycle of the same-layer tag.
 * When the same-layer tag exists on the loaded page,
 * CREATE is triggered. When the same-layer tag is moved or is enlarged,
 * **UPDATE **is triggered. When the page exits, DESTROY is triggered.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum NativeEmbedStatus {
    /**
     * The same-layer tag is created.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    CREATE = 0,
    /**
     * The same-layer tag is updated.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    UPDATE = 1,
    /**
     *The same-layer tag is destroyed.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    DESTROY = 2,
    /**
     * The same-layer tag enters the BFCache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    ENTER_BFCACHE = 3,
    /**
     * The same-layer tag leaves the BFCache.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    LEAVE_BFCACHE = 4
}
/**
 * Defines the context menu supported event bit flags, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the context menu supported event bit flags, related to {@link onContextMenuShow} method.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum ContextMenuEditStateFlags {
    /**
     * Not editable.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Not editable.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NONE = 0,
    /**
     * Clipping is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Clipping is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    CAN_CUT = 1 << 0,
    /**
     * Copies are supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Copies are supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    CAN_COPY = 1 << 1,
    /**
     * Support for pasting.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Pasting is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    CAN_PASTE = 1 << 2,
    /**
     * Select all is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Select all is supported.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    CAN_SELECT_ALL = 1 << 3
}
/**
 * Enum type supplied to {@link navigationType} for the navigation's type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare enum WebNavigationType {
    /**
     * Unknown type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    UNKNOWN = 0,
    /**
     * A new entry was created due to a navigation happened on the main frame.
     * Contains all situations that will generate a mainframe navigation entry,
     * which means that navigations to a hash on the same document or history.pushState
     * also belong to this type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    MAIN_FRAME_NEW_ENTRY = 1,
    /**
     * Navigate to an existing entry due to a navigation on the main frame.
     * e.g.
     *   1. History navigations.
     *   2. Reloads (contains loading the same url).
     *   3. Same-document navigations(history.replaceState(), location.replace()).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    MAIN_FRAME_EXISTING_ENTRY = 2,
    /**
     * A navigation happened on subframe which was triggered by user.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NAVIGATION_TYPE_NEW_SUBFRAME = 4,
    /**
     * A navigation happened on the subframe automatically.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    NAVIGATION_TYPE_AUTO_SUBFRAME = 5
}
/**
 * Enumerates the rendering mode of Web components. By default, the asynchronous rendering mode is used.
 * The asynchronous rendering mode is recommended because it has better performance and lower power consumption.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare enum RenderMode {
    /**
     * The Web component is rendered asynchronously.
     * The ArkWeb component as a graphic surface node is displayed independently.
     * The maximum width of the Web component is 7,680 px (physical pixel).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    ASYNC_RENDER = 0,
    /**
     * The Web component is rendered synchronously.
     * The ArkWeb component as a graphic canvas node is displayed together with the system component.
     * The maximum width of the Web component is 500,000 px (physical pixel).
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    SYNC_RENDER = 1
}
/**
 * Defines the viewport-fit type, related to {@link ViewportFit}.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare enum ViewportFit {
    /**
     * No effect - the whole web page is viewable(default)
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    AUTO = 0,
    /**
     * The initial layout viewport and the visual viewport are set to the
     * largest rectangle which is inscribe in the display of the device.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    CONTAINS = 1,
    /**
     * The initial layout viewport and the visual viewport are set to the
     * circumscribe rectangle of the physical screen of the device.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    COVER = 2
}
/**
 * Defines the context menu param, related to {@link WebContextMenuParam} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the context menu param, related to {@link WebContextMenuParam} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class WebContextMenuParam {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Horizontal offset coordinates of the menu within the Web component.
     *
     * @returns { number } The context menu x coordinate.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Horizontal offset coordinates of the menu within the Web component.
     *
     * @returns { number } The context menu x coordinate.
     *                     Returns a non-negative integer if normal, otherwise returns -1.
     *                     Unit: vp.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    x(): number;
    /**
     * Vertical offset coordinates for the menu within the Web component.
     *
     * @returns { number } The context menu y coordinate.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Vertical offset coordinates for the menu within the Web component.
     *
     * @returns { number } The context menu y coordinate.
     *                     Returns a non-negative integer if normal, otherwise returns -1.
     *                     Unit: vp.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    y(): number;
    /**
     * If the long-press location is the link returns the link's security-checked URL.
     *
     * @returns { string } If relate to a link return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * If the long-press location is the link returns the link's security-checked URL.
     *
     * @returns { string } If relate to a link return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getLinkUrl(): string;
    /**
     * If the long-press location is the link returns the link's original URL.
     *
     * @returns { string } If relate to a link return unfiltered link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * If the long-press location is the link returns the link's original URL.
     *
     * @returns { string } If relate to a link return unfiltered link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getUnfilteredLinkUrl(): string;
    /**
     * Returns the SRC URL if the selected element has a SRC attribute.
     *
     * @returns { string } If this context menu is "src" attribute, return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Returns the SRC URL if the selected element has a SRC attribute.
     *
     * @returns { string } If this context menu is "src" attribute, return link url, else return null.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getSourceUrl(): string;
    /**
     * Long press menu location has image content.
     *
     * @returns { boolean } Return whether this context menu has image content.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Long press menu location has image content.
     *
     * @returns { boolean } Return whether this context menu has image content.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    existsImageContents(): boolean;
    /**
     * Returns the type of context node.
     *
     * @returns { ContextMenuMediaType } Returns the type of context node.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Returns the type of context node.
     *
     * @returns { ContextMenuMediaType } Returns the type of context node.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getMediaType(): ContextMenuMediaType;
    /**
     * Returns the text of the selection.
     *
     * @returns { string } Returns the text of the selection.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Returns the text of the selection.
     *
     * @returns { string } Returns the text of the selection, or return null if no text is selected.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getSelectionText(): string;
    /**
     * Returns the context menu source type.
     *
     * @returns { ContextMenuSourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Returns the context menu source type.
     *
     * @returns { ContextMenuSourceType }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getSourceType(): ContextMenuSourceType;
    /**
     * Returns input field type if the context menu was invoked on an input field.
     *
     * @returns { ContextMenuInputFieldType } Input field type if the context menu was invoked on an input field.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Returns input field type if the context menu was invoked on an input field.
     *
     * @returns { ContextMenuInputFieldType } Input field type if the context menu was invoked on an input field.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getInputFieldType(): ContextMenuInputFieldType;
    /**
     * Returns whether the context is editable.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Returns whether the context is editable.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isEditable(): boolean;
    /**
     * Returns the context editable flags {@link ContextMenuEditStateFlags}.
     *
     * @returns { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Returns the context editable flags {@link ContextMenuEditStateFlags}.
     *
     * @returns { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    getEditStateFlags(): number;
    /**
     * Returns the selection menu preview width.
     *
     * @returns { number } The preview menu width.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    getPreviewWidth(): number;
    /**
     * Returns the selection menu preview height.
     *
     * @returns { number } The preview menu height.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    getPreviewHeight(): number;
}
/**
 * Defines the context menu result, related to {@link WebContextMenuResult} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 9
 */
/**
 * Defines the context menu result, related to {@link WebContextMenuResult} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class WebContextMenuResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * When close context menu without other call in WebContextMenuResult,
     * User should call this function to close menu
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * When close context menu without other call in WebContextMenuResult,
     * User should call this function to close menu
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    closeContextMenu(): void;
    /**
     * If WebContextMenuParam has image content, this function will copy image related to this context menu.
     * If WebContextMenuParam has no image content, this function will do nothing.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * If WebContextMenuParam has image content, this function will copy image related to this context menu.
     * If WebContextMenuParam has no image content, this function will do nothing.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    copyImage(): void;
    /**
     * Executes the copy operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Executes the copy operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    copy(): void;
    /**
     * Executes the paste operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Executes the paste operation related to this context menu.
     *
     * <p><strong>API Note</strong>:<br>
     * Permissions need to be configured: ohos.permission.READ_PASTEBOARD.
     * </p>
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    paste(): void;
    /**
     * Executes the cut operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Executes the cut operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    cut(): void;
    /**
     * Executes the selectAll operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Executes the selectAll operation related to this context menu.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    selectAll(): void;
}
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class ConsoleMessage {
    /**
     * Constructor.
     *
     * @param { string } message - The console message.
     * @param { string } sourceId - The Web source file's path and name.
     * @param { number } lineNumber - The line number of the console message.
     * @param { MessageLevel } messageLevel - The console log level.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.ConsoleMessage#constructor
     */
    constructor(message: string, sourceId: string, lineNumber: number, messageLevel: MessageLevel);
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Gets the message of a console message.
     *
     * @returns { string } Return the message of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the message of a console message.
     *
     * @returns { string } Return the message of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getMessage(): string;
    /**
     * Gets the Web source file's path and name of a console message.
     *
     * @returns { string } Return the Web source file's path and name of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the Web source file's path and name of a console message.
     *
     * @returns { string } Return the Web source file's path and name of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the Web source file's path and name of a console message.
     *
     * @returns { string } Return the Web source file's path and name of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getSourceId(): string;
    /**
     * Gets the line number of a console message.
     *
     * @returns { number } Return the line number of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the line number of a console message.
     *
     * @returns { number } Return the line number of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the line number of a console message.
     *
     * @returns { number } Return the line number of a console message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getLineNumber(): number;
    /**
     * Gets the message level of a console message.
     *
     * @returns { MessageLevel } Return the message level of a console message, which can be {@link MessageLevel}.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the message level of a console message.
     *
     * @returns { MessageLevel } Return the message level of a console message, which can be {@link MessageLevel}.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getMessageLevel(): MessageLevel;
}
/**
 * Encompassed message information as parameters to {@link onConsole} method.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web resource request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class WebResourceRequest {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Gets request headers.
     *
     * @returns { Array<Header> } Return the request headers
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets request headers.
     *
     * @returns { Array<Header> } Return the request headers
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets request headers.
     *
     * @returns { Array<Header> } Return the request headers
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getRequestHeader(): Array<Header>;
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the request URL.
     *
     * @returns { string } Return the request URL.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getRequestUrl(): string;
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Check whether the request is associated with gesture.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture;return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    isRequestGesture(): boolean;
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Check whether the request is for getting the main frame.
     *
     * @returns { boolean } Return {@code true} if the request is associated with gesture for getting the main frame; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    isMainFrame(): boolean;
    /**
     * Check whether the request redirects.
     *
     * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Check whether the request redirects.
     *
     * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Check whether the request redirects.
     *
     * @returns { boolean } Return {@code true} if the request redirects; return {@code false} otherwise.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    isRedirect(): boolean;
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Get request method.
     *
     * @returns { string } Return the request method.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getRequestMethod(): string;
}
/**
 * Defines the Web resource response.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource response.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class WebResourceResponse {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Gets the response data.
     *
     * @returns { string } Return the response data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the response data.
     *
     * @returns { string } Return the response data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the response data.
     *
     * @returns { string } Return the response data.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getResponseData(): string;
    /**
     * Gets the response data.
     *
     * @returns { string | number | ArrayBuffer | Resource | undefined } Return the response data.
     *                                                                   string type indicate string in HTML format.
     *                                                                   number type indicate file handle.
     *                                                                   Resource type indicate $rawfile resource.
     *                                                                   ArrayBuffer type indicate binary data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    /**
     * Gets the response data.
     *
     * @returns { string | number | ArrayBuffer | Resource | undefined } Return the response data.
     *                                                                   string type indicate string in HTML format.
     *                                                                   number type indicate file handle.
     *                                                                   Resource type indicate $rawfile resource.
     *                                                                   ArrayBuffer type indicate binary data.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 18
     */
    getResponseDataEx(): string | number | ArrayBuffer | Resource | undefined;
    /**
     * Gets the response encoding.
     *
     * @returns { string } Return the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the response encoding.
     *
     * @returns { string } Return the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getResponseEncoding(): string;
    /**
     * Gets the response MIME type.
     *
     * @returns { string } Return the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the response MIME type.
     *
     * @returns { string } Return the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getResponseMimeType(): string;
    /**
     * Gets the reason message.
     *
     * @returns { string } Return the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the reason message.
     *
     * @returns { string } Return the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the reason message.
     *
     * @returns { string } Return the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getReasonMessage(): string;
    /**
     * Gets the response headers.
     *
     * @returns { Array<Header> } Return the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the response headers.
     *
     * @returns { Array<Header> } Return the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the response headers.
     *
     * @returns { Array<Header> } Return the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    getResponseHeader(): Array<Header>;
    /**
     * Gets the response code.
     *
     * @returns { number } Return the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the response code.
     *
     * @returns { number } Return the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getResponseCode(): number;
    /**
     * Sets the response data.
     *
     * @param { string | number | Resource } data - the response data.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the response data.
     *
     * @param { string | number | Resource } data - the response data.
     *                                              string type indicate strings in HTML format.
     *                                              number type indicate file handle.
     *                                              Resource type indicate $rawfile resource.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Sets the response data.
     *
     * @param { string | number | Resource | ArrayBuffer } data - the response data.
     *                                              string type indicate strings in HTML format.
     *                                              number type indicate file handle.
     *                                              Resource type indicate $rawfile resource.
     *                                              ArrayBuffer type indicate binary data.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    setResponseData(data: string | number | Resource | ArrayBuffer): void;
    /**
     * Sets the response encoding.
     *
     * @param { string } encoding the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the response encoding.
     *
     * @param { string } encoding the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the response encoding.
     *
     * @param { string } encoding the response encoding.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setResponseEncoding(encoding: string): void;
    /**
     * Sets the response MIME type.
     *
     * @param { string } mimeType the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the response MIME type.
     *
     * @param { string } mimeType the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the response MIME type.
     *
     * @param { string } mimeType the response MIME type.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setResponseMimeType(mimeType: string): void;
    /**
     * Sets the reason message.
     *
     * @param { string } reason the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the reason message.
     *
     * @param { string } reason the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the reason message.
     *
     * @param { string } reason the reason message.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setReasonMessage(reason: string): void;
    /**
     * Sets the response headers.
     *
     * @param { Array<Header> } header the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the response headers.
     *
     * @param { Array<Header> } header the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the response headers.
     *
     * @param { Array<Header> } header the response headers.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setResponseHeader(header: Array<Header>): void;
    /**
     * Sets the response code.
     *
     * @param { number } code the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the response code.
     *
     * @param { number } code the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the response code.
     *
     * @param { number } code the response code.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setResponseCode(code: number): void;
    /**
     * Sets the response is ready or not.
     *
     * @param { boolean } IsReady whether the response is ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the response is ready or not.
     *
     * @param { boolean } IsReady whether the response is ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the response is ready or not.
     *
     * @param { boolean } IsReady whether the response is ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setResponseIsReady(IsReady: boolean): void;
    /**
     * Gets whether the response is ready.
     *
     * @returns { boolean } True indicates the response data is ready and false is not ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    /**
     * Gets whether the response is ready.
     *
     * @returns { boolean } True indicates the response data is ready and false is not ready.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 18
     */
    getResponseIsReady(): boolean;
}
/**
 * Defines the Web's request/response header.
 *
 * @interface Header
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web's request/response header.
 *
 * @interface Header
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Web's request/response header.
 *
 * @typedef Header
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the Web's request/response header.
 *
 * @typedef Header
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface Header {
    /**
     * Gets the key of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the key of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the key of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    headerKey: string;
    /**
     * Gets the value of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the value of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Gets the value of the request/response header.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    headerValue: string;
}
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web resource error.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class WebResourceError {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Gets the info of the Web resource error.
     *
     * @returns { string } Return the info of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the info of the Web resource error.
     *
     * @returns { string } Return the info of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the info of the Web resource error.
     *
     * @returns { string } Return the info of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getErrorInfo(): string;
    /**
     * Gets the code of the Web resource error.
     *
     * @returns { number } Return the code of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Gets the code of the Web resource error.
     *
     * @returns { number } Return the code of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Gets the code of the Web resource error.
     *
     * @returns { number } Return the code of the Web resource error.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    getErrorCode(): number;
}
/**
 * Defines the js geolocation request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the js geolocation request.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class JsGeolocation {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Report the geolocation permission status from users.
     *
     * @param { string } origin - The origin that ask for the geolocation permission.
     * @param { boolean } allow - The geolocation permission status.
     * @param { boolean } retain - Whether to allow the geolocation permission status to be saved to the system.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets the geolocation permission status of a web page.
     *
     * @param { string } origin - Index of the origin.
     * @param { boolean } allow - Geolocation permission status. {@code true} means to allow geolocation permission;
     *                            {@code false} means to disallow geolocation permission.
     * @param { boolean } retain - Whether the geolocation permission status can be saved to the system.
     *                             {@code true} means to allow the geolocation permission status to be saved to
     *                             the system; {@code false} means to disallow the geolocation permission status to
     *                             be saved to the system. You can manage the geolocation permissions saved
     *                             to the system through {@link GeolocationPermissions}.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    invoke(origin: string, allow: boolean, retain: boolean): void;
}
/**
 * Defines the Web cookie.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web cookie.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare class WebCookie {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    constructor();
    /**
     * Sets the cookie.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebCookieManager#setCookie
     */
    setCookie();
    /**
     * Saves the cookies.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebCookieManager#saveCookieAsync
     */
    saveCookie();
}
/**
 * Represents the event consumption result sent to the Web component.
 * For details about the supported events, see TouchType.
 * If the application does not consume the event, set this parameter to false,
 * and the event will be consumed by the Web component. If the application has consumed the event,
 * set this parameter to true, and the event will not be consumed by the Web component.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare class EventResult {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    constructor();
    /**
     * Sets the gesture event consumption result.
     *
     * @param { boolean } result -  Whether to consume the gesture event.
     *    {@code true} Indicates the consumption of the gesture event.
     *    {@code false} Indicates the non-consumption of the gesture event.
     *    Default value: true.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    setGestureEventResult(result: boolean): void;
    /**
     * Sets the gesture event consumption result.
     *
     * @param { boolean } result -  Whether to consume the gesture event.
     *    {@code true} Indicates the consumption of the gesture event.
     *    {@code false} Indicates the non-consumption of the gesture event.
     *    Default value: true.
     * @param { boolean } stopPropagation - Whether to stop propagation.
     *    This parameter is valid only when result is set to true.
     *    {@code true} Indicates stops the propagation of events farther along.
     *    {@code false} Indicates the propagation of events farther along.
     *    Default value: true.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    setGestureEventResult(result: boolean, stopPropagation: boolean): void;
}
/**
 * Defines the Web controller.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 * @deprecated since 9
 * @useinstead ohos.web.webview.webview.WebviewController
 */
declare class WebController {
    /**
     * Constructor.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     */
    constructor();
    /**
     * Let the Web inactive.
     * It is no longer maintained since API version 9, and it is recommended to use {@link onInactive} instead.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#onInactive
     */
    onInactive(): void;
    /**
     * Let the Web active.
     * It is no longer maintained since API version 9, and it is recommended to use {@link onActive} instead.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#onActive
     */
    onActive(): void;
    /**
     * Let the Web zoom by.
     *
     * @param { number } factor The zoom factor.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#zoom
     */
    zoom(factor: number): void;
    /**
     * Clears the history in the Web.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#clearHistory
     */
    clearHistory(): void;
    /**
     * Asynchronously execute JavaScript in the context of the currently displayed page.
     * The result of the script execution will be returned through an asynchronous callback.
     * This method must be used on the UI thread, and the callback will also be invoked on the UI thread.
     * <p><strong>API Note</strong>:<br>
     * The state of JavaScript is no longer persisted across navigations like loadUrl.
     * For example, global variables and functions defined before calling loadUrl will not exist in the loaded page.
     * It is recommended that applications use registerJavaScriptProxy to ensure that the JavaScript state can be persisted across page navigations.
     * <p>
     *
     * @param { object } options The options with a piece of code and a callback.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#runJavaScript
     */
    runJavaScript(options: {
        script: string;
        callback?: (result: string) => void;
    });
    /**
     * Loads the data or URL.
     *
     * @param { object } options The options with the data or URL and other information.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#loadData
     */
    loadData(options: {
        data: string;
        mimeType: string;
        encoding: string;
        baseUrl?: string;
        historyUrl?: string;
    });
    /**
     * Loads the given URL.
     *
     * @param { object } options The options with the URL and other information.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#loadUrl
     */
    loadUrl(options: {
        url: string | Resource;
        headers?: Array<Header>;
    });
    /**
     * refreshes the current URL.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#refresh
     */
    refresh();
    /**
     * Stops the current load.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#stop
     */
    stop();
    /**
     * Registers the JavaScript object and method list.
     *
     * @param { object } options - The option with the JavaScript object and method list.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#registerJavaScriptProxy
     */
    registerJavaScriptProxy(options: {
        object: object;
        name: string;
        methodList: Array<string>;
    });
    /**
     * Deletes a registered JavaScript object with given name.
     *
     * @param { string } name - The name of a registered JavaScript object to be deleted.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#deleteJavaScriptRegister
     */
    deleteJavaScriptRegister(name: string);
    /**
     * Gets the type of HitTest.
     *
     * @returns { HitTestType } The type of HitTest.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#getHitTest
     */
    getHitTest(): HitTestType;
    /**
     * Gets the request focus.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#requestFocus
     */
    requestFocus();
    /**
     * Checks whether the web page can go back.
     *
     * @returns { boolean } Whether the web page can go back.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#accessBackward
     */
    accessBackward(): boolean;
    /**
     * Checks whether the web page can go forward.
     *
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#accessForward
     */
    accessForward(): boolean;
    /**
     * Checks whether the web page can go back or forward the given number of steps.
     *
     * @param { number } step The number of steps.
     * @returns { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#accessStep
     */
    accessStep(step: number): boolean;
    /**
     * Goes back in the history of the web page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#backward
     */
    backward();
    /**
     * Goes forward in the history of the web page.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.webview.webview.WebviewController#forward
     */
    forward();
    /**
     * Gets network cookie manager
     *
     * @returns { WebCookie }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     * @deprecated since 9
     * @useinstead ohos.web.webview.WebCookieManager
     */
    getCookieManager(): WebCookie;
}
/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web options.
 *
 * @interface WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Web options.
 *
 * @typedef WebOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface WebOptions {
    /**
     * Sets the address of the web page to be displayed.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets the address of the web page to be displayed.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Web resource address. If accessing local resource files, please use $rawfile or resource protocol.
     * If you load a local resource file that applies the sandbox path outside the package (files support html and txt types),
     * please use the file:// sandbox file path.
     * Src cannot dynamically change the address through state variables (for example: @State).
     * If you need to change it, please reload it through {@link loadUrl}.
     *
     * @type { string | Resource }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    src: string | Resource;
    /**
     * Sets the controller of the Web.
     *
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets the controller of the Web.
     *
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the controller of the Web.
     *
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Controller, through which you can control various behaviors of Web components
     * (including page navigation, declaring cycle state, JavaScript interaction and other behaviors).
     * Since API Version 9, WebController is no longer maintained, so it is recommended to use WebviewController instead.
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    controller: WebController | WebviewController;
    /**
     * 	Rendering mode.
     * 	RenderMode.ASYNC_RENDER (default, cannot be dynamically adjusted): The Web component is rendered asynchronously.
     * 	RenderMode.SYNC_RENDER: The Web component is rendered synchronously within the current execution context.
     *
     * @type { ?RenderMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    renderMode?: RenderMode;
    /**
     * Sets the incognito mode of the Web, the parameter is optional and default value is false.
     * When the Web is in incognito mode, cookies, records of websites, geolocation permissions
     * will not save in persistent files.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
      * Sets the incognito mode of the Web, the parameter is optional and default value is false.
      * When the Web is in incognito mode, cookies, records of websites, geolocation permissions
      * will not save in persistent files.
      *
      * @type { ?boolean }
      * @syscap SystemCapability.Web.Webview.Core
      * @crossplatform
      * @atomicservice
      * @since 18
      */
    incognitoMode?: boolean;
    /**
     * A token indicating that the current Web component specifies a shared rendering process.
     * In the multi-rendering process mode, Web components with the same token will preferentially try to reuse
     * the rendering process bound to the token.
     * The binding of token to the rendering process occurs in the initialization stage of the rendering process.
     * When the rendering process has no associated Web component, its binding relationship with token will be removed.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    sharedRenderProcessToken?: string;
}
/**
 * Defines the contents of the JavaScript to be injected.
 *
 * @interface ScriptItem
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the contents of the JavaScript to be injected.
 *
 * @typedef ScriptItem
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface ScriptItem {
    /**
     * Sets the JavaScript to be injected.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    script: string;
    /**
     * Sets the rules of the JavaScript.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    scriptRules: Array<string>;
}
/**
 * Defines the load committed details.
 *
 * @interface LoadCommittedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the load committed details.
 *
 * @typedef LoadCommittedDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface LoadCommittedDetails {
    /**
     * Check whether the request is for getting the main frame.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isMainFrame: boolean;
    /**
     * Whether the navigation happened without changing document. Examples of
     * same document navigations are:
     *   1. reference fragment navigations.
     *   2. pushState/replaceState.
     *   3. same page history navigation
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    isSameDocument: boolean;
    /**
     * True if the committed entry has replaced the existing one. Note that in
     * case of subframes, the NavigationEntry and FrameNavigationEntry objects
     * don't actually get replaced - they're reused, but with updated attributes.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    didReplaceEntry: boolean;
    /**
     * The type of the navigation.
     *
     * @type { WebNavigationType }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    navigationType: WebNavigationType;
    /**
     * The url to navigate.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    url: string;
}
/**
 * Defines the Intelligent Tracking Prevention details.
 *
 * @typedef IntelligentTrackingPreventionDetails
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface IntelligentTrackingPreventionDetails {
    /**
     * The host of website url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    host: string;
    /**
     * The host of tracker url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    trackerHost: string;
}
/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web interface.
 *
 * @interface WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Web interface.
 *
 * @typedef WebInterface
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
interface WebInterface {
    /**
     * Sets Value.
     *
     * @param { WebOptions } value
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets Value.
     *
     * @param { WebOptions } value
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets Value.
     *
     * @param { WebOptions } value
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    (value: WebOptions): WebAttribute;
}
/**
 * Defines the embed info.
 *
 * @interface NativeEmbedInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the embed info.
 *
 * @typedef NativeEmbedInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface NativeEmbedInfo {
    /**
     * The embed id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    id?: string;
    /**
     * Only when enableEmbedMode is true and type is marked as native/xxx will be recognized as a same layer component.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    type?: string;
    /**
     * The embed tag src.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    src?: string;
    /**
     * The coordinate position of embed element relative to the webComponent.
     *
     * @type { ?Position }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    position?: Position;
    /**
     * The embed tag width.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    width?: number;
    /**
     * The embed tag height.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    height?: number;
    /**
     * The embed tag url.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    url?: string;
    /**
     * The embed tag name.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    tag?: string;
    /**
     * The embed param list information used by object tag.
     *
     * @type { ?Map<string, string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    params?: Map<string, string>;
}
/**
 * Defines the Embed Data info.
 *
 * @interface NativeEmbedDataInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the Embed Data info.
 *
 * @typedef NativeEmbedDataInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface NativeEmbedDataInfo {
    /**
     * The embed status.
     *
     * @type { ?NativeEmbedStatus }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    status?: NativeEmbedStatus;
    /**
     * The surface id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    surfaceId?: string;
    /**
     * The embed id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    embedId?: string;
    /**
     * The embed info.
     *
     * @type { ?NativeEmbedInfo }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    info?: NativeEmbedInfo;
}
/**
 * Defines the Embed Visibility info.
 *
 * @typedef NativeEmbedVisibilityInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12
 */
declare interface NativeEmbedVisibilityInfo {
    /**
     * The embed visibility.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    visibility: boolean;
    /**
     * The embed id.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    embedId: string;
}
/**
 * Defines the user touch info.
 *
 * @interface NativeEmbedTouchInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
/**
 * Defines the user touch info.
 *
 * @typedef NativeEmbedTouchInfo
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface NativeEmbedTouchInfo {
    /**
     * The native embed id.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    embedId?: string;
    /**
     * An event sent when the state of contacts with a touch-sensitive surface changes.
     *
     * @type { ?TouchEvent }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    touchEvent?: TouchEvent;
    /**
     * Handle the user's touch result.
     *
     * @type { ?EventResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    result?: EventResult;
}
/**
 * Defines the first content paint rendering of web page.
 *
 * @typedef FirstMeaningfulPaint
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface FirstMeaningfulPaint {
    /**
     * Start time of navigation.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    navigationStartTime?: number;
    /**
     * Paint time of first meaningful content.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    firstMeaningfulPaintTime?: number;
}
/**
 * Defines the largest content paint rendering of web page.
 *
 * @typedef LargestContentfulPaint
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface LargestContentfulPaint {
    /**
     *  Start time of navigation.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    navigationStartTime?: number;
    /**
     * Paint time of largest image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    largestImagePaintTime?: number;
    /**
     * Paint time of largest text.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    largestTextPaintTime?: number;
    /**
     * Bits per pixel of image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    imageBPP?: number;
    /**
     * Load start time of largest image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    largestImageLoadStartTime?: number;
    /**
     * Load end time of largest image.
     *
     * @type { ?number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    largestImageLoadEndTime?: number;
}
/**
 * Defines the render process not responding info.
 *
 * @interface RenderProcessNotRespondingData
 * @syscap SystemCapability.Web.Webview.Core
 * @since 12
 */
declare interface RenderProcessNotRespondingData {
    /**
     * JavaScript stack info of the webpage when render process not responding.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    jsStack: string;
    /**
     * Process id of render process not responding.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    pid: number;
    /**
     * Reason for the render process not responding.
     *
     * @type { RenderProcessNotRespondingReason }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    reason: RenderProcessNotRespondingReason;
}
/**
 * Defines the triggered function at the end of web page loading.
 *
 * @typedef OnPageEndEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnPageEndEvent {
    /**
     * The url of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    url: string;
}
/**
 * Defines the triggered function at the begin of web page loading.
 *
 * @typedef OnPageBeginEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnPageBeginEvent {
    /**
     * The url of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    url: string;
}
/**
 * Defines the triggered function when the page loading progress changes.
 *
 * @typedef OnProgressChangeEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnProgressChangeEvent {
    /**
     * The new progress of the page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    newProgress: number;
}
/**
 * Defines the triggered function when the title of the main application document changes.
 *
 * @typedef OnTitleReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnTitleReceiveEvent {
    /**
     * The title of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    title: string;
}
/**
 * Defines the triggered function when requesting to show the geolocation permission.
 *
 * @typedef OnGeolocationShowEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnGeolocationShowEvent {
    /**
     * Origin of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    origin: string;
    /**
     * Defines the js geolocation request.
     *
     * @type { JsGeolocation }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    geolocation: JsGeolocation;
}
/**
 * Defines the triggered function when the web page wants to display a JavaScript alert() dialog.
 *
 * @typedef OnAlertEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnAlertEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    url: string;
    /**
     * The message of alert dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    message: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    result: JsResult;
}
/**
 * Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
 *
 * @typedef OnBeforeUnloadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
 *
 * @typedef OnBeforeUnloadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface OnBeforeUnloadEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    url: string;
    /**
     * The message of confirm dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The message of confirm dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    message: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    result: JsResult;
}
/**
 * Defines the triggered function when the web page wants to display a JavaScript confirm() dialog.
 *
 * @typedef OnConfirmEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnConfirmEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    url: string;
    /**
     * The message of confirm dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    message: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    result: JsResult;
}
/**
 * Defines the triggered function when the web page wants to display a JavaScript prompt() dialog.
 *
 * @typedef OnPromptEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnPromptEvent {
    /**
     * The url of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    url: string;
    /**
     * The message of prompt dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    message: string;
    /**
     * The value of prompt dialog.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    value: string;
    /**
     *  Handle the user's JavaScript result.
     *
     * @type { JsResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    result: JsResult;
}
/**
 * Defines the triggered function when the web page receives a JavaScript console message.
 *
 * @typedef OnConsoleEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnConsoleEvent {
    /**
     * Console message information of the event.
     *
     * @type { ConsoleMessage }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    message: ConsoleMessage;
}
/**
 * Defines the triggered function when the web page receives a web resource loading error.
 *
 * @typedef OnErrorReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnErrorReceiveEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    request: WebResourceRequest;
    /**
     * The information of error.
     *
     * @type { WebResourceError }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    error: WebResourceError;
}
/**
 * Defines the triggered function when the web page receives a web resource loading HTTP error.
 *
 * @typedef OnHttpErrorReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnHttpErrorReceiveEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    request: WebResourceRequest;
    /**
     *  Web resource response of event.
     *
     * @type { WebResourceResponse }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    response: WebResourceResponse;
}
/**
 * Defines the triggered function when starting to download.
 *
 * @typedef OnDownloadStartEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnDownloadStartEvent {
    /**
     * The URL of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    url: string;
    /**
     * The userAgent of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    userAgent: string;
    /**
     * The contentDisposition of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * The contentDisposition of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    contentDisposition: string;
    /**
     * The mimetype of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    mimetype: string;
    /**
     * The contentLength of page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    contentLength: number;
}
/**
 * Defines the triggered callback when the Web page refreshes accessed history.
 *
 * @typedef OnRefreshAccessedHistoryEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
/**
 * Defines the triggered callback when the Web page refreshes accessed history.
 *
 * @typedef OnRefreshAccessedHistoryEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 18
 */
declare interface OnRefreshAccessedHistoryEvent {
    /**
     * URL of the visit.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * URL of the visit.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    url: string;
    /**
     * If true, the page is being reloaded, otherwise,  means that the page is newly loaded.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * If true, the page is being reloaded, otherwise,  means that the page is newly loaded.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    isRefreshed: boolean;
}
/**
 * Defines the triggered when the render process exits.
 *
 * @typedef OnRenderExitedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnRenderExitedEvent {
    /**
     * The specific reason why the rendering process exits abnormally.
     *
     * @type { RenderExitReason }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    renderExitReason: RenderExitReason;
}
/**
 * Defines the triggered when the file selector shows.
 *
 * @typedef OnShowFileSelectorEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnShowFileSelectorEvent {
    /**
     * Defines the file selector result.
     *
     * @type { FileSelectorResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    result: FileSelectorResult;
    /**
     * Encompassed message information as parameters to fileSelector.
     *
     * @type { FileSelectorParam }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    fileSelector: FileSelectorParam;
}
/**
 * Defines the triggered when the url loading.
 *
 * @typedef OnResourceLoadEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnResourceLoadEvent {
    /**
     * The URL of the loaded resource file.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    url: string;
}
/**
 * Defines the triggered when the scale of WebView changed.
 *
 * @typedef OnScaleChangeEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnScaleChangeEvent {
    /**
     * Old scale of the page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    oldScale: number;
    /**
     * New scale of the page.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    newScale: number;
}
/**
 * Defines the triggered when the browser needs credentials from the user.
 *
 * @typedef OnHttpAuthRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnHttpAuthRequestEvent {
    /**
     * Defines the http auth request result.
     *
     * @type { HttpAuthHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    handler: HttpAuthHandler;
    /**
     * Host of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    host: string;
    /**
     * realm of the page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    realm: string;
}
/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnInterceptRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnInterceptRequestEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    request: WebResourceRequest;
}
/**
 * Defines the triggered callback when the host application that web content from the specified origin is
 *     attempting to access the resources.
 *
 * @typedef OnPermissionRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnPermissionRequestEvent {
    /**
     * Defines the onPermissionRequest callback.
     *
     * @type { PermissionRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    request: PermissionRequest;
}
/**
 * Defines the triggered callback when the host application that web content from the specified origin is
 *     requesting to capture screen.
 *
 * @typedef OnScreenCaptureRequestEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnScreenCaptureRequestEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { ScreenCaptureHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handler: ScreenCaptureHandler;
}
/**
 * Defines the triggered callback when called to allow custom display of the context menu.
 *
 * @typedef OnContextMenuShowEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnContextMenuShowEvent {
    /**
     * The menu-related parameters.
     *
     * @type { WebContextMenuParam }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    param: WebContextMenuParam;
    /**
     * The menu corresponding event is passed to the kernel.
     *
     * @type { WebContextMenuResult }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    result: WebContextMenuResult;
}
/**
 * Defines function Triggered when the host application call searchAllAsync.
 *
 * @typedef OnSearchResultReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnSearchResultReceiveEvent {
    /**
     * The ordinal number of the currently matched lookup item (starting from 0).
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    activeMatchOrdinal: number;
    /**
     * The number of all matched keywords.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    numberOfMatches: number;
    /**
     * Indicates whether the current in-page search operation is complete. The method may be called back multiple times until isDoneCounting is true.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isDoneCounting: boolean;
}
/**
 * Defines function Triggered when the scroll bar slides to the specified position.
 *
 * @typedef OnScrollEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnScrollEvent {
    /**
     * The X offset of the scroll.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    xOffset: number;
    /**
     * The Y offset of the scroll.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    yOffset: number;
}
/**
 * Defines the triggered callback when the Web page receives an ssl Error.
 *
 * @typedef OnSslErrorEventReceiveEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnSslErrorEventReceiveEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { SslErrorHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handler: SslErrorHandler;
    /**
     * Error codes.
     *
     * @type { SslError }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    error: SslError;
    /**
     * Certificate chain data in DER format.
     *
     * @type { ?Array<Uint8Array> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    certChainData?: Array<Uint8Array>;
}
/**
 * Defines the triggered callback when needs ssl client certificate from the user.
 *
 * @typedef OnClientAuthenticationEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnClientAuthenticationEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { ClientAuthenticationHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handler: ClientAuthenticationHandler;
    /**
     * The hostname of the requesting certificate server.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    host: string;
    /**
     * The port number of the request certificate server.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    port: number;
    /**
     * Acceptable asymmetric key types.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    keyTypes: Array<string>;
    /**
     * Certificates that match the private key are acceptable to the issuer.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    issuers: Array<string>;
}
/**
 * Defines the triggered callback when web page requires the user to create a window.
 *
 * @typedef OnWindowNewEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnWindowNewEvent {
    /**
     * true indicates the request to create a dialog and false indicates a new tab.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isAlert: boolean;
    /**
     * true indicates that it is triggered by the user, and false indicates that it is triggered by a non-user.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isUserTrigger: boolean;
    /**
     * Destination URL.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    targetUrl: string;
    /**
     * Lets you set the WebviewController instance for creating a new window.
     *
     * @type { ControllerHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handler: ControllerHandler;
}
/**
 * Defines the triggered callback when the application receive an new url of an apple-touch-icon.
 *
 * @typedef OnTouchIconUrlReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnTouchIconUrlReceivedEvent {
    /**
     * The apple-touch-icon URL address received.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    url: string;
    /**
     * Corresponding to whether apple-touch-icon is precomposited.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    precomposed: boolean;
}
/**
 * Defines the triggered callback when the application receive a new favicon for the current web page.
 *
 * @typedef OnFaviconReceivedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnFaviconReceivedEvent {
    /**
     * Received the Favicon icon for the PixelMap object.
     *
     * @type { PixelMap }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    favicon: PixelMap;
}
/**
 * Defines the triggered callback when previous page will no longer be drawn and next page begin to draw.
 *
 * @typedef OnPageVisibleEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnPageVisibleEvent {
    /**
     * The URL of page.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    url: string;
}
/**
 * Defines the triggered callback to decision whether resend form data or not.
 *
 * @typedef OnDataResubmittedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnDataResubmittedEvent {
    /**
     * Form data resubmission handle.
     *
     * @type { DataResubmissionHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handler: DataResubmissionHandler;
}
/**
 * Defines the playing state of audio on web page.
 *
 * @typedef OnAudioStateChangedEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnAudioStateChangedEvent {
    /**
     * The audio playback status of the current page, true if playing true otherwise false.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    playing: boolean;
}
/**
 * Defines triggered when the first content rendering of web page.
 *
 * @typedef OnFirstContentfulPaintEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnFirstContentfulPaintEvent {
    /**
     * The time at which navigation begins, expressed in microseconds.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    navigationStartTick: number;
    /**
     * The time it takes to draw content for the first time from navigation, expressed in milliseconds.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    firstContentfulPaintMs: number;
}
/**
 * Defines the triggered callback when the resources loading is intercepted.
 *
 * @typedef OnLoadInterceptEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 12
 */
declare interface OnLoadInterceptEvent {
    /**
     * The information of request.
     *
     * @type { WebResourceRequest }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    data: WebResourceRequest;
}
/**
 * Defines the function Triggered when the over scrolling.
 *
 * @typedef OnOverScrollEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface OnOverScrollEvent {
    /**
     * Based on the leftmost part of the page, the horizontal scroll offset is over.
     * Unit: vp.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    xOffset: number;
    /**
     * Based on the top of the page, the vertical scroll offset is over.
     * Unit: vp.
     *
     * @type { number }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    yOffset: number;
}
/**
 * Defines the JavaScript object to be injected.
 *
 * @typedef JavaScriptProxy
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface JavaScriptProxy {
    /**
     * Objects participating in registration.
     *
     * @type { object }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    object: object;
    /**
     * The name of the registered object, which is consistent with the
     *                          object name called in the window.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    name: string;
    /**
     * The method of the application side JavaScript object participating
     *                                       in the registration.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    methodList: Array<string>;
    /**
     * Controller.
     *
     * @type { WebController | WebviewController }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    controller: WebController | WebviewController;
    /**
     * The async method of the application side JavaScript object participating in the registration.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    asyncMethodList?: Array<string>;
    /**
     * permission configuration defining web page URLs that can access JavaScriptProxy methods.
     * The configuration can be defined at two levels, object level and method level.
     *
     * @type { ?string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    permission?: string;
}
/**
 * Enum type supplied to {@link keyboardAvoidMode} for setting the web keyboard avoid mode.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare enum WebKeyboardAvoidMode {
    /**
     * When the soft keyboard avoids, only the size of the visual viewport is adjusted, not the size of the layout viewport.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    RESIZE_VISUAL = 0,
    /**
     * By default, when the soft keyboard avoids,
     * the sizes of the visual viewport and the layout viewport are adjusted at the same time.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    RESIZE_CONTENT = 1,
    /**
     * Without adjusting any viewport size, soft keyboard avoidance will not be triggered.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    OVERLAYS_CONTENT = 2
}
/**
 * Defines Web Elements type.
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13
 */
declare enum WebElementType {
    /**
     * Image,corresponding HTML image type.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    IMAGE = 1
}
/**
 * ResponseType for contextMenu
 *
 * @enum { number }
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13
 */
declare enum WebResponseType {
    /**
     * Long press.
     *
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    LONG_PRESS = 1
}
/**
 * Defines the selection menu options.
 *
 * @typedef SelectionMenuOptionsExt
 * @syscap SystemCapability.Web.Webview.Core
 * @since 13
 */
declare interface SelectionMenuOptionsExt {
    /**
     * Callback function when the selection menu appears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    onAppear?: Callback<void>;
    /**
     * Callback function when the selection menu disappears.
     *
     * @type { ?Callback<void> }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    onDisappear?: Callback<void>;
    /**
     * The preview content of selection menu.
     *
     * @type { ?CustomBuilder }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    preview?: CustomBuilder;
    /**
     * Menu type, default value is MenuType.SELECTION_MENU.
     *
     * @type { ?MenuType }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    menuType?: MenuType;
}
/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines the Web attribute functions.
 *
 * @extends CommonMethod<WebAttribute>
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare class WebAttribute extends CommonMethod<WebAttribute> {
    /**
     * Sets whether the Web allows JavaScript scripts to execute.
     *
     * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether the Web allows JavaScript scripts to execute.
     *
     * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether the Web allows JavaScript scripts to execute.
     *
     * @param { boolean } javaScriptAccess - {@code true} means the Web can allows JavaScript scripts to execute; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    javaScriptAccess(javaScriptAccess: boolean): WebAttribute;
    /**
     * Sets whether enable local file system access in web.
     *
     * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether enable local file system access in web.
     *
     * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether to enable Access to the file system in the application.
     * This setting dose not affect the access to the files specified though $rawfile(filepath/filename).
     * <p><strong>API Note</strong>:<br>
     * fileAccess is disabled by default since API version 12.
     * When fileAccess is set to false, files in the read-only /data/storage/el1/bundle/entry/resources/resfile<br>
     * directory can still be accessed through the file protocol.
     * </p>
     *
     * @param { boolean } fileAccess - {@code true} means enable local file system access in Web; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    fileAccess(fileAccess: boolean): WebAttribute;
    /**
     * Sets whether to allow image resources to be loaded from the network.
     *
     * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
     *    The default value is true.
     * {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether to enable access to online images through HTTP and HTTPS.
     *
     * @param { boolean } onlineImageAccess - Sets whether to enable access to online images.
     *    {@code true} means means setting to allow loading image resources from the network, {@code false} otherwise.
     *    Default value: true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether to allow image resources to be loaded from the network.
     *    The default value is true.
     * @param { boolean } onlineImageAccess - {@code true} means the Web can allow image resources to be loaded from the network;
     * {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onlineImageAccess(onlineImageAccess: boolean): WebAttribute;
    /**
     * Sets whether to enable the DOM Storage API permission.
     *
     * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether to enable the DOM Storage API permission.
     *
     * @param { boolean } domStorageAccess - {@code true} means enable the DOM Storage API permission in Web; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether to enable the DOM Storage API. By default, this feature is disabled.
     * @param { boolean } domStorageAccess - Whether to enable the DOM Storage API. {@code true} means to enable
     *                                       the DOM Storage API; {@code false} means to disable the DOM Storage API.
     *                                       The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    domStorageAccess(domStorageAccess: boolean): WebAttribute;
    /**
     * Sets whether the Web can automatically load image resources.
     *
     * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether the Web can automatically load image resources.
     *
     * @param { boolean } imageAccess - {@code true} means the Web can automatically load image resources; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets whether to enable automatic image loading.
     *
     * @param { boolean } imageAccess - Sets whether to enable automatic image loading.
     *    {@code true} means the Web can automatically load image resources, {@code false} otherwise.
     *    Default value: true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    imageAccess(imageAccess: boolean): WebAttribute;
    /**
     * Sets how to load HTTP and HTTPS content.
     *
     * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets how to load HTTP and HTTPS content.
     *
     * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
    * Sets the behavior when a secure origin attempts to load a resource from an insecure origin.
    * The default is MixedMode.None, meaning not allow a secure origin to load content from an insecure origin.
    *
    *
    * @param { MixedMode } mixedMode - The mixed mode, which can be {@link MixedMode}.
    * @returns { WebAttribute }
    * @syscap SystemCapability.Web.Webview.Core
    * @crossplatform
    * @atomicservice
    * @since 18
    */
    mixedMode(mixedMode: MixedMode): WebAttribute;
    /**
     * Sets whether the Web supports zooming using gestures.
     *
     * @param { boolean } zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether the Web supports zooming using gestures.
     *
     * @param { boolean } zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Sets whether the Web supports zooming using gestures.
     *
     * @param { boolean } zoomAccess {@code true} means the Web supports zooming using gestures; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    zoomAccess(zoomAccess: boolean): WebAttribute;
    /**
     * Sets whether to allow access to geographical locations.
     *
     * @param { boolean } geolocationAccess - {@code true} means the Web allows access to geographical locations; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Set whether to enable geolocation access. By default, this feature is enabled.
     * For details, see Managing Location Permissions.
     *
     * @param { boolean } geolocationAccess - Whether to enable geolocation access. {@code true} means the Web
     *                                        allows access to geographical locations; {@code false} means the
     *                                        Web disallows access to geographical locations. The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    geolocationAccess(geolocationAccess: boolean): WebAttribute;
    /**
     * Injects the JavaScript object into window and invoke the function in window.
     *
     * @param { object } javaScriptProxy - The JavaScript object to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Injects the JavaScript object into window and invoke the function in window.
     *
     * @param { object } javaScriptProxy - The JavaScript object to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Injects the JavaScript object into window and invoke the function in window.
     *
     * @param { object } javaScriptProxy - The JavaScript object to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Registers the supplied ArkTs object in javaScriptProxy into this Web component.
     * The object is registered into all frames of the web page, including all frames, using the specified name in javaScriptProxy.
     * This allows the methods of the ArkTs object in javaScriptProxy to be accessed from JavaScript.
     *
     * <p><strong>API Note</strong>:
     * <strong>Performance Note</strong>:
     * <p>For details about the arkweb rendering framework adaptation solution,
     * see [ArkWeb Rendering Framework Adaptation]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-arkweb_rendering_framework}
     * </p>
     *
     * @param { JavaScriptProxy } javaScriptProxy - The ArkTs object in javaScriptProxy will be registered into this Web component,
     * and the methods within the methodList of the injected ArkTs object declared in javaScriptProxy can be accessed by JavaScript.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    javaScriptProxy(javaScriptProxy: JavaScriptProxy): WebAttribute;
    /**
     * Sets whether the Web should save the password.
     *
     * @param { boolean } password - {@code true} means the Web can save the password; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     */
    password(password: boolean): WebAttribute;
    /**
     * Sets the mode of cache in Web.
     *
     * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets the mode of cache in Web.
     *
     * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Sets the mode of cache in Web.
     *
     * @param { CacheMode } cacheMode - The cache mode, which can be {@link CacheMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    cacheMode(cacheMode: CacheMode): WebAttribute;
    /**
     * Sets the dark mode of Web.
     *
     * @param { WebDarkMode } mode - The dark mode, which can be {@link WebDarkMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the web dark mode. By default, web dark mode is disabled. When it is enabled,
     * the Web component enables the dark theme defined for web pages
     * if the theme has been defined in prefers-color-scheme of a media query,
     * and remains unchanged otherwise. To enable the forcible dark mode, use this API with forceDarkAccess.
     *
     * @param { WebDarkMode } mode - Web dark mode to set.
     *     Default value: WebDarkMode.Off.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    darkMode(mode: WebDarkMode): WebAttribute;
    /**
     * Sets whether to enable forced dark algorithm when the web is in dark mode
     *
     * @param { boolean } access {@code true} means enable the force dark algorithm; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets whether to enable forcible dark mode for the web page.
     * This API is applicable only when dark mode is enabled in {@link darkMode}.
     *
     * @param { boolean } access Sets whether to enable forcible dark mode for the web page.
     *    {@code true} means enable forcible dark mode for the web page. ;
     *    {@code false} means not enable forcible dark mode for the web page.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    forceDarkAccess(access: boolean): WebAttribute;
    /**
     * Sets the media options.
     *
     * @param { WebMediaOptions } options The media options, which can be {@link WebMediaOptions}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Sets the web-based media playback policy, including the validity period for automatically resuming a paused web audio,
     * and whether the audio of multiple Web instances in an application is exclusive.
     *
     * @param { WebMediaOptions } options Set the media policy for the web.
     * After updating the attribute parameters, the audio needs to be replayed for it to take effect.
     *    Default value: {resumeInterval: 0, audioExclusive: true}
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    mediaOptions(options: WebMediaOptions): WebAttribute;
    /**
     * Sets whether the Web should save the table data.
     *
     * @param { boolean } tableData {@code true} means the Web can save the table data; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     */
    tableData(tableData: boolean): WebAttribute;
    /**
     * Sets whether the Web access meta 'viewport' in HTML.
     *
     * @param { boolean } wideViewModeAccess {@code true} means the Web access meta 'viewport' in HTML; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     */
    wideViewModeAccess(wideViewModeAccess: boolean): WebAttribute;
    /**
     * Sets whether the Web access overview mode.
     *
     * @param { boolean } overviewModeAccess {@code true} means the Web access overview mode; {@code false} otherwise.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether to load web pages by using the overview mode, which means reducing the content to fit the screen width.
     * Currently, only mobile devices are supported.
     *
     * @param { boolean } overviewModeAccess Whether to load web pages by using the overview mode.
     *    {@code true} means the Web access overview mode;
     *    {@code false} means the Web not access overview mode.
     *    Default value: true
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    overviewModeAccess(overviewModeAccess: boolean): WebAttribute;
    /**
     * Sets the over-scroll mode for web
     * When the scrolling mode is enabled, when the user slides to the edge on the web root page, the web will bounce back
     * the interface through elastic animation, and the internal pages on the root page will not trigger the bounce back.
     *
     * @param { OverScrollMode } mode - The over-scroll mode, which can be {@link OverScrollMode}.
     *    The default value is OverScrollMode.NEVER.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    overScrollMode(mode: OverScrollMode): WebAttribute;
    /**
     * Sets the blur on for elements on webview when soft keyboard is hidden manually.
     *
     * @param { BlurOnKeyboardHideMode } mode - Default value is SILENT. Set BLUR to enable the blur on keyboard hide mode, which can be {@link BlurOnKeyboardHideMode}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    blurOnKeyboardHideMode(mode: BlurOnKeyboardHideMode): WebAttribute;
    /**
     * Sets the ratio of the text zoom.
     *
     * @param { number } textZoomAtio The ratio of the text zoom.  The default value is 100, ranging from 1 to +∞.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#textZoomRatio
     */
    textZoomAtio(textZoomAtio: number): WebAttribute;
    /**
     * Sets the ratio of the text zoom.
     *
     * @param { number } textZoomRatio The ratio of the text zoom.  The default value is 100, ranging from 1 to +∞.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the ratio of the text zoom.
     *
     * @param { number } textZoomRatio The ratio of the text zoom.  The default value is 100, ranging from 1 to +∞.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    textZoomRatio(textZoomRatio: number): WebAttribute;
    /**
     * Sets whether the Web access the database.
     *
     * @param { boolean } databaseAccess {@code true} means the Web access the database; {@code false} otherwise.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Sets whether to enable database access. By default, this feature is disabled.
     *
     *
     * @param { boolean } databaseAccess - Whether to enable database access. {@code true} means to enable
     *                                     database access; {@code false} means to disable database access.
     *                                     The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    databaseAccess(databaseAccess: boolean): WebAttribute;
    /**
     * Sets the initial scale for the Web.
     *
     * @param { number } percent the initial scale for the Web.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the initial scale for the Web.
     *
     * @param { number } percent the initial scale for the Web.
     *                           Value range: (0, 1000].
     *                           Default value: 100.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    initialScale(percent: number): WebAttribute;
    /**
     * Sets the Web's user agent.
     *
     * @param { string } userAgent The Web's user agent.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     * @useinstead ohos.web.webview.webview.WebviewController#setCustomUserAgent
     */
    userAgent(userAgent: string): WebAttribute;
    /**
     * Sets whether the viewport property of the meta tag is enabled.
     *
     * <p><strong>API Note</strong>:<br>
     * If the device is 2-in-1, the viewport property is not supported. This means that,
     * regardless of whether this parameter is set to true or false,
     * the viewport property will not be parsed and a default layout will be used.<br>
     * If the device is a tablet, the viewport-fit property of the meta tag is parsed regardless of
     * whether this parameter is set to true or false. When viewport-fit is set to cover,
     * the size of the safe area can be obtained through the CSS attribute.<br>
     * The viewport parameter of the meta tag on the frontend HTML page is enabled or
     * disabled based on whether User-Agent contains the Mobile field.
     * If a User-Agent does not contain the Mobile field, the viewport property in the meta tag is disabled by default.
     * In this case, you can explicitly set the metaViewport property to true to overwrite the disabled state.
     * </p>
     *
     * @param { boolean } enabled Whether the viewport property of the meta tag is enabled.
     *    {@code true} means support the viewport attribute of the meta tag,
     *    the viewport property of the meta tag is not enabled.
     *    This means that the property will not be parsed and a default layout will be used.;
     *    {@code false} means not support the viewport attribute of the meta tag,
     *    the viewport property of the meta tag is enabled.
     *    This means that the property will be parsed and used for the layout.
     *    Default value: true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    metaViewport(enabled: boolean): WebAttribute;
    /**
     * Triggered at the end of web page loading.
     * This callback is only invoked for the main frame and not for subframes.
     *
     * @param { function } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute } The WebAttribute object representing the attributes of the web page.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered at the end of web page loading.
     * This callback is only invoked for the main frame and not for subframes.
     *
     * @param { function } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute } The WebAttribute object representing the attributes of the web page.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Triggered at the end of web page loading.
     * This callback is only invoked for the main frame and not for subframes.
     *
     * @param { function } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute } The WebAttribute object representing the attributes of the web page.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered at the end of web page loading.
     * This callback is only invoked for the main frame and not for subframes.
     *
     * @param { Callback<OnPageEndEvent> } callback The triggered function at the end of web page loading.
     * @returns { WebAttribute } The WebAttribute object representing the attributes of the web page.
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onPageEnd(callback: Callback<OnPageEndEvent>): WebAttribute;
    /**
     * Triggered at the begin of web page loading.
     *
     * @param { function } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered at the begin of web page loading.
     *
     * @param { function } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Triggered at the begin of web page loading.
     *
     * @param { function } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Called when the web page starts to be loaded.
     * This API is called only for the main frame, and not for the iframe or frameset content.
     *
     * @param { Callback<OnPageBeginEvent> } callback The triggered function at the begin of web page loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onPageBegin(callback: Callback<OnPageBeginEvent>): WebAttribute;
    /**
     * Triggered when the page loading progress changes.
     *
     * @param { function } callback The triggered function when the page loading progress changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the page loading progress changes.
     *
     * @param { function } callback The triggered function when the page loading progress changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the page loading progress changes.
     *
     * @param { Callback<OnProgressChangeEvent> } callback The triggered function when the page loading progress changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onProgressChange(callback: Callback<OnProgressChangeEvent>): WebAttribute;
    /**
     * Triggered when the title of the main application document changes.
     *
     * @param { function } callback The triggered function when the title of the main application document changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the title of the main application document changes.
     *
     * @param { function } callback The triggered function when the title of the main application document changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Notifies the application that the title has changed..
     * If the page being loaded does not specify a title via the <title> element,
     * ArkWeb will generate a title baseed on the URL and return it to the application.
     *
     * @param { Callback<OnTitleReceiveEvent> } callback The triggered function when the title of the main application document changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onTitleReceive(callback: Callback<OnTitleReceiveEvent>): WebAttribute;
    /**
     * Triggered when requesting to hide the geolocation.
     *
     * @param { function } callback The triggered function when requesting to hide the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Called to notify the user that the request for obtaining the geolocation information received
     * when {@link onGeolocationShow} is called has been canceled.
     *
     * @param { function } callback - Callback invoked when the request for obtaining geolocation information has been canceled.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onGeolocationHide(callback: () => void): WebAttribute;
    /**
     * Triggered when requesting to show the geolocation permission.
     *
     * @param { function } callback The triggered function when requesting to show the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when requesting to show the geolocation permission.
     *
     * @param { function } callback The triggered function when requesting to show the geolocation permission.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Called when a request to obtain the geolocation information is received.
     * @param { Callback<OnGeolocationShowEvent> } callback - Callback invoked when a request to obtain the geolocation
     *                                                        information is received.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onGeolocationShow(callback: Callback<OnGeolocationShowEvent>): WebAttribute;
    /**
     * Triggered when the Web gets the focus.
     *
     * @param { function } callback The triggered function when the Web gets the focus.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the Web gets the focus.
     *
     * @param { function } callback The triggered function when the Web gets the focus.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onRequestSelected(callback: () => void): WebAttribute;
    /**
     * Triggered when the Web wants to display a JavaScript alert() dialog.
     *
     * @param { function } callback The triggered function when the web page wants to display a JavaScript alert() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the Web wants to display a JavaScript alert() dialog.
     *
     * @param { function } callback The triggered function when the web page wants to display a JavaScript alert() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the Web wants to display a JavaScript alert() dialog.
     *
     * @param {  Callback<OnAlertEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript alert() dialog.
     *     {@code true} means the application can invoke custom pop-up dialog capabilities (with confirmation and cancellation buttons).
     *                  Developers need to use the JsResult interface to notify the web component whether to leave the current page
     *                  according to the user's choice.
     *     {@code false} means the pop-up processing result is considered as cancelled.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onAlert(callback: Callback<OnAlertEvent, boolean>): WebAttribute;
    /**
     * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
     *
     * @param { function } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
     *
     * @param { function } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
     *
     * @param { Callback<OnBeforeUnloadEvent, boolean> } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Triggered when the Web wants to confirm navigation from JavaScript onbeforeunload.
     *
     * @param { Callback<OnBeforeUnloadEvent, boolean> } callback The triggered function when the web page wants to confirm navigation from JavaScript onbeforeunload.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onBeforeUnload(callback: Callback<OnBeforeUnloadEvent, boolean>): WebAttribute;
    /**
     * Triggered when the web page wants to display a JavaScript confirm() dialog.
     *
     * @param { function } callback The Triggered function when the web page wants to display a JavaScript confirm() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the web page wants to display a JavaScript confirm() dialog.
     *
     * @param { function } callback The Triggered function when the web page wants to display a JavaScript confirm() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the web page wants to display a JavaScript confirm() dialog.
     *
     * @param { Callback<OnConfirmEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript confirm() dialog.
     *     {@code true} means the application can call the custom pop-up capability (including confirmation and cancellation), and needs to call JsResult
     *                  to notify the Web component whether to leave the current page based on the user's confirmation or cancellation operation.
     *     {@code false} means the custom pop-up drawn in the function is invalid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onConfirm(callback: Callback<OnConfirmEvent, boolean>): WebAttribute;
    /**
     * Triggered when the web page wants to display a JavaScript prompt() dialog.
     *
     * @param { function } callback The Triggered function when the web page wants to display a JavaScript prompt() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the web page wants to display a JavaScript prompt() dialog.
     *
     * @param { function } callback The Triggered function when the web page wants to display a JavaScript prompt() dialog.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the web page wants to display a JavaScript prompt() dialog.
     *
     * @param { Callback<OnPromptEvent, boolean> } callback The triggered function when the web page wants to display a JavaScript prompt() dialog.
     *     {@code true} means the application can call the custom pop-up window capability (including confirmation, cancellation, and input),and needs to
     *                   call JsResult to notify the Web component of the final processing result based on the user's confirmation or cancellation operation.
     *     {@code false} means the pop-up window processing result is considered as a cancellation.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onPrompt(callback: Callback<OnPromptEvent, boolean>): WebAttribute;
    /**
     * Triggered when the web page receives a JavaScript console message.
     *
     * @param { function } callback The triggered function when the web page receives a JavaScript console message.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the web page receives a JavaScript console message.
     *
     * @param { function } callback The triggered function when the web page receives a JavaScript console message.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the web page receives a JavaScript console message.
     *
     * @param {  Callback<OnConsoleEvent, boolean> } callback The triggered function when the web page receives a JavaScript console message.
     *     {@code true} means the message will no longer be printed to the console.
     *     {@code false} means it will still be printed to the console.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onConsole(callback: Callback<OnConsoleEvent, boolean>): WebAttribute;
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @since 10
     */
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the web page receives a web resource loading error.
     *
     * @param { Callback<OnErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onErrorReceive(callback: Callback<OnErrorReceiveEvent>): WebAttribute;
    /**
     * Triggered when the web page receives a web resource loading HTTP error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading HTTP error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the web page receives a web resource loading HTTP error.
     *
     * @param { function } callback The triggered function when the web page receives a web resource loading HTTP error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the web page receives a web resource loading HTTP error.
     *
     * @param { Callback<OnHttpErrorReceiveEvent> } callback The triggered function when the web page receives a web resource loading HTTP error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onHttpErrorReceive(callback: Callback<OnHttpErrorReceiveEvent>): WebAttribute;
    /**
     * Triggered when starting to download.
     *
     * @param { function } callback The triggered function when starting to download.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when starting to download.
     *
     * @param { function } callback The triggered function when starting to download.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when starting to download.
     *
     * @param { Callback<OnDownloadStartEvent> } callback The triggered function when starting to download.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onDownloadStart(callback: Callback<OnDownloadStartEvent>): WebAttribute;
    /**
     * Triggered when the Web page refreshes accessed history.
     *
     * @param { function } callback The triggered callback when the Web page refreshes accessed history.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     */
    /**
     * Triggered when the Web page refreshes accessed history.
     *
     * @param { function } callback The triggered callback when the Web page refreshes accessed history.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the Web page refreshes accessed history.
     *
     * @param { Callback<OnRefreshAccessedHistoryEvent> } callback The triggered callback when the Web page refreshes accessed history.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Triggered when the Web page refreshes accessed history.
     *
     * @param { Callback<OnRefreshAccessedHistoryEvent> } callback The triggered callback when the Web page refreshes accessed history.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onRefreshAccessedHistory(callback: Callback<OnRefreshAccessedHistoryEvent>): WebAttribute;
    /**
     * Triggered when the URL loading is intercepted.
     *
     * @param { function } callback The triggered callback when the URL loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 10
     * @useinstead ohos.web.WebAttribute#onLoadIntercept
     */
    onUrlLoadIntercept(callback: (event?: {
        data: string | WebResourceRequest;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the Web page receives an ssl Error.
     *
     * @param { function } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#onSslErrorEventReceive
     */
    onSslErrorReceive(callback: (event?: {
        handler: Function;
        error: object;
    }) => void): WebAttribute;
    /**
     * Triggered when the render process exits.
     *
     * @param { function } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the render process exits.
     *
     * @param { function } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the render process exits.
     * Multiple Web components may share a single rendering process, and each affected Web component will trigger the callback.
     * When the application handles this callback, it can call the related interface of the bound webviewController to
     * restore the page. Such as {@link refresh}, {@link loadUrl}, etc.
     * For details of component lifecycle callback, please refer to the lifecycle of Web components.
     * @param { Callback<OnRenderExitedEvent> } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onRenderExited(callback: Callback<OnRenderExitedEvent>): WebAttribute;
    /**
     * Triggered when the file selector shows.
     *
     * @param { function } callback The triggered when the file selector shows.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the file selector shows.
     *
     * @param { function } callback The triggered when the file selector shows.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the file selector shows.
     * Call this function to handle HTML forms with a "file" input type. If this function is not called or returns false,
     * the web component provides the default "select file" handling interface. If it returns true, the application can customize
     * the "select file" response behavior.
     *
     * @param { Callback<OnShowFileSelectorEvent, boolean> } callback The triggered when the file selector shows.
     *     {@code true} means the user can call the system-provided pop-up window capability.
     *     {@code false} means the custom pop-up window drawn in the function is invalid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onShowFileSelector(callback: Callback<OnShowFileSelectorEvent, boolean>): WebAttribute;
    /**
     * Triggered when the render process exits.
     *
     * @param { function } callback The triggered when the render process exits.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#onRenderExited
     */
    onRenderExited(callback: (event?: {
        detail: object;
    }) => boolean): WebAttribute;
    /**
     * Triggered when the file selector shows.
     *
     * @param { function } callback The triggered when the file selector shows.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.web.WebAttribute#onShowFileSelector
     */
    onFileSelectorShow(callback: (event?: {
        callback: Function;
        fileSelector: object;
    }) => void): WebAttribute;
    /**
     * Triggered when the url loading.
     *
     * @param { function } callback The triggered when the url loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the url loading.
     *
     * @param { function } callback The triggered when the url loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the url loading.
     *
     * @param { Callback<OnResourceLoadEvent> } callback The triggered when the url loading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onResourceLoad(callback: Callback<OnResourceLoadEvent>): WebAttribute;
    /**
     * Triggered when the web component exit the full screen mode.
     *
     * @param { function } callback The triggered function when the web component exit the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the web component exit the full screen mode.
     *
     * @param { function } callback The triggered function when the web component exit the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the web component exit the full screen mode.
     *
     * @param { function } callback The triggered function when the web component exit the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onFullScreenExit(callback: () => void): WebAttribute;
    /**
     * Triggered when the web component enter the full screen mode.
     *
     * @param { function } callback The triggered function when the web component enter the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the web component enter the full screen mode.
     *
     * @param { function } callback The triggered function when the web component enter the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the web component enter the full screen mode.
     *
     * @param { OnFullScreenEnterCallback } callback - The triggered function when the web component enter the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    /**
     * Triggered when the web component enter the full screen mode.
     *
     * @param { OnFullScreenEnterCallback } callback - The triggered function when the web component enter the full screen mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    onFullScreenEnter(callback: OnFullScreenEnterCallback): WebAttribute;
    /**
     * Triggered when the scale of WebView changed.
     *
     * @param { function } callback The triggered when the scale of WebView changed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the scale of WebView changed.
     *
     * @param { function } callback The triggered when the scale of WebView changed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the scale of WebView changed.
     *
     * @param { Callback<OnScaleChangeEvent> } callback The triggered when the scale of WebView changed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onScaleChange(callback: Callback<OnScaleChangeEvent>): WebAttribute;
    /**
     * Triggered when the browser needs credentials from the user.
     *
     * @param { function } callback The triggered when the browser needs credentials from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the browser needs credentials from the user.
     *
     * @param { function } callback The triggered when the browser needs credentials from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the browser needs credentials from the user.
     *
     * @param { Callback<OnHttpAuthRequestEvent, boolean> } callback The triggered when the browser needs credentials from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onHttpAuthRequest(callback: Callback<OnHttpAuthRequestEvent, boolean>): WebAttribute;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { function } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources. Otherwise, the response value will be used
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { function } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources. Otherwise, the response value will be used
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { Callback<OnInterceptRequestEvent, WebResourceResponse> } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute } If the response value is null, the Web will continue to load the resources. Otherwise, the response value will be used
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onInterceptRequest(callback: Callback<OnInterceptRequestEvent, WebResourceResponse>): WebAttribute;
    /**
     * Triggered when the host application that web content from the specified origin is attempting to access the resources.
     *
     * @param { function } callback The triggered callback when the host application that web content from the specified origin is
     *     attempting to access the resources.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the host application that web content from the specified origin is attempting to access the resources.
     *
     * @param { function } callback The triggered callback when the host application that web content from the specified origin is
     *     attempting to access the resources.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Called when a permission request is received. To call this API, you need to declare the ohos.permission.CAMERA and ohos.permission.MICROPHONE permissions.
     *
     * @param { Callback<OnPermissionRequestEvent> } callback Callback invoked when a permission request is received.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onPermissionRequest(callback: Callback<OnPermissionRequestEvent>): WebAttribute;
    /**
     * Triggered when the host application that web content from the specified origin is requesting to capture screen.
     * @param { function } callback The triggered callback when the host application that web content from the specified origin is
     *     requesting to capture screen.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Triggered when the host application that web content from the specified origin is requesting to capture screen.
     * @param { function } callback The triggered callback when the host application that web content from the specified origin is
     *     requesting to capture screen.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Called when a screen capture request is received.
     *
     * @param { Callback<OnScreenCaptureRequestEvent> } callback Called when a screen capture request is received.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onScreenCaptureRequest(callback: Callback<OnScreenCaptureRequestEvent>): WebAttribute;
    /**
     * Triggered when called to allow custom display of the context menu.
     *
     * @param { function } callback The triggered callback when called to allow custom display of the context menu.
     * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when called to allow custom display of the context menu.
     *
     * @param { function } callback The triggered callback when called to allow custom display of the context menu.
     * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when called to allow custom display of the context menu.
     *
     * @param { Callback<OnContextMenuShowEvent, boolean> } callback The triggered callback when called to allow custom display of the context menu.
     *     {@code true} means the custom menu is triggered.
     *     {@code false} means the custom menu is invalid.
     * @returns { WebAttribute } If custom display return true.Otherwise, default display return false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onContextMenuShow(callback: Callback<OnContextMenuShowEvent, boolean>): WebAttribute;
    /**
     * Triggered when called to allow custom hide of the context menu.
     *
     * @param { OnContextMenuHideCallback } callback The triggered function when called to allow custom hide of the context menu.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onContextMenuHide(callback: OnContextMenuHideCallback): WebAttribute;
    /**
     * Set whether media playback needs to be triggered by user gestures.
     *
     * @param { boolean } access True if it needs to be triggered manually by the user else false.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether to manually play audio-only videos. The playback of muted videos is not controlled by this interface.
     *
     * @param { boolean } access Set whether to manually play audio-only videos.
     *  {@code true}True means setting up automatic playback of audio videos requires users to manually click, {@code false} otherwise.
     *    Default value: true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    mediaPlayGestureAccess(access: boolean): WebAttribute;
    /**
     * Notify search result to host application through onSearchResultReceive.
     *
     * @param { function } callback Function Triggered when the host application call searchAllAsync.
     * or searchNext api on WebController and the request is valid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Notify search result to host application through onSearchResultReceive.
     *
     * @param { function } callback Function Triggered when the host application call searchAllAsync.
     * or searchNext api on WebController and the request is valid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Notify search result to host application through onSearchResultReceive.
     *
     * @param { Callback<OnSearchResultReceiveEvent> } callback Function Triggered when the host application call searchAllAsync.
     * or searchNext api on WebController and the request is valid.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onSearchResultReceive(callback: Callback<OnSearchResultReceiveEvent>): WebAttribute;
    /**
     * Triggered when the scroll bar slides to the specified position.
     *
     * @param { function } callback Function Triggered when the scroll bar slides to the specified position.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the scroll bar slides to the specified position.
     *
     * @param { function } callback Function Triggered when the scroll bar slides to the specified position.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the scroll bar slides to the specified position.
     *
     * @param { Callback<OnScrollEvent> } callback Function Triggered when the scroll bar slides to the specified position.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onScroll(callback: Callback<OnScrollEvent>): WebAttribute;
    /**
     * Called to notify users when an SSL error occurs with a request for the main frame.
     * To include errors with requests for subframes, use the OnSslErrorEvent API.
     *
     * @param { function } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Called to notify users when an SSL error occurs with a request for the main frame.
     * To include errors with requests for subframes, use the OnSslErrorEvent API.
     *
     * @param { function } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Called to notify users when an SSL error occurs with a request for the main frame.
     * To include errors with requests for subframes, use the OnSslErrorEvent API.
     *
     * @param { Callback<OnSslErrorEventReceiveEvent> } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onSslErrorEventReceive(callback: Callback<OnSslErrorEventReceiveEvent>): WebAttribute;
    /**
     * Called to notify users when an SSL error occurs during the loading of resources (for the main frame and subframes).
     * To handle SSL errors for requests for the main frame, use the isMainFrame field to distinguish.
     *
     * @param { OnSslErrorEventCallback } callback The triggered callback when the Web page receives an ssl Error.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onSslErrorEvent(callback: OnSslErrorEventCallback): WebAttribute;
    /**
     * Triggered when the Web page needs ssl client certificate from the user.
     *
     * @param { function } callback The triggered callback when needs ssl client certificate from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the Web page needs ssl client certificate from the user.
     *
     * @param { function } callback The triggered callback when needs ssl client certificate from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the Web page needs ssl client certificate from the user.
     *
     * @param { Callback<OnClientAuthenticationEvent> } callback The triggered callback when needs ssl client certificate from the user.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onClientAuthenticationRequest(callback: Callback<OnClientAuthenticationEvent>): WebAttribute;
    /**
     * Triggered when web page requires the user to create a window.
     *
     * @param { function } callback The triggered callback when web page requires the user to create a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when web page requires the user to create a window.
     *
     * @param { function } callback The triggered callback when web page requires the user to create a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when web page requires the user to create a window.
     * If the {@link setWebController} interface is not called, the render process will be blocked.
     * If no new window is created, it is set to null when calling the {@link setWebController} interface,
     * informing the Web that no new window is created.
     * The new window should avoid being directly overlaid on the original Web component,
     * and its URL (such as address bar) should be clearly displayed in the same form as the main page to
     * prevent users from being confused. If credible URL visualization management cannot be achieved,
     * it is necessary to consider prohibiting the creation of new windows. It should be noted that the source of
     * the new window request cannot be traced reliably, and it may be initiated by a third party iframe.
     * The application needs to take defensive measures such as sandbox isolation and permission restriction
     * by default to ensure security.
     * @param {  Callback<OnWindowNewEvent> } callback The triggered callback when web page requires the user to create a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onWindowNew(callback: Callback<OnWindowNewEvent>): WebAttribute;
    /**
     * Triggered when web page requires the user to close a window.
     *
     * @param { function } callback The triggered callback when web page requires the user to close a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Notifies the user of the window closing request.
     * Like {@link onWindowNew}, from a security perspective, applications should ensure that users can know that
     * the page they interact with is closed.
     * @param { function } callback The triggered callback when web page requires the user to close a window.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onWindowExit(callback: () => void): WebAttribute;
    /**
     * Set whether multiple windows are supported.
     *
     * @param { boolean } multiWindow True if it needs to be triggered manually by the user else false.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether multiple windows are supported.
     * When multiple windows permissions are enabled, the {@link onWindowNew} event needs to be implemented.
     * @param { boolean } multiWindow True if it needs to be triggered manually by the user else false.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    multiWindowAccess(multiWindow: boolean): WebAttribute;
    /**
     * Key events notify the application before the WebView consumes them.
     *
     * @param { function } callback Key event info.
     * @returns { WebAttribute } True if the application consumes key events else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Key events notify the application before the WebView consumes them.
     * @param { function } callback Key event info.
     * @returns { WebAttribute } True if the application consumes key events else false.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onInterceptKeyEvent(callback: (event: KeyEvent) => boolean): WebAttribute;
    /**
     * Set the font of webview standard font library. The default font is "sans serif".
     *
     * @param { string } family Standard font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the standard font family for the web page.
     *
     * @param { string } family Sets the standard font family for the web page.
     *    Default value: sans-serif.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    webStandardFont(family: string): WebAttribute;
    /**
     * Set the font of webview serif font library. The default font is "serif".
     *
     * @param { string } family Serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the standard font family for the web page.
     *
     * @param { string } family Sets the standard font family for the web page.
     *    Default value: sans-serif.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    webSerifFont(family: string): WebAttribute;
    /**
     * Set the font of webview sans serif font library. The default font is "sans-serif".
     *
     * @param { string } family Sans serif font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the sans serif font family for the web page.
     *
     * @param { string } family Sets the sans serif font family for the web page.
     *    Default value: sans-serif.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    webSansSerifFont(family: string): WebAttribute;
    /**
     * Set the font of webview fixed font library. The default font is "monospace".
     *
     * @param { string } family Fixed font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the fixed font family for the web page.
     *
     * @param { string } family Sets the fixed font family for the web page.
     *    Default value: monospace.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    webFixedFont(family: string): WebAttribute;
    /**
     * Set the font of webview fantasy font library. The default font is "fantasy".
     *
     * @param { string } family fantasy font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the fantasy font family for the web page.
     *
     * @param { string } family Sets the fantasy font family for the web page.
     *    Default value: fantasy.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    webFantasyFont(family: string): WebAttribute;
    /**
     * Set the font of webview cursive font library. The default font is "cursive".
     *
     * @param { string } family Cursive font set series.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the cursive font family for the web page.
     *
     * @param { string } family Sets the cursive font family for the web page.
     *    Default value: cursive.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    webCursiveFont(family: string): WebAttribute;
    /**
     * Set the default fixed font value of webview. The default value is 13, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the default font size for the web page.
     *
     * @param { number } size Default fixed font size to set, in px.
     *    The value ranges from -2^31 to 2^31-1. In actual rendering,
     *    values greater than 72 are handled as 72, and values less than 1 are handled as 1.
     *    Default value: 13.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    defaultFixedFontSize(size: number): WebAttribute;
    /**
     * Set the default font value of webview. The default value is 16, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the default font size for the web page.
     *
     * @param { number } size Default font size to set, in px.
     *    The value ranges from -2^31 to 2^31-1. In actual rendering, values greater than 72 are handled as 72,
     *    and values less than 1 are handled as 1. Default value: 16.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    defaultFontSize(size: number): WebAttribute;
    /**
     * Set the minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the minimum font size for the web page.
     *
     * @param { number } size Minimum font size to set, in px.
     *    The value ranges from -2^31 to 2^31-1. In actual rendering,
     *    values greater than 72 are handled as 72, and values less than 1 are handled as 1.
     *    Default value: 8
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    minFontSize(size: number): WebAttribute;
    /**
     * Set the logical minimum value of webview font. The default value is 8, ranging from 1 to 72.
     *
     * @param { number } size Font size.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets the minimum logical font size for the web page.
     *
     * @param { number } size Minimum logical font size to set, in px.
     *    The value ranges from -2^31 to 2^31-1. In actual rendering,
     *    values greater than 72 are handled as 72, and values less than 1 are handled as 1.
     *    Default value: 8
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    minLogicalFontSize(size: number): WebAttribute;
    /**
     * Set the default text encodingFormat value of webview. The default value is UTF-8.
     *
     * @param { string } textEncodingFormat text encodingFormat.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    defaultTextEncodingFormat(textEncodingFormat: string): WebAttribute;
    /**
     * Whether force display the scroll bar.
     *
     * @param { boolean } enabled {@code true} means show; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    forceDisplayScrollBar(enabled: boolean): WebAttribute;
    /**
     * Whether web component can load resource from network.
     *
     * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Whether web component can load resource from network.
     *
     * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Whether web component can load resource from network.
     *
     * @param { boolean } block {@code true} means it can't load resource from network; {@code false} otherwise.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 18
     */
    blockNetwork(block: boolean): WebAttribute;
    /**
     * Set whether paint horizontal scroll bar.
     *
     * @param { boolean } horizontalScrollBar True if it needs to paint horizontal scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether paint horizontal scroll bar.
     *
     * <p><strong>API Note</strong>:<br>
     * After controlling the horizontal scrollbar's visibility through the @State variable, you need to call controller.refresh() to take effect.<br>
     * When frequently changing the @State variable dynamically, it is recommended to match the toggle variable with the Web component one-to-one.
     * </p>
     *
     * @param { boolean } horizontalScrollBar True if it needs to paint horizontal scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    horizontalScrollBarAccess(horizontalScrollBar: boolean): WebAttribute;
    /**
     * Set whether paint vertical scroll bar.
     *
     * @param { boolean } verticalScrollBar True if it needs to paint vertical scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Set whether paint vertical scroll bar, including the system default scrollbar and user-defined scrollbar.
     *
     * <p><strong>API Note</strong>:<br>
     * After controlling the vertical scrollbar's visibility through the @State variable, you need to call controller.refresh() to take effect.<br>
     * When frequently changing the @State variable dynamically, it is recommended to match the toggle variable with the Web component one-to-one.
     * </p>
     *
     * @param { boolean } verticalScrollBar True if it needs to paint vertical scroll bar.
     *    The default value is true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    verticalScrollBarAccess(verticalScrollBar: boolean): WebAttribute;
    /**
     * Triggered when the application receive the url of an apple-touch-icon.
     *
     * @param { function } callback The triggered callback when the application receive an new url of an
     * apple-touch-icon.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the application receive the url of an apple-touch-icon.
     *
     * @param { function } callback The triggered callback when the application receive an new url of an
     * apple-touch-icon.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the application receive the url of an apple-touch-icon.
     *
     * @param { Callback<OnTouchIconUrlReceivedEvent> } callback The triggered callback when the application receive an new url of an
     * apple-touch-icon.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onTouchIconUrlReceived(callback: Callback<OnTouchIconUrlReceivedEvent>): WebAttribute;
    /**
     * Triggered when the application receive a new favicon for the current web page.
     *
     * @param { function } callback The triggered callback when the application receive a new favicon for the
     * current web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the application receive a new favicon for the current web page.
     *
     * @param { function } callback The triggered callback when the application receive a new favicon for the
     * current web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the application receive a new favicon for the current web page.
     *
     * @param { Callback<OnFaviconReceivedEvent> } callback The triggered callback when the application receive a new favicon for the
     * current web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onFaviconReceived(callback: Callback<OnFaviconReceivedEvent>): WebAttribute;
    /**
     * Triggered when previous page will no longer be drawn and next page begin to draw.
     *
     * @param { function } callback The triggered callback when previous page will no longer be drawn and next
     * page begin to draw.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when previous page will no longer be drawn and next page begin to draw.
     *
     * @param { function } callback The triggered callback when previous page will no longer be drawn and next
     * page begin to draw.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when previous page will no longer be drawn and next page begin to draw.
     *
     * @param {  Callback<OnPageVisibleEvent> } callback The triggered callback when previous page will no longer be drawn and next
     * page begin to draw.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onPageVisible(callback: Callback<OnPageVisibleEvent>): WebAttribute;
    /**
     * Triggered when the form could be resubmitted.
     *
     * @param { function } callback The triggered callback to decision whether resend form data or not.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Triggered when the form could be resubmitted.
     *
     * @param { function } callback The triggered callback to decision whether resend form data or not.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the form could be resubmitted.
     *
     * @param { Callback<OnDataResubmittedEvent> } callback The triggered callback to decision whether resend form data or not.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onDataResubmitted(callback: Callback<OnDataResubmittedEvent>): WebAttribute;
    /**
     * Set whether enable pinch smooth mode.
     *
     * @param { boolean } isEnabled True if it needs to enable smooth mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 9
     */
    /**
     * Sets whether to enable smooth pinch mode for the web page.
     *
     * @param { boolean } isEnabled Whether to enable smooth pinch mode for the web page.
     *    {@code true} means to enable smooth pinch mode for the web page;
     *    {@code false} means not to enable smooth pinch mode for the web page.
     *    The default value is false.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    pinchSmooth(isEnabled: boolean): WebAttribute;
    /**
     * Whether the window can be open automatically through JavaScript.
     *
     * @param { boolean } flag If it is true, the window can be opened automatically through JavaScript.
     * If it is false and user behavior, the window can be opened automatically through JavaScript.
     * Otherwise, the window cannot be opened.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Whether the window can be open automatically through JavaScript.
     *
     * @param { boolean } flag If it is true, the window can be opened automatically through JavaScript.
     * If it is false and user behavior, the window can be opened automatically through JavaScript.
     * Otherwise, the window cannot be opened.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    allowWindowOpenMethod(flag: boolean): WebAttribute;
    /**
     * Triggered when the playing state of audio on web page changed.
     *
     * @param { function } callback The playing state of audio on web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Triggered when the playing state of audio on web page changed.
     *
     * @param { function } callback The playing state of audio on web page.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Set the callback function when the audio playback status on the webpage changes.
     *
     * @param { Callback<OnAudioStateChangedEvent> } callback Callback invoked when the audio playback status on the webpage changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onAudioStateChanged(callback: Callback<OnAudioStateChangedEvent>): WebAttribute;
    /**
     * Triggered when the first content rendering of web page.
     *
     * @param { function } callback
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Triggered when the first content rendering of web page.
     *
     * @param { function } callback
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the first content rendering of web page.
     *
     * @param { Callback<OnFirstContentfulPaintEvent> } callback
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onFirstContentfulPaint(callback: Callback<OnFirstContentfulPaintEvent>): WebAttribute;
    /**
     * Called when the First rendering of meaningful content time(FMP)
     *
     * @param { OnFirstMeaningfulPaintCallback } callback Function Triggered when the firstMeaningfulPaint.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onFirstMeaningfulPaint(callback: OnFirstMeaningfulPaintCallback): WebAttribute;
    /**
     * Called when the Maximum content rendering time(LCP).
     *
     * @param { OnLargestContentfulPaintCallback } callback Function Triggered when the largestContentfulPaint.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onLargestContentfulPaint(callback: OnLargestContentfulPaintCallback): WebAttribute;
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { function } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { function } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the resources loading is intercepted.
     *
     * @param { Callback<OnLoadInterceptEvent, boolean> } callback The triggered callback when the resources loading is intercepted.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 12
     */
    onLoadIntercept(callback: Callback<OnLoadInterceptEvent, boolean>): WebAttribute;
    /**
     * Triggered when The controller is bound to the web component, this controller must be a WebviewController.
     * This callback can not use the interface about manipulating web pages.
     * @param { function } callback The triggered callback when web controller initialization success.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * The callback is triggered when the Controller is successfully bound to the Web component,
     * and the Controller must be a WebviewController, and it is forbidden to call the interface related to
     * the Web component before the event callback, otherwise a js-error exception will be thrown.
     * Because the webpage has not been loaded when the callback is called, it is impossible to use interfaces related to
     * operating webpages in the callback, such as {@link zoomIn} and {@link zoomOut}, and you can use interfaces unrelated to
     * operating webpages such as {@link loadUrl} and {@link getWebId}.
     * @param { function } callback The triggered callback when web controller initialization success.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @crossplatform
     * @atomicservice
     * @since 11
     */
    onControllerAttached(callback: () => void): WebAttribute;
    /**
     * Triggered when the over scrolling.
     * @param { function } callback Function Triggered when the over scrolling.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 10
     */
    /**
     * Triggered when the over scrolling.
     * @param { function } callback Function Triggered when the over scrolling.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Triggered when the over scrolling.
     * @param { Callback<OnOverScrollEvent> } callback Function Triggered when the over scrolling.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onOverScroll(callback: Callback<OnOverScrollEvent>): WebAttribute;
    /**
     * Called when received website security risk check result.
     *
     * @param { OnSafeBrowsingCheckResultCallback } callback - Function triggered when received website security risk check result.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onSafeBrowsingCheckResult(callback: OnSafeBrowsingCheckResultCallback): WebAttribute;
    /**
     * Called when the load committed.
     *
     * @param { OnNavigationEntryCommittedCallback } callback Function Triggered when a load committed.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onNavigationEntryCommitted(callback: OnNavigationEntryCommittedCallback): WebAttribute;
    /**
     * Called when tracker's cookie is prevented.
     *
     * @param { OnIntelligentTrackingPreventionCallback } callback - Callback triggered when tracker's cookie is prevented.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onIntelligentTrackingPreventionResult(callback: OnIntelligentTrackingPreventionCallback): WebAttribute;
    /**
     * Injects the JavaScripts script into the Web component.
     * When the specified page or document starts to be loaded, the script is executed on any page whose source matches scriptRules.
     * <p><strong>API Note</strong>:<br>
     * The script runs before any JavaScript code of the page, when the DOM tree may not have been loaded or rendered.
     * The script is executed in the lexicographic order instead of array sequence.
     * if the array sequemce is required, you are advised to use the runJavaScriptOnDocumentStart interface.
     * You are not advised to use this API together with runJavaScriptOnDocumentStart.
     * </p>
     *
     * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    javaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;
    /**
     * Injects the JavaScripts script into the Web component. When the specified page or document has been loaded,
     * the script is executed on any page whose source matches scriptRules.
     * <p><strong>API NOTE</strong>:<br>
     * The script runs before any Javascript code of the page, when the DOM tree has been loaded and rendered.
     * The script is excuted in the lexicographic order, not the array order.
     * You are not advised to use this API together with runJavaScriptOnDocumentEnd.
     * <p>
     *
     * @param { Array<ScriptItem> } scripts - The array of the JavaScripts to be injected.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    javaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;
    /**
     * Sets the web layout mode.
     *
     * <p><strong>API Note</strong>:<br>
     * Currently, only two web layout modes are supported: WebLayoutMode.NONE and WebLayoutMode.FIT_CONTENT.
     * The following restrictions apply with the usage of WebLayoutMode.FIT_CONTENT:
     * - If the Web component is wider or longer than 7680 px, specify the RenderMode.SYNC_RENDER mode
     *   when creating the Web component; otherwise, the screen may be blank.
     * - After the Web component is created, dynamic switching of the layoutMode is not supported.
     * - The width and height of a Web component cannot exceed 500,000 px when the RenderMode.SYNC_RENDER mode is specified,
     *   and cannot exceed 7680 px when the RenderMode.ASYNC_RENDER mode is specified.
     * - Frequent changes to the page width and height will trigger a re-layout of the Web component,
     *   which can affect the user experience.
     * - Waterfall web pages are not supported (drop down to the bottom to load more).
     * - Only height adaptation is supported. Width adaptation is not supported.
     * - Because the height is adaptive to the web page height,
     *   the component height cannot be changed by modifying the component height attribute.
     * </p>
     *
     * @param { WebLayoutMode } mode - The web layout mode, follow the system or adaptive layout.
     *    The default value is WebLayoutMode.NONE.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    layoutMode(mode: WebLayoutMode): WebAttribute;
    /**
     * Called to setting the nested scroll options.
     *
     * @param { NestedScrollOptions } value - options for nested scrolling.
     * @returns { WebAttribute } the attribute of the scroll.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    /**
     * Called to setting the nested scroll options.
     *
     * <p><strong>API Note</strong>:<br>
     * You can set four directions: up, down, left, and right, or set nested scrolling modes for forward and backward directions
     * to achieve scrolling linkage with the parent component.<br>
     * When value is of type NestedScrollOptionsExt (four directions: up, down, left, and right), the default scrolling options
     * for scrollUp, scrollDown, scrollLeft, and scrollRight are NestedScrollMode.SELF_FIRST.<br>
     * When value is of type NestedScrollOptions (two directions: forward and backward), the default scrolling options for scrollForward
     * and scrollBackward are NestedScrollMode.SELF_FIRST.<br>
     * Supported nested scrolling containers: Grid, List, Scroll, Swiper, Tabs, WaterFlow, Refresh, bindSheet.<br>
     * Supported nested scrolling input events: gestures, mouse, and trackpad.<br>
     * In nested scrolling scenarios, since web scrolling to the edge will prioritize triggering the overscroll bounce effect,
     * it is recommended to set overScrollMode to OverScrollMode.NEVER to avoid affecting the user experience in this scenario.
     * </p>
     *
     * @param { NestedScrollOptions | NestedScrollOptionsExt } value - options for
     *     nested scrolling.
     * @returns { WebAttribute } the attribute of the scroll.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 14
     */
    nestedScroll(value: NestedScrollOptions | NestedScrollOptionsExt): WebAttribute;
    /**
     * Sets the enable native embed mode for web.
     *
     * <p><strong>API Note</strong>:
     * <strong>Performance Note</strong>:
     * <p>For details about how to rendering native components on the Web using same-layer rendering,
     * see [Rendering Native Components on the Web Using Same-Layer Rendering]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-render-web-using-same-layer-render}
     * </p>
     *
     * @param { boolean } mode - True if it needs to enable native embed mode.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    enableNativeEmbedMode(mode: boolean): WebAttribute;
    /**
     * Registers the HTML tag name and type for same-layer rendering.
     * The tag name only supports object and embed.
     * The tag type only supports visible ASCII characters.<br>
     * If the specified type is the same as the W3C standard object or embed type,
     * the ArkWeb kernel identifies the type as a non-same-layer tag.<br>
     * This API is also controlled by the enableNativeEmbedMode API and
     * does not take effect if same-layer rendering is not enabled. When this API is not used,
     * the ArkWeb engine recognizes the embed tags with the "native/" prefix as same-layer tags.
     *
     * @param { string } tag - Tag name.
     * @param { string } type - Type of the tag, The kernel matches this parameter with a prefix.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    registerNativeEmbedRule(tag: string, type: string): WebAttribute;
    /**
     * Triggered when embed lifecycle changes.
     *
     * <p><strong>API Note</strong>:
     * <strong>Performance Note</strong>:
     * <p>For details about how to rendering native components on the Web using same-layer rendering,
     * see [Rendering Native Components on the Web Using Same-Layer Rendering]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-render-web-using-same-layer-render}
     * </p>
     *
     * @param { function } callback - Function Triggered when embed lifecycle changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onNativeEmbedLifecycleChange(callback: (event: NativeEmbedDataInfo) => void): WebAttribute;
    /**
     * Called when the visibility of a same-layer tag (such as an Embed tag or an Object tag) on a web page changes in the viewport.
     * By default, the same-layer tag is invisible. If the rendering tag is visible when you access the page for the first time,
     * the callback is triggered; otherwise, it is not triggered. That is, if the same-layer tag changes from a non-zero value to 0 x 0,
     * the callback is triggered. If the rendering tag size changes from 0 x 0 to a non-zero value, the callback is not triggered.
     * If all the same-layer tags are invisible, they are reported as invisible. If all the same-layer rendering tags or part of them are visible,
     * they are reported as invisible.
     *
     * @param { OnNativeEmbedVisibilityChangeCallback } callback - Callback triggered when embed visibility changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    onNativeEmbedVisibilityChange(callback: OnNativeEmbedVisibilityChangeCallback): WebAttribute;
    /**
     * Triggered when gesture effect on embed tag.
     *
     * <p><strong>API Note</strong>:
     * <strong>Performance Note</strong>:
     * <p>For details about how to rendering native components on the Web using same-layer rendering,
     * see [Rendering Native Components on the Web Using Same-Layer Rendering]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-render-web-using-same-layer-render}
     * </p>
     *
     * @param { function } callback - Function Triggered when gesture effect on embed tag.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    onNativeEmbedGestureEvent(callback: (event: NativeEmbedTouchInfo) => void): WebAttribute;
    /**
     * Called to set copy option
     *
     * @param { CopyOptions } value - copy option.The default value is CopyOptions.LocalDevice.
     * @returns { WebAttribute } the attribute of the scroll.
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 11
     */
    copyOptions(value: CopyOptions): WebAttribute;
    /**
     * When the URL is about to be loaded into the current Web, it gives the application the opportunity to take control.
     * This will not called for POST requests, may be called for subframes and with non-HTTP(S) schemes.
     *
     * @param { OnOverrideUrlLoadingCallback } callback - The callback for onOverrideUrlLoading.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onOverrideUrlLoading(callback: OnOverrideUrlLoadingCallback): WebAttribute;
    /**
     * Sets whether automatic text resizing is enabled.
     *
     * @param { boolean } textAutosizing - Whether automatic text resizing is enabled.
     *    {@code true} means enable text autosizing;
     *    {@code false} means disable text autosizing.
     *    Default value: true.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    textAutosizing(textAutosizing: boolean): WebAttribute;
    /**
     * Enable the application takeover of web media playback feature.
     *
     * @param { NativeMediaPlayerConfig } config - The configuration of native media player.
     *    enable: whether to enable the feature, shouldOverlay: whether the image of the video player
     *    taken over by the application will overlay the web page content, if this feature is enabled.
     *    Default value: {enable: false, shouldOverlay: false}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    enableNativeMediaPlayer(config: NativeMediaPlayerConfig): WebAttribute;
    /**
     * Triggered when render process not responding.
     * If the Web component can't handle the input event, or can't navigate to the new URL within a reasonable time range,
     * the Web page process is considered unresponsive and the callback will be triggered.
     * As long as the web process has been unresponsive, this callback may continue to trigger until
     * the web process responds again, at which time {@link onRenderProcessResponding} will trigger.
     * Applications can terminate the associated rendering process through the WebviewController interface {@link terminateRenderProcess},
     * which may affect other Web components in the same rendering process.
     * @param { OnRenderProcessNotRespondingCallback } callback The triggered function when render process not responding.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    onRenderProcessNotResponding(callback: OnRenderProcessNotRespondingCallback): WebAttribute;
    /**
     * This callback function is triggered when the rendering process changes from unresponsive state to normal operation state,
     * which indicates that the webpage is not really stuck.
     *
     * @param { OnRenderProcessRespondingCallback } callback The triggered function when the unresponsive render process becomes responsive.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    onRenderProcessResponding(callback: OnRenderProcessRespondingCallback): WebAttribute;
    /**
     * Set the custom text menu.
     * The Web component custom menu extension item interface allows users to set the extension item's text content, icon, and callback method.
     *
     * <p><strong>API Note</strong>:<br>
     * This interface only supports selecting plain text. When the selected content contains images and other non-text content,
     * garbled characters will be displayed in the action information.
     * </p>
     *
     * @param { Array<ExpandedMenuItemOptions> } expandedMenuOptions - Customize text menu options.
     *                                                                 The number of menu items, the content size of the menu, and the startIcon
     *                                                                 icon size are consistent with the ArkUI Menu component.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     * @deprecated since 20
     * @useinstead ohos.web.WebAttribute#editMenuOptions
     */
    selectionMenuOptions(expandedMenuOptions: Array<ExpandedMenuItemOptions>): WebAttribute;
    /**
     * Called when the viewport-fit configuration in the web page's <meta> tag changes.
     * The application can adapt its layout to the viewport within this callback.
     *
     * @param { OnViewportFitChangedCallback } callback - Callback invoked when the viewport-fit configuration in the web page's <meta> tag changes.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onViewportFitChanged(callback: OnViewportFitChangedCallback): WebAttribute;
    /**
     * Editable elements (such as input labels) in web pages will call back to this interface before pulling up
     * the soft keyboard. Applications can use this interface to intercept the pop-up of the system soft keyboard
     * and configure the application-customized soft keyboard (according to this interface,
     * the application can decide to use the system default soft keyboard/the system soft keyboard with
     * the enter key customized/all the soft keyboards customized by the application).
     *
     * @param { WebKeyboardCallback } callback - The callback for onInterceptKeyboardAttach.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onInterceptKeyboardAttach(callback: WebKeyboardCallback): WebAttribute;
    /**
     * Called when received Ads blocked results.
     * If blocked results exist at the end of page loading, the first call will be triggered.
     * To avoid performance issues, subsequent results will be periodically reported through this api.
     *
     * @param { OnAdsBlockedCallback } callback - The callback for OnAdsBlockedCallback.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    onAdsBlocked(callback: OnAdsBlockedCallback): WebAttribute;
    /**
     * When the keyboard avoidance mode set by UIContext is {@link KeyboardAvoidMode.RESIZE} mode,
     * the interface function will not take effect.
     * @param { WebKeyboardAvoidMode } mode - The web keyboard avoid mode, which can be {@link WebKeyboardAvoidMode}.
     *                                        Web soft keyboard avoidance is not recommended in nested scrolling scenes,
     *                                        including RESIZE_VISUAL and RESIZE_CONTENT.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    keyboardAvoidMode(mode: WebKeyboardAvoidMode): WebAttribute;
    /**
     * Set the custom text menu.
     *
     * <p><strong>API Note</strong>:<br>
     * The onCreateMenu interface is used to modify, add, and delete menu options.If you want to hide the text menu,
     * you need to return an empty array.<br>
     * The onMenuItemClick interface allows you to define the callback function for menu options.This function is
     * triggered when a menu option is clicked, and it determines whether to execute the system's default callback
     * based on the return value. Returning true prevents the system callback from executing, while returning false
     * continues with the system callback.<br>
     * The editMenuOptions interface makes the selectionMenuOptions (deprecated) not work when used at the same time.
     * </p>
     *
     * @param { EditMenuOptions } editMenu - Customize text menu options.
     *                                       The number of menu items, as well as the content size and icon size of the menu,
     *                                       should be consistent with the ArkUI Menu component.
     *                                       The system-provided id enumeration values (TextMenuItemId) in the menu are only
     *                                       supportedfor CUT, COPY, PASTE, and SELECT_ALL in the web.
     *                                       The textRange parameter in the onMenuItemClick function is meaningless in the web,
     *                                       and the input value is -1.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 12
     */
    editMenuOptions(editMenu: EditMenuOptions): WebAttribute;
    /**
     * Enable or disable haptic feedback.
     *
     * @param { boolean } enabled - Default value is true, set false to disable haptic feedback.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    enableHapticFeedback(enabled: boolean): WebAttribute;
    /**
     * Bind to the selection menu.
     *
     * @param { WebElementType } elementType - Indicates the type of selection menu.
     * @param { CustomBuilder } content - Indicates the content of selection menu.
     * @param { WebResponseType } responseType - Indicates response type of selection menu.
     * @param { SelectionMenuOptionsExt } [options] - Indicates the options of selection menu.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 13
     */
    bindSelectionMenu(elementType: WebElementType, content: CustomBuilder, responseType: WebResponseType, options?: SelectionMenuOptionsExt): WebAttribute;
    /**
     * Sets whether to optimize parser budget to reduce FCP time
     *
     * @param { boolean} optimizeParserBudget Default value is false, set true to enable optimize parser budget.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    optimizeParserBudget(optimizeParserBudget: boolean): WebAttribute;
    /**
     * Sets whether to follow the system font weight.
     *
     * @param { boolean } follow The value true means to follow the system font weight, and false means the opposite.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18
     */
    enableFollowSystemFontWeight(follow: boolean): WebAttribute;
    /**
     * Sets whether to enable AVSession for web pages.
     *
     * @param { boolean } enabled Whether to enable AVSession. The value true means to enable AVSession, and false means the opposite.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 18
     */
    enableWebAVSession(enabled: boolean): WebAttribute;
    /**
     * Injects the JavaScripts that will be run just after document object has been created.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    runJavaScriptOnDocumentStart(scripts: Array<ScriptItem>): WebAttribute;
    /**
     * Injects the JavaScripts that will be run after document has been parsed finished.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    runJavaScriptOnDocumentEnd(scripts: Array<ScriptItem>): WebAttribute;
    /**
     * Injects the JavaScripts that will be run after head element has been parsed finished.
     *
     * @param { Array<ScriptItem> } scripts - The JavaScripts executed in array order.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 15
     */
    runJavaScriptOnHeadEnd(scripts: Array<ScriptItem>): WebAttribute;
    /**
     * Sets the embed options, only valid when enableNativeEmbedMode is true.
     *
     * @param { EmbedOptions } options The embed options, which can be {@link EmbedOptions}.
     * @returns { WebAttribute }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 16
     */
    nativeEmbedOptions(options?: EmbedOptions): WebAttribute;
}
/**
 * Defines Web Component.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 8
 */
/**
 * Defines Web Component.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @since 10
 */
/**
 * Defines Web Component.
 *
 * <p><strong>API Note</strong>:
 *
 * <strong>Performance Note</strong>:
 * <p>For details about how to optimize the compilation, resource loading, and JSBridge performance,
 * see [Optimizing Web Page Loading]{@link https://developer.huawei.com/consumer/en/doc/best-practices/bpta-web-develop-optimization}
 * <p>When the white screen duration is long due to complex web page parsing,
 * you can enable [optimizeParserBudget]{@link WebAttribute.optimizeParserBudget} to reduce the first frame rendering content.</p>
 * </p>
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @crossplatform
 * @atomicservice
 * @since 11
 */
declare const Web: WebInterface;
/**
 * Defines Web Component instance.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @since 8
 */
/**
 * Defines Web Component instance.
 *
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 11
 */
declare const WebInstance: WebAttribute;
/**
 * Defines the ssl error event.
 *
 * @typedef SslErrorEvent
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 */
declare interface SslErrorEvent {
    /**
     * Notifies the user of the operation behavior of the web component.
     *
     * @type { SslErrorHandler }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    handler: SslErrorHandler;
    /**
     * Error codes.
     *
     * @type { SslError }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    error: SslError;
    /**
     * Request url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    url: string;
    /**
     * Original url.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    originalUrl: string;
    /**
     * Referrer.
     *
     * @type { string }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    referrer: string;
    /**
     * Whether the error is fatal.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isFatalError: boolean;
    /**
     * Whether the request is main frame.
     *
     * @type { boolean }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     */
    isMainFrame: boolean;
}
/**
 * Defines the menu item option.
 *
 * @interface ExpandedMenuItemOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @atomicservice
 * @since 12
 * @deprecated since 20
 */
declare interface ExpandedMenuItemOptions {
    /**
     * Customize what the menu displays.
     *
     * @type { ResourceStr }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     * @deprecated since 20
     */
    content: ResourceStr;
    /**
     * Customize the icon before the menu displays content.
     *
     * @type { ?ResourceStr }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     * @deprecated since 20
     */
    startIcon?: ResourceStr;
    /**
     * Get the selected text information.
     *
     * @type { function }
     * @syscap SystemCapability.Web.Webview.Core
     * @atomicservice
     * @since 12
     * @deprecated since 20
     */
    action: (selectedText: {
        plainText: string;
    }) => void;
}
/**
 * Define nested scroll options
 *
 * @interface NestedScrollOptionsExt
 * @syscap SystemCapability.Web.Webview.Core
 * @since 14
 */
declare interface NestedScrollOptionsExt {
    /**
     * Set NestedScrollMode when the scrollable component scrolls up
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    scrollUp?: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls down
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    scrollDown?: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls right
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    scrollRight?: NestedScrollMode;
    /**
     * Set NestedScrollMode when the scrollable component scrolls left
     *
     * @type { ?NestedScrollMode }
     * @syscap SystemCapability.Web.Webview.Core
     * @since 14
     */
    scrollLeft?: NestedScrollMode;
}
/**
 * Defines the Embed Options.
 *
 * @typedef EmbedOptions
 * @syscap SystemCapability.Web.Webview.Core
 * @since 16
 */
declare interface EmbedOptions {
    /**
     * Whether the embed element support the default intrinsic size of 300 * 150, expressed in CSS pixels.
     * <br>When CSS size is set, the embed element size is CSS size, otherwise it is intrinsic size.
     * <br>If true, then the intrinsic size is 300 * 150.
     * <br>If false, the embed element will not be rendered when the CSS size is not set.
     *
     * @type { ?boolean }
     * @default false
     * @syscap SystemCapability.Web.Webview.Core
     * @since 16
     */
    supportDefaultIntrinsicSize?: boolean;
}
