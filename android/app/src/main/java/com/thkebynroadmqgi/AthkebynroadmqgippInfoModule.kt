package com.thkebynroadmqgi

import android.opengl.GLES20
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class AthkebynroadmqgippInfoModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AthkebynroadmqgippInfoModule"
    }

    @ReactMethod
    fun getPacthkebynroadmqgikageName(promise: Promise) {
        try {
            val packageNathkebynroadmqgime = reactApplicationContext.packageName
            promise.resolve(packageNathkebynroadmqgime ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AthkebynroadmqgippInfoHelper", "Error getting package name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getVethkebynroadmqgirsionCode(promise: Promise) {
        try {
            val packageIthkebynroadmqgifo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIthkebynroadmqgifo.versionCode)
        } catch (e: Exception) {
            // android.util.Log.e("AthkebynroadmqgippInfoHelper", "Error getting version code: ${e.message}")
            promise.resolve(0)
        }
    }

    @ReactMethod
    fun getVethkebynroadmqgirsionName(promise: Promise) {
        try {
            val packageIthkebynroadmqgifo = reactApplicationContext.packageManager
                .getPackageInfo(reactApplicationContext.packageName, 0)
            promise.resolve(packageIthkebynroadmqgifo.versionName ?: "")
        } catch (e: Exception) {
            // android.util.Log.e("AthkebynroadmqgippInfoHelper", "Error getting version name: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getGlRenderer(promise: Promise) {
        try {
            promise.resolve(readGlRendererString())
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingSenthkebynroadmqgidId(promise: Promise) {
        try {
            var sendIthkebynroadmqgid = ""
            val activityIthkebynroadmqgi = reactApplicationContext.currentActivity
            val intentIthkebynroadmqgi = activityIthkebynroadmqgi?.intent
            val intentSendIthkebynroadmqgid = intentIthkebynroadmqgi?.getStringExtra("sendid")

            if (!intentSendIthkebynroadmqgid.isNullOrBlank()) {
                sendIthkebynroadmqgid = intentSendIthkebynroadmqgid
                intentIthkebynroadmqgi?.removeExtra("sendid")
            } else {
                val storedIthkebynroadmqgi = SthkebynroadmqgiharedPreferencesHelper.loadString("pendingSendId", "")
                if (!storedIthkebynroadmqgi.isNullOrBlank()) {
                    sendIthkebynroadmqgid = storedIthkebynroadmqgi
                }
            }

            if (sendIthkebynroadmqgid.isNotEmpty()) {
                SthkebynroadmqgiharedPreferencesHelper.removeKey("pendingSendId")
            }
            promise.resolve(sendIthkebynroadmqgid)
        } catch (e: Exception) {
            // android.util.Log.e("AthkebynroadmqgippInfoHelper", "Error getting pending sendIthkebynroadmqgidId: ${e.message}")
            promise.resolve("")
        }
    }

    @ReactMethod
    fun getAndClearPendingPushUrl(promise: Promise) {
        try {
            var pushUrl = ""
            val activityIthkebynroadmqgi = reactApplicationContext.currentActivity
            val intentIthkebynroadmqgi = activityIthkebynroadmqgi?.intent
            val intentPushUrl = intentIthkebynroadmqgi?.getStringExtra("url")

            if (!intentPushUrl.isNullOrBlank()) {
                pushUrl = intentPushUrl
                intentIthkebynroadmqgi?.removeExtra("url")
            } else {
                val storedIthkebynroadmqgi = SthkebynroadmqgiharedPreferencesHelper.loadString("pendingPushUrl", "")
                if (!storedIthkebynroadmqgi.isNullOrBlank()) {
                    pushUrl = storedIthkebynroadmqgi
                }
            }

            if (pushUrl.isNotEmpty()) {
                SthkebynroadmqgiharedPreferencesHelper.removeKey("pendingPushUrl")
            }
            promise.resolve(pushUrl)
        } catch (e: Exception) {
            promise.resolve("")
        }
    }

    fun readGlRendererString(): String {
    val egl = EGLContext.getEGL() as EGL10
    val display = egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY)
    if (display === EGL10.EGL_NO_DISPLAY) {
    return ""
    }

    val version = IntArray(2)
    if (!egl.eglInitialize(display, version)) {
    return ""
    }

    val attribList = intArrayOf(
    EGL10.EGL_RED_SIZE, 8,
    EGL10.EGL_GREEN_SIZE, 8,
    EGL10.EGL_BLUE_SIZE, 8,
    EGL10.EGL_ALPHA_SIZE, 8,
    EGL10.EGL_RENDERABLE_TYPE, 4,
    EGL10.EGL_NONE,
    )
    val configs = arrayOfNulls<EGLConfig>(1)
    val numConfigs = IntArray(1)
    if (!egl.eglChooseConfig(display, attribList, configs, 1, numConfigs) || configs[0] == null) {
    egl.eglTerminate(display)
    return ""
    }

    val contextAttribs = intArrayOf(0x3098, 2, EGL10.EGL_NONE)
    val context = egl.eglCreateContext(
    display,
    configs[0],
    EGL10.EGL_NO_CONTEXT,
    contextAttribs,
    )
    if (context === EGL10.EGL_NO_CONTEXT) {
    egl.eglTerminate(display)
    return ""
    }

    val surfaceAttribs = intArrayOf(EGL10.EGL_WIDTH, 1, EGL10.EGL_HEIGHT, 1, EGL10.EGL_NONE)
    val surface = egl.eglCreatePbufferSurface(display, configs[0], surfaceAttribs)
    if (surface === EGL10.EGL_NO_SURFACE) {
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    return ""
    }

    var renderer = ""
    try {
    if (egl.eglMakeCurrent(display, surface, surface, context)) {
    renderer = GLES20.glGetString(GLES20.GL_RENDERER) ?: ""
    }
    } finally {
    egl.eglMakeCurrent(
    display,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_CONTEXT,
    )
    egl.eglDestroySurface(display, surface)
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    }

    return renderer
    }
}
