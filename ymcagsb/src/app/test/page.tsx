import { supabase } from '@/lib/supabase'

export default async function TestPage() {
  // Test basic connection first
  const { data: users, error } = await supabase
    .from('Users')
    .select('*')
    .limit(1)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Database Test</h1>
      
      {error ? (
        <p className="text-red-500">Error: {error.message}</p>
      ) : (
        <div>
          <p className="text-green-500">✅ Connected to database!</p>
          <p>Found {users?.length || 0} users</p>
          <pre className="mt-4 bg-gray-100 p-4 rounded">
            {JSON.stringify(users, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
} 