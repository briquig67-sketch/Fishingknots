import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, Check, Wifi, WifiOff } from 'lucide-react';

interface PWAInstallButtonProps {
  onOpenApkModal?: () => void;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ onOpenApkModal }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  );

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* Offline Status Badge */}
      <span
        title={isOnline ? 'Online — App also cached for offline' : 'Airplane/Offline Mode Active'}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition ${
          isOnline
            ? 'bg-teal-950/40 text-teal-300 border-teal-800/40'
            : 'bg-amber-950/60 text-amber-300 border-amber-800/60 animate-pulse'
        }`}
      >
        {isOnline ? <Wifi className="w-3.5 h-3.5 text-teal-400" /> : <WifiOff className="w-3.5 h-3.5 text-amber-400" />}
        <span className="hidden sm:inline">{isOnline ? 'Offline Ready' : 'Airplane Mode'}</span>
      </span>

      {/* APK / Install Button */}
      {isInstallable ? (
        <button
          onClick={install}
          className="flex items-center gap-1.5 rounded-xl bg-teal-500 hover:bg-teal-400 active:bg-teal-600 px-3.5 py-1.5 text-xs font-bold text-slate-950 shadow-md shadow-teal-500/20 active:scale-95 transition"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Install App</span>
        </button>
      ) : isIOS ? (
        <button
          onClick={() => setShowIOSGuide(true)}
          className="flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-750 px-3 py-1.5 text-xs font-semibold text-slate-200 border border-slate-700 transition"
        >
          <Smartphone className="w-3.5 h-3.5 text-teal-400" />
          <span>Install on iOS</span>
        </button>
      ) : isInstalled ? (
        <span className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-950/50 text-emerald-300 border border-emerald-800/40">
          <Check className="w-3.5 h-3.5" />
          <span>Installed</span>
        </span>
      ) : (
        <button
          onClick={onOpenApkModal}
          className="flex items-center gap-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 px-3 py-1.5 text-xs font-semibold text-slate-200 border border-slate-700 transition"
          title="Install as Android APK / PWA"
        >
          <Smartphone className="w-3.5 h-3.5 text-teal-400" />
          <span className="hidden sm:inline">Android / APK</span>
          <span className="sm:hidden">Install</span>
        </button>
      )}

      {/* iOS Safari Guide Modal */}
      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#0b1428] p-6 shadow-2xl border border-slate-700 text-slate-100 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-teal-400" />
              Install on iPhone or iPad
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              1. Tap the <strong>Share</strong> button (box with upward arrow) in the Safari toolbar.<br />
              2. Scroll down and tap <strong>"Add to Home Screen"</strong>.<br />
              3. The app will open full-screen and work 100% offline.
            </p>
            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full rounded-xl bg-teal-500 py-2.5 text-sm font-bold text-slate-950 hover:bg-teal-400 transition"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
