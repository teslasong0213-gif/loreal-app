/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronLeft, MoreHorizontal, ShieldCheck, Sparkles, X, EyeOff } from 'lucide-react';

interface MiniProgramHeaderProps {
  title?: string;
  showBack?: boolean;
  onBack?: () => void;
  onExit?: () => void;
  onQuickDisguise?: () => void;
  isDisguised?: boolean;
}

export const MiniProgramHeader: React.FC<MiniProgramHeaderProps> = ({
  title,
  showBack = false,
  onBack,
  onExit,
  onQuickDisguise,
  isDisguised = false,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-[#121212]/95 backdrop-blur-md text-white border-b border-[#2A2A2A] px-4 py-2.5 flex items-center justify-between select-none">
      {/* Left: Back button or Brand Logo */}
      <div className="flex items-center gap-2 min-w-[120px]">
        {showBack && onBack ? (
          <button
            onClick={onBack}
            className="flex items-center text-xs text-[#E2C799] hover:text-white transition-colors cursor-pointer -ml-1 pr-1 py-1"
            title="返回"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="font-medium text-xs">返回</span>
          </button>
        ) : (
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-[0.22em] font-serif uppercase text-white leading-tight">
              L'ORÉAL
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#C49B5B] font-serif uppercase">
              PARIS
            </span>
          </div>
        )}

        {title && (
          <span className="text-xs font-medium text-neutral-300 truncate max-w-[140px] pl-2 border-l border-neutral-700">
            {title}
          </span>
        )}
      </div>

      {/* Center: Discreet Disguise / Safety Switch */}
      <div className="flex items-center">
        {onQuickDisguise && !isDisguised && (
          <button
            onClick={onQuickDisguise}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 text-neutral-300 hover:text-white text-[11px] font-medium border border-white/15 transition-all cursor-pointer shadow-sm active:scale-95"
            title="如遇他人靠近，点击立即速览普通口红商品页"
          >
            <EyeOff className="w-3 h-3 text-[#E2C799]" />
            <span>快速切换</span>
          </button>
        )}
      </div>

      {/* Right: WeChat Mini-Program Native Style Capsule Controls */}
      <div className="flex items-center bg-[#252525]/90 rounded-full px-2.5 py-1 border border-neutral-700/80 shadow-inner gap-2 text-neutral-300">
        <button 
          onClick={() => {}} 
          className="hover:text-white transition-colors cursor-pointer"
          title="小程序菜单"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        <div className="w-[1px] h-3 bg-neutral-600" />
        <button 
          onClick={onExit} 
          className="hover:text-white transition-colors cursor-pointer"
          title="返回搜索卡片"
        >
          <div className="w-3 h-3 rounded-full border-[1.5px] border-current flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-current" />
          </div>
        </button>
      </div>
    </header>
  );
};
