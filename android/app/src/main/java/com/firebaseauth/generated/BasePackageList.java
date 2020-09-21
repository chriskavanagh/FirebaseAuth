package com.firebaseauth.generated;

import java.util.Arrays;
import java.util.List;
import org.unimodules.core.interfaces.Package;

public class BasePackageList {
  public List<Package> getPackageList() {
    return Arrays.<Package>asList(
        new expo.modules.constants.ConstantsPackage(),
        new expo.modules.crypto.CryptoPackage(),
        new expo.modules.errorrecovery.ErrorRecoveryPackage(),
        new expo.modules.filesystem.FileSystemPackage(),
        new expo.modules.font.FontLoaderPackage(),
        new expo.modules.imageloader.ImageLoaderPackage(),
        new expo.modules.keepawake.KeepAwakePackage(),
        new expo.modules.lineargradient.LinearGradientPackage(),
        new expo.modules.location.LocationPackage(),
        new expo.modules.payments.stripe.StripePackage(),
        new expo.modules.permissions.PermissionsPackage(),
        new expo.modules.random.RandomPackage(),
        new expo.modules.splashscreen.SplashScreenPackage(),
        new expo.modules.sqlite.SQLitePackage(),
        new expo.modules.updates.UpdatesPackage(),
        new expo.modules.webbrowser.WebBrowserPackage()
    );
  }
}
