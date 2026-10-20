/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, X, Lock, CheckCircle2, AlertCircle, Trash2, Smartphone } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#18181B] border border-neutral-700/80 rounded-2xl max-w-md w-full max-h-[85vh] flex flex-col overflow-hidden text-neutral-200 shadow-2xl font-sans">
        {/* Header */}
        <div className="p-4 border-b border-neutral-800 flex items-center justify-between bg-[#141416]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="text-sm font-bold text-white font-serif">
              巴黎欧莱雅隐私与安全保护声明
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors cursor-pointer p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto flex flex-col gap-4 text-xs leading-relaxed text-neutral-300">
          <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[11px] text-neutral-300 leading-normal">
            <span className="text-[#E2C799] font-semibold block mb-1">
              核心原则：尊重、自主、不留痕迹
            </span>
            本美妆科技项目不仅致力于探索更适合女性的底妆方案，同时秉持严苛的伦理与数据隐私标准。我们深知在某些敏感场景下，保护使用者的行踪与隐私关乎人身安全。
          </div>

          <div className="flex flex-col gap-2.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#D4AF37]" />
              六项数据零留存准则
            </h4>

            <ul className="flex flex-col gap-2 text-[11px] text-neutral-300">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>纯端侧内存运行：</strong>问卷的所有选择仅存在于您当前手机浏览器的易失性临时内存中，刷新页面即刻销毁。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>不上传任何照片：</strong>即使您自愿选择局部拍照比对，图像亦仅在手机端渲染，绝不向云端服务器回传。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>不打敏感商业标签：</strong>绝不会将您的受伤、碰撞选项同步至广告推荐平台，绝不产生二次定向营销。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>不自动报警或联络第三方：</strong>尊重使用者的自主权与节奏，绝不在未经明确授权时触发任何外部通报。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>无真实身份绑定：</strong>使用过程不要求填写手机号、微信号、姓名、真实住址或伴侣信息。</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>一键安全伪装：</strong>顶栏常设「快速切换」按钮，遇到突发情况可瞬间一键切至纯口红展示页面。</span>
              </li>
            </ul>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex flex-col gap-2">
            <h4 className="text-xs font-semibold text-white flex items-center gap-1.5">
              <Smartphone className="w-3.5 h-3.5 text-[#E2C799]" />
              设备使用痕迹自主清除建议
            </h4>
            <p className="text-[11px] text-neutral-400 leading-relaxed">
              如果您与他人共用手机或设备存在被查验风险：
            </p>
            <ol className="text-[11px] text-neutral-300 flex flex-col gap-1 list-decimal pl-4">
              <li>微信内：在「微信 - 发现 - 小程序」列表中，左滑或长按本项目，选择「删除」即可移除最近访问列表。</li>
              <li>浏览器内：建议使用 Safari 或 Chrome 的「无痕浏览 / 隐身窗口」访问，关闭窗口即可清除历史缓存。</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-neutral-800 bg-[#141416] flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-xs transition-colors cursor-pointer"
          >
            我已知晓并关闭
          </button>
        </div>
      </div>
    </div>
  );
};
