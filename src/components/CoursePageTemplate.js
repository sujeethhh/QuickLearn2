"use client";
import React from "react";
import Grid from "@mui/material/Grid";
import { motion, AnimatePresence } from "framer-motion";
import ScrollFloat from "@/components/ui/ScroolReveal";
import Link from "next/link";

export default function CoursePageTemplate({ courseData }) {
  const slideTransition = { type: "spring", stiffness: 120, damping: 25, mass: 1 };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
    exit: { opacity: 0 }
  };

  const slideInLeftVariants = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { ...slideTransition, duration: 1.1 } },
    exit: { opacity: 0, x: 100 }
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { ...slideTransition, duration: 1, delay: 0.25 } },
    exit: { opacity: 0, y: -40 }
  };

  const staggerTextVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const wordSlideVariants = {
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 40, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 1
      }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 1.2
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-gray-900">
        <AnimatePresence mode="wait">
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.15, opacity: 0, x: 100 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0.95, opacity: 0, x: -100 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${courseData.backgroundImage}')` }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-800 to-gray-900 opacity-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.30 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/55" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
                className="max-w-4xl text-white"
              >
                <motion.h1
                  variants={slideInLeftVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] mb-8 tracking-[-0.02em] font-serif"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  <span className="bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent drop-shadow-sm">
                    {courseData.title}
                  </span>
                </motion.h1>

                <motion.p
                  variants={fadeInVariants}
                  className="text-lg md:text-xl lg:text-2xl leading-[1.6] mb-10 text-white/85 max-w-4xl font-light tracking-wide"
                  style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif" }}
                >
                  {courseData.subtitle}
                </motion.p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ScrollFloat Section */}
      <section className="bg-gradient-to-br from-slate-50 via-gray-50 to-stone-50 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
            containerClassName="text-center"
            textClassName="font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] bg-gradient-to-r from-slate-700 via-gray-800 to-stone-900 bg-clip-text text-transparent drop-shadow-lg"
          >
            {courseData.title}
          </ScrollFloat>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full bg-white px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} lg={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerTextVariants}
              >
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="relative z-10">Course Overview</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </motion.h2>

              {courseData.overview.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-700 leading-relaxed mb-6 text-justify"
                  variants={paragraphVariants}
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {paragraph}
                </motion.p>
              ))}
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <motion.div
                className="sticky top-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
              >
              <motion.img
                src="/corporate.jpg"
                alt="Corporate Training"
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-2xl p-2 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-800">Training Calendar</div>
                </div>
              </motion.div>

              <Link href="/Events">
                <motion.button
                  className="absolute -bottom-4 -right-4 bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold px-5 py-2 rounded-xl shadow-xl hover:from-red-600 hover:to-pink-700 active:scale-95 transition-all duration-300 cursor-pointer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Check Schedule
                </motion.button>
              </Link>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="w-full bg-gradient-to-br from-stone-50 via-slate-50 to-gray-50 py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-7xl">
          <Grid container spacing={3} alignItems="flex-start">
            <Grid item xs={12} lg={8}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerTextVariants}
              >
              {/* Course Outline */}
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="relative z-10">Course Outline</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>

              <motion.ul className="list-none pl-0 text-gray-700 space-y-3 mb-8" variants={staggerTextVariants}>
                {courseData.courseOutline.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Learning Objectives */}
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="relative z-10">Learning Objectives</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>

              <motion.ul className="list-none pl-0 text-gray-700 space-y-3 mb-8" variants={staggerTextVariants}>
                {courseData.learningObjectives.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Target Group */}
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="relative z-10">Target Group</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>

              <motion.ul className="list-none pl-0 text-gray-700 space-y-3 mb-8" variants={staggerTextVariants}>
                {courseData.targetGroup.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Exam Details */}
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 relative"
                variants={headingVariants}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="relative z-10">Exam Details</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-stone-600 to-slate-700 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "35%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </motion.h2>

              <motion.ul className="list-none pl-0 text-gray-700 space-y-3" variants={staggerTextVariants}>
                {courseData.examDetails.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={wordSlideVariants}
                    className="flex items-start gap-3 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-gradient-to-r from-slate-700 to-stone-800 rounded-full mt-2 flex-shrink-0"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
              </motion.div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <motion.div
                className="sticky top-24"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={imageVariants}
              >
              <motion.img
                src="/team.jpg"
                alt="Our Team"
                className="w-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-4 border border-slate-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold font-serif text-slate-800">{courseData.title}</div>
                  <div className="text-xs text-slate-600 font-medium">{courseData.tagline}</div>
                </div>
              </motion.div>
              </motion.div>
            </Grid>
          </Grid>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Related Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of {courseData.category} courses
            </p>
          </motion.div>

          <Grid container spacing={3}>
            {courseData.relatedCourses.map((course, index) => (
              <Grid item xs={12} sm={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full"
                >
                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${course.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className={`${course.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                      {course.badge}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-2">{course.title}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Duration</span>
                        <span className="font-medium text-sm">{course.duration}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Level</span>
                        <span className="font-medium text-sm">{course.level}</span>
                      </div>
                    </div>
                    <Link href={course.href} className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center">
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>
    </>
  );
}