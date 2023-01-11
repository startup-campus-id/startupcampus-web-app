export const BASE_URL =
  process.env.NEXT_PUBLIC_APP_ENV === 'production'
    ? 'https://api.startupcampus.id'
    : 'https://staging-api.startupcampus.id';
export const REGIST_BEASISWA_GOOGLE_URL = '/daftar/beasiswa-gcc';
export const GCC_URL = 'https://grow.google/intl/id_id/certificates/';
export const CMS_BASE_URL =
  process.env.NEXT_PUBLIC_APP_ENV === 'production'
    ? 'https://cms.startupcampus.id'
    : 'http://localhost:5000';
