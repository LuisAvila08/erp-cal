import { createClient } from '@supabase/supabase-js'

const url = 'https://hffxdzsxsyaomrvavzzr.supabase.co'
 
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmZnhkenN4c3lhb21ydmF2enpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyMzgzMTAsImV4cCI6MjA0ODgxNDMxMH0.-pR63Lmgv_woN2-4-fA7TiKHMFHdwE8NSv6QoCzmUwI'

export const supabase = createClient(url, key)
