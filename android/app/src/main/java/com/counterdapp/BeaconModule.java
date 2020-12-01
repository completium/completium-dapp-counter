// BeaconModule.java

package com.counterdapp;

/* import android.widget.Toast;
 */
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

import java.util.Map;
import java.util.HashMap;

public class BeaconModule extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  @Override
  public String getName() {
    return "BeaconModule";
  }

  BeaconModule(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @ReactMethod
  public void divide(
      Double v1,
      Double v2,
      Callback errorCallback,
      Callback successCallback) {
    try {
      successCallback.invoke(v1 / v2);
    } catch (ArithmeticException e) {
      errorCallback.invoke(e.getMessage());
    }
  }


}