"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const projects = [
    {
        title: "Audio Pattern Recognition",
        category: "Machine Learning Research",
        description: "Published a research paper based on an internship project work, demonstrating applied machine learning research and experimental validation.",
        details: [
            "Conducted comprehensive research on audio signal processing and feature extraction.",
            "Developed and trained a Convolutional Neural Network (CNN) to classify complex audio patterns.",
            "Performed experimental validation to prove the model's accuracy, demonstrating applied ML research.",
            "Collaborated with researchers to document and publish findings."
        ],
        tech: "Python, CNN",
        image: "/projects/solid-starters.png"
    },
    {
        title: "Financial ETL Pipeline",
        category: "Data Engineering",
        description: "Handled structured financial datasets for banking. Developed SQL ETL pipelines to clean, preprocess, and perform data reconciliation.",
        details: [
            "Analyzed banking and financial datasets, focusing on structured data like customer accounts and transactions.",
            "Utilized Python (Pandas, NumPy) to extensively clean, preprocess, and validate multi-million row datasets.",
            "Assisted in developing SQL queries to manage and retrieve data reliably from relational databases.",
            "Automated data reconciliation checks to ensure absolute consistency across multiple tables."
        ],
        tech: "Pandas, NumPy, SQL",
        image: "/projects/radix.png"
    },
    {
        title: "Real-time Object Recognition",
        category: "Computer Vision",
        description: "Built & deployed deep learning models for real-time object and number plate recognition systems. Integrated AWS ML pipelines.",
        details: [
            "Designed end-to-end ML solutions from data ingestion to model inference and reporting.",
            "Trained YOLOv5, CNN, and Faster R-CNN architectures for robust object and number plate detection.",
            "Maintained ML pipelines to capture live data, evaluate model drift, and trigger real-time workflows.",
            "Deployed components onto scalable AWS infrastructure to ensure production reliability."
        ],
        tech: "YOLOv5, CNN, Faster R-CNN",
        image: "/object-detection.jpg"
    },
    {
        title: "OCR Validation Pipelines",
        category: "NLP / Computer Vision",
        description: "Implemented OCR-based pipelines to extract and validate text data, ensuring accuracy through post-processing and external database validation.",
        details: [
            "Built Optical Character Recognition (OCR) systems to digitize physical text accurately.",
            "Developed rigorous post-processing scripts to correct errors automatically using logic validation.",
            "Validated extracted results continuously against external truth databases.",
            "Created automated analytical dashboards to actively monitor system behavior and accuracy trends."
        ],
        tech: "Python, OCR, AWS",
        image: "/projects/bond-cancellation.png"
    },
    {
        title: "Credit Card Fraud Detection",
        category: "Machine Learning / Classification",
        description: "Built a machine learning pipeline to detect fraudulent credit card transactions on a highly imbalanced dataset using ensemble and sampling techniques.",
        details: [
            "Handled severe class imbalance using SMOTE and undersampling techniques to improve minority class detection.",
            "Trained and compared multiple classifiers including Logistic Regression, Random Forest, and XGBoost.",
            "Achieved high recall on fraud cases to minimize false negatives, a critical metric in financial fraud.",
            "Performed feature engineering and correlation analysis to identify key fraud indicators.",
            "Evaluated models using precision-recall curves, ROC-AUC, and confusion matrices."
        ],
        tech: "Python, XGBoost, Scikit-learn, SMOTE",
        image: "/projects/Credit_card.png"
    },
    {
        title: "Weather Prediction",
        category: "Machine Learning / Time Series",
        description: "Developed a weather forecasting model using historical meteorological data to predict temperature, humidity, and rainfall with high accuracy.",
        details: [
            "Collected and preprocessed multi-year historical weather datasets including temperature, wind speed, and humidity.",
            "Engineered time-based features such as rolling averages and lag variables to capture seasonal trends.",
            "Trained LSTM and regression models for short-term weather forecasting.",
            "Visualized prediction results against actual values using Matplotlib and Seaborn.",
            "Evaluated model performance using MAE and RMSE across multiple weather parameters."
        ],
        tech: "Python, LSTM, Pandas, Matplotlib",
        image: "/projects/Wether_detection.png"
    },
    {
        title: "Hand Gesture Recognition",
        category: "Computer Vision",
        description: "Built a real-time hand gesture recognition system using computer vision to classify hand gestures from a live webcam feed.",
        details: [
            "Used MediaPipe Hands to extract 21 3D hand landmark coordinates in real time.",
            "Trained a classification model on custom-collected gesture data across multiple gesture classes.",
            "Implemented real-time inference pipeline from webcam feed to gesture label with low latency.",
            "Applied data augmentation techniques to improve model generalization across different hand sizes and orientations.",
            "Achieved high classification accuracy across all gesture categories in real-world conditions."
        ],
        tech: "Python, OpenCV, MediaPipe, Scikit-learn",
        image: "/projects/hand_gesutre_detection.png"
    },
    {
        title: "Drone Security System",
        category: "Computer Vision / Security",
        description: "Designed an AI-powered drone surveillance system with a real-time web dashboard, GPS tracking, rule-based alert engine, and 55+ automated tests.",
        details: [
            "Built a real-time web dashboard using Flask REST API with dark-mode glassmorphism UI for live monitoring.",
            "Integrated Leaflet.js interactive GPS map to visualize the drone patrol route and security events.",
            "Designed a rule-based alert engine with 6 configurable security rules including loitering, perimeter breach, and after-hours detection.",
            "Stored and queried video frame data using SQLite with 5 optimized query methods for fast retrieval.",
            "Used regex-based NLP to extract objects (vehicles, people, animals) from video frame descriptions.",
            "Wrote 55+ unit and integration tests using pytest ensuring full pipeline coverage."
        ],
        tech: "Python, Flask, Leaflet.js, SQLite, pytest",
        image: "/projects/drone.png"
    },
];

