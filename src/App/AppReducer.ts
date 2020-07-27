import { createContext, Dispatch } from 'react'

export enum AppActionType {
  SET_USER_ID = 'SET_USER_ID',
  SET_ITEM_ID = 'SET_ITEM_ID'
}

export interface IAppAction {
  userID?: string
  itemID?: string
  type: AppActionType
}

export const initialState = {
  userID: '',
  itemID: ''
}

interface IContextProps {
  state: typeof initialState
  dispatch: Dispatch<IAppAction>
}

export const AppContext = createContext({} as IContextProps)

export function AppReducer(state: any, action: IAppAction) {
  switch (action.type) {
    case AppActionType.SET_USER_ID:
      return {
        ...state,
        userID: action.userID
      }
    case AppActionType.SET_ITEM_ID:
      return {
        ...state,
        itemID: action.itemID
      }
    default:
      return state
  }
}
