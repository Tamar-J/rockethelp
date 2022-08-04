import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";

export type OrderFirestoreDTO = {
  created_at: FirebaseFirestoreTypes.Timestamp
  patrimony: string 
  description: string 
  status: 'open' | 'closed' 
  solution?: string
  closed_at?: FirebaseFirestoreTypes.Timestamp
}