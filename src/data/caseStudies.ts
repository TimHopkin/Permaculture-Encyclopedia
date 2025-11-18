import { CaseStudy } from '@/types/caseStudies'

export const caseStudies: CaseStudy[] = [
  {
    id: 'great-green-wall',
    title: 'The Great Green Wall',
    subtitle: 'Continental-scale desertification reversal across the Sahel',
    location: 'Sahel Region, Africa',
    scale: 'continental',
    climate: 'arid',
    challenge: ['desertification', 'climate-change', 'food-security'],
    description: 'An ambitious initiative spanning 8,000km across the Sahel, transforming degraded land into productive landscapes through community-led restoration.',
    solutions: [
      'Half-moon water harvesting structures',
      'Strategic tree planting programmes',
      'Community-based land restoration',
      'Integrated livestock management',
      'Women-led tree nurseries'
    ],
    impact: [
      'Over 18 million hectares restored',
      '350,000 jobs created',
      'Improved food security for millions',
      'Carbon sequestration at massive scale',
      'Reduced rural migration'
    ],
    techniques: [
      'Water harvesting',
      'Agroforestry',
      'Contour farming',
      'Community mobilisation',
      'Restoration ecology'
    ],
    keyStatistics: [
      { label: 'Distance', value: '8,000km', description: 'Spanning across Africa' },
      { label: 'Countries', value: '20+', description: 'Participating nations' },
      { label: 'Land Restored', value: '18M hectares', description: 'Degraded land brought back to life' },
      { label: 'Jobs Created', value: '350,000', description: 'Local employment opportunities' }
    ],
    beforeAfter: {
      before: 'Barren, degraded landscapes with severe soil erosion and desertification',
      after: 'Thriving ecosystems with restored vegetation, improved soil health, and productive agriculture'
    },
    replicationGuidance: [
      'Start with community engagement and local ownership',
      'Use simple, low-cost water harvesting techniques',
      'Focus on native species for restoration',
      'Create economic incentives for participation',
      'Scale up successful pilot projects systematically'
    ],
    unSdgs: [1, 2, 6, 8, 13, 15],
    featured: true
  },
  {
    id: 'paani-foundation',
    title: 'Paani Foundation Water Cup',
    subtitle: 'State-wide competition transforming villages through watershed management',
    location: 'Maharashtra, India',
    scale: 'regional',
    climate: 'tropical',
    challenge: ['water-scarcity', 'food-security'],
    description: 'The world\'s biggest permaculture project using competition to motivate rapid village transformation through watershed restoration.',
    solutions: [
      'Village-to-village competition model',
      'Comprehensive watershed planning',
      'Community labour mobilisation',
      'Traditional water harvesting revival',
      'Integrated farming systems'
    ],
    impact: [
      'Over 1,000 villages transformed',
      'Dramatic increase in groundwater levels',
      'Improved agricultural productivity',
      'Enhanced community cooperation',
      'Model replicated across India'
    ],
    techniques: [
      'Watershed management',
      'Check dams',
      'Contour bunding',
      'Social permaculture',
      'Community organisation'
    ],
    keyStatistics: [
      { label: 'Villages', value: '1,000+', description: 'Communities transformed' },
      { label: 'Participants', value: '1M+', description: 'People directly involved' },
      { label: 'Water Increase', value: '300%', description: 'Average groundwater level rise' },
      { label: 'Timeline', value: '45 days', description: 'Competition duration per round' }
    ],
    replicationGuidance: [
      'Create competitive framework between communities',
      'Provide clear guidelines and technical support',
      'Use social media and public recognition',
      'Focus on measurable water-related outcomes',
      'Build on existing social structures'
    ],
    unSdgs: [1, 2, 3, 6, 11, 17],
    featured: true
  },
  {
    id: 'hiware-bazar',
    title: 'Hiware Bazar Village Transformation',
    subtitle: 'From drought-prone to model village through watershed restoration',
    location: 'Maharashtra, India',
    scale: 'village',
    climate: 'tropical',
    challenge: ['water-scarcity', 'food-security'],
    description: 'A remarkable transformation of a drought-prone village into a model of sustainable development through comprehensive watershed management.',
    solutions: [
      'Complete watershed restoration',
      'Strict water conservation policies',
      'Organic farming transition',
      'Forest regeneration programmes',
      'Community-driven governance'
    ],
    impact: [
      'Per capita income increased 30-fold',
      'Zero migration to cities',
      'Complete water security achieved',
      'Model village status',
      'Template for 5,000+ villages'
    ],
    techniques: [
      'Contour bunding',
      'Check dams',
      'Forest restoration',
      'Water budgeting',
      'Participatory governance'
    ],
    keyStatistics: [
      { label: 'Population', value: '1,200', description: 'Village residents' },
      { label: 'Income Increase', value: '30x', description: 'Per capita growth' },
      { label: 'Water Security', value: '100%', description: 'Year-round availability' },
      { label: 'Forest Cover', value: '40%', description: 'Land area restored' }
    ],
    replicationGuidance: [
      'Achieve complete community consensus',
      'Implement strict water conservation rules',
      'Start with watershed boundary planning',
      'Focus on indigenous species restoration',
      'Create transparent benefit-sharing systems'
    ],
    unSdgs: [1, 2, 6, 8, 11, 15],
    featured: true
  },
  {
    id: 'dhaka-oasis',
    title: 'Desert Restoration, Egypt',
    subtitle: 'Creating productive agriculture in extreme desert conditions',
    location: 'Dhaka Oasis, Egypt',
    scale: 'regional',
    climate: 'arid',
    challenge: ['water-scarcity', 'desertification', 'food-security'],
    description: 'Transforming barren desert into productive agricultural land using innovative water management and desert farming techniques.',
    solutions: [
      'Advanced drip irrigation systems',
      'Desert soil improvement techniques',
      'Salt-tolerant crop varieties',
      'Solar-powered water pumping',
      'Shade structure farming'
    ],
    impact: [
      'Productive agriculture in harsh desert',
      'Local food security enhanced',
      'Water efficiency maximised',
      'Renewable energy integration',
      'Sustainable desert farming model'
    ],
    techniques: [
      'Dryland farming',
      'Precision irrigation',
      'Salt management',
      'Solar technology',
      'Microclimate creation'
    ],
    keyStatistics: [
      { label: 'Rainfall', value: '0mm', description: 'Annual precipitation for 13+ years' },
      { label: 'Water Efficiency', value: '90%', description: 'Reduction in water use' },
      { label: 'Crop Yields', value: '200%', description: 'Above regional average' },
      { label: 'Energy Source', value: '100%', description: 'Solar powered' }
    ],
    replicationGuidance: [
      'Invest in water-efficient irrigation',
      'Choose appropriate drought-tolerant crops',
      'Create protective microclimates',
      'Integrate renewable energy systems',
      'Monitor soil salinity continuously'
    ],
    unSdgs: [2, 6, 7, 13, 15],
    featured: true
  },
  {
    id: 'cuban-urban-agriculture',
    title: 'Cuban Urban Agriculture',
    subtitle: 'National urban food system during economic crisis',
    location: 'Cuba',
    scale: 'national',
    climate: 'tropical',
    challenge: ['economic-crisis', 'food-security'],
    description: 'A nationwide urban farming revolution that achieved food security during economic crisis through intensive organic agriculture in cities.',
    solutions: [
      'Intensive urban farming plots',
      'Biological pest control systems',
      'Organic composting programmes',
      'Rooftop and vertical farming',
      'Community garden networks'
    ],
    impact: [
      'Urban food independence achieved',
      'Reduced dependency on imports',
      'Healthier urban communities',
      'Green city transformation',
      'Model for food crisis response'
    ],
    techniques: [
      'Urban farming',
      'Biological pest control',
      'Composting',
      'Vertical growing',
      'Community organisation'
    ],
    keyStatistics: [
      { label: 'Urban Plots', value: '200,000', description: 'Active farming sites' },
      { label: 'Food Production', value: '1.5M tonnes', description: 'Annual urban harvest' },
      { label: 'Population Served', value: '11M', description: 'People benefiting' },
      { label: 'Pesticide Use', value: '0%', description: 'Fully organic system' }
    ],
    replicationGuidance: [
      'Utilise all available urban spaces',
      'Focus on high-yield, nutritious crops',
      'Develop local composting systems',
      'Train communities in organic methods',
      'Create distribution networks'
    ],
    unSdgs: [1, 2, 3, 11, 12, 15],
    featured: true
  },
  {
    id: 'mexican-traditional-agriculture',
    title: 'Mexican Traditional Agriculture Revival',
    subtitle: 'Preserving indigenous farming wisdom while addressing modern challenges',
    location: 'Various regions, Mexico',
    scale: 'regional',
    climate: 'arid',
    challenge: ['cultural-preservation', 'water-scarcity', 'food-security'],
    description: 'Reviving traditional indigenous farming systems that combine ancient wisdom with modern applications for sustainable agriculture.',
    solutions: [
      'Traditional terracing systems',
      'Indigenous crop varieties preservation',
      'Ancient water management techniques',
      'Polyculture farming systems',
      'Cultural knowledge transmission'
    ],
    impact: [
      'Indigenous food systems preserved',
      'Cultural heritage maintained',
      'Biodiversity conservation achieved',
      'Climate adaptation enhanced',
      'Youth engagement in agriculture'
    ],
    techniques: [
      'Traditional terracing',
      'Indigenous plant guilds',
      'Ancient irrigation',
      'Polyculture systems',
      'Cultural preservation'
    ],
    keyStatistics: [
      { label: 'Crop Varieties', value: '200+', description: 'Indigenous varieties preserved' },
      { label: 'Communities', value: '150', description: 'Villages participating' },
      { label: 'Age of Techniques', value: '1000+ years', description: 'Traditional knowledge applied' },
      { label: 'Water Efficiency', value: '60%', description: 'Better than modern systems' }
    ],
    replicationGuidance: [
      'Document and preserve traditional knowledge',
      'Engage with indigenous communities respectfully',
      'Adapt ancient techniques to modern contexts',
      'Focus on native species and varieties',
      'Create intergenerational learning programmes'
    ],
    unSdgs: [2, 4, 6, 11, 15, 16],
    featured: true
  },
  {
    id: 'arizona-desert-agriculture',
    title: 'Arizona Desert Agriculture',
    subtitle: 'Productive food systems in extreme arid conditions',
    location: 'Arizona, USA',
    scale: 'homestead',
    climate: 'arid',
    challenge: ['water-scarcity', 'climate-change'],
    description: 'Demonstrating how permaculture principles can create productive food systems even in extreme desert conditions through innovative water harvesting.',
    solutions: [
      'Rainwater harvesting systems',
      'Greywater recycling networks',
      'Desert-adapted food forests',
      'Swales and berms design',
      'Native plant integration'
    ],
    impact: [
      'Productive desert agriculture achieved',
      'Water self-sufficiency reached',
      'Local food security enhanced',
      'Desert ecosystem restoration',
      'Model for arid region farming'
    ],
    techniques: [
      'Rainwater harvesting',
      'Greywater systems',
      'Swales and berms',
      'Desert polycultures',
      'Microclimate creation'
    ],
    keyStatistics: [
      { label: 'Annual Rainfall', value: '200mm', description: 'Extremely low precipitation' },
      { label: 'Water Harvested', value: '80%', description: 'Of total water needs met' },
      { label: 'Food Production', value: '400kg/year', description: 'Per household average' },
      { label: 'Temperature Range', value: '50°C', description: 'Extreme daily variation' }
    ],
    replicationGuidance: [
      'Maximise rainwater collection from all surfaces',
      'Design greywater systems for all uses',
      'Create microclimates for sensitive plants',
      'Use native plants as system foundation',
      'Plan for extreme weather events'
    ],
    unSdgs: [2, 6, 7, 12, 13, 15],
    featured: true
  },
  {
    id: 'oregon-permaculture-farm',
    title: 'Oregon Permaculture Farm',
    subtitle: 'Educational demonstration of temperate climate food forest systems',
    location: 'Oregon, USA',
    scale: 'homestead',
    climate: 'temperate',
    challenge: ['food-security', 'climate-change'],
    description: 'A comprehensive educational site demonstrating integrated permaculture design in temperate climates through food forest systems.',
    solutions: [
      'Multi-layered food forest design',
      'Integrated animal systems',
      'Renewable energy integration',
      'Natural building techniques',
      'Educational programme development'
    ],
    impact: [
      'Thousands of students trained',
      'Sustainable farming model created',
      'Research and development hub',
      'Community education resource',
      'Template for temperate systems'
    ],
    techniques: [
      'Food forest design',
      'Stacking functions',
      'Perennial systems',
      'Integrated pest management',
      'Educational design'
    ],
    keyStatistics: [
      { label: 'Students Trained', value: '5,000+', description: 'Annual educational reach' },
      { label: 'Food Forest Layers', value: '7', description: 'Complete ecosystem design' },
      { label: 'Energy Independence', value: '90%', description: 'Renewable energy use' },
      { label: 'Biodiversity Index', value: '300+', description: 'Species on site' }
    ],
    replicationGuidance: [
      'Design for multiple ecosystem layers',
      'Integrate education from the beginning',
      'Focus on perennial food systems',
      'Include renewable energy planning',
      'Create demonstration areas for visitors'
    ],
    unSdgs: [2, 4, 7, 12, 13, 15],
    featured: true
  }
]

export const filterOptions = {
  climate: ['arid', 'tropical', 'temperate'] as const,
  scale: ['homestead', 'village', 'regional', 'national', 'continental'] as const,
  challenge: [
    'water-scarcity',
    'desertification', 
    'food-security',
    'climate-change',
    'economic-crisis',
    'cultural-preservation'
  ] as const
}

export const challengeLabels = {
  'water-scarcity': 'Water Scarcity',
  'desertification': 'Desertification',
  'food-security': 'Food Security',
  'climate-change': 'Climate Change',
  'economic-crisis': 'Economic Crisis',
  'cultural-preservation': 'Cultural Preservation'
}

export const scaleLabels = {
  'homestead': 'Homestead',
  'village': 'Village',
  'regional': 'Regional',
  'national': 'National',
  'continental': 'Continental'
}

export const climateLabels = {
  'arid': 'Arid',
  'tropical': 'Tropical',
  'temperate': 'Temperate'
}