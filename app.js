/* global React, ReactDOM */

const DATA = [
  {
    text: 'Have Backbone; Disagree and Commit',
    colors: ['#ffb3c7', '#ff71a1'],
    border: '#ff5b99',
    rotateDeg: -8,
    offset: 0,
    avatar: { side: 'left', label: 'ACT' }
  },
  {
    text: 'Hire and Develop the best',
    colors: ['#ffc79a', '#ffad6e'],
    border: '#ff9c4b',
    rotateDeg: -6,
    offset: 6,
    avatar: { side: 'right', label: 'FC' }
  },
  {
    text: 'Invent and Simplify',
    colors: ['#fff5a5', '#ffe96e'],
    border: '#ffe160',
    rotateDeg: 8,
    offset: 2,
    avatar: { side: 'left', label: 'DA' }
  },
  {
    text: 'Continous Improvement',
    colors: ['#b6ffb6', '#67e46f'],
    border: '#49d454',
    rotateDeg: -7,
    offset: 8,
    avatar: { side: 'right', label: 'ATB' }
  },
  {
    text: 'Dive Deep',
    colors: ['#a7f7ff', '#66e1ee'],
    border: '#48d0df',
    rotateDeg: 7,
    offset: 1,
    avatar: { side: 'left', label: 'VEN' }
  },
  {
    text: 'Learn and Be Curious',
    colors: ['#a7bcc3', '#7d9ba6'],
    border: '#6c8c98',
    rotateDeg: -6,
    offset: 7,
    avatar: { side: 'right', label: 'DD' }
  },
  {
    text: 'Innovation',
    colors: ['#ccc6ff', '#b0a8ff'],
    border: '#9f96ff',
    rotateDeg: 9,
    offset: 3,
    avatar: { side: 'left', label: 'CA' }
  },
  {
    text: 'Customer Obsession',
    colors: ['#d1b0d8', '#b894c4'],
    border: '#a980b4',
    rotateDeg: -8,
    offset: 9,
    avatar: { side: 'right', label: 'API' }
  },
  {
    text: 'Agile Mindset',
    colors: ['#ffb3c1', '#f196a8'],
    border: '#ea7c91',
    rotateDeg: 10,
    offset: 2,
    avatar: { side: 'left', label: 'SB' }
  },
  {
    text: 'Insist on Highest Standards',
    colors: ['#fff6a5', '#ffeb73'],
    border: '#ffe246',
    rotateDeg: -6,
    offset: 8,
    avatar: { side: 'right', label: 'FB' }
  }
];

function Pill({ item, index }) {
  const gradient = {
    background: `linear-gradient(180deg, ${item.colors[0]}, ${item.colors[1]})`,
    borderColor: item.border,
    transform: `rotate(${item.rotateDeg}deg)`
  };
  const offsetStyle = { marginLeft: `${item.offset}vw` };
  return (
    <div className="pill-row" style={offsetStyle}>
      {item.avatar.side === 'left' && (
        <div className="avatar avatar-left" data-label={item.avatar.label} />
      )}
      <div className="pill" style={gradient}>
        <span className="pill-text">{item.text}</span>
      </div>
      {item.avatar.side === 'right' && (
        <div className="avatar avatar-right" data-label={item.avatar.label} />
      )}
    </div>
  );
}

function App() {
  return (
    <div className="canvas">
      <div className="stack">
        {DATA.map((item, idx) => (
          <Pill key={idx} item={item} index={idx} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