export default function Projects() {
    type ProjectType = typeof projects[0];
    const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

    return (
        <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold mb-20 tracking-tighter text-white"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onClick={() => setSelectedProject(project)}
                            className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer h-[500px] flex flex-col justify-end"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent opacity-90 transition-opacity group-hover:opacity-75" />
                            </div>

                            <div className="relative z-10 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full shadow-lg">
                                        {project.category}
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md">
                                        {project.tech}
                                    </span>
                                </div>
                                <h3 className="text-4xl font-bold text-white mb-3 drop-shadow-md">{project.title}</h3>
                                <p className="text-gray-200 text-lg leading-relaxed drop-shadow-md">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#1a1a1a] rounded-2xl overflow-hidden border border-white/10 shadow-2xl custom-scrollbar"
                            >
                                <button 
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </button>
                                
                                <div className="h-64 relative w-full shrink-0">
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        fill
                                        className="object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                                </div>
                                <div className="p-8 relative -mt-20">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-3 py-1 text-xs font-medium tracking-widest text-[#121212] uppercase bg-[#ededed] rounded-full shadow-lg">
                                            {selectedProject.category}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-medium tracking-widest text-white uppercase border border-white/30 rounded-full backdrop-blur-md bg-black/50">
                                            {selectedProject.tech}
                                        </span>
                                    </div>
                                    <h3 className="text-4xl font-bold text-white mb-6 drop-shadow-md">{selectedProject.title}</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <p className="text-lg text-gray-400 mb-6">{selectedProject.description}</p>
                                        <h4 className="text-xl font-semibold text-white mb-4">Key Achievements & Tasks</h4>
                                        <ul className="space-y-3 pb-8">
                                            {selectedProject.details.map((detail: string, i: number) => (
                                                <li key={i} className="flex items-start">
                                                    <span className="text-purple-500 mr-3 mt-1 text-xl leading-none">•</span>
                                                    <span className="leading-relaxed">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
