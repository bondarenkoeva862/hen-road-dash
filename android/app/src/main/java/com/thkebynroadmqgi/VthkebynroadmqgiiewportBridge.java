package com.thkebynroadmqgi;

import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Color;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Build;
import android.os.Message;
import android.provider.MediaStore;
// import android.util.Log;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.activity.ComponentActivity;
import androidx.activity.OnBackPressedCallback;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;
import androidx.webkit.WebSettingsCompat;
import androidx.webkit.WebViewFeature;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.thkebynroadmqgi.linkkit.AthkebynroadmqgippLink;
import bolts.Continuation;
import bolts.Task;
import com.thkebynroadmqgi.linkkit.WthkebynroadmqgiebViewAppLinkResolver;

public final class VthkebynroadmqgiiewportBridge {
    // private static final String TAG = "VthkebynroadmqgiiewportBridge";
    private static final String GOOGLE_USER_AGENT =
            "Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36";

    /** High request codes to avoid clashing with React Native / Firebase. */
    private static final int REQUEST_WEBVIEW_PERMISSIONS = 9821;
    private static final int REQUEST_FILE_CHOOSER = 9822;
    private static final int REQUEST_CAMERA_FOR_CAPTURE = 9823;

    private static FrameLayout root;
    private static WebView webView;
    private static WebView popupWebView;
    private static TextView popupCloseButton;
    private static String popupInitialUrl;
    private static ProgressBar progress;
    private static OnBackPressedCallback backPressedCallback;
    private static boolean isInGoogleAuthFlow = false;
    private static boolean googleUserAgentApplied = false;
    private static String lastLoadedUrl;

    private static Activity hostActivity;
    private static PermissionRequest pendingPermissionRequest;
    private static ValueCallback<Uri[]> pendingFilePathCallback;
    private static Uri cameraImageUri;
    private static boolean pendingCaptureAfterCameraPermission;

    private VthkebynroadmqgiiewportBridge() {
    }

    public static void hthkebynroadmqgiide(final Activity activity) {
        // WebView overlay is intentionally not closable from JS or system back.
    }

