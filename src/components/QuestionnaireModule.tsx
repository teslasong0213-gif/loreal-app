/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SURVEY_QUESTIONS } from '../data/mockData';
import { SurveyAnswers, QuestionItem, QuestionOption } from '../types/beauty';
import { ChevronLeft, ChevronRight, AlertCircle, Camera, Upload, X, Shield, Check } from 'lucide-react';

interface QuestionnaireModuleProps {
  answers: SurveyAnswers;
  onUpdateAnswers: (updated: Partial<SurveyAnswers>) => void;
  onComplete: () => void;
  onExit: () => void;
}

export const QuestionnaireModule: React.FC<QuestionnaireModuleProps> = ({
  answers,
  onUpdateAnswers,
  onComplete,
  onExit,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOptionalPhotoModal, setShowOptionalPhotoModal] = useState(false);
  const [selectedPhotoPreview, setSelectedPhotoPreview] = useState<string | null>(answers.uploadedPhotoUrl || null);

  const totalQuestions = SURVEY_QUESTIONS.length;
  const currentQ: QuestionItem = SURVEY_QUESTIONS[currentIndex];
  const currentAnswerValue = answers[currentQ.field] as string | undefined;

  const handleSelectOption = (key: string) => {
    onUpdateAnswers({ [currentQ.field]: key });
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      onExit();
    }
  };

  const handleSkip = () => {
    // Allows skipping any question without forcing a selection
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onComplete();
    }
  };

  const handleMockUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setSelectedPhotoPreview(url);
      onUpdateAnswers({ hasOptionalPhoto: true, uploadedPhotoUrl: url });
      setShowOptionalPhotoModal(false);
    }
  };

  const handleRemovePhoto = () => {
    setSelectedPhotoPreview(null);
    onUpdateAnswers({ hasOptionalPhoto: false, uploadedPhotoUrl: null });
  };

  // Progress percentage
  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="flex-1 flex flex-col bg-[#0F0F10] text-[#E8E8E8] overflow-y-auto font-sans">
      {/* Questionnaire Top Module & Progress Header */}
      <div className="px-5 pt-4 pb-3 bg-[#141416] border-b border-neutral-800">
        <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
          <span className="text-[#E2C799] font-medium tracking-wide">
            {currentQ.moduleName}
          </span>
          <span className="text-neutral-400 font-mono text-[11px] tabular-nums">
            第 {currentIndex + 1} / {totalQuestions} 题
          </span>
        </div>

        {/* Progress bar line */}
        <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#E2C799] transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Question Body */}
      <div className="flex-1 px-5 py-6 flex flex-col max-w-md mx-auto w-full">
        {/* Module subtitle / Instruction */}
        <div className="mb-5">
          <span className="inline-block text-[10px] tracking-widest text-[#D4AF37] uppercase font-serif mb-1">
            QUESTION {currentIndex + 1}
          </span>
          <h2 className="text-xl font-bold text-white tracking-tight leading-snug font-serif">
            {currentQ.question}
          </h2>
          {currentQ.instruction && (
            <p className="text-xs text-neutral-400 mt-1.5 leading-relaxed font-light">
              {currentQ.instruction}
            </p>
          )}
        </div>

        {/* Options List */}
        <div className="flex flex-col gap-2.5 my-auto">
          {currentQ.options.map((option: QuestionOption) => {
            const isSelected = currentAnswerValue === option.key;

            return (
              <button
                key={option.key}
                type="button"
                onClick={() => handleSelectOption(option.key)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 cursor-pointer flex items-center justify-between group ${
                  isSelected
                    ? 'bg-[#1F1D1A] border-[#D4AF37] text-white shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]/50'
                    : 'bg-[#161618] border-neutral-800/90 text-neutral-200 hover:border-neutral-600 hover:bg-[#1A1A1D]'
                }`}
              >
                <div className="flex-1 pr-3">
                  <span className={`text-xs md:text-sm font-medium leading-relaxed block ${
                    isSelected ? 'text-[#F5E6CC]' : 'text-neutral-200'
                  }`}>
                    {option.label}
                  </span>
                </div>

                <div
                  className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                    isSelected
                      ? 'border-[#D4AF37] bg-[#D4AF37] text-neutral-950'
                      : 'border-neutral-600 group-hover:border-neutral-400'
                  }`}
                >
                  {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Question 4 Mandatory Medical Warning Note */}
        {currentQ.warningNote && (
          <div className="mt-4 p-3 rounded-xl bg-amber-950/20 border border-amber-800/40 flex items-start gap-2.5 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-[11px] text-amber-200/90 leading-relaxed font-normal">
              {currentQ.warningNote}
            </p>
          </div>
        )}

        {/* Optional Local Photo Swatch Assist (Completely Optional) */}
        {currentIndex === 2 && (
          <div className="mt-4 p-3 rounded-xl bg-[#161618] border border-neutral-800 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-neutral-300">
              <Camera className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <span className="font-medium block text-[11px]">可选：局部色块拍照辅助</span>
                <span className="text-[10px] text-neutral-500">仅当前设备临时比对 · 绝不上传服务器</span>
              </div>
            </div>

            {selectedPhotoPreview ? (
              <div className="flex items-center gap-2">
                <img
                  src={selectedPhotoPreview}
                  alt="预览"
                  className="w-7 h-7 rounded object-cover border border-[#D4AF37]"
                />
                <button
                  onClick={handleRemovePhoto}
                  className="text-[10px] text-neutral-400 hover:text-white"
                >
                  移除
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowOptionalPhotoModal(true)}
                className="px-2.5 py-1 rounded-md bg-neutral-800 hover:bg-neutral-700 text-[#E2C799] text-[10px] font-medium border border-neutral-700 cursor-pointer"
              >
                添加参考 (可选)
              </button>
            )}
          </div>
        )}
      </div>

      {/* Navigation Footer Controls: Previous / Skip / Next */}
      <div className="px-5 py-3.5 bg-[#141416] border-t border-neutral-800 flex items-center justify-between gap-3 shrink-0">
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 px-3 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>{currentIndex === 0 ? '返回首页' : '上一步'}</span>
        </button>

        <div className="flex items-center gap-2">
          {/* Skip Button: Explicitly supported for ANY question without pressure */}
          <button
            onClick={handleSkip}
            className="px-3 py-2 text-xs font-normal text-neutral-400 hover:text-neutral-200 transition-colors cursor-pointer"
            title="跳过此题，直接进入下一步"
          >
            跳过此题
          </button>

          {/* Next / Finish Button */}
          <button
            onClick={handleNext}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all cursor-pointer ${
              currentAnswerValue
                ? 'bg-gradient-to-r from-[#D4AF37] to-[#C49B5B] text-neutral-950 shadow-md hover:brightness-105'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            <span>{currentIndex === totalQuestions - 1 ? '完成并生成建议' : '下一步'}</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Optional Photo Upload Disclosure Modal */}
      {showOptionalPhotoModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#18181A] border border-neutral-700 rounded-2xl max-w-sm w-full p-5 text-neutral-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#D4AF37]" />
                <h3 className="text-sm font-semibold text-white">局部色块拍照隐私说明</h3>
              </div>
              <button
                onClick={() => setShowOptionalPhotoModal(false)}
                className="text-neutral-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed mb-4">
              此功能纯属可选，不上传任何照片也可以获得完整的彩妆建议。
              <br /><br />
              <strong>隐私说明：</strong>
              照片仅在当前浏览器的内存中临时显示色系参考，绝不上传云端服务器，不留存设备指纹，不建立任何可检索的档案。
            </p>

            <div className="flex flex-col gap-2.5">
              <label className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C49B5B] text-neutral-950 font-semibold text-xs text-center cursor-pointer hover:brightness-105 flex items-center justify-center gap-2">
                <Upload className="w-3.5 h-3.5" />
                <span>选择局部照片（仅本地比对）</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleMockUpload}
                  className="hidden"
                />
              </label>

              <button
                onClick={() => setShowOptionalPhotoModal(false)}
                className="w-full py-2 text-xs text-neutral-400 hover:text-white"
              >
                无需上传，直接跳过
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
