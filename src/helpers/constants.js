import moment from 'moment'

// all exports should be of type 'const' with an all caps var name separated by underscores

export const FIREBASE_CONFIG = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

export const SENTRY_DSN = process.env.REACT_APP_SENTRY_DSN
export const SENTRY_ENV = process.env.REACT_APP_SENTRY_ENV

export const IS_DEV_ENVIRONMENT = process.env.REACT_APP_FIREBASE_ENV === 'dev'

export const IS_PWA = window.matchMedia('(display-mode: standalone)').matches

// 600 pixels is our baseline threshold for handling a mobile screen vs. desktop
export const MOBILE_THRESHOLD = 600

export const FORMSPREE_FORM_ID = 'xlezdgjl'

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/dir/?api=1&destination='

export const FOOD_CATEGORIES = [
  'impact_data_dairy',
  'impact_data_bakery',
  'impact_data_produce',
  'impact_data_meat_fish',
  'impact_data_non_perishable',
  'impact_data_prepared_frozen',
  'impact_data_mixed',
  'impact_data_other',
]

export const RETAIL_VALUES = {
  impact_data_dairy: 1.28,
  impact_data_bakery: 2.36,
  impact_data_produce: 1.57,
  impact_data_meat_fish: 4.4,
  impact_data_non_perishable: 3.19,
  impact_data_prepared_frozen: 4.13,
  impact_data_mixed: 2.31,
  impact_data_other: 2.31,
}

export const FAIR_MARKET_VALUES = {
  impact_data_dairy: 1.42,
  impact_data_bakery: 2.14,
  impact_data_produce: 1.13,
  impact_data_meat_fish: 2.77,
  impact_data_non_perishable: 2.13,
  impact_data_prepared_frozen: 2.17,
  impact_data_mixed: 1.62,
  impact_data_other: 1.62,
}

export const ORG_TYPES = ['donor', 'recipient']

export const ORG_SUBTYPES = {
  RETAIL: 'retail',
  WHOLESALE: 'wholesale',
  FOOD_BANK: 'food_bank',
  AGENCY: 'agency',
  HOME_DELIVERY: 'home_delivery',
  COMMUNITY_FRIDGE: 'community_fridge',
  POPUP: 'popup',
  HOLDING: 'holding',
  OTHER: 'other',
}

export const ORG_TYPE_ICONS = {
  retail: 'department-store',
  wholesale: 'package',
  holding: 'palms-up-together',
  other: 'red-question-mark',
  food_bank: 'red-apple',
  agency: 'briefcase',
  popup: 'person-raising-hand',
  community_fridge: 'cityscape',
  home_delivery: 'house',
}

export const STATUSES = {
  CANCELLED: 'cancelled',
  SCHEDULED: 'scheduled',
  ACTIVE: 'active',
  COMPLETED: 'completed',
}

export const DONOR_TYPES = {
  RETAIL: 'retail',
  WHOLESALE: 'wholesale',
  HOLDING: 'holding',
  OTHER: 'other',
}

export const RECIPIENT_TYPES = {
  FOOD_BANK: 'food_bank',
  AGENCY: 'agency',
  HOME_DELIVERY: 'home_delivery',
  COMMUNITY_FRIDGE: 'community_fridge',
  POPUP: 'popup',
  HOLDING: 'holding',
  OTHER: 'other',
}

export const FOOD_FAIR_MARKET_VALUES = {
  bakery: 2.14,
  dairy: 1.42,
  'meat/Fish': 2.77,
  'mixed groceries': 1.62,
  'non-perishable': 2.13,
  'prepared/Frozen': 2.17,
  produce: 1.13,
  other: 1.62,
}

export const FIRST_RESCUE_IN_DB = process.env.REACT_APP_FIRST_RESCUE_IN_DB
export const DEFAULT_DB_LIMIT = moment().subtract(7, 'days').toDate()

export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const COLORS = ['#216810', '#4EA528', '#9DA1A4']

export const FORECASTED_VALUES = [
  122500.64,
  142511.77,
  165791.81,
  192874.78,
  224381.9,
  261035.87,
  303677.45,
  353284.77,
  410995.7,
  478134.02,
  556239.74,
  647104.44,
]
