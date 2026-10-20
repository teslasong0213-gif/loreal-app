/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { Sparkles, Check, Droplets, Palette, ShieldCheck, ArrowRight } from 'lucide-react';

interface AIAnalysisLoadingProps {
  onComplete: () => void;
}

export const AIAnalysisLoading: React.FC<AIAnalysisLoadingProps> = ({ onComplete }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    { label: '肤质信息整理与水油屏障分析', icon: Droplets },
    { label: '局部色彩特征与光学互补色矩阵校准', icon: Palette },
    { label: '妆感偏好与长效抗摩擦质感匹配', icon: Sparkles },
    { label: '美妆安全建议与专属底妆方案生成', icon: ShieldCheck },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStepIndex((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 600);
          return prev;
        }
      });
    }, 700);

    return () => clearInterval(timer);
  }, [onComplete, steps.length]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-[#0F0F10] text-[#E8E8E8] px-6 py-10 font-sans">
      <div className="w-full max-w-sm flex flex-col items-center text-center">
        {/* Animated Gold Ring Spinner */}
        <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-neutral-800" />
          <div className="absolute inset-0 rounded-full border-2 border-[#D4AF37] border-t-transparent animate-spin" />
          <Sparkles className="w-7 h-7 text-[#E2C799] animate-pulse" />
        </div>

        <span className="text-[10px] tracking-[0.25em] text-[#D4AF37] uppercase font-serif mb-1.5">
          L'ORÉAL BEAUTY TECH ALGORITHM
        </span>
        <h2 className="text-xl font-bold text-white tracking-tight font-serif mb-2">
          正在为你整理专属美妆建议
        </h2>
        <p className="text-xs text-neutral-400 font-light max-w-xs mb-8">
          基于色彩互补原理与肌肤透气性模型，定制多维修饰与安全护肤指引。
        </p>

        {/* Dynamic step checklist */}
        <div className="w-full bg-[#161618] rounded-2xl p-4 border border-neutral-800 flex flex-col gap-3 text-left mb-6">
          {steps.map((step, idx) => {
            const isDone = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;
            const Icon = step.icon;

            return (
              <div
                key={step.label}
                className={`flex items-center gap-3 transition-opacity duration-300 ${
                  idx <= currentStepIndex ? 'opacity-100' : 'opacity-30'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-xs transition-colors ${
                    isDone
                      ? 'bg-[#D4AF37] text-neutral-950 font-bold'
                      : isCurrent
                      ? 'border border-[#D4AF37] text-[#E2C799] animate-pulse'
                      : 'border border-neutral-700 text-neutral-500'
                  }`}
                >
                  {isDone ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Icon className="w-3 h-3" />}
                </div>

                <span className={`text-xs ${isCurrent ? 'text-white font-medium' : 'text-neutral-400'}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mandatory Transparency Note */}
        <p className="text-[10px] text-neutral-500 leading-normal max-w-xs">
          注：本系统提供日常美妆光学修饰与温和上妆建议，不作为临床医学诊断。
        </p>

        {/* Skip to result immediately button */}
        <button
          onClick={onComplete}
          className="mt-6 text-xs text-[#E2C799] hover:underline flex items-center gap-1 cursor-pointer"
        >
          <span>跳过等待，直接查看方案</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
