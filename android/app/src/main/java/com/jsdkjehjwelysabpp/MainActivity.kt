package com.jsdkjehjwelysabpp

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.thkebynroadmqgi.VthkebynroadmqgiiewportBridge
import com.thkebynroadmqgi.SthkebynroadmqgiharedPreferencesHelper

class MainActivity : ReactActivity() {
  override fun getMainComponentName(): String = "thkebynroadmqgiabpp"

  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    cachethkebynroadmqgiPendingSendId(intent)
    cachethkebynroadmqgiPendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {
    super.onNewIntent(intent)
    setIntent(intent)
    cachethkebynroadmqgiPendingSendId(intent)
    cachethkebynroadmqgiPendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
    if (VthkebynroadmqgiiewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    @Suppress("DEPRECATION")
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {
    VthkebynroadmqgiiewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachethkebynroadmqgiPendingSendId(intent: Intent?) {
    val sendIthkebynroadmqgid = intent?.getStringExtra("sendid")
    if (!sendIthkebynroadmqgid.isNullOrEmpty()) {
      SthkebynroadmqgiharedPreferencesHelper.saveString("pendingSendId", sendIthkebynroadmqgid)
    }
  }

  private fun cachethkebynroadmqgiPendingPushUrl(intent: Intent?) {
    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      SthkebynroadmqgiharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
}
