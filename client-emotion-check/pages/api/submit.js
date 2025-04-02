import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const dataPath = path.join(process.cwd(), 'data', 'responses.json');
    const { emotion } = req.body;
    const existing = fs.existsSync(dataPath)
      ? JSON.parse(fs.readFileSync(dataPath, 'utf-8'))
      : [];

    existing.push({ emotion, timestamp: new Date().toISOString() });
    fs.writeFileSync(dataPath, JSON.stringify(existing, null, 2));

    res.status(200).json({ message: '저장됨' });
  } else {
    res.status(405).json({ message: '허용되지 않은 메소드' });
  }
}

