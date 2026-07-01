// ---------------------------------------------------------------------------
// THE AUTH FLOW STATE MACHINE  (useReducer)
// ---------------------------------------------------------------------------
// Instead of juggling several useState calls that must stay in sync
// (which step? logging in or signing up? loading? error text?), we model the
// whole flow as ONE object updated by a reducer. Components dispatch
// *actions* ("what happened") and the reducer decides the *next state*.
// This is the classic case where useReducer beats useState.
//
// This file is plain logic (no JSX), which makes it easy to read on its own.
// ---------------------------------------------------------------------------

// mode:   'signup' | 'login'
// step:   'email' | 'password' | 'confirmPassword'
// status: 'idle' | 'loading' | 'error' | 'success'

