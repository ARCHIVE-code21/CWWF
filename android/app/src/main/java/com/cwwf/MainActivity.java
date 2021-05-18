package com.cwwf;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.google.android.gms.tasks.Task;
import com.google.firebase.messaging.FirebaseMessaging;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

import expo.modules.splashscreen.SplashScreenImageResizeMode;
import expo.modules.splashscreen.singletons.SplashScreen;

public class MainActivity extends ReactActivity {

    // Added automatically by Expo Config
    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);
        Intent intent = new Intent("onConfigurationChanged");
        intent.putExtra("newConfig", newConfig);
        sendBroadcast(intent);
    }

    final String TAG = getClass().getSimpleName();

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(null);
    // SplashScreen.show(...) has to be called after super.onCreate(...)
    // Below line is handled by '@expo/configure-splash-screen' command and it's discouraged to modify it manually
    SplashScreen.show(this, SplashScreenImageResizeMode.CONTAIN, ReactRootView.class, false);

    System.out.println("devie token : "+  FirebaseMessaging.getInstance().getToken());



      // Get new Instance ID token
      Task<String> token = FirebaseMessaging.getInstance().getToken();

      // Log and toast
      String msg = getString(R.string.msg_token_fmt, token);
      Log.d(TAG, msg);
      Toast.makeText(MainActivity.this, msg, Toast.LENGTH_SHORT).show();

  }


    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "main";
    }

    @Override
    protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
}
