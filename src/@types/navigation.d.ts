import { RouteParams } from "../screens/Details"

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined
      SignUp: undefined
      Home: undefined
      Register: undefined
      Details: RouteParams
    }
  }
}