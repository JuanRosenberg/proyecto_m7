import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { InputField } from './InputField';

interface RegisterFormProps {
  onSubmit: (email: string, password: string, name: string) => Promise<void>;
  isLoading: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, isLoading }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, name);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        type="text"
        value={name}
        onChange={setName}
        icon={<User size={20} />}
        placeholder="Full Name"
        required
      />
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
        {isLoading ? 'Loading...' : 'Register'}
      </button>
      <p className="text-center text-gray-600">
        Already have an account?{' '}
        <Link to="/login" className="text-red-500 hover:text-red-600">
          Login
        </Link>
      </p>
    </form>
  );
};