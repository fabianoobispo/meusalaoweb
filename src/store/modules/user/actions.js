export function updateProfileRequest(data) {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
    payload: { data },
  };
}
export function updateProfileSucces(profile) {
  return {
    type: '@user/UPDATE_PROFILE_SUCCES',
    payload: { profile },
  };
}
export function updateProfileFailure() {
  return {
    type: '@user/UPDATE_PROFILE_REQUEST',
  };
}
