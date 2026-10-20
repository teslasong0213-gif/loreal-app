/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SearchEntryCard } from './components/SearchEntryCard';
import { MiniProgramHeader } from './components/MiniProgramHeader';
import { HomePage } from './components/HomePage';
import { QuestionnaireModule } from './components/QuestionnaireModule';
import { AIAnalysisLoading } from './components/AIAnalysisLoading';
import { ResultPage } from './components/ResultPage';
import { SupportResourcesPage } from './components/SupportResourcesPage';
import { DisguisePage } from './components/DisguisePage';
import { PrivacyModal } from './components/PrivacyModal';
import { SurveyAnswers } from './types/beauty';
import { Smartphone, Monitor, RotateCcw, ShieldCheck, Sparkles, Search } from 'lucide-react';

export type AppView = 
  | 'search_entry'
  | 'mini_home'
  | 'questionnaire'
  | 'ai_loading'
  | 'results'
  | 'support';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<AppView>('search_entry');
  const [isDisguised, setIsDisguised] = useState(false);
  const [previousViewBeforeDisguise, setPreviousViewBeforeDisguise] = useState<AppView>('mini_home');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  
  // Display Mode: 'phone' (simulated iPhone/mini-program frame) or 'full' (responsive)
  const [displayMode, setDisplayMode] = useState<'phone' | 'full'>('phone');

  // Survey Answers in memory (Pure client-side, zero server tracking)
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswers>({
    skinType: 'oily_combo',
    makeupFinish: 'color_correct',
    markDuration: '1_to_3_days',
    skinCondition: 'color_only',
    causeReason: 'household_collision',
    hasOptionalPhoto: false,
    uploadedPhotoUrl: null,
  });

  const updateAnswers = (updated: Partial<SurveyAnswers>) => {
    setSurveyAnswers((prev) => ({ ...prev, ...updated }));
  };

  // Safe 1-Click Camouflage (Disguise) handlers
  const handleTriggerDisguise = () => {
    setPreviousViewBeforeDisguise(currentView);
    setIsDisguised(true);
  };

  const handleResumeFromDisguise = () => {
    setIsDisguised(false);
    setCurrentView(previousViewBeforeDisguise);
  };

  // Restart questionnaire from clean slate
  const handleRestart = () => {
    setCurrentView('questionnaire');
  };

  // Determine header title
  const getHeaderTitle = () => {
    if (isDisguised) return '奢金丝绒系列';
    switch (currentView) {
      case 'mini_home':
        return 'AI美妆助手';
      case 'questionnaire':
        return '递进式肤况评估';
      case 'ai_loading':
        return '算法匹配中';
      case 'results':
        return '专属美妆方案';
      case 'support':
        return '品牌关怀与支持';
      default:
        return undefined;
    }
  };

  return (
    <div className="min-h-screen bg-[#111113] text-neutral-100 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-black">
      {/* Top Demo Toolbar (4A Agency Prototype Navigation Bar) */}
      <nav className="bg-[#18181C] border-b border-neutral-800 px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs z-50">
        <div className="flex items-center gap-2.5">
          <div className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="font-serif tracking-widest text-[#E2C799] font-bold text-xs uppercase">
            L'ORÉAL PARIS
          </span>
          <span className="text-neutral-500">|</span>
          <span className="text-neutral-300 font-medium hidden sm:inline">
            AI美妆助手 · 女性关怀原型
          </span>
        </div>

        {/* Quick Stage Shortcuts */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-[11px]">
          <button
            onClick={() => { setIsDisguised(false); setCurrentView('search_entry'); }}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer flex items-center gap-1 ${
              currentView === 'search_entry' && !isDisguised
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'bg-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            <Search className="w-3 h-3" />
            <span>搜索入口</span>
          </button>

          <button
            onClick={() => { setIsDisguised(false); setCurrentView('mini_home'); }}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentView === 'mini_home' && !isDisguised
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'bg-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            首页
          </button>

          <button
            onClick={() => { setIsDisguised(false); setCurrentView('questionnaire'); }}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentView === 'questionnaire' && !isDisguised
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'bg-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            递进问卷
          </button>

          <button
            onClick={() => { setIsDisguised(false); setCurrentView('results'); }}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentView === 'results' && !isDisguised
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'bg-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            美妆方案
          </button>

          <button
            onClick={() => { setIsDisguised(false); setCurrentView('support'); }}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              currentView === 'support' && !isDisguised
                ? 'bg-[#D4AF37] text-black font-semibold'
                : 'bg-neutral-800 text-neutral-300 hover:text-white'
            }`}
          >
            支持资源
          </button>

          <button
            onClick={isDisguised ? handleResumeFromDisguise : handleTriggerDisguise}
            className={`px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
              isDisguised
                ? 'bg-rose-500 text-white font-semibold animate-pulse'
                : 'bg-neutral-800 text-neutral-300 hover:text-white'
            }`}
            title="一键安全伪装/速览口红"
          >
            {isDisguised ? '正在口红伪装中 (点击恢复)' : '速切口红'}
          </button>
        </div>

        {/* Viewport switch & Privacy Policy */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPrivacyModalOpen(true)}
            className="flex items-center gap-1 text-[11px] text-neutral-400 hover:text-[#E2C799] transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>隐私保护</span>
          </button>

          <div className="w-[1px] h-3 bg-neutral-700 mx-1" />

          <button
            onClick={() => setDisplayMode(displayMode === 'phone' ? 'full' : 'phone')}
            className="flex items-center gap-1 px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[11px] cursor-pointer"
            title="切换真机框架与全宽模式"
          >
            {displayMode === 'phone' ? (
              <>
                <Monitor className="w-3 h-3" />
                <span>全屏模式</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3 h-3" />
                <span>真机模型</span>
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Main Container Area */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        {displayMode === 'phone' ? (
          /* Realistic Smartphone Showcase Shell (Cannes Lions / Agency Design Standard) */
          <div className="w-full max-w-[410px] h-[844px] max-h-[92vh] bg-black rounded-[48px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(212,175,55,0.15)] border-[5px] border-[#2C2C2E] flex flex-col relative overflow-hidden ring-1 ring-white/10">
            {/* Dynamic Island / Camera Notch */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-50 flex items-center justify-end pr-2 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] border border-neutral-800" />
            </div>

            {/* Simulated Phone Status Bar */}
            <div className="h-6 bg-[#121212] flex items-center justify-between px-6 text-[10px] text-neutral-400 font-mono select-none shrink-0 pt-1 z-40">
              <span>9:41</span>
              <div className="flex items-center gap-1.5">
                <span>5G</span>
                <div className="w-4 h-2 border border-neutral-400 rounded-sm p-0.5 flex items-center">
                  <div className="w-full h-full bg-neutral-300 rounded-xs" />
                </div>
              </div>
            </div>

            {/* Mini Program Viewport with rounded corners */}
            <div className="flex-1 bg-[#0F0F10] rounded-[36px] overflow-hidden flex flex-col relative">
              {/* If on Search Entry page, show Xiaohongshu simulated feed; otherwise show Mini-Program view */}
              {currentView === 'search_entry' && !isDisguised ? (
                <div className="flex-1 overflow-y-auto">
                  <SearchEntryCard onEnterApp={() => setCurrentView('mini_home')} />
                </div>
              ) : isDisguised ? (
                <DisguisePage onResume={handleResumeFromDisguise} />
              ) : (
                <div className="flex-1 flex flex-col overflow-hidden">
                  <MiniProgramHeader
                    title={getHeaderTitle()}
                    showBack={currentView !== 'mini_home'}
                    onBack={() => {
                      if (currentView === 'results') setCurrentView('mini_home');
                      else if (currentView === 'support') setCurrentView('results');
                      else if (currentView === 'questionnaire') setCurrentView('mini_home');
                      else setCurrentView('mini_home');
                    }}
                    onExit={() => setCurrentView('search_entry')}
                    onQuickDisguise={handleTriggerDisguise}
                    isDisguised={isDisguised}
                  />

                  {currentView === 'mini_home' && (
                    <HomePage
                      onStartSurvey={() => setCurrentView('questionnaire')}
                      onBrowseDirectly={() => setCurrentView('results')}
                      onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
                    />
                  )}

                  {currentView === 'questionnaire' && (
                    <QuestionnaireModule
                      answers={surveyAnswers}
                      onUpdateAnswers={updateAnswers}
                      onComplete={() => setCurrentView('ai_loading')}
                      onExit={() => setCurrentView('mini_home')}
                    />
                  )}

                  {currentView === 'ai_loading' && (
                    <AIAnalysisLoading
                      onComplete={() => setCurrentView('results')}
                    />
                  )}

                  {currentView === 'results' && (
                    <ResultPage
                      answers={surveyAnswers}
                      onOpenSupport={() => setCurrentView('support')}
                      onRestart={handleRestart}
                      onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
                    />
                  )}

                  {currentView === 'support' && (
                    <SupportResourcesPage
                      onBackToResults={() => setCurrentView('results')}
                      onBackToHome={() => setCurrentView('mini_home')}
                      onQuickDisguise={handleTriggerDisguise}
                    />
                  )}
                </div>
              )}
            </div>

            {/* Simulated iPhone Home Indicator Bar */}
            <div className="h-4 bg-[#121212] flex items-center justify-center shrink-0 z-40">
              <div className="w-32 h-1 bg-neutral-600 rounded-full" />
            </div>
          </div>
        ) : (
          /* Responsive Fullscreen Mode */
          <div className="w-full max-w-2xl h-[90vh] bg-[#0F0F10] rounded-2xl border border-neutral-800 shadow-2xl flex flex-col overflow-hidden">
            {currentView === 'search_entry' && !isDisguised ? (
              <div className="flex-1 overflow-y-auto">
                <SearchEntryCard onEnterApp={() => setCurrentView('mini_home')} />
              </div>
            ) : isDisguised ? (
              <DisguisePage onResume={handleResumeFromDisguise} />
            ) : (
              <div className="flex-1 flex flex-col overflow-hidden">
                <MiniProgramHeader
                  title={getHeaderTitle()}
                  showBack={currentView !== 'mini_home'}
                  onBack={() => {
                    if (currentView === 'results') setCurrentView('mini_home');
                    else if (currentView === 'support') setCurrentView('results');
                    else if (currentView === 'questionnaire') setCurrentView('mini_home');
                    else setCurrentView('mini_home');
                  }}
                  onExit={() => setCurrentView('search_entry')}
                  onQuickDisguise={handleTriggerDisguise}
                  isDisguised={isDisguised}
                />

                {currentView === 'mini_home' && (
                  <HomePage
                    onStartSurvey={() => setCurrentView('questionnaire')}
                    onBrowseDirectly={() => setCurrentView('results')}
                    onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
                  />
                )}

                {currentView === 'questionnaire' && (
                  <QuestionnaireModule
                    answers={surveyAnswers}
                    onUpdateAnswers={updateAnswers}
                    onComplete={() => setCurrentView('ai_loading')}
                    onExit={() => setCurrentView('mini_home')}
                  />
                )}

                {currentView === 'ai_loading' && (
                  <AIAnalysisLoading
                    onComplete={() => setCurrentView('results')}
                  />
                )}

                {currentView === 'results' && (
                  <ResultPage
                    answers={surveyAnswers}
                    onOpenSupport={() => setCurrentView('support')}
                    onRestart={handleRestart}
                    onOpenPrivacy={() => setIsPrivacyModalOpen(true)}
                  />
                )}

                {currentView === 'support' && (
                  <SupportResourcesPage
                    onBackToResults={() => setCurrentView('results')}
                    onBackToHome={() => setCurrentView('mini_home')}
                    onQuickDisguise={handleTriggerDisguise}
                  />
                )}
              </div>
            )}
          </div>
        )}
      </main>

      {/* Privacy Policy Disclosure Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
