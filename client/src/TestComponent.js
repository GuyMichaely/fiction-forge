import { useEffect, useState } from 'react'

export default function TestComponent() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('mount')
        return () => console.log('unmount')
    })
    return <button onClick={() => setCount(count+1)}>{count}</button>
}