/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type SkinType = 'dry' | 'oily_combo' | 'sensitive' | 'normal' | 'unknown';
export type MakeupFinish = 'sheer_natural' | 'full_coverage' | 'color_correct' | 'other';
export type MarkDuration = 'within_24h' | '1_to_3_days' | '4_to_7_days' | 'over_week' | 'unsure';
export type SkinCondition = 'color_only' | 'mild_swelling' | 'abrasion_broken' | 'dry_flaky' | 'other';
export type CauseReason = 
  | 'sun_outdoor' 
  | 'aesthetic_treatment' 
  | 'daily_bump' 
  | 'household_collision' 
  | 'interpersonal_contact'  // Option E: 与他人发生碰撞或肢体接触造成的意外
  | 'prefer_not_to_say'     // Option F: 原因暂不便透露
  | 'other_unsure';

export interface SurveyAnswers {
  skinType?: SkinType;
  makeupFinish?: MakeupFinish;
  markDuration?: MarkDuration;
  skinCondition?: SkinCondition;
  causeReason?: CauseReason;
  hasOptionalPhoto?: boolean;
  uploadedPhotoUrl?: string | null;
}

export interface QuestionOption {
  key: string;
  label: string;
  description?: string;
  isSensitiveKey?: boolean;
}

export interface QuestionItem {
  id: number;
  moduleIndex: number;
  moduleName: string;
  question: string;
  instruction?: string;
  warningNote?: string;
  field: keyof SurveyAnswers;
  options: QuestionOption[];
}

export interface ProductItem {
  id: string;
  brand: string;
  name: string;
  subName: string;
  price: string;
  shade: string;
  image: string;
  features: string[];
  recommendationReason: string;
  suitableFor: string;
}

export interface ColorGuideRule {
  targetTone: string;
  complementaryColor: string;
  hexCode: string;
  complementaryHex: string;
  technique: string;
  doAndDont: string;
}

export interface SupportResource {
  id: string;
  category: 'safety' | 'legal_medical' | 'privacy';
  title: string;
  organization: string;
  phone?: string;
  hours?: string;
  description: string;
  actionGuide: string[];
  isVerified: boolean;
}
