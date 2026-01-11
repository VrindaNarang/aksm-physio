import Link from 'next/link';
import Footer from '@/components/Footer';
import { UserGroupIcon, ClipboardDocumentCheckIcon, HeartIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-teal-700 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 pt-20 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">AKSM Physiotherapy</span>{' '}
                  <span className="block text-teal-200 xl:inline">Restoring Balance & Mobility</span>
                </h1>
                <p className="mt-3 text-base text-teal-50 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Evidence-based physiotherapy specializing in geriatric care, fall prevention, and neurological rehabilitation.
                  Assessed by Dr. Komal Aditi Kapoor.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      href="/calculator"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-teal-700 bg-white hover:bg-teal-50 md:py-4 md:text-lg md:px-10 transition-all shadow-lg hover:shadow-xl"
                    >
                      Visit Balance Calculator
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#services"
                      className="w-full flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white/10 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Meet the Expert</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Dr. Komal Aditi Kapoor
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="max-w-3xl text-center">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Lead Physiotherapist</h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                With a Bachelor of Physiotherapy (Honours) and extensive experience in clinical settings, Dr. Kapoor specializes in designing personalized rehabilitation programs. Her approach combines clinical expertise with compassionate care to help patients regain independence.
              </p>
              <ul className="space-y-3 inline-block text-left">
                <li className="flex items-center text-slate-700">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-teal-500 mr-3" />
                  Bachelor of Physiotherapy (Honours)
                </li>
                <li className="flex items-center text-slate-700">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-teal-500 mr-3" />
                  Specialist in Neurological & Geriatric Rehabilitation
                </li>
                <li className="flex items-center text-slate-700">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-teal-500 mr-3" />
                  Certified in Fall Prevention Strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive Care Services
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white overflow-hidden shadow rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mb-4">
                  <HeartIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">Balance Training</h3>
                <p className="mt-2 text-base text-slate-500">
                  Targeted exercises to improve stability, prevent falls, and build confidence in daily movements.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white overflow-hidden shadow rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mb-4">
                  <UserGroupIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">Gait Rehabilitation</h3>
                <p className="mt-2 text-base text-slate-500">
                  Analysis and correction of walking patterns to enhance mobility and reduce pain.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white overflow-hidden shadow rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-teal-500 text-white mb-4">
                  <ClipboardDocumentCheckIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-medium text-slate-900">Clinical Assessment</h3>
                <p className="mt-2 text-base text-slate-500">
                  Detailed evaluations using standardized tools like the Berg Balance Scale to track progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
