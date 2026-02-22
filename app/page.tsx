export default function Home() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#050507', color: '#f5f5f5', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>WaveWarZ</h1>
        <p style={{ fontSize: '20px', color: '#888888', marginBottom: '40px' }}>Music Battles on Solana</p>
        
        <div style={{ backgroundColor: '#0d1321', border: '1px solid #1c1c24', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px', color: '#94ff7b' }}>Active Quick BattleZ</h2>
          <p style={{ color: '#888888' }}>Loading battles...</p>
        </div>
      </div>
    </div>
  )
}
