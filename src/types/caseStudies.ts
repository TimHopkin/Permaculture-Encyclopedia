export type ClimateType = 'arid' | 'tropical' | 'temperate'
export type ScaleType = 'homestead' | 'village' | 'regional' | 'national' | 'continental'
export type ChallengeType = 'water-scarcity' | 'desertification' | 'food-security' | 'climate-change' | 'economic-crisis' | 'cultural-preservation'

export interface CaseStudy {
  id: string
  title: string
  subtitle: string
  location: string
  scale: ScaleType
  climate: ClimateType
  challenge: ChallengeType[]
  description: string
  solutions: string[]
  impact: string[]
  techniques: string[]
  keyStatistics: {
    label: string
    value: string
    description?: string
  }[]
  beforeAfter?: {
    before: string
    after: string
  }
  replicationGuidance: string[]
  unSdgs: number[]
  videoUrl?: string
  heroImage?: string
  featured?: boolean
}

export interface FilterState {
  climate: ClimateType[]
  scale: ScaleType[]
  challenge: ChallengeType[]
  search: string
}