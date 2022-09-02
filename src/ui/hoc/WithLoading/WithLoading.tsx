import React, { ComponentType, FC } from 'react'

type WithLoadingProps = {
  isLoading?: boolean
}

const WithLoading =
  <T extends object>(Component: ComponentType<T>): FC<T & WithLoadingProps> =>
  ({ isLoading, ...props }: WithLoadingProps): JSX.Element =>
    <Component className={isLoading ? 'loading' : ''} {...(props as T)} />

export default WithLoading
