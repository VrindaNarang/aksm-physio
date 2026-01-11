'use client';

import { useState, useEffect } from 'react';
import { bbsQuestions } from '@/data/bbs-data';
import { CheckCircleIcon, ExclamationTriangleIcon } from '@heroicons/react/24/solid';

export default function BBSCalculator() {
    const [scores, setScores] = useState<{ [key: number]: number | null }>({});
    const [totalScore, setTotalScore] = useState(0);

    useEffect(() => {
        const newTotal = Object.values(scores).reduce<number>((acc, curr) => (curr !== null ? acc + curr : acc), 0);
        setTotalScore(newTotal);
    }, [scores]);

    const handleOptionSelect = (questionId: number, score: number) => {
        setScores((prev) => ({ ...prev, [questionId]: score }));
    };

    const getInterpretation = (score: number) => {
        if (score >= 45) return { text: "Primarily independent, low fall risk", color: "bg-green-100 text-green-800 border-green-200", iconColor: "text-green-600" };
        if (score >= 41) return { text: "Independent but significant fall risk", color: "bg-yellow-100 text-yellow-800 border-yellow-200", iconColor: "text-yellow-600" };
        if (score >= 21) return { text: "Requires assistance, 100% fall risk", color: "bg-orange-100 text-orange-800 border-orange-200", iconColor: "text-orange-600" };
        return { text: "Wheelchair required, 100% fall risk", color: "bg-red-100 text-red-800 border-red-200", iconColor: "text-red-600" };
    };

    const interpretation = getInterpretation(totalScore);
    const progress = (Object.keys(scores).length / 14) * 100;

    return (
        <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Main Content - Questions */}
            <div className="flex-1 space-y-8">
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
                        <button className="w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                            Print / Save Results
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
