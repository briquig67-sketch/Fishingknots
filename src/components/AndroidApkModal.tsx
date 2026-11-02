import React from 'react';
import { X, Smartphone, WifiOff, Download, CheckCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface AndroidApkModalProps {
  onClose: () => void;
  isInstallable: boolean;
  onInstall: () => void;
}

export const AndroidApkModal: React.FC<AndroidApkModalProps> = ({
  onClose,
  isInstallable,
  onInstall,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-start justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#091124] border border-slate-700 shadow-2xl overflow-hidden my-4 sm:my-8 flex flex-col text-slate-100">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#0a1530] border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <Smartphone className="w-5 h-5 text-teal-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">
              Android Standalone & APK Packaging
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 space-y-6 text-sm text-slate-200 overflow-y-auto">
          {/* Offline & Airplane Mode Ready */}
          <div className="bg-teal-950/40 rounded-xl p-4 border border-teal-500/40 space-y-2">
            <div className="flex items-center gap-2 text-teal-300 font-bold">
              <WifiOff className="w-5 h-5 text-teal-400" />
              <span>100% Offline & Airplane Mode Verified</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Every single diagram, tying instruction, and 2D vector animation in <strong>Fishing Knots Guide</strong> is bundled locally within the app. No internet connection, server, or external API is required—even in deep offshore waters or remote mountain streams.
            </p>
          </div>

          {/* Option 1: Instant Install on Android */}
          <div className="p-4 rounded-xl bg-[#0c1630] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 flex items-center justify-center font-bold text-xs">1</span>
                Instant Install as Standalone App (Recommended)
              </h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Android automatically generates an official <strong>WebAPK</strong> directly from this app's manifest and service worker. It creates a native Android home screen icon, runs full-screen without a browser address bar, and works completely offline.
            </p>
            {isInstallable && (
              <button
                onClick={onInstall}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 text-slate-950 font-bold text-xs sm:text-sm transition shadow-lg shadow-teal-500/20 active:scale-95"
              >
                <Download className="w-4 h-4" />
                Install Directly on this Device
              </button>
            )}
            {!isInstallable && (
              <div className="text-xs text-slate-400 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800">
                In Chrome on Android: Tap the <strong>⋮ (Menu)</strong> in top right &gt; tap <strong>"Add to Home Screen"</strong> or <strong>"Install App"</strong>.
              </div>
            )}
          </div>

          {/* Option 2: Build Native Signed Android APK */}
          <div className="p-4 rounded-xl bg-[#0c1630] border border-slate-800 space-y-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-slate-700 text-teal-300 flex items-center justify-center font-bold text-xs">2</span>
              Package into a Signed Android APK (.apk / .aab)
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              This application is pre-configured with a compliant PWA Manifest, high-resolution 192x192 &amp; 512x512 maskable icons, and a registered service worker. You can convert it into an Android APK in minutes using either of these official tools:
            </p>

            <div className="space-y-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <strong className="text-teal-300 block mb-1">Method A: PWABuilder (Zero Code)</strong>
                <p className="text-slate-300">
                  1. Visit <strong>pwabuilder.com</strong> in any browser.<br />
                  2. Enter the URL of this applet.<br />
                  3. Click <strong>"Package for Android"</strong> to download the ready-to-install signed <code>.apk</code> or Google Play <code>.aab</code> package.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                <strong className="text-teal-300 block mb-1">Method B: Google Bubblewrap CLI (TWA)</strong>
                <p className="text-slate-300">
                  Run in terminal: <code>npx @bubblewrap/cli init --manifest=&lt;app-url&gt;/manifest.webmanifest</code> and <code>npx @bubblewrap/cli build</code> to generate the native Android Studio project.
                </p>
              </div>
            </div>
          </div>

          {/* Checklist */}
          <div className="p-3.5 rounded-xl bg-[#0b1428] border border-slate-800 space-y-1.5 text-xs text-slate-300">
            <span className="font-bold text-white block mb-1">Android APK Compliance Checklist:</span>
            <div className="flex items-center gap-2 text-teal-300">
              <CheckCircle className="w-4 h-4 text-teal-400" /> Web App Manifest with standalone display
            </div>
            <div className="flex items-center gap-2 text-teal-300">
              <CheckCircle className="w-4 h-4 text-teal-400" /> 192px and 512px maskable &amp; any icons
            </div>
            <div className="flex items-center gap-2 text-teal-300">
              <CheckCircle className="w-4 h-4 text-teal-400" /> Service Worker precaching all assets for offline caching
            </div>
            <div className="flex items-center gap-2 text-teal-300">
              <CheckCircle className="w-4 h-4 text-teal-400" /> Touch targets ≥ 48px for phones and tablets
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0a1530] border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-sm transition"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
