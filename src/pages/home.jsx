export default function Home() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <section style={{ backgroundColor: '#f87171', color: 'white', padding: '60px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to Tribe Fest</h1>
        <p style={{ fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
          Book your stall, showcase your brand, volunteer, and meet our amazing team!
        </p>
      </section>

      <section style={{ backgroundColor: '#e0f2fe', color: '#0f172a', padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Why Join Us?</h2>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Tribe Fest is the perfect platform for startups, volunteers, and team collaboration.
        </p>
      </section>

      <section style={{ backgroundColor: '#fef3c7', color: '#0f172a', padding: '50px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Join Our Team</h2>
        <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
          Become a part of our growing community and make a difference!
        </p>
      </section>
    </div>
  );
}
