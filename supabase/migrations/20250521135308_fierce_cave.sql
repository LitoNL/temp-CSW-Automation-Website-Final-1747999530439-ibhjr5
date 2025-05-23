/*
  # Create demo requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `full_name` (text)
      - `email` (text)
      - `company` (text)
      - `service` (text)
      - `challenges` (text)
      - `additional_info` (text, optional)
      - `created_at` (timestamp)
      - `status` (text, default: 'pending')

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for public insert access
    - Add policy for users to view their own requests
*/

CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  company text NOT NULL,
  service text NOT NULL,
  challenges text NOT NULL,
  additional_info text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'demo_requests' 
    AND policyname = 'Anyone can insert demo requests'
  ) THEN
    CREATE POLICY "Anyone can insert demo requests"
      ON demo_requests
      FOR INSERT
      TO public
      WITH CHECK (true);
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'demo_requests' 
    AND policyname = 'Users can view their own demo requests'
  ) THEN
    CREATE POLICY "Users can view their own demo requests"
      ON demo_requests
      FOR SELECT
      TO public
      USING (email = current_user);
  END IF;
END $$;