import { useState } from 'react';

export default function Home() {
  const [emotion, setEmotion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async () => {
    await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emotion }),
    });
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <h1>당신의 현재 감정은?</h1>
      <select value={emotion} onChange={e => setEmotion(e.target.value)}>
        <option value="">-- 선택 --</option>
        <option value="기쁨">기쁨</option>
        <option value="슬픔">슬픔</option>
        <option value="불안">불안</option>
        <option value="화남">화남</option>
      </select>
      <br /><br />
      <button onClick={handleSubmit} disabled={!emotion}>제출</button>
      {submitted && <p>감사합니다!</p>}
    </div>
  );
}

