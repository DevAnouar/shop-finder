package com.hidden_founders.jobs.software_engineer_java.coding_challenge.shopfinder.infrastructure.security;

class SecurityConstants {
    static final String SECRET = "WZTdVu9g1ZNiQA1Hbr7guWkZJl3HhmIB2NzHalLqvG7gRA-awZzuM2ftoWDptHDaRZHEtjSMOsNnI8G458oldblEjkyDYGZOrn0EsDp-_neN3LBUWScRmSHyflsgG7i3SossSgMOCJUlrX8fBvVHztutpJofV65zGclKRGFObh5invqSQBCt_gNKhZBOmhUheSMgEemmA4-Xwo-VKYS5tqfbcYBqtL-yTu1Tp01hcbJ615RM3hcaLH6hGNsOhnF7sfwr7JBmZ0EVHC7nJ-6UNi7FwkcQIVVyXDjPOGEn5qlwuUX3G8d7oUwZ-BpZmucDIEYqOBTkDoBgxr5ZaolsAg";
    static final long EXPIRATION_TIME = 864_000_000; // 10 days
    static final String TOKEN_PREFIX = "Bearer ";
    static final String HEADER_STRING = "Authorization";
    static final String NEARBY_SHOPS_URL = "/shops/nearby";
    static final String SIGN_UP_URL = "/users/sign-up";
}
