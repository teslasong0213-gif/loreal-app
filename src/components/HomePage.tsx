/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, ArrowRight, BookOpen, ShieldCheck, CheckCircle2, ChevronRight, Palette, Layers, Droplets } from 'lucide-react';

interface HomePageProps {
  onStartSurvey: () => void;
  onBrowseDirectly: () => void;
  onOpenPrivacy: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onStartSurvey,
  onBrowseDirectly,
  onOpenPrivacy,
}) => {
  return (
    <div className="flex-1 flex flex-col bg-[#0F0F10] text-[#E8E8E8] overflow-y-auto font-sans pb-8">
      {/* Editorial Hero Visual Section */}
      <div className="relative w-full h-[320px] overflow-hidden bg-neutral-900 shrink-0">
        <img
          src="/src/assets/images/loreal_beauty_tech_hero_1792479865624.jpg"
          alt="巴黎欧莱雅底妆艺术"
          className="w-full h-full object-cover opacity-90 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Soft elegant gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F10] via-[#0F0F10]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F10]/80 via-transparent to-black/30" />

        {/* Hero Title Lockup */}
        <div className="absolute bottom-6 left-5 right-5 z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#E2C799] text-[10px] font-medium tracking-widest uppercase mb-2">
            <Sparkles className="w-2.5 h-2.5" />
            L'ORÉAL BEAUTY TECH
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2 font-serif">
            找到适合你的底妆。
          </h1>
          <p className="text-xs text-neutral-300 font-light leading-relaxed max-w-xs">
            从肤质到局部色彩，探索更适合你的美妆方案。以光学互补原理与定制质感，唤醒肌肤原初之美。
          </p>
        </div>
      </div>

      {/* 3 Core Capability Modules (Structured Cards) */}
      <div className="px-5 py-4 flex flex-col gap-3">
        <div className="text-[11px] font-semibold tracking-wider uppercase text-neutral-400 flex items-center gap-2">
          <span>核心定制流程</span>
          <div className="h-[1px] flex-1 bg-neutral-800" />
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[#18181A] rounded-xl p-3 border border-neutral-800/80 flex flex-col items-center text-center hover:border-[#D4AF37]/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#E2C799] mb-2">
              <Droplets className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-white mb-0.5">肤质评估</span>
            <span className="text-[10px] text-neutral-400 leading-tight">水油配比调和</span>
          </div>

          <div className="bg-[#18181A] rounded-xl p-3 border border-neutral-800/80 flex flex-col items-center text-center hover:border-[#D4AF37]/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#E2C799] mb-2">
              <Palette className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-white mb-0.5">局部色彩分析</span>
            <span className="text-[10px] text-neutral-400 leading-tight">互补色相中和</span>
          </div>

          <div className="bg-[#18181A] rounded-xl p-3 border border-neutral-800/80 flex flex-col items-center text-center hover:border-[#D4AF37]/40 transition-colors">
            <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#E2C799] mb-2">
              <Layers className="w-4 h-4" />
            </div>
            <span className="text-xs font-semibold text-white mb-0.5">专属遮瑕方案</span>
            <span className="text-[10px] text-neutral-400 leading-tight">持久抗磨手法</span>
          </div>
        </div>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col gap-2.5 mt-3">
          <button
            onClick={onStartSurvey}
            className="w-full py-3.5 px-5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E2C799] to-[#C49B5B] text-neutral-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-[#D4AF37]/30 flex items-center justify-center gap-2 transition-all transform active:scale-[0.99] cursor-pointer"
          >
            <span>开始我的美妆测试</span>
            <ArrowRight className="w-4 h-4 text-neutral-900" />
          </button>

          <button
            onClick={onBrowseDirectly}
            className="w-full py-3 px-5 rounded-xl bg-[#1A1A1C] hover:bg-[#222226] text-neutral-200 font-medium text-xs tracking-wide border border-neutral-700/80 flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-[#E2C799]" />
            <span>直接浏览美妆建议与校色宝典</span>
          </button>
        </div>

        {/* Feature Highlights & Skin Shade Preview */}
        <div className="mt-4 bg-[#141416] rounded-2xl p-4 border border-neutral-800/90 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-200">
              精准校色 · 色彩中和指南
            </span>
            <span className="text-[10px] text-[#E2C799]">互补色相学</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
            <div className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800">
              <div className="w-4 h-4 rounded-full bg-[#E29578] mx-auto mb-1.5 ring-2 ring-black" />
              <span className="block font-medium text-neutral-300">暖橘 / 蜜桃</span>
              <span className="text-[9px] text-neutral-500">中和蓝紫暗沉</span>
            </div>
            <div className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800">
              <div className="w-4 h-4 rounded-full bg-[#84A98C] mx-auto mb-1.5 ring-2 ring-black" />
              <span className="block font-medium text-neutral-300">薄荷浅绿</span>
              <span className="text-[9px] text-neutral-500">淡化充血泛红</span>
            </div>
            <div className="p-2 rounded-lg bg-neutral-900/80 border border-neutral-800">
              <div className="w-4 h-4 rounded-full bg-[#DDA15E] mx-auto mb-1.5 ring-2 ring-black" />
              <span className="block font-medium text-neutral-300">柔焦米金</span>
              <span className="text-[9px] text-neutral-500">平滑泛青黄晕</span>
            </div>
          </div>
        </div>

        {/* Gentle, unobtrusive Privacy Protection Statement */}
        <div className="mt-3 p-3 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              巴黎欧莱雅隐私承诺：本助手测试交互仅在当前设备临时运算，不搜集个人生物身份，不保存敏感记录，随时可自主退出或清除。
            </p>
            <button
              onClick={onOpenPrivacy}
              className="text-[10px] text-[#E2C799] underline hover:text-white mt-1 cursor-pointer"
            >
              了解我们的纯净隐私与数据保护规范 &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
