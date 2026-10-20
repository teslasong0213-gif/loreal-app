/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { SurveyAnswers } from '../types/beauty';
import { COLOR_GUIDE_RULES, MOCK_PRODUCTS } from '../data/mockData';
import { 
  Sparkles, 
  ShieldAlert, 
  ShieldCheck, 
  HeartHandshake, 
  ChevronRight, 
  RotateCcw, 
  Palette, 
  Info,
  CheckCircle2,
  ExternalLink,
  Layers,
  ArrowRight
} from 'lucide-react';

interface ResultPageProps {
  answers: SurveyAnswers;
  onOpenSupport: () => void;
  onRestart: () => void;
  onOpenPrivacy: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  answers,
  onOpenSupport,
  onRestart,
  onOpenPrivacy,
}) => {
  // Check if user has open wound, swelling, or pain (Q4 Option B or C)
  const isSkinCompromised = answers.skinCondition === 'abrasion_broken' || answers.skinCondition === 'mild_swelling';
  const hasSelectedBrokenSkin = answers.skinCondition === 'abrasion_broken';

  // Format skin type label
  const skinTypeLabels: Record<string, string> = {
    dry: '干性肌肤 · 需润泽修护',
    oily_combo: '油性/混合性 · 需清爽控油',
    sensitive: '敏感性肌 · 需舒缓低刺激',
    normal: '中性健康肌',
  };

  const makeupFinishLabels: Record<string, string> = {
    sheer_natural: '轻薄自然妆感',
    full_coverage: '高度持久遮瑕',
    color_correct: '局部精准校色',
    other: '定制平衡妆感',
  };

  return (
    <div className="flex-1 flex flex-col bg-[#0F0F10] text-[#E8E8E8] overflow-y-auto font-sans pb-12">
      {/* Top Status & Summary Bar */}
      <div className="bg-[#141416] px-5 py-4 border-b border-neutral-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5 text-[11px] text-[#E2C799] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>巴黎欧莱雅 BEAUTY TECH · 专属方案</span>
          </div>
          <button
            onClick={onRestart}
            className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>重新评估</span>
          </button>
        </div>

        <h1 className="text-xl font-bold text-white font-serif tracking-tight">
          您的专属底妆与局部校色建议
        </h1>

        {/* Selected profile summary tags (Zero-pill clean metadata with typographic dots) */}
        <div className="mt-2 text-xs text-neutral-400 flex flex-wrap items-center gap-1.5">
          <span>{skinTypeLabels[answers.skinType || 'normal'] || '标准肤质'}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>{makeupFinishLabels[answers.makeupFinish || 'color_correct'] || '局部校色'}</span>
          {answers.markDuration && (
            <>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>时效适配校色</span>
            </>
          )}
        </div>
      </div>

      <div className="px-5 py-5 flex flex-col gap-6 max-w-md mx-auto w-full">
        {/* SECTION 2 (Priority Display): 安全的美妆建议 (Skin Health & Safety) */}
        {isSkinCompromised ? (
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-600/40 text-neutral-200">
            <div className="flex items-center gap-2 mb-2">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0" />
              <h3 className="text-xs font-bold text-amber-200 uppercase tracking-wider">
                健康优先建议：受损屏障护理提示
              </h3>
            </div>
            <p className="text-xs text-amber-100/90 leading-relaxed font-light mb-2">
              {hasSelectedBrokenSkin
                ? '检测到您的皮肤表皮存在擦伤或破损。请绝对避免直接在创面上使用任何彩妆或遮瑕膏，以免色素沉淀或引发细菌感染。'
                : '您的皮肤局部伴有触痛或肿胀。此时皮下微循环较为脆弱，建议优先冷敷舒缓，暂停使用厚重粉质彩妆。'}
            </p>
            <div className="text-[11px] text-amber-200/80 bg-amber-950/40 p-2.5 rounded-lg border border-amber-800/30">
              <span className="font-semibold block mb-0.5">安全呵护指南：</span>
              1. 创面请使用生理盐水清洁并保持干燥通风。<br />
              2. 避免高酒精、强防腐剂或闪粉类化妆品。<br />
              3. 如伴有持续疼痛、头晕或伤口较深，请优先前往正规医院就诊。
            </div>
          </div>
        ) : (
          <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
            <p className="text-xs text-neutral-400 leading-relaxed">
              <strong>温和上妆原则：</strong>表皮未破损状态下，建议先做好水润打底，使用指腹轻温按压，避免粉扑用力推拉，保护皮肤角质层。
            </p>
          </div>
        )}

        {/* SECTION 1: 局部色彩与妆感建议 (Color Correction & Optical Physics) */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2 font-serif">
              <Palette className="w-4 h-4 text-[#D4AF37]" />
              <span>01. 局部色彩与光学中和法则</span>
            </h2>
            <span className="text-[10px] text-neutral-400">互补色相学</span>
          </div>

          <p className="text-xs text-neutral-400 leading-relaxed font-light">
            利用色轮上 180° 对应的互补色相相互叠加中和，无需厚重堆积粉底，即可在视觉上淡化深色杂质：
          </p>

          <div className="flex flex-col gap-3">
            {COLOR_GUIDE_RULES.map((rule) => (
              <div
                key={rule.targetTone}
                className="bg-[#161618] rounded-xl p-3.5 border border-neutral-800 flex flex-col gap-2"
              >
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3.5 h-3.5 rounded-full inline-block shadow-sm ring-1 ring-white/10"
                      style={{ backgroundColor: rule.hexCode }}
                    />
                    <span className="font-semibold text-white">{rule.targetTone}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#E2C799] text-[11px] font-medium">
                    <span>对冲：</span>
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: rule.complementaryHex }}
                    />
                    <span>{rule.complementaryColor}</span>
                  </div>
                </div>

                <div className="text-[11px] text-neutral-300 leading-relaxed bg-[#121213] p-2.5 rounded-lg border border-neutral-800/80">
                  <span className="text-neutral-400 block mb-0.5 font-medium">上妆手法：</span>
                  {rule.technique}
                </div>

                <p className="text-[10px] text-neutral-500 leading-normal">
                  <strong className="text-neutral-400">专业贴士：</strong> {rule.doAndDont}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[10px] text-neutral-500 italic mt-0.5">
            * 声明：本系统基于美妆互补色原理，不根据颜色准确推断医学伤情阶段或受伤日期。
          </p>
        </div>

        {/* SECTION 3: 精选产品推荐 (Product Recommendations) */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold text-white tracking-wide uppercase flex items-center gap-2 font-serif">
              <Layers className="w-4 h-4 text-[#D4AF37]" />
              <span>02. 巴黎欧莱雅精选质感底妆</span>
            </h2>
            <span className="text-[10px] text-neutral-400">官方科技配方</span>
          </div>

          <div className="flex flex-col gap-3.5">
            {MOCK_PRODUCTS.map((prod) => (
              <div
                key={prod.id}
                className="bg-[#161618] rounded-2xl overflow-hidden border border-neutral-800 flex flex-col hover:border-neutral-700 transition-colors"
              >
                <div className="flex p-3 gap-3">
                  <div className="w-24 h-24 bg-neutral-900 rounded-xl overflow-hidden shrink-0 relative">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <span className="text-[9px] tracking-widest text-[#D4AF37] uppercase font-serif">
                        {prod.brand}
                      </span>
                      <h4 className="text-xs font-bold text-white truncate leading-tight mt-0.5">
                        {prod.name}
                      </h4>
                      <p className="text-[10px] text-neutral-400 truncate font-mono mt-0.5">
                        {prod.subName}
                      </p>
                    </div>

                    <div className="mt-1">
                      <span className="text-[10px] text-neutral-300 block">
                        推荐色号：<strong className="text-[#E2C799] font-normal">{prod.shade}</strong>
                      </span>
                      <span className="text-xs font-semibold text-white font-mono">
                        {prod.price}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#121213] px-3.5 py-2.5 border-t border-neutral-800/80 text-[11px] text-neutral-300">
                  <span className="text-[#E2C799] font-medium">推荐理由：</span>
                  {prod.recommendationReason}
                </div>
              </div>
            ))}
          </div>

          <span className="text-[10px] text-neutral-500 text-center">
            * 演示产品为巴黎欧莱雅专柜在售单品参考，具体使用前可于耳后或下颌进行皮肤敏感性测试。
          </span>
        </div>

        {/* SECTION 4 / PAGE 5: 品牌关怀与支持入口 (Respectful, Dignified Care Card) */}
        <div className="mt-2 p-5 rounded-2xl bg-gradient-to-b from-[#1C1A17] to-[#141416] border border-[#D4AF37]/30 shadow-xl flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-xs font-semibold tracking-wider text-[#E2C799] uppercase font-serif">
              L'ORÉAL PARIS CARE · 品牌关怀
            </span>
          </div>

          <div>
            <h3 className="text-sm font-bold text-white mb-1.5 font-serif">
              除了美妆，你也可以了解更多关怀与支持。
            </h3>
            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              如果你正在面对健康、安全或人际关系方面的困扰，可以在这里查看相关支持信息。你不必解释原因，也可以随时返回美妆服务。
            </p>
          </div>

          <div className="pt-1">
            <button
              onClick={onOpenSupport}
              className="w-full py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-[#E2C799] hover:text-white font-semibold text-xs tracking-wide border border-[#D4AF37]/40 flex items-center justify-center gap-2 transition-all cursor-pointer group"
            >
              <span>查看支持信息与安全指引</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E2C799] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-between text-[10px] text-neutral-500 pt-1 border-t border-neutral-800/80">
            <span>自主阅读 · 绝不强制登记信息</span>
            <span>随时可自主返回美妆助手</span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-center gap-4 text-xs text-neutral-400 pt-4">
          <button
            onClick={onRestart}
            className="hover:text-white transition-colors cursor-pointer"
          >
            重新测试
          </button>
          <span>·</span>
          <button
            onClick={onOpenPrivacy}
            className="hover:text-white transition-colors cursor-pointer"
          >
            隐私保护政策
          </button>
        </div>
      </div>
    </div>
  );
};
