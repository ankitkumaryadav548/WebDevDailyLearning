import { useMemo, useCallback } from 'react';

// useMemo: cache expensive calculated value
const sortedList = useMemo(
  () => items.sort((a, b) => a - b),
  [items] // only re-sort when items changes
);

// useCallback: cache function reference (prevents child re-renders)
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// Custom Hook — reuse stateful logic
function useLocalStorage(key, initial) {
  const [value, setValue] = useState(
    () => JSON.parse(localStorage.getItem(key)) ?? initial
  );
  const set = v => { setValue(v); localStorage.setItem(key, JSON.stringify(v)); };
  return [value, set];
}