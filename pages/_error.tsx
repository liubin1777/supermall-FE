import { NextPageContext } from 'next'
import NextError, {ErrorProps} from 'next/error'

function Error(props: any) {
  const { statusCode } = props
  return (
    <p>
      {statusCode === 404
        ? `没有这个页面哦~~~`
        : 'An error occurred on client'}
    </p>
  )
}

Error.getInitialProps = (ctx: NextPageContext) => {
  const error = NextError.getInitialProps(ctx)
  return { statusCode: (error as ErrorProps).statusCode || 404 }
}

export default Error