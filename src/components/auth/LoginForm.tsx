import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import { InputField } from './InputField';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => Promise<void>;
  isLoading: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        type="email"
        value={email}
        onChange={setEmail}
        icon={<Mail size={20} />}
        placeholder="Email"
        required
      />
      <InputField
        type="password"
        value={password}
        onChange={setPassword}
        icon={<Lock size={20} />}
        placeholder="Password"
        required
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors disabled:bg-red-300"
      >
        {isLoading ? 'Loading...' : 'Login'}
      </button>
      <p className="text-center text-gray-600">
        Don't have an account?{' '}
        <Link to="/register" className="text-red-500 hover:text-red-600">
          Register
        </Link>
      </p>
    </form>
  );
};