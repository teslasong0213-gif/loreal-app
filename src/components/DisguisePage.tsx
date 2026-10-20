/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Heart, Share2, ShoppingBag, Star, ChevronLeft, ShieldCheck, Check } from 'lucide-react';

interface DisguisePageProps {
  onResume: () => void;
}

export const DisguisePage: React.FC<DisguisePageProps> = ({ onResume }) => {
  const [selectedShade, setSelectedShade] = useState('666 法式正红');

  const shades = [
    { code: '666', name: '法式正红', hex: '#A11D23' },
    { code: '129', name: '乌木红棕', hex: '#7E3029' },
    { code: '275', name: '细闪裸橘', hex: '#C26D53' },
    { code: '302', name: '温润豆沙', hex: '#9E5B61' },
    { code: '196', name: '胡萝卜橘', hex: '#B84A39' },
  ];

  return (
    <div className="flex-1 flex flex-col bg-[#FAF9F5] text-neutral-900 overflow-y-auto font-sans select-none">
      {/* Discreet top bar with safe resume option */}
      <div className="bg-white px-4 py-2.5 border-b border-neutral-200 flex items-center justify-between sticky top-0 z-40">
        <button
          onClick={onResume}
          className="flex items-center text-xs font-medium text-neutral-600 hover:text-black cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4 mr-0.5" />
          <span>返回</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="text-xs font-bold tracking-[0.2em] font-serif uppercase">
            L'ORÉAL PARIS
          </span>
          <span className="text-[9px] text-neutral-400 font-sans tracking-widest">
            COLLECTION EXCLUSIVE
          </span>
        </div>

        <div className="flex items-center gap-3 text-neutral-600">
          <Heart className="w-4 h-4" />
          <Share2 className="w-4 h-4" />
        </div>
      </div>

      {/* Main Luxury Product Catalog Content */}
      <div className="p-4 flex flex-col gap-4 max-w-md mx-auto w-full">
        {/* Product Visual */}
        <div className="w-full h-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-neutral-200/60 p-4 flex items-center justify-center relative">
          <img
            src="/src/assets/images/loreal_beauty_tech_hero_1792479865624.jpg"
            alt="L'Oreal Paris Lipstick"
            className="w-full h-full object-cover rounded-xl"
          />
          <span className="absolute top-6 left-6 text-[10px] tracking-widest bg-black text-white px-2 py-0.5 uppercase font-medium">
            2026 春季限定
          </span>
        </div>

        {/* Product Meta */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold font-serif text-neutral-950">
              ¥ 145.00
            </span>
            <div className="flex items-center text-amber-500 text-xs gap-0.5">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span className="font-semibold text-neutral-700">4.9</span>
              <span className="text-neutral-400 text-[10px]">(1.2万+评价)</span>
            </div>
          </div>

          <h2 className="text-base font-bold text-neutral-900 font-serif">
            巴黎欧莱雅纷泽丰润雾感唇膏 (奢金丝绒系列)
          </h2>
          <p className="text-xs text-neutral-500">
            富含高浓度玻尿酸原液与法国山茶花精萃，丝绒顺滑，持久显色不拔干。
          </p>
        </div>

        {/* Shade Selector */}
        <div className="bg-white p-3.5 rounded-xl border border-neutral-200/80 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-neutral-800">
              已选色号：<span className="text-neutral-950">{selectedShade}</span>
            </span>
            <span className="text-[11px] text-neutral-400">全国专柜在售</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {shades.map((s) => {
              const isSelected = selectedShade === `${s.code} ${s.name}`;
              return (
                <button
                  key={s.code}
                  onClick={() => setSelectedShade(`${s.code} ${s.name}`)}
                  className={`flex flex-col items-center gap-1 p-1.5 rounded-lg border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-neutral-900 bg-neutral-50 shadow-sm'
                      : 'border-transparent hover:bg-neutral-50'
                  }`}
                >
                  <div
                    className="w-7 h-7 rounded-full shadow-inner flex items-center justify-center text-white"
                    style={{ backgroundColor: s.hex }}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span className="text-[10px] font-mono text-neutral-700">{s.code}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Feature specs */}
        <div className="grid grid-cols-3 gap-2 text-center text-xs text-neutral-600">
          <div className="bg-white p-2.5 rounded-lg border border-neutral-200/60">
            <span className="block font-semibold text-neutral-800 text-[11px]">8H 持色</span>
            <span className="text-[10px] text-neutral-400">丝绒锁色膜</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-neutral-200/60">
            <span className="block font-semibold text-neutral-800 text-[11px]">玻尿酸注入</span>
            <span className="text-[10px] text-neutral-400">滋润抚平唇纹</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-neutral-200/60">
            <span className="block font-semibold text-neutral-800 text-[11px]">专为亚洲肤调</span>
            <span className="text-[10px] text-neutral-400">一抹净透显白</span>
          </div>
        </div>

        {/* Discreet bottom action bar */}
        <div className="mt-2 flex items-center gap-2.5">
          <button
            onClick={() => {}}
            className="flex-1 py-3 px-4 rounded-xl bg-neutral-900 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>加入购物袋</span>
          </button>

          <button
            onClick={onResume}
            className="py-3 px-4 rounded-xl bg-neutral-200 text-neutral-800 hover:bg-neutral-300 font-medium text-xs transition-colors cursor-pointer"
            title="恢复美妆助手"
          >
            继续咨询
          </button>
        </div>
      </div>
    </div>
  );
};
