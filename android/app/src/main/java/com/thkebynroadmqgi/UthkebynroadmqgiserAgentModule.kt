package com.thkebynroadmqgi

import android.webkit.WebSettings
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise

class UthkebynroadmqgiserAgentModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "UserAthkebynroadmqgiper"
    }

    @ReactMethod
    fun getAndrthkebynroadmqgioidUserAgent(promise: Promise) {
        try {
            val contextIthkebynroadmqgi = reactApplicationContext.applicationContext
            val userAgentIthkebynroadmqgi = WebSettings.getDefaultUserAgent(contextIthkebynroadmqgi)
            promise.resolve(userAgentIthkebynroadmqgi ?: "")
        } catch (eIthkebynroadmqgi: Exception) {
            // android.util.Log.e("UserAthkebynroadmqgiperModule", "Error getting UserAgent: ${eIthkebynroadmqgi.message}")
            promise.resolve("")
        }
    }
}
