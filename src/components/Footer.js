"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from "react-icons/fa";
import { FaPaypal, FaUniversity } from "react-icons/fa";
import { SiVisa, SiMastercard } from "react-icons/si";
import Link from "next/link";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    comment: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      mobile: "",
      comment: ""
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <Grid container spacing={{ xs: 3, sm: 4, lg: 5 }}>
          
          {/* Popular Courses */}
          <Grid item xs={12} sm={6} lg={3}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Popular Courses</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/ITL4Management" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  ITIL 4 Foundation Certification
                </Link>
              </li>
              <li>
                <Link href="/PScrumM1" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  PSM Certification
                </Link>
              </li>
              <li>
                <Link href="/LeadingSAFeAgilist" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  SAFe Agile 5 Certification
                </Link>
              </li>
              <li>
                <Link href="/PMP" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  PMP Certification
                </Link>
              </li>
              <li>
                <Link href="/Prince2Foundation" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  Prince2 Foundation Certification
                </Link>
              </li>
              <li>
                <Link href="/Prince2Foundation" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  Prince2 Practitioner Certification
                </Link>
              </li>
              <li>
                <Link href="/Prince2Foundation" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  Prince2 Agile Practitioner Certification
                </Link>
              </li>
              <li>
                <Link href="/LeanSSGB" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  Lean Six Sigma Green Belt Certification
                </Link>
              </li>
              <li>
                <Link href="/DevopsFoundation" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                  DevOps Foundation Certification
                </Link>
              </li>
            </ul>
          </Grid>

          {/* Find us on & Payment Options */}
          <Grid item xs={12} sm={6} lg={3}>
            {/* Social Media */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Find us on</h3>
              <div className="flex gap-3 sm:gap-4">
                <a
                  href="https://www.facebook.com/quicklearnsystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://x.com/quicklearnsys"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-5 h-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Google Plus"
                >
                  <FaGooglePlusG className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/quicklearn-systems-1494ba12a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Payment Options */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Payment Options</h3>
              <p className="text-white/90 text-sm mb-3">We accept payment by Cash, Cheque,</p>
              <p className="text-white/90 text-sm mb-4">Online Fund Transfer and Credit Cards</p>
              <div className="flex gap-3 flex-wrap">
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <SiVisa className="w-8 h-5 text-blue-600" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <SiMastercard className="w-8 h-5 text-red-500" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <FaUniversity className="w-6 h-4 text-gray-700" />
                </div>
                <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                  <FaPaypal className="w-6 h-4 text-blue-600" />
                </div>
              </div>
            </div>
          </Grid>

          {/* Company */}
          <Grid item xs={12} sm={6} lg={3}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/Events" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="/Contact" className="text-white/90 hover:text-white transition-colors duration-300 text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
              
            </ul>
          </Grid>

          {/* Quick Enquiry */}
          <Grid item xs={12} sm={6} lg={3}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Quick Enquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <Grid container spacing={1.5}>
                <Grid item xs={12} sm={6}>
                  <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    required
                  />
                </Grid>
              </Grid>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                required
              />
              <textarea
                name="comment"
                placeholder="Comment"
                rows="4"
                value={formData.comment}
                onChange={handleInputChange}
                className="w-full px-3 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 text-sm sm:text-base"
              >
                Submit
              </button>
            </form>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Grid container>
          <Grid item xs={12}>
            <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2018-2019 - QuickLearn Systems. All Rights Reserved. The certification names are thetrademarks oftheir respective owners.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </footer>
  );
}
