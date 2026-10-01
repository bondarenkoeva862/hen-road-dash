package com.thkebynroadmqgi

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class VthkebynroadmqgiiewportReactModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "VthkebynroadmqgiiewportBannana"

    @ReactMethod
    fun navthkebynroadmqgiigate(url: String, promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity == null || url.isBlank()) {
                promise.resolve(false)
                return
            }

            VthkebynroadmqgiiewportBridge.navthkebynroadmqgiigate(activity, url)
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }

    @ReactMethod
    fun hthkebynroadmqgiide(promise: Promise) {
        try {
            val activity: Activity? = reactApplicationContext.currentActivity
            if (activity != null) {
                VthkebynroadmqgiiewportBridge.hthkebynroadmqgiide(activity)
            }
            promise.resolve(true)
        } catch (e: Exception) {
            promise.resolve(false)
        }
    }
}
