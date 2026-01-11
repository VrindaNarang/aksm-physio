export default function Footer() {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">AKSM Physiotherapy</h3>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Dedicated to providing evidence-based physiotherapy care with a focus on geriatric rehabilitation and fall prevention.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
                        <p className="text-sm text-slate-400">Dr. Komal Aditi Kapoor</p>
                        <p className="text-sm text-slate-400">Lead Physiotherapist</p>
                        <p className="text-sm text-slate-400 mt-2">Email: contact@aksmphysio.com</p>
                    </div>
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">Legal</h3>
                        <p className="text-sm text-slate-400">
                            The Berg Balance Scale Calculator is for clinical use by trained professionals. Results should be interpreted in the context of a full clinical assessment.
                        </p>
                        <p className="text-sm text-slate-500 mt-4">
                            &copy; {new Date().getFullYear()} AKSM Physiotherapy. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
