import type { Role } from '@guild.core';

const Home = () => {
  const allowedRoles: Role[] = ['admin', 'committee', 'mentor'];
  const apiUrl = import.meta.env.VITE_API_URL;

  console.log({ allowedRoles });

  return (
    <>
      <div>Guild Admin Console</div>
      <b>Api url:{apiUrl}</b>
    </>
  );
};

export default Home;
