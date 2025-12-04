import * as React from 'react';

export enum SectionId {
  INTRO = 'intro',
  CLASSIFICATION = 'classification',
  METHODOLOGY = 'methodology',
  CASES = 'cases',
  ETHICS = 'ethics',
  CHAT = 'chat'
}

export interface ContentSection {
  id: SectionId;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
}

export interface CaseStudy {
  country: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
}

export interface AiType {
  name: string;
  description: string;
  example: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}