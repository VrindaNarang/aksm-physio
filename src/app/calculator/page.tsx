import BBSCalculator from '@/components/BBSCalculator';
import Footer from '@/components/Footer';

export default function CalculatorPage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <main className="flex-grow py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-slate-900">Berg Balance Scale (BBS) Calculator</h1>
                        <p className="mt-2 text-slate-600">
                            A 14-item objective measure designed to assess static balance and fall risk in adult populations.
                        </p>
                    </div>
                    <BBSCalculator />
                </div>
            </main>
            <Footer />
        </div>
    );
}
