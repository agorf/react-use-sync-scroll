declare module 'react-use-sync-scroll' {
  import { RefObject } from 'react'

  export interface SyncScrollOptions {
    /**
     * @default false
     */
    horizontal?: boolean

    /**
     * @default false
     */
    vertical?: boolean
  }

  function useSyncScroll(refs: RefObject<any>, options: SyncScrollOptions): void

  export default useSyncScroll
}
