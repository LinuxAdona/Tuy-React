export interface SearchItem {
  type: 'page' | 'document' | 'official' | 'announcement' | 'content';
  title: string;
  path?: string;
  keywords: string[];
}

export const searchableContent: SearchItem[] = [
  // Main Pages
  { 
    type: 'page', 
    title: 'Home', 
    path: '/', 
    keywords: ['home', 'main', 'index', 'homepage'] 
  },
  { 
    type: 'page', 
    title: 'Gallery', 
    path: '/gallery', 
    keywords: ['gallery', 'photos', 'images', 'pictures'] 
  },
  { 
    type: 'page', 
    title: 'Contact Us', 
    path: '/contact', 
    keywords: ['contact', 'phone', 'email', 'address', 'reach'] 
  },
  
  // Profile Submenu (4 items)
  { 
    type: 'page', 
    title: 'History', 
    path: '/profile/history', 
    keywords: ['history', 'background', 'past', 'heritage', 'profile'] 
  },
  { 
    type: 'page', 
    title: 'Demography', 
    path: '/profile/demography', 
    keywords: ['demography', 'population', 'demographics', 'people', 'profile'] 
  },
  { 
    type: 'page', 
    title: 'Maps', 
    path: '/profile/maps', 
    keywords: ['maps', 'location', 'geography', 'navigation', 'profile'] 
  },
  { 
    type: 'page', 
    title: 'Socio-Economic Profile', 
    path: '/profile/socio-economic', 
    keywords: ['socio-economic', 'economy', 'social', 'economic', 'profile'] 
  },
  
  // Government Submenu (3 items)
  { 
    type: 'official', 
    title: 'Local Officials', 
    path: '/government/officials', 
    keywords: ['officials', 'mayor', 'councilors', 'government'] 
  },
  { 
    type: 'official', 
    title: 'Department Heads', 
    path: '/government/department-heads', 
    keywords: ['department', 'heads', 'departments', 'directors', 'government'] 
  },
  { 
    type: 'official', 
    title: 'Barangay Officials', 
    path: '/government/barangay-officials', 
    keywords: ['barangay', 'officials', 'captains', 'village', 'government'] 
  },
  
  // Transparencies Submenu (4 items)
  { 
    type: 'document', 
    title: 'Accomplishment Reports', 
    path: '/transparencies/accomplishment-reports', 
    keywords: ['accomplishment', 'reports', 'achievements', 'progress', 'transparency'] 
  },
  { 
    type: 'document', 
    title: 'Citizens Charter', 
    path: '/transparencies/citizens-charter', 
    keywords: ['citizens', 'charter', 'services', 'rights', 'transparency'] 
  },
  { 
    type: 'document', 
    title: 'Financial Statements', 
    path: '/transparencies/financial-statements', 
    keywords: ['financial', 'statements', 'budget', 'finance', 'money', 'transparency'] 
  },
  { 
    type: 'document', 
    title: 'Invitation to Bid', 
    path: '/transparencies/invitation-to-bid', 
    keywords: ['invitation', 'bid', 'procurement', 'tender', 'transparency'] 
  },
  
  // Downloadables Submenu (3 items)
  { 
    type: 'document', 
    title: 'Forms', 
    path: '/downloadables/forms', 
    keywords: ['forms', 'applications', 'documents', 'download'] 
  },
  { 
    type: 'document', 
    title: 'Resolutions', 
    path: '/downloadables/resolutions', 
    keywords: ['resolutions', 'decisions', 'council', 'download'] 
  },
  { 
    type: 'document', 
    title: 'Ordinances', 
    path: '/downloadables/ordinances', 
    keywords: ['ordinances', 'laws', 'regulations', 'rules', 'download'] 
  },
  
  // Extended Content (from Home page sections)
  { 
    type: 'content', 
    title: 'About Tuy', 
    path: '/about', 
    keywords: ['about', 'pearl', 'balayan bay', 'municipality', 'info'] 
  },
  { 
    type: 'content', 
    title: 'Health Services', 
    keywords: ['health', 'medical', 'clinic', 'hospital', 'healthcare'] 
  },
  { 
    type: 'content', 
    title: 'Education Programs', 
    keywords: ['education', 'school', 'scholarship', 'learning'] 
  },
  { 
    type: 'content', 
    title: 'Business & Permits', 
    keywords: ['business', 'permit', 'license', 'registration'] 
  },
  { 
    type: 'content', 
    title: 'Social Welfare', 
    keywords: ['social', 'welfare', 'assistance', 'help'] 
  },
  { 
    type: 'content', 
    title: 'Infrastructure', 
    keywords: ['infrastructure', 'roads', 'projects', 'development'] 
  },
  { 
    type: 'content', 
    title: 'Environment Programs', 
    keywords: ['environment', 'conservation', 'sustainability', 'nature'] 
  },
  
  // Announcements (from Home page)
  { 
    type: 'announcement', 
    title: 'Public Consultation 2026', 
    keywords: ['consultation', 'investment', 'plan', 'public', 'announcement'] 
  },
  { 
    type: 'announcement', 
    title: 'Business Permit Online Application', 
    keywords: ['business', 'permit', 'online', 'application', 'announcement'] 
  },
  { 
    type: 'announcement', 
    title: 'Health and Wellness Program', 
    keywords: ['health', 'wellness', 'screening', 'program', 'announcement'] 
  },
];
