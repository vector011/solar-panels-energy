import { type NextPage, type GetStaticProps } from 'next'

const Custom404: NextPage = () => {
  return <>404 - Not Found</>
}

export const getStaticProps: GetStaticProps = () => {
  return {
    redirect: {
      destination: '/',
      permanent: true,
    },
  }
}

export default Custom404
