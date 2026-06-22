export default function GradientMeshBg() {
  return (
    <div className="mesh-bg">
      {/* UV Orb — top left */}
      <div
        className="mesh-orb animate-float"
        style={{
          top: '-10%',
          left: '-5%',
          width: '600px',
          height: '600px',
          background: 'var(--accent-uv)',
        }}
      />

      {/* Cyan Orb — bottom right */}
      <div
        className="mesh-orb"
        style={{
          bottom: '-15%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'var(--accent-cyan)',
          animationDelay: '2s',
        }}
      />

      {/* Secondary UV Orb — center */}
      <div
        className="mesh-orb"
        style={{
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '400px',
          height: '400px',
          background: 'linear-gradient(135deg, var(--accent-uv), var(--accent-cyan))',
          opacity: 0.2,
        }}
      />

      {/* Dot grid overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle, var(--accent-uv) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
}
