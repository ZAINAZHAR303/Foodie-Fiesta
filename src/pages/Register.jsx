import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Register() {
  return (
    <>
    <Navbar />
    <section className="signup-page h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100">
      <div className="neumorphic-container bg-white p-8 rounded-lg shadow-neumorphic w-96">
        <h2 className="text-3xl font-bold text-center mb-6">Signup</h2>
        <form className="space-y-4">
          <div className="form-group">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full p-3 rounded-lg shadow-inner-neumorphic focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg shadow-inner-neumorphic focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg shadow-inner-neumorphic focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600 transition-all"
          >
            Signup
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-500 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </section>
    <Footer />
    </>
  );
}

export default Register;
