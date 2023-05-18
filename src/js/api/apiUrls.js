/**
 * BASE API's:
 * These are the bsae API-routes, and are used by putting together to form different API-routes.
 */

// Base URL:

export const API_BASE_URL = "https://api.noroff.dev/api/v1";

// ----- ----- ----- ----- ----- ----- ----- ----- ----- //

// --- AUTHENTICATING ---

// - Register User:
export const API_REGISTER_URL = `${API_BASE_URL}/auction/auth/register`; //                    Action="POST"

// - Login User:
export const API_LOGIN_URL = `${API_BASE_URL}/auction/auth/login`; //                    Action="POST"

// ----- ----- ----- ----- ----- ----- ----- ----- ----- //

// --- ENTRIES ---

// - All Entries:
export const API_ALL_ENTRIES_URL = `${API_BASE_URL}/auction/listings`; //                    Action="GET"

// - Single Entry:
export const API_SINGLE_ENTRY_URL = `${API_BASE_URL}/auction/listings/`; //  <+ ID>            Action="GET"

// - reate Entry:
export const API_CREATE_ENTRY_URL = `${API_BASE_URL}/auction/listings/`; //                    Action="POST"

// - Update Entry:
export const API_UPDATE_ENTRY_URL = `${API_BASE_URL}/auction/listings/`; //  <+ ID>            Action="PUT"

// - Delete Entry:
export const API_DELETE_ENTRY_URL = `${API_BASE_URL}/auction/listings/`; //  <+ ID>            Action="DELETE"

// - Bid On Entry:
export const API_BID_ON_ENTRY_URL = `${API_BASE_URL}/auction/listings/`; //  <+ ID>  /bids           Action="POST"

// ----- ----- ----- ----- ----- ----- ----- ----- ----- //

// --- PROFILES ---

// - All Profiles:
export const API_ALL_PROFILES_URL = `${API_BASE_URL}/auction/profiles`; //                    Action="GET"

// - Single Profile:
export const API_SINGLE_PROFILE_URL = `${API_BASE_URL}/auction/profiles/`; //  <+ name>          Action="GET"

// - Update Avatar:
export const API_UPDATE_AVATAR_URL = `${API_BASE_URL}/auction/profiles/`; //  <+ name> /media   Action="PUT"

// - All Listings Of A Profile:
export const API_ALL_LISTINGS_BY_A_PROFILE_URL = `${API_BASE_URL}/auction/profiles/`; //  <+ name> /listings   Action="GET"

// - All Bids Of A Profile:
export const API_ALL_BIDS_BY_A_PROFILE_URL = `${API_BASE_URL}/auction/profiles/`; //  <+ name> /bids   Action="GET"
