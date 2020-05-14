import { createSelector } from 'reselect'

const getUserInfo = (state) => state.userInfo

export const getUserInfoSelector = createSelector([getUserInfo],(userInfo)=>userInfo)