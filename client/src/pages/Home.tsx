import { Link } from "wouter";
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Users } from "lucide-react";
import { MarketTicker } from "@/components/MarketTicker";
import { useProducts } from "@/hooks/use-products";
import { motion } from "framer-motion";

export default function Home() {
  const { data: products } = useProducts();
  const tools = products?.filter(p => p.category === 'tool').slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <MarketTicker />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-16 pb-20 lg:pt-32 lg:pb-28">
        <div className="absolute inset-0 bg-[url('https://pixabay.com/get/gb26c8106dd4f4b53fc25c967fefd35e5fc8763f07fc345c8ace2f9ae6d44eb65f3b75a0217eb203a1478d96a984decb08c068d829d453cf57cbae1415f6dd68e_1280.png')] bg-cover bg-center opacity-[0.03]" />
        
        {/* Abstract Gradient Background */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] bg-secondary/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl font-display"
            >
              Professional Trading Intelligence for the 
              <span className="text-primary"> Modern Market</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
            >
              Access live market data, institutional-grade tools, and expert education. 
              Join thousands of traders who trust TechForex for their daily analysis.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link href="/markets">
                <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                  View Live Markets <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/tools">
                <button className="btn-secondary w-full sm:w-auto">
                  Explore Tools
                </button>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Real-time Data</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Expert Analysis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Secure Platform</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-primary mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Live Market Analytics</h3>
              <p className="text-slate-600 leading-relaxed">
                Stay ahead of the curve with our real-time price feeds for Forex, Crypto, and Commodities. Visualize trends instantly.
              </p>
            </div>
            
            <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-600 mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trusted Education</h3>
              <p className="text-slate-600 leading-relaxed">
                Learn from the best with our curated books and courses. From beginner basics to advanced technical analysis.
              </p>
            </div>
            
            <div className="flex flex-col items-start p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trader Community</h3>
              <p className="text-slate-600 leading-relaxed">
                Join a growing network of serious traders. Share insights, discuss strategies, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Preview */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Professional Trading Tools</h2>
              <p className="text-slate-600 max-w-2xl">
                Enhance your trading efficiency with our specialized calculators and indicators.
              </p>
            </div>
            <Link href="/tools" className="hidden sm:flex text-primary font-semibold items-center hover:underline">
              View All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {tools?.map((tool) => (
              <div key={tool.id} className="group bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="aspect-video w-full overflow-hidden bg-slate-100 relative">
                  <img 
                    src={tool.imageUrl} 
                    alt={tool.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{tool.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{tool.description}</p>
                  <Link href={`/tools`}>
                    <span className="text-sm font-semibold text-primary cursor-pointer hover:underline">Try Tool</span>
                  </Link>
                </div>
              </div>
            ))}
            {!tools?.length && (
              <div className="col-span-3 text-center py-12 text-slate-500">
                Loading tools...
              </div>
            )}
          </div>
          
          <div className="mt-8 text-center sm:hidden">
            <Link href="/tools" className="text-primary font-semibold inline-flex items-center hover:underline">
              View All Tools <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to elevate your trading?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of traders using TechForex to make smarter, data-driven decisions every day.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/education">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-blue-50 transition-colors">
                Start Learning
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-blue-700 text-white border border-blue-500 px-8 py-3 rounded-lg font-bold hover:bg-blue-600 transition-colors">
                Contact Sales
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
