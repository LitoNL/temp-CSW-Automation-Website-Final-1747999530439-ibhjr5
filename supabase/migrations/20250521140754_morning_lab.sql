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
      - `created_at` (timestamptz)
      - `status` (text, default: 'pending')

  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for public users to insert demo requests
    - Add policy for users to view their own demo requests
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

CREATE POLICY "Anyone can insert demo requests"
  ON demo_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can view their own demo requests"
  ON demo_requests
  FOR SELECT
  TO public
  USING (email = current_user);