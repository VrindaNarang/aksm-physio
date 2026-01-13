'use client';

import { useState, useEffect, useRef } from 'react';
import { bbsQuestions } from '@/data/bbs-data';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import jsPDF from 'jspdf';

export default function BBSCalculator() {
    const [scores, setScores] = useState<{ [key: number]: number | null }>({});
    const [totalScore, setTotalScore] = useState(0);
    const [patientName, setPatientName] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);

    useEffect(() => {
        const newTotal = Object.values(scores).reduce<number>((acc, curr) => (curr !== null ? acc + curr : acc), 0);
        setTotalScore(newTotal);
    }, [scores]);

    const handleOptionSelect = (questionId: number, score: number) => {
        setScores((prev) => ({ ...prev, [questionId]: score }));
    };

    const getInterpretation = (score: number) => {
        if (score >= 45) return { text: "Primarily independent, low fall risk", color: "bg-green-100 text-green-800 border-green-200", iconColor: "text-green-600", riskLevel: "Low Fall Risk" };
        if (score >= 41) return { text: "Independent but significant fall risk", color: "bg-yellow-100 text-yellow-800 border-yellow-200", iconColor: "text-yellow-600", riskLevel: "Medium Fall Risk" };
        if (score >= 21) return { text: "Requires assistance, 100% fall risk", color: "bg-orange-100 text-orange-800 border-orange-200", iconColor: "text-orange-600", riskLevel: "High Fall Risk" };
        return { text: "Wheelchair required, 100% fall risk", color: "bg-red-100 text-red-800 border-red-200", iconColor: "text-red-600", riskLevel: "Very High Fall Risk" };
    };

    const handleDownloadReport = () => {
        setIsGenerating(true);

        try {
            const doc = new jsPDF();
            const interpretation = getInterpretation(totalScore);
            const currentDate = new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            });

            // Set colors
            const tealColor = [15, 118, 110]; // #0f766e
            const grayColor = [100, 116, 139]; // #64748b

            // Header
            doc.setFillColor(15, 118, 110);
            doc.rect(0, 0, 210, 35, 'F');
            doc.setTextColor(255, 255, 255);
            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.text('AKSM Physio', 105, 15, { align: 'center' });
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text('Berg Balance Scale Assessment Report', 105, 25, { align: 'center' });

            // Patient Information
            doc.setTextColor(0, 0, 0);
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('PATIENT INFORMATION', 20, 50);

            doc.setFillColor(248, 250, 252);
            doc.rect(20, 55, 170, 25, 'F');
            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(100, 116, 139);
            doc.text('PATIENT NAME', 25, 63);
            doc.text('ASSESSMENT DATE', 115, 63);

            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 0, 0);
            doc.text(patientName || 'Not Provided', 25, 72);
            doc.text(currentDate, 115, 72);

            // Assessment Results
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.text('ASSESSMENT RESULTS', 20, 95);

            // Score box
            doc.setFillColor(204, 251, 241);
            doc.setDrawColor(94, 234, 212);
            doc.setLineWidth(1);
            doc.rect(20, 100, 170, 35, 'FD');

            doc.setFontSize(10);
            doc.setTextColor(71, 85, 105);
            doc.setFont('helvetica', 'normal');
            doc.text('BERG BALANCE SCALE SCORE', 105, 110, { align: 'center' });

            doc.setFontSize(36);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(15, 118, 110);
            doc.text(`${totalScore}`, 95, 125, { align: 'center' });
            doc.setFontSize(18);
            doc.setTextColor(100, 116, 139);
            doc.text('/ 56', 115, 125);

            // Risk Category
            doc.setFillColor(248, 250, 252);
            doc.setDrawColor(203, 213, 225);
            doc.setLineWidth(1);
            doc.rect(20, 145, 170, 25, 'FD');

            doc.setFontSize(9);
            doc.setTextColor(100, 116, 139);
            doc.setFont('helvetica', 'normal');
            doc.text('RISK CATEGORY', 25, 152);

            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 0, 0);
            doc.text(interpretation.riskLevel, 25, 160);

            doc.setFontSize(10);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(51, 65, 85);
            doc.text(interpretation.text, 25, 167);

            // Score Interpretation Guide
            doc.setFontSize(12);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(0, 0, 0);
            doc.text('SCORE INTERPRETATION GUIDE', 20, 185);

            const guides = [
                { range: '45 - 56', risk: 'Low Fall Risk', color: [240, 253, 244], textColor: [20, 83, 45] },
                { range: '41 - 44', risk: 'Medium Fall Risk', color: [254, 252, 232], textColor: [113, 63, 18] },
                { range: '21 - 40', risk: 'High Fall Risk', color: [255, 247, 237], textColor: [124, 45, 18] },
                { range: '0 - 20', risk: 'Very High Fall Risk', color: [254, 242, 242], textColor: [127, 29, 29] }
            ];

            let yPos = 190;
            guides.forEach(guide => {
                doc.setFillColor(...guide.color);
                doc.rect(20, yPos, 170, 10, 'F');
                doc.setFontSize(10);
                doc.setFont('helvetica', 'bold');
                doc.setTextColor(...guide.textColor);
                doc.text(guide.range, 25, yPos + 7);
                doc.text(guide.risk, 160, yPos + 7, { align: 'right' });
                yPos += 12;
            });

            // Footer
            doc.setDrawColor(226, 232, 240);
            doc.setLineWidth(0.5);
            doc.line(20, 245, 190, 245);

            doc.setFontSize(9);
            doc.setTextColor(100, 116, 139);
            doc.setFont('helvetica', 'normal');
            doc.text('Based on the Berg Balance Scale (1989) by Katherine Berg', 105, 252, { align: 'center' });

            doc.setFontSize(10);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(15, 118, 110);
            doc.text('Assessed by Dr. Komal Aditi Kapoor', 105, 260, { align: 'center' });

            doc.setFontSize(8);
            doc.setTextColor(148, 163, 184);
            doc.setFont('helvetica', 'normal');
            doc.text('This report is generated for clinical reference purposes only.', 105, 270, { align: 'center' });

            // Save the PDF
            const date = new Date().toLocaleDateString('en-GB').replace(/\//g, '-');
            const fileName = `BBS_Report_${patientName.replace(/\s+/g, '_') || 'Patient'}_${date}.pdf`;
            doc.save(fileName);

            setIsGenerating(false);
        } catch (error) {
            console.error('Error generating report:', error);
            alert(`Failed to generate report: ${error instanceof Error ? error.message : 'Unknown error'}`);
            setIsGenerating(false);
        }
    };

    const interpretation = getInterpretation(totalScore);
    const progress = (Object.keys(scores).length / 14) * 100;

    return (
        <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Main Content - Questions */}
            <div className="flex-1 space-y-8">
                {/* Patient Name Input */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                    <label htmlFor="patient-name" className="block text-sm font-semibold text-slate-800 mb-2">
                        Patient Name
                    </label>
                    <input
                        type="text"
                        id="patient-name"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="Enter patient name"
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                    />
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
                    <h2 className="text-xl font-semibold text-slate-800 mb-2">Instructions</h2>
                    <p className="text-slate-600">
                        Please score each item from 0 to 4 based on the patient's performance.
                        Ensure safety at all times during the assessment.
                    </p>
                    <div className="mt-4 w-full bg-slate-100 rounded-full h-2.5">
                        <div className="bg-teal-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                    <p className="text-right text-xs text-slate-500 mt-1">{Object.keys(scores).length} / 14 Completed</p>
                </div>

                {bbsQuestions.map((q) => (
                    <div key={q.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden scroll-mt-24" id={`q-${q.id}`}>
                        <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-lg font-medium text-slate-900">
                                <span className="text-teal-600 font-bold mr-2">{q.id}.</span>
                                {q.question}
                            </h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${scores[q.id] !== undefined ? 'bg-teal-100 text-teal-800' : 'bg-slate-200 text-slate-600'}`}>
                                {scores[q.id] !== undefined ? `Score: ${scores[q.id]}` : 'Unanswered'}
                            </span>
                        </div>
                        <div className="p-6">
                            <p className="text-slate-500 italic mb-4 text-sm bg-slate-50 p-3 rounded-lg border border-slate-100">
                                <span className="font-semibold not-italic text-slate-700">Instruction:</span> {q.instruction}
                            </p>
                            <div className="space-y-3">
                                {q.options.map((opt) => (
                                    <label
                                        key={opt.score}
                                        className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 group ${scores[q.id] === opt.score
                                            ? 'border-teal-500 bg-teal-50 ring-1 ring-teal-500'
                                            : 'border-slate-200 hover:border-teal-300 hover:bg-slate-50'
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name={`q-${q.id}`}
                                            value={opt.score}
                                            checked={scores[q.id] === opt.score}
                                            onChange={() => handleOptionSelect(q.id, opt.score)}
                                            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                                        />
                                        <div className="ml-3 flex-1">
                                            <div className="flex justify-between items-center">
                                                <span className={`text-sm font-medium ${scores[q.id] === opt.score ? 'text-teal-900' : 'text-slate-700'}`}>
                                                    {opt.label}
                                                </span>
                                                <span className={`text-xs font-bold px-2 py-1 rounded ${scores[q.id] === opt.score ? 'bg-teal-200 text-teal-800' : 'bg-slate-100 text-slate-500'}`}>
                                                    {opt.score}
                                                </span>
                                            </div>
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Sticky Sidebar - Results */}
            <div className="lg:w-80 flex-shrink-0">
                <div className="sticky top-24 space-y-6">
                    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
                        <div className="bg-slate-900 px-6 py-4">
                            <h3 className="text-white font-medium text-lg">Assessment Score</h3>
                        </div>
                        <div className="p-6 text-center">
                            <div className="text-5xl font-bold text-slate-900 mb-2">
                                {totalScore} <span className="text-2xl text-slate-400 font-normal">/ 56</span>
                            </div>
                            <p className="text-slate-500 text-sm">Total Points</p>
                        </div>
                        <div className={`px-6 py-4 border-t border-slate-100 ${interpretation.color}`}>
                            <div className="flex items-start gap-3">
                                <ExclamationTriangleIcon className={`h-6 w-6 flex-shrink-0 ${interpretation.iconColor}`} />
                                <div>
                                    <p className="font-bold text-sm uppercase tracking-wide mb-1">Interpretation</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        {interpretation.text}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                        <h4 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Reference Guide</h4>
                        <div className="space-y-3 text-sm">
                            <div className="flex justify-between items-center p-2 rounded bg-green-50 text-green-900 border border-green-100">
                                <span>45 - 56</span>
                                <span className="font-medium text-xs">Low Fall Risk</span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded bg-yellow-50 text-yellow-900 border border-yellow-100">
                                <span>41 - 44</span>
                                <span className="font-medium text-xs">Medium Risk</span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded bg-orange-50 text-orange-900 border border-orange-100">
                                <span>21 - 40</span>
                                <span className="font-medium text-xs">High Risk</span>
                            </div>
                            <div className="flex justify-between items-center p-2 rounded bg-red-50 text-red-900 border border-red-100">
                                <span>0 - 20</span>
                                <span className="font-medium text-xs">Very High Risk</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-teal-50 rounded-xl border border-teal-100 p-6">
                        <h4 className="font-semibold text-teal-900 mb-2">Next Steps</h4>
                        <p className="text-sm text-teal-700 mb-4">
                            Document this score in the patient's file. Consider referrals for gait training or assistive devices if score is below 45.
                        </p>
                        <button
                            onClick={handleDownloadReport}
                            disabled={isGenerating}
                            className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                        >
                            {isGenerating ? 'Generating...' : 'Print / Save Results'}
                        </button>
                    </div>

                    <div className="text-center space-y-2">
                        <p className="text-xs text-slate-400">
                            Based on the Berg Balance Scale (1989) by Katherine Berg.
                        </p>
                        <p className="text-xs font-medium text-teal-600">
                            Assessed by Dr. Komal Aditi Kapoor
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
