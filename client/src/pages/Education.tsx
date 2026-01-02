import { useProducts } from "@/hooks/use-products";
import { BookOpen, Star, ShieldCheck, Download } from "lucide-react";

export default function Education() {
  const { data: products, isLoading } = useProducts();
  
  // Filter books and courses
  const books = products?.filter(p => p.category === 'book' || p.category === 'course') || [];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white border-b border-slate-200 pt-20 pb-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-4xl font-bold font-display text-slate-900 mb-4">Trading Education</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Master the markets with our comprehensive library of ebooks, video courses, and strategy guides.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Featured Books</h2>
          <div className="h-px bg-slate-200 flex-grow" />
        </div>

        {isLoading ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             {[1, 2, 3].map(i => <div key={i} className="h-80 bg-slate-200 rounded-xl animate-pulse" />)}
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div key={book.id} className="flex flex-col bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-56 bg-slate-100 relative overflow-hidden group">
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 bg-secondary text-white px-4 py-1 rounded-bl-xl font-bold text-sm shadow-sm">
                    {book.category === 'course' ? 'Video Course' : 'E-Book'}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex gap-1 text-yellow-400 mb-3">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">{book.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">{book.description}</p>
                  
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-slate-900">${book.price.toFixed(2)}</span>
                      <span className="text-xs text-slate-400 line-through">${(book.price * 1.5).toFixed(2)}</span>
                    </div>
                    <button className="w-full btn-primary py-3 flex items-center justify-center gap-2">
                      <Download size={18} /> Buy & Download
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {books.length === 0 && (
              <div className="col-span-full py-12 text-center bg-white rounded-xl border border-dashed border-slate-300">
                <p className="text-slate-500">No books currently available. Check back soon.</p>
              </div>
            )}
          </div>
        )}

        {/* Trust Note */}
        <div className="mt-12 bg-blue-50 border border-blue-100 rounded-xl p-6 flex items-start gap-4">
          <ShieldCheck className="h-6 w-6 text-primary shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-slate-900 mb-1">Secure Digital Delivery</h4>
            <p className="text-sm text-slate-600">
              All digital products are delivered instantly to your email upon purchase. 
              If you do not receive your download link within 5 minutes, please contact support with your payment receipt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
