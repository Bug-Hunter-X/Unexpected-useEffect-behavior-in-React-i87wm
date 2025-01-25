```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    // This effect runs after every render
    console.log('Effect ran with count:', count, 'and name:', name);
  });

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </div>
  );
}

export default MyComponent;
```