/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, Heart, Bookmark, Eye, ChevronRight, SlidersHorizontal } from 'lucide-react';

interface SearchEntryCardProps {
  onEnterApp: () => void;
}

export const SearchEntryCard: React.FC<SearchEntryCardProps> = ({ onEnterApp }) => {
  const [activeQuery, setActiveQuery] = useState('脸上有色块，怎么选遮瑕？');

  const presetQueries = [
    '脸上有色块，怎么选遮瑕？',
    '遮瑕怎么选才自然？',
    '粉底怎么修饰肤色不均？',
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-[#F7F7F7] min-h-[720px] flex flex-col rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 font-sans">
      {/* Top Simulated Social Platform Header (Xiaohongshu style search) */}
      <div className="bg-white px-4 pt-3 pb-3 border-b border-neutral-100 flex flex-col gap-2.5">
        <div className="flex items-center gap-2">
          <div className="flex-1 flex items-center bg-[#F1F2F4] rounded-full px-3.5 py-2 text-sm text-neutral-800">
            <Search className="w-4 h-4 text-neutral-400 mr-2 shrink-0" />
            <input 
              type="text" 
              value={activeQuery}
              onChange={(e) => setActiveQuery(e.target.value)}
              className="bg-transparent border-none outline-none w-full text-xs font-medium text-neutral-900"
              placeholder="搜索遮瑕、粉底、色斑、肤色校色..."
            />
          </div>
          <button 
            onClick={onEnterApp}
            className="text-xs font-semibold text-[#C49B5B] px-2 py-1 shrink-0 hover:text-black transition-colors"
          >
            搜索
          </button>
        </div>

        {/* Query quick pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5 no-scrollbar text-[11px]">
          <span className="text-neutral-400 shrink-0 text-[10px]">热搜建议:</span>
          {presetQueries.map((q) => (
            <button
              key={q}
              onClick={() => setActiveQuery(q)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-all ${
                activeQuery === q
                  ? 'bg-neutral-900 text-white font-medium'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-50'
              }`}
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Main Search Results Stream */}
      <div className="flex-1 p-3.5 flex flex-col gap-3 overflow-y-auto">
        {/* The Core Focus: Sponsored L'Oréal Paris Beauty Tech AI Service Card */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#121212] via-[#1A1A1A] to-[#252320] text-white p-5 shadow-xl border border-[#D4AF37]/30 transition-all hover:border-[#D4AF37]/60 group">
          {/* Subtle gold decorative glow */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#E2C799]/10 rounded-full blur-2xl pointer-events-none" />

          {/* Brand & Tech Tag */}
          <div className="flex items-center justify-between mb-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E2C799] font-serif">
                L'ORÉAL PARIS
              </span>
              <span className="text-[10px] text-neutral-400 font-sans tracking-wider border-l border-neutral-700 pl-2">
                BEAUTY TECH
              </span>
            </div>
            <span className="text-[10px] text-[#D4AF37] font-medium bg-[#D4AF37]/10 px-2 py-0.5 rounded-full border border-[#D4AF37]/20 flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" />
              官方定制服务
            </span>
          </div>

          {/* Title & Subtitle */}
          <div className="mb-4 relative z-10">
            <h2 className="text-xl font-bold tracking-tight text-white mb-2 font-serif">
              找到适合你的底妆与校色方案
            </h2>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              AI美妆助手，根据你的肤质、肤色与妆感偏好，提供个性化建议。从局部色彩中和到长效隐形，探索你的专属配方。
            </p>
          </div>

          {/* Key capability pills */}
          <div className="grid grid-cols-3 gap-2 mb-4 relative z-10 text-[11px] text-neutral-300">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center">
              <span className="block text-[#E2C799] font-medium mb-0.5">肤质评估</span>
              <span className="text-[10px] text-neutral-400">水油平衡基底</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center">
              <span className="block text-[#E2C799] font-medium mb-0.5">局部校色</span>
              <span className="text-[10px] text-neutral-400">光学互补中和</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-2 border border-white/10 text-center">
              <span className="block text-[#E2C799] font-medium mb-0.5">专属遮瑕</span>
              <span className="text-[10px] text-neutral-400">防摩擦持色</span>
            </div>
          </div>

          {/* CTA Button */}
          <button
            onClick={onEnterApp}
            className="w-full relative z-10 py-3 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E2C799] to-[#C49B5B] text-neutral-950 font-semibold text-xs tracking-wide shadow-lg hover:shadow-[#D4AF37]/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] cursor-pointer"
          >
            <span>获取专属美妆建议</span>
            <ArrowRight className="w-4 h-4 text-neutral-900 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* Discreet Footer Note */}
          <div className="mt-2.5 text-center relative z-10">
            <span className="text-[10px] text-neutral-400">
              免排队 · 纯净隐私体验 · 随时自主返回
            </span>
          </div>
        </div>

        {/* Ambient simulated normal feed items underneath (Enhances platform realism) */}
        <div className="flex items-center justify-between px-1 text-xs text-neutral-500 font-medium">
          <span>相关笔记与美妆推荐</span>
          <span className="text-[11px] flex items-center gap-1 text-neutral-400">
            <SlidersHorizontal className="w-3 h-3" /> 筛选
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div 
            onClick={onEnterApp} 
            className="bg-white rounded-xl overflow-hidden border border-neutral-200/70 p-2.5 flex flex-col gap-2 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-full h-28 bg-[#EDE8E3] rounded-lg overflow-hidden relative">
              <img 
                src="/src/assets/images/loreal_color_corrector_1792479864641.jpg" 
                alt="遮瑕盘"
                className="w-full h-full object-cover" 
              />
              <span className="absolute bottom-1.5 left-1.5 text-[9px] bg-black/60 text-white px-1.5 py-0.5 rounded backdrop-blur-sm">
                干货分享
              </span>
            </div>
            <p className="text-[11px] font-medium text-neutral-800 line-clamp-2 leading-tight">
              脸上发青暗沉怎么遮？教你用色彩互补自然隐形
            </p>
            <div className="flex items-center justify-between text-[10px] text-neutral-400 mt-auto">
              <span>美妆研习社</span>
              <span className="flex items-center gap-0.5"><Heart className="w-2.5 h-2.5" /> 3.2w</span>
            </div>
          </div>

          <div 
            onClick={onEnterApp}
            className="bg-white rounded-xl overflow-hidden border border-neutral-200/70 p-2.5 flex flex-col gap-2 cursor-pointer hover:shadow-md transition-shadow"
          >
            <div className="w-full h-28 bg-[#EBE7DF] rounded-lg overflow-hidden relative">
              <img 
                src="/src/assets/images/loreal_infallible_concealer_1792479862812.jpg" 
                alt="底妆测评"
                className="w-full h-full object-cover" 
              />
              <span className="absolute bottom-1.5 left-1.5 text-[9px] bg-black/60 text-white px-1.5 py-0.5 rounded backdrop-blur-sm">
                产品实测
              </span>
            </div>
            <p className="text-[11px] font-medium text-neutral-800 line-clamp-2 leading-tight">
              欧莱雅高遮瑕持妆粉底实测：轻薄无重力却能遮盖杂色
            </p>
            <div className="flex items-center justify-between text-[10px] text-neutral-400 mt-auto">
              <span>法式底妆师</span>
              <span className="flex items-center gap-0.5"><Heart className="w-2.5 h-2.5" /> 1.8w</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
