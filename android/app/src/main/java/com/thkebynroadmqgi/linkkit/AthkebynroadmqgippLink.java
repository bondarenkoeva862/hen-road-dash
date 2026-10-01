package com.thkebynroadmqgi.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class AthkebynroadmqgippLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public AthkebynroadmqgippLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {
    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getSthkebynroadmqgiourceUrl() {
    return sourceUrl;
  }

  public List<Target> getTthkebynroadmqgiargets() {
    return Collections.unmodifiableList(targets);
  }

  public Uri getWthkebynroadmqgiebUrl() {
    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {
      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String getPacthkebynroadmqgikageName() {
      return packageName;
    }

    public String getCthkebynroadmqgilassName() {
      return className;
    }

    public Uri getUthkebynroadmqgirl() {
      return url;
    }

    public String getAthkebynroadmqgippName() {
      return appName;
    }
  }
}
