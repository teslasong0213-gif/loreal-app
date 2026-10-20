/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { SUPPORT_RESOURCES } from '../data/mockData';
import { 
  ShieldCheck, 
  Phone, 
  Clock, 
  ChevronLeft, 
  EyeOff, 
  Lock, 
  HelpCircle, 
  AlertTriangle,
  FileText,
  Heart,
  CheckCircle2,
  ExternalLink,
  Shield
} from 'lucide-react';

interface SupportResourcesPageProps {
  onBackToResults: () => void;
  onBackToHome: () => void;
  onQuickDisguise: () => void;
}

export const SupportResourcesPage: React.FC<SupportResourcesPageProps> = ({
  onBackToResults,
  onBackToHome,
  onQuickDisguise,
}) => {
  const [activeTab, setActiveTab] = useState<'safety' | 'legal_medical' | 'privacy'>('safety');

  const filteredResources = SUPPORT_RESOURCES.filter(
    (item) => item.category === activeTab
  );

  return (
    <div className="flex-1 flex flex-col bg-[#0E0E10] text-[#E8E8E8] overflow-y-auto font-sans pb-12">
      {/* Top Reassurance & Title Banner */}
      <div className="bg-[#141417] px-5 pt-4 pb-4 border-b border-neutral-800">
        <div className="flex items-center justify-between mb-3">
          <button
            onClick={onBackToResults}
            className="flex items-center text-xs text-[#E2C799] hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 mr-0.5" />
            <span>返回美妆方案</span>
          </button>

          <button
            onClick={onQuickDisguise}
            className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/15 text-xs text-[#E2C799] border border-white/15 transition-all cursor-pointer"
            title="一键切换至口红试色页面"
          >
            <EyeOff className="w-3.5 h-3.5" />
            <span>快速切换</span>
          </button>
        </div>

        <h1 className="text-xl font-bold text-white font-serif tracking-tight mb-1.5">
          按照自己的节奏，了解可用的支持。
        </h1>
        <p className="text-xs text-neutral-400 font-light leading-relaxed">
          每一个选择都取决于你自己。这里提供经过专业核实的公益指引与援助资源，不设前提、不施加压力、不收集任何个人身份。
        </p>

        {/* 3 Nav Tabs */}
        <div className="flex items-center gap-1.5 mt-4 p-1 bg-[#1A1A1E] rounded-xl border border-neutral-800 text-xs">
          <button
            onClick={() => setActiveTab('safety')}
            className={`flex-1 py-2 text-center rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'safety'
                ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            个人安全信息
          </button>
          <button
            onClick={() => setActiveTab('legal_medical')}
            className={`flex-1 py-2 text-center rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'legal_medical'
                ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            医疗·心理·法律
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`flex-1 py-2 text-center rounded-lg font-medium transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-neutral-800 text-white shadow-sm border border-neutral-700/80'
                : 'text-neutral-400 hover:text-neutral-200'
            }`}
          >
            个人隐私保护
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-5 py-5 flex flex-col gap-4 max-w-md mx-auto w-full">
        {/* Core Principles Card */}
        <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800/80 flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-300 leading-relaxed">
            <strong className="text-[#E2C799] block mb-0.5 font-semibold">
              自主、隐秘与尊重承诺：
            </strong>
            我们不记录姓名、不询问住址、不自动报警、不联系任何第三方。你随时可以在任意时刻关闭页面或返回美妆助手。
          </div>
        </div>

        {/* Dynamic Resource Cards */}
        <div className="flex flex-col gap-4">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-[#151518] rounded-2xl p-4 border border-neutral-800 flex flex-col gap-3 shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] tracking-wider uppercase text-[#D4AF37] font-serif block">
                    {res.organization}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-0.5 font-serif">
                    {res.title}
                  </h3>
                </div>

                {res.isVerified && (
                  <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-800/50 flex items-center gap-1 shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    已官方核实
                  </span>
                )}
              </div>

              {/* Phone hotline if applicable */}
              {res.phone && (
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#1A1A1E] border border-neutral-800">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37]/15 flex items-center justify-center text-[#E2C799]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-white tracking-wider font-mono">
                        {res.phone}
                      </span>
                      {res.hours && (
                        <span className="block text-[10px] text-neutral-400 mt-0.5">
                          {res.hours}
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    href={`tel:${res.phone}`}
                    className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-neutral-950 font-bold text-xs hover:bg-[#E2C799] transition-colors"
                  >
                    拨打热线
                  </a>
                </div>
              )}

              <p className="text-xs text-neutral-300 leading-relaxed font-light">
                {res.description}
              </p>

              {/* Action guidance bullet points */}
              {res.actionGuide && res.actionGuide.length > 0 && (
                <div className="bg-[#101012] rounded-xl p-3 border border-neutral-800/80 flex flex-col gap-2">
                  <span className="text-[11px] font-semibold text-[#E2C799]">
                    实用建议与步骤：
                  </span>
                  <ul className="flex flex-col gap-1.5 text-xs text-neutral-300">
                    {res.actionGuide.map((action, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed text-[11px]">
                        <span className="text-[#D4AF37] font-mono text-[10px] mt-0.5">
                          {i + 1}.
                        </span>
                        <span className="flex-1">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col gap-2.5 mt-2">
          <button
            onClick={onBackToResults}
            className="w-full py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-xs tracking-wide transition-colors cursor-pointer text-center"
          >
            返回我的美妆建议
          </button>

          <button
            onClick={onBackToHome}
            className="w-full py-2.5 px-4 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer text-center"
          >
            回到美妆助手首页
          </button>
        </div>
      </div>
    </div>
  );
};