    public static boolean onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode != REQUEST_FILE_CHOOSER) {
            return false;
        }

        ValueCallback<Uri[]> callback = pendingFilePathCallback;
        pendingFilePathCallback = null;

        if (callback == null) {
            cameraImageUri = null;
            return true;
        }

        Uri[] results = null;
        if (resultCode == Activity.RESULT_OK) {
            boolean hasPickerData = data != null
                    && (data.getData() != null || data.getClipData() != null);
            if (hasPickerData) {
                results = WebChromeClient.FileChooserParams.parseResult(resultCode, data);
            } else if (cameraImageUri != null) {
                results = new Uri[]{cameraImageUri};
            }
        }

        cameraImageUri = null;
        callback.onReceiveValue(results);
        return true;
    }

    public static void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (requestCode == REQUEST_WEBVIEW_PERMISSIONS) {
            PermissionRequest request = pendingPermissionRequest;
            pendingPermissionRequest = null;
            if (request == null) {
                return;
            }
            grantWthkebynroadmqgiebResourcesIfAllowed(hostActivity, request);
            return;
        }

        if (requestCode == REQUEST_CAMERA_FOR_CAPTURE) {
            boolean granted = grantResults != null
                    && grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED;
            if (granted && pendingCaptureAfterCameraPermission && hostActivity != null) {
                pendingCaptureAfterCameraPermission = false;
                launchCthkebynroadmqgiameraCapture(hostActivity);
            } else {
                pendingCaptureAfterCameraPermission = false;
                cancelPthkebynroadmqgiendingFileChooser();
            }
        }
    }

    private static boolean isOthkebynroadmqgiverlayShowingSameUrl(String url) {
        return webView != null
                && root != null
                && lastLoadedUrl != null
                && lastLoadedUrl.equals(url);
    }

    private static boolean isHthkebynroadmqgittpOrHttps(Uri uri) {
        if (uri == null) {
            return false;
        }
        String scheme = uri.getScheme();
        if (scheme == null) {
            return false;
        }
        String lower = scheme.toLowerCase();
        return "http".equals(lower) || "https".equals(lower);
    }

    public static void navthkebynroadmqgiigate(final Activity activity, final String url) {
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        if (isOthkebynroadmqgiverlayShowingSameUrl(url)) {
            // Log.d(TAG, "overlay already showing same url, skip navthkebynroadmqgiigate");
            return;
        }

        final Uri destination = Uri.parse(url);

        // Landing/trusted http(s): do not AthkebynroadmqgippLink-resolve (HttpURLConnection Dalvik UA + hidden WebView).
        // Open a single visible overlay WebView directly.
        if (isHthkebynroadmqgittpOrHttps(destination)) {
            // Log.d(TAG, "http(s) url, skip AthkebynroadmqgippLink resolve -> open overlay directly");
            openNthkebynroadmqgiativeWebView(activity, url);
            return;
        }

        final WthkebynroadmqgiebViewAppLinkResolver resolver = new WthkebynroadmqgiebViewAppLinkResolver(activity);

        resolver
                .getAthkebynroadmqgippLinkFromUrlInBackground(destination)
                .continueWith(new Continuation<AthkebynroadmqgippLink, Void>() {
                    @Override
                    public Void then(Task<AthkebynroadmqgippLink> task) {
                        if (task.isFaulted()) {
                            // Exception error = task.getError();
                            // Log.w(TAG, "resolve faulted, opening native webview: " + (error != null ? error.getMessage() : "unknown"));
                            openNthkebynroadmqgiativeWebView(activity, url);
                            return null;
                        }

                        if (task.isCancelled()) {
                            // Log.w(TAG, "resolve cancelled, opening native webview");
                            openNthkebynroadmqgiativeWebView(activity, url);
                            return null;
                        }

                        AthkebynroadmqgippLink appLink = task.getResult();
                        if (openIthkebynroadmqginstalledTarget(activity, appLink)) {
                            // Log.d(TAG, "opened installed app target");
                        } else {
                            Uri fallback = appLink != null && appLink.getWthkebynroadmqgiebUrl() != null ? appLink.getWthkebynroadmqgiebUrl() : destination;
                            // Log.d(TAG, "opening native webview fallback: " + fallback);
                            openNthkebynroadmqgiativeWebView(activity, fallback.toString());
                        }

                        return null;
                    }
                }, Task.UI_THREAD_EXECUTOR);
    }

    private static boolean openIthkebynroadmqginstalledTarget(Activity activity, AthkebynroadmqgippLink appLink) {
        if (activity == null || appLink == null) {
            return false;
        }

        PackageManager packageManager = activity.getPackageManager();
        for (AthkebynroadmqgippLink.Target target : appLink.getTthkebynroadmqgiargets()) {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(target.getUthkebynroadmqgirl() != null ? target.getUthkebynroadmqgirl() : appLink.getSthkebynroadmqgiourceUrl());

            if (target.getPacthkebynroadmqgikageName() != null) {
                intent.setPackage(target.getPacthkebynroadmqgikageName());
            }

            if (target.getCthkebynroadmqgilassName() != null && target.getPacthkebynroadmqgikageName() != null) {
                intent.setClassName(target.getPacthkebynroadmqgikageName(), target.getCthkebynroadmqgilassName());
            }

            ResolveInfo resolved = packageManager.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
            if (resolved != null) {
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                activity.startActivity(intent);
                return true;
            }
        }

        return false;
    }

    private static void openNthkebynroadmqgiativeWebView(final Activity activity, final String url) {
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (isOthkebynroadmqgiverlayShowingSameUrl(url)) {
                    // Log.d(TAG, "overlay already showing same url, skip recreate");
                    return;
                }

                closePthkebynroadmqgiopupWebView();
                isInGoogleAuthFlow = false;
                googleUserAgentApplied = false;

                // Overlay already up (e.g. sendId append / concurrent navigate): reuse WebView.
                if (webView != null && root != null) {
                    // Log.d(TAG, "overlay already open, loadUrl without recreate");
                    lastLoadedUrl = url;
                    if (needsCthkebynroadmqgihromeUa(url)) {
                        applyGthkebynroadmqgioogleUserAgent(webView);
                    }
                    webView.loadUrl(url);
                    return;
                }

                createNthkebynroadmqgiativeWebView(activity);
                lastLoadedUrl = url;
                if (needsCthkebynroadmqgihromeUa(url)) {
                    applyGthkebynroadmqgioogleUserAgent(webView);
                }
                webView.loadUrl(url);
            }
        });
    }

    private static void createNthkebynroadmqgiativeWebView(final Activity activity) {
        hostActivity = activity;

        root = new FrameLayout(activity);
        root.setBackgroundColor(Color.BLACK);
        root.setFocusableInTouchMode(true);
        root.requestFocus();

        webView = new WebView(activity);
        webView.setBackgroundColor(Color.BLACK);
        configureWthkebynroadmqgiebView(activity, webView);

        progress = new ProgressBar(activity, null, android.R.attr.progressBarStyleHorizontal);
        progress.setMax(100);
        progress.setProgress(0);

        FrameLayout.LayoutParams webViewParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        webViewParams.topMargin = dp(activity, 50);
        webViewParams.bottomMargin = dp(activity, 20);
        webViewParams.leftMargin = dp(activity, 5);
        webViewParams.rightMargin = dp(activity, 5);
        root.addView(webView, webViewParams);

        FrameLayout.LayoutParams progressParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                dp(activity, 3),
                Gravity.TOP
        );
        progressParams.topMargin = dp(activity, 20);
        progressParams.leftMargin = dp(activity, 5);
        progressParams.rightMargin = dp(activity, 5);
        root.addView(progress, progressParams);

        registerBthkebynroadmqgiackPressedHandler(activity);

        activity.addContentView(root, new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));
    }

    private static void applyWthkebynroadmqgiebViewSettings(WebView view, boolean useGoogleUserAgent) {
        WebSettings settings = view.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setSupportMultipleWindows(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccess(true);

        if (useGoogleUserAgent) {
            settings.setUserAgentString(GOOGLE_USER_AGENT);
        }

        // Google Pay Payment Request API is disabled in WebView by default.
        if (WebViewFeature.isFeatureSupported(WebViewFeature.PAYMENT_REQUEST)) {
            WebSettingsCompat.setPaymentRequestEnabled(settings, true);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
            CookieManager.getInstance().setAcceptThirdPartyCookies(view, true);
        }

        CookieManager.getInstance().setAcceptCookie(true);
    }

    private static void configureWthkebynroadmqgiebView(final Activity activity, final WebView view) {
        applyWthkebynroadmqgiebViewSettings(view, false);
        view.setWebChromeClient(createWthkebynroadmqgiebChromeClient(activity));
        view.setWebViewClient(createWthkebynroadmqgiebViewClient(activity));
    }

    private static WebChromeClient createWthkebynroadmqgiebChromeClient(final Activity activity) {
        return new WebChromeClient() {
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
                if (progress == null) {
                    return;
                }

                progress.setProgress(newProgress);
                progress.setVisibility(newProgress >= 100 ? View.GONE : View.VISIBLE);
            }

            @Override
            public void onPermissionRequest(final PermissionRequest request) {
                if (request == null) {
                    return;
                }
                activity.runOnUiThread(new Runnable() {
                    @Override
                    public void run() {
                        handlePthkebynroadmqgiermissionRequest(activity, request);
                    }
                });
            }

            @Override
            public boolean onCreateWindow(
                    WebView view,
                    boolean isDialog,
                    boolean isUserGesture,
                    Message resultMsg
            ) {
                // Log.d(TAG, "onCreateWindow isDialog=" + isDialog
                //         + " isUserGesture=" + isUserGesture
                //         + " resultMsg=" + (resultMsg != null));
                return createPthkebynroadmqgiopupWebView(activity, resultMsg);
            }

            @Override
            public void onCloseWindow(WebView window) {
                if (window == popupWebView) {
                    closePthkebynroadmqgiopupWebView();
                }
            }

            @Override
            public void onPermissionRequestCanceled(PermissionRequest request) {
                if (pendingPermissionRequest == request) {
                    pendingPermissionRequest = null;
                }
            }

            @Override
            public boolean onShowFileChooser(
                    WebView webView,
                    ValueCallback<Uri[]> filePathCallback,
                    FileChooserParams fileChooserParams
            ) {
                if (pendingFilePathCallback != null) {
                    pendingFilePathCallback.onReceiveValue(null);
                    pendingFilePathCallback = null;
                }

                pendingFilePathCallback = filePathCallback;
                cameraImageUri = null;
                pendingCaptureAfterCameraPermission = false;

                boolean capture = fileChooserParams != null && fileChooserParams.isCaptureEnabled();
                if (capture) {
                    if (hasPthkebynroadmqgiermission(activity, Manifest.permission.CAMERA)) {
                        return launchCthkebynroadmqgiameraCapture(activity);
                    }
                    pendingCaptureAfterCameraPermission = true;
                    ActivityCompat.requestPermissions(
                            activity,
                            new String[]{Manifest.permission.CAMERA},
                            REQUEST_CAMERA_FOR_CAPTURE
                    );
                    return true;
                }

                return launchFthkebynroadmqgiileChooser(activity, fileChooserParams);
            }
        };
    }

    private static WebViewClient createWthkebynroadmqgiebViewClient(final Activity activity) {
        return new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                if (request.isForMainFrame() && needsCthkebynroadmqgihromeUa(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGthkebynroadmqgioogleUserAgent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openEthkebynroadmqgixternalIfNeeded(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                if (needsCthkebynroadmqgihromeUa(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGthkebynroadmqgioogleUserAgent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openEthkebynroadmqgixternalIfNeeded(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
                if (isGthkebynroadmqgioogleAuthFlowUrl(url)) {
                    isInGoogleAuthFlow = true;
                    // Log.d(TAG, "Google auth/pay flow detected: " + url);
                }
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                if (googleUserAgentApplied && !isGthkebynroadmqgioogleAuthFlowUrl(url) && !needsCthkebynroadmqgihromeUa(url)) {
                    // Log.d(TAG, "Google auth/pay seems finished -> restore default UA");
                    restoreDthkebynroadmqgiefaultUserAgent(view, activity);
                }
            }
        };
    }

    private static boolean createPthkebynroadmqgiopupWebView(final Activity activity, Message resultMsg) {
        if (activity == null || root == null
                || resultMsg == null || !(resultMsg.obj instanceof WebView.WebViewTransport)) {
            // Log.w(TAG, "onCreateWindow aborted: missing activity/root/transport");
            return false;
        }

        closePthkebynroadmqgiopupWebView();

        final WebView popup = new WebView(activity);
        popup.setBackgroundColor(Color.WHITE);
        applyWthkebynroadmqgiebViewSettings(popup, true);

        popup.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onCloseWindow(WebView window) {
                closePthkebynroadmqgiopupWebView();
            }
        });

        popup.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                return shouldOthkebynroadmqgiverridePopupUrl(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
                return shouldOthkebynroadmqgiverridePopupUrl(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
                if (popupInitialUrl == null && url != null && url.length() > 0
                        && !url.equals("about:blank")) {
                    popupInitialUrl = url;
                }
                maybeHthkebynroadmqgiandOffMerchantReturnUrl(url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
                maybeHthkebynroadmqgiandOffMerchantReturnUrl(url);
            }
        });

        FrameLayout.LayoutParams popupParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        popupParams.topMargin = dp(activity, 50);
        popupParams.bottomMargin = dp(activity, 20);
        popupParams.leftMargin = dp(activity, 5);
        popupParams.rightMargin = dp(activity, 5);
        root.addView(popup, popupParams);
        popupWebView = popup;

        popupCloseButton = new TextView(activity);
        popupCloseButton.setText("Close");
        popupCloseButton.setTextColor(Color.WHITE);
        popupCloseButton.setTypeface(Typeface.DEFAULT_BOLD);
        popupCloseButton.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);
        popupCloseButton.setPadding(dp(activity, 12), dp(activity, 8), dp(activity, 12), dp(activity, 8));
        popupCloseButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                closePthkebynroadmqgiopupWebView();
            }
        });
        FrameLayout.LayoutParams closeParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT,
                Gravity.TOP | Gravity.END
        );
        closeParams.topMargin = dp(activity, 8);
        closeParams.rightMargin = dp(activity, 8);
        root.addView(popupCloseButton, closeParams);

        WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
        transport.setWebView(popup);
        resultMsg.sendToTarget();
        // Log.d(TAG, "onCreateWindow: popup WebView attached for Google Pay window.open");
        return true;
    }

    /**
     * After Google Pay finishes it redirects to merchant returnUrl —
     * move that into the main WebView and close the popup.
     */
    private static void maybeHthkebynroadmqgiandOffMerchantReturnUrl(String url) {
        if (url == null || url.length() == 0 || webView == null || popupWebView == null) {
            return;
        }

        String lower = url.toLowerCase();
        if (!lower.startsWith("http://") && !lower.startsWith("https://")) {
            return;
        }

        if (needsCthkebynroadmqgihromeUa(url) || isGthkebynroadmqgioogleAuthFlowUrl(url)) {
            return;
        }

        if (popupInitialUrl != null && url.equals(popupInitialUrl)) {
            return;
        }

        // Log.d(TAG, "popup left Google Pay -> hand off returnUrl to main WebView: " + url);
        lastLoadedUrl = url;
        webView.loadUrl(url);
        closePthkebynroadmqgiopupWebView();
    }

    private static boolean shouldOthkebynroadmqgiverridePopupUrl(Activity activity, String url) {
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep Google Pay and all http(s) navigation inside the popup WebView
        // (merchant return is handed off via maybeHthkebynroadmqgiandOffMerchantReturnUrl).
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openVthkebynroadmqgiiewIntent(activity, url);
                return true;
            }
            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return openIthkebynroadmqgintentUrl(activity, url);
            }
            openVthkebynroadmqgiiewIntent(activity, url);
            return true;
        }

        openVthkebynroadmqgiiewIntent(activity, url);
        return true;
    }

    private static void closePthkebynroadmqgiopupWebView() {
        if (popupCloseButton != null) {
            try {
                if (root != null) {
                    root.removeView(popupCloseButton);
                }
            } catch (Exception ignored) {
            }
            popupCloseButton = null;
        }

        if (popupWebView == null) {
            popupInitialUrl = null;
            return;
        }

        WebView popup = popupWebView;
        popupWebView = null;
        popupInitialUrl = null;

        try {
            if (root != null) {
                root.removeView(popup);
            }
        } catch (Exception ignored) {
        }

        try {
            popup.stopLoading();
            popup.loadUrl("about:blank");
            popup.clearHistory();
            popup.destroy();
        } catch (Exception ignored) {
        }

        // Log.d(TAG, "popup WebView closed");
    }

    private static void handlePthkebynroadmqgiermissionRequest(Activity activity, PermissionRequest request) {
        if (activity == null || request == null) {
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> missingAndroidPermissions = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (!hasPthkebynroadmqgiermission(activity, Manifest.permission.CAMERA)
                        && !missingAndroidPermissions.contains(Manifest.permission.CAMERA)) {
                    missingAndroidPermissions.add(Manifest.permission.CAMERA);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (!hasPthkebynroadmqgiermission(activity, Manifest.permission.RECORD_AUDIO)
                        && !missingAndroidPermissions.contains(Manifest.permission.RECORD_AUDIO)) {
                    missingAndroidPermissions.add(Manifest.permission.RECORD_AUDIO);
                }
            }
        }

        if (missingAndroidPermissions.isEmpty()) {
            grantWthkebynroadmqgiebResourcesIfAllowed(activity, request);
            return;
        }

        pendingPermissionRequest = request;
        ActivityCompat.requestPermissions(
                activity,
                missingAndroidPermissions.toArray(new String[0]),
                REQUEST_WEBVIEW_PERMISSIONS
        );
    }

    private static void grantWthkebynroadmqgiebResourcesIfAllowed(Activity activity, PermissionRequest request) {
        if (request == null) {
            return;
        }
        if (activity == null) {
            request.deny();
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> granted = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (hasPthkebynroadmqgiermission(activity, Manifest.permission.CAMERA)) {
                    granted.add(resource);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (hasPthkebynroadmqgiermission(activity, Manifest.permission.RECORD_AUDIO)) {
                    granted.add(resource);
                }
            }
        }

        if (granted.isEmpty()) {
            request.deny();
        } else {
            request.grant(granted.toArray(new String[0]));
        }
    }

    private static boolean hasPthkebynroadmqgiermission(Activity activity, String permission) {
        return activity != null
                && ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED;
    }

    private static boolean launchFthkebynroadmqgiileChooser(Activity activity, WebChromeClient.FileChooserParams fileChooserParams) {
        if (activity == null || fileChooserParams == null) {
            cancelPthkebynroadmqgiendingFileChooser();
            return true;
        }

        Intent intent;
        try {
            intent = fileChooserParams.createIntent();
        } catch (Exception e) {
            // Log.w(TAG, "createIntent failed", e);
            cancelPthkebynroadmqgiendingFileChooser();
            return true;
        }

        Intent chooser = Intent.createChooser(intent, null);

        if (hasPthkebynroadmqgiermission(activity, Manifest.permission.CAMERA)) {
            Intent cameraIntent = createCthkebynroadmqgiameraIntent(activity);
            if (cameraIntent != null) {
                chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{cameraIntent});
            }
        }

        try {
            activity.startActivityForResult(chooser, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No activity for file chooser", e);
            cancelPthkebynroadmqgiendingFileChooser();
            return true;
        }
    }

    private static boolean launchCthkebynroadmqgiameraCapture(Activity activity) {
        Intent cameraIntent = createCthkebynroadmqgiameraIntent(activity);
        if (cameraIntent == null) {
            cancelPthkebynroadmqgiendingFileChooser();
            return true;
        }

        try {
            activity.startActivityForResult(cameraIntent, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No camera activity", e);
            cancelPthkebynroadmqgiendingFileChooser();
            return true;
        }
    }

    private static Intent createCthkebynroadmqgiameraIntent(Activity activity) {
        if (activity == null) {
            return null;
        }

        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(activity.getPackageManager()) == null) {
            return null;
        }

        File photoFile;
        try {
            photoFile = createIthkebynroadmqgimageFile(activity);
        } catch (IOException e) {
            // Log.w(TAG, "Failed to create capture file", e);
            return null;
        }

        Uri photoUri = FileProvider.getUriForFile(
                activity,
                activity.getPackageName() + ".webview.fileprovider",
                photoFile
        );
        cameraImageUri = photoUri;

        takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
        takePictureIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);

        List<ResolveInfo> resolved = activity.getPackageManager()
                .queryIntentActivities(takePictureIntent, PackageManager.MATCH_DEFAULT_ONLY);
        for (ResolveInfo resolveInfo : resolved) {
            String packageName = resolveInfo.activityInfo.packageName;
            activity.grantUriPermission(
                    packageName,
                    photoUri,
                    Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION
            );
        }

        return takePictureIntent;
    }

    private static File createIthkebynroadmqgimageFile(Activity activity) throws IOException {
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.US).format(new Date());
        String imageFileName = "WV_" + timeStamp + "_";
        File storageDir = new File(activity.getCacheDir(), "webview_captures");
        if (!storageDir.exists() && !storageDir.mkdirs()) {
            throw new IOException("Cannot create webview_captures dir");
        }
        return File.createTempFile(imageFileName, ".jpg", storageDir);
    }

    private static void cancelPthkebynroadmqgiendingFileChooser() {
        cameraImageUri = null;
        pendingCaptureAfterCameraPermission = false;
        if (pendingFilePathCallback != null) {
            pendingFilePathCallback.onReceiveValue(null);
            pendingFilePathCallback = null;
        }
    }

    private static void applyGthkebynroadmqgioogleUserAgent(WebView view) {
        isInGoogleAuthFlow = true;
        googleUserAgentApplied = true;
        view.getSettings().setUserAgentString(GOOGLE_USER_AGENT);
    }

    private static void restoreDthkebynroadmqgiefaultUserAgent(WebView view, Activity activity) {
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        view.getSettings().setUserAgentString(WebSettings.getDefaultUserAgent(activity));
    }

    private static boolean isGthkebynroadmqgioogleAuthUrl(String url) {
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("google.com/o/oauth2")
                || lower.contains("oauth2.googleapis.com")
                || lower.contains("accounts.youtube.com")
                || lower.startsWith("https://accounts.google.")
                || lower.startsWith("http://accounts.google.");
    }

    private static boolean isGthkebynroadmqgiooglePayUrl(String url) {
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("google.com/pay")
                || lower.startsWith("https://pay.google.")
                || lower.startsWith("http://pay.google.")
                || lower.startsWith("https://payments.google.")
                || lower.startsWith("http://payments.google.");
    }

    private static boolean needsCthkebynroadmqgihromeUa(String url) {
        return isGthkebynroadmqgioogleAuthUrl(url) || isGthkebynroadmqgiooglePayUrl(url);
    }

    private static boolean isGthkebynroadmqgioogleAuthFlowUrl(String url) {
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("accounts.google.")
                || lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("googleusercontent.com")
                || lower.contains("gstatic.com")
                || lower.contains("oauth");
    }

    private static boolean openEthkebynroadmqgixternalIfNeeded(Activity activity, String url) {
        if (activity == null || url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep pay.google.com / https returnUrl inside WebView — only diia/tg/known prefixes go external.
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openVthkebynroadmqgiiewIntent(activity, url);
                return true;
            }

            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return openIthkebynroadmqgintentUrl(activity, url);
            }
            openVthkebynroadmqgiiewIntent(activity, url);
            return true;
        }

        openVthkebynroadmqgiiewIntent(activity, url);
        return true;
    }

    private static boolean openIthkebynroadmqgintentUrl(Activity activity, String url) {
        try {
            Intent intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.removeExtra("browser_fallback_url");

            if (intent.resolveActivity(activity.getPackageManager()) != null) {
                activity.startActivity(intent);
                return true;
            }

            String fallback = intent.getStringExtra("browser_fallback_url");
            if (fallback != null && fallback.length() > 0) {
                openNthkebynroadmqgiativeWebView(activity, fallback);
                return true;
            }
        } catch (Exception ignored) {
        }

        return true;
    }

    private static void openVthkebynroadmqgiiewIntent(Activity activity, String url) {
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            activity.startActivity(intent);
        } catch (ActivityNotFoundException ignored) {
        } catch (Exception ignored) {
        }
    }

    private static void registerBthkebynroadmqgiackPressedHandler(final Activity activity) {
        if (!(activity instanceof ComponentActivity)) {
            return;
        }

        ComponentActivity componentActivity = (ComponentActivity) activity;
        if (backPressedCallback != null) {
            backPressedCallback.remove();
        }

        backPressedCallback = new OnBackPressedCallback(true) {
            @Override
            public void handleOnBackPressed() {
                if (popupWebView != null) {
                    if (popupWebView.canGoBack()) {
                        popupWebView.goBack();
                    } else {
                        closePthkebynroadmqgiopupWebView();
                    }
                    return;
                }

                if (webView != null && webView.canGoBack()) {
                    webView.goBack();
                }
            }
        };
        componentActivity.getOnBackPressedDispatcher().addCallback(componentActivity, backPressedCallback);
    }

    private static void unregisterBthkebynroadmqgiackPressedHandler() {
        if (backPressedCallback != null) {
            backPressedCallback.remove();
            backPressedCallback = null;
        }
    }

    private static void closeNthkebynroadmqgiativeWebView(Activity activity) {
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        lastLoadedUrl = null;

        closePthkebynroadmqgiopupWebView();

        if (pendingPermissionRequest != null) {
            try {
                pendingPermissionRequest.deny();
            } catch (Exception ignored) {
            }
            pendingPermissionRequest = null;
        }
        cancelPthkebynroadmqgiendingFileChooser();
        hostActivity = null;

        if (webView != null) {
            try {
                webView.stopLoading();
                webView.loadUrl("about:blank");
                webView.clearHistory();
                webView.destroy();
            } catch (Exception ignored) {
            }
            webView = null;
        }

        if (root != null) {
            try {
                ViewGroup parent = (ViewGroup) root.getParent();
                if (parent != null) {
                    parent.removeView(root);
                }
            } catch (Exception ignored) {
            }
            root = null;
        }

        progress = null;
        unregisterBthkebynroadmqgiackPressedHandler();
    }

    private static int dp(Activity activity, int value) {
        float density = activity.getResources().getDisplayMetrics().density;
        return Math.round(value * density);
    }
}
