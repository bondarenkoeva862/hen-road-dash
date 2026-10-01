package com.thkebynroadmqgi;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class SthkebynroadmqgiharedPreferencesHelper {
    private static final String PREF_NAMEIthkebynroadmqgi = "thkebynroadmqgiStorage";
    private static Context applicthkebynroadmqgiationContext = null;

    public static void setApplicationContext(Context context) {
        applicthkebynroadmqgiationContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {
        try {
            if (applicthkebynroadmqgiationContext != null) {
                return applicthkebynroadmqgiationContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIthkebynroadmqgi = prefsIthkebynroadmqgi.edit();
                editorIthkebynroadmqgi.putString(key, value);
                editorIthkebynroadmqgi.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                String valueIthkebynroadmqgi = prefsIthkebynroadmqgi.getString(key, defaultValue);
                return valueIthkebynroadmqgi;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIthkebynroadmqgi = prefsIthkebynroadmqgi.edit();
                editorIthkebynroadmqgi.putInt(key, value);
                editorIthkebynroadmqgi.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                int valueIthkebynroadmqgi = prefsIthkebynroadmqgi.getInt(key, defaultValue);
                return valueIthkebynroadmqgi;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIthkebynroadmqgi = prefsIthkebynroadmqgi.edit();
                editorIthkebynroadmqgi.putBoolean(key, value);
                editorIthkebynroadmqgi.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                boolean valueIthkebynroadmqgi = prefsIthkebynroadmqgi.getBoolean(key, defaultValue);
                return valueIthkebynroadmqgi;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIthkebynroadmqgi = prefsIthkebynroadmqgi.edit();
                editorIthkebynroadmqgi.remove(key);
                editorIthkebynroadmqgi.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {
        Context contextIthkebynroadmqgi = getContext();
        if (contextIthkebynroadmqgi != null) {
            try {
                SharedPreferences prefsIthkebynroadmqgi = contextIthkebynroadmqgi.getSharedPreferences(PREF_NAMEIthkebynroadmqgi, Context.MODE_PRIVATE);
                SharedPreferences.Editor editorIthkebynroadmqgi = prefsIthkebynroadmqgi.edit();
                editorIthkebynroadmqgi.clear();
                editorIthkebynroadmqgi.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }
}
