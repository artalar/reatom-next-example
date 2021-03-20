export const getServerSideProps = async ({ req, res }) => {
  return {
    redirect: {
      destination: '/auth',
      permanent: false,
    },
  }
}

export function Home() {
  return <main>Home</main>
}

export default Home
