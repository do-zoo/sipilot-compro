import {
  IEmailPayload,
  subscriptionsServices,
} from '@sipilot/services/subscriptions.service'
import { useMutation } from '@tanstack/react-query'

export function useSubsEmail() {
  return useMutation((payload: IEmailPayload) =>
    subscriptionsServices.email(payload)
  )
}

export default useSubsEmail
