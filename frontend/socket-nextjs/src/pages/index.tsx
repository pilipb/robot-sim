import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  function goToVisualiser() {
    router.push('/visualiser');
  }

  return (
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <button onClick={goToVisualiser} style={{ fontSize: '20px', padding: '10px 20px' }}>
        Go to Crane Visualiser
      </button>
    </div>
  );
};

